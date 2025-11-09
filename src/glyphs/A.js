const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({name,unicode,advanceWidth:adv,path:cmds(new opentype.Path())});

export const glyphA=(opentype,adv)=>
  makeGlyph(
    opentype,
    "A",
    "A".codePointAt(0),
    p=>{
      const l=90,r=510,ap=700,barY=280,stem=70,innerTop=630;
      p.moveTo(l,0);
      p.lineTo(l+stem,0);
      p.lineTo(300,innerTop);
      p.lineTo(r-stem,0);
      p.lineTo(r,0);
      p.lineTo(320,ap);
      p.lineTo(280,ap);
      p.close();
      p.moveTo(190,barY);
      p.lineTo(410,barY);
      p.lineTo(390,340);
      p.lineTo(210,340);
      p.close();
      return p;
    },
    adv
  );

export const glypha=(opentype,adv)=>
  makeGlyph(
    opentype,
    "a",
    "a".codePointAt(0),
    p=>{
      p.moveTo(310,-10);
      p.curveTo(210,-10,130,50,110,140);
      p.lineTo(170,160);
      p.curveTo(185,95,235,50,310,50);
      p.curveTo(390,50,440,100,440,180);
      p.lineTo(440,220);
      p.lineTo(300,220);
      p.curveTo(180,220,100,270,100,360);
      p.curveTo(100,450,180,490,280,490);
      p.curveTo(340,490,390,470,430,430);
      p.lineTo(430,480);
      p.lineTo(490,480);
      p.lineTo(490,180);
      p.curveTo(490,70,410,-10,310,-10);
      p.close();
      p.moveTo(280,430);
      p.curveTo(210,430,160,400,160,350);
      p.curveTo(160,300,210,270,300,270);
      p.lineTo(440,270);
      p.lineTo(440,310);
      p.curveTo(440,380,370,430,280,430);
      p.close();
      return p;
    },
    adv
  );
