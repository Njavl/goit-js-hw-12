import{a as q,S as E,i}from"./assets/vendor-xpOxgMII.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const B="54431760-457b05627b7c92a0f6d8a1d9a",P="https://pixabay.com/api";async function p(r,e){const l={method:"GET",url:P,params:{key:B,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};try{return(await q(l)).data}catch(o){throw o}}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=document.querySelector(".load-more");function g(r){const e=r.map(t=>{const{webformatURL:s,largeImageURL:a,tags:L,likes:w,views:S,comments:M,downloads:$}=t;return`
    <li class="gallery-item">
    <a class="gallery-link" href="${a}">
    <img
    class="gallery-image"
    src="${s}"
    alt="${L}"
    />
        <div class="description">
      <ul class="description-list">
        <li class="description-list-item">
          <span class="description-label">Likes</span>
          <span class="description-label-value">${w}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Views</span>
          <span class="description-label-value">${S}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Comments</span>
          <span class="description-label-value">${M}</span>
        </li>
        <li class="description-list-item">
          <span class="description-label">Downloads</span>
          <span class="description-label-value">${$}</span>
        </li>
      </ul>
    </div>
    </a>
    </li>
    `});m.insertAdjacentHTML("beforeend",e.join("")),new E(".gallery li a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});const o=document.querySelector(`img[src="${r[0].webformatURL}"]`).getBoundingClientRect();window.scrollBy({top:o.y-20,behavior:"smooth"})}function O(){m.innerHTML=""}function h(){f.classList.remove("visually-hidden")}function n(){f.classList.add("visually-hidden")}function T(){y.classList.remove("visually-hidden")}function u(){y.classList.add("visually-hidden")}const b=document.querySelector(".form"),I=document.querySelector(".load-more");let c="",d=1;b.addEventListener("submit",N);I.addEventListener("click",x);async function N(r){if(r.preventDefault(),c=b.elements["search-text"].value.trim(),d=1,c===""){i.error({title:"Empty field",message:"Please enter a value before submitting."});return}O(),h(),u();try{const e=await p(c);if(console.log(e),e.hits.length===0){n(),i.error({title:"Nothing found",message:"Sorry, there are no images matching your search query. Please try again!"});return}n(),g(e.hits),v(e)}catch(e){n(),i.error({title:"Error",message:`${e}`})}}async function x(r){d+=1,u(),h();try{const e=await p(c,d);console.log(e),n(),g(e.hits),v(e)}catch(e){n(),i.error({title:"Error",message:`${e}`})}}function v(r){d>=Math.ceil(r.totalHits/15)?(u(),i.warning({title:"No more results",message:"We're sorry, but you've reached the end of search results."})):T()}
//# sourceMappingURL=index.js.map
