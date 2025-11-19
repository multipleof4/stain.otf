const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphB=(o,w)=>mk(o,"B",66,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(340,700);p.curveTo(520,700,520,380,340,380);
  p.lineTo(160,380);p.lineTo(160,320);p.lineTo(360,320);p.curveTo(560,320,560,0,360,0);p.close();
  p.moveTo(160,440);p.lineTo(340,440);p.curveTo(440,440,440,640,340,640);p.lineTo(160,640);p.close();
  p.moveTo(160,60);p.lineTo(360,60);p.curveTo(480,60,480,260,360,260);p.lineTo(160,260);p.close();
  return p;
},w);
export const glyphb=(o,w)=>mk(o,"b",98,p=>{
  p.moveTo(80,0);p.lineTo(80,710);p.lineTo(160,710);p.lineTo(160,480);
  p.lineTo(320,480);p.curveTo(540,480,540,0,320,0);p.close();
  p.moveTo(160,60);p.lineTo(320,60);p.curveTo(460,60,460,420,320,420);p.lineTo(160,420);p.close();
  return p;
},w);
