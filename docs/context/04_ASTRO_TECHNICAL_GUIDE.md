# Astro Technical Guide

## Stack aprobado

- Astro.
- TypeScript.
- Tailwind CSS (si la versión actual de Astro/Tailwind elegida es estable y se integra limpiamente).
- Astro Content Collections para contenido estructurado.
- MDX para case studies largos cuando aporte valor.
- Lucide icons.
- Cloudflare para deployment (Workers con assets estáticos; sin adaptador de Astro).
- CSS nativo para la mayoría de estilos y motion.

No usar Next.js.

## Principios de arquitectura

1. Static-first: prerenderizar el contenido público.
2. Zero/low JavaScript por defecto.
3. Usar Astro components para layout y contenido.
4. Islands solo para interacciones que realmente lo necesiten.
5. No introducir React/Vue/Svelte salvo necesidad concreta aprobada.
6. El contenido debe vivir separado de los componentes.
7. Tipado estricto para colecciones y componentes.
8. Reutilización pragmática: evitar tanto duplicación como abstracciones prematuras.
9. No depender de API externa para mostrar páginas principales.
10. No incluir secretos, tokens ni credenciales en el repositorio.

## Estructura sugerida

```text
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── sections/
│   ├── projects/
│   ├── experience/
│   └── ui/
├── content/
│   ├── projects/
│   ├── experience/
│   ├── case-studies/
│   └── pages/
├── content.config.ts
├── layouts/
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── experience.astro
│   ├── engineering/
│   ├── digital-experiences/
│   ├── open-source/
│   ├── resume.astro
│   ├── contact.astro
│   └── es/
├── styles/
│   ├── global.css
│   └── tokens.css
└── utils/
```

Adaptar la estructura al sistema actual de Astro y al estado real del repositorio. No copiar una estructura obsoleta si la versión instalada usa convenciones nuevas.

## Contenido estructurado

Definir schemas tipados para:
- Projects.
- Experience.
- Skills/capabilities.
- Pages/case studies.

Campos de proyecto sugeridos:
- title
- slug
- category
- summary
- description
- role / contribution
- status
- technologies
- cover image
- external URL
- repository URL
- featured
- language / translations
- date (solo si está confirmada)

Estados permitidos:
- professional-experience
- personal-project
- open-source
- freelance-project
- in-development
- delivered
- experimental

No inferir estado a partir de que exista una URL.

## Internacionalización

- Inglés y español.
- Definir una sola estrategia de URLs y mantenerla consistente.
- `lang` correcto en HTML.
- Hreflang/canonical cuando corresponda.
- Selector de idioma visible.
- No traducir nombres oficiales de organizaciones, repositorios o productos.
- No usar traducción automática literal en el copy principal: adaptar tono y naturalidad.

## SEO

- Title y description por página.
- Canonical.
- Open Graph.
- Sitemap.
- robots.txt.
- JSON-LD Person.
- Metadatos de imagen social.
- URLs legibles.
- Enlaces internos entre experiencia y casos de estudio.

## Assets

- CV PDFs en `public/resume/` o ruta equivalente.
- Imágenes en `public/images/` o assets gestionados por Astro.
- No guardar archivos grandes innecesarios.
- Usar formatos modernos y tamaños responsive.

## Calidad de código

- `strict` TypeScript.
- Componentes pequeños y con responsabilidad clara.
- Evitar `any`.
- No ocultar errores con casts indiscriminados.
- No añadir dependencias sin necesidad.
- Scripts reproducibles para dev, build, preview y lint/typecheck si se configura.
- No modificar archivos de configuración existentes sin inspeccionarlos primero.
- No borrar ni reemplazar contenido del repositorio sin revisar su propósito.

## Deployment

Target: Cloudflare (Workers con assets estáticos). Dominio: `engineering.jjimenez.net`.
- Configuración en `wrangler.jsonc`; cabeceras en `public/_headers`.
- Build reproducible.
- Rutas estáticas verificadas.
- 404 personalizada.
- Assets y CV con rutas válidas.
- Variables de entorno solo si una integración real las necesita.
