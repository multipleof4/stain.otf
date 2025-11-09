const makeGlyph=(opentype,name,unicode,cmds,adv)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:cmds(new opentype.Path())
  });

export const glyphB=(opentype,adv)=>
  makeGlyph(
    opentype,
    "B",
    "B".codePointAt(0),
    p=>{
      p.moveTo(100,0);
      p.lineTo(100,700);
      p.lineTo(320,700);
      p.curveTo(440,700,520,640,520,550);
      p.curveTo(520,490,480,440,420,410);
      p.curveTo(490,380,530,320,530,250);
      p.curveTo(530,140,450,0,300,0);
      p.close();
      p.moveTo(160,60);
      p.lineTo(300,60);
      p.curveTo(410,60,470,130,470,250);
      p.curveTo(470,370,410,370,300,370);
      p.lineTo(160,370);
      p.close();
      p.moveTo(160,430);
      p.lineTo(320,430);
      p.curveTo(410,430,460,480,460,550);
      p.curveTo(460,620,410,640,320,640);
      p.lineTo(160,640);
      p.close();
      return p;
    },
    adv
  );

export const glyphb=(opentype,adv)=>
  makeGlyph(
    opentype,
    "b",
    "b".codePointAt(0),
    p=>{
      p.moveTo(100,0);
      p.lineTo(100,720);
      p.lineTo(160,720);
      p.lineTo(160,440);
      p.curveTo(200,470,250,490,310,490);
      p.curveTo(430,490,520,400,520,280);
      p.curveTo(520,160,430,70,310,70);
      p.curveTo(250,70,200,90,160,120);
      p.lineTo(160,0);
      p.close();
      p.moveTo(310,130);
      p.curveTo(400,130,460,190,460,280);
      p.curveTo(460,370,400,430,310,430);
      p.curveTo(220,430,160,370,160,280);
      p.curveTo(160,190,220,130,310,130);
      p.close();
      return p;
    },
    adv
  );
