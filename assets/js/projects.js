/* ==========================================================================
   projects.js — Fuente única de verdad del portfolio
   --------------------------------------------------------------------------
   PARA AÑADIR UN PROYECTO NUEVO:
   1. Copia un objeto del array PROJECTS y pégalo al principio o al final.
   2. Rellena los campos con { en: "...", es: "..." } (bilingüe).
   3. El orden en la web es el orden del array (los primeros salen primero).
   4. `sections` se renderizan en orden. Tipos disponibles:
        - type: "text"     → título + párrafos + bullets (por defecto)
        - type: "gallery"  → rejilla de imágenes a 2 columnas
        - type: "wide"     → imagen a ancho completo
        - type: "stats"    → lista de etiqueta/valor en columnas
      Si no pones `type`, se asume "text".
   5. `cover` es la imagen de la tarjeta. `hero` es la del detalle.
   6. `status: "soon"` marca el proyecto como "contenido en preparación".
   ========================================================================== */

const IMG = "assets/img/";

const PROJECTS = [
  /* ---------------------------------------------------------------- ASCASO */
  {
    id: "ascaso",
    layout: "rich",
    title: "Ascaso",
    heroTitle: "ascaso shop",
    category: { en: "Ecommerce / Coffee shop", es: "Ecommerce / Coffee shop" },
    tagline: {
      en: "From research to design system: how I built Ascaso's shopping experience — clearer and more consistent across the whole store.",
      es: "De la investigación al sistema de diseño: así construí la experiencia de compra de Ascaso, más clara y coherente en todo el e-commerce.",
    },
    year: "2024",
    cover: IMG + "ascaso-card-transp.webp",
    cardBg: "#E0DAD1",
    coverFit: "contain",
    coverVideo: "assets/video/ascaso-card.mp4",
    hero: IMG + "4ca75270cbc529723d1498c29a84103596b9809c.png",
    /* Vídeo de presentación: va justo después de la ficha del proyecto.
       Los siguientes se añaden como bloques `media` con `video:` dentro de la
       sección que corresponda. */
    banner: {
      video: "assets/video/ascaso-01.mp4",
      src: IMG + "ascaso-01-poster.jpg",
      caption: { en: "Ascaso e-commerce", es: "E-commerce de Ascaso" },
    },
    link: "https://www.ascaso.com/",
    facts: [
      { label: { en: "My role", es: "Mi rol" }, value: { en: "Product Designer", es: "Product Designer" } },
      { label: { en: "Duration", es: "Duración" }, value: { en: "8 Weeks", es: "8 semanas" } },
      { label: { en: "Industry", es: "Industria" }, value: { en: "E-commerce", es: "E-commerce" } },
    ],
    skills: [
      { en: "UX Audit", es: "Auditoría UX" },
      { en: "Benchmarking", es: "Benchmarking" },
      { en: "UI Design", es: "Diseño UI" },
      { en: "E-commerce", es: "E-commerce" },
      { en: "Information Architecture", es: "Arquitectura de la información" },
    ],
    intro: {
      en: [
        "Ascaso is a premium coffee machine manufacturer known for combining industrial craftsmanship, innovation and contemporary design.",
        "The project focused on rethinking key areas of the e-commerce experience, with the goal of helping users better understand the product catalogue, compare models and make confident purchasing decisions while maintaining the brand's premium positioning.",
      ],
      es: [
        "Ascaso es un fabricante premium de máquinas de café conocido por combinar artesanía industrial, innovación y diseño contemporáneo.",
        "El proyecto se centró en repensar las áreas clave de la experiencia de e-commerce, con el objetivo de ayudar a los usuarios a comprender mejor el catálogo, comparar modelos y tomar decisiones de compra con confianza, manteniendo el posicionamiento premium de la marca.",
      ],
    },

    sections: [
      /* ---------------------------------------------------------- RETO --- */
      {
        id: "challenge",
        label: { en: "Challenge", es: "El reto" },
        blocks: [
          {
            t: "p",
            v: {
              en: "The existing experience provided access to a wide range of products, but users faced challenges when exploring the catalogue, comparing models and understanding the differences between product categories.",
              es: "La experiencia existente daba acceso a una amplia gama de productos, pero los usuarios tenían dificultades para explorar el catálogo, comparar modelos y entender las diferencias entre categorías de producto.",
            },
          },
          {
            t: "p",
            v: {
              en: "The goal was to simplify product discovery, improve navigation and create a clearer purchasing journey without compromising the premium perception of the brand.",
              es: "El objetivo era simplificar el descubrimiento de producto, mejorar la navegación y crear un recorrido de compra más claro sin comprometer la percepción premium de la marca.",
            },
          },
        ],
      },

      /* ---------------------------------------------------- ECOSISTEMA --- */
      {
        id: "ecosystem",
        theme: "grey",
        label: {
          en: "Understanding Ascaso's brand ecosystem",
          es: "Entendiendo el ecosistema de marca de Ascaso",
        },
        blocks: [
          {
            t: "p",
            v: {
              en: "Before designing the e-commerce experience, I analysed Ascaso's existing digital ecosystem to understand how the brand communicated its values, products and positioning across different touchpoints.",
              es: "Antes de diseñar la experiencia de e-commerce, analicé el ecosistema digital existente de Ascaso para entender cómo la marca comunicaba sus valores, productos y posicionamiento en los distintos puntos de contacto.",
            },
          },
          {
            t: "p",
            v: {
              en: "The analysis focused on identifying recurring visual patterns, navigation structures, content hierarchy and brand attributes that could be translated into the shopping experience.",
              es: "El análisis se centró en identificar patrones visuales recurrentes, estructuras de navegación, jerarquía de contenido y atributos de marca que pudieran trasladarse a la experiencia de compra.",
            },
          },
          {
            t: "p",
            v: {
              en: "This phase helped establish a clear connection between the corporate website and the future e-commerce platform, ensuring consistency while adapting the experience to the specific needs of online purchasing.",
              es: "Esta fase ayudó a establecer una conexión clara entre la web corporativa y la futura plataforma de e-commerce, asegurando la coherencia y adaptando a la vez la experiencia a las necesidades específicas de la compra online.",
            },
          },
          {
            t: "cards",
            full: true,
            cols: 3,
            items: [
              {
                num: "01.",
                title: { en: "Typography", es: "Tipografía" },
                kind: "type",
                sample: {
                  en: "For the coffee lovers, since 1962.",
                  es: "Para los amantes del café, desde 1962.",
                },
                text: {
                  en: "There are things that cannot be described in words. Like the aroma of freshly ground coffee. Or the sensation evoked by a good design. It is a moment, an instant, a feeling, sometimes incomprehensible.",
                  es: "Hay cosas que no se pueden describir con palabras. Como el aroma del café recién molido. O la sensación que evoca un buen diseño. Es un momento, un instante, un sentimiento, a veces incomprensible.",
                },
                fonts: [
                  { name: "Libre Caslon", role: { en: "Heading", es: "Titulares" } },
                  { name: "Poppins", role: { en: "Text", es: "Texto" } },
                ],
              },
              {
                num: "02.",
                title: { en: "Colour palette", es: "Paleta de color" },
                kind: "palette",
                swatches: ["#E2DCD3", "#4A94FF", "#000000", "#5A5A5A"],
                usageLabel: { en: "Usage", es: "Uso" },
                usage: [
                  { pct: 70, hex: "#000000", label: { en: "Neutrals", es: "Neutros" } },
                  { pct: 25, hex: "#E2DCD3", label: { en: "Warms", es: "Cálidos" } },
                  { pct: 5, hex: "#4A94FF", label: { en: "Accent", es: "Acento" } },
                ],
              },
              {
                num: "03.",
                title: { en: "Product photography", es: "Fotografía de producto" },
                kind: "photos",
                big: IMG + "9348bfee3ab9053f1610f45e2952f41db057635a.png",
                small: [
                  IMG + "132ef29b495519ef78fac6ff5e4449e354e11638.png",
                  IMG + "779704bab140adf01b19cbd7a3098db359cd851e.png",
                ],
              },
              {
                num: "04.",
                title: { en: "Layout & composition", es: "Maquetación y composición" },
                kind: "images",
                images: [
                  IMG + "5766f616ecf82b052a660bf4aa8ca51f72856669.png",
                  IMG + "28e4e70a7bfe6d27c145f8621ba21ae45918e898.png",
                ],
              },
              {
                num: "05.",
                title: { en: "Navigation patterns", es: "Patrones de navegación" },
                kind: "nav",
                wide: [
                  IMG + "63e388bae13115c6c59aea27cf10c88edb4f983d.png",
                  IMG + "39d0ad188763d4fc5c022e27e725d118783d7e53.png",
                ],
                phones: [
                  IMG + "818baf0330fc86f108be4fc2c4759209d47b3e9a.png",
                  IMG + "8673d94308e788b908abbac234a27d7644377a7c.png",
                ],
              },
              {
                num: "06.",
                title: { en: "UI components", es: "Componentes de interfaz" },
                kind: "ui",
                photo: IMG + "a68848daf24ce35f5a7d2f3419ee5bf67d296277.png",
                card: IMG + "ac1ed230b8d8f8d809338d691754cd711f547d26.png",
                buttons: [
                  { label: { en: "Go to STEEL", es: "Ir a STEEL" }, dark: false },
                  { label: { en: "Go to STEEL", es: "Ir a STEEL" }, blue: true },
                ],
                icons: [
              IMG + "8729740b39c79589597dc74e5f913c374e3ad251.svg",
              IMG + "573cadc28eb7b99d4f358844241b7c96a4c1f066.svg",
              IMG + "a768f90a3783952970c898f9666ef71661cf24b9.svg",
      IMG + "icon-avatar.svg",
              IMG + "b0c999e039e6d3f7b61bfdfc868995cbe9d1846f.svg",
              IMG + "43ecf3432e9ae545ad770195c25b4d1157fcbaab.svg",
              IMG + "43ecf3432e9ae545ad770195c25b4d1157fcbaab.svg",
            ],
              },
            ],
          },
        ],
      },

      /* -------------------------------------------------- REFERENCIAS --- */
      {
        id: "references",
        label: { en: "Design references", es: "Referencias de diseño" },
        blocks: [
          {
            t: "lead",
            v: {
              en: "Learning from industry leaders and curated references.",
              es: "Aprender de líderes del sector y referencias seleccionadas.",
            },
          },
          {
            t: "p",
            v: {
              en: "To better understand user expectations and identify proven interaction patterns, I analysed a selection of e-commerce experiences recommended by the client alongside additional references discovered during the research phase.",
              es: "Para entender mejor las expectativas de los usuarios e identificar patrones de interacción probados, analicé una selección de experiencias de e-commerce recomendadas por el cliente junto con otras referencias descubiertas durante la fase de investigación.",
            },
          },
          {
            t: "p",
            v: {
              en: "Rather than replicating existing solutions, the goal was to understand how leading brands approached product presentation, navigation and purchasing journeys. These insights helped shape key areas of the Ascaso experience while maintaining a visual language aligned with the brand's identity.",
              es: "En lugar de replicar soluciones existentes, el objetivo era entender cómo las marcas líderes abordaban la presentación de producto, la navegación y los recorridos de compra. Estos insights ayudaron a definir áreas clave de la experiencia Ascaso manteniendo un lenguaje visual alineado con la identidad de la marca.",
            },
          },
          {
            t: "refs",
            items: [
              {
                num: "01",
                name: "La Marzocco",
                url: "www.lamarzocco.com",
                image: IMG + "6266956b5f013e46d3c8f00df6fe9f6e612ef1c3.png",
                text: {
                  en: "Product storytelling and homepage composition. The visual hierarchy, use of large product imagery and editorial layout helped define the structure of the Ascaso e-commerce homepage. This reference demonstrated how premium products can be presented through storytelling while maintaining a clear path to exploration and purchase.",
                  es: "Storytelling de producto y composición de la home. La jerarquía visual, el uso de imágenes grandes de producto y la maquetación editorial ayudaron a definir la estructura de la home de Ascaso. Esta referencia demostró cómo presentar productos premium mediante storytelling sin perder un camino claro hacia la exploración y la compra.",
                },
              },
              {
                num: "02",
                name: "Lelit",
                url: "www.lelit.com",
                image: IMG + "ed6d88b080dccdd2dda60cf1344e5f2e9133115d.png",
                text: {
                  en: "Product card structure, information hierarchy and colour selector interactions. This reference provided valuable insights into how technical products can be organised and compared efficiently. The product card layout, content prioritisation and colour selection patterns inspired several interaction decisions within the catalogue experience.",
                  es: "Estructura de la tarjeta de producto, jerarquía de información e interacción con el selector de color. Esta referencia aportó claves sobre cómo organizar y comparar productos técnicos de forma eficiente. La tarjeta de producto, la priorización de contenido y los patrones de selección de color inspiraron varias decisiones de interacción del catálogo.",
                },
              },
              {
                num: "03",
                name: "Create",
                url: "https://www.create-store.com/es/",
                image: IMG + "aacc892eac394d33084b3eaff23331def69cae19.png",
                text: {
                  en: "Minimal product presentation and clean purchasing experience. Create's approach demonstrated how a reduced visual language can help users focus on the product itself. The product detail page became a key reference for simplifying information, reducing visual noise and creating a more intuitive shopping experience.",
                  es: "Presentación de producto minimalista y experiencia de compra limpia. El enfoque de Create demostró cómo un lenguaje visual reducido ayuda a centrar la atención en el producto. La ficha de producto se convirtió en una referencia clave para simplificar la información, reducir el ruido visual y crear una experiencia de compra más intuitiva.",
                },
              },
            ],
          },
        ],
      },

      /* ------------------------------------------------ HALLAZGOS ------- */
      {
        id: "findings",
        label: { en: "Key findings", es: "Conclusiones clave" },
        blocks: [
          {
            t: "cols",
            cols: 4,
            items: [
              {
                title: { en: "Editorial product presentation", es: "Presentación editorial de producto" },
                v: {
                  en: "Leading brands use large imagery and thoughtful composition to highlight product craftsmanship and reinforce premium positioning.",
                  es: "Las marcas líderes usan imágenes grandes y una composición cuidada para destacar la artesanía del producto y reforzar el posicionamiento premium.",
                },
              },
              {
                title: { en: "Clear product hierarchy", es: "Jerarquía de producto clara" },
                v: {
                  en: "Information is prioritised to help users quickly understand product differences, features and value.",
                  es: "La información se prioriza para que el usuario entienda rápido las diferencias, características y el valor de cada producto.",
                },
              },
              {
                title: { en: "Minimal purchasing experience", es: "Experiencia de compra minimalista" },
                v: {
                  en: "Reducing unnecessary visual elements helps users focus on decision-making and product exploration.",
                  es: "Reducir los elementos visuales innecesarios ayuda al usuario a centrarse en la decisión y en explorar el producto.",
                },
              },
              {
                title: { en: "Focused product storytelling", es: "Storytelling de producto enfocado" },
                v: {
                  en: "Every touchpoint contributes to communicating the brand's values through content, visuals and interaction design.",
                  es: "Cada punto de contacto contribuye a comunicar los valores de la marca a través del contenido, lo visual y el diseño de interacción.",
                },
              },
            ],
          },
        ],
      },

      /* ------------------------------------ ARQUITECTURA DE LA INFORMACIÓN */
      {
        id: "ia",
        theme: "soft",
        label: { en: "Information architecture", es: "Arquitectura de la información" },
        blocks: [
          {
            t: "lead",
            v: {
              en: "Organising a complex catalogue into a clearer shopping experience.",
              es: "Organizar un catálogo complejo en una experiencia de compra más clara.",
            },
          },
          {
            t: "p",
            v: {
              en: "One of the main challenges was helping users navigate a broad product catalogue while understanding the differences between machines, accessories and complementary products.",
              es: "Uno de los principales retos era ayudar a los usuarios a navegar por un catálogo amplio entendiendo las diferencias entre máquinas, accesorios y productos complementarios.",
            },
          },
          {
            t: "p",
            v: {
              en: "To create a more intuitive experience, I restructured the information architecture, defining clearer navigation paths, product groupings and content relationships.",
              es: "Para crear una experiencia más intuitiva, reestructuré la arquitectura de la información definiendo rutas de navegación, agrupaciones de producto y relaciones de contenido más claras.",
            },
          },
          {
            t: "p",
            v: {
              en: "The goal was to reduce cognitive load and help users find the right product more efficiently.",
              es: "El objetivo era reducir la carga cognitiva y ayudar a los usuarios a encontrar el producto adecuado de forma más eficiente.",
            },
          },
          {
            t: "media",
            full: true,
            src: IMG + "104359329ecfb1977fdd5dd5a9447ec208552fd3.png",
            caption: { en: "Site map and user flows", es: "Sitemap y flujos de usuario" },
          },
        ],
      },

      /* ------------------------------------------------ DISEÑO FINAL ----- */
      {
        id: "final",
        label: { en: "Final design", es: "Diseño final" },
        /* La entradilla va bajo la etiqueta, a la izquierda, como el original */
        sub: {
          en: "Designing a premium shopping experience for coffee enthusiasts.",
          es: "Diseñando una experiencia de compra premium para los amantes del café.",
        },
        blocks: [
          { t: "media", src: IMG + "44fcfe4ed6655bc3b667deb562b2a52513fe1b92.png" },
        ],
      },

      /* ------------------------------------- DECISIONES CLAVE DE DISEÑO -- */
      {
        id: "decisions",
        theme: "dark",
        label: { en: "Key design decisions", es: "Decisiones clave de diseño" },
        blocks: [
          {
            t: "decisions",
            items: [
              {
                icon: IMG + "eyes.svg",
                title: { en: "Editorial Product Presentation", es: "Presentación editorial de producto" },
                v: {
                  en: "Leading brands use large imagery and thoughtful composition to highlight product craftsmanship and reinforce premium positioning.",
                  es: "Las marcas líderes usan imágenes grandes y una composición cuidada para destacar la artesanía del producto y reforzar el posicionamiento premium.",
                },
              },
              {
                icon: IMG + "imbalance.svg",
                title: { en: "Clear Product Hierarchy", es: "Jerarquía de producto clara" },
                v: {
                  en: "Information is prioritised to help users quickly understand product differences, features and value.",
                  es: "La información se prioriza para que el usuario entienda rápido las diferencias, las características y el valor de cada producto.",
                },
              },
              {
                icon: IMG + "mall-bag.svg",
                title: { en: "Minimal Purchasing Experience", es: "Experiencia de compra minimalista" },
                v: {
                  en: "Reducing unnecessary visual elements helps users focus on decision-making and product exploration.",
                  es: "Reducir los elementos visuales innecesarios ayuda al usuario a centrarse en la decisión y en explorar el producto.",
                },
              },
            ],
          },
        ],
      },

      /* ------------------------------------------------ STORYTELLING ----- */
      {
        id: "storytelling",
        blocks: [
          {
            t: "showcase",
            title: { en: "Premium Product Storytelling", es: "Storytelling premium de producto" },
            v: {
              en: "Large imagery, generous spacing and editorial layouts were used to highlight product craftsmanship and reinforce Ascaso's premium positioning.",
              es: "Imágenes grandes, espaciado generoso y maquetaciones editoriales para destacar la artesanía del producto y reforzar el posicionamiento premium de Ascaso.",
            },
            video: "assets/video/ascaso-02.mp4",
            poster: IMG + "ascaso-02-poster.jpg",
          },
          {
            /* Las dos capturas van en su propia caja, debajo */
            t: "showcase",
            images: [
              IMG + "b9964450dc2551dfba6f7135a1eff294922cd3df.png",
              IMG + "3662f44077c94d1e6a138643546a994feb7fcaf6.png",
            ],
          },
        ],
      },

      /* --------------------------------------------- DESCUBRIMIENTO ------ */
      {
        id: "discovery",
        blocks: [
          {
            t: "showcase",
            title: { en: "Clear Product Discovery", es: "Descubrimiento de producto claro" },
            v: {
              en: "The catalogue structure was designed to help users quickly understand product categories and find the right machine for their needs.",
              es: "La estructura del catálogo se diseñó para que el usuario entienda rápido las categorías y encuentre la máquina adecuada a sus necesidades.",
            },
            /* Vídeo vertical + las dos pantallas, en fila de tres */
            mediaCols: 3,
            video: "assets/video/ascaso-03.mp4",
            poster: IMG + "ascaso-03-poster.jpg",
            images: [IMG + "ascaso-mob-01.webp", IMG + "ascaso-mob-02.webp"],
          },
        ],
      },

      /* -------------------------------------------- CONFIGURACIÓN -------- */
      {
        id: "configuration",
        blocks: [
          {
            t: "showcase",
            title: { en: "Product Configuration", es: "Configuración de producto" },
            v: {
              en: "Users could explore different finishes and configurations while maintaining a simple and intuitive purchasing journey.",
              es: "Los usuarios podían explorar distintos acabados y configuraciones manteniendo un recorrido de compra simple e intuitivo.",
            },
            video: "assets/video/ascaso-04.mp4",
            poster: IMG + "ascaso-04-poster.jpg",
          },
        ],
      },

            /* ------------------------- MOCKUPS SOBRE EL CHECKOUT -------------- */
      {
        id: "checkout-mockups",
        blocks: [
          {
            t: "showcase",
            mediaCols: 3,
            images: [
              IMG + "d833897149a340582cb74b3f809b17e9dd715881.png",
              IMG + "d52b686eb5f90c0b957b2ab7652c929d3e642b5a.png",
              IMG + "818baf0330fc86f108be4fc2c4759209d47b3e9a.png",
            ],
          },
        ],
      },

/* ---------------------------------------------------- CHECKOUT ----- */
      {
        id: "checkout",
        blocks: [
          {
            t: "showcase",
            title: { en: "Smooth Checkout Experience", es: "Checkout fluido" },
            v: {
              en: "A simplified checkout flow reduces friction and allows users to complete their purchase through sign in, registration or guest checkout, creating a fast and intuitive purchasing experience.",
              es: "Un flujo de checkout simplificado reduce la fricción y permite completar la compra con login, registro o como invitado, creando una experiencia de compra rápida e intuitiva.",
            },
            images: [
              IMG + "33ec3d1bb8085283f0cf81cf6cfd8e001768a641.png",
              IMG + "588fe9e11fb535a428c0acc99fc873dddd553bd1.png",
            ],
          },
        ],
      },


      /* ------------------------- IMAGENES BAJO EL CHECKOUT ------------- */
      {
        id: "checkout-more",
        blocks: [
          {
            t: "showcase",
            mediaCols: 2,
            images: [
              IMG + "588fe9e11fb535a428c0acc99fc873dddd553bd1.png",
              IMG + "82ee052b07e66ea0fe98e3a9159c5308f92355bb.png",
            ],
          },
        ],
      },

      /* -------------------------------------- IMPACTO Y REFLEXIONES ------ */
      {
        id: "impact",
        blocks: [
          {
            t: "cols",
            cols: 2,
            boxed: true,
            items: [
              {
                title: { en: "Impact", es: "Impacto" },
                v: {
                  en: "The project transformed Ascaso's digital ecosystem into a more cohesive shopping experience, improving product discovery, comparison and purchase confidence while preserving the brand's premium character.",
                  es: "El proyecto transformó el ecosistema digital de Ascaso en una experiencia de compra más cohesionada, mejorando el descubrimiento de producto, la comparación y la confianza en la compra, y preservando el carácter premium de la marca.",
                },
              },
              {
                title: { en: "Reflections", es: "Reflexiones" },
                v: {
                  en: "This project demonstrated how thoughtful information architecture, clear product communication and strong visual storytelling can work together to create a more intuitive and engaging e-commerce experience.",
                  es: "Este proyecto demostró cómo una arquitectura de la información cuidada, una comunicación de producto clara y un storytelling visual sólido pueden trabajar juntos para crear una experiencia de e-commerce más intuitiva y atractiva.",
                },
              },
            ],
          },
        ],
      },
    ],
  },

  /* -------------------------------------------------------------- ALTESSIA */
  {
    id: "altessia",
    layout: "rich",
    title: "Altessia",
    heroTitle: "Altessia",
    category: { en: "Healthcare / Cardiac rehabilitation", es: "Salud / Rehabilitación cardíaca" },
    tagline: {
      en: "Designing a patient-centred experience that encourages prevention, rehabilitation and long-term wellbeing.",
      es: "Diseñando una experiencia centrada en el paciente que fomente la prevención, la rehabilitación y el bienestar a largo plazo.",
    },
    year: "2024",
    cover: IMG + "altessia-card.webp",
    coverFit: "contain",
    cardBg: "#F1FCF7",
    /* En el original la portada del hero es la fotografía de la unidad de
       rehabilitación cardíaca, no una captura de la interfaz. */
    hero: IMG + "68edbae6e0f7ad1b9d08a7166794d55cf4210558.png",
    /* Video de presentacion: la banda verde con el portatil, igual que en
       Ascaso pero con la web de Altessia. Va justo despues de la ficha. */
    banner: {
      video: "assets/video/altessia-banner.mp4",
      src: IMG + "altessia-banner-poster.jpg",
      caption: { en: "Altessia website", es: "Web de Altessia" },
    },
    /* El original NO lleva vídeo de presentación: en la página publicada no
       hay ni un solo <video> ni referencias .mp4 / .webm. Por eso no hay
       `banner`. Los dos huecos redondeados que quedan dentro de "Final
       design" (Inspiring the first steps y Humanising the treatment
       experience) están vacíos en el HTML: si algún día aparece el vídeo,
       se añadiría aquí o como bloque `media` con `video:` y `src:`. */
    link: "https://www.altessia.es/",
    facts: [
      { label: { en: "My role", es: "Mi rol" }, value: { en: "Product Designer", es: "Product Designer" } },
      { label: { en: "Duration", es: "Duración" }, value: { en: "6 Weeks", es: "6 semanas" } },
      { label: { en: "Industry", es: "Industria" }, value: { en: "Healthcare sector", es: "Sector salud" } },
    ],
    skills: [
      { en: "UX Audit", es: "Auditoría UX" },
      { en: "Benchmarking", es: "Benchmarking" },
      { en: "UI Design", es: "Diseño UI" },
      { en: "Information Architecture", es: "Arquitectura de la información" },
      { en: "Wireframes", es: "Wireframes" },
    ],
    intro: {
      en: [
        "Altessia is a specialised cardiology clinic dedicated to helping patients manage their cardiovascular health through every stage of their journey.",
        "This project focused on redesigning the digital experience to better support patients in understanding their condition, exploring available treatments and accessing the resources needed for long-term care.",
        "The work included UX audit, benchmark analysis, information architecture, wireframes and UI design across a two-month engagement.",
      ],
      es: [
        "Altessia es una clínica de cardiología especializada dedicada a ayudar a los pacientes a gestionar su salud cardiovascular en cada etapa de su recorrido.",
        "Este proyecto se centró en rediseñar la experiencia digital para acompañar mejor al paciente: entender su condición, explorar los tratamientos disponibles y acceder a los recursos necesarios para el cuidado a largo plazo.",
        "El trabajo incluyó auditoría UX, análisis de benchmark, arquitectura de la información, wireframes y diseño de interfaz a lo largo de dos meses.",
      ],
    },

    sections: [
      /* ---------------------------------------------------------- RETO --- */
      {
        id: "challenge",
        label: { en: "Challenge", es: "El reto" },
        blocks: [
          {
            t: "p",
            v: {
              en: "Patients visiting Altessia were often looking for more than medical information. They needed guidance, clarity and reassurance throughout what is often a complex and emotional healthcare journey.",
              es: "Los pacientes que visitaban Altessia solían buscar algo más que información médica. Necesitaban orientación, claridad y tranquilidad a lo largo de un recorrido sanitario que a menudo es complejo y emocional.",
            },
          },
          {
            t: "p",
            v: {
              en: "One of the main challenges was helping users understand which services were relevant to their condition, what steps to follow after diagnosis, and how to maintain a healthy lifestyle after treatment. While the clinic offered a wide range of specialised services and resources, the existing experience made it difficult for patients to understand how these elements connected throughout their care journey.",
              es: "Uno de los principales retos era ayudar a los usuarios a entender qué servicios eran relevantes para su condición, qué pasos seguir tras el diagnóstico y cómo mantener un estilo de vida saludable después del tratamiento. Aunque la clínica ofrecía una amplia gama de servicios y recursos especializados, la experiencia existente dificultaba entender cómo se conectaban todos esos elementos a lo largo del proceso de cuidado.",
            },
          },
          {
            t: "p",
            v: {
              en: "The goal was to transform the website into a clearer and more structured experience that could support patients from diagnosis and treatment to recovery and long-term cardiovascular wellbeing.",
              es: "El objetivo era transformar la web en una experiencia más clara y estructurada, capaz de acompañar al paciente desde el diagnóstico y el tratamiento hasta la recuperación y el bienestar cardiovascular a largo plazo.",
            },
          },
        ],
      },

      /* ----------------------------------------------------- AUDITORÍA UX */
      {
        id: "ux-audit",
        theme: "grey",
        label: { en: "UX audit", es: "Auditoría UX" },
        blocks: [
          {
            t: "lead",
            v: {
              en: "The project began with a UX audit focused on understanding how patients interacted with the existing website and identifying opportunities to improve clarity, navigation and information access.",
              es: "El proyecto comenzó con una auditoría UX centrada en entender cómo interactuaban los pacientes con la web existente e identificar oportunidades para mejorar la claridad, la navegación y el acceso a la información.",
            },
          },
          { t: "note", v: { en: "The patient journey", es: "El recorrido del paciente" } },
          {
            t: "cols",
            cols: 4,
            items: [
              {
                title: { en: "Diagnosis", es: "Diagnóstico" },
                v: {
                  en: "“I need to understand what is happening and what I need.”",
                  es: "«Necesito entender qué me está pasando y qué necesito.»",
                },
              },
              {
                title: { en: "Treatment", es: "Tratamiento" },
                v: {
                  en: "“I want to know which treatments are available and how they work.”",
                  es: "«Quiero saber qué tratamientos hay disponibles y cómo funcionan.»",
                },
              },
              {
                title: { en: "Recovery", es: "Recuperación" },
                v: {
                  en: "“I need guidance during my recovery and rehabilitation.”",
                  es: "«Necesito orientación durante mi recuperación y rehabilitación.»",
                },
              },
              {
                title: { en: "Long-term care", es: "Cuidado a largo plazo" },
                v: {
                  en: "“I want to stay healthy and prevent future cardiovascular issues.”",
                  es: "«Quiero mantenerme sano y prevenir futuros problemas cardiovasculares.»",
                },
              },
            ],
          },
          {
            t: "media",
            full: true,
            src: IMG + "693cff5f8e2f066626436bb4ef35f5dcf4ac7ef5.png",
          },
        ],
      },

      /* ----------------------------------------------- CONCLUSIONES CLAVE */
      {
        id: "findings",
        theme: "soft",
        label: { en: "Key findings", es: "Conclusiones clave" },
        blocks: [
          {
            t: "lead",
            v: {
              en: "Patients need a clearer, more guided experience that connects information, services and support to each stage of their cardiovascular health journey.",
              es: "Los pacientes necesitan una experiencia más clara y guiada que conecte información, servicios y apoyo en cada etapa de su recorrido de salud cardiovascular.",
            },
          },
        ],
      },

      /* ----------------------------------------- INVESTIGACIÓN E INSPIRACIÓN */
      {
        id: "research",
        label: { en: "Research & inspiration", es: "Investigación e inspiración" },
        blocks: [
          {
            t: "p",
            v: {
              en: "To design a more intuitive and supportive experience for Altessia patients, I analysed leading healthcare websites and digital platforms.",
              es: "Para diseñar una experiencia más intuitiva y de acompañamiento para los pacientes de Altessia, analicé webs y plataformas digitales líderes del sector salud.",
            },
          },
          {
            t: "p",
            v: {
              en: "The research focused on how they structure information, guide patients throughout their healthcare journey and build trust through clarity, consistency and accessibility.",
              es: "La investigación se centró en cómo estructuran la información, guían al paciente a lo largo de su recorrido sanitario y construyen confianza mediante claridad, consistencia y accesibilidad.",
            },
          },
          {
            t: "refs",
            items: [
              {
                num: "01",
                name: "QuironSalud",
                image: IMG + "9f009c45bc9d941433ad29ff00d5bc23f958255f.png",
                text: {
                  en: "Well-organised services and specialties that help users quickly identify the care they need while reducing navigation complexity.",
                  es: "Servicios y especialidades bien organizados que ayudan a identificar rápidamente la atención necesaria y reducen la complejidad de la navegación.",
                },
              },
              {
                num: "02",
                name: "HM hospitales",
                image: IMG + "ca8938a4fac6f01019adf7b324535374446c6d69.png",
                text: {
                  en: "Transparent communication, specialist visibility and intuitive appointment flows that reinforce confidence throughout the patient journey.",
                  es: "Comunicación transparente, visibilidad de los especialistas y flujos de cita intuitivos que refuerzan la confianza durante todo el recorrido del paciente.",
                },
              },
              {
                num: "03",
                name: "Mayo Clinic",
                image: IMG + "85322471362964520738ac7fdb3ffdd1babe42ef.png",
                text: {
                  en: "Clear content hierarchy and educational resources that simplify complex medical information and help patients understand every stage of their care.",
                  es: "Jerarquía de contenido clara y recursos educativos que simplifican información médica compleja y ayudan a entender cada etapa de la atención.",
                },
              },
            ],
          },
        ],
      },

      /* ------------------------------------------------- CONCLUSIONES (II) */
      {
        id: "principles",
        label: { en: "Key findings", es: "Conclusiones clave" },
        blocks: [
          {
            t: "cols",
            cols: 3,
            items: [
              {
                title: { en: "Clear patient pathways", es: "Rutas de paciente claras" },
                v: {
                  en: "Guide patients through each stage of care with clear navigation, contextual information and visible next steps.",
                  es: "Guiar al paciente en cada etapa de la atención con navegación clara, información contextual y siguientes pasos visibles.",
                },
              },
              {
                title: { en: "Accessible information", es: "Información accesible" },
                v: {
                  en: "Prioritise content through strong information hierarchy to make complex medical topics easier to understand.",
                  es: "Priorizar el contenido con una jerarquía sólida para hacer más comprensibles los temas médicos complejos.",
                },
              },
              {
                title: { en: "Build trust through transparency", es: "Generar confianza con transparencia" },
                v: {
                  en: "Clear service descriptions, specialist information and consistent communication help patients feel informed and confident.",
                  es: "Descripciones de servicio claras, información de especialistas y comunicación consistente para que el paciente se sienta informado y seguro.",
                },
              },
            ],
          },
        ],
      },

      /* ------------------------------------ ARQUITECTURA DE LA INFORMACIÓN */
      {
        id: "ia",
        theme: "soft",
        label: { en: "Information architecture", es: "Arquitectura de la información" },
        blocks: [
          {
            t: "lead",
            v: {
              en: "Designing a clearer path through the patient’s journey.",
              es: "Diseñando un camino más claro a través del recorrido del paciente.",
            },
          },
          {
            t: "p",
            v: {
              en: "The navigation was redesigned to simplify decision-making and reduce cognitive load. Instead of organising information around the clinic’s structure, the new architecture follows the questions patients naturally ask during their healthcare journey.",
              es: "La navegación se rediseñó para simplificar la toma de decisiones y reducir la carga cognitiva. En lugar de organizar la información según la estructura de la clínica, la nueva arquitectura sigue las preguntas que los pacientes se hacen de forma natural durante su recorrido sanitario.",
            },
          },
          {
            t: "p",
            v: {
              en: "This approach makes treatments, services and supporting resources easier to discover while creating a more intuitive path towards the website’s primary goal: booking an appointment.",
              es: "Este enfoque facilita el descubrimiento de tratamientos, servicios y recursos de apoyo, y crea un camino más intuitivo hacia el objetivo principal de la web: pedir cita.",
            },
          },
          {
            t: "media",
            full: true,
            src: IMG + "17efa62e1f1a9b38cc1a08fd7d513126de2be47b.png",
            caption: { en: "Site map", es: "Mapa del sitio" },
          },
        ],
      },

      /* ------------------------------------------------ PRINCIPIOS DE DISEÑO */
      {
        id: "design-principles",
        theme: "soft",
        label: { en: "Design principles", es: "Principios de diseño" },
        blocks: [
          {
            t: "p",
            v: {
              en: "The redesign is built on a small set of design principles that keep every page consistent, calm and easy to follow for patients of any age.",
              es: "El rediseño se apoya en un conjunto reducido de principios de diseño que mantienen todas las páginas coherentes, tranquilas y fáciles de seguir para pacientes de cualquier edad.",
            },
          },
          {
            t: "p",
            v: {
              en: "Typography, colour, components and photography were defined as one shared system, so treatments, services and supporting resources always look and behave the same way across the site.",
              es: "La tipografía, el color, los componentes y la fotografía se definieron como un único sistema compartido, de modo que los tratamientos, los servicios y los recursos de apoyo se ven y funcionan igual en toda la web.",
            },
          },
          {
            t: "cards",
            full: true,
            cols: 2,
            items: [
              {
                title: { en: "Typography", es: "Tipografía" },
                icon: IMG + "e4a161e0366e33983beb6d27a44392db36d4038e.svg",
                kind: "type",
                sample: {
                  en: "Which cardiovascular conditions do we treat at Altessia?",
                  es: "¿Qué patologías tratamos en Altessia?",
                },
                text: {
                  en: "At Altessia we treat the main cardiovascular conditions in a specialised way, from cardiovascular risk to diseases such as ischaemic heart disease or heart failure.",
                  es: "En Altessia tratamos de forma especializada las principales patologías cardiovasculares, desde el riesgo cardiovascular hasta enfermedades como la cardiopatía isquémica o la insuficiencia cardíaca.",
                },
                fonts: [
                  { name: "Switzer", role: { en: "Display", es: "Titulares" } },
                  { name: "Outfit", role: { en: "Text", es: "Texto" } },
                ],
              },
              {
                title: { en: "Colour palette", es: "Paleta de color" },
                icon: IMG + "0b75c42b45fb538b36e99feb5b757b1cf61d3929.svg",
                kind: "palette",
                swatches: ["#294133", "#5B776B", "#B8E0CE", "#000000", "#FAFAFA"],
                note: {
                  en: "Soft green tones communicate care, reassurance and wellbeing while maintaining contrast and accessibility.",
                  es: "Los tonos verdes suaves comunican cuidado, tranquilidad y bienestar manteniendo el contraste y la accesibilidad.",
                },
              },
              {
                title: { en: "Components", es: "Componentes" },
                icon: IMG + "ec9e99243405ad0dd6134d9fd7f7209f24d6ad28.svg",
                kind: "components",
                photo: IMG + "72f970755b288d32c23697d739409c56d3d77eac.png",
                photoTitle: { en: "Physiotherapy", es: "Fisioterapia" },
                photoText: {
                  en: "Therapeutic intervention to improve mobility, relieve discomfort and optimise physical function throughout the process.",
                  es: "Intervención terapéutica para mejorar movilidad, aliviar molestias y optimizar tu función física durante todo el proceso.",
                },
                photoCta: { en: "Book an appointment", es: "Pedir cita" },
                buttons: [
                  { label: { en: "Ver tratamiento", es: "Ver tratamiento" }, dark: false },
                  { label: { en: "Pide tu cita", es: "Pide tu cita" }, dark: true },
                ],
                social: [
                  IMG + "789b50a7af0a282db46e58e0b23a379fb7f8ba7b.svg",
                  IMG + "874451fc4ae1412a305781b7ae6ec927a0bb9b3c.svg",
                ],
              },
              {
                title: { en: "Gallery", es: "Galería" },
                icon: IMG + "336056e85ffe43af27fee86519c2a9645fdf3355.svg",
                kind: "images",
                images: [
                  IMG + "118c54fd3f6230960dcfb1643143afa1b7639438.png",
                  IMG + "96fd423b1b7d0b7de1fcc43c7bff1ab4ac60c836.png",
                  IMG + "31b161d303abc1ecdc94482b3319496451a9e4d7.png",
                  IMG + "68edbae6e0f7ad1b9d08a7166794d55cf4210558.png",
                ],
                note: {
                  en: "Photography focuses on real interactions between patients and healthcare professionals, reinforcing trust, personalised care and the rehabilitation journey.",
                  es: "La fotografía se centra en interacciones reales entre pacientes y profesionales sanitarios, reforzando la confianza, la atención personalizada y el proceso de rehabilitación.",
                },
              },
            ],
          },
          {
            t: "decisions",
            full: true,
            card: true,
            cols: 4,
            icon: IMG + "136e0381e9b7ce8459332a5f26d91f5232ec9416.svg",
            title: { en: "Accessibility & readability", es: "Accesibilidad y legibilidad" },
            items: [
              {
                icon: IMG + "000ec44c26e2e40cc97e84039dda926901d56ff6.svg",
                title: { en: "High contrast", es: "Alto contraste" },
                v: {
                  en: "Text and UI elements meet WCAG standards.",
                  es: "El texto y los elementos de interfaz cumplen los estándares WCAG.",
                },
              },
              {
                icon: IMG + "0b62700aa34b8226de11c3a4343d823f10eda425.svg",
                title: { en: "Large tap areas", es: "Áreas táctiles amplias" },
                v: {
                  en: "Buttons and interactive elements are sized for easy and confident use.",
                  es: "Los botones y elementos interactivos tienen un tamaño cómodo y seguro de usar.",
                },
              },
              {
                icon: IMG + "47bfe7035a84f590996e8f72092b1dd6d782da04.svg",
                title: { en: "Readable text", es: "Texto legible" },
                v: {
                  en: "Body text is set at a comfortable size.",
                  es: "El texto de párrafo tiene un tamaño cómodo de lectura.",
                },
              },
              {
                icon: IMG + "ccfc45c84ca4d776dfa72846c09f7920978488cc.svg",
                title: { en: "Generous spacing", es: "Espaciado generoso" },
                v: {
                  en: "8 pt spacing system applied across layouts for clarity and rhythm.",
                  es: "Sistema de espaciado de 8 pt aplicado a todos los layouts para dar claridad y ritmo.",
                },
              },
            ],
          },
        ],
      },

      /* ------------------------------------------------- DISEÑO FINAL ----- */
      {
        id: "final",
        label: { en: "Final design", es: "Diseño final" },
        sub: {
          en: "The final interface translates the research, UX audit and information architecture into a clear digital experience that helps patients understand their healthcare journey, discover relevant treatments and confidently take the next step.",
          es: "La interfaz final traduce la investigación, la auditoría UX y la arquitectura de la información en una experiencia digital clara que ayuda al paciente a entender su recorrido sanitario, descubrir los tratamientos relevantes y dar el siguiente paso con confianza.",
        },
        blocks: [
          {
            /* El electrocardiograma: es un VÍDEO (assets/video/altessia-final.mp4,
               recomprimido de 6,4 MB a 0,6) y va en la columna de la derecha,
               al lado de la etiqueta y la entradilla, como en el original.
               El póster es el fotograma que se ve mientras carga. */
            t: "media",
            video: "assets/video/altessia-final.mp4",
            src: IMG + "altessia-final-poster.jpg",
          },
        ],
      },

      /* ------------------------------------- DECISIONES CLAVE DE DISEÑO --- */
      /* Va DESPUES de Diseño final y ANTES de Inspirar los primeros pasos,
         como en el original. */
      {
        id: "decisions",
        theme: "dark",
        label: { en: "Key design decisions", es: "Decisiones clave de diseño" },
        blocks: [
          {
            t: "decisions",
            items: [
              {
                icon: IMG + "a4d39042f8ebf0e5fdbde1648980f4c8e7c10da2.svg",
                title: { en: "Patient journey", es: "Recorrido del paciente" },
                v: {
                  en: "Every interaction supports patients throughout their rehabilitation journey.",
                  es: "Cada interacción acompaña al paciente a lo largo de su proceso de rehabilitación.",
                },
              },
              {
                icon: IMG + "59894aa7e9ad8fee9faa1701c15fc8746f8eba2f.svg",
                title: { en: "Human-centred care", es: "Atención centrada en la persona" },
                v: {
                  en: "Real professionals and authentic imagery build trust and confidence.",
                  es: "Profesionales reales e imágenes auténticas generan confianza y seguridad.",
                },
              },
              {
                icon: IMG + "5d55f4e1d65747b3f40286a97ac6e6cce372983f.svg",
                title: { en: "Clear paths to action", es: "Caminos claros hacia la acción" },
                v: {
                  en: "Simple navigation and clear CTAs encourage appointment requests.",
                  es: "Una navegación sencilla y llamadas a la acción claras favorecen la petición de cita.",
                },
              },
            ],
          },
        ],
      },

      /* ------------------------------------- INSPIRAR LOS PRIMEROS PASOS -- */
      /* Seccion sin etiqueta (ocupa todo el ancho) con una sola caja. Va la
         ultima del bloque, despues de Decisiones clave. */
      {
        id: "inspiring",
        blocks: [
          {
            /* La grabación de la web de Altessia (assets/video/altessia-home.mp4,
               recomprimida de 38,8 MB a 4,9). La caja lleva su póster mientras
               carga y `lazy` para que el vídeo no se descargue al entrar. */
            t: "media",
            full: true,
            theme: "dark",
            lazy: true,
            video: "assets/video/altessia-home.mp4",
            src: IMG + "altessia-home-poster.jpg",
            title: { en: "Inspiring the first steps", es: "Inspirar los primeros pasos" },
            v: {
              en: "The homepage immediately connects physical activity with cardiovascular health, encouraging patients to take the first step towards prevention and rehabilitation.",
              es: "La home conecta de inmediato actividad física y salud cardiovascular, animando al paciente a dar el primer paso hacia la prevención y la rehabilitación.",
            },
          },
        ],
      },

      /* ------------------------------------ GUIAR LA REHABILITACIÓN ------- */
      {
        id: "rehabilitation",
        blocks: [
          {
            t: "showcase",
            title: { en: "Guiding the rehabilitation journey", es: "Guiar el proceso de rehabilitación" },
            v: {
              en: "Rehabilitation is presented as a structured journey, helping patients understand each stage of the programme and what to expect throughout their recovery.",
              es: "La rehabilitación se presenta como un recorrido estructurado que ayuda a entender cada etapa del programa y qué esperar durante la recuperación.",
            },
            mediaCols: 2,
            images: [
              IMG + "6ac3ac7fae1b81d5941beab05befe91624736424.png",
              IMG + "bfd7c0db2966dcdfc9d2680dd8ff9eb2b5bf37e8.png",
            ],
          },
        ],
      },

      /* --------------------------------- HUMANIZAR EL TRATAMIENTO -------- */
      {
        id: "humanising",
        blocks: [
          {
            t: "showcase",
            title: { en: "Humanising the treatment experience", es: "Humanizar la experiencia del tratamiento" },
            v: {
              en: "Real professionals, authentic patient interactions and specialised equipment reinforce trust while making the rehabilitation process feel approachable and personal.",
              es: "Profesionales reales, interacciones auténticas con pacientes y equipamiento especializado refuerzan la confianza y hacen que el proceso de rehabilitación se sienta cercano y personal.",
            },
            /* En el original esta sección lleva DOS medios: la grabación de la
               web (a la izquierda, la misma que en "Inspiring the first steps")
               y la foto del paciente con la mascarilla (a la derecha). El vídeo
               va primero, así que la columna izquierda es la web. */
            video: "assets/video/altessia-home.mp4",
            poster: IMG + "altessia-home-poster.jpg",
            lazy: true,
            images: [IMG + "4c6da8861e4654df50a9094cd306ac61eabfeaed.png"],
          },
        ],
      },

      /* ------------------------------- GENERAR CONFIANZA MÁS ALLÁ -------- */
      {
        id: "trust",
        blocks: [
          {
            t: "showcase",
            title: { en: "Building trust beyond treatment", es: "Generar confianza más allá del tratamiento" },
            v: {
              en: "Dedicated sections about the team, facilities and clinical philosophy help patients understand who will accompany them throughout their rehabilitation journey.",
              es: "Secciones dedicadas al equipo, las instalaciones y la filosofía clínica explican quién acompañará al paciente durante todo su proceso de rehabilitación.",
            },
            mediaCols: 2,
            images: [
              IMG + "b554a6ac51dcc3c71433a75ec9922f637654339d.png",
              IMG + "bf51114c7e6b6b08457130687cbc769ff1aed41a.png",
            ],
          },
        ],
      },

      /* ------------------------------------ FAVORECER LA CITA ----------- */
      {
        id: "appointments",
        blocks: [
          {
            t: "showcase",
            title: { en: "Encouraging appointment requests", es: "Favorecer la petición de cita" },
            v: {
              en: "Strategic calls to action are integrated across the experience, allowing patients to request an appointment naturally whenever they feel ready.",
              es: "Llamadas a la acción estratégicas integradas en toda la experiencia, para que el paciente pida cita de forma natural cuando esté listo.",
            },
            mediaCols: 2,
            images: [
              IMG + "963e4e89ea13c3e36cbf9a318d138ace94f6ce51.png",
              IMG + "df14ca8c7ede505deeb0b20d1b28c0803e064c86.png",
              IMG + "ec4bcbd283bca2475e6eaf32936e4d2a01b049b6.png",
            ],
          },
        ],
      },

      /* ------------------------------------- IMPACTO Y CONCLUSIONES ------- */
      {
        id: "impact",
        blocks: [
          {
            t: "cols",
            cols: 2,
            boxed: true,
            items: [
              {
                title: { en: "Impact", es: "Impacto" },
                v: {
                  en: "To validate the new experience, I compared the redesigned patient journey against the initial UX audit findings. The restructured information architecture and clearer patient pathways directly addressed the navigation and comprehension issues identified at the start of the project, giving patients a more guided route from diagnosis to long-term care.",
                  es: "Para validar la nueva experiencia, comparé el recorrido rediseñado del paciente con los hallazgos de la auditoría UX inicial. La reestructuración de la arquitectura de la información y unas rutas de paciente más claras atacaban directamente los problemas de navegación y comprensión detectados al inicio del proyecto, ofreciendo al paciente un camino más guiado desde el diagnóstico hasta el cuidado a largo plazo.",
                },
              },
              {
                title: { en: "Conclusions", es: "Conclusiones" },
                v: {
                  en: "This project reinforced the importance of designing around real patient needs rather than internal clinic structure. By anchoring the experience in the patient journey — diagnosis, treatment, recovery and long-term care — the redesign helps patients feel informed and supported at every stage, while making it easier to take the next step towards booking an appointment.",
                  es: "Este proyecto reforzó la importancia de diseñar en torno a las necesidades reales del paciente y no a la estructura interna de la clínica. Anclando la experiencia en el recorrido del paciente — diagnóstico, tratamiento, recuperación y cuidado a largo plazo — el rediseño ayuda a que el paciente se sienta informado y acompañado en cada etapa, y facilita dar el siguiente paso hacia la cita.",
                },
              },
            ],
          },
        ],
      },
    ],
  },

  /* -------------------------------------------------------------- EDUSPORT */
  {
    id: "edusport",
    layout: "rich",
    title: "Edusport",
    /* En el original el nombre del proyecto va como titular del hero, en
       minusculas, tal cual aparece en la cabecera de la pagina publicada. */
    heroTitle: "edusport",
    category: { en: "Edtech / Sport", es: "Edtech / Deporte" },
    tagline: {
      en: "An online education platform focused on sports, nutrition and physical activity courses.",
      es: "Una plataforma de formación online centrada en cursos de deporte, nutrición y actividad física.",
    },
    year: "2023",
    cover: IMG + "5792c3da24ad688c3098b0acf64b8bfd28c8e6a9.png",
    coverVideo: "assets/video/edusport-card.mp4",
    cardTitleUpper: true,
    /* La imagen que abre la pagina original: el tablero con las pantallas
       del producto. La foto de la campana de Adidas que hoy hace de hero
       pertenece en realidad a la seccion "Inspiration". */
    hero: IMG + "5792c3da24ad688c3098b0acf64b8bfd28c8e6a9.png",
    /* El logotipo de la marca. En el original son cuatro piezas SVG sueltas
       (la palabra EDU en azul, las letras verdes, la estrella y el edificio)
       que se han compuesto en un solo archivo. Va debajo del texto de
       presentacion, en la columna izquierda de la ficha. */
    logo: IMG + "edusport-logo.svg",
    /* El original lleva un boton "Visit the website" que en la pagina
       publicada NO tiene destino: es un div con role="link" y sin href, y no
       aparece ninguna URL de Edusport en el HTML. `link` se deja vacio a
       proposito y `linkButton` pinta el boton igualmente, sin inventar
       ninguna direccion. */
    link: "",
    linkButton: true,
    facts: [
      { label: { en: "My role", es: "Mi rol" }, value: { en: "Product Designer", es: "Product Designer" } },
      /* En el original esta ficha se rotula "Time: 5 Weeks". */
      { label: { en: "Duration", es: "Duración" }, value: { en: "5 Weeks", es: "5 semanas" } },
      { label: { en: "Industry", es: "Industria" }, value: { en: "Education / Sport", es: "Educación / Deporte" } },
    ],
    skills: [
      { en: "Design System", es: "Sistema de diseño" },
      { en: "User Persona", es: "User Persona" },
      { en: "Benchmarking", es: "Benchmarking" },
      { en: "Product Design", es: "Diseño de producto" },
      { en: "User Interface", es: "Interfaz de usuario" },
    ],
    intro: {
      en: [
        "Edusport is an online education platform focused on sports, nutrition and physical activity.",
        "It covers all the different areas of the sports and nutrition world, represented graphically by various categories.",
      ],
      es: [
        "Edusport es una plataforma de formación online centrada en el deporte, la nutrición y la actividad física.",
        "Cubre todas las áreas del mundo del deporte y la nutrición, representadas gráficamente mediante distintas categorías.",
      ],
    },

    sections: [
      /* ------------------------------------ RETO + DETALLES, EN CAJAS ---- */
      {
        /* En el original son dos secciones seguidas ("El reto" y "Detalles
           del proyecto") sobre una banda gris continua. Aqui van en
           horizontal, cada una en su propia caja gris. La seccion no lleva
           etiqueta: la lleva cada caja. */
        id: "challenge",
        blocks: [
          {
            t: "boxes",
            full: true,
            items: [
              {
                theme: "soft",
                label: { en: "Challenge", es: "El reto" },
                ps: [
                  {
                    en: "The design of the EDUSPORT website presented several challenges. The main goal was to create an intuitive and attractive platform for students and coaches that would facilitate the management and access to educational and sports resources.",
                    es: "El diseño de la web de EDUSPORT planteaba varios retos. El objetivo principal era crear una plataforma intuitiva y atractiva para alumnos y entrenadores que facilitara la gestión y el acceso a recursos educativos y deportivos.",
                  },
                  {
                    en: "The product design focused on creating a seamless and accessible user experience, optimized for both mobile and desktop devices, appealing to the specific target audience, and capable of conveying the spirit and values of sports.",
                    es: "El diseño de producto se centró en crear una experiencia fluida y accesible, optimizada para móvil y escritorio, atractiva para el público objetivo y capaz de transmitir el espíritu y los valores del deporte.",
                  },
                ],
              },
              {
                theme: "soft",
                label: { en: "Project details", es: "Detalles del proyecto" },
                ps: [
                  {
                    en: "Regarding the product, I conducted research in which I analyzed the competition related to online training (benchmarking). I also analyzed major companies in the sports industry, such as Nike, Adidas, Under Armour, etc., to understand how they represent and convey the sports spirit.",
                    es: "En cuanto al producto, realicé una investigación en la que analicé la competencia relacionada con la formación online (benchmarking). También analicé grandes compañías del sector deportivo como Nike, Adidas, Under Armour, etc., para entender cómo representan y transmiten el espíritu deportivo.",
                  },
                  {
                    en: "To understand our user, I created two user persona cases, which helped me gain a deeper understanding of the potential needs, motivations, frustrations and goals of our future users.",
                    es: "Para entender al usuario creé dos casos de user persona, que me ayudaron a comprender mejor las posibles necesidades, motivaciones, frustraciones y objetivos de nuestros futuros usuarios.",
                  },
                  {
                    en: "For the website's information architecture, I created a flowchart to assist in designing the final structure of the site.",
                    es: "Para la arquitectura de la información de la web creé un flowchart que ayudó a diseñar la estructura final del sitio.",
                  },
                ],
              },
            ],
          },
        ],
      },

      /* -------------------------------------------------- INSPIRACIÓN --- */
      {
        id: "inspiration",
        label: { en: "Inspiration", es: "Inspiración" },
        blocks: [
          /* El original solo lleva una imagen: el montaje con las campanas
             de marca deportiva analizadas en la investigacion. */
          {
            t: "media",
            full: true,
            plain: true,
            src: IMG + "edusport-inspiration.webp",
            caption: {
              en: "Sports brand references",
              es: "Referencias de marcas deportivas",
            },
          },
        ],
      },

      /* ---------------------------------------------------- SITEMAP ----- */
      {
        id: "sitemap",
        label: { en: "Sitemap", es: "Mapa web" },
        blocks: [
          {
            t: "media",
            full: true,
            /* PNG con el fondo transparente (el anterior era un JPEG de
               1600 px con extension .png y se veia borroso): `plain` le quita
               el fondo gris al marco para que no se note el corte. */
            plain: true,
            /* Se puede ampliar pulsando, como los logotipos y las
               ilustraciones. */
            zoom: true,
            src: IMG + "edusport-sitemap.png",
            caption: { en: "Site map and user flows", es: "Mapa del sitio y flujos de usuario" },
          },
        ],
      },

      /* ------------------------------------------------ STYLE GUIDE ----- */
      {
        id: "style-guide",
        theme: "soft",
        label: { en: "Style guide", es: "Style guide" },
        blocks: [
          {
            /* Lamina de estilo: el collage de Figma (iconografia, logotipo,
               paleta, escala tipografica y banner de campana). Colores y
               proporciones son los del original. */
            t: "styleguide",
            /* `full`: la lamina necesita todo el ancho de la seccion. Dentro
               del cuerpo, Edusport lo limita a 80ch (para el texto) y el
               collage se quedaba en 80 px. */
            full: true,
            logoWhite: IMG + "edusport-logo-white.svg",
            /* Las tres variantes del logotipo que acompanan al principal en la
               tarjeta azul (los "Frame" del original). */
            logoAlts: [
              IMG + "edusport-logo-alt1.svg",
              IMG + "edusport-logo-alt2.svg",
              IMG + "edusport-logo-alt3.svg",
            ],
            /* La foto que va de fondo en la pieza de la paleta (el "Mobile
               Formacion" del original), con su velo oscuro al 50%. */
            paletteImg: IMG + "edusport-mobile-formacion.png",
            logoMark: IMG + "edusport-logo-white.svg",
            scale: IMG + "1e5b04f38ce6a7cadc3bc6c94f8d3ff47c877f9f.png",
            banner: IMG + "18b860167181ca0f01ca0571cb6b2d3d161c5c72.png",
            athlete: IMG + "6baf5d48fc019d67346ff134c5e44ba271a93fa4.png",
            claim: { en: "The match starts now!", es: "¡El partido comienza ahora!" },
            font: "Red Hat Display",
            chars:
              "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz",
            nums: "0 1 2 3 4 5 6 7 8 9",
            swatches: [
              { c: "#054CD6" },
              { c: "#0576D6" },
              { c: "#7DBAF0" },
              { c: "#BBD852" },
              { c: "#BBD852", soft: true },
              { c: "#333333" },
              { c: "#FFFFFF" },
            ],
            /* La iconografia, en dos filas (6 + 7) y en el orden original. */
            icons: [
              [1, 2, 3, 4, 5, 6].map((n) => `${IMG}iconos-edusport/menu-${String(n).padStart(2, "0")}.svg`),
              [7, 8, 9, 10, 11, 12, 13].map((n) => `${IMG}iconos-edusport/menu-${String(n).padStart(2, "0")}.svg`),
            ],
          },
        ],
      },

      /* ----------------------------------------------------- LA WEB ----- */
      {
        id: "website",
        label: { en: "The website", es: "La web" },
        blocks: [
          /* Las capturas vienen del Figma ya COMPUESTAS (los dos portatiles con
             el movil en una sola pieza, la rejilla, la banda y los tres errores),
             asi que cada bloque lleva UNA imagen y `mediaCols: 1` para que ocupe
             el ancho completo. El collage de fotos se queda como estaba: el
             cliente lo dio por bueno. */
          {
            t: "media",
            full: true,
            src: IMG + "edusport-web-mockups.webp",
            /* En movil, las piezas sueltas en cascada (el cliente lo pidio
               asi). Solo las DOS horizontales: las verticales (el recorte de
               movil de "Area Deportiva" y el de categorias) repetian lo que ya
               sale en grande justo encima, y el cliente las mando quitar. */
            srcMobile: [
              IMG + "bb5de17b8c2da0a11b7cef043255762a88e8701a.webp",
              IMG + "4c1d7b74d0f3a7e1318294bab0ebda7cba02ed0b.webp",
            ],
          },
          {
            t: "media",
            full: true,
            src: IMG + "edusport-web-ficha.webp",
          },
          {
            t: "media",
            full: true,
            src: IMG + "edusport-web-cursos.webp",
          },
          {
            t: "media",
            full: true,
            src: IMG + "edusport-web-banner.webp",
          },
          {
            /* `full: true` también aqui: los bloques a todo el ancho se pintan
               DESPUES de los que van en columna, y sin esto el collage se
               colaba el primero y rompia el orden del Figma. */
            t: "media",
            full: true,
            src: IMG + "a54d739088548ed35e6250d051cdcb4397315a0d.png",
          },
          {
            /* Los estados del sistema, los tres en una sola pieza del Figma. */
            t: "media",
            full: true,
            src: IMG + "edusport-web-errores.webp",
            /* En movil, una version algo recortada (1,5 veces mas grande). En
               escritorio manda el original, que estaba perfecto. */
            srcMobile: [IMG + "edusport-web-errores-movil.webp"],
          },
        ],
      },

      /* -------------------------------------------------- CONCLUSIÓN ---- */
      {
        id: "conclusion",
        label: { en: "Conclusion", es: "Conclusión" },
        blocks: [
          {
            t: "p",
            v: {
              en: "As a result, we have a website with a minimalist design that reflects the motivation and values of the sports spirit. It features easy navigation and a well-structured hierarchy of the website's main information.",
              es: "El resultado es una web de diseño minimalista que refleja la motivación y los valores del espíritu deportivo, con una navegación sencilla y una jerarquía bien estructurada de la información principal.",
            },
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- BOREALIS */
  /* Proyecto externo: no tiene caso de estudio propio, la tarjeta enlaza
     directamente al artículo publicado en Medium.                        */
  {
    id: "borealis",
    title: "Borealis",
    category: { en: "Healthcare / UX research", es: "Salud / Investigación UX" },
    tagline: {
      en: "Mental health and habits. A Design Thinking project.",
      es: "Salud mental y hábitos. Un proyecto de Design Thinking.",
    },
    year: "2023",
    cover: IMG + "7124e9d70acea982ff65a749a0500a0975fd7405.png",
    cardLogo: IMG + "borealis-logo.webp",
    external: {
      en: "https://medium.com/@carloszubeldia/borealis-salud-mental-y-h%C3%A1bitos-un-proyecto-design-thinking-5b687db04f18",
      es: "https://medium.com/@carloszubeldia/borealis-salud-mental-y-h%C3%A1bitos-un-proyecto-design-thinking-5b687db04f18",
    },
    externalLabel: { en: "Read article", es: "Leer artículo" },
    externalHost: "Medium",
  },
];

/* Utilidades de acceso ---------------------------------------------------- */

/** Devuelve todos los proyectos. */
function getAllProjects() {
  return PROJECTS;
}

/** Devuelve un proyecto por id (o null). */
function getProject(id) {
  return PROJECTS.find((p) => p.id === id) || null;
}

/**
 * True si el proyecto tiene caso de estudio propio (página generada).
 * Los proyectos con `external` enlazan fuera y no generan página.
 */
function hasPage(p) {
  return Boolean(p) && !p.external;
}

/** URL de destino de un proyecto: su página o el enlace externo. */
function projectHref(p, lang) {
  if (!p) return "#";
  if (p.external) return p.external[lang] || p.external.en;
  return p.id + ".html";
}

/** True si el enlace del proyecto sale del sitio. */
function isExternal(p) {
  return Boolean(p && p.external);
}

/** Proyectos con página propia, para el bloque "siguientes proyectos". */
function getPagedProjects() {
  return PROJECTS.filter(hasPage);
}

/** Devuelve el proyecto siguiente y anterior con página propia. */
function getSiblings(id) {
  const list = getPagedProjects();
  const i = list.findIndex((p) => p.id === id);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: list[(i - 1 + list.length) % list.length],
    next: list[(i + 1) % list.length],
  };
}

/** Categorías únicas, para los filtros del listado de trabajos. */
function getCategories() {
  const seen = new Map();
  PROJECTS.forEach((p) => {
    const key = p.category.en.split("/")[0].trim().toLowerCase();
    if (!seen.has(key)) seen.set(key, p.category);
  });
  return Array.from(seen, ([key, label]) => ({ key, label }));
}
