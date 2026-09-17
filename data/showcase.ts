import { t, type Localized } from "./site";

export const tekaptoOrigin = "https://tekapto.217.76.49.199.sslip.io";
export const showcaseCopy = {
  demo: t("WEB DEMO", "DEMO WEB"),
  viewDemo: t("View live demo", "Ver demo en vivo"),
  source: t("Published by Tekapto", "Publicado por Tekapto"),
  role: t("Team portfolio · Tekapto", "Portfolio del equipo · Tekapto"),
  webIntro: t(
    "Web experiences with a job to do. An edited collection of the demos and concepts published by Tekapto, captured from their live versions.",
    "Experiencias web con un objetivo claro. Una selección de las demos y conceptos publicados por Tekapto, capturados desde sus versiones en vivo.",
  ),
  webNote: t(
    "These are published demos and concepts, not a list of confirmed clients. Individual credits and delivery dates have not been published.",
    "Son demos y conceptos publicados, no una lista de clientes confirmados. Los créditos individuales y las fechas de entrega no están publicados.",
  ),
  productLabel: t("BEYOND WEBSITES", "MÁS ALLÁ DE LAS WEBS"),
  productTitle: t(
    "From interfaces\nto connected products.",
    "De las interfaces\na productos conectados.",
  ),
  productNote: t(
    "Clevun is a capability project published by Tekapto. This is its original visual showcase, not a recording of a deployed customer system.",
    "Clevun es un proyecto de capacidad publicado por Tekapto. Este es su showcase visual original, no una grabación de un sistema desplegado para un cliente.",
  ),
  play: t("Play showcase", "Reproducir showcase"),
  pause: t("Pause showcase", "Pausar showcase"),
  videoDescription: t(
    "Silent visual showcase. Playback starts only when you choose it.",
    "Showcase visual sin audio. La reproducción comienza cuando tú la activas.",
  ),
  videoUnavailable: t(
    "The video could not be loaded. Try again or view the source.",
    "No se pudo cargar el video. Intenta nuevamente o consulta la fuente.",
  ),
  identityLabel: t(
    "THE COMPANY’S VISUAL LANGUAGE",
    "EL LENGUAJE VISUAL DE LA EMPRESA",
  ),
  identityTitle: t(
    "A system that\nbelongs to Tekapto.",
    "Un sistema que\npertenece a Tekapto.",
  ),
  identityCopy: t(
    "The company has its own visual identity: a precise wordmark, a compact mark and a restrained signal color. The excerpt below comes from its supplied identity board.",
    "La empresa tiene su propia identidad: un wordmark preciso, una marca compacta y un color de señal contenido. El extracto proviene de su tablero de identidad proporcionado.",
  ),
  workLabel: t("PUBLISHED PROJECTS", "PROYECTOS PUBLICADOS"),
  workTitle: t("What we’re building.", "Lo que construimos."),
  workNote: t(
    "Company work, with the scope stated by Tekapto. My role as co-founder and CTO connects engineering and technical execution; project-specific authorship is not inferred.",
    "Trabajo de la empresa, con el alcance publicado por Tekapto. Mi rol de cofundador y CTO conecta ingeniería y ejecución técnica; no se infiere una autoría individual por proyecto.",
  ),
  caseLink: t("Read on Tekapto", "Ver en Tekapto"),
  pendingBrandTitle: t(
    "A visual archive\nin the making.",
    "Un archivo visual\nen preparación.",
  ),
  pendingBrandCopy: t(
    "Original identities, logo collections and applications will appear here as their assets are added. Tekapto’s identity remains in its own case study.",
    "Aquí se incorporarán las identidades originales, colecciones de logos y aplicaciones cuando estén disponibles sus assets. La identidad de Tekapto permanece en su propio caso de estudio.",
  ),
};

export const webDemos: {
  id: string;
  name: string;
  category: Localized;
  description: Localized;
  image: string;
  liveUrl: string;
}[] = [
  {
    id: "lumina",
    name: "Lúmina Estudio",
    category: t("BEAUTY & WELLNESS", "BELLEZA Y BIENESTAR"),
    description: t(
      "An editorial salon experience, built around visual storytelling and discovering services.",
      "Una experiencia editorial para un salón, centrada en el recorrido visual y el descubrimiento de servicios.",
    ),
    image: "/work/web-development/victor-manuel.webp",
    liveUrl: "https://gamexic.github.io/Victor-Manuel/",
  },
  {
    id: "nexo",
    name: "Nexo Motor",
    category: t("AUTOMOTIVE", "AUTOMOTRIZ"),
    description: t(
      "A workshop website with symptom-led orientation, specialist services and a clear contact path.",
      "Un sitio para taller con orientación por síntomas, especialidades y un recorrido claro hacia el contacto.",
    ),
    image: "/work/web-development/automotriz-hurtado.webp",
    liveUrl: "https://gamexic.github.io/Automotriz-Hurtado/",
  },
  {
    id: "stefy",
    name: "Stefy Dental",
    category: t("DENTAL CARE", "CLÍNICA DENTAL"),
    description: t(
      "Treatment discovery and first-visit guidance for a dental clinic experience.",
      "Descubrimiento de tratamientos y orientación para la primera visita en una experiencia de clínica dental.",
    ),
    image: "/work/web-development/stefy-dental.webp",
    liveUrl: "https://gamexic.github.io/Stefy-Dental-Peru-Web/",
  },
  {
    id: "nortea-engineering",
    name: "Nortea Ingeniería",
    category: t("ENGINEERING", "INGENIERÍA"),
    description: t(
      "A corporate experience for engineering, maintenance and industrial construction services.",
      "Una experiencia corporativa para ingeniería, mantenimiento y construcción industrial.",
    ),
    image: "/work/web-development/rumi-ingenieros.webp",
    liveUrl: "https://gamexic.github.io/Rumi-ingenieros/",
  },
  {
    id: "nival",
    name: "Nival",
    category: t("REFRIGERATION", "REFRIGERACIÓN"),
    description: t(
      "A focused presentation of refrigeration solutions, projects and technical specialties.",
      "Una presentación de soluciones de refrigeración, proyectos y especialidades técnicas.",
    ),
    image: "/work/web-development/frio-metal.webp",
    liveUrl: "https://gamexic.github.io/Frio-metal/",
  },
  {
    id: "el-mago",
    name: "El Mago Barber",
    category: t("BARBERSHOP", "BARBERÍA"),
    description: t(
      "A characterful barbering concept, with a visual service narrative and reservation journey.",
      "Un concepto de barbería con personalidad, una narrativa visual de servicios y un recorrido de reserva.",
    ),
    image: "/work/web-development/el-mago.webp",
    liveUrl: "https://gamexic.github.io/el-mago-barber/",
  },
  {
    id: "nortea-industry",
    name: "Nortea · Industria",
    category: t("INDUSTRY & METROLOGY", "INDUSTRIA Y METROLOGÍA"),
    description: t(
      "An industrial website that organizes solutions, distribution and technical support around different audiences.",
      "Un sitio industrial que organiza soluciones, distribución y soporte técnico según sus públicos.",
    ),
    image: "/work/web-development/fesepsa.webp",
    liveUrl: "https://gamexic.github.io/Fesepsa/",
  },
];

export const companyProjects = [
  {
    id: "clevun",
    title: "Clevun",
    type: t("CAPABILITY PROJECT", "PROYECTO DE CAPACIDAD"),
    description: t(
      "A WhatsApp-first CRM concept connecting conversations, bookings, reminders and operational workflows.",
      "Un concepto de CRM centrado en WhatsApp que conecta conversaciones, reservas, recordatorios y flujos operativos.",
    ),
    source: "/work/clevun",
  },
  {
    id: "iceguin",
    title: "Iceguin",
    type: t("CAPABILITY PROJECT", "PROYECTO DE CAPACIDAD"),
    description: t(
      "Temperature and cold-chain monitoring, connecting sensors with the software around them.",
      "Monitoreo de temperatura y cadena de frío que conecta sensores con el software que los rodea.",
    ),
    source: "/work/iceguin",
  },
  {
    id: "jarvis",
    title: "JARVIS",
    type: t("R&D / CAPABILITY PROJECT", "I+D / PROYECTO DE CAPACIDAD"),
    description: t(
      "A personal AI assistant architecture linking messaging, cloud services and controlled tool workflows.",
      "Arquitectura de asistente personal de IA que conecta mensajería, servicios en la nube y flujos controlados de herramientas.",
    ),
    source: "/work/jarvis",
  },
];

export const companyOtherWork = [
  {
    title: t("Predictive audit algorithm", "Algoritmo predictivo de auditoría"),
    type: t("Capability project", "Proyecto de capacidad"),
    description: t(
      "Decision support for public-sector audit tenders in Peru.",
      "Apoyo a decisiones en concursos de auditoría del sector público peruano.",
    ),
    source: "/work/predictive-audit-algorithm",
  },
  {
    title: t("Virtual classrooms", "Aulas virtuales"),
    type: t("Client work", "Trabajo de cliente"),
    description: t(
      "Two learning platforms delivered for an academy and a school; client names are not public.",
      "Dos plataformas educativas entregadas para una academia y un colegio; los nombres de los clientes no son públicos.",
    ),
    source: "/work/virtual-classrooms",
  },
];
