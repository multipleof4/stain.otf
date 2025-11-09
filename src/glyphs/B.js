const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(
      new opentype.Path()
    )
  });

export const glyphB = (opentype, adv) =>
  makeGlyph(
    opentype,
    "B",
    "B".codePointAt(0),
    (p) => {
      p.moveTo(120, 0);
      p.lineTo(120, 800);
      p.lineTo(360, 800);
      p.curveTo(470, 800, 540, 730, 540, 640);
      p.curveTo(540, 560, 500, 510, 430, 490);
      p.curveTo(520, 470, 570, 410, 570, 320);
      p.curveTo(570, 190, 480, 120, 340, 120);
      p.lineTo(120, 120);
      p.close();
      p.moveTo(210, 180);
      p.lineTo(340, 180);
      p.curveTo(420, 180, 460, 220, 460, 300);
      p.curveTo(460, 380, 420, 420, 340, 420);
      p.lineTo(210, 420);
      p.close();
      p.moveTo(210, 480);
      p.lineTo(350, 480);
      p.curveTo(420, 480, 450, 510, 450, 580);
      p.curveTo(450, 650, 420, 680, 350, 680);
      p.lineTo(210, 680);
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
      p.moveTo(120, 0);
      p.lineTo(120, 800);
      p.lineTo(200, 800);
      p.lineTo(200, 460);
      p.curveTo(240, 510, 300, 540, 360, 540);
      p.curveTo(470, 540, 550, 450, 550, 320);
      p.curveTo(550, 190, 470, 100, 360, 100);
      p.curveTo(290, 100, 230, 130, 190, 190);
      p.lineTo(190, 0);
      p.close();
      p.moveTo(360, 160);
      p.curveTo(430, 160, 480, 210, 480, 320);
      p.curveTo(480, 430, 430, 480, 360, 480);
      p.curveTo(290, 480, 240, 430, 240, 320);
      p.curveTo(240, 210, 290, 160, 360, 160);
      p.close();
      return p;
    },
    adv
  );
