# Bruno Jauregui — portfolio personal

Sitio editorial bilingüe con Next.js App Router, TypeScript, React y CSS nativo. Inglés en `/`, español en `/es`. Sin CMS, servicios de tracking, formularios ni credenciales. Las 14 páginas se generan estáticamente; la navegación móvil, el carrusel y los videos son componentes cliente.

## Desarrollo

Usar Node.js 22 LTS o superior (desarrollo verificado con Node 24.16.0) y npm.

```powershell
npm ci
npm run dev
```

Abrir http://127.0.0.1:3000. El servidor local escucha únicamente en loopback.

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

Las versiones resueltas están en `package-lock.json`. Usar `npm ci` para reproducirlas. No se requiere una API key.

## Validación en navegador

```powershell
npx playwright install chromium
npm run build
npm run test:e2e
```

Playwright arranca su propio servidor de producción en el puerto **3107** y no reutiliza servidores ajenos. Comprueba las 14 páginas en 375, 390, 430, 768, 1024, 1440 y 1920 px, ausencia de overflow, metadatos, consola, enlaces internos, 404, cambio de idioma, teclado, menú móvil y movimiento reducido. Axe revisa WCAG A/AA en 390 y 1440 px. Las capturas completas se guardan en `qa/screenshots/` y el reporte navegable en `playwright-report/` (ambos ignorados en Git).

Para previsualizar mientras otra aplicación ocupa el puerto 3000: `npm run start -- --port 3109`. Para dar formato al código: `npm run format`; para verificarlo: `npm run format:check`.

## Estructura

```text
app/
  [[...segments]]/page.tsx  Resolución de las 14 rutas y SSG
  [[...segments]]/layout.tsx Idioma del documento y Geist local
  globals.css              Sistema visual y responsive
  print.css                Impresión
  [[...segments]]/not-found.tsx 404 bilingüe
  og/[lang]/route.tsx       OpenGraph 1200 × 630 por idioma
  icon.svg                 Favicon tipográfico
  robots.ts / sitemap.ts   SEO
components/
  navigation.tsx           Menú móvil y selector EN / ES
  primitives.tsx           MediaFrame, enlaces y labels
  home.tsx                 Portada y secciones compartidas
  pages.tsx                Capítulos internos
  footer.tsx               Contacto y redes verificadas
data/
  site.ts                  Perfil, traducciones, rutas, SEO, redes
  projects.ts              Proyectos y textos de los casos
  pages.ts                 Traducciones de los capítulos internos
  media.ts                 Rutas, ratios y alt por idioma
lib/metadata.ts            Origen público, canonical y hreflang
public/images/            Fotografías y capturas reales
tests/site.spec.ts         QA funcional y accesibilidad
```

## Actualizar contenido y traducciones

Los datos usan `t("English", "Español")` u objetos `{ en, es }`. Editar `data/site.ts` para portada, perfil, capacidades, redes y SEO; `data/projects.ts` para casos; `data/media.ts` para assets; `data/pages.ts` para los textos editoriales de páginas internas. No hay traducción automática ni una redirección que impida elegir idioma. El selector conserva el capítulo actual.

El semestre y las cifras sociales son una fotografía del contenido proporcionado, no datos en tiempo real. Actualizarlos manualmente cuando corresponda.

## Reemplazar imágenes

Consultar **CONTENT_NEEDED.md**. Copiar cada imagen real a la ruta registrada en `data/media.ts`. `MediaFrame` detecta su existencia durante el build y muestra automáticamente `next/image`; de lo contrario conserva un espacio claramente rotulado como pendiente. **Volver a ejecutar el build después de agregar archivos.** Las rutas son sensibles a mayúsculas en Vercel/Linux.

Actualizar el `alt` en ambos idiomas para describir la fotografía real. Usar WebP/AVIF cuando sea posible y comprimir antes de publicar. Los contenedores reservan el espacio para evitar saltos de layout. `object-fit: cover` puede ajustarse en CSS para un recorte particular. La portada tiene tratamiento desaturado suave.

No se han usado imágenes de stock, retratos sintéticos, capturas de productos ficticios ni identidades de clientes inventadas. El logo oficial de Tekapto y su identidad se usan únicamente dentro de su slide/caso. Las figuras geométricas son marcadores de posición, no proyectos de branding.

## Añadir proyectos

1. Añadir datos confirmados en `data/projects.ts`, siempre en ambos idiomas.
2. Registrar assets con alt y ratio en `data/media.ts`.
3. Para una página nueva, agregar su ruta en `routes` y su metadata en `seo` (`data/site.ts`).
4. Crear la composición en `components/pages.tsx` y registrarla en el mapa `pages` del router.
5. Añadir un enlace visible donde corresponda. Las rutas registradas entran automáticamente en SSG, sitemap y tests bilingües.

Para nuevas entradas de la galería web o diseño, incluir nombre real, categoría, rol, año confirmado, alcance y enlace autorizado. No publicar placeholders como trabajo realizado.

## Desplegar en Vercel

1. Subir este proyecto a un repositorio propio y usar **Import Project** en Vercel.
2. Elegir el preset **Next.js**, raíz del repositorio, comando `npm run build`. Vercel configura su ejecución; el `start` local no se utiliza para su servidor.
3. Configurar `NEXT_PUBLIC_SITE_URL` con el origen HTTPS definitivo, sin ruta ni `/` final. Ejemplo de formato: `https://` seguido de tu dominio real. No hace falta ninguna clave privada.
4. Configurar la variable para producción y desplegar. Después de cambiar dominio, volver a hacer build.
5. Verificar `/robots.txt`, `/sitemap.xml`, `/og/en`, `/og/es`, canonical y hreflang contra el dominio final.

Si no se configura `NEXT_PUBLIC_SITE_URL`, se usa `VERCEL_PROJECT_PRODUCTION_URL` cuando existe. En desarrollo se usa `http://localhost:3000`, con `noindex` y sitemap vacío. Las previews de Vercel también llevan `noindex` y bloqueo en robots. No se ha inventado un dominio público ni se ha desplegado el sitio.

## Antes de publicar

- Incorporar fotografías, capturas e identidades autorizadas; confirmar el contenido pendiente de los casos.
- Revisar las rutas sociales de `social` en `data/site.ts`. Los enlaces vacíos se omiten, y Contacto abre LinkedIn mientras no haya email.
- Confirmar semestre, cifras aproximadas de seguidores y contexto de las ~500K vistas.
- Configurar el dominio final y repetir build y QA con los assets reales.

El código está preparado para despliegue. La publicación editorial definitiva depende del material real pendiente.

## Referencias técnicas

- [Next.js: generación estática](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- [Next.js: metadata y alternates](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Next.js: imágenes OpenGraph](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)

## Revisión con assets reales — septiembre 2026

- Rutas nuevas: /work/web-development y /work/brand-design, con equivalentes /es. Las rutas antiguas /work/web y /design redirigen con 308.
- Selected Work tiene exactamente cuatro categorías, definidas en data/work.ts: Tekapto, Web Development, Brand Design y Growth & Marketing.
- components/work-carousel.tsx usa desplazamiento nativo y CSS scroll snap, flechas, índice, teclado, arrastre con mouse y swipe. No hay autoplay ni captura del scroll vertical.
- components/showcase-video.tsx carga el MP4 solo al pulsar reproducir. Usa muted y playsInline, pausa fuera del viewport, al ocultar la pestaña y al reproducir otro video.
- data/showcase.ts contiene las siete demos, sus nombres observados, URLs y proyectos oficiales. components/professional-pages.tsx compone los casos Tekapto y Web Development.
- app/work.css contiene la ampliación editorial. La identidad Tekapto queda encapsulada en .tekapto-scope; Geist y la paleta personal no se cambian.
- public/work/ contiene los medios locales; public/images/bruno/hero-professional.webp es el retrato aportado por Bruno. ASSET_MAP.md registra la procedencia.
- Los videos finales son H.264, 1280 px de ancho, 24 fps, sin audio, CRF 27 y faststart. En conjunto pesan 3.05 MB decimales. Los originales quedan fuera de public/.
- Los scripts qa/inspect-*.mjs y qa/collect-assets.mjs documentan la captura puntual de fuentes. No se ejecutan en el sitio. collect-assets descarga videos originales: si se reutiliza, volver a optimizarlos antes de publicar.
- tests/carousel.spec.ts añade controles, swipe emulado con CDP, ausencia de interferencia con scroll vertical, reproducción local y redirecciones.
