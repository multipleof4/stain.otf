export const glyphG=(o,w)=>new o.Glyph({name:"G",unicode:71,advanceWidth:w,path:(p=>{
  p.moveTo(590,550).lineTo(520,510).curveTo(500,570,445,620,350,620).curveTo(195,620,165,465,165,360)
   .curveTo(165,225,220,100,350,100).curveTo(445,100,510,155,520,250).lineTo(520,290).lineTo(330,290)
   .lineTo(330,365).lineTo(600,365).lineTo(600,250).curveTo(595,50,470,-15,350,-15).curveTo(150,-15,65,140,65,360)
   .curveTo(65,570,170,715,350,715).curveTo(485,715,565,645,590,550).close(); return p;
})(new o.Path())});

export const glyphg=(o,w)=>new o.Glyph({name:"g",unicode:103,advanceWidth:w,path:(p=>{
  // Clean single-story g: a 'q' with a curved tail
  p.moveTo(445,500).lineTo(375,500).lineTo(375,435)
   .curveTo(340,490,270,515,210,515).curveTo(90,515,40,395,40,250)
   .curveTo(40,105,105,-15,225,-15).curveTo(290,-15,340,20,375,65).lineTo(375,-60) // Stem merge
   .curveTo(375,-150,340,-200,235,-200).curveTo(180,-200,125,-180,95,-160) // Tail hook
   .lineTo(65,-225).curveTo(115,-265,190,-275,245,-275)
   .curveTo(410,-275,450,-175,450,-45).lineTo(450,500).close() // Back up stem
   .moveTo(245,60).curveTo(160,60,125,125,125,250).curveTo(125,375,160,440,245,440)
   .curveTo(325,440,375,385,375,250).curveTo(375,120,330,60,245,60).close();
  return p;
})(new o.Path())});

