(()=>{'use strict';
const loader=document.getElementById('pageLoader');addEventListener('load',()=>setTimeout(()=>loader?.classList.add('hide'),180));
const header=document.getElementById('siteHeader'),back=document.getElementById('backTop');function onScroll(){header?.classList.toggle('scrolled',scrollY>24);back?.classList.toggle('show',scrollY>450)}addEventListener('scroll',onScroll,{passive:true});onScroll();back?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
document.querySelectorAll('[data-current-year]').forEach(el=>el.textContent=new Date().getFullYear());
const onlineFallback='https://images.unsplash.com/photo-1703792684940-a05aa0f1188f?auto=format&fit=crop&w=1400&q=84';
document.querySelectorAll('img[src^="https://images.unsplash.com/"]').forEach(img=>{
  let tries=0;
  img.addEventListener('error',()=>{
    if(tries===0 && img.src!==onlineFallback){tries++;img.src=onlineFallback;return}
    img.classList.add('remote-image-failed');
    const holder=img.closest('.gallery-item,.look-card,.afro-service-image,.studio-media,.image-side,.about-collage');
    holder?.classList.add('remote-image-holder-failed');
  });
});

if(window.AOS)AOS.init({duration:650,once:true,offset:45});
if(window.Swiper&&document.querySelector('.looksSwiper'))new Swiper('.looksSwiper',{slidesPerView:1.15,spaceBetween:14,grabCursor:true,pagination:{el:'.swiper-pagination',clickable:true},breakpoints:{600:{slidesPerView:2.15},992:{slidesPerView:3.15}}});
const filters=document.querySelectorAll('[data-gallery-filter]');filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const cat=btn.dataset.galleryFilter;document.querySelectorAll('.gallery-grid>[data-cat]').forEach(item=>item.classList.toggle('hide',cat!=='all'&&item.dataset.cat!==cat));}));
document.querySelectorAll('.gallery-item[data-img]').forEach(btn=>btn.addEventListener('click',()=>{if(window.Swal)Swal.fire({imageUrl:btn.dataset.img,imageAlt:btn.querySelector('img')?.alt||'Barber gallery',showConfirmButton:false,showCloseButton:true,width:'min(960px, 94vw)',background:'#111',color:'#fff',customClass:{image:'rounded-3'}})}));
const d=document.getElementById('preferredDate');if(d){const today=new Date();today.setMinutes(today.getMinutes()-today.getTimezoneOffset());d.min=today.toISOString().slice(0,10)}
const service=document.getElementById('serviceSelect');if(service){const q=new URLSearchParams(location.search).get('service');if(q&&[...service.options].some(o=>o.value===q))service.value=q}
const nav=document.getElementById('mainNav');document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{if(nav?.classList.contains('show')&&window.bootstrap)bootstrap.Collapse.getOrCreateInstance(nav).hide()}));
})();