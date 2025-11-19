const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphL=(o,w)=>mk(o,"L",76,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(160,700);p.lineTo(160,80);p.lineTo(520,80);
  p.lineTo(520,0);p.close();
  return p;
},w);
export const glyphl=(o,w)=>mk(o,"l",108,p=>{
  p.moveTo(260,0);p.lineTo(260,710);p.lineTo(340,710);p.lineTo(340,0);p.close();
  return p;
},w);
