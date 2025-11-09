const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:cmds(new opentype.Path())
  });

export const glyphD=(opentype,adv)=>
  makeGlyph(
    opentype,
    "D",
    "D".codePointAt(0),
    p=>{
      p.moveTo(100,0);
      p.lineTo(100,700);
      p.lineTo(320,700);
      p.curveTo(480,700,580,590,580,420);
      p.lineTo(580,280);
      p.curveTo(580,110,480,0,320,0);
      p.close();
      p.moveTo(160,60);
      p.lineTo(320,60);
      p.curveTo(450,60,520,140,520,280);
      p.lineTo(520,420);
      p.curveTo(520,560,450,640,320,640);
      p.lineTo(160,640);
      p.close();
      return p;
    },
    adv
  );

export const glyphd=(opentype,adv)=>
  makeGlyph(
    opentype,
    "d",
    "d".codePointAt(0),
    p=>{
      const stemX=460;
      const asc=720;
      p.moveTo(300,-10);
      p.curveTo(180,-10,90,80,90,240);
      p.curveTo(90,400,180,490,300,490);
      p.curveTo(380,490,440,460,480,410);
      p.lineTo(480,asc);
      p.lineTo(420,asc);
      p.lineTo(420,450);
      p.curveTo(390,480,350,490,300,490);
      p.curveTo(180,490,90,400,90,240);
      p.curveTo(90,80,180,-10,300,-10);
      p.curveTo(360,-10,410,10,450,40);
      p.lineTo(450,0);
      p.lineTo(510,0);
      p.lineTo(510,410);
      p.curveTo(510,260,430,50,300,50);
      p.close();
      return p;
    },
    adv
  );
