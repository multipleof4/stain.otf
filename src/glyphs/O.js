const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphO=(o,w)=>mk(o,"O",79,p=>{
  p.moveTo(300,710);p.curveTo(60,710,60,-10,300,-10);p.curveTo(540,-10,540,710,300,710);p.close();
  p.moveTo(300,630);p.curveTo(460,630,460,70,300,70);p.curveTo(140,70,140,630,300,630);p.close();
  return p;
},w);
export const glypho=(o,w)=>mk(o,"o",111,p=>{
  p.moveTo(300,490);p.curveTo(80,490,80,-10,300,-10);p.curveTo(520,-10,520,490,300,490);p.close();
  p.moveTo(300,410);p.curveTo(440,410,440,70,300,70);p.curveTo(160,70,160,410,300,410);p.close();
  return p;
},w);
