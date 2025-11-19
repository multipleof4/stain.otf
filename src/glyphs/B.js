export const glyphB=(o,w)=>new o.Glyph({name:"B",unicode:66,advanceWidth:w,path:(p=>{
  p.moveTo(90,0).lineTo(90,700).lineTo(330,700).curveTo(540,700,580,560,580,500).curveTo(580,410,520,375,440,370)
  .curveTo(540,355,600,290,600,190).curveTo(600,60,480,0,310,0).close()
  .moveTo(180,395).lineTo(310,395).curveTo(410,395,490,425,490,515).curveTo(490,615,400,625,310,625).lineTo(180,625).close()
  .moveTo(180,75).lineTo(320,75).curveTo(440,75,510,90,510,215).curveTo(510,305,420,320,320,320).lineTo(180,320).close(); return p;
})(new o.Path())});

export const glyphb=(o,w)=>new o.Glyph({name:"b",unicode:98,advanceWidth:w,path:(p=>{
  // Match d stem style: straight ascender
  p.moveTo(95,720).lineTo(175,720).lineTo(175,400).lineTo(175,0).lineTo(95,0).close()
  // Bowl
   .moveTo(175,55).lineTo(175,350).curveTo(175,480,270,520,345,520).curveTo(475,520,535,395,535,260)
   .curveTo(535,95,445,-15,335,-15).curveTo(250,-15,195,10,175,55).close()
  // Hole (CW)
   .moveTo(345,440).curveTo(305,440,255,415,255,265).curveTo(255,115,305,65,345,65)
   .curveTo(415,65,455,130,455,250).curveTo(455,375,415,440,345,440).close(); return p;
})(new o.Path())});
