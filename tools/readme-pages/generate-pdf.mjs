import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The PDF is generated from the locally-built site (build.mjs output),
// so it does not depend on a deployed Pages instance being reachable.
const siteDir = path.resolve(__dirname, "../../.site");
const indexFile = path.join(siteDir, "index.html");
const pagesUrl = pathToFileURL(indexFile).href;

const artifactsDir = path.resolve(
  __dirname,
  "../../artifacts",
);

const outputPath = path.join(
  artifactsDir,
  "cv.pdf",
);

await fs.mkdir(artifactsDir, {
  recursive: true,
});

const browser = await chromium.launch({
  headless: true,
});

try {
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 800,
    },
  });

  await page.goto(pagesUrl, {
    waitUntil: "networkidle",
    timeout: 60_000,
  });

  await page.emulateMedia({
    media: "print",
  });

  const size = await page.evaluate(async () => {
    if (window.pageSizeReady) {
      return await window.pageSizeReady;
    }

    if (typeof window.preparePageSize === "function") {
      return await window.preparePageSize();
    }

    throw new Error("Page size initialization is not available");
  });

  console.log(
    `Print page: ${size.width}px × ${size.height}px`,
  );

  await page.pdf({
    path: outputPath,
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
  });

  console.log(`PDF created: ${outputPath}`);
} finally {
  await browser.close();
}
