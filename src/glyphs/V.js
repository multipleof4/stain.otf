const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphV=(o,w)=>mk(o,"V",86,p=>{
  p.moveTo(40,700);p.lineTo(130,700);p.lineTo(300,120);p.lineTo(470,700);p.lineTo(560,700);
  p.lineTo(340,0);p.lineTo(260,0);p.close();
  return p;
},w);
export const glyphv=(o,w)=>mk(o,"v",118,p=>{
  p.moveTo(40,480);p.lineTo(130,480);p.lineTo(300,80);p.lineTo(470,480);p.lineTo(560,480);
  p.lineTo(340,0);p.lineTo(260,0);p.close();
  return p;
},w);
