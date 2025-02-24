import{a as g,A as m,S as c,N as u,K as a,P as p,b as d}from"./assets/vendor-4b3f34ab.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function y(){document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".js_toggle_btn").forEach(n=>{n.addEventListener("click",()=>{const s=n.parentElement,o=s.querySelector(".js_text_content"),e=s.querySelector(".js_ellipsis");o.classList.contains("expanded")?(o.classList.remove("expanded"),o.style.maxHeight="100px",n.textContent="more",e.style.opacity=1):(o.classList.add("expanded"),o.style.maxHeight=o.scrollHeight+"px",n.textContent="close",e.style.opacity=0)})})})}function b(){g.init({once:!1,mirror:!1,easing:"ease-out-cubic",offset:100,duration:500,anchorPlacement:"top-bottom"})}const v=()=>{const t=document.querySelectorAll(".burger__btn"),n=document.querySelector(".burger__wrapper"),s=document.querySelectorAll(".burger__item"),o=document.querySelector(".burger__open"),e=document.querySelector(".overlay"),r=()=>{n.classList.toggle("showMenu"),o.classList.toggle("is-hidden"),e.classList.toggle("is-visible"),document.body.classList.toggle("no-scroll")};t.forEach(i=>{i.addEventListener("click",r)}),s.forEach(i=>{i.addEventListener("click",r)}),e.addEventListener("click",r)};function S(){document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("cookie_banner"),n=document.getElementById("accept_cookies"),s=document.getElementById("decline_cookies");localStorage.getItem("cookiesAccepted")!=="true"&&t.classList.remove("hide"),n.addEventListener("click",function(){localStorage.setItem("cookiesAccepted","true"),t.classList.add("hide")}),s.addEventListener("click",function(){localStorage.setItem("cookiesAccepted","false"),t.classList.add("hide")})})}function w(){const t=Array.from(document.querySelectorAll(".accordion-container"));new m(t,{duration:300,showMultiple:!0})}const h=()=>{document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".header__container");if(!t){console.error("Header element not found");return}const n=()=>{window.scrollY>10?t.classList.add("scrolled"):t.classList.remove("scrolled")};n(),window.addEventListener("scroll",n)})},_=()=>{document.querySelectorAll(".nav__link").forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const s=this.getAttribute("href").substring(1),o=document.getElementById(s);if(o){const e=window.innerWidth<1200?80:120,i=o.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:i,behavior:"smooth"})}})})},E=({containerSelector:t,paginationSelector:n,nextButtonSelector:s,prevButtonSelector:o})=>{const e=new c(t,{modules:[u,a,p,d],pagination:{el:n,clickable:!0},navigation:{nextEl:s,prevEl:o},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},centeredSlides:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:16},1200:{slidesPerView:4,spaceBetween:24,centeredSlides:!1}},autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},initialSlide:0,speed:1e3}),r=document.querySelectorAll(".benefits__slide");let i=null;r.forEach(l=>{l.addEventListener("click",()=>{i&&i!==l&&i.classList.remove("flipped"),l.classList.contains("flipped")?(l.classList.remove("flipped"),i=null,e.autoplay.start()):(l.classList.add("flipped"),i=l,e.autoplay.stop())})}),e.on("slideChangeTransitionStart",()=>{document.querySelectorAll(".benefits__slide.swiper-slide.flipped").forEach(l=>{l.classList.remove("flipped")}),i=null}),e.on("slideChange",()=>{const l=e.isEnd,f=e.isBeginning;l?(e.autoplay.stop(),e.params.autoplay.reverseDirection=!0,e.autoplay.start()):f&&(e.autoplay.stop(),e.params.autoplay.reverseDirection=!1,e.autoplay.start())})},L=(t,n)=>{const s=document.querySelector(t);if(!s)return;const o=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(E(n),o.disconnect())})},{root:null,rootMargin:"0px",threshold:.1});o.observe(s)},B=({containerSelector:t,paginationSelector:n,nextButtonSelector:s,prevButtonSelector:o})=>{const e=new c(t,{modules:[u,a,p,d],pagination:{el:n,clickable:!0},navigation:{nextEl:s,prevEl:o},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,spaceBetween:16,centeredSlides:!0,breakpoints:{1200:{slidesPerView:4,spaceBetween:24,centeredSlides:!1}},autoplay:{delay:2500,disableOnInteraction:!0,pauseOnMouseEnter:!0},initialSlide:0,speed:1e3});e.on("slideChange",()=>{const r=e.isEnd,i=e.isBeginning;r?(e.autoplay.stop(),e.params.autoplay.reverseDirection=!0,e.autoplay.start()):i&&(e.autoplay.stop(),e.params.autoplay.reverseDirection=!1,e.autoplay.start())})},x=(t,n)=>{const s=document.querySelector(t);if(!s)return;const o=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(B(n),o.disconnect())})},{root:null,rootMargin:"0px",threshold:.1});o.observe(s)},I=({containerSelector:t})=>{new c(t,{modules:[a,d],keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},slidesPerView:1,spaceBetween:16,centeredSlides:!0,breakpoints:{1200:{slidesPerView:3,spaceBetween:24,centeredSlides:!1}},autoplay:{delay:1e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,initialSlide:0,speed:3e3})},k=(t,n)=>{const s=document.querySelector(t);if(!s)return;const o=new IntersectionObserver(e=>{e.forEach(r=>{r.isIntersecting&&(I(n),o.disconnect())})},{root:null,rootMargin:"0px",threshold:.1});o.observe(s)};document.addEventListener("DOMContentLoaded",()=>{v()});b();h();_();S();y();w();L(".benefits",{containerSelector:".benefits__slider",paginationSelector:".benefits__pagination",nextButtonSelector:".benefits__button-next",prevButtonSelector:".benefits__button-prev"});x(".gallery",{containerSelector:".gallery__slider",paginationSelector:".gallery__pagination",nextButtonSelector:".gallery__button-next",prevButtonSelector:".gallery__button-prev"});k(".reviews",{containerSelector:".reviews__slider"});
//# sourceMappingURL=commonHelpers.js.map
