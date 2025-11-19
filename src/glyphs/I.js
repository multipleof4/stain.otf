const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphI=(o,w)=>mk(o,"I",73,p=>{
  p.moveTo(260,0);p.lineTo(260,700);p.lineTo(340,700);p.lineTo(340,0);p.close();
  return p;
},w);
export const glyphi=(o,w)=>mk(o,"i",105,p=>{
  p.moveTo(260,0);p.lineTo(260,480);p.lineTo(340,480);p.lineTo(340,0);p.close();
  p.moveTo(260,600);p.lineTo(260,680);p.lineTo(340,680);p.lineTo(340,600);p.close();
  return p;
},w);
