# ALARSI — Propuesta v2.2 · Héroes con video

Actualización: 12 de noviembre de 2026.

## Cambios
- Portada y tres secciones: póster JPG proporcionado por ALARSI; video en `/video/` con **el mismo nombre base** que la imagen.
- Video HTML5 autoplay + muted + loop + playsinline. El póster permanece hasta que el video empieza a reproducirse; es el fallback si falta el MP4.
- Se mantienen menú overlay, contenido editorial v2, animación ambiental canvas, footer minimalista y llms.txt.
- Preload de la imagen hero de cada página, fecha de modificación 2026-11-12 en datos estructurados disponibles y sitemap.
- Sin `VideoObject` por ahora: faltan los archivos MP4 y las fechas reales de primera publicación de cada video. Evitamos inventar `uploadDate`.
- Sin menciones de SoluByte ni Paulina Dots; AXFRA conserva una referencia contextual.

## IMPORTANTE: archivos de video faltantes
En esta entrega solo se recibieron las cuatro imágenes JPG, no los videos. Lee `/video/README_VIDEOS.txt` para nombres exactos y coloca los MP4 homónimos en esa carpeta.

## Prueba
Puedes abrir los HTML sin servidor para comprobar layout e imágenes. Para probar autoplay de video, usa un servidor local HTTP (por ejemplo `python3 -m http.server 8000` en la carpeta). El autoplay puede estar condicionado por políticas del navegador y preferencias del usuario.

## Publicación
La fecha `dateModified` es una fecha de **modificación de esta propuesta**, no la fecha de grabación/publicación de los videos. Una vez publicados y verificadas sus URLs, se puede completar `VideoObject` con `uploadDate` real, `thumbnailUrl`, `contentUrl` y `duration` si está verificada.
