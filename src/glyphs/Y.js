export const glyphY=(o,w)=>new o.Glyph({name:"Y",unicode:89,advanceWidth:w,path:(p=>{
  p.moveTo(20,700).lineTo(115,700).lineTo(280,350).lineTo(450,700).lineTo(545,700).lineTo(325,255).lineTo(325,0).lineTo(245,0).lineTo(245,255).close(); return p;
})(new o.Path())});
export const glypthy=(o,w)=>new o.Glyph({name:"y",unicode:121,advanceWidth:w,path:(p=>{
  p.moveTo(25,500).lineTo(105,500).lineTo(235,180).lineTo(365,500).lineTo(455,500).lineTo(250,0) // Main V join
   .lineTo(195,-155) // Tail descend linear
   .curveTo(170,-210,140,-215,105,-215).curveTo(70,-215,50,-200,30,-185) // Tail curve
   .lineTo(55,-125).curveTo(75,-140,90,-135,110,-135).curveTo(140,-130,150,-95,165,-65).close(); // Tail terminal
  return p;
})(new o.Path())});


