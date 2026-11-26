# Dirección visual

> Reemplazada por el rediseño con Hallmark (tema Blueprint). El sistema vigente está en `design.md`. Este documento describe el estado de la rama `design/visual-refinement`.

**Editorial Engineering.** El sitio se compone como una publicación técnica: tipografía como instrumento principal, filetes como estructura, y el trabajo mostrado con material auténtico. Deriva de `docs/context/03_DESIGN_SYSTEM.md` y de la investigación en `DESIGN_REFERENCES.md`.

## Principios

1. **La tipografía hace el trabajo.** La jerarquía sale de tamaño, peso y medida. Un salto grande entre display y cuerpo, sin tamaños intermedios sueltos (ref. 1, 11).
2. **Filetes, no cajas.** La estructura se dibuja con líneas de 1 px. Un borde completo solo aparece cuando significa algo: un marco de captura real o una capa del diagrama (ref. 6, 8).
3. **El trabajo es el centro.** Cada línea de trabajo tiene su propia composición; ninguna rejilla de tarjetas idénticas (ref. 7).
4. **Material auténtico.** Capturas reales para lo digital; diagramas conceptuales, declarados como tales, para la ingeniería. Nunca un mockup que aparente ser un producto (ref. 2, 10).
5. **Un acento por línea de trabajo.** Azul para ingeniería, arena para experiencias digitales. El color señala; no decora.
6. **Estado explícito.** "En desarrollo" y "Planeado" se muestran con el mismo cuidado que lo terminado (ref. 9).
7. **Contención.** Sin degradados, resplandores, sombras ni píldoras. Movimiento solo de entrada y de hover.

## Tokens

Sin cambios de paleta. La paleta documentada cumple contraste AA y no había motivo para tocarla.

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#090B10` | Fondo |
| `--surface` | `#111722` | Barra de marcos, hover de filas |
| `--border` / `--border-strong` | `#202938` / `#2E3A4F` | Filetes / filete de apertura y marcos |
| `--text` / `--muted` | `#E8EDF5` / `#929EAF` | Texto primario / secundario |
| `--accent` | `#65A8FF` | Línea de ingeniería, estado actual |
| `--warm` | `#E3B778` | Línea digital, "planeado" |

Tipografía: Inter Variable (contenido) y JetBrains Mono Variable (etiquetas, metadatos, stack, diagrama), con cifras tabulares en mono. Escala: `--text-xs` … `--text-hero`, toda en `clamp()`.

## Composición por sección

| Sección | Composición |
|---|---|
| Hero | Nombre y rol en una línea de metadatos; frase de marca como display en dos pesos; pie asimétrico 7/5 con propuesta de valor y hoja de especificación. Un botón primario, dos enlaces de texto. |
| Perfil | Riel con retrato + columna de texto. |
| Trabajo seleccionado | Ancho completo, dos capítulos (A / B). A: diagrama 7 + texto 5, luego filas numeradas. B: captura grande 7/4, luego par desplazado. |
| Experiencia | Libro mayor: organización, cargo, fecha a la derecha; punto de acento en el cargo actual. |
| Habilidades | Líneas tipográficas agrupadas, separadas por barras. |
| Cierre | Titular, y el correo compuesto como tipo grande; enlaces de texto. Pie de una fila. |

## Responsive

No se reduce el escritorio: cada composición cambia de estructura.

- **≥ 1025 px:** navegación completa (6 entradas); rejillas 7/5 y 3/6/3.
- **≤ 1024 px:** menú desplegable; el pie del hero se mantiene en dos columnas hasta 960 px.
- **< 960 px:** todo a una columna; el diagrama apila etiqueta sobre lista; los capítulos conservan su filete y letra.
- **< 640 px:** frase de marca a 2.5 rem en cuatro líneas; objetivos táctiles ≥ 44 px.

## Movimiento

`rise` en la entrada del hero y `reveal` ligado al scroll (CSS puro, `animation-timeline: view()`), ambos anulados con `prefers-reduced-motion`. Hover: cambio de color y 2–4 px de desplazamiento en flechas. Nada más.
