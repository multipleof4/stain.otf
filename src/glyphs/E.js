const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphE = (opentype, adv) =>
  makeGlyph(
    opentype,
    "E",
    "E".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(520, 700);
      p.lineTo(520, 640);
      p.lineTo(160, 640);
      p.lineTo(160, 380);
      p.lineTo(480, 380);
      p.lineTo(480, 320);
      p.lineTo(160, 320);
      p.lineTo(160, 60);
      p.lineTo(520, 60);
      p.lineTo(520, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphe = (opentype, adv) =>
  makeGlyph(
    opentype,
    "e",
    "e".codePointAt(0),
    (p) => {
      p.moveTo(330, -10);
      p.curveTo(200, -10, 110, 80, 110, 240);
      p.curveTo(110, 400, 200, 490, 330, 490);
      p.curveTo(450, 490, 530, 410, 540, 290);
      p.lineTo(170, 290);
      p.curveTo(180, 150, 240, 50, 330, 50);
      p.curveTo(400, 50, 450, 80, 480, 140);
      p.lineTo(530, 110);
      p.curveTo(490, 30, 420, -10, 330, -10);
      p.close();
      p.moveTo(170, 340);
      p.lineTo(480, 340);
      p.curveTo(470, 400, 410, 430, 330, 430);
      p.curveTo(240, 430, 180, 400, 170, 340);
      p.close();
      return p;
    },
    adv
  );
