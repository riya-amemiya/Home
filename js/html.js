!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=10)}([function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(a=o,p=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(d," */")),r=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([i]).join("\n")}var a,p,d;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);o&&i[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},function(n,e,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function p(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},o=[],i=0;i<n.length;i++){var r=n[i],d=e.base?r[0]+e.base:r[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=p(l),c={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(c)):a.push({identifier:l,updater:y(c,e),references:1}),o.push(l)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function c(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function f(n,e,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var b=null,m=0;function y(n,e){var t,o,i;if(e.singleton){var r=m++;t=b||(b=s(e)),o=c.bind(null,t,r,!1),i=c.bind(null,t,r,!0)}else t=s(e),o=f.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=p(t[o]);a[i].references--}for(var r=d(n,e),s=0;s<t.length;s++){var l=p(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=r}}}},,,function(n,e,t){"use strict";e.a=t.p+"./img/notebook-1280538_1280.jpg"},,,,,function(n,e,t){"use strict";t.r(e);t(11)},function(n,e,t){var o=t(2),i=t(12);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);n.exports=i.locals||{}},function(n,e,t){"use strict";t.r(e);var o=t(1),i=t.n(o),r=t(0),a=t.n(r),p=t(5),d=i()(!1),s=a()(p.a);d.push([n.i,'@charset "UTF-8";\n/* Scss Document */\n/*ここから*/\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n}\n\nbutton, input[type=button], input[type=reset], input[type=submit] {\n  appearance: none;\n  background-color: #1565c0;\n  border: 0;\n  border-radius: 3px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  /*font-family: $base-font-family;*/\n  font-size: 1em;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  line-height: 1;\n  padding: 0.75em 1.5em;\n  text-decoration: none;\n  transition: background-color 150ms ease;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\nbutton:hover, button:focus, input[type=button]:hover, input[type=button]:focus, input[type=reset]:hover, input[type=reset]:focus, input[type=submit]:hover, input[type=submit]:focus {\n  background-color: #11519a;\n  color: #fff;\n}\nbutton:disabled, input[type=button]:disabled, input[type=reset]:disabled, input[type=submit]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\nbutton:disabled:hover, input[type=button]:disabled:hover, input[type=reset]:disabled:hover, input[type=submit]:disabled:hover {\n  background-color: #1565c0;\n}\n\nfieldset {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  font-weight: 600;\n  margin-bottom: 0.375em;\n  padding: 0;\n}\n\nlabel {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.375em;\n}\n\ninput,\nselect {\n  display: block;\n  /*font-family: $base-font-family;*/\n  font-size: 1em;\n}\n\ninput[type=color], input[type=date], input[type=datetime], input[type=datetime-local], input[type=email], input[type=month], input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], input[type=week], input:not([type]), textarea,\nselect[multiple] {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  /*font-family: $base-font-family;*/\n  font-size: 1em;\n  margin-bottom: 0.75em;\n  padding: 0.5em;\n  transition: border-color 150ms ease;\n  width: 100%;\n}\ninput[type=color]:hover, input[type=date]:hover, input[type=datetime]:hover, input[type=datetime-local]:hover, input[type=email]:hover, input[type=month]:hover, input[type=number]:hover, input[type=password]:hover, input[type=search]:hover, input[type=tel]:hover, input[type=text]:hover, input[type=time]:hover, input[type=url]:hover, input[type=week]:hover, input:not([type]):hover, textarea:hover,\nselect[multiple]:hover {\n  border-color: #b1b1b1;\n}\ninput[type=color]:focus, input[type=date]:focus, input[type=datetime]:focus, input[type=datetime-local]:focus, input[type=email]:focus, input[type=month]:focus, input[type=number]:focus, input[type=password]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=text]:focus, input[type=time]:focus, input[type=url]:focus, input[type=week]:focus, input:not([type]):focus, textarea:focus,\nselect[multiple]:focus {\n  border-color: #1565c0;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 5px rgba(18, 89, 169, 0.7);\n  outline: none;\n}\ninput[type=color]:disabled, input[type=date]:disabled, input[type=datetime]:disabled, input[type=datetime-local]:disabled, input[type=email]:disabled, input[type=month]:disabled, input[type=number]:disabled, input[type=password]:disabled, input[type=search]:disabled, input[type=tel]:disabled, input[type=text]:disabled, input[type=time]:disabled, input[type=url]:disabled, input[type=week]:disabled, input:not([type]):disabled, textarea:disabled,\nselect[multiple]:disabled {\n  background-color: #f2f2f2;\n  cursor: not-allowed;\n}\ninput[type=color]:disabled:hover, input[type=date]:disabled:hover, input[type=datetime]:disabled:hover, input[type=datetime-local]:disabled:hover, input[type=email]:disabled:hover, input[type=month]:disabled:hover, input[type=number]:disabled:hover, input[type=password]:disabled:hover, input[type=search]:disabled:hover, input[type=tel]:disabled:hover, input[type=text]:disabled:hover, input[type=time]:disabled:hover, input[type=url]:disabled:hover, input[type=week]:disabled:hover, input:not([type]):disabled:hover, textarea:disabled:hover,\nselect[multiple]:disabled:hover {\n  border: 1px solid #ddd;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n[type=search] {\n  appearance: none;\n}\n\n[type=checkbox],\n[type=radio] {\n  display: inline;\n  margin-right: 0.375em;\n}\n\n[type=file] {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\nselect {\n  margin-bottom: 1.5em;\n  max-width: 100%;\n  width: auto;\n}\n\nul,\nol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\ndl {\n  margin-bottom: 0.75em;\n}\ndl dt {\n  font-weight: 600;\n  margin-top: 0.75em;\n}\ndl dd {\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 0.75em 0;\n  table-layout: fixed;\n  width: 100%;\n}\n\nth {\n  border-bottom: 1px solid #a6a6a6;\n  font-weight: 600;\n  padding: 0.75em 0;\n  text-align: left;\n}\n\ntd {\n  border-bottom: 1px solid #ddd;\n  padding: 0.75em 0;\n}\n\ntr,\ntd,\nth {\n  vertical-align: middle;\n}\n\nbody {\n  color: #333;\n  /*font-family: $base-font-family;*/\n  font-size: 1em;\n  line-height: 1.5;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  /*font-family: $heading-font-family;*/\n  /*font-size: $base-font-size;*/\n  line-height: 1.2;\n  margin: 0 0 0.75em;\n}\n\np {\n  margin: 0 0 0.75em;\n}\n\na {\n  color: #1565c0;\n  text-decoration: none;\n  transition: color 150ms ease;\n}\na:active, a:focus, a:hover {\n  color: #104c90;\n}\n\nhr {\n  border-bottom: 1px solid #ddd;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  margin: 1.5em 0;\n}\n\nimg,\npicture {\n  margin: 0;\n  max-width: 100%;\n}\n\n/*ここまで自動生成*/\nbody {\n  margin: 0px;\n  z-index: 0;\n}\nbody a {\n  cursor: pointer;\n}\nbody .link-study {\n  cursor: pointer;\n}\nbody .pointer {\n  cursor: pointer;\n}\n\n.Side-by-side {\n  display: inline-block;\n}\n\n.text-p {\n  font-weight: lighter;\n  font-size: 30px;\n}\n\n.not {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n\n.btn-top {\n  margin-top: 10px;\n}\n\nheader {\n  height: 0px;\n}\n\nfooter {\n  text-align: center;\n}\nfooter .footer-left {\n  float: left;\n  padding-right: 30px;\n}\nfooter .footer-left h1 {\n  padding-top: 30px;\n  font-size: 20px;\n  color: #000000;\n}\nfooter .footer-left .footer-link {\n  padding-top: 10px;\n  display: inline-block;\n}\nfooter .footer-left .footer-link .link {\n  font-size: 20px;\n  color: #2d8fdd;\n  border-left: solid 6px #2d8fdd;\n  /*左側の線*/\n  background: #f1f8ff;\n  /*背景色*/\n  margin-bottom: 3px;\n  /*下のバーとの余白*/\n  line-height: 1.5;\n  padding: 0.5em;\n  list-style-type: none !important;\n  /*ポチ消す*/\n}\nfooter .footer-left .home {\n  padding-top: 20px;\n  display: block;\n  padding-bottom: 50px;\n}\nfooter .footer-right {\n  float: right;\n}\n\n.main {\n  text-align: center;\n}\n.main .headings {\n  background-image: url('+s+");\n  background-size: cover;\n  color: white;\n  width: 100%;\n}\n.main .headings .description-site h1 {\n  padding-top: 0px;\n  margin: 0px;\n  font-size: 60px;\n}\n.main .headings .description-site .heading {\n  font-size: 40px;\n}\n.main .headings .description-css p {\n  font-size: 30px;\n}\n.main .headings .btn {\n  display: inline-block;\n  padding: 0.5em 1em;\n  text-decoration: none;\n  background: #5dca88;\n  /*ボタン色*/\n  color: #FFF;\n  border-bottom: solid 4px #627295;\n  border-radius: 3px;\n}\n.main .headings .btn:active {\n  /*ボタンを押したとき*/\n  -webkit-transform: translateY(4px);\n  transform: translateY(4px);\n  /*下に動く*/\n  border-bottom: none;\n  /*線を消す*/\n}\n.main .headings .main-air {\n  padding-bottom: 30px;\n  clear: left;\n}",""]),e.default=d}]);