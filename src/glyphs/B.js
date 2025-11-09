const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphB = (opentype, adv) =>
  makeGlyph(
    opentype,
    "B",
    "B".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 700);
      p.lineTo(350, 700);
      p.curveTo(500, 700, 550, 600, 550, 525);
      p.curveTo(550, 450, 500, 350, 350, 350);
      p.lineTo(380, 350);
      p.curveTo(520, 350, 580, 250, 580, 175);
      p.curveTo(580, 100, 520, 0, 380, 0);
      p.close();
      p.moveTo(160, 410);
      p.lineTo(340, 410);
      p.curveTo(450, 410, 490, 460, 490, 525);
      p.curveTo(490, 590, 450, 640, 340, 640);
      p.lineTo(160, 640);
      p.close();
      p.moveTo(160, 60);
      p.lineTo(360, 60);
      p.curveTo(480, 60, 520, 110, 520, 175);
      p.curveTo(520, 240, 480, 290, 360, 290);
      p.lineTo(160, 290);
      p.close();
      return p;
    },
    adv
  );

export const glyphb = (opentype, adv) =>
  makeGlyph(
    opentype,
    "b",
    "b".codePointAt(0),
    (p) => {
      p.moveTo(100, 0);
      p.lineTo(100, 720);
      p.lineTo(160, 720);
      p.lineTo(160, 440);
      p.curveTo(200, 470, 250, 490, 310, 490);
      p.curveTo(430, 490, 520, 400, 520, 280);
      p.curveTo(520, 160, 430, 70, 310, 70);
      p.curveTo(250, 70, 200, 90, 160, 120);
      p.lineTo(160, 0);
      p.close();
      p.moveTo(310, 130);
      p.curveTo(400, 130, 460, 190, 460, 280);
      p.curveTo(460, 370, 400, 430, 310, 430);
      p.curveTo(220, 430, 160, 370, 160, 280);
      p.curveTo(160, 190, 220, 130, 310, 130);
      p.close();
      return p;
    },
    adv
  );
