/* ALARSI — Animated hero: reinterpretación controlada de los dos canvas originales.
   Sin librerías externas; se detiene fuera de pantalla y ante movimiento reducido. */
(() => {
  const stage = document.querySelector('.animated-hero-stage');
  if (!stage) return;
  const waveCanvas = document.createElement('canvas');
  const waveHost = stage.querySelector('.hero-wave');
  const glowCanvas = stage.querySelector('.hero-glow');
  const wc = waveCanvas.getContext('2d', {alpha:true});
  const gc = glowCanvas.getContext('2d', {alpha:true});
  if (!wc || !gc) return;
  waveHost.appendChild(waveCanvas);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const curves = Array.from({length:9},(_,i) => ({
    seed:(i+.4)/9,
    phase:i*1.57,
    amplitude:.3+((i*17)%11)/16,
    spread:1.8+(i%4)*.7,
    color:[[255,73,60],[85,219,155],[94,123,255]][i%3]
  }));
  let width=0,height=0,wHeight=0,raf=0,visible=true,active=true,start=0;
  const dpr=() => Math.min(window.devicePixelRatio||1,2);
  function resize(){
    const r=stage.getBoundingClientRect();
    width=Math.max(1,Math.round(r.width));height=Math.max(1,Math.round(r.height));
    wHeight=Math.max(1,Math.round(waveHost.getBoundingClientRect().height));
    let ratio=dpr();
    waveCanvas.width=Math.round(width*ratio);waveCanvas.height=Math.round(wHeight*ratio);
    glowCanvas.width=Math.round(width*ratio);glowCanvas.height=Math.round(height*.82*ratio);
    waveCanvas.style.width=width+'px';waveCanvas.style.height=wHeight+'px';
    wc.setTransform(ratio,0,0,ratio,0,0);gc.setTransform(ratio,0,0,ratio,0,0);
    if(reduce.matches) draw(0);
  }
  function draw(time){
    const t=time*.001;
    wc.clearRect(0,0,width,wHeight);
    wc.globalCompositeOperation='lighter';
    curves.forEach((c,i)=>{
      const center=(.22+.56*c.seed)*width;
      const cycle=t*.30+c.phase;
      const amp=(.16+.84*Math.abs(Math.sin(cycle)))*c.amplitude*wHeight*.43;
      const red=c.color;
      const gradient=wc.createLinearGradient(0,0,0,wHeight);
      gradient.addColorStop(0,`rgba(${red.join(',')},0)`);
      gradient.addColorStop(.5,`rgba(${red.join(',')},.16)`);
      gradient.addColorStop(1,`rgba(${red.join(',')},0)`);
      wc.fillStyle=gradient;
      for(const side of [-1,1]){
        wc.beginPath();let first=0;
        for(let x=0;x<=width+12;x+=12){
          const rel=(x-center)/Math.max(width*.22,1);
          const envelope=Math.pow(1/(1+Math.pow(c.spread*rel,2)),2);
          const y=wHeight*.5+side*amp*envelope;
          if(x===0){wc.moveTo(x,y);first=y;}else wc.lineTo(x,y);
        }
        wc.lineTo(width,wHeight*.5);wc.lineTo(0,wHeight*.5);wc.closePath();wc.fill();
      }
    });
    wc.globalCompositeOperation='source-over';
    const cx=width*.5,cy=height*.42;
    const hue=(t*9)%360;
    const radius=Math.max(10,Math.min(width,height)*.53);
    gc.clearRect(0,0,width,height);
    const grad=gc.createRadialGradient(cx,cy,0,cx,cy,radius);
    grad.addColorStop(0,`hsla(${hue},95%,59%,.34)`);
    grad.addColorStop(.48,`hsla(${(hue+65)%360},85%,52%,.17)`);
    grad.addColorStop(1,'rgba(0,0,0,0)');
    gc.fillStyle=grad;gc.fillRect(0,0,width,height);
  }
  function tick(t){raf=0;if(!active||!visible||reduce.matches)return;draw(t);raf=requestAnimationFrame(tick)}
  function update(){if(raf){cancelAnimationFrame(raf);raf=0}if(active&&visible&&!reduce.matches)raf=requestAnimationFrame(tick);else draw(0)}
  document.addEventListener('visibilitychange',()=>{active=!document.hidden;update()});
  if('IntersectionObserver' in window){new IntersectionObserver(e=>{visible=e[0].isIntersecting;update()},{threshold:0}).observe(stage)}
  if('ResizeObserver' in window){new ResizeObserver(()=>resize()).observe(stage)}else window.addEventListener('resize',resize,{passive:true});
  if(reduce.addEventListener)reduce.addEventListener('change',update);
  resize();update();
})();
