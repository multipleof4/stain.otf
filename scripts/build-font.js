import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import opentype from "opentype.js";
import { buildGlyph, METRICS, SUPPORTED_CHARS } from "../src/glyphs.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "..", "dist");
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

const FAMILY = "Stain";
const STYLE = "Regular";

function buildNotdef() {
  const w = 600;
  const p = new opentype.Path();
  const m = 60;
  p.moveTo(m, METRICS.descender);
  p.lineTo(w - m, METRICS.descender);
  p.lineTo(w - m, METRICS.ascender);
  p.lineTo(m, METRICS.ascender);
  p.close();
  p.moveTo(m + 60, METRICS.descender + 60);
  p.lineTo(w - m - 60, METRICS.descender + 60);
  p.lineTo(w - m - 60, METRICS.ascender - 60);
  p.lineTo(m + 60, METRICS.ascender - 60);
  p.close();
  return new opentype.Glyph({
    name: ".notdef",
    unicode: 0,
    advanceWidth: w,
    path: p
  });
}

function createGlyph(ch) {
  const unicode = ch.codePointAt(0);
  const { path, width } = buildGlyph(ch);
  return new opentype.Glyph({
    name: ch === " " ? "space" : `uni${unicode.toString(16).toUpperCase()}`,
    unicode,
    advanceWidth: width,
    path
  });
}

function buildFont() {
  const glyphs = [buildNotdef()];
  SUPPORTED_CHARS.forEach(ch => glyphs.push(createGlyph(ch)));

  const font = new opentype.Font({
    familyName: FAMILY,
    styleName: STYLE,
    unitsPerEm: METRICS.unitsPerEm,
    ascender: METRICS.ascender,
    descender: METRICS.descender,
    glyphs
  });

  const ttf = Buffer.from(font.toArrayBuffer());
  const out = path.join(distDir, "Stain-Regular.ttf");
  fs.writeFileSync(out, ttf);
  console.log(`Built: ${out}`);
}

buildFont();
