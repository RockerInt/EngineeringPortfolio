# Quality, SEO & Acceptance Criteria

## Calidad de contenido

- [ ] Headline y propuesta de valor coinciden con el posicionamiento aprobado.
- [ ] Se distinguen experiencia profesional, proyectos personales, open source y proyectos freelance.
- [ ] Evolution Technologies aparece como 2013–2018; no inventar meses.
- [ ] Fechas de Alwon permanecen pendientes hasta confirmación.
- [ ] Formación se presenta como estudios universitarios cursados, no como títulos.
- [ ] Idioma inglés figura como intermedio.
- [ ] Solo se muestran repositorios seleccionados.
- [ ] DSR.Architecture se describe como proyecto en desarrollo/preproducción.
- [ ] No hay métricas, logros, clientes o resultados inventados.
- [ ] No se divulga información confidencial de Alwon.
- [ ] Los enlaces externos funcionan.
- [ ] Los CV descargables están revisados y son coherentes con la web.

## UX y diseño

- [ ] Diseño responsive mobile/tablet/desktop.
- [ ] Jerarquía visual clara.
- [ ] La página principal comunica el perfil en pocos segundos.
- [ ] Las dos líneas profesionales están diferenciadas y conectadas.
- [ ] Los proyectos importantes tienen suficiente contexto.
- [ ] No se depende de animaciones para entender el contenido.
- [ ] Foco visible y navegación por teclado.
- [ ] Menú móvil accesible.
- [ ] Imágenes con dimensiones y alt.
- [ ] Estados hover/focus/active consistentes.

## Accesibilidad

- [ ] HTML semántico.
- [ ] Un H1 principal por página.
- [ ] Orden correcto de headings.
- [ ] Contraste AA como objetivo.
- [ ] Formularios con labels si existen.
- [ ] Enlaces con texto descriptivo.
- [ ] `prefers-reduced-motion`.
- [ ] No transmitir significado solo mediante color.

## SEO

- [ ] Title y meta description únicos por página.
- [ ] Canonical correcto.
- [ ] Open Graph.
- [ ] Sitemap.
- [ ] robots.txt.
- [ ] JSON-LD Person con datos verificados.
- [ ] `lang` correcto por idioma.
- [ ] Hreflang si aplica.
- [ ] No indexar rutas temporales o previews no deseadas.

## Rendimiento

Objetivos orientativos:
- LCP < 2.5 s.
- INP < 200 ms.
- CLS < 0.1.
- Minimizar JavaScript cliente.
- Imágenes optimizadas y lazy loading donde corresponda.
- Evitar fuentes y dependencias innecesarias.

No declarar estos objetivos como alcanzados sin medirlos.

## Ingeniería

- [ ] `astro check` o verificación equivalente sin errores.
- [ ] `npm run build` exitoso.
- [ ] Sin errores de consola críticos.
- [ ] Sin enlaces rotos internos.
- [ ] Rutas de CV y assets válidas.
- [ ] TypeScript estricto.
- [ ] Sin secretos en el repo.
- [ ] Sin dependencias innecesarias.
- [ ] README de desarrollo y deployment actualizado.

## Entrega

Claude Code debe entregar:
1. Resumen de arquitectura implementada.
2. Árbol de archivos principal.
3. Rutas construidas.
4. Decisiones de diseño.
5. Comandos para ejecutar y construir.
6. Validaciones ejecutadas y resultados reales.
7. Datos que siguen pendientes.
8. Instrucciones para sustituir placeholders por screenshots o assets reales.
