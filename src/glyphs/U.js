const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphU=(o,w)=>mk(o,"U",85,p=>{
  p.moveTo(80,700);p.lineTo(160,700);p.lineTo(160,240);p.curveTo(160,0,440,0,440,240);
  p.lineTo(440,700);p.lineTo(520,700);p.lineTo(520,240);p.curveTo(520,-100,80,-100,80,240);p.close();
  return p;
},w);
export const glyphu=(o,w)=>mk(o,"u",117,p=>{
  p.moveTo(80,480);p.lineTo(160,480);p.lineTo(160,180);p.curveTo(160,80,360,80,360,180);
  p.lineTo(360,480);p.lineTo(440,480);p.lineTo(440,0);p.lineTo(360,0);p.lineTo(360,80);
  p.curveTo(360,-20,80,-20,80,180);p.close();
  return p;
},w);
