// ✿ PowerPoint "Morph" recreated for the web
// Each slide = list of objects (pictures/text) in % of the slide. Objects that share the same
// picture between two slides glide to their new place; the rest fade in/out.
window.MorphStage = function (host, slides, base) {
  host.classList.add("morph-stage");
  const pool = new Map(); // id -> {el, o}
  let uid = 0, cur = -1;
  const DUO = "grayscale(1) brightness(1.08) contrast(.92)";
  const CLR = "grayscale(0) brightness(1) contrast(1)";
  const keyOf = (o) => (o.mk ? "m:" + o.mk : "t:" + o.text);
  const make = (o) => {
    const el = document.createElement("div");
    el.className = "mo";
    if (o.src) {
      const im = document.createElement("img");
      im.src = base + o.src; im.alt = ""; im.decoding = "async"; im.draggable = false;
      el.appendChild(im);
    } else {
      el.classList.add("mo-text");
      el.textContent = o.text;
    }
    host.appendChild(el);
    return el;
  };
  const apply = (el, o, opacity) => {
    const s = el.style;
    s.left = o.x + "%"; s.top = o.y + "%"; s.width = o.w + "%"; s.height = o.h + "%";
    s.zIndex = o.z;
    s.transform = `rotate(${o.rot || 0}deg) scale(${o.flipH ? -1 : 1},${o.flipV ? -1 : 1})`;
    s.borderRadius = o.radius ? o.radius + "cqw" : "0";
    s.opacity = opacity ?? (o.alpha ?? 1);
    if (o.src) {
      s.filter = o.duo ? DUO : CLR;
      const c = o.crop || { l: 0, t: 0, r: 0, b: 0 }, vw = 1 - c.l - c.r, vh = 1 - c.t - c.b;
      const im = el.firstChild.style;
      im.width = 100 / vw + "%"; im.height = 100 / vh + "%";
      im.left = (-c.l / vw) * 100 + "%"; im.top = (-c.t / vh) * 100 + "%";
    } else {
      s.fontSize = o.size + "cqw"; s.textAlign = { ctr: "center", r: "right" }[o.align] || "left";
    }
  };
  const match = (fromItems, toObjs) => {
    // greedy: same picture/text, nearest centre first
    const pairs = [], usedF = new Set(), usedT = new Set(), cand = [];
    fromItems.forEach((f, fi) => toObjs.forEach((t, ti) => {
      if (keyOf(f.o) !== keyOf(t)) return;
      const d = Math.hypot(f.o.x + f.o.w / 2 - (t.x + t.w / 2), f.o.y + f.o.h / 2 - (t.y + t.h / 2));
      cand.push([d, fi, ti]);
    }));
    cand.sort((a, b) => a[0] - b[0]).forEach(([, fi, ti]) => {
      if (usedF.has(fi) || usedT.has(ti)) return;
      usedF.add(fi); usedT.add(ti); pairs.push([fi, ti]);
    });
    return { pairs, usedF, usedT };
  };
  const go = (i, instant) => {
    if (i === cur) return;
    const slide = slides[i], dur = instant ? 0 : Math.min(slide.morphDur || 1800, 1800);
    host.style.setProperty("--mdur", dur + "ms");
    const items = [...pool.entries()].map(([id, v]) => ({ id, ...v }));
    const { pairs, usedF, usedT } = match(items, slide.objs);
    const next = new Map();
    pairs.forEach(([fi, ti]) => { const it = items[fi]; apply(it.el, slide.objs[ti]); it.o = slide.objs[ti]; next.set(it.id, it); });
    slide.objs.forEach((o, ti) => {
      if (usedT.has(ti)) return;
      const el = make(o);
      el.classList.add("no-anim"); apply(el, o, 0); void el.offsetWidth; el.classList.remove("no-anim");
      requestAnimationFrame(() => (el.style.opacity = o.alpha ?? 1));
      if (instant) el.style.opacity = o.alpha ?? 1;
      next.set(++uid, { el, o });
    });
    items.forEach((it, fi) => {
      if (usedF.has(fi)) return;
      it.el.style.opacity = 0; it.el.style.zIndex = 0;
      setTimeout(() => it.el.remove(), dur + 50);
    });
    pool.clear(); next.forEach((v, k) => pool.set(k, v));
    host.classList.toggle("instant", !!instant);
    cur = i;
  };
  return { go, get index() { return cur; } };
};
