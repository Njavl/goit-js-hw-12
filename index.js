import{S as g,a as h,i as n}from"./assets/vendor-BL1gslrM.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),d=document.querySelector(".loader");function b(r){const s=r.map(l=>{const{webformatURL:e,largeImageURL:t,tags:a,likes:p,views:m,comments:f,downloads:y}=l;return`
    <li class="gallery-item">
    <a class="gallery-link" href="${t}">
    <img
    class="gallery-image"
    src="${e}"
    alt="${a}"
    />
        <div class="description">
      <ul class="description-list">
        <li class="description-list-item">
          <span class="description-label">Likes</span>
          <span class="description-label-value">${p}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Views</span>
          <span class="description-label-value">${m}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Comments</span>
          <span class="description-label-value">${f}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Downloads</span>
          <span class="description-label-value">${y}</span>
        </li>
      </ul>
    </div>
    </a>
    </li>
    `});c.insertAdjacentHTML("afterbegin",s.join("")),new g(".gallery li a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function v(){c.innerHTML=""}function L(){d.classList.remove("visually-hidden")}function o(){d.classList.add("visually-hidden")}const w="54431760-457b05627b7c92a0f6d8a1d9a",P="https://pixabay.com/api";function $(r){return h({method:"GET",url:P,params:{key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>{throw console.dir(s),s}).finally()}const u=document.querySelector(".form");u.addEventListener("submit",S);function S(r){r.preventDefault();const s=u.elements["search-text"].value.trim();if(s===""){n.error({title:"Empty field",message:"Please enter a value before submitting."});return}v(),L(),$(s).then(i=>{if(console.log(i.hits),i.hits.length===0){o(),n.error({title:"Nothing found",message:"Sorry, there are no images matching your search query. Please try again!"});return}o(),b(i.hits)}).catch(i=>{o(),n.error({title:"Error",message:`${i}`})}).finally(()=>{o()})}
//# sourceMappingURL=index.js.map
