const makeGlyph = (opentype, name, unicode, cmds, adv) =>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth: adv,
    path: cmds(new opentype.Path())
  });

export const glyphC = (opentype, adv) =>
  makeGlyph(
    opentype,
    "C",
    "C".codePointAt(0),
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
      p.curveTo(430, 50, 490, 90, 520, 160);
      p.lineTo(580, 130);
      p.curveTo(540, 40, 460, -10, 350, -10);
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
      p.moveTo(330, -10);
      p.curveTo(200, -10, 110, 80, 110, 240);
      p.curveTo(110, 400, 200, 490, 330, 490);
      p.curveTo(410, 490, 470, 460, 510, 400);
      p.lineTo(460, 360);
      p.curveTo(430, 410, 390, 430, 330, 430);
      p.curveTo(230, 430, 170, 370, 170, 240);
      p.curveTo(170, 110, 230, 50, 330, 50);
      p.curveTo(390, 50, 430, 70, 460, 120);
      p.lineTo(510, 80);
      p.curveTo(470, 20, 410, -10, 330, -10);
      p.close();
      return p;
    },
    adv
  );
