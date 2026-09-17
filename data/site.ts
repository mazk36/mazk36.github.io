export type Locale = "en" | "es";
export type Localized = Record<Locale, string>;
export const t = (en: string, es: string): Localized => ({ en, es });
export const profile = {
  name: "Bruno Marcelo Jauregui Peña",
  shortName: "Marcelo Jauregui",
  location: t("Lima, Peru", "Lima, Perú"),
  university: "Universidad Nacional de Ingeniería",
  degree: t(
    "Software Engineering · 6th semester",
    "Ingeniería de Software · 6.º ciclo",
  ),
};
export const social = {
  github: "https://github.com/mazk36",
  linkedin:
    "https://www.linkedin.com/in/bruno-marcelo-jauregui-peña-6865bb348/?locale=es",
  email: "",
  instagram: "https://www.instagram.com/marcelomiiii/?hl=en",
  tiktok: "https://www.tiktok.com/@marcelomi",
  youtube: "",
  twitch: "",
  tekapto: "https://tekapto.217.76.49.199.sslip.io/es",
};
export const routes = [
  "",
  "work/tekapto",
  "work/web-development",
  "work/automotriz-hurtado",
  "work/brand-design",
  "motorsport",
  "about",
] as const;
export type PageKey = (typeof routes)[number];
export function href(lang: Locale, path = "") {
  return `${lang === "es" ? "/es" : ""}/${path}`.replace(/\/$/, "") || "/";
}
export function parseRoute(segments: string[] = []): {
  lang: Locale;
  page: string;
} {
  const lang = segments[0] === "es" ? "es" : "en";
  return {
    lang,
    page: (lang === "es" ? segments.slice(1) : segments).join("/"),
  };
}
export const ui = {
  work: t("Work", "Proyectos"),
  motorsport: t("Motorsport", "Motorsport"),
  about: t("About", "Sobre mí"),
  contact: t("Contact", "Contacto"),
  menu: t("Menu", "Menú"),
  close: t("Close", "Cerrar"),
  skip: t("Skip to content", "Saltar al contenido"),
  home: t("Home", "Inicio"),
  viewWork: t("Explore my work", "Explora mis proyectos"),
  viewProject: t("Explore project", "Explorar proyecto"),
  back: t("Back to selected work", "Volver a proyectos"),
  next: t("Next chapter", "Siguiente capítulo"),
  imagePending: t("Image coming soon", "Imagen por incorporar"),
  selected: t("Selected work", "Proyectos seleccionados"),
};
export const home = {
  eyebrow: t(
    "SOFTWARE ENGINEER. ENTREPRENEUR. BUILDER.",
    "SOFTWARE. EMPRENDIMIENTO. CREACIÓN.",
  ),
  headline: t("I build things\nthat move.", "Construyo ideas\nque avanzan."),
  intro: t(
    "Turning ideas into software, businesses and experiences. Co-founder & CTO at Tekapto. Built with intention, from Lima, Peru.",
    "Convierto ideas en software, negocios y experiencias. Cofundador y CTO de Tekapto. Construyo con propósito desde Lima, Perú.",
  ),
  portraitCaption: t(
    "A different kind of builder.",
    "Otra forma de construir.",
  ),
  workTitle: t("Ideas, put to work.", "Ideas en acción."),
  workIntro: t(
    "From the first question to the things people use. A selection of what I build, lead and shape.",
    "De la primera pregunta a lo que las personas usan. Una selección de lo que construyo, lidero y diseño.",
  ),
  aiLabel: t("THE WAY I BUILD", "MI FORMA DE CONSTRUIR"),
  aiTitle: t(
    "Human direction.\nAI acceleration.",
    "Criterio humano.\nImpulso de IA.",
  ),
  aiCopy: t(
    "AI is a multiplier, not a substitute for judgment. I use it across research, prototyping, code and visual creation — while owning the architecture, product decisions and the final result.",
    "La IA multiplica la capacidad; el criterio sigue siendo humano. La integro en investigación, prototipos, código y creación visual. La arquitectura, las decisiones de producto y el resultado final son mi responsabilidad.",
  ),
  aiSteps: [
    {
      title: t("Understand", "Entender"),
      copy: t(
        "Find the right problem. Research the context.",
        "Definir el problema. Investigar el contexto.",
      ),
    },
    {
      title: t("Build & iterate", "Construir e iterar"),
      copy: t(
        "Prototype quickly. Develop with Codex and Claude Code.",
        "Prototipar con agilidad. Desarrollar con Codex y Claude Code.",
      ),
    },
    {
      title: t("Question & refine", "Cuestionar y mejorar"),
      copy: t(
        "Review the code. Test the experience. Make the decisions.",
        "Revisar el código. Probar la experiencia. Tomar las decisiones.",
      ),
    },
  ],
  designLabel: t("DESIGN & BRANDING", "DISEÑO Y BRANDING"),
  designTitle: t(
    "Build the product.\nShape its identity.",
    "Crear el producto.\nDarle identidad.",
  ),
  designCopy: t(
    "The way something works and the way it feels belong together. Graphic design, logos and visual systems are part of how I bring ideas into the world.",
    "Cómo funciona algo y cómo se percibe van de la mano. El diseño gráfico, los logos y los sistemas visuales son parte de cómo llevo las ideas al mundo.",
  ),
  designLink: t("Explore design", "Explorar diseño"),
  racingLabel: t("BEYOND THE SCREEN / 02", "MÁS ALLÁ DE LA PANTALLA / 02"),
  racingTitle: t("A different\nkind of drive.", "Otra forma\nde avanzar."),
  racingCopy: t(
    "Karting driver. Main driver at UNI Motorsport. The same curiosity that makes me build software takes me to the workshop — and onto the track.",
    "Piloto de karting. Piloto principal de UNI Motorsport. La misma curiosidad que me lleva a construir software me acerca al taller y a la pista.",
  ),
  racingLink: t("Inside motorsport", "Conoce esta faceta"),
  target: t("THE NEXT HORIZON", "EL PRÓXIMO HORIZONTE"),
  targetCopy: t(
    "Building a Formula SAE car. Working toward Brazil, 2027.",
    "Construyendo un Formula SAE con la meta de competir en Brasil en 2027.",
  ),
  aboutLabel: t(
    "THE PERSON BEHIND THE WORK / 03",
    "DETRÁS DE LOS PROYECTOS / 03",
  ),
  aboutTitle: t(
    "Curiosity is\nthe common thread.",
    "La curiosidad\nconecta todo.",
  ),
  aboutCopy: t(
    "I’m Marcelo. A software engineering student at UNI, a technology entrepreneur and someone who likes understanding how things work — on a screen and in the physical world.",
    "Soy Marcelo. Estudio Ingeniería de Software en la UNI, emprendo en tecnología y me gusta entender cómo funcionan las cosas, tanto en una pantalla como en el mundo físico.",
  ),
  aboutLink: t("A little more about me", "Un poco más sobre mí"),
  contentLabel: t("ON THE INTERNET", "EN INTERNET"),
  contentTitle: t("I document the process.", "Documento el proceso."),
  contentCopy: t(
    "Life at UNI, the driver’s seat, projects and entrepreneurship. Small windows into what I’m building and learning.",
    "La vida en la UNI, las pistas, los proyectos y el emprendimiento. Una mirada a lo que construyo y aprendo.",
  ),
  followers: t("followers, approx.", "seguidores aprox."),
  views: t(
    "views on some TikTok & Instagram videos",
    "vistas en algunos videos de TikTok e Instagram",
  ),
  footerTitle: t("Let’s build\nsomething.", "Construyamos\nalgo juntos."),
  footerCopy: t(
    "Have an idea, a good question, or a project in mind? Let’s talk.",
    "¿Tienes una idea, una buena pregunta o un proyecto en mente? Conversemos.",
  ),
  connect: t("Connect on LinkedIn", "Conversemos en LinkedIn"),
};
export const capabilities = [
  {
    title: t("Software engineering", "Ingeniería de software"),
    copy: t("C / C++ · Java · Python", "C / C++ · Java · Python"),
  },
  {
    title: t("AI-native development", "Desarrollo con IA"),
    copy: t(
      "Codex · Claude Code · Higgsfield",
      "Codex · Claude Code · Higgsfield",
    ),
  },
  {
    title: t("Data & decisions", "Datos y decisiones"),
    copy: t(
      "Analysis · Data science foundations",
      "Análisis · Bases de ciencia de datos",
    ),
  },
  {
    title: t("Visual identity", "Identidad visual"),
    copy: t("Branding · Graphic design", "Branding · Diseño gráfico"),
  },
];
export const seo: Record<
  PageKey,
  { title: Localized; description: Localized }
> = {
  "": {
    title: t(
      "Marcelo Jauregui — Software Engineer, CTO & Builder",
      "Marcelo Jauregui — Ingeniero de Software, CTO y creador",
    ),
    description: t(
      "Software engineer, Co-founder & CTO at Tekapto, AI-native builder, designer and racing driver based in Lima, Peru.",
      "Ingeniero de software, cofundador y CTO de Tekapto. Desarrollo con IA, diseño y motorsport desde Lima, Perú.",
    ),
  },
  "work/tekapto": {
    title: t("Tekapto — Co-founder & CTO", "Tekapto — Cofundador y CTO"),
    description: t(
      "Building a technology company: digital products, automation and custom software with Marcelo Jauregui.",
      "Construyendo una empresa tecnológica: productos digitales, automatización y software a medida con Marcelo Jauregui.",
    ),
  },
  "work/web-development": {
    title: t("Selected web work", "Proyectos web seleccionados"),
    description: t(
      "A growing archive of web experiences and software by Marcelo Jauregui.",
      "Un archivo en crecimiento de experiencias web y software de Marcelo Jauregui.",
    ),
  },
  "work/automotriz-hurtado": {
    title: t(
      "Automotriz Hurtado — Digital & Growth",
      "Automotriz Hurtado — Digital y crecimiento",
    ),
    description: t(
      "Technology in a real business context: digital presence, content and acquisition.",
      "Tecnología en el contexto de un negocio real: presencia digital, contenido y captación.",
    ),
  },
  "work/brand-design": {
    title: t("Design & Branding", "Diseño y branding"),
    description: t(
      "Graphic design, logos and visual systems. Building products and shaping how they enter the world.",
      "Diseño gráfico, logos y sistemas visuales. Crear productos y darles una identidad en el mundo.",
    ),
  },
  motorsport: {
    title: t(
      "Motorsport — Karting & UNI Motorsport",
      "Motorsport — Karting y UNI Motorsport",
    ),
    description: t(
      "Karting driver and main driver at UNI Motorsport. Building a Formula SAE car with the goal of Brazil in 2027.",
      "Piloto de karting y piloto principal de UNI Motorsport. Construyendo un Formula SAE con la meta de Brasil en 2027.",
    ),
  },
  about: {
    title: t("About Marcelo", "Sobre Marcelo"),
    description: t(
      "Bruno Marcelo Jauregui Peña. Software engineering student at UNI, entrepreneur and builder in Lima, Peru.",
      "Bruno Marcelo Jauregui Peña. Estudiante de Ingeniería de Software en la UNI, emprendedor y creador en Lima, Perú.",
    ),
  },
};
