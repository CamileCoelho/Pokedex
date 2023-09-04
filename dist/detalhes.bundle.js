(()=>{"use strict";var n={821:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(537),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"body {\n  display: grid;\n  place-items: center; \n\n  font-family: 'Segoe UI', sans-serif;\n  background-color: #1b2e46;\n\n  margin: 0;\n}\n\n.conteudo {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 5%;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n  color: #f9f9f9;\n  padding-right: 48px;\n}\n\n.descricao {\n  font-size: 22px;\n  font-weight: 600;\n  color: #f9f9f9;\n}\n\n.container-formulario {\n  display: flex;\n  justify-content: center; \n  align-items: center;\n  min-width: 300px; \n\n  gap: 5px;\n}\n\n.pesquisa {\n  outline: 1px solid #f9f9f9 important;\n\n  border:none;\n  border-radius: 10px;\n\n  font-size: 18px;\n\n  padding: 5px;\n}\n\n.btn {\n  display: grid; \n  place-items: center;\n  border: none;\n  border-radius: 10px;\n}\n\n.btn:hover {\n  opacity: 0.9;\n  cursor: pointer;\n  outline: 1px solid #ffffff;\n}\n\n.btn-pesquisar {\n  background-color: #4DAD5B;\n  color: white;\n}\n\n.btn-limpar {\n  background-color: #DA471B;\n  color: white;\n  width: 50px;\n  height: 50px;\n}\n\n.card-pokemon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  max-width: 350px;\n  height: 450px;\n\n  background-color: #e1e1e1;\n  color: #313131;\n\n  border-radius: 1rem;\n\n  margin-top: 5%;\n}\n\n.notificacao {\n  position: absolute;\n  bottom: 0;\n\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  \n  background-color: #DA471B;\n  border-radius: 10px;\n\n  min-width: 300px;\n\n  padding: 10px 20px;\n  margin-bottom: 1%;\n  margin-left: auto;\n  margin-left: right;\n\n  transition: outline 1s ease-in-out;\n}\n\n.notificacao:hover {\n  opacity: 0.9;\n  cursor: pointer;\n}","",{version:3,sources:["webpack://./src/views/pokemon-detalhes/pokemon-detalhes.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;;EAEnB,mCAAmC;EACnC,yBAAyB;;EAEzB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;;EAEhB,QAAQ;AACV;;AAEA;EACE,oCAAoC;;EAEpC,WAAW;EACX,mBAAmB;;EAEnB,eAAe;;EAEf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;;EAET,gBAAgB;EAChB,aAAa;;EAEb,yBAAyB;EACzB,cAAc;;EAEd,mBAAmB;;EAEnB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,SAAS;;EAET,kBAAkB;EAClB,eAAe;EACf,gBAAgB;;EAEhB,yBAAyB;EACzB,mBAAmB;;EAEnB,gBAAgB;;EAEhB,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;;EAElB,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB",sourcesContent:["body {\r\n  display: grid;\r\n  place-items: center; \r\n\r\n  font-family: 'Segoe UI', sans-serif;\r\n  background-color: #1b2e46;\r\n\r\n  margin: 0;\r\n}\r\n\r\n.conteudo {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  padding: 0 5%;\r\n}\r\n\r\nh1 {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  color: #f9f9f9;\r\n  padding-right: 48px;\r\n}\r\n\r\n.descricao {\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  color: #f9f9f9;\r\n}\r\n\r\n.container-formulario {\r\n  display: flex;\r\n  justify-content: center; \r\n  align-items: center;\r\n  min-width: 300px; \r\n\r\n  gap: 5px;\r\n}\r\n\r\n.pesquisa {\r\n  outline: 1px solid #f9f9f9 important;\r\n\r\n  border:none;\r\n  border-radius: 10px;\r\n\r\n  font-size: 18px;\r\n\r\n  padding: 5px;\r\n}\r\n\r\n.btn {\r\n  display: grid; \r\n  place-items: center;\r\n  border: none;\r\n  border-radius: 10px;\r\n}\r\n\r\n.btn:hover {\r\n  opacity: 0.9;\r\n  cursor: pointer;\r\n  outline: 1px solid #ffffff;\r\n}\r\n\r\n.btn-pesquisar {\r\n  background-color: #4DAD5B;\r\n  color: white;\r\n}\r\n\r\n.btn-limpar {\r\n  background-color: #DA471B;\r\n  color: white;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.card-pokemon {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n\r\n  max-width: 350px;\r\n  height: 450px;\r\n\r\n  background-color: #e1e1e1;\r\n  color: #313131;\r\n\r\n  border-radius: 1rem;\r\n\r\n  margin-top: 5%;\r\n}\r\n\r\n.notificacao {\r\n  position: absolute;\r\n  bottom: 0;\r\n\r\n  text-align: center;\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  \r\n  background-color: #DA471B;\r\n  border-radius: 10px;\r\n\r\n  min-width: 300px;\r\n\r\n  padding: 10px 20px;\r\n  margin-bottom: 1%;\r\n  margin-left: auto;\r\n  margin-left: right;\r\n\r\n  transition: outline 1s ease-in-out;\r\n}\r\n\r\n.notificacao:hover {\r\n  opacity: 0.9;\r\n  cursor: pointer;\r\n}"],sourceRoot:""}]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var A=0;A<n.length;A++){var p=[].concat(n[A]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],A=t.base?c[0]+t.base:c[0],p=i[A]||0,d="".concat(A," ").concat(p);i[A]=p+1;var l=r(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var m=o(u,t);t.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=t(n,o),A=0;A<i.length;A++){var p=r(i[A]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{class n{selecionarPokemonPorNome(n){return fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then((n=>this.processarResposta(n))).then((n=>this.mapearPokemon(n)))}selecionarPokemons(){return fetch("https://pokeapi.co/api/v2/pokemon/").then((n=>this.processarResposta(n))).then((n=>this.mapearListaPokemons(n.results)))}mapearPokemon(n){return{id:n.id,nome:n.name,spriteUrl:n.sprites.front_default}}mapearListaPokemons(n){const e=n.map((n=>this.selecionarPokemonPorNome(n.name)));return Promise.all(e)}processarResposta(n){if(n.ok)return n.json();throw new Error("Pokémon não encontrado!")}}var e=r(379),t=r.n(e),o=r(795),i=r.n(o),a=r(569),s=r.n(a),c=r(565),A=r.n(c),p=r(216),d=r.n(p),l=r(589),u=r.n(l),m=r(821),f={};f.styleTagTransform=u(),f.setAttributes=A(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class E{constructor(){this.pokemonService=new n,this.registrarElementos(),this.registrarEventos();const e=new URLSearchParams(window.location.search).get("nome");this.procurarPorNome(e)}registrarElementos(){this.formPrincipal=document.getElementById("formPrincipal"),this.txtPesquisa=document.getElementById("txtPesquisa"),this.btnVoltar=document.getElementById("btnVoltar"),this.pnlConteudo=document.getElementById("pnlConteudo")}registrarEventos(){this.formPrincipal.addEventListener("submit",(n=>this.buscar(n))),this.btnVoltar.addEventListener("click",(()=>window.location.href="index.html"))}buscar(n){n.preventDefault(),this.txtPesquisa.value&&(this.txtPesquisa.value="",this.procurarPorNome(this.txtPesquisa.value))}procurarPorNome(n){this.pokemonService.selecionarPokemonPorNome(n).then((n=>this.gerarCard(n))).catch((n=>this.exibirNotificacao(n)))}limparCard(){var n;null===(n=this.pnlConteudo.querySelector(".card-pokemon"))||void 0===n||n.remove()}gerarCard(n){const e=document.createElement("p"),r=document.createElement("p"),t=document.createElement("img");e.textContent=n.id.toString(),r.textContent=n.nome,t.src=n.spriteUrl;const o=document.createElement("div");o.classList.add("card-pokemon"),o.appendChild(e),o.appendChild(r),o.appendChild(t),this.pnlConteudo.appendChild(o)}exibirNotificacao(n){const e=document.createElement("div");e.textContent=n.message,e.classList.add("notificacao"),e.addEventListener("click",(n=>{n.target.remove()})),document.body.appendChild(e),setTimeout((()=>{e.remove()}),5e3)}}window.addEventListener("load",(()=>new E))})()})();
//# sourceMappingURL=detalhes.bundle.js.map