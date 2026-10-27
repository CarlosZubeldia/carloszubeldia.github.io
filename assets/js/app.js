/* ==========================================================================
   app.js — Comportamiento del sitio
   --------------------------------------------------------------------------
   El contenido ya viene escrito en el HTML (generado por tools/build.js),
   así que aquí solo vive la interacción:

   - Lang    : cambio de idioma EN/ES (mueve <html lang>)
   - Header  : estado "stuck", menú móvil, barra de progreso
   - Reveal  : animaciones de aparición al hacer scroll
   - Filters : filtrado de proyectos por categoría
   - Media   : fallback si el vídeo del hero no puede reproducirse
   ========================================================================== */

(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  const LANGS = ["en", "es"];

  /* --------------------------------------------------------------- IDIOMA -- */

  const Lang = {
    current: "en",
    key: "cz-lang",

    init() {
      this.current = this.detect();
      this.apply(this.current);

      $$("[data-lang]").forEach((btn) => {
        btn.addEventListener("click", () => this.apply(btn.getAttribute("data-lang")));
      });
    },

    /** ?lang= > localStorage > navegador > inglés. */
    detect() {
      try {
        const q = new URLSearchParams(location.search).get("lang");
        if (q && LANGS.includes(q)) return q;
      } catch (e) {}
      try {
        const saved = localStorage.getItem(this.key);
        if (saved && LANGS.includes(saved)) return saved;
      } catch (e) {}
      const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
      return LANGS.includes(nav) ? nav : "en";
    },

    apply(lang) {
      if (!LANGS.includes(lang)) lang = "en";
      this.current = lang;

      /* El CSS hace el resto: muestra los [data-l] del idioma activo */
      document.documentElement.lang = lang;

      /* Título y descripción: no pueden duplicarse en el HTML */
      const root = document.documentElement;
      const title = root.getAttribute("data-title-" + lang);
      if (title) document.title = title;

      const meta = $('meta[name="description"]');
      if (meta) {
        const desc = meta.getAttribute("data-desc-" + lang);
        if (desc) meta.setAttribute("content", desc);
      }

      $$("[data-lang]").forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
      });

      try {
        localStorage.setItem(this.key, lang);
      } catch (e) {}

      /* Avisa a quien dependa del idioma (p. ej. el efecto de escritura) */
      document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
    },
  };

  /* ------------------------------------------------------------ ESCRITURA -- */

  const Typing = {
    el: null,
    timer: null,

    init() {
      this.el = $("[data-typing]");
      if (!this.el) return;
      document.addEventListener("langchange", () => this.run());
      this.run();
    },

    run() {
      const el = this.el;
      const text =
        el.getAttribute("data-type-" + Lang.current) || el.textContent.trim();
      clearTimeout(this.timer);

      const reduce =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        el.textContent = text;
        return;
      }

      el.textContent = "";

      /* Bucle: escribe -> espera -> borra hacia atras -> espera -> vuelve a
         escribir. Antes escribia una sola vez y se quedaba fijo. */
      const VELOCIDAD = 55;   /* ms por letra al escribir */
      const BORRADO = 62;     /* al borrar: mas lento que escribir */
      const PAUSA = 1800;     /* se queda el texto completo a la vista */
      const RESPIRO = 450;    /* espera antes de volver a escribir */
      let i = 0;
      let borrando = false;

      const paso = () => {
        if (!borrando) {
          i += 1;
          el.textContent = text.slice(0, i);
          if (i >= text.length) {
            borrando = true;
            this.timer = setTimeout(paso, PAUSA);
          } else {
            this.timer = setTimeout(paso, VELOCIDAD);
          }
        } else {
          i -= 1;
          el.textContent = text.slice(0, Math.max(0, i));
          if (i <= 0) {
            borrando = false;
            this.timer = setTimeout(paso, RESPIRO);
          } else {
            this.timer = setTimeout(paso, BORRADO);
          }
        }
      };

      this.timer = setTimeout(paso, VELOCIDAD);
    },
  };

  /* --------------------------------------------------------------- HEADER -- */

  const Header = {
    init() {
      const header = $(".header");
      const drawer = $(".drawer");
      const burger = $(".burger");

      if (header) {
        const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
      }

      if (burger && drawer) {
        const setOpen = (open) => {
          drawer.setAttribute("data-open", String(open));
          drawer.setAttribute("aria-hidden", String(!open));
          burger.setAttribute("aria-expanded", String(open));
          document.body.classList.toggle("is-locked", open);
        };
        setOpen(false);
        burger.addEventListener("click", () =>
          setOpen(drawer.getAttribute("data-open") !== "true")
        );
        $$(".drawer a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") setOpen(false);
        });
      }

      const bar = $(".progress");
      if (bar) {
        const update = () => {
          const h = document.documentElement.scrollHeight - window.innerHeight;
          bar.style.transform =
            "scaleX(" + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ")";
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
      }
    },
  };

  /* --------------------------------------------------------------- REVEAL -- */

  const Reveal = {
    io: null,
    pending: new Set(),
    queued: false,

    init() {
      const targets = $$(".reveal, .split-line");
      if (!targets.length) return;

      if ("IntersectionObserver" in window) {
        this.io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) this.show(e.target);
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
      }

      /* Red de seguridad por rectángulo: evita que algo se quede invisible */
      window.addEventListener("scroll", () => this.schedule(), { passive: true });
      window.addEventListener("resize", () => this.schedule());

      this.observe(targets);
    },

    schedule() {
      if (this.queued) return;
      this.queued = true;
      requestAnimationFrame(() => {
        this.queued = false;
        this.sweep();
      });
    },

    sweep() {
      if (!this.pending.size) return;
      const limit = window.innerHeight * 0.92;
      this.pending.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < limit && r.bottom > 0) this.show(el);
      });
    },

    show(el) {
      if (!el || el.classList.contains("is-visible")) return;
      el.classList.add("is-visible");
      this.pending.delete(el);
      if (this.io) this.io.unobserve(el);
    },

    observe(nodes) {
      nodes.forEach((el) => {
        this.pending.add(el);
        if (this.io) this.io.observe(el);
      });
      this.schedule();
      setTimeout(() => this.sweep(), 300);
    },

    /** Lo usan los filtros al volver a mostrar tarjetas. */
    refresh() {
      this.observe($$(".reveal:not(.is-visible)"));
    },
  };

  /* -------------------------------------------------------------- FILTROS -- */

  const Filters = {
    init() {
      const host = $("[data-work-filters]");
      const grid = $("[data-work-grid]");
      if (!host || !grid) return;

      host.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-filter]");
        if (!btn) return;

        $$(".filter", host).forEach((b) => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");

        const key = btn.getAttribute("data-filter");
        $$(".project-card", grid).forEach((card) => {
          card.hidden = !(key === "all" || card.getAttribute("data-category") === key);
        });

        Reveal.refresh();
        Reveal.sweep();
      });
    },
  };

  /* --------------------------------------------------------------- MEDIA --- */

  const Media = {
    init() {
      const video = $(".hero__media video");
      if (!video) return;
      const fail = () => video.classList.add("is-failed");
      video.addEventListener("error", fail);
      const source = video.querySelector("source");
      if (source) source.addEventListener("error", fail);
    },
  };

  /* ------------------------------------------------------ MALLA INTERACTIVA - */
  /* Retícula de puntos que se separan del cursor y se conectan entre sí.
     Es el mismo comportamiento del componente original, en JavaScript puro. */

  const Mesh = {
    cfg: {
      spacing: 38,
      dotRadius: 2.2,
      connectionDistance: 110,
      repulsionForce: 1.4,
      springStrength: 0.06,
      friction: 0.82,
    },

    init() {
      const canvas = $("[data-mesh]");
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const cfg = this.cfg;
      const mouse = { x: -999, y: -999 };
      const reduce =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let dots = [];
      let w = 0;
      let h = 0;
      let raf = null;
      let resizeTimer = null;

      const build = () => {
        const box = canvas.parentElement.getBoundingClientRect();
        w = Math.max(1, Math.round(box.width));
        h = Math.max(1, Math.round(box.height));

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const cols = Math.ceil(w / cfg.spacing) + 1;
        const rows = Math.ceil(h / cfg.spacing) + 1;
        dots = [];
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            dots.push({
              ox: c * cfg.spacing,
              oy: r * cfg.spacing,
              x: c * cfg.spacing,
              y: r * cfg.spacing,
              vx: 0,
              vy: 0,
            });
          }
        }
      };

      const draw = () => {
        ctx.clearRect(0, 0, w, h);

        /* Física: repulsión del cursor + muelle hacia la posición original */
        for (let i = 0; i < dots.length; i++) {
          const d = dots[i];
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const force = Math.max(0, 80 - dist) / 80;
          const angle = Math.atan2(dy, dx);

          d.vx += Math.cos(angle) * force * cfg.repulsionForce;
          d.vy += Math.sin(angle) * force * cfg.repulsionForce;
          d.vx += (d.ox - d.x) * cfg.springStrength;
          d.vy += (d.oy - d.y) * cfg.springStrength;
          d.vx *= cfg.friction;
          d.vy *= cfg.friction;
          d.x += d.vx;
          d.y += d.vy;
        }

        /* Conexiones: se comparan distancias al cuadrado y solo se calcula
           la raíz en los pares que realmente se tocan. */
        const range = cfg.connectionDistance;
        const maxD2 = range * range;
        ctx.lineWidth = 0.7;
        for (let i = 0; i < dots.length; i++) {
          const a = dots[i];
          for (let j = i + 1; j < dots.length; j++) {
            const b = dots[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < maxD2) {
              const dist = Math.sqrt(d2);
              ctx.beginPath();
              ctx.strokeStyle =
                "rgba(255, 255, 255, " + (1 - dist / range) * 0.25 + ")";
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }

        /* Puntos: se iluminan al acercarse al cursor */
        for (let i = 0; i < dots.length; i++) {
          const d = dots[i];
          const dx = d.x - mouse.x;
          const dy = d.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const glow = Math.max(0, 1 - dist / 90);

          ctx.beginPath();
          ctx.arc(d.x, d.y, cfg.dotRadius + glow * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, " + (0.2 + glow * 0.7) + ")";
          ctx.fill();
        }
      };

      const loop = () => {
        draw();
        raf = requestAnimationFrame(loop);
      };
      const start = () => {
        if (!raf && !reduce) loop();
      };
      const stop = () => {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
      };

      const onMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };
      const onLeave = () => {
        mouse.x = -999;
        mouse.y = -999;
      };

      build();

      if (reduce) {
        draw();
      } else {
        document.addEventListener("mousemove", onMove, { passive: true });
        document.addEventListener("mouseleave", onLeave);
        start();
      }

      /* Se detiene cuando el hero sale de pantalla */
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => (en.isIntersecting ? start() : stop()));
          },
          { threshold: 0 }
        ).observe(canvas);
      }

      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          build();
          if (reduce) draw();
        }, 150);
      });
    },
  };

  /* ------------------------------------------------------------- VISOR ----- */
  /* Abre en grande los logotipos y las ilustraciones al hacer clic.          */

  const Lightbox = {
    items: [],
    index: 0,
    root: null,
    img: null,
    caption: null,
    lastFocus: null,

    init() {
      this.root = $("[data-lightbox-root]");
      if (!this.root) return;

      this.items = $$("[data-lightbox]");
      if (!this.items.length) return;

      this.img = $("[data-lightbox-img]", this.root);
      this.caption = $("[data-lightbox-caption]", this.root);

      this.items.forEach((el, i) => {
        el.addEventListener("click", () => this.open(i));
      });

      $$("[data-lightbox-close]", this.root).forEach((b) =>
        b.addEventListener("click", () => this.close())
      );

      const prev = $("[data-lightbox-prev]", this.root);
      const next = $("[data-lightbox-next]", this.root);
      if (prev) prev.addEventListener("click", () => this.step(-1));
      if (next) next.addEventListener("click", () => this.step(1));

      /* Clic en el fondo (fuera de la imagen) cierra */
      this.root.addEventListener("click", (e) => {
        if (e.target === this.root) this.close();
      });

      document.addEventListener("keydown", (e) => {
        if (this.root.getAttribute("data-open") !== "true") return;
        if (e.key === "Escape") this.close();
        else if (e.key === "ArrowLeft") this.step(-1);
        else if (e.key === "ArrowRight") this.step(1);
      });
    },

    /** Texto del pie en el idioma activo. */
    label(el) {
      return (
        el.getAttribute("data-caption-" + Lang.current) ||
        el.getAttribute("data-caption-en") ||
        ""
      );
    },

    open(i) {
      const total = this.items.length;
      this.index = ((i % total) + total) % total;

      const el = this.items[this.index];
      const src = el.getAttribute("data-lightbox");
      const label = this.label(el);

      this.img.setAttribute("src", src);
      this.img.setAttribute("alt", label);
      if (this.caption) this.caption.textContent = label;

      /* El visor ya no lleva sombra para NINGUNA imagen (antes se quitaba solo
         a los logotipos con la clase `lightbox--logo`), asi que aqui no hay que
         marcar nada segun el origen. */

      if (this.root.getAttribute("data-open") !== "true") {
        this.lastFocus = document.activeElement;
        document.body.classList.add("is-locked");
      }

      this.root.setAttribute("data-open", "true");
      this.root.setAttribute("aria-hidden", "false");

      const close = $("[data-lightbox-close]", this.root);
      if (close) close.focus();
    },

    step(dir) {
      this.open(this.index + dir);
    },

    close() {
      this.root.setAttribute("data-open", "false");
      this.root.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus();
    },
  };


  /* ---------------------------------------------------------- CARD VIDEO --- */
  /* Los videos de las tarjetas NO van en bucle: se reproducen enteros, se
     quedan en el ultimo fotograma, y vuelven a empezar cada vez que la
     tarjeta entra en pantalla. Asi el video se ve completo en cada pasada y
     no se queda repitiendose sin parar, que cansa. */
  const CardVideo = {
    init() {
      const videos = document.querySelectorAll(".project-card__video");
      if (!videos.length) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!("IntersectionObserver" in window)) return;

      const observador = new IntersectionObserver(
        (entradas) => {
          entradas.forEach((e) => {
            const v = e.target;
            if (e.isIntersecting) {
              try {
                v.currentTime = 0;
              } catch (err) {
                /* si aun no hay metadatos, no pasa nada: se reproducira igual */
              }
              const p = v.play();
              if (p && p.catch) p.catch(() => {});
            } else {
              v.pause();
            }
          });
        },
        { threshold: 0.35 }
      );

      videos.forEach((v) => observador.observe(v));
    },
  };

  /* ------------------------------------------------------------ CARRUSEL -- */

  /* Navegacion de la galeria de ilustraciones: flechas y puntos. La barra
     nativa esta oculta en el CSS, porque vive en el padding box del scroller y
     ocupaba todo el ancho de la ventana. */
  const Carousel = {
    init() {
      $$("[data-carousel]").forEach((track) => {
        const viewport = track.parentElement;
        const block = viewport && viewport.parentElement;
        if (!viewport || !block) return;

        const prev = $("[data-carousel-prev]", viewport);
        const next = $("[data-carousel-next]", viewport);
        const dots = $("[data-carousel-dots]", block);
        const items = $$(".carousel__item", track);
        if (!prev || !next || !dots || items.length < 2) return;

        const padLeft = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;
        let current = -1;

        /* Salta a una ilustracion. `inline: "start"` respeta el
           `scroll-padding-left` del carrusel, asi que deja el mismo margen. */
        const goTo = (i) => {
          const item = items[Math.max(0, Math.min(i, items.length - 1))];
          if (item) {
            item.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
          }
        };

        /* Un punto por ilustracion. El nombre accesible va en los dos idiomas y
           el CSS del sitio ensena el que toca segun <html lang>. */
        const buttons = items.map((item, i) => {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "carousel__dot";

          const sr = document.createElement("span");
          sr.className = "sr-only";
          [["en", item.getAttribute("data-caption-en") || "Illustration " + (i + 1)],
           ["es", item.getAttribute("data-caption-es") || "Ilustración " + (i + 1)]]
            .forEach(([lang, text]) => {
              const span = document.createElement("span");
              span.setAttribute("data-l", lang);
              span.textContent = text;
              sr.appendChild(span);
            });

          btn.appendChild(sr);
          btn.addEventListener("click", () => goTo(i));
          dots.appendChild(btn);
          return btn;
        });

        /* Activo = el que queda alineado con el margen izquierdo. */
        const update = () => {
          const max = track.scrollWidth - track.clientWidth;
          const ref = track.getBoundingClientRect().left + padLeft();
          let best = 0;
          let bestD = Infinity;
          items.forEach((item, i) => {
            const d = Math.abs(item.getBoundingClientRect().left - ref);
            if (d < bestD) {
              bestD = d;
              best = i;
            }
          });
          if (best !== current) {
            if (buttons[current]) buttons[current].classList.remove("is-active");
            buttons[best].classList.add("is-active");
            current = best;
          }

          /* Si no hay nada que desplazar, no hay nada que navegar. */
          const quieto = max <= 1;
          dots.hidden = quieto;
          prev.hidden = quieto;
          next.hidden = quieto;
          if (quieto) return;
          prev.disabled = track.scrollLeft <= 1;
          next.disabled = track.scrollLeft >= max - 1;
        };

        /* Lo que avanza una flecha: una ilustracion con su hueco. */
        const step = () => {
          const a = items[0].getBoundingClientRect();
          const b = items[1].getBoundingClientRect();
          return b.left - a.left > 0 ? b.left - a.left : a.width;
        };

        prev.addEventListener("click", () =>
          track.scrollBy({ left: -step(), behavior: "smooth" })
        );
        next.addEventListener("click", () =>
          track.scrollBy({ left: step(), behavior: "smooth" })
        );

        let queued = false;
        const schedule = () => {
          if (queued) return;
          queued = true;
          requestAnimationFrame(() => {
            queued = false;
            update();
          });
        };

        track.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        /* Las imagenes entran con loading="lazy": hasta que no cargan, el
           ancho de la pista no es el definitivo. */
        $$("img", track).forEach((img) =>
          img.addEventListener("load", schedule, { once: true })
        );
        window.addEventListener("load", schedule);

        update();
      });
    },
  };

  /* --------------------------------------------------- VÍDEO AL LLEGAR ---- */
  /* Los vídeos que quedan lejos del pliegue (bloques marcados con `lazy: true`)
     se emiten con `preload="none"` y sin `autoplay`, así no se descarga ni un
     byte hasta que su sección se acerca a la pantalla. Aquí se les da el
     `play()` al entrar, con la misma red de seguridad por rectángulo que usa
     Reveal (por si el IntersectionObserver no dispara). */

  const VideoLazy = {
    io: null,
    pending: new Set(),
    queued: false,

    init() {
      const videos = $$("video[data-video-auto]");
      if (!videos.length) return;

      if ("IntersectionObserver" in window) {
        this.io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) this.play(e.target);
            });
          },
          { rootMargin: "250px 0px", threshold: 0.01 }
        );
      }

      window.addEventListener("scroll", () => this.schedule(), { passive: true });
      window.addEventListener("resize", () => this.schedule());

      videos.forEach((v) => {
        this.pending.add(v);
        if (this.io) this.io.observe(v);
      });
      this.schedule();
    },

    schedule() {
      if (this.queued) return;
      this.queued = true;
      requestAnimationFrame(() => {
        this.queued = false;
        this.sweep();
      });
    },

    sweep() {
      if (!this.pending.size) return;
      const margen = window.innerHeight + 250;
      this.pending.forEach((v) => {
        const r = v.getBoundingClientRect();
        if (r.top < margen && r.bottom > -250) this.play(v);
      });
    },

    play(v) {
      if (!v || !this.pending.has(v)) return;
      this.pending.delete(v);
      if (this.io) this.io.unobserve(v);
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    },
  };

  /* ---------------------------------------------------------------- INIT --- */

  function init() {
    Lang.init();
    Header.init();
    Reveal.init();
    VideoLazy.init();
    Filters.init();
    Media.init();
    Mesh.init();
    Typing.init();
    CardVideo.init();
    Carousel.init();
    Lightbox.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* --- Pantalla de carga ----------------------------------------------------
   El saludo va rotando por siete idiomas mientras la pagina carga, y la barra
   avanza. NO anade espera: se retira en cuanto termina la carga, con un minimo
   para que no parpadee y de tiempo a ver el ciclo de idiomas (1,5 s: eran 2,5).
   Si el sistema pide movimiento reducido, se muestra el primer idioma y se
   retira igual. */
(() => {
  const pre = document.querySelector("[data-preloader]");
  if (!pre) return;
  /* Solo la primera visita de la sesion. */
  if (document.documentElement.classList.contains("preloader-skip")) return;
  const hello = pre.querySelector("[data-preloader-hello]");
  const bar = pre.querySelector("[data-preloader-bar]");
  const pct = pre.querySelector("[data-preloader-pct]");
  const palabras = ["Bienvenido", "Welcome", "\u6b22\u8fce", "Willkommen", "Bienvenue", "\u3088\u3046\u3053\u305d"];
  const MINIMO = 1500;
  const PASO = 417;
  const t0 = Date.now();
  let i = 0;

  const ciclo = window.setInterval(() => {
    i = (i + 1) % palabras.length;
    if (hello) hello.textContent = palabras[i];
    const avance = Math.min(92, ((Date.now() - t0) / MINIMO) * 92);
    if (bar) bar.style.width = avance.toFixed(1) + "%";
    if (pct) pct.textContent = String(Math.round(avance)).padStart(3, "0");
  }, PASO);

  const salir = () => {
    const falta = Math.max(0, MINIMO - (Date.now() - t0));
    window.setTimeout(() => {
      window.clearInterval(ciclo);
      if (bar) bar.style.width = "100%";
      if (pct) pct.textContent = "100";
      pre.classList.add("is-done");
      window.setTimeout(() => pre.remove(), 1300);
    }, falta);
  };

  /* La pantalla de carga NO puede quedarse atascada. Antes esperaba al evento
     \`load\` de la ventana, que aguarda a TODOS los recursos -y los videos pesan
     7 MB-, asi que en una conexion lenta (o en movil) tapaba la web durante
     muchos segundos: parecia que el sitio no entraba.
     Ahora sale en cuanto el DOM esta listo (DOMContentLoaded, que no espera a
     los medios) y, como red de seguridad, a los 4 segundos pase lo que pase.
     El minimo de 1,5 s para ver el ciclo de idiomas se mantiene dentro de
     salir(). */
  let yaSalio = false;
  const salirUnaVez = () => {
    if (yaSalio) return;
    yaSalio = true;
    salir();
  };
  if (document.readyState === "complete" || document.readyState === "interactive") {
    salirUnaVez();
  } else {
    document.addEventListener("DOMContentLoaded", salirUnaVez, { once: true });
  }
  window.setTimeout(salirUnaVez, 4000);
})();
