# Information Architecture & Sitemap

## Navegación principal

- Home
- About
- Experience
- Engineering
- Digital Experiences
- Open Source
- Resume
- Contact

La navegación debe ser clara y compacta. En mobile debe convertirse en un menú accesible y fácil de operar.

## Rutas propuestas

```text
/
├── /about/
├── /experience/
├── /engineering/
│   ├── /alwon/
│   ├── /dsr-architecture/
│   └── /backend-engineering/       # Solo si existe contenido sustancial
├── /digital-experiences/
│   ├── /legados/
│   ├── /autentico-cafe/
│   └── /audiovisual-portfolio/
├── /open-source/
├── /resume/
├── /contact/
└── /es/
    ├── /acerca-de/
    ├── /experiencia/
    ├── /ingenieria/
    ├── /experiencias-digitales/
    ├── /codigo-abierto/
    ├── /hoja-de-vida/
    └── /contacto/
```

Se puede elegir una estrategia de rutas bilingües más simple si Astro i18n lo aconseja. Mantener consistencia y evitar duplicación accidental.

## Home — orden recomendado

1. Hero: nombre, headline, statement y CTAs.
2. Short introduction: perfil y enfoque.
3. Dos áreas principales:
   - Software Engineering & Architecture.
   - Digital Experiences.
4. Selected work: Alwon (experiencia profesional), DSR.Architecture, DsrWebApp, Legado's y Auténtico Café.
5. Experience snapshot: cronología resumida.
6. Technical expertise: grupos de capacidades.
7. Contact CTA.

## About

- Presentación profesional.
- Evolución de trayectoria.
- Filosofía de ingeniería.
- Interés en sistemas mantenibles, escalables y bien diseñados.
- Formación académica cursada, expresada sin atribuir títulos.
- Idiomas.

## Experience

Cronología profesional con organización, cargo, fechas, contexto y contribuciones confirmadas. Alwon debe ser una entrada independiente. No asumir sus fechas: están pendientes de confirmación.

## Engineering

Casos de estudio de ingeniería:
- Alwon: contribuciones profesionales divulgables.
- DSR.Architecture: framework personal en desarrollo.
- DsrWebApp: aplicación POS construida sobre DSR.Architecture.
- UserPermissionApi: proyecto de API y eventos, ubicado en Open Source o enlazado desde allí para evitar duplicidad.

## Digital Experiences

- Legado's.
- Auténtico Café.
- Audiovisual Portfolio.

Cada caso debe tener imagen/preview, propósito, tipo de trabajo, contribución confirmada, tecnologías solo si se conocen y enlace externo.

## Open Source

Curar proyectos. No mostrar los 30 repositorios indiscriminadamente.

Proyectos iniciales:
- DSR.Architecture.
- DsrWebApp.
- UserPermissionApi.
- WebApp solo si aporta un propósito distinto y no duplica DsrWebApp.

Cada proyecto tiene una URL canónica. Las otras páginas pueden enlazarlo, pero no duplicar su caso de estudio completo.

## Resume

- Botón de descarga del CV en inglés.
- Botón de descarga del CV en español.
- Resumen HTML accesible.
- Mantener los PDF como assets versionados.
- No generar o publicar PDF nuevos hasta verificar que los datos académicos están corregidos.

## Contact

- Email: usar únicamente cuando el usuario lo proporcione o se encuentre en los materiales originales.
- LinkedIn.
- GitHub.
- CTA breve y profesional.
- No inventar direcciones de correo, teléfono ni perfiles sociales.

## Navegación y UX

- Header persistente o compacto según diseño, sin ocupar demasiado espacio.
- Indicador de página activa.
- Breadcrumbs en páginas profundas.
- Footer con navegación secundaria, idioma, GitHub y LinkedIn.
- Cada página debe tener un CTA coherente, no necesariamente un formulario.
