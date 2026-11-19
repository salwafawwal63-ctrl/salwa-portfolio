// ✿ Salwa Fawal portfolio
const projects = [
  {
    id: "kiwi",
    theme: { bg: 'radial-gradient(120% 80% at 85% 0%, #c36226 0%, transparent 55%), radial-gradient(90% 70% at 0% 100%, #a43f2e 0%, transparent 60%), linear-gradient(160deg, #3b8086 0%, #1f5559 55%, #180d0d 100%)', ink: '#FFF6EE', soft: 'rgba(255,246,238,.78)', accent: '#F7B27A', glow: 'rgba(195,98,38,.55)', dark: true, hero: 'img/kiwi-stands.jpg', heroOpacity: .4 }, title: "Kiwi Garden Juices", cat: "branding social", label: "Branding · Social campaigns", year: "GCC",
    thumb: "img/kiwi-soon.jpg", wide: true,
    blurb: "Logo + campaign visuals for a juice & ice-cream bar",
    desc: "A bold geometric monogram that hides the word “kiwi”, paired with juicy product visuals: in-store stand displays, Ramadan offer posts and “coming soon” teasers that make you want a cup right now.",
    tags: ["Logo design", "Arabic typography", "Ramadan campaign", "Product visuals", "Point-of-sale"],
    images: [["kiwi-logo.jpg"], ["kiwi-stands.jpg"], ["kiwi-offers.jpg", "full"], ["kiwi-soon.jpg", "full"]],
  },
  {
    id: "bustan",
    theme: { bg: 'radial-gradient(100% 70% at 100% 0%, #c9e29a 0%, transparent 60%), linear-gradient(165deg, #9bb677 0%, #e7ebe3 60%, #fefae9 100%)', ink: '#24341A', soft: 'rgba(36,52,26,.75)', accent: '#5E8A2A', glow: 'rgba(139,191,64,.45)', dark: false }, title: "Bustan", cat: "branding", label: "Brand identity", year: "✿",
    thumb: "img/bustan.jpg",
    blurb: "Bilingual identity for a food retail brand",
    desc: "Brand identity for a food retail company with a global online store. Two directions in Arabic and English — one fresh and grounded in nature, one playful with a hill-and-apple mark — built around growth, health and freshness.",
    tags: ["Logo concept", "Bilingual wordmark", "Colour system", "Typography"],
    images: [["bustan.jpg", "full"]],
  },
  {
    id: "decor",
    theme: { bg: 'radial-gradient(90% 70% at 10% 0%, #73abae 0%, transparent 60%), linear-gradient(170deg, #b5cbcb 0%, #c2cac7 45%, #e0dee3 100%)', ink: '#22393A', soft: 'rgba(34,57,58,.75)', accent: '#3F7F82', glow: 'rgba(115,171,174,.55)', dark: false }, title: "DECOR Magazine", cat: "print", label: "Editorial · InDesign", year: "print",
    thumb: "img/decor-cover.jpg",
    blurb: "A calm, sage-toned interiors magazine",
    desc: "A full furniture & interiors magazine designed in InDesign — cover, table of contents and an eco-friendly design feature, then styled into cozy real-life mockups.",
    tags: ["Editorial layout", "InDesign", "Cover design", "Mockups"],
    images: [["decor-spread.jpg", "full"], ["decor-m1.jpg"], ["decor-m2.jpg"], ["decor-m3.jpg"], ["decor-m4.jpg"]],
  },
  {
    id: "botmind",
    theme: { bg: 'radial-gradient(110% 80% at 90% 0%, #188cc2 0%, transparent 60%), linear-gradient(165deg, #0e72b2 0%, #1e447b 45%, #1a2451 100%)', ink: '#F2F8FF', soft: 'rgba(242,248,255,.78)', accent: '#8FD3FF', glow: 'rgba(24,140,194,.6)', dark: true }, title: "Botmind", cat: "social", label: "Instagram carousel", year: "swipe →",
    thumb: "img/bot-1.jpg",
    blurb: "An AI-service carousel with a cute robot guide",
    desc: "A six-slide swipeable carousel explaining an AI customer-service product. One continuous path flows across every slide so the story keeps you swiping until the call to action.",
    tags: ["Carousel", "Storytelling", "Tech brand", "Social graphics"],
    gallery: "three",
    images: [["bot-1.jpg"], ["bot-2.jpg"], ["bot-3.jpg"], ["bot-4.jpg"], ["bot-5.jpg"], ["bot-6.jpg"]],
  },
  {
    id: "shine",
    theme: { bg: 'radial-gradient(100% 70% at 0% 0%, #d6be47 0%, transparent 60%), radial-gradient(90% 70% at 100% 100%, #5cba82 0%, transparent 60%), linear-gradient(160deg, #e9dc8f 0%, #dfe4d7 55%, #b9d6b5 100%)', ink: '#2E3A1C', soft: 'rgba(46,58,28,.75)', accent: '#3E8F5E', glow: 'rgba(185,188,83,.55)', dark: false }, title: "Shine Art", cat: "branding", label: "Brand identity", year: "2024",
    thumb: "img/shine-hero.jpg", wide: true,
    blurb: "A sparkly identity for an art-materials store",
    desc: "A custom typeface inspired by art supplies — paper rolls, books and pencils — with a gold-to-green gradient, twinkling star motif, logo explorations and a full stationery set.",
    tags: ["Custom typeface", "Logo", "Colour palette", "Stationery"],
    images: [["shine-full.jpg", "full"], ["shine-logo.jpg"], ["shine-stat.jpg"]],
  },
  {
    id: "dg",
    theme: { bg: 'radial-gradient(110% 80% at 100% 0%, #deb671 0%, transparent 55%), linear-gradient(165deg, #c9a15e 0%, #66523a 50%, #2f2418 100%)', ink: '#FFF5E6', soft: 'rgba(255,245,230,.8)', accent: '#F3D18E', glow: 'rgba(201,161,94,.55)', dark: true }, title: "Design Glam", cat: "branding", label: "Brand & moodboard", year: "interior",
    thumb: "img/dg-yellow.jpg",
    blurb: "Warm, glam identity for an interior studio",
    desc: "Logo and visual mood for an interior design brand: a floor-plan-meets-monogram mark (“plan + DG = Design Glam”) with a warm ochre, mocha and charcoal palette.",
    tags: ["Logo", "Moodboard", "Colour palette", "Interior brand"],
    images: [["dg-logo.jpg", "full"], ["dg-full.jpg", "full"]],
  },
  {
    id: "dkb",
    theme: { bg: 'radial-gradient(120% 80% at 50% 0%, #c42a2d 0%, #a42426 25%, transparent 70%), radial-gradient(80% 60% at 0% 100%, #6e1416 0%, transparent 70%), linear-gradient(180deg, #8f1d20 0%, #3a0d10 55%, #150d0e 100%)', ink: '#FFF1EE', soft: 'rgba(255,241,238,.8)', accent: '#FF8A80', glow: 'rgba(196,42,45,.6)', dark: true }, title: "DKB Gym", cat: "social", label: "Instagram posters", year: "Qatar",
    thumb: "img/dkb-1.jpg",
    blurb: "High-energy posts for a martial-arts gym",
    desc: "A punchy Instagram poster series for a gym in Musheireb, Qatar — torn-paper textures, bold condensed type and a red-and-charcoal palette that feels as energetic as a training session.",
    tags: ["Instagram posts", "Gulf client", "Photo manipulation", "Typography"],
    gallery: "three",
    images: [["dkb-1.jpg"], ["dkb-2.jpg"], ["dkb-3.jpg"]],
  },
  {
    id: "mug",
    theme: { bg: 'radial-gradient(100% 70% at 80% 0%, #6b4a3a 0%, transparent 60%), linear-gradient(170deg, #3a2726 0%, #2e2122 50%, #1a1517 100%)', ink: '#F6EADF', soft: 'rgba(246,234,223,.78)', accent: '#E3B98F', glow: 'rgba(160,110,80,.5)', dark: true }, title: "MUG Coffeeshop", cat: "print", label: "Menu design", year: "☕",
    thumb: "img/mug.jpg", wide: true,
    blurb: "A moody, hand-drawn café menu",
    desc: "A three-panel café menu with delicate single-line illustrations of coffees, frappés and smoothies on a rich dark-roast texture — easy to read, lovely to hold.",
    tags: ["Menu design", "Line illustration", "Print"],
    images: [["mug.jpg", "full"]],
  },
];

// build grid
const grid = document.getElementById("grid");
grid.innerHTML = projects.map((p) => `
  <article class="card reveal ${p.wide ? "wide" : ""}" data-cat="${p.cat}" data-id="${p.id}" tabindex="0">
    <div class="thumb">
      <img src="${p.thumb}" alt="${p.title} — ${p.label}" loading="lazy" />
      <span class="yr">${p.year}</span>
      <span class="view">peek inside ✿</span>
    </div>
    <div class="meta">
      <div><h3>${p.title}</h3><p>${p.label} · ${p.blurb}</p></div>
      <span class="arrow">→</span>
    </div>
  </article>`).join("");

// filters
document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const f = chip.dataset.filter;
    document.querySelectorAll(".card").forEach((card) => {
      const show = f === "all" || card.dataset.cat.split(" ").includes(f);
      card.classList.toggle("hidden", !show);
      if (show) card.classList.add("in");
    });
  });
});

// lightbox
const lb = document.getElementById("lightbox");
const lbGal = document.getElementById("lb-gallery");
function openProject(id) {
  const p = projects.find((x) => x.id === id);
  document.getElementById("lb-cat").textContent = p.label;
  document.getElementById("lb-title").textContent = p.title;
  document.getElementById("lb-desc").textContent = p.desc;
  document.getElementById("lb-tags").innerHTML = p.tags.map((t) => `<span>${t}</span>`).join("");
  lbGal.className = "lb-gallery" + (p.gallery ? " " + p.gallery : "");
  lbGal.innerHTML = p.images.map(([src, cls]) => `<img src="img/${src}" class="${cls || ""}" alt="${p.title}" loading="lazy" />`).join("");
  const t = p.theme, inner = lb.querySelector(".lb-inner");
  inner.style.setProperty("--lb-bg", t.bg);
  inner.style.setProperty("--lb-ink", t.ink);
  inner.style.setProperty("--lb-soft", t.soft);
  inner.style.setProperty("--lb-accent", t.accent);
  inner.style.setProperty("--lb-glow", t.glow);
  inner.style.setProperty("--lb-hero", `url(${t.hero || p.thumb})`);
  inner.style.setProperty("--lb-hero-o", t.heroOpacity ?? .55);
  inner.classList.toggle("dark", t.dark);
  lb.style.setProperty("--lb-glow", t.glow);
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  lb.scrollTop = 0;
  document.body.style.overflow = "hidden";
}
function closeLb() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
grid.addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) openProject(c.dataset.id); });
grid.addEventListener("keydown", (e) => { const c = e.target.closest(".card"); if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProject(c.dataset.id); } });
lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".lb-close")) closeLb(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLb(); });

// reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => {
  if (el.closest(".hero")) el.style.transitionDelay = `${i * 0.08}s`;
  io.observe(el);
});
document.querySelectorAll(".about-card").forEach((el) => io.observe(el));

// count up
const counters = document.querySelectorAll("[data-count]");
const cio = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count; let n = 0;
    const t = setInterval(() => { n++; el.textContent = n; if (n >= end) clearInterval(t); }, 110);
    cio.unobserve(el);
  });
});
counters.forEach((c) => cio.observe(c));

const fine = matchMedia("(hover:hover)").matches;
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

// cursor
const cur = document.querySelector(".cursor");
if (fine && !calm) {
  let x = 0, y = 0, cx = 0, cy = 0;
  addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; cur.style.opacity = 1; });
  (function loop() { cx += (x - cx) * 0.2; cy += (y - cy) * 0.2; cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
  document.addEventListener("mouseover", (e) => cur.classList.toggle("big", !!e.target.closest("a,button,.card,.polaroid,.tool")));
}

// magnetic buttons
if (fine && !calm) {
  document.querySelectorAll(".magnetic").forEach((b) => {
    b.addEventListener("mousemove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("mouseleave", () => (b.style.transform = ""));
  });

  // card tilt
  grid.addEventListener("mousemove", (e) => {
    const c = e.target.closest(".card"); if (!c) return;
    const r = c.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -6, ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
    c.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  });
  grid.addEventListener("mouseout", (e) => { const c = e.target.closest(".card"); if (c && !c.contains(e.relatedTarget)) c.style.transform = ""; });

  // hero parallax
  const floats = document.querySelectorAll(".float");
  addEventListener("mousemove", (e) => {
    const dx = e.clientX - innerWidth / 2, dy = e.clientY - innerHeight / 2;
    floats.forEach((f) => { const s = +f.dataset.speed; f.style.translate = `${dx * s}px ${dy * s}px`; });
  });
}

// joyful click hearts ♡
const bits = ["♡", "✿", "✦", "❀", "♥"];
const colors = ["#EE9AB0", "#D9738F", "#C9AE8E", "#F7D3DC"];
if (!calm) {
  addEventListener("click", (e) => {
    if (e.target.closest("a,button,.card,.lightbox")) return;
    for (let i = 0; i < 7; i++) {
      const s = document.createElement("span");
      s.className = "pop";
      s.textContent = bits[Math.floor(Math.random() * bits.length)];
      s.style.left = e.clientX + "px"; s.style.top = e.clientY + "px";
      s.style.color = colors[i % colors.length];
      const a = (Math.PI * 2 * i) / 7, d = 40 + Math.random() * 50;
      s.style.setProperty("--dx", Math.cos(a) * d + "px");
      s.style.setProperty("--dy", Math.sin(a) * d - 20 + "px");
      s.style.setProperty("--r", (Math.random() * 80 - 40) + "deg");
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 1000);
    }
  });
}

// copy email
const toast = document.getElementById("toast");
document.getElementById("copy").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText("salwafawal63@gmail.com"); toast.textContent = "email copied! ♡"; }
  catch { toast.textContent = "salwafawal63@gmail.com"; }
  toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200);
});
