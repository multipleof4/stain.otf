export const glyphA = (o, w) => new o.Glyph({ name: "A", unicode: 65, advanceWidth: w, path: (p => {
  p.moveTo(20,0).lineTo(268,700).lineTo(332,700).lineTo(580,0).lineTo(486,0).lineTo(422,200).lineTo(178,200).lineTo(114,0).close()
   .moveTo(204,285).lineTo(396,285).lineTo(300,585).close(); return p;
})(new o.Path()) });

export const glypha = (o, w) => new o.Glyph({ name: "a", unicode: 97, advanceWidth: w, path: (p => {
  p.moveTo(420,280).curveTo(380,450,230,506,130,506).curveTo(50,506,25,440,25,365).curveTo(25,230,160,155,408,120).lineTo(408,100)
   .curveTo(408,40,350,55,280,55).curveTo(180,55,120,75,120,75).lineTo(105,15).curveTo(180,-15,280,-15,340,-15)
   .curveTo(450,-15,495,60,495,180).lineTo(495,490).lineTo(420,490).lineTo(420,280).close()
   .moveTo(408,170).curveTo(220,200,110,260,110,350).curveTo(110,410,145,440,210,440).curveTo(330,440,408,330,408,220).close();
  return p;
})(new o.Path()) });
