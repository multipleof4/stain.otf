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
      // lower bowl (main counter)
      p.moveTo(310,-10);
      p.curveTo(190,-10,100,80,100,230);
      p.curveTo(100,380,190,470,310,470);
      p.curveTo(430,470,520,380,520,230);
      p.curveTo(520,80,430,-10,310,-10);
      p.close();
      // inner counter
      p.moveTo(310,50);
      p.curveTo(400,50,460,110,460,230);
      p.curveTo(460,350,400,410,310,410);
      p.curveTo(220,410,160,350,160,230);
      p.curveTo(160,110,220,50,310,50);
      p.close();
      // stem + ear: descender and top terminal
      p.moveTo(430,470);
      p.curveTo(430,560,390,600,320,600);
      p.curveTo(280,600,250,590,220,570);
      p.lineTo(200,620);
      p.curveTo(240,645,280,660,330,660);
      p.curveTo(430,660,490,600,490,480);
      p.lineTo(490,-150);
      p.lineTo(430,-150);
      p.lineTo(430,40);
      p.curveTo(400,10,360,-10,310,-10);
      p.close();
      return p;
    },
    adv
  );
