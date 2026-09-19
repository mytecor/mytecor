const PAGE_SIZE_STYLE_ID = "dynamic-page-size";

async function waitForImages() {
  await Promise.all(
    [...document.images].map((image) => {
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    }),
  );
}

async function nextLayout() {
  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}

function setPageSize(width, height) {
  let style = document.getElementById(PAGE_SIZE_STYLE_ID);

  if (!style) {
    style = document.createElement("style");
    style.id = PAGE_SIZE_STYLE_ID;
    document.head.appendChild(style);
  }

  style.textContent = `
    @page {
      size: ${width}px ${height}px;
      margin: 0;
    }
  `;
}

async function preparePageSize() {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await waitForImages();
  await nextLayout();

  const cv = document.querySelector("#cv");

  if (!cv) {
    throw new Error("#cv not found");
  }

  const rect = cv.getBoundingClientRect();

  const width = Math.ceil(rect.width);

  const height = Math.ceil(
    Math.max(
      rect.height,
      cv.scrollHeight,
    ),
  );

  if (
    !Number.isFinite(width) ||
    !Number.isFinite(height) ||
    width <= 0 ||
    height <= 0
  ) {
    throw new Error(
      `Invalid page dimensions: ${width}x${height}`,
    );
  }

  setPageSize(width, height);

  return {
    width,
    height,
  };
}

async function printPage() {
  await window.pageSizeReady;
  window.print();
}

window.preparePageSize = preparePageSize;
window.printPage = printPage;

// Kick off sizing as part of normal page initialization and expose a
// Promise so both the browser and CI can await the already-prepared state.
window.pageSizeReady = preparePageSize();
