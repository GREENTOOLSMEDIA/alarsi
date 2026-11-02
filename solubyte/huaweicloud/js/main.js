'use strict';
const btn=document.querySelector('.menu-toggle');const nav=document.querySelector('.navigation');
if(btn&&nav){btn.addEventListener('click',()=>{let open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
// Si una foto JPG de Grok existe, se muestra; si no, permanece el placeholder editorial.
document.querySelectorAll('.media-slot[data-file]').forEach(node=>{const path='assets/images/'+node.dataset.file;const im=new Image();im.onload=()=>{node.style.backgroundImage=`url("${path}")`;node.classList.add('has-image');const note=node.querySelector('.media-mark small');if(note)note.style.display='none';};im.src=path;});

// El video es opcional: si falta el archivo, queda la foto 16:9 o el placeholder.
const heroFilm=document.querySelector('.hero-cinematic .hero-video');
if(heroFilm){
  heroFilm.addEventListener('loadeddata',()=>{heroFilm.closest('.hero-cinematic')?.classList.add('video-ready');});
  heroFilm.addEventListener('error',()=>{heroFilm.closest('.hero-cinematic')?.classList.remove('video-ready');});
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){heroFilm.pause();}
}
