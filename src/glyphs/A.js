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
      const x=300,yBase=-10;
      const bowlTop=460,asc=480;
      const rOuter=210,rInner=145;
      p.moveTo(x+rOuter,yBase+80);
      p.curveTo(x+rOuter,yBase+10,x+80,yBase-40,x,yBase-40);
      p.curveTo(x-120,yBase-40,x-210,yBase+50,x-210,yBase+210);
      p.curveTo(x-210,yBase+370,x-120,bowlTop,x,bowlTop);
      p.curveTo(x+85,bowlTop,x+155,bowlTop-45,x+190,bowlTop-110);
      p.lineTo(x+190,asc-30);
      p.lineTo(x+250,asc-30);
      p.lineTo(x+250,0);
      p.lineTo(x+190,0);
      p.lineTo(x+190,60);
      p.curveTo(x+150,yBase+10,x+85,yBase-10,x,yBase-10);
      p.close();
      p.moveTo(x,yBase+40);
      p.curveTo(x+95,yBase+40,x+150,yBase+115,x+150,yBase+210);
      p.curveTo(x+150,yBase+305,x+95,bowlTop-40,x,bowlTop-40);
      p.curveTo(x-95,bowlTop-40,x-150,yBase+305,x-150,yBase+210);
      p.curveTo(x-150,yBase+115,x-95,yBase+40,x,yBase+40);
      p.close();
      return p;
    },
    adv
  );
