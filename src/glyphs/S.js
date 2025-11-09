const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphS = (opentype, adv) =>
  makeGlyph(
    opentype,
    "S",
    "S".codePointAt(0),
    (p) => {
      p.moveTo(300, -10);
      p.curveTo(170, -10, 80, 50, 60, 150);
      p.lineTo(120, 170);
      p.curveTo(140, 90, 210, 50, 300, 50);
      p.curveTo(390, 50, 450, 90, 450, 160);
      p.curveTo(450, 220, 410, 250, 320, 280);
      p.lineTo(260, 300);
      p.curveTo(150, 340, 90, 390, 90, 480);
      p.curveTo(90, 600, 180, 710, 320, 710);
      p.curveTo(440, 710, 520, 650, 540, 560);
      p.lineTo(480, 540);
      p.curveTo(460, 610, 400, 650, 320, 650);
      p.curveTo(220, 650, 150, 600, 150, 520);
      p.curveTo(150, 460, 190, 430, 280, 400);
      p.lineTo(340, 380);
      p.curveTo(450, 340, 510, 290, 510, 200);
      p.curveTo(510, 70, 420, -10, 300, -10);
      p.close();
      return p;
    },
    adv
  );

export const glyphs = (opentype, adv) =>
  makeGlyph(
    opentype,
    "s",
    "s".codePointAt(0),
    (p) => {
      p.moveTo(280, -10);
      p.curveTo(170, -10, 90, 40, 70, 120);
      p.lineTo(130, 150);
      p.curveTo(150, 90, 200, 50, 280, 50);
      p.curveTo(360, 50, 410, 90, 410, 150);
      p.curveTo(410, 200, 380, 230, 300, 260);
      p.lineTo(260, 280);
      p.curveTo(160, 320, 110, 360, 110, 430);
      p.curveTo(110, 490, 170, 540, 280, 540);
      p.curveTo(380, 540, 450, 500, 470, 430);
      p.lineTo(410, 400);
      p.curveTo(390, 450, 350, 480, 280, 480);
      p.curveTo(210, 480, 170, 450, 170, 400);
      p.curveTo(170, 360, 200, 330, 280, 300);
      p.lineTo(320, 280);
      p.curveTo(420, 240, 470, 200, 470, 130);
      p.curveTo(470, 50, 390, -10, 280, -10);
      p.close();
      return p;
    },
    adv
  );
