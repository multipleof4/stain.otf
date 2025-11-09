const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphW = (opentype, adv) =>
  makeGlyph(
    opentype,
    "W",
    "W".codePointAt(0),
    (p) => {
      p.moveTo(40, 700);
      p.lineTo(110, 700);
      p.lineTo(230, 140);
      p.lineTo(350, 700);
      p.lineTo(410, 700);
      p.lineTo(530, 140);
      p.lineTo(650, 700);
      p.lineTo(720, 700);
      p.lineTo(570, 0);
      p.lineTo(510, 0);
      p.lineTo(380, 600);
      p.lineTo(250, 0);
      p.lineTo(190, 0);
      p.close();
      return p;
    },
    760
  );

export const glyphw = (opentype, adv) =>
  makeGlyph(
    opentype,
    "w",
    "w".codePointAt(0),
    (p) => {
      p.moveTo(50, 480);
      p.lineTo(120, 480);
      p.lineTo(210, 100);
      p.lineTo(300, 480);
      p.lineTo(360, 480);
      p.lineTo(450, 100);
      p.lineTo(540, 480);
      p.lineTo(610, 480);
      p.lineTo(490, 0);
      p.lineTo(430, 0);
      p.lineTo(330, 400);
      p.lineTo(230, 0);
      p.lineTo(170, 0);
      p.close();
      return p;
    },
    660
  );

