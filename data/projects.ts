import { t, type Localized } from "./site";
import type { MediaKey } from "./media";
export const projects: {
  slug: string;
  number: string;
  title: string;
  category: Localized;
  role: Localized;
  summary: Localized;
  media: MediaKey;
}[] = [
  {
    slug: "tekapto",
    number: "01",
    title: "Tekapto",
    category: t("TECHNOLOGY & ENTREPRENEURSHIP", "TECNOLOGÍA Y EMPRENDIMIENTO"),
    role: t("Co-founder & CTO", "Cofundador y CTO"),
    summary: t(
      "Building a company around better digital products. Custom software, automation and experiences for real businesses.",
      "Construyendo una empresa alrededor de mejores productos digitales. Software a medida, automatización y experiencias para negocios reales.",
    ),
    media: "tekapto",
  },
  {
    slug: "web",
    number: "02",
    title: "Selected web work",
    category: t(
      "DEVELOPMENT & DIGITAL EXPERIENCES",
      "DESARROLLO Y EXPERIENCIAS DIGITALES",
    ),
    role: t("Software & web development", "Desarrollo de software y web"),
    summary: t(
      "Thoughtful interfaces. Useful software. A growing collection of things built for the web.",
      "Interfaces con intención. Software útil. Una colección en crecimiento de proyectos para la web.",
    ),
    media: "web",
  },
  {
    slug: "automotriz-hurtado",
    number: "03",
    title: "Automotriz Hurtado",
    category: t(
      "GROWTH, DIGITAL & MARKETING",
      "CRECIMIENTO, DIGITAL Y MARKETING",
    ),
    role: t("Business & digital strategy", "Negocio y estrategia digital"),
    summary: t(
      "Connecting technology with the needs of a real business. Digital presence, content and customer acquisition.",
      "Conectando la tecnología con las necesidades de un negocio real. Presencia digital, contenido y captación.",
    ),
    media: "hurtado",
  },
];
export const caseContent = {
  tekapto: {
    statement: t(
      "A company built\nto build things.",
      "Una empresa creada\npara construir.",
    ),
    intro: t(
      "Tekapto is a technology company focused on digital products, automation, web experiences and custom software for real businesses. As co-founder and CTO, I connect product direction with technical execution.",
      "Tekapto es una empresa tecnológica enfocada en productos digitales, automatización, experiencias web y software a medida para negocios reales. Como cofundador y CTO, conecto la dirección del producto con la ejecución técnica.",
    ),
    sections: [
      {
        title: t(
          "Ownership, from idea to implementation.",
          "Responsabilidad, de la idea a la implementación.",
        ),
        copy: t(
          "My role combines entrepreneurship with engineering: understanding the business problem, shaping the product, making architecture decisions and taking responsibility for implementation.",
          "Mi rol combina emprendimiento e ingeniería: entender el problema del negocio, dar forma al producto, decidir la arquitectura y asumir la responsabilidad de la implementación.",
        ),
      },
      {
        title: t(
          "Useful technology, in context.",
          "Tecnología útil, en contexto.",
        ),
        copy: t(
          "The focus is on web experiences, business automation and custom digital products. The starting point is what a business needs to accomplish; the technology follows that question.",
          "El foco está en experiencias web, automatización de negocios y productos digitales a medida. El punto de partida es lo que un negocio necesita lograr; la tecnología se elige a partir de esa pregunta.",
        ),
      },
      {
        title: t("AI as a working advantage.", "IA como ventaja de trabajo."),
        copy: t(
          "Codex and Claude Code support development and iteration. AI also supports research and prototyping, while tools such as Higgsfield expand visual exploration. Technical judgment and final review remain human responsibilities.",
          "Codex y Claude Code apoyan el desarrollo y la iteración. La IA también contribuye a la investigación y los prototipos; herramientas como Higgsfield amplían la exploración visual. El criterio técnico y la revisión final siguen siendo responsabilidades humanas.",
        ),
      },
    ],
  },
  hurtado: {
    statement: t(
      "Digital thinking.\nReal-world business.",
      "Visión digital.\nNegocio real.",
    ),
    intro: t(
      "Automotriz Hurtado brings technology into a business context: understanding how digital presence, content and acquisition can connect a business with people who need its services.",
      "Automotriz Hurtado conecta la tecnología con el contexto de un negocio: entender cómo la presencia digital, el contenido y la captación pueden acercarlo a las personas que necesitan sus servicios.",
    ),
    sections: [
      {
        title: t("Context & strategy", "Contexto y estrategia"),
        copy: t(
          "The case is organized around a practical question: how can the digital experience support the business? The detailed scope, starting situation and strategic decisions will be added with the project documentation.",
          "El caso se organiza alrededor de una pregunta práctica: ¿cómo puede la experiencia digital apoyar al negocio? El alcance detallado, la situación inicial y las decisiones estratégicas se incorporarán con la documentación del proyecto.",
        ),
      },
      {
        title: t("Digital presence & content", "Presencia digital y contenido"),
        copy: t(
          "This chapter will bring together the website, approved content pieces and the logic connecting them. The visual archive is being prepared; no unverified campaigns or deliverables are presented here.",
          "Este capítulo reunirá la web, las piezas de contenido aprobadas y la lógica que las conecta. El archivo visual está en preparación; aquí no se presentan campañas ni entregables sin verificar.",
        ),
      },
      {
        title: t("Acquisition & lead flow", "Captación y flujo de consultas"),
        copy: t(
          "A dedicated space for documenting Meta Ads and the path toward WhatsApp inquiries, once the actual campaign material and workflow are available.",
          "Un espacio dedicado a documentar Meta Ads y el recorrido hacia las consultas por WhatsApp, cuando estén disponibles los materiales reales de campaña y el flujo de trabajo.",
        ),
      },
      {
        title: t("Results & learnings", "Resultados y aprendizajes"),
        copy: t(
          "Results will be published with their period, source and context. Confirmed performance figures are not yet available, so this case does not claim numerical improvements.",
          "Los resultados se publicarán con su periodo, fuente y contexto. Aún no hay cifras de desempeño confirmadas, por lo que este caso no afirma mejoras numéricas.",
        ),
      },
    ],
  },
};
export const archiveNote = t(
  "The visual archive is being prepared. Original project images and details will be added here.",
  "El archivo visual está en preparación. Aquí se incorporarán las imágenes originales y los detalles de los proyectos.",
);
