(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3245],{9909:function(e,t,n){var r=n(57867),a=n(17389),o=n(956),i=n(19163)("toStringTag"),c=Object,l="Arguments"==o(function(){return arguments}());e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=c(e),i))?n:l?o(t):"Object"==(r=o(t))&&a(t.callee)?"Arguments":r}},59962:function(e,t,n){var r=n(20627),a=n(32463),o=n(83178),i=n(33015);e.exports=function(e,t,n){for(var c=a(t),l=i.f,s=o.f,u=0;u<c.length;u++){var p=c[u];r(e,p)||n&&r(n,p)||l(e,p,s(t,p))}}},3085:function(e,t,n){var r=n(12404),a=n(33015),o=n(30073);e.exports=r?function(e,t,n){return a.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},30073:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},94519:function(e,t,n){var r=n(17389),a=n(33015),o=n(7841),i=n(67528);e.exports=function(e,t,n,c){c||(c={});var l=c.enumerable,s=void 0!==c.name?c.name:t;if(r(n)&&o(n,s,c),c.global)l?e[t]=n:i(t,n);else{try{c.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:a.f(e,t,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return e}},46367:function(e,t,n){var r=n(92019),a=n(83178).f,o=n(3085),i=n(94519),c=n(67528),l=n(59962),s=n(61323);e.exports=function(e,t){var n,u,p,f,d,m=e.target,v=e.global,g=e.stat;if(n=v?r:g?r[m]||c(m,{}):(r[m]||{}).prototype)for(u in t){if(f=t[u],p=e.dontCallGetSet?(d=a(n,u))&&d.value:n[u],!s(v?u:m+(g?".":"#")+u,e.forced)&&void 0!==p){if(typeof f==typeof p)continue;l(f,p)}(e.sham||p&&p.sham)&&o(f,"sham",!0),i(n,u,f,e)}}},95114:function(e,t,n){var r=n(12404),a=n(20627),o=Function.prototype,i=r&&Object.getOwnPropertyDescriptor,c=a(o,"name"),l=c&&"something"===function(){}.name,s=c&&(!r||r&&i(o,"name").configurable);e.exports={EXISTS:c,PROPER:l,CONFIGURABLE:s}},42371:function(e,t,n){var r=n(80764),a=n(44247),o=Math.floor,i=r("".charAt),c=r("".replace),l=r("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,p,f){var d=n+e.length,m=r.length,v=u;return void 0!==p&&(p=a(p),v=s),c(f,v,(function(a,c){var s;switch(i(c,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,d);case"<":s=p[l(c,1,-1)];break;default:var u=+c;if(0===u)return a;if(u>m){var f=o(u/10);return 0===f?a:f<=m?void 0===r[f-1]?i(c,1):r[f-1]+i(c,1):a}s=r[u-1]}return void 0===s?"":s}))}},6070:function(e,t,n){var r=n(80764),a=n(17389),o=n(62548),i=r(Function.toString);a(o.inspectSource)||(o.inspectSource=function(e){return i(e)}),e.exports=o.inspectSource},53292:function(e,t,n){var r,a,o,i=n(43018),c=n(92019),l=n(12465),s=n(3085),u=n(20627),p=n(62548),f=n(40019),d=n(96508),m="Object already initialized",v=c.TypeError,g=c.WeakMap;if(i||p.state){var h=p.state||(p.state=new g);h.get=h.get,h.has=h.has,h.set=h.set,r=function(e,t){if(h.has(e))throw v(m);return t.facade=e,h.set(e,t),t},a=function(e){return h.get(e)||{}},o=function(e){return h.has(e)}}else{var b=f("state");d[b]=!0,r=function(e,t){if(u(e,b))throw v(m);return t.facade=e,s(e,b,t),t},a=function(e){return u(e,b)?e[b]:{}},o=function(e){return u(e,b)}}e.exports={set:r,get:a,has:o,enforce:function(e){return o(e)?a(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=a(t)).type!==e)throw v("Incompatible receiver, "+e+" required");return n}}}},61323:function(e,t,n){var r=n(82170),a=n(17389),o=/#|\.prototype\./,i=function(e,t){var n=l[c(e)];return n==u||n!=s&&(a(t)?r(t):!!t)},c=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},l=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},75863:function(e,t,n){var r=n(12465),a=n(956),o=n(19163)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},7841:function(e,t,n){var r=n(80764),a=n(82170),o=n(17389),i=n(20627),c=n(12404),l=n(95114).CONFIGURABLE,s=n(6070),u=n(53292),p=u.enforce,f=u.get,d=String,m=Object.defineProperty,v=r("".slice),g=r("".replace),h=r([].join),b=c&&!a((function(){return 8!==m((function(){}),"length",{value:8}).length})),y=String(String).split("String"),k=e.exports=function(e,t,n){"Symbol("===v(d(t),0,7)&&(t="["+g(d(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||l&&e.name!==t)&&(c?m(e,"name",{value:t,configurable:!0}):e.name=t),b&&n&&i(n,"arity")&&e.length!==n.arity&&m(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?c&&m(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(a){}var r=p(e);return i(r,"source")||(r.source=h(y,"string"==typeof t?t:"")),e};Function.prototype.toString=k((function(){return o(this)&&f(this).source||s(this)}),"toString")},83178:function(e,t,n){var r=n(12404),a=n(51568),o=n(38327),i=n(30073),c=n(82415),l=n(61918),s=n(20627),u=n(88437),p=Object.getOwnPropertyDescriptor;t.f=r?p:function(e,t){if(e=c(e),t=l(t),u)try{return p(e,t)}catch(n){}if(s(e,t))return i(!a(o.f,e,t),e[t])}},28290:function(e,t,n){var r=n(39814),a=n(72197).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},38891:function(e,t){t.f=Object.getOwnPropertySymbols},38327:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,a=r&&!n.call({1:2},1);t.f=a?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},32463:function(e,t,n){var r=n(73012),a=n(80764),o=n(28290),i=n(38891),c=n(76824),l=a([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(c(e)),n=i.f;return n?l(t,n(e)):t}},68811:function(e,t,n){"use strict";var r=n(76824);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},46059:function(e,t,n){var r=n(51568),a=n(20627),o=n(42378),i=n(68811),c=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in c||a(e,"flags")||!o(c,e)?t:r(i,e)}},57867:function(e,t,n){var r={};r[n(19163)("toStringTag")]="z",e.exports="[object z]"===String(r)},38943:function(e,t,n){var r=n(9909),a=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},43018:function(e,t,n){var r=n(92019),a=n(17389),o=r.WeakMap;e.exports=a(o)&&/native code/.test(String(o))},18961:function(e,t,n){"use strict";var r=n(46367),a=n(51568),o=n(80764),i=n(28466),c=n(17389),l=n(82109),s=n(75863),u=n(38943),p=n(28453),f=n(46059),d=n(42371),m=n(19163),v=n(33709),g=m("replace"),h=TypeError,b=o("".indexOf),y=o("".replace),k=o("".slice),E=Math.max,j=function(e,t,n){return n>e.length?-1:""===t?n:b(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,o,m,w,S,x,N,_,O=i(this),A=0,P=0,R="";if(!l(e)){if((n=s(e))&&(r=u(i(f(e))),!~b(r,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(o=p(e,g))return a(o,e,O,t);if(v&&n)return y(u(O),e,t)}for(m=u(O),w=u(e),(S=c(t))||(t=u(t)),x=w.length,N=E(1,x),A=j(m,w,0);-1!==A;)_=S?u(t(w,A,m)):d(w,m,A,[],void 0,t),R+=k(m,P,A)+_,P=A+x,A=j(m,w,A+N);return P<m.length&&(R+=k(m,P)),R}})},31369:function(e,t,n){n(18961)},72285:function(e,t,n){"use strict";n.d(t,{l:function(){return d}});var r=n(78217),a=n(41994),o=n(87505),i=n(70079);const c=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),l=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,o=n>0,i=r-n>a;t.classList.toggle("left-shadow",o),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,n=t.parentElement;u(t,n)},f=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(o.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},d=e=>{let{types:t}=e;return i.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},i.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),i.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(s):[],o=n.props?Object.values(n.props).filter(l):[];return i.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&i.createElement(f,{props:r}),o.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(f,{props:o})))}))))}},78217:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});var r=n(26372),a=n.n(r),o=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return o.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){"use strict";n.d(t,{Q:function(){return s}});var r=n(53484),a=n(3438),o=n(84490),i=n(26372),c=n.n(i),l=n(70079);const s=e=>{let{children:t,title:n,className:i,startExpanded:s=!1,onClick:u,...p}=e;const f=(0,a.M)("title"),d=(0,a.M)("content"),{0:m,1:v}=(0,l.useState)(s),[g]=(0,o.v)(m,{easing:"exit",timing:"expressive"});return l.createElement("div",{"data-testid":"jkl-accordion-item",...p,className:c()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":m})},l.createElement("button",{id:f,className:"jkl-accordion-item__title",type:"button","aria-expanded":m,"aria-controls":d,onClick:e=>{const t=!m;v(t),u&&u(e,t)}},n,l.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!m,bold:m})),l.createElement("div",{id:d,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":f,hidden:!m},l.createElement("div",{className:"jkl-accordion-item__content"},t)))}},10793:function(e,t,n){"use strict";n.d(t,{qD:function(){return r},vk:function(){return a}});const r=" ",a=r},87505:function(e,t,n){"use strict";n.d(t,{w:function(){return p}});var r=n(70079),a=n(41699),o=n(65174),i=n(6914),c=n(82546),l=n(39126),s=n(66169),u=n(94509);const p=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:f,rows:d,verticalAlign:m,...v}=e;return r.createElement(a.i,{fullWidth:!0,...v,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(l.s,null,r.createElement(u.S,null,p.map(((e,t)=>r.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(o.R,null,0===d.length&&f&&r.createElement(u.S,null,r.createElement(c.p,{colSpan:p.length},f)),d.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(c.p,{key:t,"data-th":p[t],verticalAlign:m},e))))))))}));p.displayName="DataTable"}}]);