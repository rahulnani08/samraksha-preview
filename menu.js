/* Samraksha: shared menu button + panel. Included on every page. */
(function(){
const HOME='index.html';
const here=location.pathname.split('/').pop()||HOME;
const links=[[HOME,'Home'],['about.html','About Us'],['export.html','Global Export'],[HOME+'#contact','Contact']];
const css=`
.mbtn{position:fixed;top:18px;right:18px;z-index:40;width:54px;height:54px;border-radius:50%;border:0;cursor:pointer;
 background:#9E1219;box-shadow:0 8px 22px rgba(120,20,10,.35);display:grid;place-items:center;padding:0}
.mbtn i{position:absolute;left:16px;right:16px;height:2.5px;border-radius:2px;background:#FFF8E1;transition:transform .35s,opacity .25s}
.mbtn i:nth-child(1){top:19px}.mbtn i:nth-child(2){top:26px}.mbtn i:nth-child(3){top:33px}
.mopen .mbtn i:nth-child(1){transform:translateY(7px) rotate(45deg)}.mopen .mbtn i:nth-child(2){opacity:0}
.mopen .mbtn i:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.mbtn:focus-visible{outline:3px solid #FFF8E1;outline-offset:3px}
.mpanel{position:fixed;inset:0;z-index:35;display:flex;flex-direction:column;justify-content:center;padding:0 8vw;
 background:radial-gradient(ellipse 70% 60% at 70% 40%,rgba(255,246,214,.7),rgba(255,236,170,0) 70%),linear-gradient(#F7C843,#EDA935);
 clip-path:circle(0 at calc(100% - 45px) 45px);transition:clip-path .6s cubic-bezier(.7,0,.2,1);visibility:hidden}
.mopen .mpanel{clip-path:circle(150% at calc(100% - 45px) 45px);visibility:visible}
.mpanel a.ml{display:block;width:max-content;font:600 clamp(2.2rem,5.5vw,4.6rem)/1.15 Fraunces,serif;color:#9E1219;text-decoration:none;
 opacity:0;transform:translateY(24px);transition:opacity .4s,transform .4s,color .2s}
.mopen .mpanel a.ml{opacity:1;transform:none}
.mpanel a.ml:nth-child(2){transition-delay:.2s,.2s,0s}.mpanel a.ml:nth-child(3){transition-delay:.26s,.26s,0s}
.mpanel a.ml:nth-child(4){transition-delay:.32s,.32s,0s}.mpanel a.ml:nth-child(5){transition-delay:.38s,.38s,0s}
.mpanel a.ml:hover,.mpanel a.ml[aria-current]{color:#5A2A08}
.mpanel a.ml[aria-current]::after{content:"";display:block;height:3px;width:40%;background:#9E1219;border-radius:2px}
.mpanel .mlogo{width:150px;margin-bottom:4vh}
.mpanel .mwa{margin-top:5vh;width:max-content;padding:13px 28px;border-radius:99px;background:#9E1219;color:#FFF8E1;font:700 1rem 'Nunito Sans',sans-serif;text-decoration:none}
body.mopen{overflow:hidden}
@media (max-width:860px){.mbtn{top:14px;right:14px;width:48px;height:48px}.mbtn i{left:14px;right:14px}
 .mbtn i:nth-child(1){top:16px}.mbtn i:nth-child(2){top:23px}.mbtn i:nth-child(3){top:30px}
 .mpanel{padding:0 28px}.mpanel .mlogo{width:110px}}`;
document.head.insertAdjacentHTML('beforeend','<style>'+css+'</style>');
const nav=links.map(([h,t])=>`<a class="ml" href="${h}"${h===here?' aria-current="page"':''}>${t}</a>`).join('');
document.body.insertAdjacentHTML('afterbegin',
 `<button class="mbtn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mpanel"><i></i><i></i><i></i></button>
 <nav class="mpanel" id="mpanel" aria-label="Main menu"><a href="${HOME}"><img class="mlogo" src="img/logo-clear.png" alt="Samraksha home"></a>${nav}
 <a class="mwa" href="https://wa.me/918686737327?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20Samraksha%20Atta." target="_blank" rel="noopener">WhatsApp us</a></nav>`);
const b=document.querySelector('.mbtn'),set=o=>{document.body.classList.toggle('mopen',o);b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')};
b.addEventListener('click',()=>set(!document.body.classList.contains('mopen')));
addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
document.querySelectorAll('.mpanel a.ml').forEach(a=>a.addEventListener('click',()=>set(false)));
})();
