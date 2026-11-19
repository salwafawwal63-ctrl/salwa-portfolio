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
