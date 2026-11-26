# Initial Prompt for Claude Code

Actúa como un equipo senior compuesto por Product Designer, Brand Designer, UX Engineer, Astro Architect, Frontend Engineer y Technical SEO Specialist.

Tu objetivo es diseñar e implementar un portafolio profesional de alta calidad para Jonathan Jiménez usando Astro + TypeScript.

## Antes de escribir código

1. Lee todos los archivos Markdown de contexto de este paquete.
2. Inspecciona el repositorio actual: estructura, package manager, scripts, dependencias, configuración, assets y estado de Git.
3. No sobrescribas ni elimines archivos existentes sin comprender su propósito.
4. Identifica datos incompletos y restricciones de contenido.
5. Presenta un plan breve por fases y los riesgos/datos pendientes.
6. No te detengas a pedir confirmación para decisiones visuales menores: utiliza criterio profesional y los documentos como fuente de verdad.
7. Sí debes dejar pendientes los datos personales o profesionales que no estén confirmados; nunca los inventes.

## Resultado esperado

Un sitio completo, coherente y listo para desplegar, no solo un wireframe ni una landing genérica.

Debe tener:
- Identidad: Jonathan Jiménez.
- Headline: Software Engineer & Digital Solutions Architect.
- Mensaje: Engineering systems. Building digital experiences.
- Dos líneas integradas: Software Engineering & Architecture / Digital Experiences.
- Inglés y español.
- Home, About, Experience, Engineering, Digital Experiences, Open Source, Resume y Contact.
- Páginas de detalle para los proyectos que tengan contenido suficiente.
- CV en inglés y español cuando se proporcionen los PDF corregidos.
- SEO técnico, accesibilidad y rendimiento.
- Deploy target Cloudflare.

## Dirección visual

Sigue `03_DESIGN_SYSTEM.md`. Construye una experiencia editorial, sobria, técnica y visualmente distintiva. No utilices una plantilla genérica. La calidad visual debe venir de la tipografía, composición, ritmo, contraste, jerarquía, detalles y presentación de proyectos, no de adornos excesivos.

No uses imágenes generadas o stock para simular screenshots de proyectos reales. Si no existen capturas reales, usa placeholders honestos y documenta cómo reemplazarlos.

## Reglas técnicas

Sigue `04_ASTRO_TECHNICAL_GUIDE.md`.
- Astro y TypeScript.
- Static-first.
- JavaScript mínimo.
- Componentes Astro.
- Tailwind solo si la integración elegida es estable.
- MDX/content collections para contenido.
- No Next.js.
- No incorporar un framework frontend adicional sin justificación.
- No añadir dependencias por conveniencia si CSS/HTML nativos bastan.

## Reglas de contenido no negociables

Sigue `05_CONTENT_SOURCE_OF_TRUTH.md`.

Especialmente:
- El usuario cursó estudios en Universidad Santo Tomás y Universidad Nacional de Colombia, pero no finalizó ninguna carrera y no obtuvo título. No presentarlo como graduado ni atribuirle título de ingeniero.
- Evolution Technologies Group: 2013–2018. No publicar meses no confirmados.
- Alwon: fechas pendientes; no inventarlas.
- Inglés: intermedio.
- GitHub: solo proyectos seleccionados.
- DSR.Architecture: proyecto personal en desarrollo/preproducción; no afirmar madurez/adopción.
- Alwon: solo información pública y contribuciones aprobadas.
- No inventar métricas, clientes, resultados, funcionalidades o logros.
- No inventar email ni datos de contacto.

## Proceso de implementación

### Phase 1 — Repository audit and plan
Inspecciona el repo y entrega el plan. Después continúa con implementación salvo que exista un bloqueo real.

### Phase 2 — Foundation
Configura Astro, TypeScript, estilos globales, tokens, layouts, navegación, contenido tipado y estrategia i18n.

### Phase 3 — Core pages
Implementa Home, About, Experience, Engineering, Digital Experiences, Open Source, Resume y Contact.

### Phase 4 — Project storytelling
Construye páginas de detalle con contexto, rol, decisiones, tecnologías y estado. Distingue claramente el trabajo profesional de los proyectos personales y freelance.

### Phase 5 — Polish
Responsive, accesibilidad, motion discreto, SEO, metadatos, optimización de imágenes, estados vacíos y 404.

### Phase 6 — Validation
Ejecuta verificaciones reales: typecheck/astro check, build, revisión de rutas, enlaces, responsive y consola. Corrige errores.

## Barra de calidad

No consideres terminado el trabajo si:
- Solo existe una Home.
- Hay texto de relleno o lorem ipsum.
- Hay enlaces falsos.
- Se inventan logros o fechas.
- Se presenta formación incompleta como título.
- Los proyectos son cards sin contexto.
- La versión móvil es una adaptación descuidada.
- El sitio depende de animaciones para verse completo.
- No se puede construir localmente.

## Al finalizar

Entrega el resumen y los resultados solicitados en `06_QUALITY_AND_ACCEPTANCE.md`. Enumera claramente todo dato o asset que siga pendiente del usuario.
