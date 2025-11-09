const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:cmds(new opentype.Path())
  });

export const glyphG=(opentype,adv)=>
  makeGlyph(
    opentype,
    "G",
    "G".codePointAt(0),
    p=>{
      p.moveTo(350,-10);
      p.curveTo(190,-10,80,100,80,280);
      p.lineTo(80,420);
      p.curveTo(80,600,190,710,350,710);
      p.curveTo(460,710,540,660,580,570);
      p.lineTo(520,540);
      p.curveTo(490,610,430,650,350,650);
      p.curveTo(220,650,140,570,140,420);
      p.lineTo(140,280);
      p.curveTo(140,130,220,50,350,50);
      p.curveTo(450,50,520,100,540,190);
      p.lineTo(340,190);
      p.lineTo(340,250);
      p.lineTo(600,250);
      p.lineTo(600,220);
      p.curveTo(600,70,500,-10,350,-10);
      p.close();
      return p;
    },
    adv
  );

export const glyphg=(opentype,adv)=>
  makeGlyph(
    opentype,
    "g",
    "g".codePointAt(0),
    p=>{
      const cx=300,cy=210;
      const rO=170,rI=110;
      const linkY=-10;
      const earX=430,earY=390;
      p.moveTo(cx+rO,cy);
      p.curveTo(cx+rO,cy+95,cx+95,cy+rO,cx,cy+rO);
      p.curveTo(cx-95,cy+rO,cx-rO,cy+95,cx-rO,cy);
      p.curveTo(cx-rO,cy-95,cx-95,cy-rO,cx,cy-rO);
      p.curveTo(cx+95,cy-rO,cx+rO,cy-95,cx+rO,cy);
      p.close();
      p.moveTo(cx+rI,cy);
      p.curveTo(cx+rI,cy+65,cx+65,cy+rI,cx,cy+rI);
      p.curveTo(cx-65,cy+rI,cx-rI,cy+65,cx-rI,cy);
      p.curveTo(cx-rI,cy-65,cx-65,cy-rI,cx,cy-rI);
      p.curveTo(cx+65,cy-rI,cx+rI,cy-65,cx+rI,cy);
      p.close();
      p.moveTo(cx-40,linkY);
      p.curveTo(cx-120,linkY-70,cx-60,-150,cx+40,-150);
      p.curveTo(cx+150,-150,cx+190,-70,cx+140,-10);
      p.lineTo(cx+90,-40);
      p.curveTo(cx+120,-80,cx+110,-110,cx+60,-110);
      p.curveTo(cx+10,-110,cx-10,-70,cx-10,-30);
      p.close();
      p.moveTo(earX-40,earY);
      p.lineTo(earX+40,earY);
      p.lineTo(earX+30,470);
      p.lineTo(earX-30,470);
      p.close();
      return p;
    },
    adv
  );
