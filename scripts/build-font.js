import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import opentype from "opentype.js";
import { glyphA, glypha } from "../src/glyphs/A.js";
import { glyphB, glyphb } from "../src/glyphs/B.js";
import { glyphC, glyphc } from "../src/glyphs/C.js";
import { glyphD, glyphd } from "../src/glyphs/D.js";
import { glyphE, glyphe } from "../src/glyphs/E.js";
import { glyphF, glyphf } from "../src/glyphs/F.js";
import { glyphG, glyphg } from "../src/glyphs/G.js";
import { glyphH, glyphh } from "../src/glyphs/H.js";
import { glyphI, glyphi } from "../src/glyphs/I.js";
import { glyphJ, glyphj } from "../src/glyphs/J.js";
import { glyphK, glyphk } from "../src/glyphs/K.js";
import { glyphL, glyphl } from "../src/glyphs/L.js";
import { glyphM, glyphm } from "../src/glyphs/M.js";
import { glyphN, glyphn } from "../src/glyphs/N.js";
import { glyphO, glypho } from "../src/glyphs/O.js";
import { glyphP, glyphp } from "../src/glyphs/P.js";
import { glyphQ, glyphq } from "../src/glyphs/Q.js";
import { glyphR, glyphr } from "../src/glyphs/R.js";
import { glyphS, glyphs as glyphsLowerS } from "../src/glyphs/S.js";
import { glyphT, glypht } from "../src/glyphs/T.js";
import { glyphU, glyphu } from "../src/glyphs/U.js";
import { glyphV, glyphv } from "../src/glyphs/V.js";
import { glyphW, glyphw } from "../src/glyphs/W.js";
import { glyphX, glyphx } from "../src/glyphs/X.js";
import { glyphY, glypthy as glyphy } from "../src/glyphs/Y.js";
import { glyphZ, glyphz } from "../src/glyphs/Z.js";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const outDir=path.join(__dirname,"..","dist");
if(!fs.existsSync(outDir))fs.mkdirSync(outDir,{recursive:true});

const familyName="Stain";
const styleName="Regular";
const unitsPerEm=1000;
const ascender=800;
const descender=-200;
const defaultAdv=580;   // slightly tighter default
const wideAdv=700;      // for M/W/m/w
const spaceAdv=240;     // tighter space
const periodAdv=220;    // tighter period

const mkGlyph=(name,unicode,adv,pathFn)=>
  new opentype.Glyph({
    name,
    unicode,
    advanceWidth:adv,
    path:pathFn(new opentype.Path())
  });

const glyphSpace=mkGlyph(
  "space",
  " ".codePointAt(0),
  spaceAdv,
  p=>p
);

const glyphPeriod=mkGlyph(
  "period",
  ".".codePointAt(0),
  periodAdv,
  p=>{
    const x=80,w=70,h=120;
    p.moveTo(x,0);
    p.lineTo(x,h);
    p.lineTo(x+w,h);
    p.lineTo(x+w,0);
    p.close();
    return p;
  }
);

const glyphList=[
  glyphSpace,
  glyphPeriod,
  glyphA(opentype,defaultAdv),
  glypha(opentype,defaultAdv),
  glyphB(opentype,defaultAdv),
  glyphb(opentype,defaultAdv),
  glyphC(opentype,defaultAdv),
  glyphc(opentype,defaultAdv),
  glyphD(opentype,defaultAdv),
  glyphd(opentype,defaultAdv),
  glyphE(opentype,defaultAdv),
  glyphe(opentype,defaultAdv),
  glyphF(opentype,defaultAdv),
  glyphf(opentype,defaultAdv),
  glyphG(opentype,defaultAdv),
  glyphg(opentype,defaultAdv),
  glyphH(opentype,defaultAdv),
  glyphh(opentype,defaultAdv),
  glyphI(opentype,defaultAdv),
  glyphi(opentype,defaultAdv),
  glyphJ(opentype,defaultAdv),
  glyphj(opentype,defaultAdv),
  glyphK(opentype,defaultAdv),
  glyphk(opentype,defaultAdv),
  glyphL(opentype,defaultAdv),
  glyphl(opentype,defaultAdv),
  glyphM(opentype,wideAdv),
  glyphm(opentype,wideAdv),
  glyphN(opentype,defaultAdv),
  glyphn(opentype,defaultAdv),
  glyphO(opentype,defaultAdv),
  glypho(opentype,defaultAdv),
  glyphP(opentype,defaultAdv),
  glyphp(opentype,defaultAdv),
  glyphQ(opentype,defaultAdv),
  glyphq(opentype,defaultAdv),
  glyphR(opentype,defaultAdv),
  glyphr(opentype,defaultAdv),
  glyphS(opentype,defaultAdv),
  glyphsLowerS(opentype,defaultAdv),
  glyphT(opentype,defaultAdv),
  glypht(opentype,defaultAdv),
  glyphU(opentype,defaultAdv),
  glyphu(opentype,defaultAdv),
  glyphV(opentype,defaultAdv),
  glyphv(opentype,defaultAdv),
  glyphW(opentype,wideAdv),
  glyphw(opentype,wideAdv-40),
  glyphX(opentype,defaultAdv),
  glyphx(opentype,defaultAdv),
  glyphY(opentype,defaultAdv),
  glyphy(opentype,defaultAdv),
  glyphZ(opentype,defaultAdv),
  glyphz(opentype,defaultAdv)
];

const font=new opentype.Font({
  familyName,
  styleName,
  unitsPerEm,
  ascender,
  descender,
  glyphs:glyphList,
  copyright:"Author: Anon. License: CC0 1.0 Universal."
});

// basic kerning pairs (GPOS-based; opentype.js expects glyph indices)
const kernPairs=[
  ["A","V",-70],
  ["A","W",-70],
  ["A","Y",-70],
  ["A","T",-50],
  ["A","O",-25],
  ["A","Q",-25],
  ["V","A",-70],
  ["V","O",-40],
  ["V","a",-50],
  ["V","o",-50],
  ["V","e",-45],
  ["V","u",-40],
  ["W","A",-70],
  ["W","O",-40],
  ["W","a",-50],
  ["W","o",-50],
  ["W","e",-45],
  ["W","u",-40],
  ["Y","A",-80],
  ["Y","O",-40],
  ["Y","a",-70],
  ["Y","o",-70],
  ["Y","e",-65],
  ["Y","u",-55],
  ["T","A",-60],
  ["T","O",-40],
  ["T","a",-70],
  ["T","o",-70],
  ["T","e",-65],
  ["T","u",-60],
  ["T","y",-50],
  ["L","T",-50],
  ["L","V",-70],
  ["L","W",-70],
  ["L","Y",-80],
  ["F","a",-45],
  ["F","o",-45],
  ["F","e",-40],
  ["P","A",-70],
  ["P","a",-40],
  ["P","o",-40],
  ["K","O",-40],
  ["K","a",-40],
  ["K","o",-40],
  ["K","e",-35],
  ["K","u",-35],
  ["space","A",-20],
  ["space","V",-15],
  ["space","W",-15],
  ["space","Y",-15]
];

const nameToIndex=name=>font.glyphs.glyphIndex({name});

const pairsByScriptLang={
  DFLT:{
    dflt:kernPairs
  },
  latn:{
    dflt:kernPairs
  }
};

const lookups=[];
const features=[];
let lookupIndex=0;

for(const [script,tags] of Object.entries(pairsByScriptLang)){
  for(const [lang,entries] of Object.entries(tags)){
    const subTable={
      posFormat:1,
      coverage:{ format:1, glyphs:[] },
      pairSets:[]
    };
    const leftMap=new Map();

    for(const [lName,rName,val] of entries){
      const lIdx=nameToIndex(lName);
      const rIdx=nameToIndex(rName);
      if(lIdx<=0 || rIdx<=0 || !val)continue;
      if(!leftMap.has(lIdx))leftMap.set(lIdx,[]);
      leftMap.get(lIdx).push({ rIdx, val });
    }

    if(leftMap.size===0)continue;

    const coverageGlyphs=[];
    const pairSets=[];
    for(const [lIdx,items] of leftMap.entries()){
      coverageGlyphs.push(lIdx);
      pairSets.push({
        pairValueRecords:items.map(i=>({
          secondGlyph:i.rIdx,
          value1:{ xAdvance:i.val },
          value2:{}
        }))
      });
    }

    subTable.coverage.glyphs=coverageGlyphs;
    subTable.pairSets=pairSets;

    const lookup={
      lookupType:2,
      lookupFlag:0,
      subtables:[subTable]
    };

    const feature={
      tag:"kern",
      lookupListIndexes:[lookupIndex]
    };

    lookups.push(lookup);
    features.push({ script, lang, feature });
    lookupIndex++;
  }
}

if(lookups.length){
  font.tables.gpos={
    version:1,
    scripts:[],
    features:[],
    lookups
  };

  const scriptMap=new Map();

  for(const {script,lang,feature} of features){
    if(!scriptMap.has(script))scriptMap.set(script,{ tag:script, script:{ defaultLangSys:{ featureIndexes:[], lookupOrder:null, reqFeatureIndex:0xffff }, langSysRecords:[] } });
    const rec=scriptMap.get(script);
    const scriptObj=rec.script;

    const featureIndex=font.tables.gpos.features.length;
    font.tables.gpos.features.push(feature);

    if(lang==="dflt"){
      scriptObj.defaultLangSys.featureIndexes.push(featureIndex);
    }else{
      scriptObj.langSysRecords.push({
        tag:lang,
        langSys:{
          lookupOrder:null,
          reqFeatureIndex:0xffff,
          featureIndexes:[featureIndex]
        }
      });
    }
  }

  font.tables.gpos.scripts=[...scriptMap.values()];
}

const buf=Buffer.from(font.toArrayBuffer());
const outPath=path.join(outDir,"Stain.otf");
fs.writeFileSync(outPath,buf);
console.log(`Built ${outPath}`);
