(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();class u{constructor(){this.position={x:0,y:0},this.start={x:0,y:0},this.isDown=!1,this.bind()}bind(){window.addEventListener("mousemove",this.handleMouseMove.bind(this)),window.addEventListener("mousedown",this.handleMouseDown.bind(this)),window.addEventListener("mouseup",this.handleMouseUp.bind(this))}setMousePosition(t){this.position.x=t.clientX,this.position.y=t.clientY}setMouseStartPosition(t){this.start.x=t.clientX,this.start.y=t.clientY}handleMouseMove(t){this.setMousePosition(t)}handleMouseDown(t){this.isDown||(this.isDown=!0,this.setMouseStartPosition(t))}handleMouseUp(t){this.escape()}escape(){this.isDown=!1}}const r=new u;window.addEventListener("mousemove",()=>{const o=document.querySelector(".js-bone");o.style.top=r.position.y-25+"px",o.style.left=r.position.x-25+"px"});
