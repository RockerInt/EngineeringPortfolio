import type { Dict } from './en';

/** Copy en español: adaptado, no traducido literalmente. */
export const es: Dict = {
  role: 'Software Engineer & Digital Solutions Architect',
  statement: ['Ingeniería de sistemas.', 'Experiencias digitales.'],
  valueProp:
    'Diseño la arquitectura, desarrollo y construyo productos digitales: desde plataformas de software escalables y sistemas distribuidos hasta experiencias web de alta calidad.',
  location: 'Bogotá, Colombia',
  portraitAlt: 'Retrato en blanco y negro de Jonathan Jiménez sonriendo con los brazos cruzados; lleva camisa blanca, chaleco oscuro y corbata.',

  nav: {
    home: 'Inicio',
    about: 'Acerca de',
    experience: 'Experiencia',
    engineering: 'Ingeniería',
    digital: 'Experiencias digitales',
    openSource: 'Código abierto',
    resume: 'Hoja de vida',
    contact: 'Contacto',
    main: 'Navegación principal',
    menu: 'Menú',
    skip: 'Saltar al contenido',
    breadcrumb: 'Ruta de navegación',
    switchTo: 'English',
    switchLabel: 'View this page in English',
  },

  common: {
    caseStudy: 'Leer caso de estudio',
    visitSite: 'Visitar el sitio',
    repository: 'Ver repositorio',
    role: 'Rol',
    type: 'Tipo',
    status: 'Estado',
    stack: 'Stack',
    license: 'Licencia',
    links: 'Enlaces',
    components: 'Componentes',
    planned: 'Planificado',
    plannedNote: 'Aún no está en el repositorio',
    externalHint: '(se abre en una pestaña nueva)',
    next: 'Siguiente',
    backTo: 'Volver a',
    kind: {
      'professional-experience': 'Experiencia profesional',
      'personal-project': 'Proyecto personal',
      'open-source': 'Código abierto',
      'freelance-project': 'Proyecto freelance',
    },
    stage: {
      'in-development': 'En desarrollo',
      delivered: 'Entregado',
      experimental: 'Experimental',
    },
  },

  skills: [
    { label: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Web API', 'Node.js'] },
    { label: 'Arquitectura', items: ['Domain-Driven Design', 'Clean Architecture', 'CQRS', 'Specification', 'Unit of Work', 'Arquitectura modular'] },
    { label: 'Sistemas distribuidos', items: ['Kafka', 'Arquitectura orientada a eventos', 'Microservicios'] },
    { label: 'Datos', items: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'EF Core', 'Dapper'] },
    { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'] },
    { label: 'Infraestructura', items: ['Docker', 'Kubernetes', 'CI/CD', 'Azure DevOps', 'AWS', 'Terraform'] },
    { label: 'Prácticas', items: ['Git', 'Scrum', 'Testing', 'Observabilidad'] },
  ],

  education: {
    title: 'Estudios universitarios',
    items: [
      { school: 'Universidad Santo Tomás', detail: 'Estudios universitarios en Ingeniería de Informática', period: '2018–2021' },
      { school: 'Universidad Nacional de Colombia', detail: 'Estudios universitarios en Ingeniería de Sistemas y Computación', period: '2009–2013' },
    ],
  },

  languages: {
    title: 'Idiomas',
    items: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio' },
    ],
  },

  areas: {
    engineering: {
      title: 'Ingeniería y arquitectura de software',
      text: 'Plataformas backend diseñadas alrededor del dominio y construidas para seguir siendo mantenibles a medida que crecen.',
      items: [
        'Ingeniería backend con .NET',
        'Arquitectura de software, DDD, Clean Architecture',
        'Sistemas orientados a eventos y microservicios',
        'Persistencia de datos e integración de sistemas',
        'Liderazgo técnico y decisiones de ingeniería',
      ],
      cta: 'Ver trabajo de ingeniería',
    },
    digital: {
      title: 'Experiencias digitales',
      text: 'Sitios y aplicaciones web donde marca, contenido y producto se encuentran con una implementación frontend cuidada.',
      items: [
        'Sitios web para negocios',
        'Landing pages',
        'Sitios orientados a marca',
        'Experiencias de producto digital',
        'Aplicaciones web a medida',
      ],
      cta: 'Ver experiencias digitales',
    },
  },

  home: {
    title: 'Jonathan Jiménez — Software Engineer & Digital Solutions Architect · Portafolio',
    description:
      'Portafolio de Jonathan Jiménez, ingeniero de software en Bogotá: backend, .NET, arquitectura de software, sistemas distribuidos y experiencias digitales.',
    cta: { work: 'Explorar mi trabajo', resume: 'Ver hoja de vida', contact: 'Contactar' },
    spec: {
      label: 'Ficha de perfil',
      rows: [
        ['Ubicación', 'Bogotá, Colombia'],
        ['Núcleo', 'Backend, .NET, Arquitectura de software'],
        ['Sistemas', 'Distribuidos, Orientados a eventos, Microservicios'],
        ['Además', 'Sitios web y experiencias digitales'],
        ['Idiomas', 'Español (nativo), Inglés (intermedio)'],
      ],
    },
    intro: {
      label: 'Perfil',
      lead: 'Más de una década construyendo software para empresas privadas y entidades públicas.',
      body: [
        'Empecé como desarrollador full stack y fui acercándome a los problemas que más me interesan: ingeniería backend, arquitectura de software y sistemas distribuidos.',
        'En paralelo diseño y construyo sitios web y experiencias digitales. Cambia la superficie, no la disciplina: entender el problema, diseñar la solución y entregarla bien.',
      ],
      link: 'Más sobre mí',
    },
    areasLabel: 'Dos líneas de trabajo',
    areasTitle: 'Una práctica, dos expresiones.',
    areasNote: 'Ambas nacen de la misma capacidad: diseñar, construir y entregar soluciones digitales.',
    work: {
      label: 'Trabajo seleccionado',
      title: 'Plataformas, frameworks y sitios web.',
      engineering: 'Ingeniería',
      digital: 'Experiencias digitales',
    },
    experience: { label: 'Experiencia', title: 'Dónde he trabajado.', link: 'Experiencia completa' },
    expertise: {
      label: 'Experiencia técnica',
      title: 'Herramientas con las que he trabajado, agrupadas por área.',
      note: 'Son tecnologías utilizadas en proyectos profesionales y personales, no una clasificación de nivel de dominio.',
    },
  },

  about: {
    title: 'Acerca de — Jonathan Jiménez',
    description:
      'Perfil profesional de Jonathan Jiménez: del desarrollo full stack a la ingeniería backend, la arquitectura de software y los sistemas distribuidos, además de experiencias digitales.',
    label: 'Acerca de',
    heading: 'Construyo sistemas de software y las experiencias digitales con las que las personas llegan a ellos.',
    intro: [
      'Soy ingeniero de software en Bogotá, Colombia, con más de una década de experiencia construyendo software para empresas privadas y entidades públicas.',
      'Mi perfil es full stack, pero hoy mi foco está en la ingeniería backend, la arquitectura de software y los sistemas distribuidos, principalmente en el ecosistema .NET. También diseño y construyo sitios web y experiencias digitales, lo que me mantiene cerca de la parte del producto que las personas realmente ven.',
    ],
    pathLabel: 'Trayectoria',
    pathTitle: 'De la entrega full stack al diseño de sistemas.',
    path: [
      {
        period: '2013–2018',
        title: 'Bases full stack',
        text: 'En Evolution Technologies Group trabajé en frontend, backend, despliegues y soporte de nivel 3 para un producto de gestión de contenido empresarial construido sobre ASP.NET, Oracle y SQL Server.',
      },
      {
        period: '2018–2021',
        title: 'Servicios y nube',
        text: 'En Aportes en Línea trabajé como Senior Development Engineer en aplicaciones internas, un chatbot y un servicio de consulta financiera con componentes serverless en AWS.',
      },
      {
        period: '2021–2024',
        title: 'Backends orientados a eventos',
        text: 'Como Backend Expert Developer para Weelo, Million and Up y Hola Car Rentals, mi trabajo se centró en microservicios C#, Kafka y arquitectura orientada a eventos, incluida la migración de módulos monolíticos hacia eventos.',
      },
      {
        period: '2026–',
        title: 'Ingeniería de plataforma en Alwon',
        text: 'Como Founding Engineer en Alwon trabajo en una plataforma de inteligencia operativa para retail, entre arquitectura, backend, integración y datos.',
      },
    ],
    philosophyLabel: 'Filosofía de ingeniería',
    philosophyTitle: 'Lo que me importa al diseñar software.',
    philosophy: [
      {
        title: 'Primero el dominio',
        text: 'Las decisiones tecnológicas se derivan de entender el problema de negocio. Modelo el dominio antes de elegir herramientas.',
      },
      {
        title: 'La mantenibilidad es una funcionalidad',
        text: 'Los límites claros y la separación de responsabilidades son lo que permite que un sistema siga cambiando después de su primera versión.',
      },
      {
        title: 'Escalar es una decisión de diseño',
        text: 'Eventos, desacoplamiento y distribución son herramientas para problemas concretos. Las uso cuando el problema lo pide, no por defecto.',
      },
      {
        title: 'Honestidad sobre el estado',
        text: 'Distingo lo construido de lo planificado: en el código, en la documentación y en este portafolio.',
      },
    ],
    backgroundLabel: 'Formación e idiomas',
    cta: 'Ver mi experiencia',
  },

  experience: {
    title: 'Experiencia — Jonathan Jiménez',
    description:
      'Trayectoria profesional de Jonathan Jiménez: Alwon, Weelo / Million and Up / Hola Car Rentals, Aportes en Línea y Evolution Technologies Group.',
    label: 'Experiencia',
    heading: 'Trayectoria profesional.',
    lead: 'Organizaciones, cargos y los proyectos en los que trabajé dentro de cada una.',
    projects: 'Proyectos',
    relatedCase: 'Caso de estudio relacionado',
    cta: 'Ver hoja de vida',
  },

  engineering: {
    title: 'Ingeniería — Jonathan Jiménez',
    description:
      'Casos de estudio de ingeniería: trabajo profesional de plataforma en Alwon y DSR.Architecture, un framework personal de arquitectura .NET en desarrollo.',
    label: 'Ingeniería',
    heading: 'Ingeniería y arquitectura de software.',
    lead: 'Backend, arquitectura y sistemas distribuidos, mostrados a través del trabajo profesional que puedo divulgar y de un framework personal cuyas decisiones de diseño son públicas.',
    casesLabel: 'Casos de estudio',
    relatedLabel: 'Construido sobre DSR.Architecture',
    relatedText: 'Dos repositorios públicos aplican el framework a aplicaciones concretas. Viven en Código abierto.',
    focusLabel: 'Áreas de enfoque',
    focus: [
      { title: 'Ingeniería backend', text: 'APIs y servicios en C# y .NET, con atención al pipeline de aplicación: validación, transacciones, logging y manejo de errores.' },
      { title: 'Arquitectura', text: 'Domain-Driven Design y Clean Architecture como forma de mantener las reglas de negocio independientes de la infraestructura.' },
      { title: 'Sistemas distribuidos', text: 'Arquitectura orientada a eventos y microservicios con Kafka, incluidas migraciones desde módulos monolíticos.' },
      { title: 'Persistencia de datos', text: 'Bases relacionales y documentales detrás de abstracciones de repositorio y specification.' },
    ],
  },

  digital: {
    title: 'Experiencias digitales — Jonathan Jiménez',
    description:
      'Sitios web y experiencias digitales de Jonathan Jiménez: Legado\'s, Auténtico Café y un portafolio de producción audiovisual.',
    label: 'Experiencias digitales',
    heading: 'Sitios construidos alrededor de una historia.',
    lead: 'Marca, contenido y producto llevados hasta la implementación frontend. Cada proyecto está publicado y enlazado.',
    capabilitiesLabel: 'Lo que construyo',
    cta: '¿Tienes un sitio o producto en mente?',
  },

  openSource: {
    title: 'Código abierto — Jonathan Jiménez',
    description:
      'Repositorios públicos seleccionados de Jonathan Jiménez: DSR.Architecture, DsrWebApp y UserPermissionApi.',
    label: 'Código abierto',
    heading: 'Repositorios seleccionados.',
    lead: 'Una selección curada, no un espejo de mi perfil de GitHub. Cada uno está aquí porque muestra una parte concreta de cómo diseño software backend.',
    demonstrates: 'Qué demuestra',
    allRepos: 'Todo lo demás está en GitHub',
    notes: {
      'dsr-architecture': 'Cómo pienso las capas, las abstracciones de persistencia y el pipeline de aplicación cuando parto de una página en blanco.',
      dsrwebapp: 'El framework aplicado a una aplicación completa: una API ASP.NET Core con frontend Angular, empaquetada con Docker.',
      userpermissionapi: 'Un servicio pequeño con preocupaciones reales de integración: persistencia relacional, eventos en Kafka, Elasticsearch y pruebas.',
    },
  },

  resume: {
    title: 'Hoja de vida — Jonathan Jiménez',
    description:
      'Hoja de vida de Jonathan Jiménez, Software Engineer & Digital Solutions Architect: experiencia, estudios universitarios, idiomas y competencias técnicas.',
    label: 'Hoja de vida',
    heading: 'Hoja de vida',
    summaryLabel: 'Resumen',
    summary:
      'Ingeniero de software con más de una década de experiencia construyendo software para empresas privadas y entidades públicas. Perfil full stack con foco actual en ingeniería backend, arquitectura de software y sistemas distribuidos en el ecosistema .NET. También diseño y construyo sitios web y experiencias digitales.',
    experienceLabel: 'Experiencia',
    skillsLabel: 'Competencias técnicas',
    download: { en: 'Descargar PDF (inglés)', es: 'Descargar PDF (español)' },
    noPdf: 'Si necesitas una copia en PDF, escríbeme a',
  },

  contact: {
    title: 'Contacto — Jonathan Jiménez',
    description: 'Ponte en contacto con Jonathan Jiménez por correo, LinkedIn o GitHub.',
    label: 'Contacto',
    heading: 'Hablemos.',
    lead: 'Para cargos de ingeniería, conversaciones de arquitectura o un sitio web que quieras construir, el correo es la mejor forma de escribirme.',
    channels: [
      { name: 'Email', text: 'La forma más directa de escribirme.', handle: 'contact@jjimenez.net' },
      { name: 'LinkedIn', text: 'Consultas y mensajes profesionales.', handle: 'in/jonathanjimenezdevelopment' },
      { name: 'GitHub', text: 'Código, repositorios y trabajo open source.', handle: 'RockerInt' },
    ],
    forLabel: 'Buenas razones para escribir',
    for: [
      'Cargos senior de backend, arquitectura o liderazgo técnico',
      'Conversaciones sobre .NET, diseño de sistemas o arquitectura orientada a eventos',
      'Un sitio web, landing page o producto digital que necesites diseñar y construir',
    ],
  },

  diagram: {
    label: 'Diagrama de arquitectura de DSR.Architecture: tres capas anidadas con dependencias que apuntan hacia adentro.',
    caption: 'Fig. 1. Capas de paquetes de DSR.Architecture. Cada capa depende solo de las que contiene.',
    note: 'Diagrama conceptual, elaborado a partir de la estructura del repositorio público.',
    dependsOn: 'depende de',
    nothing: 'nada',
    infrastructure: {
      name: 'Infraestructura',
      text: 'Implementa los contratos para un almacenamiento específico.',
      items: ['EF Core', 'MongoDB', 'SQL Server', 'SQLite', 'Proveedor HTTP'],
    },
    application: {
      name: 'Aplicación',
      text: 'Comandos y consultas pasan por un pipeline de behaviors antes de llegar a su caso de uso.',
      pipeline: 'Pipeline',
      items: ['Validación', 'Autorización', 'Transacción', 'Idempotencia', 'Logging', 'Métricas', 'Excepciones'],
      contracts: 'Contratos',
      contractItems: ['Repositorio de lectura', 'Repositorio de escritura', 'Unidad de trabajo'],
    },
    domain: {
      name: 'Dominio',
      text: 'No conoce la infraestructura.',
      items: ['Agregados', 'Entidades', 'Objetos de valor', 'Eventos de dominio', 'Result', 'Especificaciones'],
    },
    planned: { name: 'Planeado', text: 'Aún no está en el repositorio.', items: ['Outbox', 'Event Sourcing'] },
  },
  cta: {
    label: 'Contacto',
    title: '¿Un sistema por diseñar o una experiencia por construir?',
    text: 'Estoy abierto a conversar sobre cargos de ingeniería, arquitectura y proyectos web.',
    primary: 'Contactar',
  },

  footer: {
    note: 'Diseñado y construido por Jonathan Jiménez con Astro.',
    sections: 'Sitio',
    elsewhere: 'En otros lugares',
  },

  notFound: {
    title: 'Página no encontrada — Jonathan Jiménez',
    code: '404',
    heading: 'Esta página no existe.',
    text: 'Puede que la dirección sea incorrecta o que la página haya cambiado de lugar.',
    home: 'Volver al inicio',
  },
};
