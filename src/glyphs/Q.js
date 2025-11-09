const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphQ = (opentype, adv) =>
  makeGlyph(
    opentype,
    "Q",
    "Q".codePointAt(0),
    (p) => {
      p.moveTo(300, -10);
      p.curveTo(160, -10, 60, 100, 60, 280);
      p.lineTo(60, 420);
      p.curveTo(60, 600, 160, 710, 300, 710);
      p.curveTo(440, 710, 540, 600, 540, 420);
      p.lineTo(540, 280);
      p.curveTo(540, 140, 470, 40, 360, 10);
      p.lineTo(480, -80);
      p.lineTo(440, -120);
      p.lineTo(300, 0);
      p.curveTo(290, 0, 280, 0, 270, 0);
      p.lineTo(270, 60);
      p.curveTo(280, 60, 290, 60, 300, 60);
      p.lineTo(340, 60);
      p.lineTo(380, 20);
      p.curveTo(450, 50, 480, 140, 480, 280);
      p.lineTo(480, 420);
      p.curveTo(480, 570, 410, 650, 300, 650);
      p.curveTo(190, 650, 120, 570, 120, 420);
      p.lineTo(120, 280);
      p.curveTo(120, 130, 190, 50, 300, 50);
      p.close();
      return p;
    },
    adv
  );

export const glyphq = (opentype, adv) =>
  makeGlyph(
    opentype,
    "q",
    "q".codePointAt(0),
    (p) => {
      p.moveTo(500, -150);
      p.lineTo(500, 480);
      p.lineTo(290, 480);
      p.curveTo(150, 480, 80, 380, 80, 240);
      p.curveTo(80, 100, 150, 0, 290, 0);
      p.lineTo(500, 0);
      p.close();
      p.moveTo(290, 60);
      p.curveTo(180, 60, 140, 130, 140, 240);
      p.curveTo(140, 350, 180, 420, 290, 420);
      p.lineTo(440, 420);
      p.lineTo(440, 60);
      p.close();
      return p;
    },
    adv
  );
