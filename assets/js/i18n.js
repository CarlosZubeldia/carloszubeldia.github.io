/* ==========================================================================
   i18n.js — Textos de interfaz en inglés y español
   --------------------------------------------------------------------------
   Cómo funciona:
   - Cada elemento traducible del HTML lleva  data-i18n="clave".
   - Para atributos:  data-i18n-attr="placeholder:clave"  o
                      data-i18n-attr="content:clave,title:otraClave"
   - El idioma se guarda en localStorage ("cz-lang").
   - Si no hay preferencia guardada se usa el idioma del navegador.
   Para añadir una cadena: añade la clave en EN y en ES y úsala en el HTML.
   ========================================================================== */

const STRINGS = {
  en: {
    /* Navegación */
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "nav.menu": "Menu",
    "nav.close": "Close",
    "nav.skip": "Skip to content",

    /* Hero */
    "hero.role": "Product\nDesigner",
    "hero.available": "Available for work",
    "hero.claim":
      "I design and build digital products, from concept to code, with AI as part of the process.",
    "hero.cta.work": "See selected work",
    "hero.cta.talk": "Let’s talk",

    /* Marquee */
    "marquee.1": "Product design",
    "marquee.2": "UX / UI",
    "marquee.3": "Design systems",
    "marquee.4": "Research",
    "marquee.5": "Branding",
    "marquee.6": "Prototyping",
    "marquee.7": "E-commerce",
    "marquee.8": "Healthcare",
    "marquee.9": "Consulting",
    "marquee.10": "Accessibility",
    "marquee.11": "Conversation design",

    /* Approach */
    "approach.eyebrow": "Approach",
    "approach.eyebrow.2": "01 — Approach",
    "approach.title":
      "I design digital experiences where aesthetics, usability and strategy work together.",
    "approach.p1":
      "With a background in branding, visual design and UX/UI, my approach focuses on creating products that are not only functional, but meaningful, memorable and emotionally engaging.",
    "approach.p2":
      "I enjoy simplifying complexity, finding clarity in ambiguous problems and collaborating closely with multidisciplinary teams — from research and product thinking to visual craftsmanship.",

    /* Stats */
    "stats.1.value": "4+",
    "stats.1.label": "Years designing digital products",
    "stats.2.value": "3",
    "stats.2.label": "Industries: e-commerce, healthcare, edtech",
    "stats.3.value": "End-to-end",
    "stats.3.label": "From research to design system",

    /* Work */
    "work.eyebrow": "02 — Selected work",
    "work.title": "Selected work",
    "work.subtitle":
      "A selection of projects across e-commerce, healthcare and education. Product thinking, research and interface design in equal measure.",
    "work.all": "See all projects",
    "work.see": "See project",
    "work.read": "Read article",
    "work.soon": "Case study coming soon",
    "work.growing.title": "New work in progress",
    "work.growing.text":
      "I’m currently documenting more case studies. New projects will appear here as they are published.",
    "work.growing.cta": "Get in touch",
    "work.filter.all": "All",
    "work.page.title": "Work",
    "work.page.subtitle":
      "Digital experiences where aesthetics, usability and strategy come together. Case studies across e-commerce, healthcare, education and corporate design.",
    "work.empty": "No projects in this category yet.",

    /* Principles */
    "principles.eyebrow": "03 — Design principles",
    "principles.title": "Design principles",
    "principles.1.title": "Clarity over complexity",
    "principles.1.text":
      "Interfaces should reduce friction and help users focus on what matters.",
    "principles.2.title": "Strategy before aesthetics",
    "principles.2.text":
      "Design decisions should support business goals and user needs.",
    "principles.3.title": "Emotion creates connection",
    "principles.3.text":
      "Thoughtful details transform functional products into memorable experiences.",
    "principles.4.title": "Curiosity drives innovation",
    "principles.4.text":
      "Exploring AI, interaction design and emerging technologies.",

    /* About */
    "about.eyebrow": "04 — About me",
    "about.title": "Hello! I’m Carlos Zubeldia",
    "about.lead":
      "Product Designer focused on creating digital experiences that balance usability, aesthetics and business goals.",
    "about.p1":
      "My journey into design hasn’t followed a traditional path. Before moving into product design, I worked in customer-facing roles where understanding people, communication and problem-solving were part of everyday life. Those experiences shaped the way I approach design today: always starting with people, but never losing sight of the business behind the product.",
    "about.p2":
      "Over the years, I’ve worked across e-learning, healthcare and e-commerce, helping teams transform complex challenges into clear, meaningful experiences. For me, good design is not just about making things look better — it’s about making them work better.",
    "about.quote":
      "Design is not only how things look. It’s how people understand, trust and interact with a product.",
    "about.design.title": "Design with purpose",
    "about.design.p1":
      "I believe the best products emerge when strategy, usability and visual design work together.",
    "about.design.p2":
      "My process combines research, product thinking and visual craftsmanship to create solutions that are both useful and engaging. I enjoy simplifying complexity, finding clarity in ambiguous problems and collaborating closely with multidisciplinary teams.",
    "about.design.p3":
      "Whether I’m designing a user flow, refining an interface or building a design system, my goal remains the same: creating experiences that feel intuitive, purposeful and memorable.",
    "about.beyond.title": "Beyond design",
    "about.beyond.p1":
      "Outside of work, creativity continues to play an important role in my life.",
    "about.beyond.p2": "One of my favourite ways to disconnect is through illustration.",
    "about.beyond.p3":
      "Drawing allows me to explore ideas freely, experiment visually and enjoy the creative process without constraints. It’s a personal passion that keeps my curiosity alive and often influences how I think about design.",
    "about.beyond.p4":
      "Beyond that, I enjoy training, cooking and discovering new experiences. These activities help me maintain balance, stay curious and approach challenges with fresh perspectives.",
    "about.beyond.quote": "I believe the best ideas often come from outside our screens.",
    "about.logos": "Branding",
    "about.illustration": "Illustration",
    "about.cta": "Download my resume",

    /* Visor de imágenes */
    "lightbox.viewer": "Image viewer",
    "lightbox.close": "Close",
    "lightbox.prev": "Previous image",
    "lightbox.next": "Next image",

    /* Contact */
    "contact.eyebrow": "Let’s connect",
    "contact.title": "Let’s build something meaningful together.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.resume": "Resume",
    "contact.location": "Location",
    "contact.location.value": "Spain · Remote / Hybrid",

    /* Proyecto */
    "project.back": "All work",
    "project.overview": "About the project",
    "project.workedOn": "What I worked on",
    "project.visit": "Visit the website",
    "project.another": "Another projects",
    "project.next": "Next projects",
    "refs.takeaway": "Key takeaway",
    "project.prev": "Previous",
    "project.nextLabel": "Next",
    "project.notfound.title": "Project not found",
    "project.notfound.text": "The project you’re looking for doesn’t exist or has been moved.",
    "project.notfound.cta": "Back to all work",
    "project.soon.title": "Full case study in progress",
    "project.soon.text":
      "The complete documentation for this project is being written. In the meantime, here is the project context.",

    /* Footer */
    "footer.rights": "All rights reserved.",
    "footer.built": "Designed and built with care.",
    "footer.top": "Back to top",
    "footer.updated": "Last updated",

    /* Meta */
    "meta.home.title": "Carlos Zubeldia — Product Designer",
    "meta.home.desc":
      "Carlos Zubeldia is a Product Designer crafting meaningful digital experiences through aesthetics, usability and strategy.",
    "meta.work.title": "Work — Carlos Zubeldia",
    "meta.work.desc":
      "Selected product design case studies across e-commerce, healthcare, education and corporate.",
    "meta.about.title": "About — Carlos Zubeldia",
    "meta.about.desc":
      "Product Designer focused on creating digital experiences that balance usability, aesthetics and business goals.",
  },

  es: {
    /* Navegación */
    "nav.work": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.resume": "CV",
    "nav.menu": "Menú",
    "nav.close": "Cerrar",
    "nav.skip": "Saltar al contenido",

    /* Hero */
    "hero.role": "Product\nDesigner",
    "hero.available": "Disponible para trabajar",
    "hero.claim":
      "Diseño y construyo productos digitales, del concepto al código, con IA como parte del proceso.",
    "hero.cta.work": "Ver proyectos",
    "hero.cta.talk": "Hablemos",

    /* Marquee */
    "marquee.1": "Diseño de producto",
    "marquee.2": "UX / UI",
    "marquee.3": "Sistemas de diseño",
    "marquee.4": "Investigación",
    "marquee.5": "Branding",
    "marquee.6": "Prototipado",
    "marquee.7": "E-commerce",
    "marquee.8": "Salud",
    "marquee.9": "Consultoría",
    "marquee.10": "Accesibilidad",
    "marquee.11": "Conversation design",

    /* Approach */
    "approach.eyebrow": "Enfoque",
    "approach.eyebrow.2": "01 — Enfoque",
    "approach.title":
      "Diseño experiencias digitales donde estética, usabilidad y estrategia trabajan juntas.",
    "approach.p1":
      "Con una base en branding, diseño visual y UX/UI, mi enfoque se centra en crear productos que no solo funcionan, sino que resultan significativos, memorables y emocionalmente relevantes.",
    "approach.p2":
      "Disfruto simplificando la complejidad, encontrando claridad en problemas ambiguos y colaborando de cerca con equipos multidisciplinares — desde la investigación y el pensamiento de producto hasta el detalle visual.",

    /* Stats */
    "stats.1.value": "4+",
    "stats.1.label": "Años diseñando productos digitales",
    "stats.2.value": "3",
    "stats.2.label": "Sectores: e-commerce, salud, edtech",
    "stats.3.value": "End-to-end",
    "stats.3.label": "De la investigación al sistema de diseño",

    /* Work */
    "work.eyebrow": "02 — Proyectos seleccionados",
    "work.title": "Proyectos seleccionados",
    "work.subtitle":
      "Una selección de proyectos de e-commerce, salud y educación. Pensamiento de producto, investigación y diseño de interfaz a partes iguales.",
    "work.all": "Ver todos los proyectos",
    "work.see": "Ver proyecto",
    "work.read": "Leer artículo",
    "work.soon": "Caso de estudio próximamente",
    "work.growing.title": "Nuevos proyectos en camino",
    "work.growing.text":
      "Estoy documentando más casos de estudio. Los nuevos proyectos aparecerán aquí a medida que se publiquen.",
    "work.growing.cta": "Escríbeme",
    "work.filter.all": "Todos",
    "work.page.title": "Proyectos",
    "work.page.subtitle":
      "Experiencias digitales donde estética, usabilidad y estrategia se encuentran. Casos de estudio de e-commerce, salud, educación y diseño corporativo.",
    "work.empty": "Todavía no hay proyectos en esta categoría.",

    /* Principles */
    "principles.eyebrow": "03 — Principios de diseño",
    "principles.title": "Principios de diseño",
    "principles.1.title": "Claridad sobre complejidad",
    "principles.1.text":
      "Las interfaces deben reducir la fricción y ayudar al usuario a centrarse en lo importante.",
    "principles.2.title": "Estrategia antes que estética",
    "principles.2.text":
      "Las decisiones de diseño deben apoyar los objetivos de negocio y las necesidades del usuario.",
    "principles.3.title": "La emoción crea conexión",
    "principles.3.text":
      "Los detalles cuidados transforman productos funcionales en experiencias memorables.",
    "principles.4.title": "La curiosidad impulsa la innovación",
    "principles.4.text":
      "Explorando IA, diseño de interacción y tecnologías emergentes.",

    /* About */
    "about.eyebrow": "04 — Sobre mí",
    "about.title": "¡Hola! Soy Carlos Zubeldia",
    "about.lead":
      "Product Designer centrado en crear experiencias digitales que equilibran usabilidad, estética y objetivos de negocio.",
    "about.p1":
      "Mi camino hacia el diseño no ha seguido una ruta tradicional. Antes de pasar al diseño de producto trabajé en roles de atención al cliente, donde entender a las personas, comunicar y resolver problemas era el día a día. Esas experiencias marcaron mi forma de diseñar: empezar siempre por las personas, sin perder de vista el negocio que hay detrás del producto.",
    "about.p2":
      "A lo largo de los años he trabajado en e-learning, salud y e-commerce, ayudando a equipos a transformar retos complejos en experiencias claras y significativas. Para mí, el buen diseño no consiste solo en hacer que las cosas se vean mejor, sino en hacer que funcionen mejor.",
    "about.quote":
      "El diseño no es solo cómo se ven las cosas. Es cómo las personas entienden, confían e interactúan con un producto.",
    "about.design.title": "Diseñar con propósito",
    "about.design.p1":
      "Creo que los mejores productos surgen cuando estrategia, usabilidad y diseño visual trabajan juntos.",
    "about.design.p2":
      "Mi proceso combina investigación, pensamiento de producto y oficio visual para crear soluciones útiles y atractivas. Disfruto simplificando la complejidad, encontrando claridad en problemas ambiguos y colaborando de cerca con equipos multidisciplinares.",
    "about.design.p3":
      "Ya sea diseñando un flujo de usuario, refinando una interfaz o construyendo un sistema de diseño, mi objetivo sigue siendo el mismo: crear experiencias que se sientan intuitivas, con propósito y memorables.",
    "about.beyond.title": "Más allá del diseño",
    "about.beyond.p1":
      "Fuera del trabajo, la creatividad sigue teniendo un papel importante en mi vida.",
    "about.beyond.p2": "Una de mis formas favoritas de desconectar es la ilustración.",
    "about.beyond.p3":
      "Dibujar me permite explorar ideas con libertad, experimentar visualmente y disfrutar del proceso creativo sin restricciones. Es una pasión personal que mantiene viva mi curiosidad y que a menudo influye en cómo pienso el diseño.",
    "about.beyond.p4":
      "Además, disfruto entrenando, cocinando y descubriendo experiencias nuevas. Estas actividades me ayudan a mantener el equilibrio, seguir curioso y afrontar los retos con otra perspectiva.",
    "about.beyond.quote": "Creo que las mejores ideas suelen venir de fuera de las pantallas.",
    "about.logos": "Branding",
    "about.illustration": "Ilustración",
    "about.cta": "Descargar mi CV",

    /* Visor de imágenes */
    "lightbox.viewer": "Visor de imagen",
    "lightbox.close": "Cerrar",
    "lightbox.prev": "Imagen anterior",
    "lightbox.next": "Imagen siguiente",

    /* Contact */
    "contact.eyebrow": "Conectemos",
    "contact.title": "Construyamos algo juntos.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.resume": "CV",
    "contact.location": "Ubicación",
    "contact.location.value": "España · Remoto / Híbrido",

    /* Proyecto */
    "project.back": "Todos los proyectos",
    "project.overview": "Sobre el proyecto",
    "project.workedOn": "Que trabajé en el proyecto",
    "project.visit": "Visitar la web",
    "project.another": "Otros proyectos",
    "project.next": "Siguientes proyectos",
    "refs.takeaway": "Conclusión clave",
    "project.prev": "Anterior",
    "project.nextLabel": "Siguiente",
    "project.notfound.title": "Proyecto no encontrado",
    "project.notfound.text": "El proyecto que buscas no existe o se ha movido.",
    "project.notfound.cta": "Volver a todos los proyectos",
    "project.soon.title": "Caso de estudio en preparación",
    "project.soon.text":
      "La documentación completa de este proyecto está en proceso. Mientras tanto, aquí tienes el contexto del proyecto.",

    /* Footer */
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Diseñado y construido con cuidado.",
    "footer.top": "Volver arriba",
    "footer.updated": "Última actualización",

    /* Meta */
    "meta.home.title": "Carlos Zubeldia — Product Designer",
    "meta.home.desc":
      "Carlos Zubeldia es Product Designer y crea experiencias digitales con sentido combinando estética, usabilidad y estrategia.",
    "meta.work.title": "Proyectos — Carlos Zubeldia",
    "meta.work.desc":
      "Casos de estudio de diseño de producto en e-commerce, salud, educación y corporativo.",
    "meta.about.title": "Sobre mí — Carlos Zubeldia",
    "meta.about.desc":
      "Product Designer centrado en crear experiencias digitales que equilibran usabilidad, estética y objetivos de negocio.",
  },
};

const I18N = {
  defaultLang: "en",
  storageKey: "cz-lang",
  supported: ["en", "es"],

  /** Idioma activo: ?lang= > localStorage > navegador. */
  detect() {
    try {
      const q = new URLSearchParams(location.search).get("lang");
      if (q && this.supported.includes(q)) return q;
    } catch (e) {
      /* location puede no estar disponible */
    }
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved && this.supported.includes(saved)) return saved;
    } catch (e) {
      /* localStorage puede no estar disponible */
    }
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return this.supported.includes(nav) ? nav : this.defaultLang;
  },

  /** Traduce una clave al idioma dado (con fallback a inglés). */
  t(key, lang) {
    const l = lang || document.documentElement.lang || this.defaultLang;
    return (STRINGS[l] && STRINGS[l][key]) || STRINGS.en[key] || key;
  },

  /**
   * Traduce un valor bilingüe { en, es } o una cadena simple.
   * Devuelve cadena vacía si no existe.
   */
  pick(value, lang) {
    if (value == null) return "";
    if (typeof value === "string") return value;
    const l = lang || document.documentElement.lang || this.defaultLang;
    return value[l] || value.en || "";
  },

  /** Guarda el idioma elegido. */
  save(lang) {
    try {
      localStorage.setItem(this.storageKey, lang);
    } catch (e) {
      /* noop */
    }
  },
};
