(()=>{"use strict";var n={341:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(322),t.b),l=new URL(t(723),t.b),u=i()(o()),p=s()(d),f=s()(l);u.push([n.id,`html, body {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n\n.container {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    background-image: url(${p});\n    background-size: cover;\n    background-position: center;\n    position: relative;\n}\n\n.header {\n    width: 100%;\n    height: 10%;\n    background-color: black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.h1 {\n    text-align: center;\n    font-size: 250%;\n    color: white;\n}\n\n.h3 {\n    text-align: center;\n    font-size: 150%;\n    font-style: italic;\n    color: white;\n}\n\n.nav {\n    width: 40%;\n    height: 40%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.button {\n    width: 10%;\n    height: 70%;\n    border-radius: 6px;\n    background-color: #090909;\n    color: white;\n    border: 1px solid #DAA520;\n    cursor: pointer;\n}\n\n.button:hover {\n    transform: scale(1.3);\n    background-color: #DAA520;\n    border: 1px solid white;\n    color: black;\n    font-weight: bold;\n}\n\n.main {\n    width: 30%;\n    height: 75%;\n    background-color: black;\n    border-radius: 6px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.footer {\n    width: 100%;\n    height: 10%;\n    background-color: black;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n\n.diamond {\n    width: 100px;\n    height: 100px;\n    background-image: url(${f});\n}\n\n.contact {\n    width: 90%;\n    height: 90%;\n    border-radius: 6px;\n    background-color: #DAA520;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.button.selected {\n    transform: scale(1.3); \n    background-color: #DAA520; \n    color: black; \n    font-weight: bold;\n  }\n\n.location {\n    width: 600px;\n    height: 450px;\n    border: none;\n    \n}\n`,""]);const h=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},723:(n,e,t)=>{n.exports=t.p+"42a37dd3b76b291d5e06.png"},322:(n,e,t)=>{n.exports=t.p+"ae2d3cab2227c903f22c.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(341),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,t.p;function m(){const n=document.createElement("header"),e=document.createElement("h1");return e.innerHTML="OBLIVION RESTAURANT",e.classList.add("h1"),n.classList.add("header"),g().appendChild(n),n.appendChild(e),n.appendChild(function(){const n=["Home","Menu","Contact"],e=document.createElement("nav");let t=[],r=!1,o=!1,a=!1;for(let r=0;r<3;r++){const o=document.createElement("button");o.classList.add("button"),o.innerHTML=n[r],o.id=n[r].toLowerCase(),e.appendChild(o),t.push(o)}return t.forEach((n=>{n.addEventListener("click",(function(){t.forEach((n=>{n.classList.remove("selected")})),n.classList.add("selected"),"home"!==n.id||r||(console.log(a,r,o),a=!1,r=!0,o=!1,loadHome()),"menu"!==n.id||o||(console.log(a,r,o),a=!1,r=!1,o=!0,loadMenu()),"contact"!==n.id||a||(console.log(a,r,o),a=!0,r=!1,o=!1,function(){const n=document.querySelector(".main"),e=function(){const n=document.createElement("div"),e=document.createElement("h1"),t=document.createElement("iframe");t.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0044412698967!2d-3.690908623285859!3d40.45303867143381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2sEstadio%20Santiago%20Bernab%C3%A9u!5e0!3m2!1ses!2sar!4v1692978877683!5m2!1ses!2sar",t.width="80%",t.height="80%",t.style.borderRadius="6px",t.allowFullscreen=!0,t.loading="eager",t.referrerPolicy="no-referrer-when-downgrade";const r=document.createElement("p");return r.textContent="Telephone Number: 123456789",r.classList.add("h3"),e.textContent="INFORMATION",e.classList.add("h1"),n.appendChild(e),n.appendChild(r),n.appendChild(t),n.classList.add("contact"),n}();n.textContext="",n.appendChild(e)}())}))})),e.classList.add("nav"),e}()),n}function g(){const n=document.getElementById("content");return n.classList.add("container"),document.body.appendChild(n),n}!function(){const n=g();n.appendChild(m()),n.appendChild(function(){const n=document.createElement("main");return n.classList.add("main"),g().appendChild(n),n}()),n.appendChild(function(){const n=document.createElement("footer"),e=document.createElement("h3");return e.innerHTML="Best Luxury Restaurant in 2023",e.classList.add("h3"),n.classList.add("footer"),n.appendChild(e),g().appendChild(n),n}())}()})()})();