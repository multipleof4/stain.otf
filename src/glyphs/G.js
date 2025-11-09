const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphG = (opentype, adv) =>
  makeGlyph(
    opentype,
    "G",
    "G".codePointAt(0),
    (p) => {
      p.moveTo(350, -10);
      p.curveTo(190, -10, 80, 100, 80, 280);
      p.lineTo(80, 420);
      p.curveTo(80, 600, 190, 710, 350, 710);
      p.curveTo(460, 710, 540, 660, 580, 570);
      p.lineTo(520, 540);
      p.curveTo(490, 610, 430, 650, 350, 650);
      p.curveTo(220, 650, 140, 570, 140, 420);
      p.lineTo(140, 280);
      p.curveTo(140, 130, 220, 50, 350, 50);
      p.curveTo(450, 50, 520, 100, 540, 190);
      p.lineTo(340, 190);
      p.lineTo(340, 250);
      p.lineTo(600, 250);
      p.lineTo(600, 220);
      p.curveTo(600, 70, 500, -10, 350, -10);
      p.close();
      return p;
    },
    adv
  );

export const glyphg = (opentype, adv) =>
  makeGlyph(
    opentype,
    "g",
    "g".codePointAt(0),
    (p) => {
      p.moveTo(450, 480);
      p.lineTo(300, 480);
      p.curveTo(180, 480, 90, 380, 90, 240);
      p.curveTo(90, 100, 180, 0, 300, 0);
      p.lineTo(450, 0);
      p.close();
      p.moveTo(300, 60);
      p.curveTo(210, 60, 150, 130, 150, 240);
      p.curveTo(150, 350, 210, 420, 300, 420);
      p.lineTo(390, 420);
      p.lineTo(390, 60);
      p.close();
      p.moveTo(450, 420);
      p.lineTo(450, -150);
      p.curveTo(450, -210, 380, -250, 300, -250);
      p.curveTo(220, -250, 150, -210, 150, -150);
      p.lineTo(210, -150);
      p.curveTo(210, -180, 250, -200, 300, -200);
      p.curveTo(350, -200, 390, -180, 390, -150);
      p.lineTo(390, 420);
      p.close();
      return p;
    },
    adv
  );
