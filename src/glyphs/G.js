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
      // single-storey "g" with open top, bowl and right descender
      const xMin=80,xMax=520;
      const bowlTop=260,bowlBottom=-10;
      const base=480,desc=-150;

      // bowl outer
      p.moveTo(300,bowlBottom);
      p.curveTo(180,bowlBottom,xMin,80,xMin,230);
      p.curveTo(xMin,380,190,470,310,470);
      p.curveTo(410,470,480,430,510,360);
      // join into stem
      p.lineTo(510,base);
      // stem down to descender
      p.lineTo(450,base);
      p.lineTo(450,desc);
      p.lineTo(510,desc);
      p.lineTo(510,200);
      p.curveTo(510,80,430,bowlBottom,300,bowlBottom);
      p.close();

      // bowl inner
      p.moveTo(300,50);
      p.curveTo(390,50,450,110,450,230);
      p.curveTo(450,350,390,410,300,410);
      p.curveTo(210,410,150,350,150,230);
      p.curveTo(150,110,210,50,300,50);
      p.close();

      // open ear/top hook on right side
      p.moveTo(450,320);
      p.curveTo(420,260,370,230,310,230);
      p.lineTo(310,170);
      p.curveTo(395,170,460,205,500,270);
      p.close();

      return p;
    },
    adv
  );
