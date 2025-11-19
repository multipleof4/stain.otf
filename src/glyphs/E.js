const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphE=(o,w)=>mk(o,"E",69,p=>{
  p.moveTo(80,0);p.lineTo(80,700);p.lineTo(520,700);p.lineTo(520,620);p.lineTo(160,620);
  p.lineTo(160,390);p.lineTo(480,390);p.lineTo(480,310);p.lineTo(160,310);p.lineTo(160,80);
  p.lineTo(520,80);p.lineTo(520,0);p.close();
  return p;
},w);
export const glyphe=(o,w)=>mk(o,"e",101,p=>{
  p.moveTo(500,220);p.curveTo(500,490,80,490,80,240);p.curveTo(80,-10,300,-10,300,-10);
  p.curveTo(460,-10,500,100,500,100);p.lineTo(420,120);p.curveTo(400,60,300,60,300,60);
  p.curveTo(160,60,160,200,160,200);p.lineTo(500,200);p.close();
  p.moveTo(160,260);p.curveTo(160,420,420,420,420,260);p.close();
  return p;
},w);
