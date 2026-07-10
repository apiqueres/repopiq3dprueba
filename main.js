// ═══ PIQ3D landing — efecto de zoom + blur del hero al hacer scroll ═══
(function () {
  const heroZoom = document.getElementById("heroZoom");
  const hero = document.getElementById("hero");
  const header = document.getElementById("heroHeader");
  const hint = document.getElementById("scrollHint");
  const fab = document.getElementById("fab");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let ticking = false;

  function update() {
    ticking = false;
    const vh = window.innerHeight;
    const p = Math.min(window.scrollY / (vh * 0.85), 1); // progreso 0 → 1

    if (!reduceMotion) {
      heroZoom.style.transform = `scale(${1 + p * 0.55})`;
      heroZoom.style.filter = `blur(${(p * 14).toFixed(2)}px) brightness(${1 - p * 0.12})`;
    } else {
      heroZoom.style.filter = `blur(${(p * 14).toFixed(2)}px)`;
    }

    header.style.opacity = String(1 - p * 1.6);
    hint.style.opacity = String(Math.max(0.82 - p * 3, 0));

    // El hero deja de recibir toques cuando el contenido lo cubre
    hero.style.visibility = window.scrollY > vh * 1.6 ? "hidden" : "visible";

    fab.classList.toggle("show", p > 0.6);
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });

  window.addEventListener("resize", update);
  update();

  // ═══ Aparición de secciones al entrar en pantalla ═══
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();
