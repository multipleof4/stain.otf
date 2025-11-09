const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphK = (opentype, adv) =>
  makeGlyph(
    opentype,
    "K",
    "K".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(160, 700);
      p.lineTo(160, 380);
      p.lineTo(420, 700);
      p.lineTo(500, 700);
      p.lineTo(220, 350);
      p.lineTo(520, 0);
      p.lineTo(440, 0);
      p.lineTo(160, 320);
      p.lineTo(160, 0);
      p.close();
      return p;
    },
    adv
  );

export const glyphk = (opentype, adv) =>
  makeGlyph(
    opentype,
    "k",
    "k".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 720);
      p.lineTo(160, 720);
      p.lineTo(160, 300);
      p.lineTo(380, 480);
      p.lineTo(460, 480);
      p.lineTo(220, 280);
      p.lineTo(480, 0);
      p.lineTo(400, 0);
      p.lineTo(160, 260);
      p.lineTo(160, 0);
      p.close();
      return p;
    },
    adv
  );
