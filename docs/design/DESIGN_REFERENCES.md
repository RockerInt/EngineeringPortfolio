# Referencias de diseño

Doce referencias reales. Cada URL se cargó con respuesta 200 y se capturó a 1440×1000 el 2026-11-26; las capturas están en `screenshots/references/`. Las observaciones describen **solo el primer viewport** de cada sitio (sin scroll, hover ni animación). Los tamaños en píxeles son estimaciones visuales, no CSS inspeccionado.

No se copia ningún sitio: de cada uno se extrae un principio.

## A. Editorial y tipografía

### 1. Inter (rsms) — https://rsms.me/inter/
![](screenshots/references/rsms-inter.jpg)
- **Qué destaca:** titular de dos líneas a ~170 px con tracking cerrado que ocupa ~82 % del ancho; debajo, columna estrecha de etiqueta y dos columnas de texto. Navegación de cinco palabras, sin logo.
- **Principio:** un único salto extremo de escala (≈10:1) crea jerarquía sin decoración.
- **Sección:** hero.
- **Adoptar:** frase de marca como display con tracking negativo; texto de apoyo colgado del mismo borde izquierdo.
- **No copiar:** el monocromo sin acento ni la estructura de espécimen.

### 2. Linear Method — https://linear.app/method
![](screenshots/references/linear-method.jpg)
- **Qué destaca:** antetítulo en mayúsculas espaciadas, titular display, entradilla en columna estrecha; la única ilustración son círculos a línea de 1 px.
- **Principio:** pila editorial de tres pasos; los diagramas usan el mismo lenguaje de filete que las reglas.
- **Sección:** hero; diagrama de arquitectura.
- **Adoptar:** diagramas hechos solo de filetes como única "ilustración".
- **No copiar:** alineación centrada, serif display, navegación de SaaS con botón píldora.

### 3. Practical Typography — https://practicaltypography.com/typography-in-ten-minutes.html
![](screenshots/references/practical-typography-ten-minutes.jpg)
- **Qué destaca:** columna única de ~650 px desplazada del centro; primer párrafo más grande; numerales colgados en el margen; apartes entre filetes.
- **Principio:** medida, párrafo de entrada y marcadores colgados sostienen toda la jerarquía.
- **Sección:** cuerpo de los casos de estudio; Acerca de.
- **Adoptar:** medida controlada (≤68 ch) y numeración colgada de secciones.
- **No copiar:** serif, fondo blanco, composición justificada.

## B. Portafolios de ingeniería

### 4. Lee Robinson — https://leerob.com
![](screenshots/references/leerob.jpg)
- **Qué destaca:** columna de texto más una imagen alta sin tarjeta; listas de filas con título a la izquierda y fecha a la derecha.
- **Principio:** texto + una imagen persistente; fila tipo libro mayor.
- **Sección:** Acerca de (retrato); experiencia compacta.
- **Adoptar:** retrato como imagen sin marco; filas con la fecha alineada a la derecha.
- **No copiar:** serif de cuerpo, ilustración a color.

### 5. Mitchell Hashimoto — https://mitchellh.com
![](screenshots/references/mitchellh.jpg)
- **Qué destaca:** riel de 200 px y columna de prosa; un punto marca la página activa; el pie es una línea.
- **Principio:** credibilidad por contención: hechos en frases, un solo acento reservado a enlaces, sin insignias.
- **Sección:** navegación, pie, Acerca de.
- **Adoptar:** pie de una línea; un único punto de acento para el estado actual.
- **No copiar:** la escasez: este portafolio sí necesita mostrar proyectos.

### 6. PlanetScale — https://planetscale.com
![](screenshots/references/planetscale.jpg)
- **Qué destaca:** la portada es un documento en monoespaciada; tabla de celdas con filete; botones de esquina recta.
- **Principio:** autoridad técnica mediante texto denso bien compuesto y tablas regladas.
- **Sección:** habilidades, navegación.
- **Adoptar:** rejillas regladas en lugar de tarjetas.
- **No copiar:** monoespaciada para todo el cuerpo, barra de anuncio, bordes blancos a plena intensidad.

## C. Presentación de proyectos

### 7. Zed — https://zed.dev
![](screenshots/references/zed.jpg)
- **Qué destaca:** dos productos como entradas de catálogo (nombre, guía de puntos, año) con una captura real de producto inmediatamente debajo, a sangre dentro del marco.
- **Principio:** entradas de catálogo con interfaz real a plena fidelidad, sin mockup de dispositivo.
- **Sección:** trabajo seleccionado (los dos capítulos).
- **Adoptar:** dos capítulos paralelos; captura real grande justo bajo el encabezado.
- **No copiar:** las fichas rojas y azules saturadas, el fondo texturizado.

### 8. Oxide, especificaciones — https://oxide.computer/product/specifications
![](screenshots/references/oxide-specifications.jpg)
- **Qué destaca:** hoja de especificación en secciones regladas: etiqueta a la izquierda, valor en tono más tenue, notas bajo su propio filete.
- **Principio:** metadatos como tabla tipográfica de dos columnas, dos tonos y solo filetes.
- **Sección:** detalle de proyecto, componentes, habilidades.
- **Adoptar:** mapa de componentes como tabla reglada en lugar de cajas.
- **No copiar:** encabezado centrado con icono, acento verde. (La captura incluye su aviso de cookies.)

### 9. Oxide RFD — https://rfd.shared.oxide.computer
![](screenshots/references/oxide-rfd.jpg)
- **Qué destaca:** índice de documentos de diseño como tabla numerada, con estado en mono y etiquetas.
- **Principio:** el trabajo de ingeniería como registro numerado y con estado.
- **Sección:** filas de proyectos de ingeniería.
- **Adoptar:** numeración, estado explícito ("En desarrollo", "Planeado") en mono.
- **No copiar:** caja redondeada por fila, buscador y filtros.

### 10. Ink & Switch, Keyhive — https://www.inkandswitch.com/keyhive/notebook/
![](screenshots/references/ink-and-switch-keyhive.jpg)
- **Qué destaca:** columna principal y columna de margen con autoría y pies de figura alineados a lo que describen; entradas numeradas.
- **Principio:** notas al margen: los metadatos viven junto al contenido que anotan.
- **Sección:** detalle de proyecto.
- **Adoptar:** figura con pie numerado ("Fig. 1") que declara qué es y de dónde sale.
- **No copiar:** nota adhesiva girada, subrayados a mano, emoji.

## D. Sistemas de diseño e interacción

### 11. Vercel Geist, tipografía — https://vercel.com/geist/typography
![](screenshots/references/vercel-geist-typography.jpg)
- **Qué destaca:** marco reglado visible; escala tipográfica como tabla con espécimen y nombre de token.
- **Principio:** escala finita y nombrada; la estructura se muestra con filetes, no con cajas ni sombras.
- **Sección:** sistema global.
- **Adoptar:** mantener la escala como tokens (`--text-*`) y no introducir tamaños sueltos.
- **No copiar:** barra lateral de documentación, bloque de código redondeado.

### 12. Linear Changelog — https://linear.app/changelog
![](screenshots/references/linear-changelog.jpg)
- **Qué destaca:** línea de tiempo hecha de un filete, un punto de acento y la fecha en un riel estrecho.
- **Principio:** fecha en riel, contenido en columna ancha, un solo punto como ornamento.
- **Sección:** experiencia.
- **Adoptar:** un punto de acento únicamente en el cargo actual.
- **No copiar:** tarjetas redondeadas con imagen, navegación de SaaS.

## Candidatos descartados

rauno.me, paco.me, obys.agency, locomotive.ca, basement.studio y tigerbeetle.com (la captura no mostró contenido útil: lienzo vacío, precarga o animación); tailscale.com/blog, pentagram.com y railway.com (aviso de consentimiento sobre el contenido); resend.com, evilmartians.com, family.co, ia.net y stripe.press (dirección decorativa o de marketing, sin patrón transferible); brianlovin.com, emilkowal.ski, antfu.me y tonsky.me (válidos, pero cubiertos mejor por las referencias 4, 5 y 12). No se evaluaron perfiles de read.cv por no tener una URL concreta que verificar.
