const navMenu=document.getElementById("menu-btn"),closeNavMenu=document.getElementById("close-btn"),showNav=document.getElementById("show-nav");navMenu.addEventListener("click",(function(){navMenu.classList.add("hidden"),showNav.classList.remove("hidden"),closeNavMenu.classList.remove("hidden")})),closeNavMenu.addEventListener("click",(function(){closeNavMenu.classList.add("hidden"),showNav.classList.add("hidden"),navMenu.classList.remove("hidden")}));