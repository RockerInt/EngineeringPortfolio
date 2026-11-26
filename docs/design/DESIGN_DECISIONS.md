# Decisiones de diseño

Cada decisión indica el problema de la auditoría que resuelve y la referencia que la respalda (números de `DESIGN_REFERENCES.md`).

## Adoptadas

| # | Decisión | Por qué | Ref. |
|---|---|---|---|
| D1 | **Diagrama original de DSR.Architecture** como pieza principal de ingeniería en Home y apertura de su caso de estudio. Capas anidadas: Infraestructura ⊃ Aplicación ⊃ Dominio; lo planeado va fuera, en línea discontinua. | La ingeniería no tenía material visual. El anidamiento *es* la regla de dependencia, así que el dibujo explica la arquitectura sin flechas decorativas. | 2, 10 |
| D2 | El diagrama es HTML y CSS, no SVG ni imagen. | Se reorganiza en móvil sin encoger el texto, es legible por lectores de pantalla, se traduce desde el diccionario y no añade peso. | — |
| D3 | El pie de figura declara "Diagrama conceptual, elaborado a partir de la estructura del repositorio público". | Regla del proyecto: solo material auténtico o visualizaciones identificadas como conceptuales. | 10 |
| D4 | **Se elimina el díptico de áreas** y sus textos pasan a encabezar dos capítulos (A / B) dentro de "Trabajo seleccionado". | Era la pieza más parecida a una plantilla y repetía la sección siguiente. Ahora cada disciplina se presenta junto a su trabajo. | 7 |
| D5 | "Trabajo seleccionado" ocupa el ancho completo; el resto de secciones conserva el riel. | Rompe la monotonía de composición y da a los proyectos el mayor espacio de la página. | 7 |
| D6 | Home muestra los tres proyectos digitales: uno grande y un par desplazado. | Antes faltaba uno y las capturas eran pequeñas. | 7 |
| D7 | Hero: un botón primario; "Ver hoja de vida" y "Contactar" pasan a enlaces de texto. Se retira la rejilla con máscara radial. | Una sola acción principal. La rejilla era adorno sin función. | 1 |
| D8 | Cierre: se retira el resplandor; el correo se compone como texto grande subrayado; el resto son enlaces. | El correo es la acción real: se trata como tipografía, no como uno de cuatro botones. | 5 |
| D9 | Pie de página en una fila (identidad + navegación) y una línea base. | El pie de tres columnas era genérico. | 5 |
| D10 | **Navegación de 7 a 6 entradas**: "Código abierto" sale de la cabecera. | Menos ruido; en español la barra completa cabe ahora desde 1025 px (antes 1153 px). La página sigue existiendo, enlazada desde Ingeniería y desde el pie, y sus páginas resaltan "Ingeniería" en la cabecera. | 5 |
| D11 | Tecnologías como línea en mono separada por puntos, no como píldoras. | La dirección pide evitar insignias. | 6, 8 |
| D12 | Experiencia compacta como libro mayor con la fecha a la derecha; punto de acento solo en el cargo actual; el cargo deja de ir en azul. | El azul queda reservado a enlaces y estado. | 4, 12 |
| D13 | Retrato sin borde ni barra: imagen y pie en mono. | Tratamiento editorial en lugar de tarjeta. | 4 |
| D14 | Mapa de componentes del caso DSR como tabla reglada. | Eran cajas con fondo; ahora coincide con el resto del sistema. | 8 |
| D15 | Radio de los marcos de captura de 8 a 5 px (`--radius`). | Un solo radio en todo el sitio. | 11 |
| D16 | Corrección: en la página Digital, la fila alterna invierte también las columnas (4/7). | La captura caía en la columna estrecha. | — |

## Evaluadas y descartadas

| Idea | Motivo |
|---|---|
| Renombrar "Experiencias digitales" a "Digital Work" en la navegación. | La etiqueta también forma títulos de página y migas de pan; "Digital Experiences" es el término de marca de la frase principal. Con seis entradas ya cabe. |
| Eliminar la página "Código abierto". | Tiene contenido propio (DsrWebApp, UserPermissionApi). Solo sale de la cabecera. |
| Cambiar la paleta o añadir una serif display. | La paleta cumple AA y está documentada; una tercera familia rompería la regla de dos fuentes. |
| Sangrar la segunda línea de la frase del hero. | En español y en anchos medios fuerza un salto de línea adicional. |
| Capturas de DsrWebApp y UserPermissionApi, o extractos de código. | No hay capturas reales disponibles y no se inventan. Queda como siguiente paso (ver informe). |
| Navegación en riel lateral (ref. 5). | Cambiaría la arquitectura de todas las páginas sin beneficio claro para un sitio con casos de estudio anchos. |
| Animaciones de scroll adicionales. | La dirección pide contención. |
