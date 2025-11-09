// Candara-inspired readable sans, compact parametric geometry.
// Uses opentype.js Path; shapes designed for clarity at text sizes.
import opentype from "opentype.js";

const UPEM = 1000;
const ASC = 750;
const DSC = -250;
const XH = 520;
const CAP = 700;
const STROKE = 78;
const ROUND = 26;
const WIDTH = {
  default: 560,
  narrow: 500,
  wide: 620,
  space: 260
};

function r(x) {
  return Math.round(x);
}

function hBar(y, x1, x2, s = STROKE) {
  const p = new opentype.Path();
  p.moveTo(r(x1), r(y));
  p.lineTo(r(x2), r(y));
  p.lineTo(r(x2), r(y - s));
  p.lineTo(r(x1), r(y - s));
  p.close();
  return p;
}

function vBar(x, y1, y2, s = STROKE) {
  const p = new opentype.Path();
  p.moveTo(r(x), r(y1));
  p.lineTo(r(x + s), r(y1));
  p.lineTo(r(x + s), r(y2));
  p.lineTo(r(x), r(y2));
  p.close();
  return p;
}

function roundRect(x, y, w, h, r0 = ROUND) {
  const r = Math.min(r0, w / 2, h / 2);
  const p = new opentype.Path();
  p.moveTo(x + r, y);
  p.lineTo(x + w - r, y);
  p.quadraticCurveTo(x + w, y, x + w, y + r);
  p.lineTo(x + w, y + h - r);
  p.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  p.lineTo(x + r, y + h);
  p.quadraticCurveTo(x, y + h, x, y + h - r);
  p.lineTo(x, y + r);
  p.quadraticCurveTo(x, y, x + r, y);
  p.close();
  return p;
}

// Core uppercase set, simplified but readable and consistent.
const glyphBuilders = {
  "A": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    const baseY = 0;
    const topY = CAP;
    const half = aw / 2;
    const legW = STROKE * 0.9;
    p.moveTo(half, topY);
    p.lineTo(half + legW, topY);
    p.lineTo(aw - STROKE, baseY);
    p.lineTo(aw - STROKE - legW, baseY);
    p.lineTo(half, topY - STROKE * 0.2);
    p.lineTo(STROKE + legW, baseY);
    p.lineTo(STROKE, baseY);
    p.close();
    p.extend(hBar(XH + STROKE * 0.2, STROKE * 1.3, aw - STROKE * 1.3, STROKE * 0.9));
    return { path: p, width: aw };
  },
  "B": () => {
    const aw = WIDTH.wide;
    const left = STROKE * 0.8;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP, STROKE * 0.9));
    p.extend(roundRect(left, CAP - 310, aw - left * 1.9, 150, 40));
    p.extend(roundRect(left, 80, aw - left * 1.9, 150, 40));
    return { path: p, width: aw };
  },
  "C": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    const r = (aw * 0.9) / 2;
    const cx = aw / 2 + 10;
    const top = CAP;
    const bot = 40;
    p.moveTo(cx + r - 20, top - 20);
    p.quadraticCurveTo(cx, top, cx - r + 40, top - 40);
    p.quadraticCurveTo(cx - r - 40, (top + bot) / 2, cx - r + 40, bot + 40);
    p.quadraticCurveTo(cx, bot, cx + r - 20, bot + 20);
    p.lineTo(cx + r - 20 + STROKE * 0.6, bot + 50);
    p.quadraticCurveTo(cx + 50, bot + 4, cx - r + 80, bot + 80);
    p.quadraticCurveTo(cx - r + 4, (top + bot) / 2, cx - r + 80, top - 80);
    p.quadraticCurveTo(cx + 40, top - 6, cx + r - 20 + STROKE * 0.6, top - 50);
    p.close();
    return { path: p, width: aw };
  },
  "D": () => {
    const aw = WIDTH.wide;
    const left = STROKE * 0.85;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP, STROKE * 0.9));
    p.extend(roundRect(left, 40, aw - left * 1.6, CAP - 80, 70));
    return { path: p, width: aw };
  },
  "E": () => {
    const aw = WIDTH.default;
    const left = STROKE * 0.85;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP, STROKE * 0.9));
    p.extend(hBar(CAP, left, aw - STROKE * 0.4));
    p.extend(hBar(XH + 25, left, aw - STROKE * 0.8, STROKE * 0.75));
    p.extend(hBar(40, left, aw - STROKE * 0.4));
    return { path: p, width: aw };
  },
  "F": () => {
    const aw = WIDTH.default;
    const left = STROKE * 0.85;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP, STROKE * 0.9));
    p.extend(hBar(CAP, left, aw - STROKE * 0.4));
    p.extend(hBar(XH + 25, left, aw - STROKE * 0.9, STROKE * 0.75));
    return { path: p, width: aw };
  },
  "G": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    const r = (aw * 0.92) / 2;
    const cx = aw / 2 + 10;
    const top = CAP;
    const bot = 40;
    p.moveTo(cx + r - 24, top - 26);
    p.quadraticCurveTo(cx, top + 4, cx - r + 60, top - 60);
    p.quadraticCurveTo(cx - r - 24, (top + bot) / 2, cx - r + 40, bot + 40);
    p.quadraticCurveTo(cx, bot - 4, cx + r - 40, bot + 26);
    p.lineTo(cx + r - 40, XH + 10);
    p.lineTo(cx + r - 120, XH + 10);
    p.lineTo(cx + r - 120, XH - 60);
    p.lineTo(cx + 40, XH - 60);
    p.lineTo(cx + 40, bot + 60);
    p.close();
    return { path: p, width: aw };
  },
  "H": () => {
    const aw = WIDTH.wide;
    const left = STROKE * 0.85;
    const right = aw - STROKE * 1.5;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP));
    p.extend(vBar(right, 0, CAP));
    p.extend(hBar(XH + 20, left, right + STROKE));
    return { path: p, width: aw };
  },
  "I": () => {
    const aw = WIDTH.narrow;
    const c = aw / 2 - STROKE / 2;
    const p = new opentype.Path();
    p.extend(hBar(CAP, STROKE * 0.4, aw - STROKE * 0.4, STROKE * 0.8));
    p.extend(hBar(40 + STROKE * 0.2, STROKE * 0.4, aw - STROKE * 0.4, STROKE * 0.8));
    p.extend(vBar(c, 40 + STROKE * 0.8, CAP - STROKE * 1.2, STROKE * 0.8));
    return { path: p, width: aw };
  },
  "J": () => {
    const aw = WIDTH.default;
    const p = new opentype.Path();
    p.extend(hBar(CAP, STROKE * 0.4, aw - STROKE * 0.3, STROKE * 0.8));
    const w = STROKE * 0.85;
    const x = aw - STROKE * 1.3;
    p.extend(vBar(x, 100, CAP - STROKE, w));
    p.extend(roundRect(aw * 0.35, 0, aw * 0.4, 120, 40));
    return { path: p, width: aw };
  },
  "K": () => {
    const aw = WIDTH.wide;
    const left = STROKE * 0.85;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP));
    p.moveTo(aw - STROKE, CAP);
    p.lineTo(aw - STROKE * 1.4, CAP - STROKE * 0.8);
    p.lineTo(left + STROKE * 1.2, XH + STROKE * 0.2);
    p.lineTo(left + STROKE * 1.8, XH - STROKE * 0.5);
    p.close();
    p.moveTo(aw - STROKE, 0);
    p.lineTo(aw - STROKE * 1.5, STROKE * 0.8);
    p.lineTo(left + STROKE * 1.2, XH - STROKE * 0.2);
    p.lineTo(left + STROKE * 1.9, XH + STROKE * 0.4);
    p.close();
    return { path: p, width: aw };
  },
  "L": () => {
    const aw = WIDTH.default;
    const left = STROKE * 0.85;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP));
    p.extend(hBar(40, left, aw - STROKE * 0.4));
    return { path: p, width: aw };
  },
  "M": () => {
    const aw = WIDTH.wide + 40;
    const p = new opentype.Path();
    const s = STROKE * 0.88;
    p.extend(vBar(STROKE, 0, CAP, s));
    p.extend(vBar(aw - STROKE * 1.8, 0, CAP, s));
    p.moveTo(STROKE + s, CAP);
    p.lineTo(aw / 2, CAP * 0.4);
    p.lineTo(aw - STROKE * 1.8 - s, CAP);
    p.lineTo(aw - STROKE * 1.8 - s * 1.4, CAP);
    p.lineTo(aw / 2, CAP * 0.52);
    p.lineTo(STROKE + s * 1.4, CAP);
    p.close();
    return { path: p, width: aw };
  },
  "N": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    const s = STROKE * 0.9;
    p.extend(vBar(STROKE, 0, CAP, s));
    p.extend(vBar(aw - STROKE * 1.6, 0, CAP, s));
    p.moveTo(STROKE + s, CAP);
    p.lineTo(STROKE + s * 1.6, CAP);
    p.lineTo(aw - STROKE * 1.6 - s, 0);
    p.lineTo(aw - STROKE * 1.6 - s * 1.6, 0);
    p.close();
    return { path: p, width: aw };
  },
  "O": () => {
    const aw = WIDTH.wide;
    const outer = roundRect(STROKE * 0.8, 40, aw - STROKE * 1.6, CAP - 80, 90);
    const inner = roundRect(STROKE * 0.8 + 55, 40 + 55, aw - STROKE * 1.6 - 110, CAP - 80 - 110, 70);
    const p = new opentype.Path();
    p.commands = outer.commands.concat(inner.commands);
    return { path: p, width: aw };
  },
  "P": () => {
    const aw = WIDTH.default;
    const left = STROKE * 0.85;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP));
    p.extend(roundRect(left, CAP - 290, aw - left * 1.7, 210, 50));
    return { path: p, width: aw };
  },
  "Q": () => {
    const aw = WIDTH.wide;
    const base = glyphBuilders["O"]();
    const p = new opentype.Path();
    p.commands = base.path.commands.slice();
    p.moveTo(aw * 0.55, 120);
    p.lineTo(aw * 0.8, -10);
    p.lineTo(aw * 0.75, 40);
    p.lineTo(aw * 0.52, 155);
    p.close();
    return { path: p, width: aw };
  },
  "R": () => {
    const aw = WIDTH.wide;
    const left = STROKE * 0.85;
    const p = new opentype.Path();
    p.extend(vBar(left, 0, CAP));
    p.extend(roundRect(left, CAP - 290, aw - left * 1.9, 210, 50));
    p.moveTo(aw - STROKE, 0);
    p.lineTo(aw - STROKE * 1.5, STROKE * 0.9);
    p.lineTo(left + STROKE * 1.5, XH - 40);
    p.lineTo(left + STROKE * 2.0, XH - 80);
    p.close();
    return { path: p, width: aw };
  },
  "S": () => {
    const aw = WIDTH.default;
    const p = new opentype.Path();
    p.moveTo(aw - 40, CAP - 40);
    p.quadraticCurveTo(aw * 0.35, CAP + 10, STROKE * 0.6, CAP - 120);
    p.quadraticCurveTo(-10, CAP - 220, aw * 0.3, CAP - 260);
    p.quadraticCurveTo(aw - 30, CAP - 320, aw - 40, CAP - 380);
    p.quadraticCurveTo(aw + 10, CAP - 460, aw * 0.5, CAP - 520);
    p.quadraticCurveTo(40, CAP - 540, 40, CAP - 420);
    p.quadraticCurveTo(40, CAP - 320, aw * 0.4, CAP - 270);
    p.quadraticCurveTo(aw - 20, CAP - 220, aw - 40, CAP - 140);
    p.quadraticCurveTo(aw + 10, CAP - 40, aw * 0.5, 10);
    p.quadraticCurveTo(40, 40, 40, 120);
    p.quadraticCurveTo(40, 220, aw * 0.5, 260);
    p.quadraticCurveTo(aw - 30, 300, aw - 40, 380);
    p.close();
    return { path: p, width: aw };
  },
  "T": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    p.extend(hBar(CAP, STROKE * 0.4, aw - STROKE * 0.4));
    const c = aw / 2 - STROKE / 2;
    p.extend(vBar(c, 0, CAP, STROKE * 0.9));
    return { path: p, width: aw };
  },
  "U": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    const s = STROKE * 0.9;
    const left = STROKE;
    const right = aw - STROKE * 2;
    p.extend(vBar(left, 180, CAP, s));
    p.extend(vBar(right, 180, CAP, s));
    p.extend(roundRect(left, 40, right - left + s, 160, 70));
    return { path: p, width: aw };
  },
  "V": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    const mid = aw / 2;
    const s = STROKE * 0.9;
    p.moveTo(STROKE, CAP);
    p.lineTo(STROKE + s, CAP);
    p.lineTo(mid, 40);
    p.lineTo(mid - s, 40);
    p.close();
    p.moveTo(aw - STROKE, CAP);
    p.lineTo(aw - STROKE - s, CAP);
    p.lineTo(mid, 40);
    p.lineTo(mid + s, 40);
    p.close();
    return { path: p, width: aw };
  },
  "W": () => {
    const aw = WIDTH.wide + 80;
    const p = new opentype.Path();
    const s = STROKE * 0.8;
    const x1 = STROKE;
    const x2 = aw * 0.34;
    const x3 = aw * 0.66;
    const x4 = aw - STROKE;
    const yTop = CAP;
    const yBot = 40;
    p.moveTo(x1, yTop);
    p.lineTo(x1 + s, yTop);
    p.lineTo(x2, yBot);
    p.lineTo(x2 - s, yBot);
    p.close();
    p.moveTo(x2, yBot);
    p.lineTo(x2 + s, yBot);
    p.lineTo(x3, yTop * 0.52);
    p.lineTo(x3 - s, yTop * 0.52);
    p.close();
    p.moveTo(x3, yTop * 0.52);
    p.lineTo(x3 + s, yTop * 0.52);
    p.lineTo(x4, yTop);
    p.lineTo(x4 - s, yTop);
    p.close();
    return { path: p, width: aw };
  },
  "X": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    const s = STROKE * 0.8;
    p.moveTo(STROKE, CAP);
    p.lineTo(STROKE + s, CAP);
    p.lineTo(aw - STROKE, 0);
    p.lineTo(aw - STROKE - s, 0);
    p.close();
    p.moveTo(aw - STROKE, CAP);
    p.lineTo(aw - STROKE - s, CAP);
    p.lineTo(STROKE, 0);
    p.lineTo(STROKE + s, 0);
    p.close();
    return { path: p, width: aw };
  },
  "Y": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    const s = STROKE * 0.85;
    const mid = aw / 2;
    p.moveTo(STROKE, CAP);
    p.lineTo(STROKE + s, CAP);
    p.lineTo(mid, XH);
    p.lineTo(mid - s, XH);
    p.close();
    p.moveTo(aw - STROKE, CAP);
    p.lineTo(aw - STROKE - s, CAP);
    p.lineTo(mid, XH);
    p.lineTo(mid + s, XH);
    p.close();
    p.extend(vBar(mid - s / 2, 0, XH));
    return { path: p, width: aw };
  },
  "Z": () => {
    const aw = WIDTH.wide;
    const p = new opentype.Path();
    p.extend(hBar(CAP, STROKE * 0.4, aw - STROKE * 0.4));
    p.extend(hBar(40, STROKE * 0.6, aw - STROKE * 0.4));
    p.moveTo(aw - STROKE * 0.8, CAP - STROKE * 1.1);
    p.lineTo(aw - STROKE * 1.5, CAP - STROKE * 1.1);
    p.lineTo(STROKE * 0.6, 40 + STROKE * 1.1);
    p.lineTo(STROKE * 1.3, 40 + STROKE * 1.1);
    p.close();
    return { path: p, width: aw };
  }
};

function buildDigit(d) {
  const aw = WIDTH.default;
  const p = roundRect(STROKE * 0.9, 80, aw - STROKE * 1.8, CAP - 160, 80);
  if ("0698".includes(d)) {
    const inner = roundRect(
      STROKE * 0.9 + 55,
      80 + 55,
      aw - STROKE * 1.8 - 110,
      CAP - 160 - 110,
      60
    );
    const path = new opentype.Path();
    path.commands = p.commands.concat(inner.commands);
    return { path, width: aw };
  }
  if ("13".includes(d)) {
    const path = new opentype.Path();
    path.extend(vBar(aw / 2 - STROKE * 0.4, 60, CAP - 20, STROKE * 0.8));
    if (d === "3") {
      path.extend(roundRect(aw / 2 - 40, CAP - 260, 150, 90, 40));
      path.extend(roundRect(aw / 2 - 40, 100, 150, 90, 40));
    }
    return { path, width: aw };
  }
  if ("24".includes(d)) {
    const path = new opentype.Path();
    if (d === "2") {
      path.extend(hBar(CAP - 20, STROKE * 0.6, aw - STROKE * 0.6));
      path.extend(roundRect(aw - 170, 200, 120, 100, 40));
      path.extend(hBar(80, STROKE * 0.6, aw - STROKE * 0.6));
    } else {
      path.extend(vBar(STROKE * 0.8, 200, CAP, STROKE * 0.8));
      path.extend(hBar(200, STROKE * 0.8, aw - STROKE * 0.8));
      path.extend(vBar(aw - STROKE * 1.6, 60, CAP, STROKE * 0.8));
    }
    return { path, width: aw };
  }
  if ("57".includes(d)) {
    const path = new opentype.Path();
    if (d === "5") {
      path.extend(hBar(CAP - 20, STROKE * 0.6, aw - STROKE * 0.6));
      path.extend(hBar(200, STROKE * 0.6, aw - STROKE * 0.6));
      path.extend(vBar(STROKE * 0.6, 200, CAP, STROKE * 0.7));
      path.extend(roundRect(aw - 200, 80, 140, 120, 50));
    } else {
      path.extend(vBar(aw - STROKE * 1.6, 200, CAP, STROKE * 0.8));
      path.extend(hBar(CAP - 20, STROKE * 0.6, aw - STROKE * 0.6));
      path.extend(roundRect(STROKE * 0.6, 60, 160, 120, 60));
    }
    return { path, width: aw };
  }
  return { path: p, width: aw };
}

function spacing(ch) {
  if (ch === "I") return WIDTH.narrow;
  if ("MW".includes(ch)) return WIDTH.wide + 40;
  if (ch === "1") return WIDTH.narrow;
  return WIDTH.default;
}

export function buildGlyph(ch) {
  const p = new opentype.Path();
  let width = spacing(ch);
  if (glyphBuilders[ch]) {
    const { path, width: w } = glyphBuilders[ch]();
    return { path, width: w || width };
  }
  if (/[0-9]/.test(ch)) {
    const { path: dp, width: w } = buildDigit(ch);
    return { path: dp, width: w };
  }
  if (ch === " ") {
    return { path: new opentype.Path(), width: WIDTH.space };
  }
  if (".,:;!?".includes(ch)) {
    const dot = roundRect(WIDTH.default / 2 - 24, 40, 48, 70, 20);
    return { path: dot, width: WIDTH.default / 2 };
  }
  if ("-–—".includes(ch)) {
    const len = ch === "-" ? WIDTH.default / 2 : WIDTH.wide * 0.8;
    const bar = hBar(XH / 2, 40, 40 + len, STROKE * 0.45);
    return { path: bar, width: len + 80 };
  }
  if (ch === "@") {
    const outer = roundRect(40, 80, WIDTH.wide + 40, CAP - 200, 80);
    const inner = roundRect(120, 130, WIDTH.wide - 40, CAP - 300, 60);
    const path = new opentype.Path();
    path.commands = outer.commands.concat(inner.commands);
    return { path, width: WIDTH.wide + 80 };
  }
  return { path: new opentype.Path(), width: WIDTH.default };
}

export const METRICS = {
  unitsPerEm: UPEM,
  ascender: ASC,
  descender: DSC
};
