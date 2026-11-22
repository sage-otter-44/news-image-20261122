// Build driver for the news-image-20261122 entry.
// Runs render.mjs, then verifies the PNG it produced: magic bytes, IHDR
// dimensions (must be exactly 1024x1024) and size (at most 1 MiB).
// Usage: node build.mjs
import { spawnSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const pngPath = join(here, "entry.png");

function fail(message) {
  console.error("BUILD FAIL: " + message);
  process.exit(1);
}

const rendered = spawnSync(process.execPath, [join(here, "render.mjs"), here], {
  stdio: "inherit",
  cwd: here,
});
if (rendered.status !== 0) fail("render.mjs exited " + rendered.status);

const bytes = readFileSync(pngPath);
const magic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(magic)) fail("entry.png is not a PNG");
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  fail("dimensions " + width + "x" + height + ", expected 1024x1024");
}
const size = statSync(pngPath).size;
if (size > 1048576) fail("entry.png is " + size + " bytes, over the 1 MiB cap");

console.log("BUILD OK: entry.png " + width + "x" + height + ", " + size + " bytes");
