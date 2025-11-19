const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphY=(o,w)=>mk(o,"Y",89,p=>{
  p.moveTo(40,700);p.lineTo(130,700);p.lineTo(300,380);p.lineTo(470,700);p.lineTo(560,700);
  p.lineTo(340,300);p.lineTo(340,0);p.lineTo(260,0);p.lineTo(260,300);p.close();
  return p;
},w);
export const glypthy=(o,w)=>mk(o,"y",121,p=>{
  p.moveTo(40,480);p.lineTo(130,480);p.lineTo(300,160);p.lineTo(470,480);p.lineTo(560,480);
  p.lineTo(240,-140);p.curveTo(200,-200,120,-200,120,-200);p.lineTo(120,-120);
  p.curveTo(180,-120,180,-80,180,-80);p.close();
  return p;
},w);
