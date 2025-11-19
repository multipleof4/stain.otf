const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphR=(o,w)=>mk(o,"R",82,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(340,700);p.curveTo(540,700,540,380,340,380);
  p.lineTo(160,380);p.lineTo(160,0);p.close();
  p.moveTo(160,620);p.lineTo(340,620);p.curveTo(460,620,460,460,340,460);p.lineTo(160,460);p.close();
  p.moveTo(300,380);p.lineTo(480,0);p.lineTo(380,0);p.lineTo(220,380);p.close();
  return p;
},w);
export const glyphr=(o,w)=>mk(o,"r",114,p=>{
  p.moveTo(80,0);p.lineTo(80,480);p.lineTo(160,480);p.lineTo(160,280);p.curveTo(160,480,380,480,380,360);
  p.lineTo(380,280);p.curveTo(300,280,240,280,240,100);p.lineTo(240,0);p.lineTo(160,0);p.close();
  return p;
},w);
