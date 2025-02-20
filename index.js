import{a as u,S as d,i as l}from"./assets/vendor-C4Y7kCgW.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="48847190-ee1f10217269e20f054d6fa7c",f="https://pixabay.com/api/";function p(s){return u.get(f,{params:{key:`${m}`,q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}function g(s){const{webformatURL:r,largeImageURL:t,tags:n,likes:e,views:o,comments:a,downloads:c}=s;return`<li class="gallery-item">
    <a class="gallery-link" href="${t}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${n}"
    />
    </a>
    <table class="photo-info">
              <tr class="name-info" >
                <td>Likes <br>
                <span class="total">${e}</span></td>
                <td>Views<br>
                <span class="total">${o}</span></td>
                <td>Comments<br>
                <span class="total">${a}</span></td>
                <td>Downloads<br>
                <span class="total">${c}</span></td>
              </tr>
            </table>    
         </li>`}function y(s){return s.map(g).join("")}const h=document.querySelector(".form"),i=document.querySelector(".gallery"),b=new d(".gallery a",{});h.addEventListener("submit",q);function q(s){s.preventDefault(),i.innerHTML="";const r=s.target.elements.query.value.trim();if(!r){l.error({titleColor:"white",timeout:2e3,message:"Please , enter your query!"});return}document.querySelector(".loader").style.display="block",s.target.reset(),p(r).then(t=>{t.data.hits.length===0?(document.querySelector(".loader").style.display="none",l.error({titleColor:"white",timeout:2e3,message:"Sorry, there are no images matching your search query. Please try again!"})):(document.querySelector(".loader").style.display="none",i.insertAdjacentHTML("beforeend",y(t.data.hits)),b.refresh())}).catch(function(t){document.querySelector(".loader").style.display="none",t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message),console.log(t.config),l.error({titleColor:"white",message:"Щось пішло не так. Спробуйте пізніше!"})})}
//# sourceMappingURL=index.js.map
