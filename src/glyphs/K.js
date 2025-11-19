const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphK=(o,w)=>mk(o,"K",75,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(160,700);p.lineTo(160,400);p.lineTo(420,700);
  p.lineTo(520,700);p.lineTo(260,400);p.lineTo(540,0);p.lineTo(440,0);p.lineTo(160,300);
  p.lineTo(160,0);p.close();
  return p;
},w);
export const glyphk=(o,w)=>mk(o,"k",107,p=>{
  p.moveTo(80,0);p.lineTo(80,710);p.lineTo(160,710);p.lineTo(160,300);p.lineTo(380,480);
  p.lineTo(480,480);p.lineTo(260,300);p.lineTo(500,0);p.lineTo(400,0);p.lineTo(160,200);
  p.lineTo(160,0);p.close();
  return p;
},w);
