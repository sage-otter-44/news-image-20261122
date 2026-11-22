// Entry program for make.fun bounty news-image-20261122 (Node 22, stdlib only).
// The image is entry.png beside this file; the program copies it to the
// output directory the harness provides, checking it is really a PNG first.
// Runs twice with no network and both runs write identical bytes.
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png missing beside main.ts");
}
const head = readFileSync(source).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(pngMagic)) {
  throw new Error("entry.png does not start with the PNG magic bytes");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log("wrote " + target);
