const dark_mode_button=document.getElementById("dark_mode_button");dark_mode_button.addEventListener("click",(()=>{document.body.classList.toggle("dark_mode")}));const buttons=document.querySelectorAll("button");buttons.forEach((t=>{t.addEventListener("click",(()=>{const e=t.getAttribute("data-state");e&&"closed"!==e?(t.setAttribute("data-state","closed"),t.setAttribute("aria-expanded","false")):(t.setAttribute("data-state","opened"),t.setAttribute("aria-expanded","true"))}))}));
//# sourceMappingURL=index.ccf7259c.js.map