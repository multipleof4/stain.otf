const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphM = (opentype, adv) =>
  makeGlyph(
    opentype,
    "M",
    "M".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(160, 700);
      p.lineTo(370, 140);
      p.lineTo(580, 700);
      p.lineTo(640, 700);
      p.lineTo(640, 0);
      p.lineTo(580, 0);
      p.lineTo(580, 580);
      p.lineTo(390, 60);
      p.lineTo(350, 60);
      p.lineTo(160, 580);
      p.lineTo(160, 0);
      p.close();
      return p;
    },
    740
  );

export const glyphm = (opentype, adv) =>
  makeGlyph(
    opentype,
    "m",
    "m".codePointAt(0),
    (p) => {
      p.moveTo(80, 0);
      p.lineTo(80, 480);
      p.lineTo(140, 480);
      p.lineTo(140, 440);
      p.curveTo(170, 470, 210, 490, 260, 490);
      p.curveTo(320, 490, 360, 460, 380, 410);
      p.curveTo(410, 460, 460, 490, 520, 490);
      p.curveTo(610, 490, 660, 440, 660, 330);
      p.lineTo(660, 0);
      p.lineTo(600, 0);
      p.lineTo(600, 330);
      p.curveTo(600, 400, 570, 430, 520, 430);
      p.curveTo(460, 430, 420, 390, 420, 310);
      p.lineTo(420, 0);
      p.lineTo(360, 0);
      p.lineTo(360, 310);
      p.curveTo(360, 390, 320, 430, 260, 430);
      p.curveTo(200, 430, 140, 390, 140, 300);
      p.lineTo(140, 0);
      p.close();
      return p;
    },
    740
  );
