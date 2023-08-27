(()=>{"use strict";var n={341:(n,e,t)=>{t.d(e,{Z:()=>f});var o=t(81),r=t.n(o),i=t(645),c=t.n(i),a=t(667),d=t.n(a),s=new URL(t(322),t.b),l=new URL(t(833),t.b),u=c()(r()),h=d()(s),p=d()(l);u.push([n.id,`html, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(${h});\n    background-size: cover;\n    background-position: center;\n    position: relative;\n}\n\n.header {\n    width: 100%;\n    height: 10%;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.h1 {\n    text-align: center;\n    font-size: 250%;\n    color: white;\n}\n\n.h3 {\n    text-align: center;\n    font-size: 150%;\n    font-style: italic;\n    color: white;\n}\n\n.nav {\n    width: 40%;\n    height: 40%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.button {\n    width: 10%;\n    height: 70%;\n    border-radius: 6px;\n    background-color: #090909;\n    color: white;\n    border: 1px solid #DAA520;\n    cursor: pointer;\n}\n\n.button:hover {\n    transform: scale(1.3);\n    background-color: #DAA520;\n    border: 1px solid white;\n    color: black;\n    font-weight: bold;\n}\n\n.main {\n    width: 30%;\n    height: 75%;\n    background-color: black;\n    border-radius: 6px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.footer {\n    width: 100%;\n    height: 10%;\n    background-color: black;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n\n.contact {\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n    background-image: url(${p});\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.home {\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    background-image: url(${p});\n}\n\n.menu {\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n    background-image: url(${p});\n}\n\n.photo {\n    width: 90%;\n    height: 40%;\n    border-radius: 6px;\n}\n\n.button.selected {\n    transform: scale(1.3); \n    background-color: #DAA520; \n    color: black; \n    font-weight: bold;\n  }\n\n.location {\n    width: 600px;\n    height: 450px;\n    border: none;\n}\n\n@media (max-width: 450px) {\n    .h1 {\n        text-align: center;\n        font-size: 200%;\n        color: white;\n    }\n    \n    .h3 {\n        text-align: center;\n        font-size: 100%;\n        font-style: italic;\n        color: white;\n    }\n    \n    .nav {\n        width: 80%;\n        height: 50%;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n    \n    .button {\n        width: 20%;\n        height: 50%;\n        border-radius: 6px;\n        background-color: #090909;\n        color: white;\n        border: 1px solid #DAA520;\n        cursor: pointer;\n    }\n    .button:hover {\n        background-color: #DAA520;\n        border: 1px solid white;\n        color: black;\n        font-weight: bold;\n    }\n    .button.selected {\n        background-color: #DAA520; \n        color: black; \n        font-weight: bold;\n      }\n    \n    .main {\n        width: 80%;\n        height: 75%;\n        background-color: black;\n        border-radius: 20px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n    \n    .footer {\n        width: 100%;\n        height: 10%;\n        background-color: black;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        font-size: 120%;\n    }\n}\n\n@media (min-width: 450px) and (max-width: 800px) {\n    .h1 {\n        text-align: center;\n        font-size: 200%;\n        color: white;\n    }\n    \n    .h3 {\n        text-align: center;\n        font-size: 150%;\n        font-style: italic;\n        color: white;\n    }\n    \n    .nav {\n        width: 80%;\n        height: 50%;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n    \n    .button {\n        width: 20%;\n        height: 50%;\n        border-radius: 6px;\n        background-color: #090909;\n        color: white;\n        border: 1px solid #DAA520;\n        cursor: pointer;\n    }\n    .button:hover {\n        background-color: #DAA520;\n        border: 1px solid white;\n        color: black;\n        font-weight: bold;\n    }\n    .button.selected {\n        background-color: #DAA520; \n        color: black; \n        font-weight: bold;\n      }\n    \n    .main {\n        width: 80%;\n        height: 75%;\n        background-color: black;\n        border-radius: 20px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .main h1 {\n        font-size: 250%;\n    }\n    \n    .footer {\n        width: 100%;\n        height: 10%;\n        background-color: black;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        font-size: 120%;\n    }\n}\n\n@media (min-width: 800px) and (max-width: 1100px) {\n    .h1 {\n        text-align: center;\n        font-size: 200%;\n        color: white;\n    }\n    \n    .h3 {\n        text-align: center;\n        font-size: 150%;\n        font-style: italic;\n        color: white;\n    }\n    \n    .nav {\n        width: 80%;\n        height: 50%;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n    \n    .button {\n        width: 20%;\n        height: 50%;\n        border-radius: 6px;\n        background-color: #090909;\n        color: white;\n        border: 1px solid #DAA520;\n        cursor: pointer;\n    }\n    .button:hover {\n        background-color: #DAA520;\n        border: 1px solid white;\n        color: black;\n        font-weight: bold;\n    }\n    .button.selected {\n        background-color: #DAA520; \n        color: black; \n        font-weight: bold;\n      }\n    \n    .main {\n        width: 60%;\n        height: 75%;\n        background-color: black;\n        border-radius: 20px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .main h1 {\n        font-size: 250%;\n    }\n\n    .photo {\n        width: 70%;\n        height: 60%;\n    }\n    \n    .footer {\n        width: 100%;\n        height: 10%;\n        background-color: black;\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        font-size: 120%;\n    }\n}`,""]);const f=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(o)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},c=[],a=0;a<n.length;a++){var d=n[a],s=o.base?d[0]+o.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var h=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=r(p,o);o.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=t(i[c]);e[a].references--}for(var d=o(n,r),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},322:(n,e,t)=>{n.exports=t.p+"ae2d3cab2227c903f22c.jpg"},833:(n,e,t)=>{n.exports=t.p+"565ec1d4f0493045056c.png"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),c=t.n(i),a=t(565),d=t.n(a),s=t(216),l=t.n(s),u=t(589),h=t.n(u),p=t(341),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,t.p;const m=function(){const n=document.querySelector(".main"),e=function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("p"),o=new Image;return o.src="../dist/Images/wine.jpg",o.classList.add("photo"),t.textContent="Serving Great People with Great Food Since 1970",t.classList.add("h3"),e.textContent="Best Steak and Wine in Town",e.classList.add("h1"),n.appendChild(e),n.appendChild(o),n.appendChild(t),n.classList.add("home"),n}();return n.innerHTML="",n.appendChild(e),n};function g(){const n=document.createElement("header"),e=document.createElement("h1");return e.innerHTML="OBLIVION RESTAURANT",e.classList.add("h1"),n.classList.add("header"),b().appendChild(n),n.appendChild(e),n.appendChild(function(){const n=["Home","Menu","Contact"],e=document.createElement("nav");let t=[],o=!0,r=!1,i=!1;for(let o=0;o<3;o++){const r=document.createElement("button");r.classList.add("button"),r.innerHTML=n[o],r.id=n[o].toLowerCase(),e.appendChild(r),t.push(r),"home"===r.id&&r.classList.add("selected")}return t.forEach((n=>{n.addEventListener("click",(function(){t.forEach((n=>{n.classList.remove("selected")})),n.classList.add("selected"),"home"!==n.id||o||(i=!1,o=!0,r=!1,m()),"menu"!==n.id||r||(i=!1,o=!1,r=!0,function(){const n=new Image,e=document.querySelector(".main");n.src="../dist/Images/menu.png",n.classList.add("menu"),e.innerHTML="",e.appendChild(n)}()),"contact"!==n.id||i||(i=!0,o=!1,r=!1,function(){const n=document.querySelector(".main"),e=function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("iframe");t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0044412698967!2d-3.690908623285859!3d40.45303867143381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sEstadio%20Santiago%20Bernab%C3%A9u!5e0!3m2!1ses!2sar!4v1692978877683!5m2!1ses!2sar",t.width="80%",t.height="80%",t.style.borderRadius="6px",t.allowFullscreen=!0,t.loading="eager",t.referrerPolicy="no-referrer-when-downgrade";const o=document.createElement("p");return o.textContent="Telephone Number: 123456789",o.classList.add("h3"),e.textContent="INFORMATION",e.classList.add("h1"),n.appendChild(e),n.appendChild(o),n.appendChild(t),n.classList.add("contact"),n}();n.innerHTML="",n.appendChild(e)}())}))})),e.classList.add("nav"),e}()),n}function b(){const n=document.getElementById("content");return n.classList.add("container"),document.body.appendChild(n),n}!function(){const n=b();n.appendChild(g()),n.appendChild(function(){const n=document.createElement("main");return n.classList.add("main"),b().appendChild(n),n}()),n.appendChild(function(){const n=document.createElement("footer"),e=document.createElement("h3");return e.innerHTML="Best Luxury Restaurant in 2023",e.classList.add("h3"),n.classList.add("footer"),n.appendChild(e),b().appendChild(n),n}()),m()}()})()})();