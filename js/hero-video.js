/* ALARSI v2.2 — Hero videos, no third-party dependencies. */
(() => {
  const stage = document.querySelector('.animated-hero-stage');
  const video = stage?.querySelector('.hero-video');
  if (!stage || !video) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sources = [...video.querySelectorAll('source')];
  function showPoster() { stage.classList.remove('is-video-playing'); }
  function pause() { video.pause(); showPoster(); }
  function tryPlay() {
    if (reduced.matches || document.hidden) { pause(); return; }
    const result = video.play();
    if (result?.catch) result.catch(showPoster);
  }
  function handleMotion() {
    if (reduced.matches) pause();
    else tryPlay();
  }
  video.addEventListener('playing', () => {
    if (!reduced.matches) stage.classList.add('is-video-playing');
  });
  video.addEventListener('error', showPoster);
  sources.forEach(el => el.addEventListener('error', showPoster));
  video.addEventListener('stalled', showPoster);
  document.addEventListener('visibilitychange', () => { document.hidden ? pause() : tryPlay(); });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) pause(); else tryPlay();
    }, {threshold:0.04});
    observer.observe(stage);
  } else tryPlay();
  if (reduced.addEventListener) reduced.addEventListener('change', handleMotion);
  else reduced.addListener(handleMotion);
  handleMotion();
})();
