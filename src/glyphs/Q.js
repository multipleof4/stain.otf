const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({name,unicode,advanceWidth:adv,path:cmds(new opentype.Path())});

export const glyphQ=(opentype,adv)=>
  makeGlyph(
    opentype,
    "Q",
    "Q".codePointAt(0),
    p=>{
      const cx=300,cy=310,ro=260,ri=190;
      p.moveTo(cx,cy-ro);
      p.curveTo(cx-160,cy-ro,cx-ro,cy-160,cx-ro,cy);
      p.curveTo(cx-ro,cy+160,cx-160,cy+ro,cx,cy+ro);
      p.curveTo(cx+160,cy+ro,cx+ro,cy+160,cx+ro,cy);
      p.curveTo(cx+ro,cy-60,cx+210,cy-150,cx+140,cy-210);
      p.lineTo(cx+220,cy-260);
      p.lineTo(cx+260,cy-220);
      p.lineTo(cx+190,cy-180);
      p.curveTo(cx+260,cy-120,cx+ro,cy-40,cx+ro,cy);
      p.curveTo(cx+ro,cy+160,cx+160,cy+ro,cx,cy+ro);
      p.curveTo(cx-160,cy+ro,cx-ro,cy+160,cx-ro,cy);
      p.curveTo(cx-ro,cy-160,cx-160,cy-ro,cx,cy-ro);
      p.close();
      p.moveTo(cx,cy-ri);
      p.curveTo(cx-120,cy-ri,cx-ri,cy-120,cx-ri,cy);
      p.curveTo(cx-ri,cy+120,cx-120,cy+ri,cx,cy+ri);
      p.curveTo(cx+120,cy+ri,cx+ri,cy+120,cx+ri,cy);
      p.curveTo(cx+ri,cy-120,cx+120,cy-ri,cx,cy-ri);
      p.close();
      return p;
    },
    adv
  );

export const glyphq=(opentype,adv)=>
  makeGlyph(
    opentype,
    "q",
    "q".codePointAt(0),
    p=>{
      const cx=300,base=-10;
      p.moveTo(cx,base-40);
      p.curveTo(cx-120,base-40,210,50,210,210);
      p.curveTo(210,370,cx-120,460,cx,460);
      p.curveTo(cx+80,460,350,430,390,380);
      p.lineTo390=390;
      p.lineTo(390,480);
      p.lineTo(450,480);
      p.lineTo(450,-150);
      p.lineTo(390,-150);
      p.lineTo(390,0);
      p.curveTo(360,-30,330,base-40,cx,base-40);
      p.close();
      p.moveTo(cx,20);
      p.curveTo(cx+90,20,330,110,330,210);
      p.curveTo(330,310,cx+90,400,cx,400);
      p.curveTo(cx-90,400,270,310,270,210);
      p.curveTo(270,110,cx-90,20,cx,20);
      p.close();
      return p;
    },
    adv
  );
