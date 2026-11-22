// Render frontpage.svg into entry.png with headless Chromium (Playwright).
// Usage: node render.mjs [outDir]  (default: this directory)
// Writes entry.png at exactly 1024x1024. Deterministic: same SVG in, same PNG out.
// Playwright lives in the shared shot-tools dir, not in this repo:
// PLAYWRIGHT_CORE may name its package dir, else ~/.shot-tools is used.
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";

const require = createRequire(import.meta.url);
const home = process.env.HOME || "";
const pwPath = process.env.PLAYWRIGHT_CORE
  || join(home, "workspace/makefun/.shot-tools/node_modules/playwright-core");
const { chromium } = require(pwPath);

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.argv[2] ? process.argv[2] : here;
const pagePath = join(here, "page.html");
const shotPath = join(outDir, "entry.png");
const chromePath = process.env.CHROME_PATH
  || join(process.env.HOME || "", ".cache/ms-playwright/chromium-1255/chrome-linux64/chrome");

if (!existsSync(chromePath)) {
  console.error("Chrome not found at " + chromePath);
  process.exit(1);
}

const browser = await chromium.launch({
  executablePath: chromePath,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--force-device-scale-factor=1"],
});
try {
  const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
  await page.goto("file://" + pagePath, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.screenshot({ path: shotPath, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
  console.log("wrote " + shotPath);
} finally {
  await browser.close();
}
