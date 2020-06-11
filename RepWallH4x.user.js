// ==UserScript==
// @name     RepWallH4x
// @version  1
// @grant    none
// @match    https://rep.repubblica.it/pwa/*
// @run-at   document-idle
// ==/UserScript==

window.addEventListener('load', function() {
  	console.log("%c Hacking the planet...🐱‍💻", "font-size:50px; background: #000; color: #00e33d; padding: 2px; border-radius:2px");
    var b = document.getElementsByTagName("body")[0].getElementsByTagName("news-app")[0].shadowRoot.getElementById("articlePager").getElementsByClassName("iron-selected")[0].shadowRoot.querySelector("div").querySelector("div").querySelector("amp-viewer").querySelector("div").shadowRoot.querySelector("body").getElementsByTagName("main")[0].getElementsByClassName("detail-article_container")[2].getElementsByClassName("detail-article_body")[0].querySelector("div");
  	var p = document.getElementsByTagName("body")[0].getElementsByTagName("news-app")[0].shadowRoot.getElementById("articlePager").getElementsByClassName("iron-selected")[0].shadowRoot.querySelector("div").querySelector("div").querySelector("amp-viewer").querySelector("div").shadowRoot.querySelector("body").getElementsByTagName("main")[0].getElementsByClassName("detail-article_container")[2].getElementsByClassName("detail-article_body")[0].getElementsByClassName("paywall")[0];
   	var _len = p.getElementsByTagName("br").length;
  	p.setAttribute("subscriptions-section", "1337h4x");
  	b.remove();
  	p.getElementsByTagName("br")[_len-1].nextSibling.appendData("Hacked the planet successfully 🐱‍👓");
  	console.log("%c Hack successful, paywall is now removed 🐱‍🏍", "font-size:50px; background: #000; color: #00e33d; padding: 2px; border-radius:2px");
}, false);


