import opentype from 'opentype.js';
import { writeFileSync, existsSync, mkdirSync } from 'fs';

const UPM = 1000, ASC = 800, DSC = -200;

const glyphs = [
  { name: '.notdef', unicode: 0, path: 'M0 0 H500 V700 H0 Z', adv: 600 },
  { name: 'space', unicode: 32, path: '', adv: 400 },
  { name: 'A', unicode: 65, path: 'M100 0 L300 700 L500 0 M150 300 H450', adv: 600 },
  { name: 'B', unicode: 66, path: 'M100 0 V700 H300 C500 700 500 525 300 525 H100 M100 375 H320 C550 375 550 0 320 0 H100', adv: 580 },
  { name: 'C', unicode: 67, path: 'M480 600 C480 750 100 750 100 350 C100 -50 480 -50 480 100', adv: 550 },
  { name: 'a', unicode: 97, path: 'M420 0 V500 H250 C100 500 100 0 250 0 H420 Z M420 100 V0', adv: 500 },
  { name: 'b', unicode: 98, path: 'M100 0 V700 M100 0 H275 C450 0 450 500 275 500 H100', adv: 500 },
  { name: 'c', unicode: 99, path: 'M400 420 C400 520 100 520 100 250 C100 -20 400 -20 400 80', adv: 450 },
].map(g => {
  const p = new opentype.Path();
  p.commands = opentype.parsePath(g.path).commands;
  return new opentype.Glyph({
    name: g.name,
    unicode: g.unicode,
    advanceWidth: g.adv,
    path: p,
  });
});

const font = new opentype.Font({
  familyName: 'Stain',
  styleName: 'Regular',
  unitsPerEm: UPM,
  ascender: ASC,
  descender: DSC,
  glyphs,
});

if (!existsSync('dist')) mkdirSync('dist');
writeFileSync('dist/Stain.otf', font.toArrayBuffer());

console.log('Stain.otf built successfully.');
