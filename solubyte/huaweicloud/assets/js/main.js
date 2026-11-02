"use strict";
const btn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navigation');
if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
// Las fotos ya se pintan directamente con CSS; no requieren JavaScript.
// El navegador gestiona el vídeo y el poster nativamente.
const heroFilm=document.querySelector('.hero-cinematic .hero-video');
if(heroFilm){
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{if(motion.matches){heroFilm.pause();}else{heroFilm.play().catch(()=>{});}};
  motion.addEventListener?.('change',sync);sync();
}
