# Auditoría visual

Estado auditado: commit `996ebd2` (lo publicado en https://engineering.jjimenez.net/), revisado en navegador real (Chrome headless) a 1440×1000, 1280×800, 1024×768 y 390×844. Capturas en `screenshots/before/`.

## Diagnóstico por área

| Área | Estado previo | Veredicto |
|---|---|---|
| Identidad visual | Oscuro, tipográfico, reglas finas, dos tonos (azul = ingeniería, arena = digital). | Sólida. Se conserva. |
| Tipografía y jerarquía | Escala fluida con `clamp()`, Inter + JetBrains Mono, buen salto display/cuerpo. | Sólida. Ajustes menores. |
| Layout y composición | Todas las secciones usaban la misma rejilla 3/9 (riel + contenido). | Monótono: sin variación de composición entre secciones. |
| Espaciado y ritmo | Ritmo vertical consistente; hueco excesivo entre la frase del hero y su pie. | Bueno, con un ajuste. |
| Color y contraste | Paleta documentada; Lighthouse a11y 100. | Correcto. Dos degradados decorativos (hero y CTA). |
| Navegación | 7 entradas; en español obligaba a colapsar a menú por debajo de 1152 px. | Más compleja de lo necesario. |
| Hero | Frase de marca como display, tres botones de peso casi igual, rejilla "blueprint" con máscara radial. | Fuerte, pero con jerarquía de acciones plana y un adorno sin función. |
| Proyectos | Ingeniería: solo filas de texto. Digital: dos capturas pequeñas. Antes, un díptico de "áreas" en caja con degradado y letras contorneadas. | El punto más débil: el trabajo no era el centro visual y el díptico era lo más parecido a una plantilla. |
| Experiencia | Línea de tiempo con fecha en riel; stack como fila de píldoras; cargo en azul. | Legible; píldoras y color sobran. |
| Perfil | Retrato dentro de una tarjeta con borde y barra de pie. | Tratamiento de "card", no editorial. |
| Responsive | Sin desbordes de 320 a 1440. | Correcto. |
| Accesibilidad | Semántica, foco visible, skip link, `prefers-reduced-motion`. | Correcto. Se conserva. |
| Consistencia | Radio 8 px en marcos frente a 5 px en el resto; componentes del caso DSR como cajas con fondo. | Pequeñas inconsistencias. |

## Diferencias entre la dirección documentada y la implementación

- `03_DESIGN_SYSTEM.md` pide "secciones con variación de composición": todas compartían la misma rejilla.
- Pide evitar "tarjetas idénticas repetidas": el díptico de áreas y el mapa de componentes eran cajas.
- Pide usar "composiciones tipográficas o abstractas" cuando no hay capturas reales: los proyectos de ingeniería no tenían ningún material visual.

## Las 10 oportunidades, por impacto

1. **Ingeniería sin material visual.** El trabajo técnico se presentaba solo como texto.
2. **Díptico de áreas en caja con degradado**, que además repetía lo que la sección de trabajo ya decía.
3. **Trabajo digital con poca presencia**: dos capturas pequeñas en Home, la tercera ausente.
4. **Misma composición en todas las secciones.**
5. **Jerarquía de acciones del hero**: tres botones compitiendo.
6. **Cierre genérico**: CTA con resplandor y cuatro botones; pie de tres columnas de plantilla.
7. **Navegación de 7 entradas.**
8. **Píldoras de tecnología** en experiencia y casos de estudio.
9. **Retrato como tarjeta.**
10. **Detalle del caso DSR.Architecture**: componentes en cajas; la imagen alterna quedaba en la columna estrecha en la página Digital (defecto de rejilla).

## Lo que se conserva

Paleta y tokens, par tipográfico, frase de marca como display, riel con numeración de sección, hoja de especificación del hero, habilidades como líneas tipográficas, marcos con el host real sobre capturas reales, enfoque estático sin JS (salvo el menú móvil).
