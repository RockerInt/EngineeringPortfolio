/**
 * English copy. `es.ts` must satisfy the same shape (`typeof en`).
 * Content rules: docs/context/05_CONTENT_SOURCE_OF_TRUTH.md — nothing here may
 * state unconfirmed dates, titles, metrics or academic degrees.
 */
export const en = {
  role: 'Software Engineer & Digital Solutions Architect',
  statement: ['Engineering systems.', 'Building digital experiences.'],
  valueProp:
    'I architect, engineer and build digital products, from scalable software platforms and distributed systems to high-quality web experiences.',
  location: 'Bogotá, Colombia',
  portraitAlt: 'Black-and-white portrait of Jonathan Jiménez smiling with his arms crossed, wearing a white shirt, dark vest and tie.',

  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    engineering: 'Engineering',
    digital: 'Digital Experiences',
    openSource: 'Open Source',
    resume: 'Résumé',
    contact: 'Contact',
    main: 'Main navigation',
    menu: 'Menu',
    skip: 'Skip to content',
    breadcrumb: 'Breadcrumb',
    switchTo: 'Español',
    switchLabel: 'Ver esta página en español',
  },

  common: {
    caseStudy: 'Read case study',
    visitSite: 'Visit live site',
    repository: 'View repository',
    role: 'Role',
    type: 'Type',
    status: 'Status',
    stack: 'Stack',
    license: 'License',
    links: 'Links',
    components: 'Components',
    planned: 'Planned',
    plannedNote: 'Not yet in the repository',
    externalHint: '(opens in a new tab)',
    next: 'Next',
    backTo: 'Back to',
    kind: {
      'professional-experience': 'Professional experience',
      'personal-project': 'Personal project',
      'open-source': 'Open source',
      'freelance-project': 'Freelance project',
    },
    stage: {
      'in-development': 'In development',
      delivered: 'Delivered',
      experimental: 'Experimental',
    },
  },

  skills: [
    { label: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Web API', 'Node.js'] },
    { label: 'Architecture', items: ['Domain-Driven Design', 'Clean Architecture', 'CQRS', 'Specification', 'Unit of Work', 'Modular architecture'] },
    { label: 'Distributed systems', items: ['Kafka', 'Event-Driven Architecture', 'Microservices'] },
    { label: 'Data', items: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'EF Core', 'Dapper'] },
    { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'] },
    { label: 'Infrastructure', items: ['Docker', 'Kubernetes', 'CI/CD', 'Azure DevOps', 'AWS', 'Terraform'] },
    { label: 'Practices', items: ['Git', 'Scrum', 'Testing', 'Observability'] },
  ],

  education: {
    title: 'University studies',
    items: [
      { school: 'Universidad Santo Tomás', detail: 'Undergraduate studies in Ingeniería de Informática', period: '2018–2021' },
      { school: 'Universidad Nacional de Colombia', detail: 'Undergraduate studies in Ingeniería de Sistemas y Computación', period: '2009–2013' },
    ],
  },

  languages: {
    title: 'Languages',
    items: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Intermediate' },
    ],
  },

  areas: {
    engineering: {
      title: 'Software Engineering & Architecture',
      text: 'Backend platforms designed around the domain and built to stay maintainable as they grow.',
      items: [
        'Backend engineering with .NET',
        'Software architecture, DDD, Clean Architecture',
        'Event-driven systems and microservices',
        'Data persistence and systems integration',
        'Technical leadership and engineering decisions',
      ],
      cta: 'Explore engineering work',
    },
    digital: {
      title: 'Digital Experiences',
      text: 'Websites and web applications where brand, content and product meet careful front-end implementation.',
      items: [
        'Business websites',
        'Landing pages',
        'Brand-oriented websites',
        'Digital product experiences',
        'Custom web applications',
      ],
      cta: 'Explore digital experiences',
    },
  },

  home: {
    title: 'Jonathan Jiménez — Software Engineer & Digital Solutions Architect',
    description:
      'Portfolio of Jonathan Jiménez, software engineer based in Bogotá: backend engineering, .NET, software architecture, distributed systems and digital experiences.',
    cta: { work: 'Explore my work', resume: 'View résumé', contact: 'Get in touch' },
    spec: {
      label: 'Profile sheet',
      rows: [
        ['Based in', 'Bogotá, Colombia'],
        ['Core', 'Backend, .NET, Software architecture'],
        ['Systems', 'Distributed, Event-driven, Microservices'],
        ['Also', 'Websites and digital experiences'],
        ['Languages', 'Spanish (native), English (intermediate)'],
      ],
    },
    intro: {
      label: 'Profile',
      lead: 'More than a decade building software for private companies and public entities.',
      body: [
        'I started as a full-stack developer and moved steadily toward the problems I find most interesting: backend engineering, software architecture and distributed systems.',
        'Alongside that work I design and build websites and digital experiences. Different surface, same discipline: understand the problem, design the solution, deliver it well.',
      ],
      link: 'More about me',
    },
    areasNote: 'Both come from the same capability: designing, building and delivering digital solutions.',
    work: {
      label: 'Selected work',
      title: 'Platforms, frameworks and websites.',
      engineering: 'Engineering',
      digital: 'Digital experiences',
    },
    experience: { label: 'Experience', title: 'Where I have worked.', link: 'Full experience' },
    expertise: {
      label: 'Technical expertise',
      title: 'Tools I have worked with, grouped by concern.',
      note: 'Listed as technologies used across professional and personal projects, not as a ranking of proficiency.',
    },
  },

  about: {
    title: 'About — Jonathan Jiménez',
    description:
      'Professional profile of Jonathan Jiménez: from full-stack development to backend engineering, software architecture and distributed systems, plus digital experiences.',
    label: 'About',
    heading: 'I build software systems, and the digital experiences people meet them through.',
    intro: [
      'I am a software engineer based in Bogotá, Colombia, with more than a decade of experience building software for private companies and public entities.',
      'My background is full-stack, but my focus today is backend engineering, software architecture and distributed systems, mostly in the .NET ecosystem. I also design and build websites and digital experiences, which keeps me close to the part of a product people actually see.',
    ],
    pathLabel: 'Trajectory',
    pathTitle: 'From full-stack delivery to systems design.',
    path: [
      {
        period: '2013–2018',
        title: 'Full-stack foundations',
        text: 'At Evolution Technologies Group I worked across front end, back end, deployments and level-3 support for an enterprise content management product built on ASP.NET, Oracle and SQL Server.',
      },
      {
        period: '2018–2021',
        title: 'Services and cloud',
        text: 'At Aportes en Línea I worked as a Senior Development Engineer on internal applications, a chatbot and a financial query service with serverless components on AWS.',
      },
      {
        period: '2021–2024',
        title: 'Event-driven backends',
        text: 'As a Backend Expert Developer for Weelo, Million and Up and Hola Car Rentals, my work centered on C# microservices, Kafka and event-driven architecture, including moving monolithic modules toward events.',
      },
      {
        period: '2026–',
        title: 'Platform engineering at Alwon',
        text: 'As Founding Engineer at Alwon I work on an operational intelligence platform for retail, across architecture, backend, integration and data.',
      },
    ],
    philosophyLabel: 'Engineering philosophy',
    philosophyTitle: 'What I care about when I design software.',
    philosophy: [
      {
        title: 'The domain comes first',
        text: 'Technology choices follow from understanding the business problem. I model the domain before I pick the tools.',
      },
      {
        title: 'Maintainability is a feature',
        text: 'Clear boundaries and separation of concerns are what let a system keep changing after its first release.',
      },
      {
        title: 'Scale is a design decision',
        text: 'Events, decoupling and distribution are tools for specific problems. I reach for them when the problem calls for it, not by default.',
      },
      {
        title: 'Honest about state',
        text: 'I separate what is built from what is planned: in code, in documentation and in this portfolio.',
      },
    ],
    backgroundLabel: 'Background',
    cta: 'See my experience',
  },

  experience: {
    title: 'Experience — Jonathan Jiménez',
    description:
      'Professional timeline of Jonathan Jiménez: Alwon, Weelo / Million and Up / Hola Car Rentals, Aportes en Línea and Evolution Technologies Group.',
    label: 'Experience',
    heading: 'Professional timeline.',
    lead: 'Organizations, roles and the projects I worked on within each of them.',
    projects: 'Projects',
    relatedCase: 'Related case study',
    cta: 'View résumé',
  },

  engineering: {
    title: 'Engineering — Jonathan Jiménez',
    description:
      'Engineering case studies: professional platform work at Alwon and DSR.Architecture, a personal .NET architecture framework in development.',
    label: 'Engineering',
    heading: 'Software engineering and architecture.',
    lead: 'Backend, architecture and distributed systems, shown through professional work I can disclose and a personal framework where the design decisions are public.',
    casesLabel: 'Case studies',
    relatedLabel: 'Built on DSR.Architecture',
    relatedText: 'Two public repositories apply the framework to concrete applications. They live under Open Source.',
    focusLabel: 'Areas of focus',
    focus: [
      { title: 'Backend engineering', text: 'APIs and services in C# and .NET, with attention to the application pipeline: validation, transactions, logging and error handling.' },
      { title: 'Architecture', text: 'Domain-Driven Design and Clean Architecture as a way to keep business rules independent from infrastructure.' },
      { title: 'Distributed systems', text: 'Event-driven architecture and microservices with Kafka, including migrations away from monolithic modules.' },
      { title: 'Data persistence', text: 'Relational and document stores behind repository and specification abstractions.' },
    ],
  },

  digital: {
    title: 'Digital Experiences — Jonathan Jiménez',
    description:
      'Websites and digital experiences by Jonathan Jiménez: Legado\'s, Auténtico Café and an audiovisual production portfolio.',
    label: 'Digital Experiences',
    heading: 'Websites built around a story.',
    lead: 'Brand, content and product, carried through to front-end implementation. Each project below is live and linked.',
    capabilitiesLabel: 'What I build',
    cta: 'Have a website or product in mind?',
  },

  openSource: {
    title: 'Open Source — Jonathan Jiménez',
    description:
      'Selected public repositories by Jonathan Jiménez: DSR.Architecture, DsrWebApp and UserPermissionApi.',
    label: 'Open Source',
    heading: 'Selected repositories.',
    lead: 'A curated set, not a mirror of my GitHub profile. Each one is here because it shows a specific piece of how I design backend software.',
    demonstrates: 'What it demonstrates',
    allRepos: 'Everything else is on GitHub',
    notes: {
      'dsr-architecture': 'How I think about layering, persistence abstractions and the application pipeline when starting from a blank page.',
      dsrwebapp: 'The framework applied to a full application: an ASP.NET Core API with an Angular front end, packaged with Docker.',
      userpermissionapi: 'A small service with real integration concerns: relational persistence, Kafka events, Elasticsearch and tests.',
    } as Record<string, string>,
  },

  resume: {
    title: 'Résumé — Jonathan Jiménez',
    description:
      'Résumé of Jonathan Jiménez, Software Engineer & Digital Solutions Architect: experience, university studies, languages and technical skills.',
    label: 'Résumé',
    heading: 'Résumé',
    summaryLabel: 'Summary',
    summary:
      'Software engineer with more than a decade of experience building software for private companies and public entities. Full-stack background with a current focus on backend engineering, software architecture and distributed systems in the .NET ecosystem. I also design and build websites and digital experiences.',
    experienceLabel: 'Experience',
    skillsLabel: 'Technical skills',
    download: { en: 'Download PDF (English)', es: 'Download PDF (Spanish)' },
    noPdf: 'For a PDF copy, write to me at',
  },

  contact: {
    title: 'Contact — Jonathan Jiménez',
    description: 'Get in touch with Jonathan Jiménez by email, LinkedIn or GitHub.',
    label: 'Contact',
    heading: 'Let\'s talk.',
    lead: 'For engineering roles, architecture conversations or a website you want built, email is the best way to reach me.',
    channels: [
      { name: 'Email', text: 'The most direct way to reach me.', handle: 'contact@jjimenez.net' },
      { name: 'LinkedIn', text: 'Professional inquiries and messages.', handle: 'in/jonathanjimenezdevelopment' },
      { name: 'GitHub', text: 'Code, repositories and open-source work.', handle: 'RockerInt' },
    ],
    forLabel: 'Good reasons to write',
    for: [
      'Senior backend, architecture or technical leadership roles',
      'Conversations about .NET, system design or event-driven architecture',
      'A website, landing page or digital product you need designed and built',
    ],
  },

  diagram: {
    label: 'Architecture diagram of DSR.Architecture: three nested layers with dependencies pointing inward.',
    caption: 'Fig. 1. Package layers of DSR.Architecture. Each layer depends only on the ones inside it.',
    note: 'Conceptual diagram, drawn from the structure of the public repository.',
    dependsOn: 'depends on',
    nothing: 'nothing',
    infrastructure: {
      name: 'Infrastructure',
      text: 'Implements the contracts for a specific store.',
      items: ['EF Core', 'MongoDB', 'SQL Server', 'SQLite', 'HTTP provider'],
    },
    application: {
      name: 'Application',
      text: 'Commands and queries pass through a pipeline of behaviors before reaching their use case.',
      pipeline: 'Pipeline',
      items: ['Validation', 'Authorization', 'Transaction', 'Idempotency', 'Logging', 'Metrics', 'Exceptions'],
      contracts: 'Contracts',
      contractItems: ['Read repository', 'Write repository', 'Unit of work'],
    },
    domain: {
      name: 'Domain',
      text: 'Knows nothing about infrastructure.',
      items: ['Aggregates', 'Entities', 'Value objects', 'Domain events', 'Result', 'Specifications'],
    },
    planned: { name: 'Planned', text: 'Not in the repository yet.', items: ['Outbox', 'Event Sourcing'] },
  },
  cta: {
    label: 'Contact',
    title: 'Have a system to design or an experience to build?',
    text: 'I am open to conversations about engineering roles, architecture and web projects.',
    primary: 'Get in touch',
  },

  footer: {
    note: 'Designed and built by Jonathan Jiménez with Astro.',
    sections: 'Site',
    elsewhere: 'Elsewhere',
  },

  notFound: {
    title: 'Page not found — Jonathan Jiménez',
    code: '404',
    heading: 'This page does not exist.',
    text: 'The address may be wrong, or the page may have moved.',
    home: 'Back to home',
  },
};

export type Dict = typeof en;
