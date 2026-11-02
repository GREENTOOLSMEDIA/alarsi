# Huawei Cloud · SoluByte — maqueta para revisión

Abrir `index.html` en navegador. No necesita WordPress, PHP ni servidor para verla. Publicación de revisión: subir **todo el contenido de esta carpeta** a un directorio protegido en ALARSI. Una vez aprobada, copiar al hosting final (HTML/CSS/JS); se puede añadir procesamiento de formularios con PHP.

## Imágenes
Consultar `IMAGENES_GROK.md`; copiar cuatro JPG a `assets/images/` con nombres exactos. No es necesario editar código: el script detecta los archivos y sustituye los placeholders. La referencia visual aportada por el cliente no se incorporó como fotografía del sitio.

## Puntos pendientes antes de producción
1. Confirmar servicios Huawei Cloud específicos, relación comercial, marcas y autorización de uso del dominio/nombre.
2. Revisar con SoluByte afirmaciones comerciales, alcance de evaluaciones, CTA y textos.
3. Confirmar que `contacto@solubyte.com` recibe consultas y asigna responsable comercial. El CTA actual abre un correo; no se finge que haya un formulario funcional.
4. Crear formulario real con PHP o proveedor seguro, protección antispam, aviso de privacidad y medición de conversiones, si se elige ese canal.
5. Actualizar robots: esta maqueta tiene `noindex,nofollow,noarchive`, para evitar que se indexe en ALARSI. En producción cambiar a `index,follow` y revisar robots.txt / sitemap.
6. Validar JSON-LD de Schema.org, identidad principal `https://solubyte.com/#organization` y relación con saprise.cl; integrar el mismo ID desde el sitio corporativo para un grafo consistente. El esquema no garantiza ranking.
7. Revisar URLs canónicas, Open Graph, rendimiento móvil, accesibilidad y contenido definitivo después de migrar.
8. Los textos no afirman certificaciones, partnership específico ni capacidades verificadas fuera del catálogo compartido.

## Diseño
Paleta: petróleo #183F50; acero #547789; rojo tierra #A65249; marfil #F5F3EF. Estructura similar a saprise.cl (hero, servicios, beneficios, metodología, contacto), con presentación propia de Huawei Cloud y marca SoluByte.

## Criterio editorial SEO (v1.1)
Se conserva la estructura comercial inspirada en saprise.cl, con preguntas en introducción, continuidad, migración y FinOps cuando corresponde a intención de búsqueda o problema real. El H1 identifica Huawei Cloud Chile; servicios y CTA usan titulares directos. Las preguntas son hipótesis de contenido sujetas a contraste posterior con Search Console/consultas reales, no keywords con volumen validado.
