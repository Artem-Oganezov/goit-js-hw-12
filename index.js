import{a as f,S as h,i}from"./assets/vendor-SnYWMg9o.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();const b="48847190-ee1f10217269e20f054d6fa7c",q="https://pixabay.com/api/";async function u(o,e){return await f.get(q,{params:{key:`${b}`,q:`${o}`,image_type:"photo",orientation:"horizontal",per_page:40,page:e,safesearch:"true"}})}function L(o){const{webformatURL:e,largeImageURL:c,tags:l,likes:t,views:r,comments:a,downloads:y}=o;return`<li class="gallery-item">
    <a class="gallery-link" href="${c}">
    <img
      class="gallery-image"
      src="${e}"
      alt="${l}"
    />
    </a>
    <table class="photo-info">
              <tr class="name-info" >
                <td>Likes <br>
                <span class="total">${t}</span></td>
                <td>Views<br>
                <span class="total">${r}</span></td>
                <td>Comments<br>
                <span class="total">${a}</span></td>
                <td>Downloads<br>
                <span class="total">${y}</span></td>
              </tr>
            </table>    
         </li>`}function m(o){return o.map(L).join("")}const S=document.querySelector(".form"),d=document.querySelector(".gallery"),n=document.querySelector(".btn-next-image"),g=new h(".gallery a",{}),w=document.querySelector(".gallery");S.addEventListener("submit",v);const s={total:100,query:"",page:1};async function v(o){if(o.preventDefault(),d.innerHTML="",s.query=o.target.elements.query.value.trim(),s.page=1,!s.query){n.classList.add("hidden"),i.error({backgroundColor:"#6e0e0e",timeout:2e3,message:"Please , enter your query!"});return}document.querySelector(".loader").style.display="block",o.target.reset();try{const e=await u(s.query,s.page);s.total=e.data.total,e.data.hits.length===0?(document.querySelector(".loader").style.display="none",i.error({titleColor:"white",timeout:2e3,message:"Sorry, there are no images matching your search query. Please try again!"})):(document.querySelector(".loader").style.display="none",d.insertAdjacentHTML("beforeend",m(e.data.hits)),g.refresh(),p())}catch(e){document.querySelector(".loader").style.display="none",e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config),i.error({backgroundColor:"#6e0e0e",message:"Щось пішло не так. Спробуйте пізніше!"})}}n.addEventListener("click",P);async function P(){n.classList.add("hidden"),document.querySelector(".loader_next").style.display="block",s.page+=1;try{const o=await u(s.query,s.page);document.querySelector(".loader_next").style.display="none",d.insertAdjacentHTML("beforeend",m(o.data.hits)),g.refresh(),p()}catch(o){console.log(o)}k()}function x(){n.classList.remove("hidden")}function $(){n.classList.add("hidden")}function p(){const e=Math.ceil(s.total/40);s.page>=e?($(),i.error({titleColor:"white",timeout:2e3,message:"We're sorry, but you've reached the end of search results."})):x()}function k(){const e=w.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*3})}
//# sourceMappingURL=index.js.map
