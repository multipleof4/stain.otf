const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphA = (opentype, adv) =>
  makeGlyph(
    opentype,
    "A",
    "A".codePointAt(0),
    (p) => {
      p.moveTo(50, 0);
      p.lineTo(280, 700);
      p.lineTo(320, 700);
      p.lineTo(550, 0);
      p.lineTo(480, 0);
      p.lineTo(430, 180);
      p.lineTo(170, 180);
      p.lineTo(120, 0);
      p.close();
      p.moveTo(195, 240);
      p.lineTo(405, 240);
      p.lineTo(300, 620);
      p.close();
      return p;
    },
    adv
  );

export const glypha = (opentype, adv) =>
  makeGlyph(
    opentype,
    "a",
    "a".codePointAt(0),
    (p) => {
      p.moveTo(510, 0);
      p.lineTo(510, 480);
      p.lineTo(300, 480);
      p.curveTo(180, 480, 90, 380, 90, 240);
      p.curveTo(90, 100, 180, 0, 300, 0);
      p.close();
      p.moveTo(300, 60);
      p.curveTo(210, 60, 150, 130, 150, 240);
      p.curveTo(150, 350, 210, 420, 300, 420);
      p.lineTo(450, 420);
      p.lineTo(450, 60);
      p.close();
      return p;
    },
    adv
  );
