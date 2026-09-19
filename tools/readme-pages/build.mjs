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

for (const asset of ["og.jpg", "favicon.png", "favicon.svg"]) {
  await fs.copyFile(
    path.join(__dirname, asset),
    path.join(outputDir, asset),
  );
}

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

  <title>Vladislav Afonin — Software Engineer (Distributed Systems · AI Tooling)</title>
  <meta
    name="description"
    content="CV of Vladislav Afonin, Software Engineer focused on distributed systems, developer infrastructure, and AI tooling."
  >

  <meta
    name="author"
    content="Vladislav Afonin"
  >

  <link
    rel="canonical"
    href="https://myt.su/"
  >

  <meta
    property="og:type"
    content="profile"
  >
  <meta
    property="og:site_name"
    content="Vladislav Afonin — CV"
  >
  <meta
    property="og:title"
    content="Vladislav Afonin — Software Engineer"
  >
  <meta
    property="og:description"
    content="Distributed systems, developer infrastructure, and AI tooling. Yandex FinTech (2022–2026), decentralized systems in Go and Rust, coding-agent infrastructure."
  >
  <meta
    property="og:url"
    content="https://myt.su/"
  >
  <meta
    property="og:image"
    content="https://myt.su/og.jpg"
  >
  <meta
    property="og:image:width"
    content="2400"
  >
  <meta
    property="og:image:height"
    content="1260"
  >
  <meta
    property="og:image:alt"
    content="Vladislav Afonin — Software Engineer. Distributed Systems · Developer Infrastructure · AI Tooling"
  >

  <meta
    name="twitter:card"
    content="summary_large_image"
  >

  <link
    rel="icon"
    type="image/png"
    sizes="256x256"
    href="/favicon.png"
  >
  <link
    rel="icon"
    type="image/svg+xml"
  href="/favicon.svg"
  >

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vladislav Afonin",
    "url": "https://myt.su/",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer focused on distributed systems, developer infrastructure, and AI tooling.",
    "sameAs": [
      "https://github.com/mytecor",
      "https://linkedin.com/in/mytecor",
      "https://t.me/mytecor"
    ],
    "knowsAbout": [
      "Distributed Systems",
      "Developer Infrastructure",
      "AI Tooling",
      "Go",
      "TypeScript",
      "Rust",
      "Kubernetes",
      "NixOS"
    ]
  }
  </script>

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
