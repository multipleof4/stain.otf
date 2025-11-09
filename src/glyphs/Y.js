const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphY = (opentype, adv) =>
  makeGlyph(
    opentype,
    "Y",
    "Y".codePointAt(0),
    (p) => {
      p.moveTo(50, 700);
      p.lineTo(120, 700);
      p.lineTo(300, 330);
      p.lineTo(480, 700);
      p.lineTo(550, 700);
      p.lineTo(330, 260);
      p.lineTo(330, 0);
      p.lineTo(270, 0);
      p.lineTo(270, 260);
      p.close();
      return p;
    },
    adv
  );

export const glypthy = (opentype, adv) =>
  makeGlyph(
    opentype,
    "y",
    "y".codePointAt(0),
    (p) => {
      p.moveTo(60, 480);
      p.lineTo(130, 480);
      p.lineTo(270, 120);
      p.lineTo(410, 480);
      p.lineTo(480, 480);
      p.lineTo(300, 0);
      p.lineTo(240, -150);
      p.curveTo(220, -190, 190, -210, 150, -210);
      p.curveTo(120, -210, 100, -200, 80, -180);
      p.lineTo(100, -130);
      p.curveTo(120, -140, 130, -150, 150, -150);
      p.curveTo(170, -150, 180, -140, 190, -110);
      p.lineTo(210, -60);
      p.close();
      return p;
    },
    adv
  );
