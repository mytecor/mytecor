import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "../..");
const readmePath = path.join(repoRoot, "README.md");
const stylesPath = path.join(__dirname, "styles.css");
const outputDir = path.join(repoRoot, ".site");

await fs.rm(outputDir, {
  recursive: true,
  force: true,
});

await fs.mkdir(outputDir, {
  recursive: true,
});

const markdown = await fs.readFile(readmePath, "utf8");
const css = await fs.readFile(stylesPath, "utf8");
const printJs = await fs.readFile(
  path.join(__dirname, "print.js"),
  "utf8",
);

marked.setOptions({
  gfm: true,
  breaks: false,
});

const rendered = await marked.parse(markdown);

// Wrap the trailing "· <a href="...cv.pdf">CV PDF</a>" (separator dot
// and link) in a span so both are hidden together in the print layout.
const wrapped = rendered.replace(
  /\s*·\s*<a href="([^"]*cv\.pdf)"[^>]*>CV PDF<\/a>/,
  (match, href) =>
    ` <span class="cv-pdf-link">· <a href="${href}">CV PDF</a></span>`,
);

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >

  <title>CV</title>

  <style>
${css}
  </style>
</head>

<body>
  <main id="cv">
    ${wrapped}
  </main>

  <script src="./print.js"></script>
</body>
</html>
`;

await fs.writeFile(
  path.join(outputDir, "print.js"),
  printJs,
  "utf8",
);

await fs.writeFile(
  path.join(outputDir, "index.html"),
  html,
  "utf8",
);

console.log(
  `Built ${path.relative(repoRoot, path.join(outputDir, "index.html"))}`
);
