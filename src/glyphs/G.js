export const glyphG=(o,w)=>new o.Glyph({name:"G",unicode:71,advanceWidth:w,path:(p=>{
  p.moveTo(590,550).lineTo(520,510).curveTo(500,570,445,620,350,620).curveTo(195,620,165,465,165,360)
   .curveTo(165,225,220,100,350,100).curveTo(445,100,510,155,520,250).lineTo(520,290).lineTo(330,290)
   .lineTo(330,365).lineTo(600,365).lineTo(600,250).curveTo(595,50,470,-15,350,-15).curveTo(150,-15,65,140,65,360)
   .curveTo(65,570,170,715,350,715).curveTo(485,715,565,645,590,550).close(); return p;
})(new o.Path())});

export const glyphg=(o,w)=>new o.Glyph({name:"g",unicode:103,advanceWidth:w,path:(p=>{
  // Single-story 'g' construction
  p.moveTo(480,500).lineTo(395,500).lineTo(395,430)
   .curveTo(360,490,295,515,220,515).curveTo(100,515,40,395,40,260)
   .curveTo(40,115,95,-5,185,-5).curveTo(250,-5,300,20,345,55) // join area
   .lineTo(355,-40) // Start tail descend
   .curveTo(365,-140,305,-200,195,-200).curveTo(135,-200,90,-175,60,-150)
   .lineTo(30,-210).curveTo(75,-260,140,-280,200,-280)
   .curveTo(340,-280,430,-200,440,-40).lineTo(480,-40) // Wide stem for stability
   .lineTo(480,500).close()
   // Hole
   .moveTo(235,435).curveTo(335,435,395,355,395,260)
   .curveTo(395,145,335,75,235,75).curveTo(135,75,125,145,125,260)
   .curveTo(125,360,135,435,235,435).close();
  return p;
})(new o.Path())});

