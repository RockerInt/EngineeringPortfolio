# Informe de implementación

Fecha: 2026-11-26. Base: commit `996ebd2`. Los cambios están en el árbol de trabajo, **sin commit ni despliegue**.

## Qué cambió

| Archivo | Cambio |
|---|---|
| `src/components/ArchDiagram.astro` (nuevo) | Diagrama conceptual de DSR.Architecture en HTML/CSS, bilingüe. |
| `src/views/Home.astro` | Hero con una acción primaria y sin rejilla decorativa; se elimina el díptico de áreas; "Trabajo seleccionado" a ancho completo con capítulos A / B. |
| `src/views/ProjectDetail.astro` | El caso DSR.Architecture abre con el diagrama. |
| `src/components/ContactCta.astro` | Cierre tipográfico con el correo como elemento principal; sin degradado. |
| `src/components/Footer.astro` | Pie de una fila; lista todas las páginas, incluida Código abierto. |
| `src/components/Header.astro`, `src/i18n/routes.ts` | Navegación de 6 entradas (`NAV`) y `FOOTER_NAV` con las 7; punto de corte del menú de 72 a 64 rem. |
| `src/components/Timeline.astro` | Filas compactas tipo libro mayor; punto en el cargo actual. |
| `src/components/ModuleMap.astro` | Tabla reglada en lugar de cajas. |
| `src/components/Portrait.astro` | Sin borde ni barra de pie. |
| `src/components/WorkRow.astro`, `WorkFeature.astro` | Nivel de encabezado configurable; corrección de columnas en filas alternas. |
| `src/styles/global.css` | Tecnologías como línea en mono; radio único; cifras tabulares. |
| `src/i18n/en.ts`, `es.ts` | Textos del diagrama; se retiran dos claves sin uso. |
| `public/resume/*.pdf` | Regenerados (2 páginas cada uno). |

Sin dependencias nuevas. Sin JavaScript nuevo: el único script sigue siendo el del menú móvil. No se eliminó ninguna ruta: siguen siendo 31 páginas.

## Contenido

No se añadió ningún dato profesional. El diagrama solo nombra paquetes y tipos ya descritos en el caso de estudio, verificados antes contra el repositorio público: capas Dominio, Aplicación e Infraestructura; behaviors de validación, autorización, transacción, idempotencia, logging, métricas y excepciones; contratos de repositorio de lectura y escritura y unidad de trabajo; EF Core, MongoDB, SQL Server, SQLite y proveedor HTTP. Outbox y Event Sourcing aparecen fuera de las capas, en discontinua, como "Planeado — aún no está en el repositorio".

## Antes y después

Capturas en `screenshots/before/` y `screenshots/after/` con el mismo script y los mismos viewports. Escritorio y móvil son página completa; portátil y tableta, primer viewport.

| Página | Qué mirar |
|---|---|
| `home-desktop.jpg` | Sin díptico; capítulos A / B; diagrama; tres proyectos digitales; cierre y pie nuevos. |
| `home-mobile.jpg` | Diagrama apilado legible; jerarquía de acciones del hero. |
| `dsr-architecture-desktop.jpg` | Diagrama de apertura; componentes como tabla. |
| `digital-desktop.jpg` | Fila alterna con la captura en la columna ancha. |
| `experience-desktop.jpg` | Stack como línea; punto en el cargo actual. |
| `about-laptop.jpg` | Retrato sin tarjeta. |
| `home-es-tablet.jpg` | Cabecera en español. |

Valoración: los cambios D1, D4–D6 y D8 mejoran de forma clara la presentación del trabajo y el cierre. El hero, la experiencia y las habilidades ya eran sólidos y cambian poco a propósito.

## Validación realizada

| Comprobación | Resultado |
|---|---|
| `pnpm validate` (`astro check` + build + verificador) | 0 errores, 0 avisos; 31 páginas; verificador en verde. |
| Desbordamiento horizontal | 0 elementos en 13 páginas × 7 anchos (320, 390, 768, 1024, 1040, 1280, 1440). |
| Menú móvil, cambio de idioma, skip link | Todas las aserciones pasan. |
| Lighthouse (Home y caso DSR, móvil) | 100 / 100 / 100 / 100. |
| PDF de hoja de vida | Regenerados; 2 páginas cada uno. |
| Inspección visual | Home a 1440, 1024 y 390; cabecera en español a 1040; caso DSR y Experiencia a 1280; Acerca de a 1280. |

**No verificado:** Safari y Firefox; lector de pantalla real; navegación por teclado más allá del menú y el skip link; las páginas Contacto, Hoja de vida y Código abierto solo pasaron las comprobaciones automáticas, no una revisión visual. El despliegue en Cloudflare no se ha probado con estos cambios.

## Siguientes pasos sugeridos

1. Capturas reales de DsrWebApp en ejecución, para dar al segundo proyecto de ingeniería material propio.
2. Un extracto de código real de DSR.Architecture (por ejemplo, una especificación) en su caso de estudio.
3. Dominios definitivos de Legado's y Auténtico Café: los marcos muestran hoy el host `vercel.app`.
4. Las capturas de `screenshots/references/` son de sitios de terceros; conviene excluirlas si el repositorio se hace público.
