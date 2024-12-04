// ==UserScript==
// @name     RepWallH4x
// @version  3
// @grant    none
// @match    https://www.repubblica.it/*
// @run-at   document-end
// ==/UserScript==

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener('load', async function() {
      await sleep(2000);
      console.log("%c Hacking the planet...🐱‍💻", "font-size:50px; background: #000; color: #00e33d; padding: 2px; border-radius:2px");
      a = document.getElementById("iubenda-cs-banner");
      a.remove()
      document.getElementById("rep-slim-header").append("Hacked the planet successfully 👾") 
      console.log("%c Hack successful, paywall is now removed 🐱‍🏍", "font-size:50px; background: #000; color: #00e33d; padding: 2px; border-radius:2px");
}, false);
