const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=document.querySelector(".js-close-menu-first"),s=document.querySelector(".js-close-menu-second"),c=document.querySelector(".js-close-menu-third"),a=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),document.body.style.overflow=n?"auto":"hidden"};t.addEventListener("click",a),n.addEventListener("click",a),o.addEventListener("click",a),s.addEventListener("click",a),c.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),document.body.style.overflow="auto")}));const r={case:document.querySelector(".buttonup-case"),upButton:document.querySelector(".buttonup")},i=e=>{switch(e.type){case"scroll":Math.floor(window.scrollY)>=window.innerHeight/2?(r.case.style.visibility="visible",r.upButton.classList.add("anima-up")):(r.case.style.visibility="hidden",r.upButton.classList.remove("anima-up"));break;case"mouseover":r.case.style.border="2px solid var(--color-gray-60)";break;case"mouseout":r.case.style.border="none";break;case"click":r.case.style.border="none",window.scrollTo(0,0);break;default:r.upButton.style.visibility="hidden",r.case.style.border="none"}};document.addEventListener("scroll",i),r.case.addEventListener("mouseover",i),r.case.addEventListener("mouseout",i),r.upButton.addEventListener("click",i);const d=[...document.querySelectorAll(".definiteness-item")],l=document.querySelector(".amount");d.map((e=>e.addEventListener("click",m)));let u=3;function m(e){u=Number(e.currentTarget.id),console.log(u),b(u),function(e){switch(e){case 0:l.textContent="150";break;case 1:l.textContent="300";break;case 2:l.textContent="525";break;case 3:l.textContent="925";break;case 4:l.textContent="1050";break;case 5:l.textContent="1425";break;case 6:l.textContent="1850";break;case 7:l.textContent="2275";break;case 8:l.textContent="3050";break;case 9:l.textContent="4000"}}(u)}function b(e){d.map((e=>{[...e.children].map((e=>{e.classList.remove("def-chexbox-bgcolor"),e.classList.remove("def-chexbox-btn-color")}))}));for(let t=0;t<=e;t+=1){[...d[t].children].map((e=>{"definiteness-chexbox"!==e.className?e.classList.add("def-chexbox-btn-color"):e.classList.add("def-chexbox-bgcolor")}))}}b(u);
//# sourceMappingURL=index.f6b98810.js.map
