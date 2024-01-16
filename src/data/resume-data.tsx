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
  about:
    "Full Stack Engineer .NET focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1.",
  avatarUrl: "https://avatars.githubusercontent.com/u/17189099?s=400&u=8fa78f077bd8a85c9e3a8eab8308d61e266277fc&v=4",
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
      description:
        "Sistema Candidaturas Independientes para Diputaciones, Presidencias Municipales y Presidencias de Juntas Municipales (SELCIMAR). Sistema de Información de Consejerías Electorales Distritales y Municipales (SICEDyM)",
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
        "Proyecto que tiene el objetivo de modernizar la recaudación del Estado de Campeche. El propietario es el Gobierno del Estado de Campeche.",
    },
    {
      company: "Horuss Solutions",
      link: "",
      badges: ["Remote"],
      title: ".NET Backend Developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Sistema Administrativo para Novedades/De Peso de Yucatan",
    },
    {
      company: "Secretaría de Administración y Finanzas del Gobierno del Estado de Campeche",
      link: "",
      badges: ["Remote"],
      title: ".NET Backend Developer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description:
        "Proyecto que tiene el objetivo de modernizar la recaudación del Estado de Campeche.",
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
        "EF Core"
      ],
      description: "Proyecto que tiene el objetivo de modernizar la recaudación del Estado de Campeche.",
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
        "SISTEMA DE INFORMACIÓN DE CONSEJEROS ELECTORALES DISTRITALES Y MUNICIPALES",
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
        "ANGULAR"
      ],
      description:
        "Sistema Candidaturas Independientes para Diputaciones, Presidencias Municipales y Presidencias de Juntas Municipales",
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
      description:
        "Generador de reportes financieros",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "CITAS VETERINARIA",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
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
