(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".section-proj");async function a(){(await(await fetch("/projects.json")).json()).forEach(r=>{const n=new Date(r.added_at||new Date),e={year:"numeric",month:"long"},t=new Intl.DateTimeFormat("fa-IR",e).format(n),o=document.createElement("li");o.innerHTML=`
      <section>
        <a href="${r.link}">
          <img src="${r.image}" alt="${r.title}" class="preview">
          <h2 class="title-proj">${r.title}</h2>
        </a>
        <p class="desc-proj">${r.description}</p>
        <div class="proj-meta" style="text-align: right;">
        <div class="open">
            <a href="${r.link}" class="open-proj">باز کردن پروژه</a>
          </div>
          <span>${t}</span>
        </div>
      </section>
    `,c.appendChild(o)})}a();
