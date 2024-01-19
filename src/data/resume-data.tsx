import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cristian Yair Gutierrez",
  initials: "CG",
  location: "CAMPECHE, MEXICO",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about: ".NET Software Engineer",
  summary:
    "Como ingeniero Full Stack .NET, he llevado con éxito varios productos del 0 al 1. Apasionado por la tecnología, motivado y Adaptable a las nuevas tecnologías cuando sea necesario.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/17189099?s=400&u=8fa78f077bd8a85c9e3a8eab8308d61e266277fc&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "cristian_yair398@hotmail.com",
    tel: "+529811379652",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/iamfister",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fistergutierrez/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/GutierrezFister",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto Tecnologico de Campeche",
      degree: "Ingenieria en Sistemas Computacionales",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Instituto Electoral del Estado de Campeche",
      link: "https://www.ieec.org.mx",
      badges: ["Remote"],
      title: "Full Stack .NET Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description: `En el Sistema de Candidaturas Independientes para Diputaciones, Presidencias Municipales y Presidencias de Juntas Municipales (SELCIMAR), lideré y ejecuté estrategias para facilitar el proceso de candidaturas independientes en el ámbito político. Mi papel abarcó diversas responsabilidades, incluyendo: \nDesarrollo y Implementación de Procesos: \n\t1. Diseñé y ejecuté procesos eficientes para la inscripción y validación de candidaturas independientes, asegurando el cumplimiento de los requisitos legales y normativos. \nAnálisis y Reporte: \n\t1. Realicé análisis exhaustivos de datos electorales, proporcionando informes a la dirección sobre la participación y desafíos encontrados durante el proceso. \n\t2. Proporcioné recomendaciones para mejorar la eficiencia y equidad del SELCIMAR basadas en la retroalimentación recopilada durante las elecciones. \n\nEncargado de sistemas informaticos: Lic. ROSENDO DAVID PUC (+529811688198).
      `,
    },
    {
      company: "Instituto Electoral del Estado de Campeche",
      link: "https://www.ieec.org.mx",
      badges: ["Remote"],
      title: ".NET Backend Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description: `En el Sistema de Información de Consejeros Electorales Distritales y Municipales, lideré la gestión y optimización de la plataforma destinada a facilitar las funciones de los consejeros electorales a nivel distrital y municipal. Mis responsabilidades incluyeron: \n\t1. Desarrollo y Mantenimiento de la Plataforma. \n\t2. Capacitación y Soporte Técnico. \n\t3. Integración de Datos Electorales \n\t4. Generación de Informes (Adobe PDF Services). \n\nEncargado de sistemas informaticos: Lic. ROSENDO DAVID PUC (+529811688198).
      `,
    },
    {
      company: "Mayoreo y Menudeo en Cómputo",
      link: "https://www.mmcnet.com.mx/acerca-de-mmc",
      badges: ["Remote"],
      title: "Full Stack .NET Developer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2023",
      description:
        "Participación en el proyecto de modernización de la recaudación para el Gobierno del Estado de Campeche. colaboré en el desarrollo de módulos cruciales en la 3era Fase del proyecto, trabajando en estrecha colaboración con la Dirección de Tecnologías de Información y Telecomunicaciones (DTIT) de la Secretaría de Administración y Finanzas del Poder Ejecutivo del Estado de Campeche. Mi contribución se centra en optimizar la eficiencia del sistema, asegurando su conformidad con las leyes fiscales y las necesidades del Gobierno Estatal. El proyecto representa una valiosa experiencia en gestión de proyectos tecnológicos para modernizar procesos gubernamentales clave. \n\nLider de proyecto: MTRO. MANUEL ESTRADA (+529811204936)",
    },
    {
      company: "Horuss Solutions",
      link: "",
      badges: ["Remote"],
      title: ".NET Backend Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description: "Sistema Administrativo para Novedades/De Peso de Yucatán, participé en el diseño, implementación y optimización de un sistema administrativo integral.",
    },
    {
      company:
        "CODESGN - Secretaría de Administración y Finanzas del Gobierno del Estado de Campeche",
      link: "",
      badges: ["Remote"],
      title: ".NET Backend Developer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description:
        "Inicié mi participación en el proyecto de modernización de la recaudación del Estado de Campeche desde su fase inicial, colaborando con el Gobierno del Estado para establecer las bases de este ambicioso proyecto. Mis responsabilidades incluyeron: \n1. Desarrollo de Api's \n2. Encargado de la Generacion de Migraciones de Entidades \n3. Pruebas Unitarias \n4. Analisis y generacion de artefactos del negocio \n5. Pruebas de Usuario del sistema \n\nLider del proyecto: Ing. Cristian Soler (+529811336465)",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "C#",
    "SQL SERVER",
    "ASP.NET Web Api",
    "ASP.NET MVC",
    "Docker",
    "ANGULAR",
    "LINQ SQL",
  ],
  projects: [
    {
      title: "SISTEMA DE ADMINISTRACION FISCAL DEL ESTADO DE CAMPECHE",
      techStack: [
        "Domain-Driven Design(DDD)",
        "TypeScript",
        "ANGULAR",
        "C#",
        ".NET WEB API",
        "SQL SERVER",
        "xUnit",
        "NancyFX",
        "Identity Server OAuth",
        "EF Core",
      ],
      description:
        "Mi experiencia en este rol me ha permitido desarrollar habilidades clave en gestión de sistemas fiscales y capacitación técnica.",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "SICEDyM",
      techStack: [
        "Domain Driven Design",
        "Entity Framework Core",
        "Repository Pattern",
        "Dapper",
        "Serilog",
        "OpenAPI",
        "Mapster",
        "API Versioning",
        "Fluent Validations",
        "Audit Logging",
        "Advanced User & Role Based Permission Management",
        "Code Analysis & StyleCop Integration with Rulesets",
        "JSON Based Localization",
        "Hangfire",
        "File Storage Service",
        "Test Projects",
        "JWT",
        "MediatR - CQRS",
        "Clean Architecture",
        ".NET 7",
      ],
      description:
        "Mi experiencia en SICEDyM me ha permitido desarrollar habilidades clave en gestión de sistemas de información, capacitación técnica, contribuyendo al fortalecimiento de la infraestructura tecnológica que respalda el proceso electoral y la toma de decisiones a nivel distrital y municipal.",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "SELCIMAR",
      techStack: [
        "Domain Driven Design",
        "Entity Framework Core",
        "Repository Pattern",
        "Dapper",
        "Serilog",
        "OpenAPI",
        "Mapster",
        "API Versioning",
        "Fluent Validations",
        "Audit Logging",
        "Advanced User & Role Based Permission Management",
        "Code Analysis & StyleCop Integration with Rulesets",
        "JSON Based Localization",
        "Hangfire",
        "File Storage Service",
        "Test Projects",
        "JWT",
        "MediatR - CQRS",
        "Clean Architecture",
        ".NET 7",
        "ANGULAR",
      ],
      description:
        "Mi experiencia en SELCIMAR me ha permitido desarrollar habilidades clave en gestión de proyectos, coordinación interinstitucional y análisis estratégico, contribuyendo al fortalecimiento del sistema democrático a través de la promoción de candidaturas independientes.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://selcimar.ieec.dev/#/auth/login",
      },
    },
    {
      title: "NOVA",
      techStack: [
        "Domain Driven Design",
        "Entity Framework Core",
        "Repository Pattern",
        "Dapper",
        "Serilog",
        "OpenAPI",
        "Mapster",
        "API Versioning",
        "Fluent Validations",
        "Audit Logging",
        "Advanced User & Role Based Permission Management",
        "Code Analysis & StyleCop Integration with Rulesets",
        "JSON Based Localization",
        "Hangfire",
        "File Storage Service",
        "Test Projects",
        "JWT",
        "MediatR - CQRS",
        "Clean Architecture",
        ".NET 6",
      ],
      description: "Mi experiencia en este rol me ha permitido comprender el diseño y gestión de sistemas administrativos personalizados.",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    // {
    //   title: "CITAS VETERINARIA",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
