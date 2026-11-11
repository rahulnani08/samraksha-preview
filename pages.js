/* shared: golden dust + reveal-on-scroll for inner pages */
(function(){
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce||!window.gsap){document.documentElement.classList.add('reduce');return}
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.batch('.rv',{start:'top 88%',once:true,onEnter:els=>gsap.to(els,{opacity:1,y:0,duration:1,ease:'power3.out',stagger:.12})});
const c=document.getElementById('dust');if(!c)return;const x=c.getContext('2d');let W,H;
const fit=()=>{W=c.width=innerWidth;H=c.height=innerHeight};fit();addEventListener('resize',fit);
const P=Array.from({length:60},()=>({x:Math.random(),y:Math.random(),r:1.05+Math.random()*3,s:.0004+Math.random()*.001,p:Math.random()*6}));
(function loop(t){x.clearRect(0,0,W,H);for(const d of P){d.y-=d.s;d.x+=Math.sin(t/1500+d.p)*.0004;if(d.y<-.02)d.y=1.02;
 x.globalAlpha=.26+.37*Math.sin(t/700+d.p)**2;x.fillStyle='#FFE9A8';x.beginPath();x.arc(d.x*W,d.y*H,d.r,0,7);x.fill()}requestAnimationFrame(loop)})(0);
})();
