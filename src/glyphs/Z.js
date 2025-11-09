const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphZ = (opentype, adv) =>
  makeGlyph(
    opentype,
    "Z",
    "Z".codePointAt(0),
    (p) => {
      p.moveTo(80, 0);
      p.lineTo(80, 60);
      p.lineTo(440, 640);
      p.lineTo(90, 640);
      p.lineTo(90, 700);
      p.lineTo(520, 700);
      p.lineTo(520, 640);
      p.lineTo(160, 60);
      p.lineTo(520, 60);
      p.lineTo(520, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphz = (opentype, adv) =>
  makeGlyph(
    opentype,
    "z",
    "z".codePointAt(0),
    (p) => {
      p.moveTo(80, 0);
      p.lineTo(80, 50);
      p.lineTo(380, 430);
      p.lineTo(90, 430);
      p.lineTo(90, 480);
      p.lineTo(460, 480);
      p.lineTo(460, 430);
      p.lineTo(160, 50);
      p.lineTo(460, 50);
      p.lineTo(460, 0);
      p.close();
      return p;
    },
    adv
  );
