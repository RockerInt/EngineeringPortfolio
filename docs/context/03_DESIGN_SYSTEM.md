# Visual Direction & Design System

## Dirección creativa

**Editorial Engineering Portfolio**

Combinar:
- Tipografía editorial y jerarquía visual cuidada.
- Densidad de información técnica, inspirada en herramientas de ingeniería profesionales.
- Presentación visual de proyectos y experiencias.
- Espacios negativos y composición sobria.
- Interacciones discretas y funcionales.

Evitar:
- Plantilla genérica de portfolio.
- Gradientes saturados en todas las secciones.
- Glassmorphism excesivo.
- Ilustraciones stock de programadores.
- Animaciones constantes.
- Tarjetas idénticas repetidas sin jerarquía.
- Barras de porcentaje para representar habilidades.
- Métricas inventadas o contadores decorativos.

## Sistema vigente

Desde el rediseño con Hallmark (2026-11-26) el sistema visual está fijado en `design.md`, en la raíz del repositorio, y sus valores viven en `src/styles/tokens.css`. Tema Blueprint: hoja azul de Prusia, línea blanca como única señal, Chakra Petch para encabezados, IBM Plex Sans para texto e IBM Plex Mono solo para periodos, índices, hosts y código.

La paleta oscura inicial (`#090B10`, acento `#65A8FF`) e Inter + JetBrains Mono quedaron reemplazadas; siguen disponibles en la rama `design/visual-refinement`.

## Layout

- Grid editorial.
- Contenedor central con ancho máximo controlado.
- Ritmo vertical consistente.
- Secciones con variación de composición.
- Proyectos destacados con layouts alternos cuando tenga sentido.
- Responsive real para mobile, tablet y desktop.
- No asumir que todo el contenido debe ser una cuadrícula de cards.

## Componentes visuales esperados

- Header / navigation.
- Hero.
- Section heading.
- Project feature.
- Project card.
- Experience timeline.
- Technical capability groups.
- Case study header.
- Case study content sections.
- External link.
- Resume download.
- Contact CTA.
- Footer.
- Language switcher.

## Imágenes

- Usar screenshots reales de los sitios/proyectos cuando se proporcionen o puedan extraerse legítimamente.
- No usar imágenes generadas como si fueran screenshots de un producto real.
- No crear mockups falsos que aparenten ser capturas reales.
- Si no hay assets reales, usar composiciones tipográficas, abstractas o placeholders claramente reemplazables.
- Optimizar a AVIF/WebP y definir dimensiones para evitar CLS.
- Incluir alt text descriptivo y no redundante.

## Motion

- Preferir CSS transitions y animaciones pequeñas.
- Respetar `prefers-reduced-motion`.
- No bloquear contenido por animaciones.
- Evitar dependencias de animación hasta demostrar necesidad.
- Las transiciones de página son opcionales; no deben degradar navegación, accesibilidad ni rendimiento.

## Accesibilidad

- Contraste WCAG AA como objetivo.
- Foco visible.
- Navegación completa por teclado.
- Semántica HTML correcta.
- Menú móvil accesible.
- Formularios con labels y estados de error, si se implementan.
- Respetar reduced motion.

## Tema

Un solo tema: la hoja azul. La impresión (PDF de la hoja de vida) usa la variante clara del mismo tema.
