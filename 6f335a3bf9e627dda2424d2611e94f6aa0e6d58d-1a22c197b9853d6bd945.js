"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7037],{83765:function(e,t,r){r.d(t,{KM:function(){return m},kq:function(){return f},C9:function(){return p}});var n=r(61631),a=r(65272),s=r(68438),i=r(31215),l=r(26372),o=r.n(l),u=r(70079);const c=(0,u.forwardRef)(((e,t)=>u.createElement("button",Object.assign({},e,{ref:t}))));c.displayName="BaseButton";const d=e=>{const t=(0,u.forwardRef)(((t,r)=>{const{children:l,className:d,density:m,onClick:f,onTouchStart:p,loader:y,arrow:g,...h}=t,v=(0,u.useCallback)((e=>{p&&p(e);const t=e.target;if(t&&e.targetTouches.length){const r=e.targetTouches[0].clientX-t.getBoundingClientRect().x,n=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",r.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",n.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>t.classList.remove("jkl-button--pressed")),400)}}),[p]),b=(0,i.c)(null==y?void 0:y.showLoader);return u.createElement(c,Object.assign({},b,{"data-density":m,className:o()("jkl-button","jkl-button--"+e,d,{"jkl-button--left-arrow":"left"===g,"jkl-button--right-arrow":"right"===g}),disabled:null==y?void 0:y.showLoader,onClick:f,onTouchStart:v},h,{ref:r}),u.createElement("div",{className:"jkl-button__content"},u.createElement("div",{className:o()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==y||!y.showLoader)})},"left"===g&&u.createElement(n.X,{className:"jkl-button__arrow",bold:!0}),u.createElement("span",{className:"jkl-button__children"},l),"right"===g&&u.createElement(a.o,{className:"jkl-button__arrow",bold:!0}),y&&u.createElement("div",{className:"jkl-button__loader"},u.createElement(s.a,{textDescription:y.textDescription,"aria-hidden":!y.showLoader})))))}));return t.displayName="BaseButton",t},m=d("primary");m.displayName="PrimaryButton";const f=d("secondary");f.displayName="SecondaryButton";const p=d("tertiary");p.displayName="TertiaryButton"},96416:function(e,t,r){r.d(t,{iV:function(){return l},o6:function(){return i},uM:function(){return o}});var n=r(26372),a=r.n(n),s=r(70079);const i=e=>{let{children:t,className:r,...n}=e;return s.createElement("dl",Object.assign({},n,{className:a()("jkl-description-list",r)}),t)},l=e=>{let{children:t,className:r,...n}=e;return s.createElement("dt",Object.assign({},n,{className:a()("jkl-description-list__term",r)}),t)},o=e=>{let{children:t,className:r,...n}=e;return s.createElement("dd",Object.assign({},n,{className:a()("jkl-description-list__detail",r)}),t)}},21802:function(e,t,r){r.d(t,{We:function(){return Me},ZP:function(){return Te},Uo:function(){return Ce}});var n=r(70079),a=e=>"checkbox"===e.type,s=e=>e instanceof Date,i=e=>null==e;const l=e=>"object"==typeof e;var o=e=>!i(e)&&!Array.isArray(e)&&l(e)&&!s(e),u=e=>o(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>Array.isArray(e)?e.filter(Boolean):[],m=e=>void 0===e,f=(e,t,r)=>{if(!t||!o(e))return r;const n=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return m(n)||n===e?m(e[t])?r:e[t]:n};const p="blur",y="focusout",g="onBlur",h="onChange",v="onSubmit",b="onTouched",k="all",_="max",w="min",j="maxLength",x="minLength",E="pattern",A="required",S="validate";n.createContext(null);var V=(e,t,r,n=!0)=>{const a={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const a=s;return t._proxyFormState[a]!==k&&(t._proxyFormState[a]=!n||k),r&&(r[a]=!0),e[a]}});return a},F=e=>o(e)&&!Object.keys(e).length,N=(e,t,r)=>{const{name:n,...a}=e;return F(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||k)))},D=e=>Array.isArray(e)?e:[e];function L(e){const t=n.useRef(e);t.current=e,n.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var O=e=>"string"==typeof e,M=(e,t,r,n)=>{const a=Array.isArray(e);return O(e)?(n&&t.watch.add(e),f(r,e)):a?e.map((e=>(n&&t.watch.add(e),f(r,e)))):(n&&(t.watchAll=!0),r)},T=e=>"function"==typeof e,C=e=>{for(const t in e)if(T(e[t]))return!0;return!1};var B=(e,t,r,n,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:a||!0}}:{},W=e=>/^\w*$/.test(e),P=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function U(e,t,r){let n=-1;const a=W(t)?[t]:P(t),s=a.length,i=s-1;for(;++n<s;){const t=a[n];let s=r;if(n!==i){const r=e[t];s=o(r)||Array.isArray(r)?r:isNaN(+a[n+1])?{}:[]}e[t]=s,e=e[t]}return e}const q=(e,t,r)=>{for(const n of r||Object.keys(e)){const r=f(e,n);if(r){const{_f:e,...n}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else o(n)&&q(n,t)}}};var R=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),$=(e,t,r)=>{const n=d(f(e,r));return U(n,"root",t[r]),U(e,r,n),e},I=e=>"boolean"==typeof e,K=e=>"file"===e.type,H=e=>O(e)||n.isValidElement(e),X=e=>"radio"===e.type,Z=e=>e instanceof RegExp;const Q={value:!1,isValid:!1},Y={value:!0,isValid:!0};var z=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!m(e[0].attributes.value)?m(e[0].value)||""===e[0].value?Y:{value:e[0].value,isValid:!0}:Y:Q}return Q};const G={isValid:!1,value:null};var J=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),G):G;function ee(e,t,r="validate"){if(H(e)||Array.isArray(e)&&e.every(H)||I(e)&&!e)return{type:r,message:H(e)?e:"",ref:t}}var te=e=>o(e)&&!Z(e)?e:{value:e,message:""},re=async(e,t,r,n,s)=>{const{ref:l,refs:u,required:c,maxLength:d,minLength:m,min:f,max:p,pattern:y,validate:g,name:h,valueAsNumber:v,mount:b,disabled:k}=e._f;if(!b||k)return{};const V=u?u[0]:l,N=e=>{n&&O(e)&&(V.setCustomValidity(e),V.reportValidity())},D={},L=X(l),M=a(l),C=L||M,W=(v||K(l))&&!l.value||""===t||Array.isArray(t)&&!t.length,P=B.bind(null,h,r,D),U=(e,t,r,n=j,a=x)=>{const s=e?t:r;D[h]={type:e?n:a,message:s,ref:l,...P(e?n:a,s)}};if(s?!Array.isArray(t)||!t.length:c&&(!C&&(W||i(t))||I(t)&&!t||M&&!z(u).isValid||L&&!J(u).isValid)){const{value:e,message:t}=H(c)?{value:!!c,message:c}:te(c);if(e&&(D[h]={type:A,message:t,ref:V,...P(A,t)},!r))return N(t),D}if(!(W||i(f)&&i(p))){let e,n;const a=te(p),s=te(f);if(i(t)||isNaN(t)){const r=l.valueAsDate||new Date(t),i=e=>new Date((new Date).toDateString()+" "+e),o="time"==l.type,u="week"==l.type;O(a.value)&&t&&(e=o?i(t)>i(a.value):u?t>a.value:r>new Date(a.value)),O(s.value)&&t&&(n=o?i(t)<i(s.value):u?t<s.value:r<new Date(s.value))}else{const r=l.valueAsNumber||(t?+t:t);i(a.value)||(e=r>a.value),i(s.value)||(n=r<s.value)}if((e||n)&&(U(!!e,a.message,s.message,_,w),!r))return N(D[h].message),D}if((d||m)&&!W&&(O(t)||s&&Array.isArray(t))){const e=te(d),n=te(m),a=!i(e.value)&&t.length>e.value,s=!i(n.value)&&t.length<n.value;if((a||s)&&(U(a,e.message,n.message),!r))return N(D[h].message),D}if(y&&!W&&O(t)){const{value:e,message:n}=te(y);if(Z(e)&&!t.match(e)&&(D[h]={type:E,message:n,ref:l,...P(E,n)},!r))return N(n),D}if(g)if(T(g)){const e=ee(await g(t),V);if(e&&(D[h]={...e,...P(S,e.message)},!r))return N(e.message),D}else if(o(g)){let e={};for(const n in g){if(!F(e)&&!r)break;const a=ee(await g[n](t),V,n);a&&(e={...a,...P(n,a.message)},N(a.message),r&&(D[h]=e))}if(!F(e)&&(D[h]={ref:V,...e},!r))return D}return N(!0),D};var ne="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function ae(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(ne&&(e instanceof Blob||e instanceof FileList)||!r&&!o(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return o(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=ae(e[r]);else t=e}return t}var se=e=>({isOnSubmit:!e||e===v,isOnBlur:e===g,isOnChange:e===h,isOnAll:e===k,isOnTouch:e===b});function ie(e){for(const t in e)if(!m(e[t]))return!1;return!0}function le(e,t){const r=W(t)?[t]:P(t),n=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=m(e)?n++:e[t[n++]];return e}(e,r),a=r[r.length-1];let s;n&&delete n[a];for(let i=0;i<r.slice(0,-1).length;i++){let t,n=-1;const a=r.slice(0,-(i+1)),l=a.length-1;for(i>0&&(s=e);++n<a.length;){const r=a[n];t=t?t[r]:e[r],l===n&&(o(t)&&F(t)||Array.isArray(t)&&ie(t))&&(s?delete s[r]:delete e[r]),s=t}}return e}function oe(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ue=e=>i(e)||!l(e);function ce(e,t){if(ue(e)||ue(t))return e===t;if(s(e)&&s(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const a of r){const r=e[a];if(!n.includes(a))return!1;if("ref"!==a){const e=t[a];if(s(r)&&s(e)||o(r)&&o(e)||Array.isArray(r)&&Array.isArray(e)?!ce(r,e):r!==e)return!1}}return!0}var de=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},me=e=>"select-multiple"===e.type,fe=e=>de(e)&&e.isConnected;function pe(e,t={}){const r=Array.isArray(e);if(o(e)||r)for(const n in e)Array.isArray(e[n])||o(e[n])&&!C(e[n])?(t[n]=Array.isArray(e[n])?[]:{},pe(e[n],t[n])):i(e[n])||(t[n]=!0);return t}function ye(e,t,r){const n=Array.isArray(e);if(o(e)||n)for(const a in e)Array.isArray(e[a])||o(e[a])&&!C(e[a])?m(t)||ue(r[a])?r[a]=Array.isArray(e[a])?pe(e[a],[]):{...pe(e[a])}:ye(e[a],i(t)?{}:t[a],r[a]):ce(e[a],t[a])?delete r[a]:r[a]=!0;return r}var ge=(e,t)=>ye(e,t,pe(t)),he=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>m(e)?e:t?""===e?NaN:e?+e:e:r&&O(e)?new Date(e):n?n(e):e;function ve(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return K(t)?t.files:X(t)?J(e.refs).value:me(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?z(e.refs).value:he(m(t.value)?e.ref.value:t.value,e)}var be=e=>m(e)?void 0:Z(e)?e.source:o(e)?Z(e.value)?e.value.source:e.value:e;function ke(e,t,r){const n=f(e,r);if(n||W(r))return{error:n,name:r};const a=r.split(".");for(;a.length;){const n=a.join("."),s=f(t,n),i=f(e,n);if(s&&!Array.isArray(s)&&r!==n)return{name:r};if(i&&i.type)return{name:n,error:i};a.pop()}return{name:r}}const _e={mode:v,reValidateMode:h,shouldFocusError:!0};function we(e={}){let t,r={..._e,...e},n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},l={},o=ae(r.defaultValues)||{},g=r.shouldUnregister?{}:ae(o),h={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},b=0,_={};const w={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},j={watch:oe(),array:oe(),state:oe()},x=se(r.mode),E=se(r.reValidateMode),A=r.criteriaMode===k,S=async()=>{let e=!1;return w.isValid&&(e=r.resolver?F((await C()).errors):await B(l,!0),e!==n.isValid&&(n.isValid=e,j.state.next({isValid:e}))),e},V=(e,t,r,n)=>{const a=f(l,e);if(a){const s=f(g,e,m(r)?f(o,e):r);m(s)||n&&n.defaultChecked||t?U(g,e,t?s:ve(a._f)):H(e,s),h.mount&&S()}},N=(e,t,r,a,s)=>{let i=!1;const l={name:e},u=f(n.touchedFields,e);if(w.isDirty){const e=n.isDirty;n.isDirty=l.isDirty=W(),i=e!==l.isDirty}if(w.dirtyFields&&(!r||a)){const r=f(n.dirtyFields,e);ce(f(o,e),t)?le(n.dirtyFields,e):U(n.dirtyFields,e,!0),l.dirtyFields=n.dirtyFields,i=i||r!==f(n.dirtyFields,e)}return r&&!u&&(U(n.touchedFields,e,r),l.touchedFields=n.touchedFields,i=i||w.touchedFields&&u!==r),i&&s&&j.state.next(l),i?l:{}},L=(r,a,s,i)=>{const l=f(n.errors,r),o=w.isValid&&I(a)&&n.isValid!==a;var u;if(e.delayError&&s?(u=()=>((e,t)=>{U(n.errors,e,t),j.state.next({errors:n.errors})})(r,s),t=e=>{clearTimeout(b),b=window.setTimeout(u,e)},t(e.delayError)):(clearTimeout(b),t=null,s?U(n.errors,r,s):le(n.errors,r)),(s?!ce(l,s):l)||!F(i)||o){const e={...i,...o&&I(a)?{isValid:a}:{},errors:n.errors,name:r};n={...n,...e},j.state.next(e)}_[r]--,w.isValidating&&!Object.values(_).some((e=>e))&&(j.state.next({isValidating:!1}),_={})},C=async e=>r.resolver?await r.resolver({...g},r.context,((e,t,r,n)=>{const a={};for(const s of e){const e=f(t,s);e&&U(a,s,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:n}})(e||v.mount,l,r.criteriaMode,r.shouldUseNativeValidation)):{},B=async(e,t,a={valid:!0})=>{for(const s in e){const i=e[s];if(i){const{_f:e,...s}=i;if(e){const s=v.array.has(e.name),l=await re(i,f(g,e.name),A,r.shouldUseNativeValidation,s);if(l[e.name]&&(a.valid=!1,t))break;!t&&(f(l,e.name)?s?$(n.errors,l,e.name):U(n.errors,e.name,l[e.name]):le(n.errors,e.name))}s&&await B(s,t,a)}}return a.valid},W=(e,t)=>(e&&t&&U(g,e,t),!ce(G(),o)),P=(e,t,r)=>{const n={...h.mount?g:m(t)?o:O(e)?{[e]:t}:t};return M(e,v,n,r)},H=(e,t,r={})=>{const n=f(l,e);let s=t;if(n){const r=n._f;r&&(!r.disabled&&U(g,e,he(t,r)),s=ne&&de(r.ref)&&i(t)?"":t,me(r.ref)?[...r.ref.options].forEach((e=>e.selected=s.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(s)?!!s.find((t=>t===e.value)):s===e.value))):r.refs[0]&&(r.refs[0].checked=!!s):r.refs.forEach((e=>e.checked=e.value===s)):K(r.ref)?r.ref.value="":(r.ref.value=s,r.ref.type||j.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&N(e,s,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&z(e)},Z=(e,t,r)=>{for(const n in t){const a=t[n],i=`${e}.${n}`,o=f(l,i);!v.array.has(e)&&ue(a)&&(!o||o._f)||s(a)?H(i,a,r):Z(i,a,r)}},Q=(e,t,r={})=>{const a=f(l,e),s=v.array.has(e),u=ae(t);U(g,e,u),s?(j.array.next({name:e,values:g}),(w.isDirty||w.dirtyFields)&&r.shouldDirty&&(n.dirtyFields=ge(o,g),j.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:W(e,u)}))):!a||a._f||i(u)?H(e,u,r):Z(e,u,r),R(e,v)&&j.state.next({}),j.watch.next({name:e})},Y=async e=>{const a=e.target;let s=a.name;const i=f(l,s);if(i){let c,d;const m=a.type?ve(i._f):u(e),h=e.type===p||e.type===y,b=!((o=i._f).mount&&(o.required||o.min||o.max||o.maxLength||o.minLength||o.pattern||o.validate)||r.resolver||f(n.errors,s)||i._f.deps)||((e,t,r,n,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?n.isOnBlur:a.isOnBlur)?!e:!(r?n.isOnChange:a.isOnChange)||e))(h,f(n.touchedFields,s),n.isSubmitted,E,x),k=R(s,v,h);U(g,s,m),h?(i._f.onBlur&&i._f.onBlur(e),t&&t(0)):i._f.onChange&&i._f.onChange(e);const V=N(s,m,h,!1),D=!F(V)||k;if(!h&&j.watch.next({name:s,type:e.type}),b)return w.isValid&&S(),D&&j.state.next({name:s,...k?{}:V});if(!h&&k&&j.state.next({}),_[s]=_[s]?_[s]+1:1,j.state.next({isValidating:!0}),r.resolver){const{errors:e}=await C([s]),t=ke(n.errors,l,s),r=ke(e,l,t.name||s);c=r.error,s=r.name,d=F(e)}else c=(await re(i,f(g,s),A,r.shouldUseNativeValidation))[s],S();i._f.deps&&z(i._f.deps),L(s,d,c,V)}var o},z=async(e,t={})=>{let a,s;const i=D(e);if(j.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await C();if(e)for(const r of e){const e=f(t,r);e?U(n.errors,r,e):le(n.errors,r)}else n.errors=t;return t})(m(e)?e:i);a=F(t),s=e?!i.some((e=>f(t,e))):a}else e?(s=(await Promise.all(i.map((async e=>{const t=f(l,e);return await B(t&&t._f?{[e]:t}:t)})))).every(Boolean),(s||n.isValid)&&S()):s=a=await B(l);return j.state.next({...!O(e)||w.isValid&&a!==n.isValid?{}:{name:e},...r.resolver||!e?{isValid:a}:{},errors:n.errors,isValidating:!1}),t.shouldFocus&&!s&&q(l,(e=>e&&f(n.errors,e)),e?i:v.mount),s},G=e=>{const t={...o,...h.mount?g:{}};return m(e)?t:O(e)?f(t,e):e.map((e=>f(t,e)))},J=(e,t)=>({invalid:!!f((t||n).errors,e),isDirty:!!f((t||n).dirtyFields,e),isTouched:!!f((t||n).touchedFields,e),error:f((t||n).errors,e)}),ee=(e,t={})=>{for(const a of e?D(e):v.mount)v.mount.delete(a),v.array.delete(a),f(l,a)&&(t.keepValue||(le(l,a),le(g,a)),!t.keepError&&le(n.errors,a),!t.keepDirty&&le(n.dirtyFields,a),!t.keepTouched&&le(n.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&le(o,a));j.watch.next({}),j.state.next({...n,...t.keepDirty?{isDirty:W()}:{}}),!t.keepIsValid&&S()},te=(e,t={})=>{let n=f(l,e);const s=I(t.disabled);return U(l,e,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:e}},name:e,mount:!0,...t}}),v.mount.add(e),n?s&&U(g,e,t.disabled?void 0:f(g,e,ve(n._f))):V(e,!0,t.value),{...s?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:be(t.min),max:be(t.max),minLength:be(t.minLength),maxLength:be(t.maxLength),pattern:be(t.pattern)}:{},name:e,onChange:Y,onBlur:Y,ref:s=>{if(s){te(e,t),n=f(l,e);const r=m(s.value)&&s.querySelectorAll&&s.querySelectorAll("input,select,textarea")[0]||s,i=(e=>X(e)||a(e))(r),u=n._f.refs||[];if(i?u.find((e=>e===r)):r===n._f.ref)return;U(l,e,{_f:{...n._f,...i?{refs:[...u.filter(fe),r,...Array.isArray(f(o,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),V(e,!1,void 0,r)}else n=f(l,e,{}),n._f&&(n._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(v.array,e)||!h.action)&&v.unMount.add(e)}}},ie=()=>r.shouldFocusError&&q(l,(e=>e&&f(n.errors,e)),v.mount);return{control:{register:te,unregister:ee,getFieldState:J,_executeSchema:C,_focusError:ie,_getWatch:P,_getDirty:W,_updateValid:S,_removeUnmounted:()=>{for(const e of v.unMount){const t=f(l,e);t&&(t._f.refs?t._f.refs.every((e=>!fe(e))):!fe(t._f.ref))&&ee(e)}v.unMount=new Set},_updateFieldArray:(e,t=[],r,a,s=!0,i=!0)=>{if(a&&r){if(h.action=!0,i&&Array.isArray(f(l,e))){const t=r(f(l,e),a.argA,a.argB);s&&U(l,e,t)}if(w.errors&&i&&Array.isArray(f(n.errors,e))){const t=r(f(n.errors,e),a.argA,a.argB);s&&U(n.errors,e,t),((e,t)=>{!d(f(e,t)).length&&le(e,t)})(n.errors,e)}if(w.touchedFields&&i&&Array.isArray(f(n.touchedFields,e))){const t=r(f(n.touchedFields,e),a.argA,a.argB);s&&U(n.touchedFields,e,t)}w.dirtyFields&&(n.dirtyFields=ge(o,g)),j.state.next({isDirty:W(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else U(g,e,t)},_getFieldArray:t=>d(f(h.mount?g:o,t,e.shouldUnregister?f(o,t,[]):[])),_subjects:j,_proxyFormState:w,get _fields(){return l},get _formValues(){return g},get _stateFlags(){return h},set _stateFlags(e){h=e},get _defaultValues(){return o},get _names(){return v},set _names(e){v=e},get _formState(){return n},set _formState(e){n=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:z,register:te,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let s=!0,i=ae(g);j.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await C();n.errors=e,i=t}else await B(l);F(n.errors)?(j.state.next({errors:{},isSubmitting:!0}),await e(i,a)):(t&&await t({...n.errors},a),ie())}catch(o){throw s=!1,o}finally{n.isSubmitted=!0,j.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:F(n.errors)&&s,submitCount:n.submitCount+1,errors:n.errors})}},watch:(e,t)=>T(e)?j.watch.subscribe({next:r=>e(P(void 0,t),r)}):P(e,t,!0),setValue:Q,getValues:G,reset:(t,r)=>((t,r={})=>{const a=t||o,s=ae(a),i=t&&!F(t)?s:o;if(r.keepDefaultValues||(o=a),!r.keepValues){if(r.keepDirtyValues)for(const e of v.mount)f(n.dirtyFields,e)?U(i,e,f(g,e)):Q(e,f(i,e));else{if(ne&&m(t))for(const e of v.mount){const t=f(l,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(de(e)){const t=e.closest("form");if(t){t.reset();break}}}}l={}}g=e.shouldUnregister?r.keepDefaultValues?ae(o):{}:s,j.array.next({values:i}),j.watch.next({values:i})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},h.mount=!w.isValid||!!r.keepIsValid,h.watch=!!e.shouldUnregister,j.state.next({submitCount:r.keepSubmitCount?n.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?n.isDirty:!(!r.keepDefaultValues||ce(t,o)),isSubmitted:!!r.keepIsSubmitted&&n.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?n.dirtyFields:r.keepDefaultValues&&t?ge(o,t):{},touchedFields:r.keepTouched?n.touchedFields:{},errors:r.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(T(t)?t(g):t,r),resetField:(e,t={})=>{f(l,e)&&(m(t.defaultValue)?Q(e,f(o,e)):(Q(e,t.defaultValue),U(o,e,t.defaultValue)),t.keepTouched||le(n.touchedFields,e),t.keepDirty||(le(n.dirtyFields,e),n.isDirty=t.defaultValue?W(e,f(o,e)):W()),t.keepError||(le(n.errors,e),w.isValid&&S()),j.state.next({...n}))},clearErrors:e=>{e?D(e).forEach((e=>le(n.errors,e))):n.errors={},j.state.next({errors:n.errors})},unregister:ee,setError:(e,t,r)=>{const a=(f(l,e,{_f:{}})._f||{}).ref;U(n.errors,e,{...t,ref:a}),j.state.next({name:e,errors:n.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=f(l,e),n=r&&r._f;if(n){const e=n.refs?n.refs[0]:n.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:J}}var je=r(83765),xe=r(96416),Ee=r(30342),Ae=r(48546),Se=r(35264),Ve=r(1132),Fe=r(14786),Ne=r(55710),De=r(20054);const Le={fodselsnummer:Ae.X,kortnummer:Ve.U,kontonummer:Se.F,telefonnummer:Ne.P,number:De.u,organisasjonsnummer:Fe.a},Oe=e=>(t,r,n)=>{let a=0,s="";const i=t.register(r,{...n,setValueAs:e=>e.replace(/\s/g,""),onChange:i=>{var l;null==n||null===(l=n.onChange)||void 0===l||l.call(n,i);let o=0;const u=i.target.value.length;null!==i.target.selectionStart&&(o=i.target.selectionStart),t.setValue(r,Le[e](i.target.value,{partial:!0}));let c=null;if(["Delete","Backspace"].includes(s)){c=a-(a-o)}else if(o<i.target.value.length){c=o+(i.target.value.length-u)}null!==c&&i.target.setSelectionRange(c,c,void 0)}}),l={onKeyDown:e=>{null!==e.target.selectionStart&&(a=e.target.selectionStart),s=e.key}};return"number"===e&&(l.align="right"),Object.assign(i,l)},Me=(Oe("fodselsnummer"),Oe("kortnummer"),Oe("kontonummer"),Oe("telefonnummer"),()=>{var e;const t=function(e={}){const t=n.useRef(),[r,a]=n.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...we(e),formState:r});const s=t.current.control;return s._options=e,L({subject:s._subjects.state,callback:n.useCallback((e=>{N(e,s._proxyFormState,!0)&&(s._formState={...s._formState,...e},a({...s._formState}))}),[s])}),n.useEffect((()=>{s._stateFlags.mount||(s._proxyFormState.isValid&&s._updateValid(),s._stateFlags.mount=!0),s._stateFlags.watch&&(s._stateFlags.watch=!1,s._subjects.state.next({})),s._removeUnmounted()})),n.useEffect((()=>{r.submitCount&&s._focusError()}),[s,r.submitCount]),t.current.formState=V(r,s),t.current}(),{0:r,1:a}=(0,n.useState)(),{registerWithFodselsnummerMask:s,registerWithKontonummerMask:i,registerWithKortnummerMask:l,registerWithTelefonnummerMask:o,registerWithOrganisasjonsnummerMask:u,registerWithNumber:c}=(e=>({registerWithFodselsnummerMask:(t,r)=>Oe("fodselsnummer")(e,t,r),registerWithKortnummerMask:(t,r)=>Oe("kortnummer")(e,t,r),registerWithKontonummerMask:(t,r)=>Oe("kontonummer")(e,t,r),registerWithTelefonnummerMask:(t,r)=>Oe("telefonnummer")(e,t,r),registerWithOrganisasjonsnummerMask:(t,r)=>Oe("organisasjonsnummer")(e,t,r),registerWithNumber:(t,r)=>Oe("number")(e,t,r)}))(t);return n.createElement(n.Fragment,null,n.createElement("form",{className:"input-mask-example-form",onSubmit:t.handleSubmit(a)},n.createElement(Ee.o,Object.assign({label:"Telefonnummer",maxLength:11},o("telefonnr",{required:"Du må fylle inn telefonnummeret ditt"}),{errorLabel:null===(e=t.formState.errors.telefonnr)||void 0===e?void 0:e.message})),n.createElement(Ee.o,Object.assign({label:"Fødselsnummer",maxLength:12},s("fodselsnr"))),n.createElement(Ee.o,Object.assign({label:"Kortnummer",maxLength:19},l("kortnr"))),n.createElement(Ee.o,Object.assign({label:"Kontonummer",maxLength:13},i("kontonr"))),n.createElement(Ee.o,Object.assign({label:"Organisasjonsnummer",maxLength:11},u("orgnr"))),n.createElement(Ee.o,Object.assign({label:"Tall"},c("tall"))),n.createElement(je.KM,{type:"submit"},"Send inn"),r&&n.createElement(n.Fragment,null,n.createElement("p",{className:"jkl-heading-1 jkl-spacing-2xl--top"},"Innsendt data:"),n.createElement(xe.o6,{className:"jkl-body"},Object.entries(r).map((e=>{let[t,r]=e;return n.createElement(n.Fragment,{key:t},n.createElement(xe.iV,null,t,":"),n.createElement(xe.uM,null,r))}))))))});var Te=Me;const Ce='\nimport { registerWithMasks } from "@fremtind/jkl-formatters-util";\n\nconst form = useForm<Skjema>();\nconst [formData, setFormData] = useState<Skjema>();\n\nconst {\n    registerWithFodselsnummerMask,\n    registerWithKontonummerMask,\n    registerWithKortnummerMask,\n    registerWithTelefonnummerMask,\n} = registerWithMasks(form);\n\nreturn (\n    <>\n        <form className="input-mask-example-form" onSubmit={form.handleSubmit(setFormData)}>\n            <TextInput\n                label="Telefonnummer"\n                // Husk å gi plass til mellomrommene som settes inn!\n                maxLength={11}\n                {...registerWithTelefonnummerMask("telefonnummer", {\n                    required: "Du må fylle inn telefonnummeret ditt",\n                })}\n                errorLabel={form.formState.errors.telefonnummer?.message}\n            />\n            <TextInput\n                label="Fødselsnummer"\n                maxLength={12}\n                {...registerWithFodselsnummerMask("fodselsnummer")}\n            />\n            <TextInput label="Kortnummer" maxLength={19} {...registerWithKortnummerMask("kortnummer")} />\n            <TextInput label="Kontonummer" maxLength={13} {...registerWithKontonummerMask("kontonummer")} />\n            <PrimaryButton type="submit">Send inn</PrimaryButton>\n        </form>\n        {formData && (\n            <>\n                <p className="jkl-heading-1 jkl-spacing-2xl--top">Innsendt data:</p>\n                <DescriptionList className="jkl-body jkl-spacing-l--top">\n                    {Object.entries(formData).map(([field, value]) => (\n                        <>\n                            <DescriptionTerm>{field}:</DescriptionTerm>\n                            <DescriptionDetail>{value}</DescriptionDetail>\n                        </>\n                    ))}\n                </DescriptionList>\n            </>\n        )}\n    </>\n);'},48546:function(e,t,r){r.d(t,{X:function(){return s}});var n=r(2688);const a={full:/^(\d{6})(\d{5})$/,partial:/^(\d{6})(\d{1,5})?$/};function s(e,t){const r=e.replace(/\W/g,""),s=null!=t&&t.partial?a.partial:a.full,i=r.match(s);return i?i.slice(1).filter(Boolean).join(n.qD):e}},35264:function(e,t,r){r.d(t,{F:function(){return s}});var n=r(2688);const a={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function s(e,t){const r=e.replace(/\W/g,""),s=null!=t&&t.partial?a.partial:a.full,i=r.match(s);return i?i.slice(1).filter(Boolean).join((null==t?void 0:t.separator)||n.qD):e}},1132:function(e,t,r){r.d(t,{U:function(){return s}});var n=r(2688);const a={full:/^(\d{4})(\d{4})(\d{4})(\d{4})$/,partial:/^(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/};function s(e,t){const r=e.replace(/[\s-.]/g,""),s=null!=t&&t.partial?a.partial:a.full,i=r.match(s);return i?i.slice(1).filter(Boolean).join(n.qD):e}},14786:function(e,t,r){r.d(t,{a:function(){return s}});var n=r(2688);const a={full:/^(\d{3})(\d{3})(\d{3})$/,partial:/^(\d{3})(\d{1,3})?(\d{1,5})?$/};function s(e,t){const r=e.replace(/[\s-.]/g,""),s=null!=t&&t.partial?a.partial:a.full,i=r.match(s);return i?i.slice(1).filter(Boolean).join(n.qD):e}},55710:function(e,t,r){r.d(t,{P:function(){return i}});var n=r(93758),a=r(2688);const s={mobil:/^([4|9|8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-7]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([4|9|8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-7]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};function i(e,t){const r=e.replace(/\W/g,""),i=null!=t&&t.partial?s.mobilPartial:s.mobil,l=null!=t&&t.partial?s.fastPartial:s.fast,o=r.match(i)||r.match(l);return o?[null!=t&&t.countryCode?"+"+t.countryCode:void 0].concat((0,n.Z)(o.slice(1))).filter(Boolean).join(a.qD):e}},20054:function(e,t,r){r.d(t,{u:function(){return s}});var n=r(2122);const a={locale:"no-NB"};function s(e,t){const r=(0,n.p)(e);if(!r)return e.toString();const{locale:s,...i}={...a,...t};return new Intl.NumberFormat(s,i).format(r)}},2122:function(e,t,r){r.d(t,{p:function(){return a}});r(55405);const n=(e,t)=>{const r=Array.isArray(e)?e:e.split(""),n=r.lastIndexOf(t);return r.filter(((e,r)=>e!==t||r===n)).join("")};function a(e){if("number"==typeof e)return e;const t=e.replaceAll(/\s/g,"").split(""),r=t.reduce(((e,t)=>","===t||"."===t?t:e),null);return Number("."===r?n(t,".").replace(",",""):","===r?n(t,",").replace(".","").replace(",","."):t.join(""))}},30342:function(e,t,r){r.d(t,{o:function(){return m}});var n=r(4509),a=r(49201),s=r(26317),i=r(22061),l=r(26372),o=r.n(l),u=r(70079);function c(e,t){if(e)return{width:e};if(t){return{width:"calc("+(Math.min(t,40)+"ch")+" + "+"24px"+")"}}}const d=(0,u.forwardRef)(((e,t)=>{let{id:r,describedBy:n,invalid:a,maxLength:s,width:i,type:l="text",align:d="left",className:m="",...f}=e;return u.createElement("input",Object.assign({ref:t,id:r,className:o()("jkl-text-input__input",m,{"jkl-text-input__input--align-right":"right"===d}),style:c(i,s),"aria-describedby":n,"aria-invalid":a,maxLength:s,type:l},f))}));d.displayName="BaseInputField";const m=(0,u.forwardRef)(((e,t)=>{const{id:r,className:l,label:c,labelProps:m,helpLabel:f,errorLabel:p,variant:y,inline:g,density:h,action:v,"data-testautoid":b,inputClassName:k,..._}=e,w=(0,i.M)(r||"jkl-text-input",{generateSuffix:!r}),j=(0,i.M)("jkl-support-label"),x=f||p?j:void 0;return u.createElement("div",{"data-testid":"jkl-text-input",className:o()("jkl-text-input",l,{"jkl-text-input--inline":g,"jkl-text-input--action":v}),"data-density":h},u.createElement(n._,Object.assign({variant:y},m,{srOnly:g||(null==m?void 0:m.srOnly),standAlone:!0,density:h,htmlFor:w}),c),u.createElement("div",{className:"jkl-text-input__input-wrapper"},u.createElement(d,Object.assign({ref:t,id:w,describedBy:x,invalid:!!p,"data-testautoid":b,className:k},_)),v&&u.createElement(s.h,{className:"jkl-text-input__action-button",density:h,iconType:v.icon,buttonTitle:v.label,onClick:v.onClick,onFocus:v.onFocus,onBlur:v.onBlur})),u.createElement(a.A,{id:j,helpLabel:f,errorLabel:p,density:h,srOnly:g}))}));m.displayName="TextInput"},40104:function(e,t,r){r.d(t,{l:function(){return f}});var n=r(31868),a=r(1687),s=r(92365),i=r(70079);const l=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},c=(e,t)=>{const{scrollLeft:r,scrollWidth:n}=e,{clientWidth:a}=t,s=r>0,i=n-r>a;t.classList.toggle("left-shadow",s),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,r=t.parentElement;c(t,r)},m=e=>{let{props:t}=e;const r=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=r.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&c(t,e)}}))})),n=r.current.parentElement.parentElement;t.observe(n,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:r,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(s.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(n=t,n.map((e=>{var t,r;return[e.name?l(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?l(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(r=e.type)&&void 0!==r&&r.name?l(e.type.name):""]})))})));var n},f=e=>{let{types:t}=e;return i.createElement("section",{className:"jkl-spacing-3xl--bottom jkl-portal-paragraph"},i.createElement("h2",{className:"jkl-heading-1 jkl-spacing-3xl--top"},"React API"),i.createElement("p",{className:"jkl-body jkl-spacing-m--top"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(n.U,{className:"jkl-spacing-xl--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,r]=e;const n=r.props?Object.values(r.props).filter(u):[],s=r.props?Object.values(r.props).filter(o):[];return i.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},n.length>0&&i.createElement(m,{props:n}),s.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(m,{props:s})))}))))}},98335:function(e,t,r){r.d(t,{M:function(){return o}});var n=r(26372),a=r.n(n),s=r(8177),i=r(70079),l=r(70113);const o=e=>{let{className:t,children:r}=e;const{prefersReducedMotion:n}=(0,i.useContext)(l.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(s.E.main,{initial:{y:n?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:n?0:-20,opacity:0},transition:{duration:n||o?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},r)}},31868:function(e,t,r){r.d(t,{U:function(){return i}});var n=r(26372),a=r.n(n),s=r(70079);const i=e=>{let{className:t,density:r,...n}=e;return s.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":r,...n})}},1687:function(e,t,r){r.d(t,{Q:function(){return u}});var n=r(22061),a=r(38236),s=r(26372),i=r.n(s),l=r(70079);const o=e=>{let{expanded:t=!1,className:r}=e;return l.createElement("span",{className:i()("jkl-accordion-item__arrow",r,{"jkl-accordion-item__arrow--expanded":t})},l.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),l.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},u=e=>{let{children:t,title:r,className:s,startExpanded:u=!1,onClick:c,...d}=e;const m=(0,n.M)("title"),f=(0,n.M)("content"),{0:p,1:y}=(0,l.useState)(u),[g]=(0,a.v)(p,{easing:"exit",timing:"expressive"});return l.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",s,{"jkl-accordion-item--expanded":p})},l.createElement("button",{id:m,className:"jkl-accordion-item__title",type:"button","aria-expanded":p,"aria-controls":f,onClick:e=>{const t=!p;y(t),c&&c(e,t)}},r,l.createElement(o,{expanded:p})),l.createElement("div",{id:f,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":m,hidden:!p},l.createElement("div",{className:"jkl-accordion-item__content"},t)))}},2688:function(e,t,r){r.d(t,{qD:function(){return n},vk:function(){return a}});const n=" ",a=n},92365:function(e,t,r){r.d(t,{w:function(){return d}});var n=r(70079),a=r(22843),s=r(27415),i=r(5273),l=r(19975),o=r(56685),u=r(294),c=r(94813);const d=(0,n.forwardRef)(((e,t)=>{let{caption:r,columns:d,emptyTableText:m,rows:f,verticalAlign:p,...y}=e;return n.createElement(a.i,{fullWidth:!0,...y,ref:t},r&&n.createElement(i.R,{srOnly:!0},r),n.createElement(o.s,null,n.createElement(c.S,null,d.map(((e,t)=>n.createElement(u.x,{key:t,density:"compact",bold:!0},e))))),n.createElement(s.R,null,0===f.length&&m&&n.createElement(c.S,null,n.createElement(l.p,{colSpan:d.length},m)),f.map(((e,t)=>n.createElement(c.S,{key:t},e.map(((e,t)=>n.createElement(l.p,{key:t,"data-th":d[t],verticalAlign:p},e))))))))}));d.displayName="DataTable"}}]);