const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphJ=(o,w)=>mk(o,"J",74,p=>{
  p.moveTo(440,700);p.lineTo(520,700);p.lineTo(520,200);p.curveTo(520,-10,200,-10,200,100);
  p.lineTo(280,100);p.curveTo(280,60,440,60,440,200);p.close();
  return p;
},w);
export const glyphj=(o,w)=>mk(o,"j",106,p=>{
  p.moveTo(360,480);p.lineTo(440,480);p.lineTo(440,-100);p.curveTo(440,-200,200,-200,200,-100);
  p.lineTo(280,-100);p.curveTo(280,-140,360,-140,360,-100);p.close();
  p.moveTo(360,600);p.lineTo(360,680);p.lineTo(440,680);p.lineTo(440,600);p.close();
  return p;
},w);
