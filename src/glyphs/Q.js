const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphQ=(o,w)=>mk(o,"Q",81,p=>{
  p.moveTo(300,710);p.curveTo(60,710,60,-10,300,-10);p.curveTo(540,-10,540,710,300,710);p.close();
  p.moveTo(300,630);p.curveTo(460,630,460,70,300,70);p.curveTo(140,70,140,630,300,630);p.close();
  p.moveTo(320,140);p.lineTo(480,-80);p.lineTo(400,-80);p.lineTo(260,100);p.close();
  return p;
},w);
export const glyphq=(o,w)=>mk(o,"q",113,p=>{
  p.moveTo(440,-200);p.lineTo(440,480);p.lineTo(200,480);p.curveTo(-20,480,-20,0,200,0);
  p.lineTo(360,0);p.lineTo(360,-200);p.close();
  p.moveTo(360,400);p.lineTo(200,400);p.curveTo(60,400,60,80,200,80);p.lineTo(360,80);p.close();
  return p;
},w);
