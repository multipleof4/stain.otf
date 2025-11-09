const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphP = (opentype, adv) =>
  makeGlyph(
    opentype,
    "P",
    "P".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(340, 700);
      p.curveTo(470, 700, 560, 630, 560, 520);
      p.curveTo(560, 410, 470, 340, 340, 340);
      p.lineTo(160, 340);
      p.lineTo(160, 0);
      p.close();
      p.moveTo(160, 400);
      p.lineTo(340, 400);
      p.curveTo(440, 400, 500, 450, 500, 520);
      p.curveTo(500, 590, 440, 640, 340, 640);
      p.lineTo(160, 640);
      p.close();
      return p;
    },
    adv
  );

export const glyphp = (opentype, adv) =>
  makeGlyph(
    opentype,
    "p",
    "p".codePointAt(0),
    (p) => {
      p.moveTo(100, -150);
      p.lineTo(100, 480);
      p.lineTo(160, 480);
      p.lineTo(160, 440);
      p.curveTo(200, 470, 250, 490, 310, 490);
      p.curveTo(430, 490, 520, 400, 520, 240);
      p.curveTo(520, 80, 430, -10, 310, -10);
      p.curveTo(250, -10, 200, 10, 160, 40);
      p.lineTo(160, -150);
      p.close();
      p.moveTo(310, 50);
      p.curveTo(400, 50, 460, 110, 460, 240);
      p.curveTo(460, 370, 400, 430, 310, 430);
      p.curveTo(220, 430, 160, 370, 160, 240);
      p.curveTo(160, 110, 220, 50, 310, 50);
      p.close();
      return p;
    },
    adv
  );
