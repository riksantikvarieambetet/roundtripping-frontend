(function(t){function e(e){for(var o,s,r=e[0],u=e[1],l=e[2],c=0,f=[];c<r.length;c++)s=r[c],i[s]&&f.push(i[s][0]),i[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={app:0},a=[];function s(t){return r.p+"js/"+({about:"about",collection:"collection",institution:"institution"}[t]||t)+"."+{about:"183fae9d",collection:"c0c295f3",institution:"b1ca7142"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=i[t]=[e,o]});e.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=s(t),a=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+a+")");s.type=o,s.request=a,n[1](s)}i[t]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2241:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex flex-column align-items-center mt-4",attrs:{id:"Logo"}},[n("img",{staticClass:"logo__image d-none",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/c/c6/Emojione_1F439.svg"}}),n("h3",{staticClass:"display-4 w-100"},[t._v(t._s(t.title))])])},i=[],a=(n("cadf"),n("551c"),n("f751"),n("097d"),{name:"Logo",props:{title:String}}),s=a,r=(n("b861"),n("2877")),u=Object(r["a"])(s,o,i,!1,null,"ee4e9380",null);e["a"]=u.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=n("9f7b"),a=n.n(i),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Roundtripping")]),t._m(0),n("div",{staticClass:"d-none",attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("|\n      "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("button",{staticClass:"btn btn-outline-light ml-auto",attrs:{type:"button"}},[t._v("Logout")])],1),n("main",{attrs:{role:"main"}},[n("router-view",{key:t.$route.fullPath})],1),t._m(1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"container"},[n("p",[t._v("© 2019")])])}],u=(n("5c0b"),n("2877")),l={},c=Object(u["a"])(l,s,r,!1,null,null,null),d=c.exports,f=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Home"}},[n("div",{staticClass:"jumbotron"},[n("div",{staticClass:"container"},[n("Logo",{attrs:{title:"Dashboard"}}),n("p",{staticClass:"lead"},[t._v("Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.")])],1)]),n("div",{staticClass:"container"},[n("h2",{staticClass:"mb-4"},[t._v("Institutions")]),n("div",{staticClass:"row"},t._l(t.$store.state.institutions.list,function(e){return n("div",{key:e.id,staticClass:"col-md-4"},[n("h4",[t._v(t._s(e.name))]),n("p",[n("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:{name:"institution",params:{id:e.id}}}},[t._v("View details »")])],1)])}),0),n("hr")])])},p=[],v=n("795b"),b=n.n(v),g=n("bd86"),h=n("cebc"),w=n("75fc"),_=(n("7514"),n("2f62")),y=n("bc3a"),C=n.n(y),j=C.a.create({baseURL:"https://tools.wmflabs.org/roundtripping"});function x(){return j.get("institutions")}function k(t){return j.get("institutions/".concat(t,"/collections"))}function O(t,e){return j.get("institutions/".concat(t,"/collections/").concat(e))}o["a"].use(_["a"]);var E=new _["a"].Store({state:{institutions:{busy:!1,loaded:!1,list:[]},collections:{}},mutations:{setInstitutionsBusy:function(t){t.institutions.busy=!0},setInstitutionsList:function(t,e){var n=e.list;t.institutions={busy:!1,loaded:!0,list:n}},setInstitutionCollections:function(t,e){var n=e.id,o=e.collections,i=t.institutions.list.find(function(t){return t.id===n}),a=t.institutions.list.indexOf(i),s=Object(w["a"])(t.institutions.list);s[a]=Object(h["a"])({},s[a],{collections:o}),t.institutions.list=Object(w["a"])(s)},setCollection:function(t,e){var n=e.id,o=e.collection;t.collections=Object(h["a"])({},t.collections,Object(g["a"])({},n,o))}},actions:{getInstitutions:function(t){var e=t.commit;return e("setInstitutionsBusy"),x().then(function(t){e("setInstitutionsList",{list:t.data})})},getCollections:function(t,e){var n=t.commit,o=t.dispatch,i=t.state,a=e.id,s=i.institutions.loaded?b.a.resolve():o("getInstitutions");return s.then(function(){return k(a).then(function(t){var e=t.data;n("setInstitutionCollections",{id:a,collections:e})})})},getCollection:function(t,e){var n=t.commit,o=(t.dispatch,t.state,e.institutionId),i=e.id;return O(o,i).then(function(t){var e=t.data;n("setCollection",{id:i,collection:e})})}}}),I=n("2241"),P={name:"home",components:{Logo:I["a"]},mounted:function(){E.state.institutions.loaded||E.dispatch("getInstitutions")}},S=P,A=Object(u["a"])(S,m,p,!1,null,null,null),L=A.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jumbotron"},[n("div",{staticClass:"container"},[n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("E-Mail Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",type:"email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:t.handleSubmit}},[t._v("Login")])])])])])},q=[],D={data:function(){return{email:"",password:""}},methods:{handleSubmit:function(t){t.preventDefault(),localStorage.setItem("jwt","test"),this.$router.push("/")}}},T=D,M=Object(u["a"])(T,$,q,!1,null,null,null),N=M.exports;o["a"].use(f["a"]);var F=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:L,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:N,meta:{guest:!0}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{requiresAuth:!0}},{path:"/institution/:id",name:"institution",component:function(){return n.e("institution").then(n.bind(null,"7387"))},meta:{requiresAuth:!0}},{path:"/collection/:institutionId/:id",name:"collection",component:function(){return n.e("collection").then(n.bind(null,"13a0"))},meta:{requiresAuth:!0}}]});F.beforeEach(function(t,e,n){var o=localStorage.getItem("jwt"),i=t.matched.some(function(t){return t.meta.guest}),a=t.matched.some(function(t){return t.meta.requiresAuth});a&&null===o?n({path:"/login",params:{nextUrl:t.fullPath}}):i?null==o?n():n({name:"home"}):n()});var B=F,H=n("9483");Object(H["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("f9e3"),n("2dd8");o["a"].config.productionTip=!1,o["a"].use(a.a),new o["a"]({router:B,store:E,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),i=n.n(o);i.a},"5e27":function(t,e,n){},b861:function(t,e,n){"use strict";var o=n("b996"),i=n.n(o);i.a},b996:function(t,e,n){}});
//# sourceMappingURL=app.1fcb446d.js.map