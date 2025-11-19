const mk=(o,n,u,d,w)=>new o.Glyph({name:n,unicode:u,advanceWidth:w,path:d(new o.Path())});
export const glyphW=(o,w)=>mk(o,"W",87,p=>{
  p.moveTo(20,700);p.lineTo(110,700);p.lineTo(220,200);p.lineTo(330,700);p.lineTo(430,700);
  p.lineTo(540,200);p.lineTo(650,700);p.lineTo(740,700);p.lineTo(580,0);p.lineTo(490,0);
  p.lineTo(380,400);p.lineTo(270,0);p.lineTo(180,0);p.close();
  return p;
},760);
export const glyphw=(o,w)=>mk(o,"w",119,p=>{
  p.moveTo(20,480);p.lineTo(100,480);p.lineTo(190,140);p.lineTo(280,480);p.lineTo(380,480);
  p.lineTo(470,140);p.lineTo(560,480);p.lineTo(640,480);p.lineTo(510,0);p.lineTo(430,0);
  p.lineTo(330,300);p.lineTo(230,0);p.lineTo(150,0);p.close();
  return p;
},660);
