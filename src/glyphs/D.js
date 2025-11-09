const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphD = (opentype, adv) =>
  makeGlyph(
    opentype,
    "D",
    "D".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(320, 700);
      p.curveTo(480, 700, 580, 590, 580, 420);
      p.lineTo(580, 280);
      p.curveTo(580, 110, 480, 0, 320, 0);
      p.close();
      p.moveTo(160, 60);
      p.lineTo(320, 60);
      p.curveTo(450, 60, 520, 140, 520, 280);
      p.lineTo(520, 420);
      p.curveTo(520, 560, 450, 640, 320, 640);
      p.lineTo(160, 640);
      p.close();
      return p;
    },
    adv
  );

export const glyphd = (opentype, adv) =>
  makeGlyph(
    opentype,
    "d",
    "d".codePointAt(0),
    (p) => {
      p.moveTo(310, -10);
      p.curveTo(250, -10, 200, 10, 160, 40);
      p.lineTo(160, 0);
      p.lineTo(100, 0);
      p.lineTo(100, 720);
      p.lineTo(160, 720);
      p.lineTo(160, 440);
      p.curveTo(200, 470, 250, 490, 310, 490);
      p.curveTo(430, 490, 520, 400, 520, 240);
      p.curveTo(520, 80, 430, -10, 310, -10);
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
