/*! For license information please see 860b104872e28b154f03bc35b92fbe614705fa27.js.LICENSE.txt */
"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7918],{19841:function(e,t,n){function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.Z=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},79523:function(e,t,n){n.d(t,{P:function(){return L},_:function(){return E}});var r=n(70079),i=n(64592),a=n(87006),o=n(66226);function s(e){let t=(0,r.useCallback)((t=>e.subscribe(t)),[e]),n=(0,r.useCallback)((()=>e.visibleToasts),[e]);return{visibleToasts:(0,o.useSyncExternalStore)(t,n,n),add:(t,n)=>e.add(t,n),close:t=>e.close(t),remove:t=>e.remove(t),pauseAll:()=>e.pauseAll(),resumeAll:()=>e.resumeAll()}}class l{subscribe(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}add(e,t={}){let n=Math.random().toString(36),r={...t,content:e,key:n,timer:t.timeout?new u((()=>this.close(n)),t.timeout):null},i=0,a=this.queue.length;for(;i<a;){let e=Math.floor((i+a)/2);(r.priority||0)>(this.queue[e].priority||0)?a=e:i=e+1}this.queue.splice(i,0,r),r.animation=i<this.maxVisibleToasts?"entering":"queued";let o=this.maxVisibleToasts;for(;o<this.queue.length;)this.queue[o++].animation="queued";return this.updateVisibleToasts(),n}close(e){let t=this.queue.findIndex((t=>t.key===e));var n,r;t>=0&&(null===(r=(n=this.queue[t]).onClose)||void 0===r||r.call(n),this.queue.splice(t,1));this.updateVisibleToasts()}remove(e){this.visibleToasts=this.visibleToasts.filter((t=>t.key!==e)),this.updateVisibleToasts()}updateVisibleToasts(){let e=this.queue.slice(0,this.maxVisibleToasts);if(this.hasExitAnimation){let t=this.visibleToasts.filter((t=>!e.some((e=>t.key===e.key)))).map((e=>({...e,animation:"exiting"})));this.visibleToasts=t.concat(e).sort(((e,t)=>t.priority-e.priority))}else this.visibleToasts=e;for(let t of this.subscriptions)t()}pauseAll(){for(let e of this.visibleToasts)e.timer&&e.timer.pause()}resumeAll(){for(let e of this.visibleToasts)e.timer&&e.timer.resume()}constructor(e){var t,n;(0,a.Z)(this,"queue",[]),(0,a.Z)(this,"subscriptions",new Set),(0,a.Z)(this,"visibleToasts",[]),this.maxVisibleToasts=null!==(t=null==e?void 0:e.maxVisibleToasts)&&void 0!==t?t:1,this.hasExitAnimation=null!==(n=null==e?void 0:e.hasExitAnimation)&&void 0!==n&&n}}class u{reset(e){this.remaining=e,this.resume()}pause(){null!=this.timerId&&(clearTimeout(this.timerId),this.timerId=null,this.remaining-=Date.now()-this.startTime)}resume(){this.remaining<=0||(this.startTime=Date.now(),this.timerId=setTimeout((()=>{this.timerId=null,this.remaining=0,this.callback()}),this.remaining))}constructor(e,t){this.remaining=t,this.callback=e}}var c=n(15089),d=n(97916),f=n(26372),m=n.n(f),h=n(99581),v=n(16279);function p(e){let{placement:t,state:n,...i}=e,a=r.useRef(null),{regionProps:o}=(0,d.a)(i,n,a);return r.createElement("div",{className:m()("jkl","jkl-toast-region",{"jkl-toast-region--left":"left"===t})},r.createElement("div",Object.assign({},o,{ref:a,className:"jkl-toast-region__toasts"}),(0,c.Z)(n.visibleToasts).reverse().map((e=>r.createElement(v.F,{key:e.key,toast:e,state:n})))))}function g(e){let{queue:t,placement:n}=e;const i=s(t);return i.visibleToasts.length>0?h.createPortal(r.createElement(p,{state:i,placement:n}),document.body):null}const b=(0,r.createContext)({add:()=>"missing-provider"}),k=e=>{let{children:t,maxVisibleToasts:n=5,placement:i="center"}=e;const{0:a}=(0,r.useState)(new l({maxVisibleToasts:n,hasExitAnimation:!0}));return r.createElement(b.Provider,{value:{add:(e,t)=>{let n=5e3;return"number"==typeof(null==t?void 0:t.timeout)?n=t.timeout:null!==(null==t?void 0:t.timeout)&&"off"!==(null==t?void 0:t.timeout)||(n=void 0),a.add(e,{...t,timeout:n})}}},t,r.createElement(g,{queue:a,placement:i}))},E={boolProps:[],choiceProps:[{name:"Plassering",values:["Sentrert","Venstre"],defaultValue:0}]},y=[[{title:"Nytt i Jøkul",content:r.createElement("p",{className:"jkl-body"},"Les mer om"," ",r.createElement("a",{className:"jkl-link",href:"/komponenter/toast/"},"Toast")," ","på komponentsiden.")},{}],[{content:"Saken går til automatisk behandling"},{variant:"info"}],[{content:"Navn Navnesen er fjernet som reell rettighetshaver"},{variant:"success"}],[{title:"Mistet internettforbindelsen",content:"Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake."},{variant:"warning"}],[{title:"Ingen internettforbindelse",content:"Du får ikke lagret før forbindelsen er tilbake."},{variant:"error"}]];function w(){const{add:e}=(0,r.useContext)(b);return r.createElement(i.KM,{onClick:()=>{const[t,n]=y[Math.floor(Math.random()*y.length)];e(t,n)}},"Vis toast i kontekst")}const L=e=>{let{choiceValues:t}=e;const n="Venstre"===(null==t?void 0:t.Plassering)?"left":"center";return r.createElement(k,{placement:n},r.createElement(w,null))}},16279:function(e,t,n){n.d(t,{F:function(){return p}});var r=n(10188),i=n(3133),a=n(36090),o=n(91720),s=n(65838),l=n(95176),u=n(70079);const c=e=>{let{className:t,from:n,isPaused:r,...i}=e;const{0:a,1:o}=(0,u.useState)(Math.floor(n/1e3));return(0,u.useEffect)((()=>{a<=0||setTimeout((()=>{r||o((e=>e-1))}),1e3)}),[r,n,a,o]),u.createElement("div",{className:"jkl-countdown ".concat(null!=t?t:""),role:"timer","data-testid":"jkl-countdown",...i},u.createElement("span",{className:"jkl-countdown__tracker",role:"presentation",style:{"--duration":"".concat(n,"ms"),"--play-state":r?"paused":"running"},"data-testid":"jkl-countdown__tracker"}),u.createElement("span",{className:"jkl-sr-only"},a))};var d=n(45901),f=n(97916),m=n(26372),h=n.n(m);const v=e=>{switch(e){case"error":return u.createElement(i.P,{className:"jkl-toast__icon"});case"info":return u.createElement(a.s,{className:"jkl-toast__icon"});case"success":return u.createElement(o.t,{className:"jkl-toast__icon"});case"warning":return u.createElement(s.a,{className:"jkl-toast__icon"});default:return null}};function p(e){var t;let{className:n,state:i,...a}=e,o=(0,u.useRef)(null),{toastProps:s,titleProps:m}=(0,f.p)(a,i,o);const p="string"==typeof a.toast.content?a.toast.content:a.toast.content.content,g="string"==typeof a.toast.content?void 0:a.toast.content.title,b=null==(null===(t=a.toast.timer)||void 0===t?void 0:t.timerId),{prefersReducedMotion:k}=(0,d.c)();return(0,u.useEffect)((()=>{k&&"exiting"===a.toast.animation&&i.remove(a.toast.key)}),[k,a.toast.animation,a.toast.key,i]),u.createElement("div",Object.assign({},s,{ref:o,className:h()("jkl-toast",{"jkl-toast--info":"info"===a.toast.variant,"jkl-toast--error":"error"===a.toast.variant,"jkl-toast--warning":"warning"===a.toast.variant,"jkl-toast--success":"success"===a.toast.variant},n),"data-animation":a.toast.animation,"data-theme":a.toast.variant?"light":void 0,onAnimationEnd:()=>{"exiting"===a.toast.animation&&i.remove(a.toast.key)}}),u.createElement("span",{className:"jkl-toast__progress"},a.toast.timeout?u.createElement(c,{from:a.toast.timeout,isPaused:b,onAnimationEnd:e=>{e.stopPropagation()}}):null),v(a.toast.variant),u.createElement("div",Object.assign({},m,{className:"jkl-toast__content"}),g&&u.createElement("p",{className:"jkl-toast__title"},g),u.createElement("p",{className:"jkl-toast__message"},p)),u.createElement(r.h,{"aria-label":"Lukk varsel",className:"jkl-toast__dismiss-button",onClick:()=>{i.close(a.toast.key)}},u.createElement(l.T,null)))}},5869:function(e,t,n){var r=n(70079);var i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,o=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(r){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return s((function(){i.value=n,i.getSnapshot=t,u(i)&&c({inst:i})}),[e,n,t]),o((function(){return u(i)&&c({inst:i}),e((function(){u(i)&&c({inst:i})}))}),[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},66226:function(e,t,n){e.exports=n(5869)},97916:function(e,t,n){n.d(t,{p:function(){return we},a:function(){return Le}});var r=n(70079);const i={prefix:String(Math.round(1e10*Math.random())),current:0,isSSR:!1},a=r.createContext(i);let o=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),s=new WeakMap;function l(e=!1){let t=(0,r.useContext)(a),n=(0,r.useRef)(null);if(null===n.current&&!e){var i,o;let e=null===(i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===i||null===(o=i.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let n=s.get(e);null==n?s.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,s.delete(e))}n.current=++t.current}return n.current}function u(e){let t=(0,r.useContext)(a);t!==i||o||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=l(!!e);return e||`react-aria${t.prefix}-${n}`}var c=n(19841);const d="undefined"!=typeof window?r.useLayoutEffect:()=>{};function f(e){let[t,n]=(0,r.useState)(e),i=(0,r.useRef)(t),a=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{let e=a.current.next();for(;!e.done&&i.current===e.value;)e=a.current.next();e.done?a.current=null:(n(e.value),i.current=e.value)}),[n,i,a]);return d((()=>{a.current&&o()})),[t,(0,r.useCallback)((e=>{a.current=e(i.current),o()}),[o,a,i])]}let m=new Map;function h(e){let[t,n]=(0,r.useState)(e),i=(0,r.useRef)(null),a=u(t),o=(0,r.useCallback)((e=>{i.current=e}),[]);return m.set(a,o),d((()=>{let e=a;return()=>{m.delete(e)}}),[a]),(0,r.useEffect)((()=>{let e=i.current;e&&(i.current=null,n(e))})),a}function v(e,t){if(e===t)return e;let n=m.get(e);if(n)return n(t),t;let r=m.get(t);return r?(r(e),e):t}function p(e=[]){let t=h(),[n,i]=f(t),a=(0,r.useCallback)((()=>{i((function*(){yield t,yield document.getElementById(t)?t:void 0}))}),[t,i]);return d(a,[t,a,...e]),n}function g(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}function b(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=g(n,i):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof i?"id"===e&&n&&i?t.id=v(n,i):t[e]=void 0!==i?i:n:t[e]=(0,c.Z)(n,i)}}return t}new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);function k(e){if(function(){if(null==E){E=!1;try{document.createElement("div").focus({get preventScroll(){return E=!0,!0}})}catch(e){}}return E}())e.focus({preventScroll:!0});else{let t=function(e){var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let E=null;let y=new Map,w=new Set;function L(){if("undefined"==typeof window)return;let e=t=>{let n=y.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),y.delete(t.target)),0===y.size)){for(let e of w)e();w.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=y.get(t.target);n||(n=new Set,y.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!=typeof document&&("loading"!==document.readyState?L():document.addEventListener("DOMContentLoaded",L));"undefined"!=typeof window&&window.visualViewport;new Map;function T(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function S(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function P(){return S(/^Mac/i)}function N(e){return!(0!==e.mozInputSource||!e.isTrusted)||(T(/Android/i)&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}class C{getStringForLocale(e,t){let n=this.strings[t];n||(n=function(e,t,n="en-US"){if(t[e])return t[e];let r=function(e){return Intl.Locale?new Intl.Locale(e).language:e.split("-")[0]}(e);if(t[r])return t[r];for(let i in t)if(i.startsWith(r+"-"))return t[i];return t[n]}(t,this.strings,this.defaultLocale),this.strings[t]=n);let r=n[e];if(!r)throw new Error(`Could not find intl message ${e} in ${t} locale`);return r}constructor(e,t="en-US"){this.strings={...e},this.defaultLocale=t}}const M=new Map,x=new Map;class _{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return"function"==typeof n?n(t,this):n}plural(e,t,n="cardinal"){let r=t["="+e];if(r)return"function"==typeof r?r():r;let i=this.locale+":"+n,a=M.get(i);return a||(a=new Intl.PluralRules(this.locale,{type:n}),M.set(i,a)),r=t[a.select(e)]||t.other,"function"==typeof r?r():r}number(e){let t=x.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),x.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return"function"==typeof n?n():n}constructor(e,t){this.locale=e,this.strings=t}}const I=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),H=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function j(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script;return I.has(t)}let t=e.split("-")[0];return H.has(t)}function R(){let e="undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:j(e)?"rtl":"ltr"}}let A=R(),F=new Set;function O(){A=R();for(let e of F)e(A)}function D(){let e=(0,r.useContext)(a).isSSR,[t,n]=(0,r.useState)(A);return(0,r.useEffect)((()=>(0===F.size&&window.addEventListener("languagechange",O),F.add(n),()=>{F.delete(n),0===F.size&&window.removeEventListener("languagechange",O)})),[]),e?{locale:"en-US",direction:"ltr"}:t}const B=r.createContext(null);function W(){let e=D();return(0,r.useContext)(B)||e}const V=new WeakMap;function Z(e){let{locale:t}=W(),n=(0,r.useMemo)((()=>function(e){let t=V.get(e);return t||(t=new C(e),V.set(e,t)),t}(e)),[e]);return(0,r.useMemo)((()=>new _(t,n)),[t,n])}new Map;new WeakMap;const q=r.createContext(null);q.displayName="PressResponderContext";new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);class z{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function U(e){let t=(0,r.useRef)({isFocused:!1,onBlur:e,observer:null});return t.current.onBlur=e,d((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]),(0,r.useCallback)((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let n=e.target,r=e=>{var r,i;t.current.isFocused=!1,n.disabled&&(null===(i=(r=t.current).onBlur)||void 0===i||i.call(r,new z("blur",e))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",r,{once:!0}),t.current.observer=new MutationObserver((()=>{t.current.isFocused&&n.disabled&&(t.current.observer.disconnect(),n.dispatchEvent(new FocusEvent("blur")),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))})),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}}),[])}let K=null,$=new Set,G=!1,J=!1,Y=!1;function Q(e,t){for(let n of $)n(e,t)}function X(e){J=!0,function(e){return!(e.metaKey||!P()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(K="keyboard",Q("keyboard",e))}function ee(e){K="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(J=!0,Q("pointer",e))}function te(e){N(e)&&(J=!0,K="virtual")}function ne(e){e.target!==window&&e.target!==document&&(J||Y||(K="virtual",Q("virtual",e)),J=!1,Y=!1)}function re(){J=!1,Y=!0}function ie(){if("undefined"==typeof window||G)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){J=!0,e.apply(this,arguments)},document.addEventListener("keydown",X,!0),document.addEventListener("keyup",X,!0),document.addEventListener("click",te,!0),window.addEventListener("focus",ne,!0),window.addEventListener("blur",re,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",ee,!0),document.addEventListener("pointermove",ee,!0),document.addEventListener("pointerup",ee,!0)):(document.addEventListener("mousedown",ee,!0),document.addEventListener("mousemove",ee,!0),document.addEventListener("mouseup",ee,!0)),G=!0}function ae(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:i,onFocusWithinChange:a}=e,o=(0,r.useRef)({isFocusWithin:!1}),s=(0,r.useCallback)((e=>{o.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(o.current.isFocusWithin=!1,n&&n(e),a&&a(!1))}),[n,a,o]),l=U(s),u=(0,r.useCallback)((e=>{o.current.isFocusWithin||document.activeElement!==e.target||(i&&i(e),a&&a(!0),o.current.isFocusWithin=!0,l(e))}),[i,a,l]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:u,onBlur:s}}}"undefined"!=typeof document&&("loading"!==document.readyState?ie():document.addEventListener("DOMContentLoaded",ie));let oe=!1,se=0;function le(){oe=!0,setTimeout((()=>{oe=!1}),50)}function ue(e){"touch"===e.pointerType&&le()}function ce(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",ue):document.addEventListener("touchend",le),se++,()=>{se--,se>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",ue):document.removeEventListener("touchend",le))}}function de(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:i,isDisabled:a}=e,[o,s]=(0,r.useState)(!1),l=(0,r.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,r.useEffect)(ce,[]);let{hoverProps:u,triggerHoverEnd:c}=(0,r.useMemo)((()=>{let e=(e,r)=>{if(l.pointerType=r,a||"touch"===r||l.isHovered||!e.currentTarget.contains(e.target))return;l.isHovered=!0;let i=e.currentTarget;l.target=i,t&&t({type:"hoverstart",target:i,pointerType:r}),n&&n(!0),s(!0)},r=(e,t)=>{if(l.pointerType="",l.target=null,"touch"===t||!l.isHovered)return;l.isHovered=!1;let r=e.currentTarget;i&&i({type:"hoverend",target:r,pointerType:t}),n&&n(!1),s(!1)},o={};return"undefined"!=typeof PointerEvent?(o.onPointerEnter=t=>{oe&&"mouse"===t.pointerType||e(t,t.pointerType)},o.onPointerLeave=e=>{!a&&e.currentTarget.contains(e.target)&&r(e,e.pointerType)}):(o.onTouchStart=()=>{l.ignoreEmulatedMouseEvents=!0},o.onMouseEnter=t=>{l.ignoreEmulatedMouseEvents||oe||e(t,"mouse"),l.ignoreEmulatedMouseEvents=!1},o.onMouseLeave=e=>{!a&&e.currentTarget.contains(e.target)&&r(e,"mouse")}),{hoverProps:o,triggerHoverEnd:r}}),[t,n,i,a,l]);return(0,r.useEffect)((()=>{a&&c({currentTarget:l.target},l.pointerType)}),[a]),{hoverProps:u,isHovered:o}}var fe=n(87006),me=n(66226);const he=1,ve=Symbol.for("react-aria-landmark-manager");function pe(e){return document.addEventListener("react-aria-landmark-manager-change",e),()=>document.removeEventListener("react-aria-landmark-manager-change",e)}function ge(){if("undefined"==typeof document)return null;let e=document[ve];return e&&e.version>=he?e:(document[ve]=new be,document.dispatchEvent(new CustomEvent("react-aria-landmark-manager-change")),document[ve])}class be{setupIfNeeded(){this.isListening||(document.addEventListener("keydown",this.f6Handler,{capture:!0}),document.addEventListener("focusin",this.focusinHandler,{capture:!0}),document.addEventListener("focusout",this.focusoutHandler,{capture:!0}),this.isListening=!0)}teardownIfNeeded(){!this.isListening||this.landmarks.length>0||this.refCount>0||(document.removeEventListener("keydown",this.f6Handler,{capture:!0}),document.removeEventListener("focusin",this.focusinHandler,{capture:!0}),document.removeEventListener("focusout",this.focusoutHandler,{capture:!0}),this.isListening=!1)}focusLandmark(e,t){var n,r;null===(n=this.landmarks.find((t=>t.ref.current===e)))||void 0===n||null===(r=n.focus)||void 0===r||r.call(n,t)}getLandmarksByRole(e){return new Set(this.landmarks.filter((t=>t.role===e)))}getLandmarkByRole(e){return this.landmarks.find((t=>t.role===e))}addLandmark(e){if(this.setupIfNeeded(),this.landmarks.find((t=>t.ref===e.ref))||!e.ref.current)return;if(this.landmarks.filter((e=>"main"===e.role)).length>1&&console.error('Page can contain no more than one landmark with the role "main".'),0===this.landmarks.length)return this.landmarks=[e],void this.checkLabels(e.role);let t=0,n=this.landmarks.length-1;for(;t<=n;){let r=Math.floor((t+n)/2),i=e.ref.current.compareDocumentPosition(this.landmarks[r].ref.current);Boolean(i&Node.DOCUMENT_POSITION_PRECEDING||i&Node.DOCUMENT_POSITION_CONTAINS)?t=r+1:n=r-1}this.landmarks.splice(t,0,e),this.checkLabels(e.role)}updateLandmark(e){let t=this.landmarks.findIndex((t=>t.ref===e.ref));t>=0&&(this.landmarks[t]={...this.landmarks[t],...e},this.checkLabels(this.landmarks[t].role))}removeLandmark(e){this.landmarks=this.landmarks.filter((t=>t.ref!==e)),this.teardownIfNeeded()}checkLabels(e){let t=this.getLandmarksByRole(e);if(t.size>1){let n=[...t].filter((e=>!e.label));if(n.length>0)console.warn(`Page contains more than one landmark with the '${e}' role. If two or more landmarks on a page share the same role, all must be labeled with an aria-label or aria-labelledby attribute: `,n.map((e=>e.ref.current)));else{let n=[...t].map((e=>e.label));n.filter(((e,t)=>n.indexOf(e)!==t)).forEach((n=>{console.warn(`Page contains more than one landmark with the '${e}' role and '${n}' label. If two or more landmarks on a page share the same role, they must have unique labels: `,[...t].filter((e=>e.label===n)).map((e=>e.ref.current)))}))}}}closestLandmark(e){let t=new Map(this.landmarks.map((e=>[e.ref.current,e]))),n=e;for(;n&&!t.has(n)&&n!==document.body&&n.parentElement;)n=n.parentElement;return t.get(n)}getNextLandmark(e,{backward:t}){var n;let r=this.closestLandmark(e),i=t?this.landmarks.length-1:0;r&&(i=this.landmarks.indexOf(r)+(t?-1:1));let a=()=>{if(i<0){if(!e.dispatchEvent(new CustomEvent("react-aria-landmark-navigation",{detail:{direction:"backward"},bubbles:!0,cancelable:!0})))return!0;i=this.landmarks.length-1}else if(i>=this.landmarks.length){if(!e.dispatchEvent(new CustomEvent("react-aria-landmark-navigation",{detail:{direction:"forward"},bubbles:!0,cancelable:!0})))return!0;i=0}return i<0||i>=this.landmarks.length};if(a())return;let o=i;for(;null===(n=this.landmarks[i].ref.current)||void 0===n?void 0:n.closest("[aria-hidden=true]");){if(i+=t?-1:1,a())return;if(i===o)break}return this.landmarks[i]}f6Handler(e){if("F6"===e.key){(e.altKey?this.focusMain():this.navigate(e.target,e.shiftKey))&&(e.preventDefault(),e.stopPropagation())}}focusMain(){let e=this.getLandmarkByRole("main");return!!(e&&e.ref.current&&document.contains(e.ref.current))&&(this.focusLandmark(e.ref.current,"forward"),!0)}navigate(e,t){let n=this.getNextLandmark(e,{backward:t});if(!n)return!1;if(n.lastFocused){let e=n.lastFocused;if(document.body.contains(e))return e.focus(),!0}return!(!n.ref.current||!document.contains(n.ref.current))&&(this.focusLandmark(n.ref.current,t?"backward":"forward"),!0)}focusinHandler(e){let t=this.closestLandmark(e.target);t&&t.ref.current!==e.target&&this.updateLandmark({ref:t.ref,lastFocused:e.target});let n=e.relatedTarget;if(n){let e=this.closestLandmark(n);e&&e.ref.current===n&&e.blur()}}focusoutHandler(e){let t=e.target,n=e.relatedTarget;if(!n||n===document){let e=this.closestLandmark(t);e&&e.ref.current===t&&e.blur()}}createLandmarkController(){let e=this;return e.refCount++,e.setupIfNeeded(),{navigate(t,n){let r=(null==n?void 0:n.from)||document.activeElement;return e.navigate(r,"backward"===t)},focusNext(t){let n=(null==t?void 0:t.from)||document.activeElement;return e.navigate(n,!1)},focusPrevious(t){let n=(null==t?void 0:t.from)||document.activeElement;return e.navigate(n,!0)},focusMain(){return e.focusMain()},dispose(){e&&(e.refCount--,e.teardownIfNeeded(),e=null)}}}registerLandmark(e){return this.landmarks.find((t=>t.ref===e.ref))?this.updateLandmark(e):this.addLandmark(e),()=>this.removeLandmark(e.ref)}constructor(){(0,fe.Z)(this,"landmarks",[]),(0,fe.Z)(this,"isListening",!1),(0,fe.Z)(this,"refCount",0),(0,fe.Z)(this,"version",he),this.f6Handler=this.f6Handler.bind(this),this.focusinHandler=this.focusinHandler.bind(this),this.focusoutHandler=this.focusoutHandler.bind(this)}}function ke(e,t){const{role:n,"aria-label":i,"aria-labelledby":a,focus:o}=e;let s=(0,me.useSyncExternalStore)(pe,ge,ge),l=i||a,[u,c]=(0,r.useState)(!1),f=(0,r.useCallback)((()=>{c(!0)}),[c]),m=(0,r.useCallback)((()=>{c(!1)}),[c]);return d((()=>{if(s)return s.registerLandmark({ref:t,label:l,role:n,focus:o||f,blur:m})}),[s,l,t,n,o,f,m]),(0,r.useEffect)((()=>{var e;u&&(null===(e=t.current)||void 0===e||e.focus())}),[u,t]),{landmarkProps:{role:n,tabIndex:u?-1:void 0,"aria-label":i,"aria-labelledby":a}}}function Ee(e){return e&&e.__esModule?e.default:e}var ye={};function we(e,t,n){let{key:i,timer:a,timeout:o,animation:s}=e.toast;(0,r.useEffect)((()=>{if(a)return a.reset(o),()=>{a.pause()}}),[a,o]);let l=(0,r.useRef)(null);d((()=>{let e=n.current.closest("[role=region]");return()=>{e&&e.contains(document.activeElement)&&(l.current=e)}}),[n]),(0,r.useEffect)((()=>()=>{l.current&&l.current.focus()}),[n]);let u=h(),c=p(),f=Z(Ee(ye));return{toastProps:{role:"alert","aria-label":e["aria-label"],"aria-labelledby":e["aria-labelledby"]||u,"aria-describedby":e["aria-describedby"]||c,"aria-details":e["aria-details"],"aria-hidden":"exiting"===s?"true":void 0},titleProps:{id:u},descriptionProps:{id:c},closeButtonProps:{"aria-label":f.format("close"),onPress:()=>t.close(i)}}}function Le(e,t,n){let i=Z(Ee(ye)),{landmarkProps:a}=ke({role:"region","aria-label":e["aria-label"]||i.format("notifications")},n),{hoverProps:o}=de({onHoverStart:t.pauseAll,onHoverEnd:t.resumeAll}),s=(0,r.useRef)(null),{focusWithinProps:l}=ae({onFocusWithin:e=>{t.pauseAll(),s.current=e.relatedTarget},onBlurWithin:()=>{t.resumeAll(),s.current=null}});return(0,r.useEffect)((()=>()=>{s.current&&document.body.contains(s.current)&&("pointer"===K?k(s.current):s.current.focus())}),[n]),{regionProps:b(a,o,l,{tabIndex:-1,"data-react-aria-top-layer":!0})}}ye={"ar-AE":{close:"إغلاق",notifications:"إشعارات"},"bg-BG":{close:"Затвори",notifications:"Известия"},"cs-CZ":{close:"Zavřít",notifications:"Upozornění"},"da-DK":{close:"Luk",notifications:"Påmindelser"},"de-DE":{close:"Schließen",notifications:"Benachrichtigungen"},"el-GR":{close:"Κλείσιμο",notifications:"Ειδοποιήσεις"},"en-US":{close:"Close",notifications:"Notifications"},"es-ES":{close:"Cerrar",notifications:"Notificaciones"},"et-EE":{close:"Sule",notifications:"Teated"},"fi-FI":{close:"Sulje",notifications:"Ilmoitukset"},"fr-FR":{close:"Fermer",notifications:"Notifications"},"he-IL":{close:"סגור",notifications:"התראות"},"hr-HR":{close:"Zatvori",notifications:"Obavijesti"},"hu-HU":{close:"Bezárás",notifications:"Értesítések"},"it-IT":{close:"Chiudi",notifications:"Notifiche"},"ja-JP":{close:"閉じる",notifications:"通知"},"ko-KR":{close:"닫기",notifications:"알림"},"lt-LT":{close:"Uždaryti",notifications:"Pranešimai"},"lv-LV":{close:"Aizvērt",notifications:"Paziņojumi"},"nb-NO":{close:"Lukk",notifications:"Varsler"},"nl-NL":{close:"Sluiten",notifications:"Meldingen"},"pl-PL":{close:"Zamknij",notifications:"Powiadomienia"},"pt-BR":{close:"Fechar",notifications:"Notificações"},"pt-PT":{close:"Fechar",notifications:"Notificações"},"ro-RO":{close:"Închideţi",notifications:"Notificări"},"ru-RU":{close:"Закрыть",notifications:"Уведомления"},"sk-SK":{close:"Zatvoriť",notifications:"Oznámenia"},"sl-SI":{close:"Zapri",notifications:"Obvestila"},"sr-SP":{close:"Zatvori",notifications:"Obaveštenja"},"sv-SE":{close:"Stäng",notifications:"Aviseringar"},"tr-TR":{close:"Kapat",notifications:"Bildirimler"},"uk-UA":{close:"Закрити",notifications:"Сповіщення"},"zh-CN":{close:"关闭",notifications:"通知"},"zh-TW":{close:"關閉",notifications:"通知"}}},87006:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}}]);