(function(){function init(el){var w=document.createElement('div');w.className='hs-w';el.parentNode.insertBefore(w,el);w.appendChild(el);
function btn(t,l,d){var b=document.createElement('button');b.type='button';b.className='hs-b '+(d<0?'l':'r');b.textContent=t;b.setAttribute('aria-label',l);b.onclick=function(){el.scrollBy({left:d*el.clientWidth*.8,behavior:'smooth'})};return b}
var L=btn('‹','Scroll left',-1),R=btn('›','Scroll right',1);w.appendChild(L);w.appendChild(R);el.setAttribute('tabindex','0');
function up(){var m=el.scrollWidth-el.clientWidth;L.hidden=!(m>4&&el.scrollLeft>4);R.hidden=!(m>4&&el.scrollLeft<m-4)}
el.addEventListener('scroll',up,{passive:true});if(window.ResizeObserver)new ResizeObserver(up).observe(el);addEventListener('resize',up);up();
var dn=false,sx=0,sl=0;el.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;dn=true;sx=e.clientX;sl=el.scrollLeft});
addEventListener('pointermove',function(e){if(!dn)return;if(Math.abs(e.clientX-sx)>4)el.classList.add('drag');el.scrollLeft=sl-(e.clientX-sx)});
addEventListener('pointerup',function(){dn=false;el.classList.remove('drag')})}
document.querySelectorAll('.hs').forEach(init)})();