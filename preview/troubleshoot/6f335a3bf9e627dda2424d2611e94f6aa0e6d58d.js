"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7037],{56180:function(e,t,r){r.d(t,{C9:function(){return d},KM:function(){return u},kq:function(){return c},zx:function(){return l}});var n=r(41886),s=r(80532),a=r(26372),i=r.n(a),o=r(70079);const l=o.forwardRef((function(e,t){const{as:r="button",children:a,className:l,density:u,onTouchStart:c,loader:d,icon:f,iconPosition:m="left",iconLeft:p,iconRight:g,variant:y="secondary",...h}=e,v=r,b=(0,o.useCallback)((e=>{c&&c(e);const t=e.target;if(t&&!t.disabled&&e.targetTouches.length){const r=e.targetTouches[0].clientX-t.getBoundingClientRect().x,n=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",r.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",n.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[c]),k=(0,s.c)(null==d?void 0:d.showLoader),_=Boolean(a)&&Boolean(null==d?void 0:d.showLoader);return o.createElement(v,Object.assign({},k,{"data-loading":_,"data-density":u,className:i()("jkl-button","jkl-button--"+y,l),disabled:"button"===r?null==d?void 0:d.showLoader:void 0,onTouchStart:b},h,{ref:t}),o.createElement("div",{className:"jkl-button__label"},p&&p,f&&"left"===m&&f,a&&o.createElement("span",{className:"jkl-button__text"},a),g&&g,f&&"right"===m&&f),a&&o.createElement(n.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==d?void 0:d.textDescription)||"Vennligst vent","aria-hidden":!(null!=d&&d.showLoader)}))}));function u(e){const t={...e,variant:"primary"};return o.createElement(l,t)}function c(e){const t={...e,variant:"secondary"};return o.createElement(l,t)}function d(e){const t={...e,variant:"tertiary"};return o.createElement(l,t)}},60565:function(e,t,r){r.d(t,{iV:function(){return o},o6:function(){return i},uM:function(){return l}});var n=r(26372),s=r.n(n),a=r(70079);const i=e=>{let{children:t,className:r,...n}=e;return a.createElement("dl",Object.assign({},n,{className:s()("jkl-description-list",r)}),t)},o=e=>{let{children:t,className:r,...n}=e;return a.createElement("dt",Object.assign({},n,{className:s()("jkl-description-list__term",r)}),t)},l=e=>{let{children:t,className:r,...n}=e;return a.createElement("dd",Object.assign({},n,{className:s()("jkl-description-list__detail",r)}),t)}},11527:function(e,t,r){r.d(t,{We:function(){return Te},ZP:function(){return Be},Uo:function(){return Ce}});var n=r(70079),s=e=>"checkbox"===e.type,a=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"==typeof e;var l=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!a(e),u=e=>l(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function f(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(d&&(e instanceof Blob||e instanceof FileList)||!r&&!l(e))return e;if(t=r?[]:{},r||(e=>{const t=e.constructor&&e.constructor.prototype;return l(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=f(e[r]));else t=e}return t}var m=e=>Array.isArray(e)?e.filter(Boolean):[],p=e=>void 0===e,g=(e,t,r)=>{if(!t||!l(e))return r;const n=m(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return p(n)||n===e?p(e[t])?r:e[t]:n};const y="blur",h="focusout",v="onBlur",b="onChange",k="onSubmit",_="onTouched",x="all",V="max",j="min",A="maxLength",D="minLength",S="pattern",w="required",F="validate";n.createContext(null);var E=(e,t,r,n=!0)=>{const s={defaultValues:t._defaultValues};for(const a in e)Object.defineProperty(s,a,{get:()=>{const s=a;return t._proxyFormState[s]!==x&&(t._proxyFormState[s]=!n||x),r&&(r[s]=!0),e[s]}});return s},O=e=>l(e)&&!Object.keys(e).length,N=(e,t,r,n)=>{r(e);const{name:s,...a}=e;return O(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!n||x)))},L=e=>Array.isArray(e)?e:[e];function M(e){const t=n.useRef(e);t.current=e,n.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var T=e=>"string"==typeof e,B=(e,t,r,n,s)=>T(e)?(n&&t.watch.add(e),g(r,e,s)):Array.isArray(e)?e.map((e=>(n&&t.watch.add(e),g(r,e)))):(n&&(t.watchAll=!0),r);var C=e=>/^\w*$/.test(e),W=e=>m(e.replace(/["|']|\]/g,"").split(/\.|\[/));function P(e,t,r){let n=-1;const s=C(t)?[t]:W(t),a=s.length,i=a-1;for(;++n<a;){const t=s[n];let a=r;if(n!==i){const r=e[t];a=l(r)||Array.isArray(r)?r:isNaN(+s[n+1])?{}:[]}e[t]=a,e=e[t]}return e}var $=(e,t,r,n,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:s||!0}}:{};const q=(e,t,r)=>{for(const n of r||Object.keys(e)){const r=g(e,n);if(r){const{_f:e,...n}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else l(n)&&q(n,t)}}};var U=e=>({isOnSubmit:!e||e===k,isOnBlur:e===v,isOnChange:e===b,isOnAll:e===x,isOnTouch:e===_}),K=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),I=(e,t,r)=>{const n=m(g(e,r));return P(n,"root",t[r]),P(e,r,n),e},R=e=>"boolean"==typeof e,H=e=>"file"===e.type,X=e=>"function"==typeof e,J=e=>{if(!d)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Y=e=>T(e),Z=e=>"radio"===e.type,z=e=>e instanceof RegExp;const G={value:!1,isValid:!1},Q={value:!0,isValid:!0};var ee=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!p(e[0].attributes.value)?p(e[0].value)||""===e[0].value?Q:{value:e[0].value,isValid:!0}:Q:G}return G};const te={isValid:!1,value:null};var re=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),te):te;function ne(e,t,r="validate"){if(Y(e)||Array.isArray(e)&&e.every(Y)||R(e)&&!e)return{type:r,message:Y(e)?e:"",ref:t}}var se=e=>l(e)&&!z(e)?e:{value:e,message:""},ae=async(e,t,r,n,a)=>{const{ref:o,refs:u,required:c,maxLength:d,minLength:f,min:m,max:y,pattern:h,validate:v,name:b,valueAsNumber:k,mount:_,disabled:x}=e._f,E=g(t,b);if(!_||x)return{};const N=u?u[0]:o,L=e=>{n&&N.reportValidity&&(N.setCustomValidity(R(e)?"":e||""),N.reportValidity())},M={},B=Z(o),C=s(o),W=B||C,P=(k||H(o))&&p(o.value)&&p(E)||J(o)&&""===o.value||""===E||Array.isArray(E)&&!E.length,q=$.bind(null,b,r,M),U=(e,t,r,n=A,s=D)=>{const a=e?t:r;M[b]={type:e?n:s,message:a,ref:o,...q(e?n:s,a)}};if(a?!Array.isArray(E)||!E.length:c&&(!W&&(P||i(E))||R(E)&&!E||C&&!ee(u).isValid||B&&!re(u).isValid)){const{value:e,message:t}=Y(c)?{value:!!c,message:c}:se(c);if(e&&(M[b]={type:w,message:t,ref:N,...q(w,t)},!r))return L(t),M}if(!(P||i(m)&&i(y))){let e,t;const n=se(y),s=se(m);if(i(E)||isNaN(E)){const r=o.valueAsDate||new Date(E),a=e=>new Date((new Date).toDateString()+" "+e),i="time"==o.type,l="week"==o.type;T(n.value)&&E&&(e=i?a(E)>a(n.value):l?E>n.value:r>new Date(n.value)),T(s.value)&&E&&(t=i?a(E)<a(s.value):l?E<s.value:r<new Date(s.value))}else{const r=o.valueAsNumber||(E?+E:E);i(n.value)||(e=r>n.value),i(s.value)||(t=r<s.value)}if((e||t)&&(U(!!e,n.message,s.message,V,j),!r))return L(M[b].message),M}if((d||f)&&!P&&(T(E)||a&&Array.isArray(E))){const e=se(d),t=se(f),n=!i(e.value)&&E.length>+e.value,s=!i(t.value)&&E.length<+t.value;if((n||s)&&(U(n,e.message,t.message),!r))return L(M[b].message),M}if(h&&!P&&T(E)){const{value:e,message:t}=se(h);if(z(e)&&!E.match(e)&&(M[b]={type:S,message:t,ref:o,...q(S,t)},!r))return L(t),M}if(v)if(X(v)){const e=ne(await v(E,t),N);if(e&&(M[b]={...e,...q(F,e.message)},!r))return L(e.message),M}else if(l(v)){let e={};for(const n in v){if(!O(e)&&!r)break;const s=ne(await v[n](E,t),N,n);s&&(e={...s,...q(n,s.message)},L(s.message),r&&(M[b]=e))}if(!O(e)&&(M[b]={ref:N,...e},!r))return M}return L(!0),M};function ie(e,t){const r=Array.isArray(t)?t:C(t)?[t]:W(t),n=1===r.length?e:function(e,t){const r=t.slice(0,-1).length;let n=0;for(;n<r;)e=p(e)?n++:e[t[n++]];return e}(e,r),s=r.length-1,a=r[s];return n&&delete n[a],0!==s&&(l(n)&&O(n)||Array.isArray(n)&&function(e){for(const t in e)if(e.hasOwnProperty(t)&&!p(e[t]))return!1;return!0}(n))&&ie(e,r.slice(0,-1)),e}function oe(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var le=e=>i(e)||!o(e);function ue(e,t){if(le(e)||le(t))return e===t;if(a(e)&&a(t))return e.getTime()===t.getTime();const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(const s of r){const r=e[s];if(!n.includes(s))return!1;if("ref"!==s){const e=t[s];if(a(r)&&a(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!ue(r,e):r!==e)return!1}}return!0}var ce=e=>"select-multiple"===e.type,de=e=>J(e)&&e.isConnected,fe=e=>{for(const t in e)if(X(e[t]))return!0;return!1};function me(e,t={}){const r=Array.isArray(e);if(l(e)||r)for(const n in e)Array.isArray(e[n])||l(e[n])&&!fe(e[n])?(t[n]=Array.isArray(e[n])?[]:{},me(e[n],t[n])):i(e[n])||(t[n]=!0);return t}function pe(e,t,r){const n=Array.isArray(e);if(l(e)||n)for(const s in e)Array.isArray(e[s])||l(e[s])&&!fe(e[s])?p(t)||le(r[s])?r[s]=Array.isArray(e[s])?me(e[s],[]):{...me(e[s])}:pe(e[s],i(t)?{}:t[s],r[s]):r[s]=!ue(e[s],t[s]);return r}var ge=(e,t)=>pe(e,t,me(t)),ye=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:n})=>p(e)?e:t?""===e?NaN:e?+e:e:r&&T(e)?new Date(e):n?n(e):e;function he(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return H(t)?t.files:Z(t)?re(e.refs).value:ce(t)?[...t.selectedOptions].map((({value:e})=>e)):s(t)?ee(e.refs).value:ye(p(t.value)?e.ref.value:t.value,e)}var ve=e=>p(e)?e:z(e)?e.source:l(e)?z(e.value)?e.value.source:e.value:e;function be(e,t,r){const n=g(e,r);if(n||C(r))return{error:n,name:r};const s=r.split(".");for(;s.length;){const n=s.join("."),a=g(t,n),i=g(e,n);if(a&&!Array.isArray(a)&&r!==n)return{name:r};if(i&&i.type)return{name:n,error:i};s.pop()}return{name:r}}const ke={mode:k,reValidateMode:b,shouldFocusError:!0};function _e(e={},t){let r,n={...ke,...e},o={submitCount:0,isDirty:!1,isLoading:X(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},v={},b=(l(n.defaultValues)||l(n.values))&&f(n.defaultValues||n.values)||{},k=n.shouldUnregister?{}:f(b),_={action:!1,mount:!1,watch:!1},V={mount:new Set,unMount:new Set,array:new Set,watch:new Set},j=0;const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},D={values:oe(),array:oe(),state:oe()},S=e.resetOptions&&e.resetOptions.keepDirtyValues,w=U(n.mode),F=U(n.reValidateMode),E=n.criteriaMode===x,N=async e=>{if(A.isValid||e){const e=n.resolver?O((await Y()).errors):await z(v,!0);e!==o.isValid&&D.state.next({isValid:e})}},M=e=>A.isValidating&&D.state.next({isValidating:e}),C=(e,t,r,n)=>{const s=g(v,e);if(s){const a=g(k,e,p(r)?g(b,e):r);p(a)||n&&n.defaultChecked||t?P(k,e,t?a:he(s._f)):ee(e,a),_.mount&&N()}},W=(e,t,r,n,s)=>{let a=!1,i=!1;const l={name:e};if(!r||n){A.isDirty&&(i=o.isDirty,o.isDirty=l.isDirty=G(),a=i!==l.isDirty);const r=ue(g(b,e),t);i=g(o.dirtyFields,e),r?ie(o.dirtyFields,e):P(o.dirtyFields,e,!0),l.dirtyFields=o.dirtyFields,a=a||A.dirtyFields&&i!==!r}if(r){const t=g(o.touchedFields,e);t||(P(o.touchedFields,e,r),l.touchedFields=o.touchedFields,a=a||A.touchedFields&&t!==r)}return a&&s&&D.state.next(l),a?l:{}},$=(t,n,s,a)=>{const i=g(o.errors,t),l=A.isValid&&R(n)&&o.isValid!==n;var u;if(e.delayError&&s?(u=()=>((e,t)=>{P(o.errors,e,t),D.state.next({errors:o.errors})})(t,s),r=e=>{clearTimeout(j),j=setTimeout(u,e)},r(e.delayError)):(clearTimeout(j),r=null,s?P(o.errors,t,s):ie(o.errors,t)),(s?!ue(i,s):i)||!O(a)||l){const e={...a,...l&&R(n)?{isValid:n}:{},errors:o.errors,name:t};o={...o,...e},D.state.next(e)}M(!1)},Y=async e=>n.resolver(k,n.context,((e,t,r,n)=>{const s={};for(const a of e){const e=g(t,a);e&&P(s,a,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:n}})(e||V.mount,v,n.criteriaMode,n.shouldUseNativeValidation)),z=async(e,t,r={valid:!0})=>{for(const s in e){const a=e[s];if(a){const{_f:e,...s}=a;if(e){const s=V.array.has(e.name),i=await ae(a,k,E,n.shouldUseNativeValidation&&!t,s);if(i[e.name]&&(r.valid=!1,t))break;!t&&(g(i,e.name)?s?I(o.errors,i,e.name):P(o.errors,e.name,i[e.name]):ie(o.errors,e.name))}s&&await z(s,t,r)}}return r.valid},G=(e,t)=>(e&&t&&P(k,e,t),!ue(fe(),b)),Q=(e,t,r)=>B(e,V,{..._.mount?k:p(t)?b:T(e)?{[e]:t}:t},r,t),ee=(e,t,r={})=>{const n=g(v,e);let a=t;if(n){const r=n._f;r&&(!r.disabled&&P(k,e,ye(t,r)),a=J(r.ref)&&i(t)?"":t,ce(r.ref)?[...r.ref.options].forEach((e=>e.selected=a.includes(e.value))):r.refs?s(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value))):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach((e=>e.checked=e.value===a)):H(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||D.values.next({name:e,values:{...k}})))}(r.shouldDirty||r.shouldTouch)&&W(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&se(e)},te=(e,t,r)=>{for(const n in t){const s=t[n],i=`${e}.${n}`,o=g(v,i);!V.array.has(e)&&le(s)&&(!o||o._f)||a(s)?ee(i,s,r):te(i,s,r)}},re=(e,r,n={})=>{const s=g(v,e),a=V.array.has(e),l=f(r);P(k,e,l),a?(D.array.next({name:e,values:{...k}}),(A.isDirty||A.dirtyFields)&&n.shouldDirty&&D.state.next({name:e,dirtyFields:ge(b,k),isDirty:G(e,l)})):!s||s._f||i(l)?ee(e,l,n):te(e,l,n),K(e,V)&&D.state.next({...o}),D.values.next({name:e,values:{...k}}),!_.mount&&t()},ne=async e=>{const t=e.target;let s=t.name,a=!0;const i=g(v,s);if(i){let c,d;const f=t.type?he(i._f):u(e),m=e.type===y||e.type===h,p=!((l=i._f).mount&&(l.required||l.min||l.max||l.maxLength||l.minLength||l.pattern||l.validate)||n.resolver||g(o.errors,s)||i._f.deps)||((e,t,r,n,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?n.isOnBlur:s.isOnBlur)?!e:!(r?n.isOnChange:s.isOnChange)||e))(m,g(o.touchedFields,s),o.isSubmitted,F,w),b=K(s,V,m);P(k,s,f),m?(i._f.onBlur&&i._f.onBlur(e),r&&r(0)):i._f.onChange&&i._f.onChange(e);const _=W(s,f,m,!1),x=!O(_)||b;if(!m&&D.values.next({name:s,type:e.type,values:{...k}}),p)return A.isValid&&N(),x&&D.state.next({name:s,...b?{}:_});if(!m&&b&&D.state.next({...o}),M(!0),n.resolver){const{errors:e}=await Y([s]),t=be(o.errors,v,s),r=be(e,v,t.name||s);c=r.error,s=r.name,d=O(e)}else c=(await ae(i,k,E,n.shouldUseNativeValidation))[s],a=isNaN(f)||f===g(k,s,f),a&&(c?d=!1:A.isValid&&(d=await z(v,!0)));a&&(i._f.deps&&se(i._f.deps),$(s,d,c,_))}var l},se=async(e,t={})=>{let r,s;const a=L(e);if(M(!0),n.resolver){const t=await(async e=>{const{errors:t}=await Y();if(e)for(const r of e){const e=g(t,r);e?P(o.errors,r,e):ie(o.errors,r)}else o.errors=t;return t})(p(e)?e:a);r=O(t),s=e?!a.some((e=>g(t,e))):r}else e?(s=(await Promise.all(a.map((async e=>{const t=g(v,e);return await z(t&&t._f?{[e]:t}:t)})))).every(Boolean),(s||o.isValid)&&N()):s=r=await z(v);return D.state.next({...!T(e)||A.isValid&&r!==o.isValid?{}:{name:e},...n.resolver||!e?{isValid:r}:{},errors:o.errors,isValidating:!1}),t.shouldFocus&&!s&&q(v,(e=>e&&g(o.errors,e)),e?a:V.mount),s},fe=e=>{const t={...b,..._.mount?k:{}};return p(e)?t:T(e)?g(t,e):e.map((e=>g(t,e)))},me=(e,t)=>({invalid:!!g((t||o).errors,e),isDirty:!!g((t||o).dirtyFields,e),isTouched:!!g((t||o).touchedFields,e),error:g((t||o).errors,e)}),pe=(e,t,r)=>{const n=(g(v,e,{_f:{}})._f||{}).ref;P(o.errors,e,{...t,ref:n}),D.state.next({name:e,errors:o.errors,isValid:!1}),r&&r.shouldFocus&&n&&n.focus&&n.focus()},_e=(e,t={})=>{for(const r of e?L(e):V.mount)V.mount.delete(r),V.array.delete(r),t.keepValue||(ie(v,r),ie(k,r)),!t.keepError&&ie(o.errors,r),!t.keepDirty&&ie(o.dirtyFields,r),!t.keepTouched&&ie(o.touchedFields,r),!n.shouldUnregister&&!t.keepDefaultValue&&ie(b,r);D.values.next({values:{...k}}),D.state.next({...o,...t.keepDirty?{isDirty:G()}:{}}),!t.keepIsValid&&N()},xe=(e,t={})=>{let r=g(v,e);const a=R(t.disabled);return P(v,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),V.mount.add(e),r?a&&P(k,e,t.disabled?void 0:g(k,e,he(r._f))):C(e,!0,t.value),{...a?{disabled:t.disabled}:{},...n.progressive?{required:!!t.required,min:ve(t.min),max:ve(t.max),minLength:ve(t.minLength),maxLength:ve(t.maxLength),pattern:ve(t.pattern)}:{},name:e,onChange:ne,onBlur:ne,ref:a=>{if(a){xe(e,t),r=g(v,e);const n=p(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,i=(e=>Z(e)||s(e))(n),o=r._f.refs||[];if(i?o.find((e=>e===n)):n===r._f.ref)return;P(v,e,{_f:{...r._f,...i?{refs:[...o.filter(de),n,...Array.isArray(g(b,e))?[{}]:[]],ref:{type:n.type,name:e}}:{ref:n}}}),C(e,!1,void 0,n)}else r=g(v,e,{}),r._f&&(r._f.mount=!1),(n.shouldUnregister||t.shouldUnregister)&&(!c(V.array,e)||!_.action)&&V.unMount.add(e)}}},Ve=()=>n.shouldFocusError&&q(v,(e=>e&&g(o.errors,e)),V.mount),je=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let s=f(k);if(D.state.next({isSubmitting:!0}),n.resolver){const{errors:e,values:t}=await Y();o.errors=e,s=t}else await z(v);ie(o.errors,"root"),O(o.errors)?(D.state.next({errors:{}}),await e(s,r)):(t&&await t({...o.errors},r),Ve(),setTimeout(Ve)),D.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:O(o.errors),submitCount:o.submitCount+1,errors:o.errors})},Ae=(r,n={})=>{const s=r||b,a=f(s),i=r&&!O(r)?a:b;if(n.keepDefaultValues||(b=s),!n.keepValues){if(n.keepDirtyValues||S)for(const e of V.mount)g(o.dirtyFields,e)?P(i,e,g(k,e)):re(e,g(i,e));else{if(d&&p(r))for(const e of V.mount){const t=g(v,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(J(e)){const t=e.closest("form");if(t){t.reset();break}}}}v={}}k=e.shouldUnregister?n.keepDefaultValues?f(b):{}:f(i),D.array.next({values:{...i}}),D.values.next({values:{...i}})}V={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!_.mount&&t(),_.mount=!A.isValid||!!n.keepIsValid,_.watch=!!e.shouldUnregister,D.state.next({submitCount:n.keepSubmitCount?o.submitCount:0,isDirty:n.keepDirty?o.isDirty:!(!n.keepDefaultValues||ue(r,b)),isSubmitted:!!n.keepIsSubmitted&&o.isSubmitted,dirtyFields:n.keepDirtyValues?o.dirtyFields:n.keepDefaultValues&&r?ge(b,r):{},touchedFields:n.keepTouched?o.touchedFields:{},errors:n.keepErrors?o.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},De=(e,t)=>Ae(X(e)?e(k):e,t);return{control:{register:xe,unregister:_e,getFieldState:me,handleSubmit:je,setError:pe,_executeSchema:Y,_getWatch:Q,_getDirty:G,_updateValid:N,_removeUnmounted:()=>{for(const e of V.unMount){const t=g(v,e);t&&(t._f.refs?t._f.refs.every((e=>!de(e))):!de(t._f.ref))&&_e(e)}V.unMount=new Set},_updateFieldArray:(e,t=[],r,n,s=!0,a=!0)=>{if(n&&r){if(_.action=!0,a&&Array.isArray(g(v,e))){const t=r(g(v,e),n.argA,n.argB);s&&P(v,e,t)}if(a&&Array.isArray(g(o.errors,e))){const t=r(g(o.errors,e),n.argA,n.argB);s&&P(o.errors,e,t),((e,t)=>{!m(g(e,t)).length&&ie(e,t)})(o.errors,e)}if(A.touchedFields&&a&&Array.isArray(g(o.touchedFields,e))){const t=r(g(o.touchedFields,e),n.argA,n.argB);s&&P(o.touchedFields,e,t)}A.dirtyFields&&(o.dirtyFields=ge(b,k)),D.state.next({name:e,isDirty:G(e,t),dirtyFields:o.dirtyFields,errors:o.errors,isValid:o.isValid})}else P(k,e,t)},_getFieldArray:t=>m(g(_.mount?k:b,t,e.shouldUnregister?g(b,t,[]):[])),_reset:Ae,_resetDefaultValues:()=>X(n.defaultValues)&&n.defaultValues().then((e=>{De(e,n.resetOptions),D.state.next({isLoading:!1})})),_updateFormState:e=>{o={...o,...e}},_subjects:D,_proxyFormState:A,get _fields(){return v},get _formValues(){return k},get _state(){return _},set _state(e){_=e},get _defaultValues(){return b},get _names(){return V},set _names(e){V=e},get _formState(){return o},set _formState(e){o=e},get _options(){return n},set _options(e){n={...n,...e}}},trigger:se,register:xe,handleSubmit:je,watch:(e,t)=>X(e)?D.values.subscribe({next:r=>e(Q(void 0,t),r)}):Q(e,t,!0),setValue:re,getValues:fe,reset:De,resetField:(e,t={})=>{g(v,e)&&(p(t.defaultValue)?re(e,g(b,e)):(re(e,t.defaultValue),P(b,e,t.defaultValue)),t.keepTouched||ie(o.touchedFields,e),t.keepDirty||(ie(o.dirtyFields,e),o.isDirty=t.defaultValue?G(e,g(b,e)):G()),t.keepError||(ie(o.errors,e),A.isValid&&N()),D.state.next({...o}))},clearErrors:e=>{e&&L(e).forEach((e=>ie(o.errors,e))),D.state.next({errors:e?o.errors:{}})},unregister:_e,setError:pe,setFocus:(e,t={})=>{const r=g(v,e),n=r&&r._f;if(n){const e=n.refs?n.refs[0]:n.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:me}}var xe=r(56180),Ve=r(91517),je=r(60565),Ae=r(54790),De=r(22810),Se=r(45469),we=r(51158),Fe=r(83435),Ee=r(6490),Oe=r(59269),Ne=r(20439);const Le={date:De.ie,fodselsnummer:Se.X,kortnummer:Fe.U,kontonummer:we.F,telefonnummer:Oe.P,number:Ne.u,organisasjonsnummer:Ee.a},Me=(e,t)=>(r,n)=>{let s=0,a="";const i={setValueAs:e=>e.replace(/\s/g,""),onChange:i=>{var o;null==n||null===(o=n.onChange)||void 0===o||o.call(n,i);let l=0;const u=i.target.value.length;null!==i.target.selectionStart&&(l=i.target.selectionStart),t.setValue(r,Le[e](i.target.value,{partial:!0}));let c=null;if(["Delete","Backspace"].includes(a)){c=s-(s-l)}else if(l<i.target.value.length){c=l+(i.target.value.length-u)}null!==c&&i.target.setSelectionRange(c,c,void 0)}};n&&Object.assign(i,n);const o=t.register(r,i),l={onKeyDown:e=>{null!==e.target.selectionStart&&(s=e.target.selectionStart),a=e.key}};return"number"===e&&(l.align="right"),Object.assign(o,l)},Te=()=>{var e;const t=function(e={}){const t=n.useRef(),[r,s]=n.useState({isDirty:!1,isValidating:!1,isLoading:X(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:X(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={..._e(e,(()=>s((e=>({...e}))))),formState:r});const a=t.current.control;return a._options=e,M({subject:a._subjects.state,next:e=>{N(e,a._proxyFormState,a._updateFormState,!0)&&s({...a._formState})}}),n.useEffect((()=>{e.values&&!ue(e.values,a._defaultValues)?a._reset(e.values,a._options.resetOptions):a._resetDefaultValues()}),[e.values,a]),n.useEffect((()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()})),t.current.formState=E(r,a),t.current}(),{0:r,1:s}=(0,n.useState)(),{registerWithDateMask:a,registerWithFodselsnummerMask:i,registerWithKontonummerMask:o,registerWithKortnummerMask:l,registerWithTelefonnummerMask:u,registerWithOrganisasjonsnummerMask:c,registerWithNumber:d}=(e=>({registerWithFodselsnummerMask:Me("fodselsnummer",e),registerWithKortnummerMask:Me("kortnummer",e),registerWithKontonummerMask:Me("kontonummer",e),registerWithTelefonnummerMask:Me("telefonnummer",e),registerWithOrganisasjonsnummerMask:Me("organisasjonsnummer",e),registerWithDateMask:Me("date",e),registerWithNumber:Me("number",e)}))(t);return n.createElement(n.Fragment,null,n.createElement("form",{className:"input-mask-example-form",onSubmit:t.handleSubmit(s)},n.createElement(Ae.o,Object.assign({label:"Dato",maxLength:10},a("dato"))),n.createElement(Ve.M,Object.assign({label:"Dato brukt i datovelger"},a("datepicker"))),n.createElement(Ae.o,Object.assign({label:"Telefonnummer",maxLength:11},u("telefonnr",{required:"Du må fylle inn telefonnummeret ditt"}),{errorLabel:null===(e=t.formState.errors.telefonnr)||void 0===e?void 0:e.message})),n.createElement(Ae.o,Object.assign({label:"Fødselsnummer",maxLength:12},i("fodselsnr"))),n.createElement(Ae.o,Object.assign({label:"Kortnummer",maxLength:19},l("kortnr"))),n.createElement(Ae.o,Object.assign({label:"Kontonummer",maxLength:13},o("kontonr"))),n.createElement(Ae.o,Object.assign({label:"Organisasjonsnummer",maxLength:11},c("orgnr"))),n.createElement(Ae.o,Object.assign({label:"Tall"},d("tall"))),n.createElement(xe.KM,{type:"submit"},"Send inn"),r&&n.createElement(n.Fragment,null,n.createElement("p",{className:"jkl-heading-1 jkl-spacing-2xl--top"},"Innsendt data:"),n.createElement(je.o6,{className:"jkl-body"},Object.entries(r).map((e=>{let[t,r]=e;return n.createElement(n.Fragment,{key:t},n.createElement(je.iV,null,t,":"),n.createElement(je.uM,null,r))}))))))};var Be=Te;const Ce='\nimport { registerWithMasks } from "@fremtind/jkl-formatters-util";\nimport { useForm } from "react-hook-form";\n\nconst form = useForm<Skjema>();\nconst [formData, setFormData] = useState<Skjema>();\n\nconst {\n    registerWithFodselsnummerMask,\n    registerWithKontonummerMask,\n    registerWithKortnummerMask,\n    registerWithTelefonnummerMask,\n} = registerWithMasks(form);\n\nreturn (\n    <>\n        <form className="input-mask-example-form" onSubmit={form.handleSubmit(setFormData)}>\n            <TextInput\n                label="Telefonnummer"\n                // Husk å gi plass til mellomrommene som settes inn!\n                maxLength={11}\n                {...registerWithTelefonnummerMask("telefonnummer", {\n                    required: "Du må fylle inn telefonnummeret ditt",\n                })}\n                errorLabel={form.formState.errors.telefonnummer?.message}\n            />\n            <TextInput\n                label="Fødselsnummer"\n                maxLength={12}\n                {...registerWithFodselsnummerMask("fodselsnummer")}\n            />\n            <TextInput label="Kortnummer" maxLength={19} {...registerWithKortnummerMask("kortnummer")} />\n            <TextInput label="Kontonummer" maxLength={13} {...registerWithKontonummerMask("kontonummer")} />\n            <PrimaryButton type="submit">Send inn</PrimaryButton>\n        </form>\n        {formData && (\n            <>\n                <p className="jkl-heading-1 jkl-spacing-2xl--top">Innsendt data:</p>\n                <DescriptionList className="jkl-body jkl-spacing-l--top">\n                    {Object.entries(formData).map(([field, value]) => (\n                        <>\n                            <DescriptionTerm>{field}:</DescriptionTerm>\n                            <DescriptionDetail>{value}</DescriptionDetail>\n                        </>\n                    ))}\n                </DescriptionList>\n            </>\n        )}\n    </>\n);'},22810:function(e,t,r){function n(e){return(""+e.getDate()).padStart(2,"0")+"."+(""+(e.getMonth()+1)).padStart(2,"0")+"."+e.getFullYear()}r.d(t,{ie:function(){return a},p6:function(){return n}});const s={full:/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(\d{2}|\d{4})$/,partial:/^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])?(\d{1,4})?$/};function a(e,t){const r=e.replace(/\D/g,""),n=null!=t&&t.partial?s.partial:s.full,a=r.match(n);return a?a.slice(1).filter(Boolean).join("."):e}},45469:function(e,t,r){r.d(t,{X:function(){return a}});var n=r(10793);const s={full:/^(\d{6})(\d{5})$/,partial:/^(\d{6})(\d{1,5})?$/};function a(e,t){const r=e.replace(/\W/g,""),a=null!=t&&t.partial?s.partial:s.full,i=r.match(a);return i?i.slice(1).filter(Boolean).join(n.qD):e}},51158:function(e,t,r){r.d(t,{F:function(){return a}});var n=r(10793);const s={full:/^(\d{4})(\d{2})(\d{5})$/,partial:/^(\d{4})(\d{1,2})?(\d{1,5})?$/};function a(e,t){const r=e.replace(/\W/g,""),a=null!=t&&t.partial?s.partial:s.full,i=r.match(a);return i?i.slice(1).filter(Boolean).join((null==t?void 0:t.separator)||n.qD):e}},83435:function(e,t,r){r.d(t,{U:function(){return a}});var n=r(10793);const s={full:/^(\d{4})(\d{4})(\d{4})(\d{4})$/,partial:/^(\d{4})(\d{1,4})?(\d{1,4})?(\d{1,4})?$/};function a(e,t){const r=e.replace(/[\s-.]/g,""),a=null!=t&&t.partial?s.partial:s.full,i=r.match(a);return i?i.slice(1).filter(Boolean).join(n.qD):e}},6490:function(e,t,r){r.d(t,{a:function(){return a}});var n=r(10793);const s={full:/^(\d{3})(\d{3})(\d{3})$/,partial:/^(\d{3})(\d{1,3})?(\d{1,5})?$/};function a(e,t){const r=e.replace(/[\s-.]/g,""),a=null!=t&&t.partial?s.partial:s.full,i=r.match(a);return i?i.slice(1).filter(Boolean).join(n.qD):e}},59269:function(e,t,r){r.d(t,{P:function(){return i}});var n=r(15089),s=r(10793);const a={mobil:/^([8]\d{2})(\d{2})(\d{3})$/,fast:/^([2-9]\d)(\d{2})(\d{2})(\d{2})$/,mobilPartial:/^([8]\d{2})(\d{1,2})?(\d{1,3})?$/,fastPartial:/^([2-9]\d)(\d{1,2})?(\d{1,2})?(\d{1,2})?$/};function i(e,t){const r=e.replace(/\W/g,""),i=null!=t&&t.partial?a.mobilPartial:a.mobil,o=null!=t&&t.partial?a.fastPartial:a.fast,l=r.match(i)||r.match(o);return l?[null!=t&&t.countryCode?"+"+t.countryCode:void 0].concat((0,n.Z)(l.slice(1))).filter(Boolean).join(s.qD):e}},20439:function(e,t,r){r.d(t,{u:function(){return a}});var n=r(44820);const s={locale:"no-NB"};function a(e,t){const r=(0,n.p)(e);if(!r)return e.toString();const{locale:a,...i}={...s,...t};return new Intl.NumberFormat(a,i).format(r)}},44820:function(e,t,r){r.d(t,{p:function(){return s}});r(31369);const n=(e,t)=>{const r=Array.isArray(e)?e:e.split(""),n=r.lastIndexOf(t);return r.filter(((e,r)=>e!==t||r===n)).join("")};function s(e){if("number"==typeof e)return e;const t=e.replaceAll(/\s/g,"").split(""),r=t.reduce(((e,t)=>","===t||"."===t?t:e),null);return Number("."===r?n(t,".").replace(",",""):","===r?n(t,",").replace(".","").replace(",","."):t.join(""))}},73917:function(e,t,r){r.d(t,{J:function(){return l}});var n=r(10188),s=r(26372),a=r.n(s),i=r(70079);function o(e,t){if(e)return{width:e};if(t){return{width:"calc("+(Math.min(t,40)+"ch")+" + "+"24px"+")"}}}const l=(0,i.forwardRef)(((e,t)=>{const{action:r,align:s="left","aria-invalid":l,className:u="",density:c,maxLength:d,style:f,type:m="text",unit:p,width:g,actionButton:y,...h}=e;return i.createElement("div",{className:"jkl-text-input-wrapper","data-invalid":l,style:{...f,...o(g,d)}},i.createElement("input",Object.assign({"aria-invalid":l,ref:t,className:a()("jkl-text-input__input",u,{"jkl-text-input__input--align-right":"right"===s}),maxLength:d,type:m},h)),p&&i.createElement("span",{className:"jkl-text-input__unit"},p),!r&&y&&y,r&&!y&&i.createElement(n.h,{density:c,className:a()("jkl-text-input-action-button",r.className),title:r.label,onClick:r.onClick,onFocus:r.onFocus,onBlur:r.onBlur,ref:r.buttonRef,type:r.type||"button"},r.icon))}));l.displayName="BaseInputField"},54790:function(e,t,r){r.d(t,{o:function(){return l}});var n=r(81159),s=r(26372),a=r.n(s),i=r(70079),o=r(73917);const l=(0,i.forwardRef)(((e,t)=>{const{label:r,className:s,density:l,errorLabel:u,helpLabel:c,inline:d,inputClassName:f,labelProps:m,supportLabelProps:p,tooltip:g,...y}=e,h={label:r,density:l,errorLabel:u,helpLabel:c,labelProps:m,inline:d,supportLabelProps:p,tooltip:g};return i.createElement(n.B,Object.assign({},h,{className:a()(s,"jkl-text-input",{"jkl-text-input--inline":d}),"data-testid":"jkl-text-input",density:d?"compact":l}),i.createElement(o.J,Object.assign({ref:t},y,{className:f})))}));l.displayName="TextInput"},10793:function(e,t,r){r.d(t,{qD:function(){return n},vk:function(){return s}});const n=" ",s=n}}]);