const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphX=(o,w)=>mk(o,"X",88,p=>{
  p.moveTo(60,700);p.lineTo(150,700);p.lineTo(300,420);p.lineTo(450,700);p.lineTo(540,700);
  p.lineTo(350,350);p.lineTo(540,0);p.lineTo(450,0);p.lineTo(300,280);p.lineTo(150,0);
  p.lineTo(60,0);p.lineTo(250,350);p.close();
  return p;
},w);
export const glyphx=(o,w)=>mk(o,"x",120,p=>{
  p.moveTo(60,480);p.lineTo(150,480);p.lineTo(300,280);p.lineTo(450,480);p.lineTo(540,480);
  p.lineTo(350,240);p.lineTo(540,0);p.lineTo(450,0);p.lineTo(300,200);p.lineTo(150,0);
  p.lineTo(60,0);p.lineTo(250,240);p.close();
  return p;
},w);
