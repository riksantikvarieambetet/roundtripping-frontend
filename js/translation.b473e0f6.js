(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["translation"],{"02f4":function(t,e,r){var n=r("4588"),o=r("be13");t.exports=function(t){return function(e,r){var i,a,c=String(o(e)),s=n(r),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}}},"0390":function(t,e,r){"use strict";var n=r("02f4")(!0);t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,r){"use strict";r("b0c5");var n=r("2aba"),o=r("32e9"),i=r("79e5"),a=r("be13"),c=r("2b4c"),s=r("520a"),u=c("species"),l=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,e,r){var h=c(t),p=!i(function(){var e={};return e[h]=function(){return 7},7!=""[t](e)}),d=p?!i(function(){var e=!1,r=/a/;return r.exec=function(){return e=!0,null},"split"===t&&(r.constructor={},r.constructor[u]=function(){return r}),r[h](""),!e}):void 0;if(!p||!d||"replace"===t&&!l||"split"===t&&!f){var v=/./[h],g=r(a,h,""[t],function(t,e,r,n,o){return e.exec===s?p&&!o?{done:!0,value:v.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),y=g[0],m=g[1];n(String.prototype,t,y),o(RegExp.prototype,h,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},"520a":function(t,e,r){"use strict";var n=r("0bfb"),o=RegExp.prototype.exec,i=String.prototype.replace,a=o,c="lastIndex",s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t[c]||0!==e[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(a=function(t){var e,r,a,l,f=this;return u&&(r=new RegExp("^"+f.source+"$(?!\\s)",n.call(f))),s&&(e=f[c]),a=o.call(f,t),s&&a&&(f[c]=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&i.call(a[0],r,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},"5f1b":function(t,e,r){"use strict";var n=r("23c6"),o=RegExp.prototype.exec;t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=x;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(G([])));m&&m!==n&&o.call(m,a)&&(g=m);var w=_.prototype=L.prototype=Object.create(g);S.prototype=w.constructor=_,_.constructor=S,_[s]=S.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===S||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},E(T.prototype),T.prototype[c]=function(){return this},l.AsyncIterator=T,l.async=function(t,e,r,n){var o=new T(x(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(w),w[s]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=G,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function x(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=k(t,r,a),i}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function S(){}function _(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){function e(r,n,i,a){var c=b(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){s.value=t,i(s)},function(t){return e("throw",t,i,a)})}a(c.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function k(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return M()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=b(t,e,r);if("normal"===s.type){if(n=r.done?d:h,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:M}}function M(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a398:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"Home"}},[r("a",{staticStyle:{display:"none"},attrs:{id:"download"}}),r("div",{staticClass:"jumbotron"},[r("div",{staticClass:"container"},[r("Logo",{attrs:{title:"Översättning"}}),r("p",{staticClass:"lead"},[t._v("\n        Framsteg (% uppdaterad "+t._s(t.updated)+"):"),r("br"),t.progress?r("b-progress",{staticClass:"mb-3",attrs:{value:t.progress,max:100,"show-progress":""}}):t._e()],1)],1)]),r("b-button-toolbar",{staticStyle:{margin:"auto","max-width":"500px"}},[r("b-pagination",{attrs:{"per-page":50,"total-rows":1300,align:"center"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),r("b-button",{staticStyle:{height:"40px","margin-left":"5px"},on:{click:t.prepareDownload}},[t._v(t._s(t.downBtnText))])],1),r("div",{staticClass:"container"},[t._l(t.translations,function(e){return r("div",{key:e.mediainfo_id,staticClass:"row mb-2"},[r("div",{staticClass:"col-md-1"},[r("a",{attrs:{href:"//commons.wikimedia.org/wiki/Special:Redirect/file?wptype=page&wpvalue="+e.mediainfo_id.substring(1)}},[t._v(t._s(e.mediainfo_id))])]),r("div",{staticClass:"col-md-1"},[t._v(t._s(e.local_id))]),r("div",{staticClass:"col-md-5 small"},[t._v(t._s(e.translations[0].value))]),r("div",{staticClass:"col-md-5 small"},[t._v(t._s(e.translations[1].value))])])}),r("hr")],2)],1)},o=[],i=(r("a481"),r("ac6a"),r("96cf"),r("795b")),a=r.n(i);function c(t,e,r,n,o,i,c){try{var s=t[i](c),u=s.value}catch(l){return void r(l)}s.done?e(u):a.a.resolve(u).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new a.a(function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)})}}r("cadf"),r("551c"),r("f751"),r("097d"),r("2f62");var u=r("2241"),l=r("d722"),f={name:"translations",components:{Logo:u["a"]},data:function(){return{progress:null,updated:"",translations:[],page:1,collection:null,translationsForDownload:[],downBtnText:"Download CSV"}},mounted:function(){var t=this;this.collection=this.$route.params.id,Object(l["e"])(this.collection).then(function(e){t.progress=e.data.progress,t.updated=e.data.timestamp}),this.setTranslations(this.page)},methods:{setTranslations:function(t){var e=this;Object(l["d"])(this.collection,t).then(function(t){e.translations=t.data})},syncQueryWrapper:function(t){var e=this;return new a.a(function(r,n){Object(l["d"])(e.collection,t).then(function(t){r(e.translationsForDownload.concat(t.data))}).catch(function(t){r(!1)})})},prepareDownload:function(){var t=s(regeneratorRuntime.mark(function t(){var e,r,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.downBtnText="Generating download",e=!0,r=1;case 3:if(!e){t.next=10;break}return t.next=6,this.syncQueryWrapper(r);case 6:n=t.sent,n?(this.translationsForDownload=n,r+=1):e=!1,t.next=3;break;case 10:o="",this.translations.forEach(function(t){o+="".concat(t.mediainfo_id,",").concat(t.local_id.replace("\n",""),",").concat(t.translations[0].value,",").concat(t.translations[1].value,"\n")}),document.querySelector("#download").href=window.URL.createObjectURL(new Blob([o],{type:"text/csv"})),document.querySelector("#download").download="export.csv",document.querySelector("#download").click(),this.downBtnText="Started Download";case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},watch:{page:function(t){this.setTranslations(this.page)}}},h=f,p=r("2877"),d=Object(p["a"])(h,n,o,!1,null,null,null);e["default"]=d.exports},a481:function(t,e,r){"use strict";var n=r("cb7c"),o=r("4bf8"),i=r("9def"),a=r("4588"),c=r("0390"),s=r("5f1b"),u=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,d=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,function(t,e,r,v){return[function(n,o){var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,o):r.call(String(i),n,o)},function(t,e){var o=v(r,t,this,e);if(o.done)return o.value;var f=n(t),h=String(this),p="function"===typeof e;p||(e=String(e));var y=f.global;if(y){var m=f.unicode;f.lastIndex=0}var w=[];while(1){var x=s(f,h);if(null===x)break;if(w.push(x),!y)break;var b=String(x[0]);""===b&&(f.lastIndex=c(h,i(f.lastIndex),m))}for(var L="",S=0,_=0;_<w.length;_++){x=w[_];for(var E=String(x[0]),T=u(l(a(x.index),h.length),0),k=[],C=1;C<x.length;C++)k.push(d(x[C]));var j=x.groups;if(p){var O=[E].concat(k,T,h);void 0!==j&&O.push(j);var R=String(e.apply(void 0,O))}else R=g(E,h,T,k,j,e);T>=S&&(L+=h.slice(S,T)+R,S=T+E.length)}return L+h.slice(S)}];function g(t,e,n,i,a,c){var s=n+t.length,u=i.length,l=p;return void 0!==a&&(a=o(a),l=h),r.call(c,l,function(r,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var l=+o;if(0===l)return r;if(l>u){var h=f(l/10);return 0===h?r:h<=u?void 0===i[h-1]?o.charAt(1):i[h-1]+o.charAt(1):r}c=i[l-1]}return void 0===c?"":c})}})},ac6a:function(t,e,r){for(var n=r("cadf"),o=r("0d58"),i=r("2aba"),a=r("7726"),c=r("32e9"),s=r("84f2"),u=r("2b4c"),l=u("iterator"),f=u("toStringTag"),h=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=o(p),v=0;v<d.length;v++){var g,y=d[v],m=p[y],w=a[y],x=w&&w.prototype;if(x&&(x[l]||c(x,l,h),x[f]||c(x,f,y),s[y]=h,m))for(g in n)x[g]||i(x,g,n[g],!0)}},b0c5:function(t,e,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})}}]);
//# sourceMappingURL=translation.b473e0f6.js.map