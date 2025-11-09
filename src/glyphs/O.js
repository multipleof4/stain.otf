const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphO = (opentype, adv) =>
  makeGlyph(
    opentype,
    "O",
    "O".codePointAt(0),
    (p) => {
      p.moveTo(300, -10);
      p.curveTo(160, -10, 60, 100, 60, 280);
      p.lineTo(60, 420);
      p.curveTo(60, 600, 160, 710, 300, 710);
      p.curveTo(440, 710, 540, 600, 540, 420);
      p.lineTo(540, 280);
      p.curveTo(540, 100, 440, -10, 300, -10);
      p.close();
      p.moveTo(300, 50);
      p.curveTo(410, 50, 480, 130, 480, 280);
      p.lineTo(480, 420);
      p.curveTo(480, 570, 410, 650, 300, 650);
      p.curveTo(190, 650, 120, 570, 120, 420);
      p.lineTo(120, 280);
      p.curveTo(120, 130, 190, 50, 300, 50);
      p.close();
      return p;
    },
    adv
  );

export const glypho = (opentype, adv) =>
  makeGlyph(
    opentype,
    "o",
    "o".codePointAt(0),
    (p) => {
      p.moveTo(300, -10);
      p.curveTo(180, -10, 90, 80, 90, 240);
      p.curveTo(90, 400, 180, 490, 300, 490);
      p.curveTo(420, 490, 510, 400, 510, 240);
      p.curveTo(510, 80, 420, -10, 300, -10);
      p.close();
      p.moveTo(300, 50);
      p.curveTo(390, 50, 450, 110, 450, 240);
      p.curveTo(450, 370, 390, 430, 300, 430);
      p.curveTo(210, 430, 150, 370, 150, 240);
      p.curveTo(150, 110, 210, 50, 300, 50);
      p.close();
      return p;
    },
    adv
  );
