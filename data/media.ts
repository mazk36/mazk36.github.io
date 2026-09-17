import { t, type Localized } from "./site";

// Add each real asset at this path. MediaFrame detects it at build time.
export const media = {
  hero: {
    path: "/images/bruno/hero-professional.webp",
    ratio: "4 / 5",
    label: t("Bruno Jauregui · Portrait", "Bruno Jauregui · Retrato"),
    alt: t(
      "Professional portrait of Bruno Jauregui, wearing glasses and a dark suit against a black background",
      "Retrato profesional de Bruno Jauregui, con gafas y traje oscuro sobre fondo negro",
    ),
  },
  about: {
    path: "/images/bruno/about.webp",
    ratio: "4 / 5",
    label: t("Life, outside the screen", "La vida fuera de la pantalla"),
    alt: t(
      "Bruno speaking with a group around a workbench",
      "Bruno conversando con un grupo junto a una mesa de trabajo",
    ),
  },
  tekapto: {
    path: "/images/work/tekapto-overview.webp",
    ratio: "16 / 10",
    label: t("Tekapto · Product overview", "Tekapto · Vista de producto"),
    alt: t(
      "Overview of a digital product built at Tekapto",
      "Vista de un producto digital desarrollado en Tekapto",
    ),
  },
  tekaptoDetail: {
    path: "/images/work/tekapto-detail.webp",
    ratio: "16 / 10",
    label: t("Tekapto · Product detail", "Tekapto · Detalle de producto"),
    alt: t(
      "Detail of a Tekapto product interface",
      "Detalle de la interfaz de un producto de Tekapto",
    ),
  },
  web: {
    path: "/images/work/web-featured.webp",
    ratio: "16 / 10",
    label: t(
      "Web work · Selected experience",
      "Proyectos web · Experiencia seleccionada",
    ),
    alt: t(
      "Screenshot of a selected web project",
      "Captura de un proyecto web seleccionado",
    ),
  },
  webDetail: {
    path: "/images/work/web-detail.webp",
    ratio: "16 / 9",
    label: t(
      "Web work · Interface detail",
      "Proyectos web · Detalle de interfaz",
    ),
    alt: t(
      "Interface detail from a web project",
      "Detalle de interfaz de un proyecto web",
    ),
  },
  hurtado: {
    path: "/images/work/automotriz-hurtado.webp",
    ratio: "16 / 10",
    label: t(
      "Automotriz Hurtado · Video still",
      "Automotriz Hurtado · Fotograma del video",
    ),
    alt: t(
      "A presenter and a Mitsubishi Evo VIII at the workshop, from the supplied Automotriz Hurtado video",
      "Un presentador junto a un Mitsubishi Evo VIII en el taller, fotograma del video de Automotriz Hurtado",
    ),
  },
  campaign: {
    path: "/images/work/hurtado-campaign.webp",
    ratio: "4 / 5",
    label: t("Automotriz Hurtado · Campaign", "Automotriz Hurtado · Campaña"),
    alt: t(
      "Approved campaign creative for Automotriz Hurtado",
      "Pieza de campaña aprobada para Automotriz Hurtado",
    ),
  },
  design: {
    path: "/images/design/identity-system.webp",
    ratio: "16 / 10",
    label: t(
      "Visual identity · Brand system",
      "Identidad visual · Sistema de marca",
    ),
    alt: t(
      "Brand identity system designed by Bruno",
      "Sistema de identidad visual diseñado por Bruno",
    ),
  },
  logos: {
    path: "/images/design/insight-logo.webp",
    ratio: "1 / 1",
    label: t("Insight · Event Planner", "Insight · Event Planner"),
    alt: t(
      "Insight Event Planner logo with two champagne glasses",
      "Logo de Insight Event Planner con dos copas",
    ),
  },
  applications: {
    path: "/images/design/brand-applications.webp",
    ratio: "4 / 5",
    label: t("Identity in use", "La identidad en uso"),
    alt: t(
      "Applications of a brand identity",
      "Aplicaciones de una identidad de marca",
    ),
  },
  racing: {
    path: "/images/motorsport/karting.webp",
    ratio: "16 / 9",
    label: t("Karting · On track", "Karting · En pista"),
    alt: t(
      "Bruno driving a kart on a floodlit track at night",
      "Bruno conduciendo un kart de noche en una pista iluminada",
    ),
  },
  racingPortrait: {
    path: "/images/motorsport/racing-portrait.webp",
    ratio: "4 / 5",
    label: t(
      "Bruno · Race suit portrait",
      "Bruno · Retrato con traje de carreras",
    ),
    alt: t(
      "Bruno Jauregui wearing glasses and a black racing suit beside the track",
      "Bruno Jauregui con gafas y monotraje negro junto a la pista",
    ),
  },
  team: {
    path: "/images/motorsport/simulator-event.webp",
    ratio: "3 / 2",
    label: t(
      "UNI Motorsport · Racing simulator",
      "UNI Motorsport · Simulador de carreras",
    ),
    alt: t(
      "Bruno and other participants beside a racing simulator at an event",
      "Bruno y otros participantes junto a un simulador de carreras en un evento",
    ),
  },
  hardware: {
    path: "/images/about/electronics.webp",
    ratio: "3 / 4",
    label: t("Software meets hardware", "Donde el software toca el hardware"),
    alt: t(
      "Bruno testing an electronic circuit with multimeter probes at a workbench",
      "Bruno comprobando un circuito electrónico con las puntas de un multímetro en una mesa de trabajo",
    ),
  },
} satisfies Record<
  string,
  { path: string; ratio: string; label: Localized; alt: Localized }
>;
export type MediaKey = keyof typeof media;
