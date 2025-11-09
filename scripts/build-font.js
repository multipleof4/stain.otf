import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import opentype from "opentype.js";
import { glyphA, glypha } from "../src/glyphs/A.js";
import { glyphB, glyphb } from "../src/glyphs/B.js";
import { glyphC, glyphc } from "../src/glyphs/C.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(__dirname, "..", "dist");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const familyName = "Stain";
const unitsPerEm = 1000;
const ascender = 800;
const descender = -200;
const advanceWidth = 600;

const glyphs = [
  glyphA(opentype, advanceWidth),
  glypha(opentype, advanceWidth),
  glyphB(opentype, advanceWidth),
  glyphb(opentype, advanceWidth),
  glyphC(opentype, advanceWidth),
  glyphc(opentype, advanceWidth)
];

const font = new opentype.Font({
  familyName,
  styleName: "Regular",
  unitsPerEm,
  ascender,
  descender,
  glyphs
});

const otfBuffer = Buffer.from(font.toArrayBuffer());
const baseName = "Stain";
const otfPath = path.join(outDir, `${baseName}.otf`);
fs.writeFileSync(otfPath, otfBuffer);

console.log(`Built ${otfPath}`);
