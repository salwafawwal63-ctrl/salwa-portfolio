// reveal, cursor, magnetic + lazy Instagram embeds
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

let igLoaded = false;
const loadIG = () => {
  if (igLoaded) return; igLoaded = true;
  const s = document.createElement("script");
  s.src = "https://www.instagram.com/embed.js"; s.async = true;
  s.onload = () => window.instgrm && window.instgrm.Embeds.process();
  document.body.appendChild(s);
};
const reels = document.getElementById("reels");
new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { loadIG(); o.disconnect(); } }, { rootMargin: "600px" }).observe(reels);

const fine = matchMedia("(hover:hover)").matches, calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const cur = document.querySelector(".cursor");
if (fine && !calm) {
  let x = 0, y = 0, cx = 0, cy = 0;
  addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; cur.style.opacity = 1; });
  (function loop() { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  document.addEventListener("mouseover", (e) => cur.classList.toggle("big", !!e.target.closest("a,button,.reel")));
  document.querySelectorAll(".magnetic").forEach((b) => {
    b.addEventListener("mousemove", (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`; });
    b.addEventListener("mouseleave", () => (b.style.transform = ""));
  });
}

// copy swatch hex
const toast = document.getElementById("toast");
const showToast = (t) => { if (!toast) return; toast.textContent = t; toast.classList.add("show"); clearTimeout(showToast.t); showToast.t = setTimeout(() => toast.classList.remove("show"), 1800); };
document.querySelectorAll(".sw").forEach((b) => b.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(b.dataset.hex); showToast(`${b.dataset.hex} copied ♡`); } catch { showToast(b.dataset.hex); }
}));

// zoom viewer with groups + arrows + swipe
const zoom = document.getElementById("zoom");
if (zoom) {
  const zImg = zoom.querySelector("img"), zCount = zoom.querySelector(".z-count");
  let group = [], idx = 0;
  const show = () => { zImg.src = group[idx].src; zImg.alt = group[idx].alt; zCount.textContent = `${idx + 1} / ${group.length}`; };
  const open = (img) => { group = [...document.querySelectorAll(`.zoomable[data-group="${img.dataset.group}"]`)]; idx = group.indexOf(img); show(); zoom.classList.add("open"); zoom.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; };
  const close = () => { zoom.classList.remove("open"); zoom.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };
  const step = (d) => { idx = (idx + d + group.length) % group.length; show(); };
  let moved = false;
  document.querySelectorAll(".zoomable").forEach((img) => img.addEventListener("click", () => { if (!moved) open(img); }));
  zoom.querySelector(".z-close").onclick = close;
  zoom.querySelector(".z-prev").onclick = (e) => { e.stopPropagation(); step(-1); };
  zoom.querySelector(".z-next").onclick = (e) => { e.stopPropagation(); step(1); };
  zoom.addEventListener("click", (e) => { if (e.target === zoom) close(); });
  addEventListener("keydown", (e) => { if (!zoom.classList.contains("open")) return; if (e.key === "Escape") close(); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); });
  let sx = 0; zoom.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
  zoom.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1); });

  // drag-to-scroll brochure strip on desktop
  document.querySelectorAll(".strip").forEach((s) => {
    let down = false, x0 = 0, l0 = 0;
    s.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") return; down = true; moved = false; x0 = e.clientX; l0 = s.scrollLeft; });
    addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - x0; if (Math.abs(dx) > 5) { moved = true; s.classList.add("dragging"); } s.scrollLeft = l0 - dx; });
    addEventListener("pointerup", () => { if (!down) return; down = false; s.classList.remove("dragging"); setTimeout(() => (moved = false), 0); });
    s.querySelectorAll("img").forEach((i) => i.addEventListener("dragstart", (e) => e.preventDefault()));
  });
}
