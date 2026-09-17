import { t, type Localized } from "./site";

export const workCategories: {
  id: string;
  number: string;
  title: Localized;
  subtitle: Localized;
  role: Localized;
  description: Localized;
  href: string;
}[] = [
  {
    id: "tekapto",
    number: "01",
    title: t("Tekapto", "Tekapto"),
    subtitle: t("Technology company", "Empresa tecnológica"),
    role: t("Co-founder & CTO", "Cofundador y CTO"),
    description: t(
      "From business problems to products that work. Software, web experiences, automation and systems built with intention.",
      "Del problema de negocio al producto que funciona. Software, experiencias web, automatización y sistemas construidos con intención.",
    ),
    href: "work/tekapto",
  },
  {
    id: "web-development",
    number: "02",
    title: t("Web\ndevelopment", "Desarrollo\nweb"),
    subtitle: t(
      "Selected digital experiences",
      "Experiencias digitales seleccionadas",
    ),
    role: t(
      "Web demos & product explorations",
      "Demos web y exploraciones de producto",
    ),
    description: t(
      "Different businesses. Different ways to build an experience. Explore the real web demos published by Tekapto.",
      "Distintos negocios. Distintas formas de construir una experiencia. Explora las demos web reales publicadas por Tekapto.",
    ),
    href: "work/web-development",
  },
  {
    id: "brand-design",
    number: "03",
    title: t("Brand\ndesign", "Diseño\nde marca"),
    subtitle: t("Identity, with intention", "Identidad con intención"),
    role: t(
      "Logos · Visual identities · Brand systems",
      "Logos · Identidades visuales · Sistemas de marca",
    ),
    description: t(
      "A product needs a voice as well as a function. I connect graphic design and visual systems with the things I build.",
      "Un producto necesita una voz, además de una función. Conecto el diseño gráfico y los sistemas visuales con lo que construyo.",
    ),
    href: "work/brand-design",
  },
  {
    id: "growth-marketing",
    number: "04",
    title: t("Growth &\nmarketing", "Crecimiento\ny marketing"),
    subtitle: t("Automotriz Hurtado", "Automotriz Hurtado"),
    role: t(
      "Strategy · Content · Acquisition",
      "Estrategia · Contenido · Captación",
    ),
    description: t(
      "Technology in the context of a real business. Connecting digital presence, content and the journey toward a conversation.",
      "Tecnología en el contexto de un negocio real. Conectar la presencia digital, el contenido y el recorrido hacia una consulta.",
    ),
    href: "work/automotriz-hurtado",
  },
];

export const carouselCopy = {
  label: t("Selected work carousel", "Carrusel de proyectos seleccionados"),
  instructions: t(
    "Use the arrows, drag or swipe to explore. Left and right arrow keys also work when this gallery is focused.",
    "Usa las flechas, arrastra o desliza para explorar. También puedes usar las flechas del teclado con la galería enfocada.",
  ),
  previous: t("Previous category", "Categoría anterior"),
  next: t("Next category", "Siguiente categoría"),
  drag: t("DRAG TO EXPLORE", "ARRASTRA PARA EXPLORAR"),
  go: t("Go to", "Ir a"),
  slide: t("Slide", "Slide"),
  view: t("View project", "Ver proyecto"),
  collection: t("FOUR WAYS TO BUILD", "CUATRO FORMAS DE CONSTRUIR"),
};

export const universityCopy = {
  label: t("ACADEMIC BACKGROUND", "FORMACIÓN ACADÉMICA"),
  title: t(
    "High standards.\nLasting foundations.",
    "Alta exigencia.\nBases sólidas.",
  ),
  description: t(
    "I study Software Engineering at Universidad Nacional de Ingeniería (UNI), in Lima, Peru, and rank in the top fifth of my class. A demanding education that shapes how I analyze problems and build solutions.",
    "Estudio Ingeniería de Software en la Universidad Nacional de Ingeniería (UNI), en Lima, Perú, y pertenezco al quinto superior. Una formación de alta exigencia académica que fortalece mi manera de analizar problemas y construir soluciones.",
  ),
  degreeLabel: t("DEGREE", "CARRERA"),
  degree: t("Software Engineering", "Ingeniería de Software"),
  standingLabel: t("ACADEMIC STANDING", "RENDIMIENTO ACADÉMICO"),
  standing: t("Top fifth · Top 20%", "Quinto superior · 20% superior"),
  link: t("More about me", "Más sobre mí"),
};
