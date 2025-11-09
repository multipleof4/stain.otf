const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(
      new opentype.Path()
    )
  });

export const glyphC = (opentype, adv) =>
  makeGlyph(
    opentype,
    "C",
    "C".codePointAt(0),
    (p) => {
      p.moveTo(520, 620);
      p.curveTo(470, 700, 400, 740, 310, 740);
      p.curveTo(180, 740, 90, 640, 90, 400);
      p.curveTo(90, 160, 180, 60, 310, 60);
      p.curveTo(400, 60, 470, 100, 520, 180);
      p.lineTo(450, 220);
      p.curveTo(420, 170, 380, 140, 320, 140);
      p.curveTo(230, 140, 170, 210, 170, 400);
      p.curveTo(170, 590, 230, 660, 320, 660);
      p.curveTo(380, 660, 420, 630, 450, 580);
      p.close();
      return p;
    },
    adv
  );

export const glyphc = (opentype, adv) =>
  makeGlyph(
    opentype,
    "c",
    "c".codePointAt(0),
    (p) => {
      p.moveTo(480, 420);
      p.curveTo(450, 500, 390, 540, 310, 540);
      p.curveTo(200, 540, 120, 450, 120, 320);
      p.curveTo(120, 190, 200, 100, 310, 100);
      p.curveTo(390, 100, 450, 140, 480, 220);
      p.lineTo(410, 250);
      p.curveTo(390, 200, 350, 180, 310, 180);
      p.curveTo(240, 180, 190, 230, 190, 320);
      p.curveTo(190, 410, 240, 460, 310, 460);
      p.curveTo(350, 460, 390, 440, 410, 390);
      p.close();
      return p;
    },
    adv
  );
