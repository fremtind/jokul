(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4774],{52427:function(t,n,r){var o=r(17389),e=r(74259),i=TypeError;t.exports=function(t){if(o(t))return t;throw i(e(t)+" is not a function")}},76824:function(t,n,r){var o=r(12465),e=String,i=TypeError;t.exports=function(t){if(o(t))return t;throw i(e(t)+" is not an object")}},99483:function(t,n,r){var o=r(82415),e=r(73041),i=r(61166),u=function(t){return function(n,r,u){var c,f=o(n),a=i(f),p=e(u,a);if(t&&r!=r){for(;a>p;)if((c=f[p++])!=c)return!0}else for(;a>p;p++)if((t||p in f)&&f[p]===r)return t||p||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},956:function(t,n,r){var o=r(80764),e=o({}.toString),i=o("".slice);t.exports=function(t){return i(e(t),8,-1)}},67528:function(t,n,r){var o=r(92019),e=Object.defineProperty;t.exports=function(t,n){try{e(o,t,{value:n,configurable:!0,writable:!0})}catch(r){o[t]=n}return n}},12404:function(t,n,r){var o=r(82170);t.exports=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},93398:function(t){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},1220:function(t,n,r){var o=r(92019),e=r(12465),i=o.document,u=e(i)&&e(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},75531:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},27098:function(t,n,r){var o,e,i=r(92019),u=r(75531),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,p=a&&a.v8;p&&(e=(o=p.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!e&&u&&(!(o=u.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=u.match(/Chrome\/(\d+)/))&&(e=+o[1]),t.exports=e},72197:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},82170:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},13780:function(t,n,r){var o=r(82170);t.exports=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},51568:function(t,n,r){var o=r(13780),e=Function.prototype.call;t.exports=o?e.bind(e):function(){return e.apply(e,arguments)}},80764:function(t,n,r){var o=r(13780),e=Function.prototype,i=e.call,u=o&&e.bind.bind(i,i);t.exports=o?u:function(t){return function(){return i.apply(t,arguments)}}},73012:function(t,n,r){var o=r(92019),e=r(17389);t.exports=function(t,n){return arguments.length<2?(r=o[t],e(r)?r:void 0):o[t]&&o[t][n];var r}},28453:function(t,n,r){var o=r(52427),e=r(82109);t.exports=function(t,n){var r=t[n];return e(r)?void 0:o(r)}},92019:function(t,n,r){var o=function(t){return t&&t.Math==Math&&t};t.exports=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof r.g&&r.g)||function(){return this}()||this||Function("return this")()},20627:function(t,n,r){var o=r(80764),e=r(44247),i=o({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(e(t),n)}},96508:function(t){t.exports={}},88437:function(t,n,r){var o=r(12404),e=r(82170),i=r(1220);t.exports=!o&&!e((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},22146:function(t,n,r){var o=r(80764),e=r(82170),i=r(956),u=Object,c=o("".split);t.exports=e((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},17389:function(t,n,r){var o=r(93398),e=o.all;t.exports=o.IS_HTMLDDA?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},82109:function(t){t.exports=function(t){return null==t}},12465:function(t,n,r){var o=r(17389),e=r(93398),i=e.all;t.exports=e.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:o(t)||t===i}:function(t){return"object"==typeof t?null!==t:o(t)}},33709:function(t){t.exports=!1},51666:function(t,n,r){var o=r(73012),e=r(17389),i=r(42378),u=r(78238),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return e(n)&&i(n.prototype,c(t))}},61166:function(t,n,r){var o=r(66772);t.exports=function(t){return o(t.length)}},97951:function(t){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var o=+t;return(o>0?r:n)(o)}},33015:function(t,n,r){var o=r(12404),e=r(88437),i=r(53939),u=r(76824),c=r(61918),f=TypeError,a=Object.defineProperty,p=Object.getOwnPropertyDescriptor,s="enumerable",l="configurable",v="writable";n.f=o?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&v in r&&!r[v]){var o=p(t,n);o&&o[v]&&(t[n]=r.value,r={configurable:l in r?r[l]:o[l],enumerable:s in r?r[s]:o[s],writable:!1})}return a(t,n,r)}:a:function(t,n,r){if(u(t),n=c(n),u(r),e)try{return a(t,n,r)}catch(o){}if("get"in r||"set"in r)throw f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},42378:function(t,n,r){var o=r(80764);t.exports=o({}.isPrototypeOf)},39814:function(t,n,r){var o=r(80764),e=r(20627),i=r(82415),u=r(99483).indexOf,c=r(96508),f=o([].push);t.exports=function(t,n){var r,o=i(t),a=0,p=[];for(r in o)!e(c,r)&&e(o,r)&&f(p,r);for(;n.length>a;)e(o,r=n[a++])&&(~u(p,r)||f(p,r));return p}},29276:function(t,n,r){var o=r(51568),e=r(17389),i=r(12465),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&e(r=t.toString)&&!i(c=o(r,t)))return c;if(e(r=t.valueOf)&&!i(c=o(r,t)))return c;if("string"!==n&&e(r=t.toString)&&!i(c=o(r,t)))return c;throw u("Can't convert object to primitive value")}},28466:function(t,n,r){var o=r(82109),e=TypeError;t.exports=function(t){if(o(t))throw e("Can't call method on "+t);return t}},40019:function(t,n,r){var o=r(34558),e=r(58103),i=o("keys");t.exports=function(t){return i[t]||(i[t]=e(t))}},62548:function(t,n,r){var o=r(92019),e=r(67528),i="__core-js_shared__",u=o[i]||e(i,{});t.exports=u},34558:function(t,n,r){var o=r(33709),e=r(62548);(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.31.0",mode:o?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"})},63488:function(t,n,r){var o=r(27098),e=r(82170),i=r(92019).String;t.exports=!!Object.getOwnPropertySymbols&&!e((function(){var t=Symbol();return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&o&&o<41}))},73041:function(t,n,r){var o=r(86287),e=Math.max,i=Math.min;t.exports=function(t,n){var r=o(t);return r<0?e(r+n,0):i(r,n)}},82415:function(t,n,r){var o=r(22146),e=r(28466);t.exports=function(t){return o(e(t))}},86287:function(t,n,r){var o=r(97951);t.exports=function(t){var n=+t;return n!=n||0===n?0:o(n)}},66772:function(t,n,r){var o=r(86287),e=Math.min;t.exports=function(t){return t>0?e(o(t),9007199254740991):0}},44247:function(t,n,r){var o=r(28466),e=Object;t.exports=function(t){return e(o(t))}},34929:function(t,n,r){var o=r(51568),e=r(12465),i=r(51666),u=r(28453),c=r(29276),f=r(19163),a=TypeError,p=f("toPrimitive");t.exports=function(t,n){if(!e(t)||i(t))return t;var r,f=u(t,p);if(f){if(void 0===n&&(n="default"),r=o(f,t,n),!e(r)||i(r))return r;throw a("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},61918:function(t,n,r){var o=r(34929),e=r(51666);t.exports=function(t){var n=o(t,"string");return e(n)?n:n+""}},74259:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(r){return"Object"}}},58103:function(t,n,r){var o=r(80764),e=0,i=Math.random(),u=o(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++e+i,36)}},78238:function(t,n,r){var o=r(63488);t.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},53939:function(t,n,r){var o=r(12404),e=r(82170);t.exports=o&&e((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},19163:function(t,n,r){var o=r(92019),e=r(34558),i=r(20627),u=r(58103),c=r(63488),f=r(78238),a=o.Symbol,p=e("wks"),s=f?a.for||a:a&&a.withoutSetter||u;t.exports=function(t){return i(p,t)||(p[t]=c&&i(a,t)?a[t]:s("Symbol."+t)),p[t]}},1634:function(t,n,r){"use strict";r.d(n,{M:function(){return f}});var o=r(26372),e=r.n(o),i=r(49597),u=r(70079),c=r(34044);const f=t=>{let{className:n,children:r}=t;const{prefersReducedMotion:o}=(0,u.useContext)(c.R),f="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return u.createElement(i.E.main,{initial:{y:o?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:o?0:-20,opacity:0},transition:{duration:o||f?0:.35},className:e()("jkl-portal__main",n),id:"innhold"},r)}}}]);