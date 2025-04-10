/*! For license information please see 860b104872e28b154f03bc35b92fbe614705fa27.js.LICENSE.txt */
"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7918],{36985:function(e,t,n){n.d(t,{P:function(){return ke},_:function(){return pe}});var r=n(92379),o=n(36976),i=n(66226);function a(e){let t=(0,r.useCallback)((t=>e.subscribe(t)),[e]),n=(0,r.useCallback)((()=>e.visibleToasts),[e]);return{visibleToasts:(0,i.useSyncExternalStore)(t,n,n),add:(t,n)=>e.add(t,n),close:t=>e.close(t),remove:t=>e.remove(t),pauseAll:()=>e.pauseAll(),resumeAll:()=>e.resumeAll()}}class s{subscribe(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}add(e,t={}){let n=Math.random().toString(36),r={...t,content:e,key:n,timer:t.timeout?new u((()=>this.close(n)),t.timeout):void 0},o=0,i=this.queue.length;for(;o<i;){let e=Math.floor((o+i)/2);(r.priority||0)>(this.queue[e].priority||0)?i=e:o=e+1}this.queue.splice(o,0,r),r.animation=o<this.maxVisibleToasts?"entering":"queued";let a=this.maxVisibleToasts;for(;a<this.queue.length;)this.queue[a++].animation="queued";return this.updateVisibleToasts({action:"add"}),n}close(e){let t=this.queue.findIndex((t=>t.key===e));var n,r;t>=0&&(null===(n=(r=this.queue[t]).onClose)||void 0===n||n.call(r),this.queue.splice(t,1));this.updateVisibleToasts({action:"close",key:e})}remove(e){this.updateVisibleToasts({action:"remove",key:e})}updateVisibleToasts(e){let{action:t,key:n}=e,r=this.queue.slice(0,this.maxVisibleToasts);if("add"===t&&this.hasExitAnimation){let e=this.visibleToasts.filter((e=>!r.some((t=>e.key===t.key)))).map((e=>({...e,animation:"exiting"})));this.visibleToasts=e.concat(r).sort(((e,t)=>{var n,r;return(null!==(n=t.priority)&&void 0!==n?n:0)-(null!==(r=e.priority)&&void 0!==r?r:0)}))}else"close"===t&&this.hasExitAnimation?this.visibleToasts=this.visibleToasts.map((e=>e.key!==n?e:{...e,animation:"exiting"})):this.visibleToasts=r;for(let o of this.subscriptions)o()}pauseAll(){for(let e of this.visibleToasts)e.timer&&e.timer.pause()}resumeAll(){for(let e of this.visibleToasts)e.timer&&e.timer.resume()}constructor(e){var t,n;this.queue=[],this.subscriptions=new Set,this.visibleToasts=[],this.maxVisibleToasts=null!==(t=null==e?void 0:e.maxVisibleToasts)&&void 0!==t?t:1,this.hasExitAnimation=null!==(n=null==e?void 0:e.hasExitAnimation)&&void 0!==n&&n}}class u{reset(e){this.remaining=e,this.resume()}pause(){null!=this.timerId&&(clearTimeout(this.timerId),this.timerId=null,this.remaining-=Date.now()-this.startTime)}resume(){this.remaining<=0||(this.startTime=Date.now(),this.timerId=setTimeout((()=>{this.timerId=null,this.remaining=0,this.callback()}),this.remaining))}constructor(e,t){this.startTime=null,this.remaining=t,this.callback=e}}var l=n(9222),c=n(99767),d=n(66931),f=n(35586);function m(e){if(function(){if(null==h){h=!1;try{document.createElement("div").focus({get preventScroll(){return h=!0,!0}})}catch{}}return h}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft});return n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let h=null;function v(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}var p=n(81272),b=n(53048);function g(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],o=r[e];"function"==typeof n&&"function"==typeof o&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&e.charCodeAt(2)<=90?t[e]=v(n,o):"className"!==e&&"UNSAFE_className"!==e||"string"!=typeof n||"string"!=typeof o?"id"===e&&n&&o?t.id=(0,p.ur)(n,o):t[e]=void 0!==o?o:n:t[e]=(0,b.Z)(n,o)}}return t}let k=!1,E=0;function y(){k=!0,setTimeout((()=>{k=!1}),50)}function w(e){"touch"===e.pointerType&&y()}function L(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",w):document.addEventListener("touchend",y),E++,()=>{E--,E>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",w):document.removeEventListener("touchend",y))}}function $(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:o,isDisabled:i}=e,[a,s]=(0,r.useState)(!1),u=(0,r.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,r.useEffect)(L,[]);let{hoverProps:l,triggerHoverEnd:c}=(0,r.useMemo)((()=>{let e=(e,r)=>{if(u.pointerType=r,i||"touch"===r||u.isHovered||!e.currentTarget.contains(e.target))return;u.isHovered=!0;let o=e.currentTarget;u.target=o,t&&t({type:"hoverstart",target:o,pointerType:r}),n&&n(!0),s(!0)},r=(e,t)=>{if(u.pointerType="",u.target=null,"touch"===t||!u.isHovered)return;u.isHovered=!1;let r=e.currentTarget;o&&o({type:"hoverend",target:r,pointerType:t}),n&&n(!1),s(!1)},a={};return"undefined"!=typeof PointerEvent?(a.onPointerEnter=t=>{k&&"mouse"===t.pointerType||e(t,t.pointerType)},a.onPointerLeave=e=>{!i&&e.currentTarget.contains(e.target)&&r(e,e.pointerType)}):(a.onTouchStart=()=>{u.ignoreEmulatedMouseEvents=!0},a.onMouseEnter=t=>{u.ignoreEmulatedMouseEvents||k||e(t,"mouse"),u.ignoreEmulatedMouseEvents=!1},a.onMouseLeave=e=>{!i&&e.currentTarget.contains(e.target)&&r(e,"mouse")}),{hoverProps:a,triggerHoverEnd:r}}),[t,n,o,i,u]);return(0,r.useEffect)((()=>{i&&c({currentTarget:u.target},u.pointerType)}),[i]),{hoverProps:l,isHovered:a}}var T=n(14424);class S{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function P(e){let t=(0,r.useRef)({isFocused:!1,observer:null});(0,f.b)((()=>{const e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}}),[]);let n=(0,T.i)((t=>{null==e||e(t)}));return(0,r.useCallback)((e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target,o=e=>{t.current.isFocused=!1,r.disabled&&n(new S("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};r.addEventListener("focusout",o,{once:!0}),t.current.observer=new MutationObserver((()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}})),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}}),[n])}function x(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:o,onFocusWithinChange:i}=e,a=(0,r.useRef)({isFocusWithin:!1}),s=(0,r.useCallback)((e=>{a.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(a.current.isFocusWithin=!1,n&&n(e),i&&i(!1))}),[n,i,a]),u=P(s),l=(0,r.useCallback)((e=>{a.current.isFocusWithin||document.activeElement!==e.target||(o&&o(e),i&&i(!0),a.current.isFocusWithin=!0,u(e))}),[o,i,u]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:l,onBlur:s}}}function N(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some((t=>e.test(t.brand))))||e.test(window.navigator.userAgent))}function M(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function C(e){let t=null;return()=>(null==t&&(t=e()),t)}const I=C((function(){return M(/^Mac/i)})),j=C((function(){return M(/^iPhone/i)})),_=C((function(){return M(/^iPad/i)||I()&&navigator.maxTouchPoints>1})),H=C((function(){return j()||_()})),F=(C((function(){return I()||H()})),C((function(){return N(/AppleWebKit/i)&&!F()})),C((function(){return N(/Chrome/i)}))),A=C((function(){return N(/Android/i)}));C((function(){return N(/Firefox/i)}));const R=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},O=e=>{if(e&&"window"in e&&e.window===e)return e;return R(e).defaultView||window};let D=null,q=new Set,W=new Map,z=!1,B=!1;function V(e,t){for(let n of q)n(e,t)}function U(e){z=!0,function(e){return!(e.metaKey||!I()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key)}(e)&&(D="keyboard",V("keyboard",e))}function Z(e){D="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(z=!0,V("pointer",e))}function K(e){var t;(0===(t=e).mozInputSource&&t.isTrusted||(A()&&t.pointerType?"click"===t.type&&1===t.buttons:0===t.detail&&!t.pointerType))&&(z=!0,D="virtual")}function G(e){e.target!==window&&e.target!==document&&(z||B||(D="virtual",V("virtual",e)),z=!1,B=!1)}function J(){z=!1,B=!0}function Y(e){if("undefined"==typeof window||W.get(O(e)))return;const t=O(e),n=R(e);let r=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){z=!0,r.apply(this,arguments)},n.addEventListener("keydown",U,!0),n.addEventListener("keyup",U,!0),n.addEventListener("click",K,!0),t.addEventListener("focus",G,!0),t.addEventListener("blur",J,!1),"undefined"!=typeof PointerEvent?(n.addEventListener("pointerdown",Z,!0),n.addEventListener("pointermove",Z,!0),n.addEventListener("pointerup",Z,!0)):(n.addEventListener("mousedown",Z,!0),n.addEventListener("mousemove",Z,!0),n.addEventListener("mouseup",Z,!0)),t.addEventListener("beforeunload",(()=>{Q(e)}),{once:!0}),W.set(t,{focus:r})}const Q=(e,t)=>{const n=O(e),r=R(e);t&&r.removeEventListener("DOMContentLoaded",t),W.has(n)&&(n.HTMLElement.prototype.focus=W.get(n).focus,r.removeEventListener("keydown",U,!0),r.removeEventListener("keyup",U,!0),r.removeEventListener("click",K,!0),n.removeEventListener("focus",G,!0),n.removeEventListener("blur",J,!1),"undefined"!=typeof PointerEvent?(r.removeEventListener("pointerdown",Z,!0),r.removeEventListener("pointermove",Z,!0),r.removeEventListener("pointerup",Z,!0)):(r.removeEventListener("mousedown",Z,!0),r.removeEventListener("mousemove",Z,!0),r.removeEventListener("mouseup",Z,!0)),W.delete(n))};function X(){return D}"undefined"!=typeof document&&function(e){const t=R(e);let n;"loading"!==t.readyState?Y(e):(n=()=>{Y(e)},t.addEventListener("DOMContentLoaded",n))}();new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);const ee=Symbol.for("react-aria-landmark-manager");function te(e){return document.addEventListener("react-aria-landmark-manager-change",e),()=>document.removeEventListener("react-aria-landmark-manager-change",e)}function ne(){if("undefined"==typeof document)return null;let e=document[ee];return e&&e.version>=1?e:(document[ee]=new re,document.dispatchEvent(new CustomEvent("react-aria-landmark-manager-change")),document[ee])}class re{setupIfNeeded(){this.isListening||(document.addEventListener("keydown",this.f6Handler,{capture:!0}),document.addEventListener("focusin",this.focusinHandler,{capture:!0}),document.addEventListener("focusout",this.focusoutHandler,{capture:!0}),this.isListening=!0)}teardownIfNeeded(){!this.isListening||this.landmarks.length>0||this.refCount>0||(document.removeEventListener("keydown",this.f6Handler,{capture:!0}),document.removeEventListener("focusin",this.focusinHandler,{capture:!0}),document.removeEventListener("focusout",this.focusoutHandler,{capture:!0}),this.isListening=!1)}focusLandmark(e,t){var n,r;null===(r=this.landmarks.find((t=>t.ref.current===e)))||void 0===r||null===(n=r.focus)||void 0===n||n.call(r,t)}getLandmarksByRole(e){return new Set(this.landmarks.filter((t=>t.role===e)))}getLandmarkByRole(e){return this.landmarks.find((t=>t.role===e))}addLandmark(e){if(this.setupIfNeeded(),this.landmarks.find((t=>t.ref===e.ref))||!e.ref.current)return;if(this.landmarks.filter((e=>"main"===e.role)).length>1&&console.error('Page can contain no more than one landmark with the role "main".'),0===this.landmarks.length)return this.landmarks=[e],void this.checkLabels(e.role);let t=0,n=this.landmarks.length-1;for(;t<=n;){let r=Math.floor((t+n)/2),o=e.ref.current.compareDocumentPosition(this.landmarks[r].ref.current);Boolean(o&Node.DOCUMENT_POSITION_PRECEDING||o&Node.DOCUMENT_POSITION_CONTAINS)?t=r+1:n=r-1}this.landmarks.splice(t,0,e),this.checkLabels(e.role)}updateLandmark(e){let t=this.landmarks.findIndex((t=>t.ref===e.ref));t>=0&&(this.landmarks[t]={...this.landmarks[t],...e},this.checkLabels(this.landmarks[t].role))}removeLandmark(e){this.landmarks=this.landmarks.filter((t=>t.ref!==e)),this.teardownIfNeeded()}checkLabels(e){let t=this.getLandmarksByRole(e);if(t.size>1){let n=[...t].filter((e=>!e.label));if(n.length>0)console.warn(`Page contains more than one landmark with the '${e}' role. If two or more landmarks on a page share the same role, all must be labeled with an aria-label or aria-labelledby attribute: `,n.map((e=>e.ref.current)));else{let n=[...t].map((e=>e.label));n.filter(((e,t)=>n.indexOf(e)!==t)).forEach((n=>{console.warn(`Page contains more than one landmark with the '${e}' role and '${n}' label. If two or more landmarks on a page share the same role, they must have unique labels: `,[...t].filter((e=>e.label===n)).map((e=>e.ref.current)))}))}}}closestLandmark(e){let t=new Map(this.landmarks.map((e=>[e.ref.current,e]))),n=e;for(;n&&!t.has(n)&&n!==document.body&&n.parentElement;)n=n.parentElement;return t.get(n)}getNextLandmark(e,{backward:t}){var n;let r=this.closestLandmark(e),o=t?this.landmarks.length-1:0;r&&(o=this.landmarks.indexOf(r)+(t?-1:1));let i=()=>{if(o<0){if(!e.dispatchEvent(new CustomEvent("react-aria-landmark-navigation",{detail:{direction:"backward"},bubbles:!0,cancelable:!0})))return!0;o=this.landmarks.length-1}else if(o>=this.landmarks.length){if(!e.dispatchEvent(new CustomEvent("react-aria-landmark-navigation",{detail:{direction:"forward"},bubbles:!0,cancelable:!0})))return!0;o=0}return o<0||o>=this.landmarks.length};if(i())return;let a=o;for(;null===(n=this.landmarks[o].ref.current)||void 0===n?void 0:n.closest("[aria-hidden=true]");){if(o+=t?-1:1,i())return;if(o===a)break}return this.landmarks[o]}f6Handler(e){if("F6"===e.key){(e.altKey?this.focusMain():this.navigate(e.target,e.shiftKey))&&(e.preventDefault(),e.stopPropagation())}}focusMain(){let e=this.getLandmarkByRole("main");return!!(e&&e.ref.current&&document.contains(e.ref.current))&&(this.focusLandmark(e.ref.current,"forward"),!0)}navigate(e,t){let n=this.getNextLandmark(e,{backward:t});if(!n)return!1;if(n.lastFocused){let e=n.lastFocused;if(document.body.contains(e))return e.focus(),!0}return!(!n.ref.current||!document.contains(n.ref.current))&&(this.focusLandmark(n.ref.current,t?"backward":"forward"),!0)}focusinHandler(e){let t=this.closestLandmark(e.target);t&&t.ref.current!==e.target&&this.updateLandmark({ref:t.ref,lastFocused:e.target});let n=e.relatedTarget;if(n){let e=this.closestLandmark(n);e&&e.ref.current===n&&e.blur()}}focusoutHandler(e){let t=e.target,n=e.relatedTarget;if(!n||n===document){let e=this.closestLandmark(t);e&&e.ref.current===t&&e.blur()}}createLandmarkController(){let e=this;return e.refCount++,e.setupIfNeeded(),{navigate(t,n){let r=(null==n?void 0:n.from)||document.activeElement;return e.navigate(r,"backward"===t)},focusNext(t){let n=(null==t?void 0:t.from)||document.activeElement;return e.navigate(n,!1)},focusPrevious(t){let n=(null==t?void 0:t.from)||document.activeElement;return e.navigate(n,!0)},focusMain(){return e.focusMain()},dispose(){e&&(e.refCount--,e.teardownIfNeeded(),e=null)}}}registerLandmark(e){return this.landmarks.find((t=>t.ref===e.ref))?this.updateLandmark(e):this.addLandmark(e),()=>this.removeLandmark(e.ref)}constructor(){this.landmarks=[],this.isListening=!1,this.refCount=0,this.version=1,this.f6Handler=this.f6Handler.bind(this),this.focusinHandler=this.focusinHandler.bind(this),this.focusoutHandler=this.focusoutHandler.bind(this)}}function oe(e,t){const{role:n,"aria-label":o,"aria-labelledby":a,focus:s}=e;let u=(0,i.useSyncExternalStore)(te,ne,ne),l=o||a,[c,d]=(0,r.useState)(!1),m=(0,r.useCallback)((()=>{d(!0)}),[d]),h=(0,r.useCallback)((()=>{d(!1)}),[d]);return(0,f.b)((()=>{if(u)return u.registerLandmark({ref:t,label:l,role:n,focus:s||m,blur:h})}),[u,l,t,n,s,m,h]),(0,r.useEffect)((()=>{var e;c&&(null===(e=t.current)||void 0===e||e.focus())}),[c,t]),{landmarkProps:{role:n,tabIndex:c?-1:void 0,"aria-label":o,"aria-labelledby":a}}}var ie=n(51015);function ae(e,t,n){let o=(0,ie.q)((i=d.Z)&&i.__esModule?i.default:i,"@react-aria/toast");var i;let{landmarkProps:a}=oe({role:"region","aria-label":e["aria-label"]||o.format("notifications",{count:t.visibleToasts.length})},n),{hoverProps:s}=$({onHoverStart:t.pauseAll,onHoverEnd:t.resumeAll}),u=(0,r.useRef)([]),l=(0,r.useRef)(t.visibleToasts),c=(0,r.useRef)(null);(0,f.b)((()=>{if(-1===c.current||0===t.visibleToasts.length||!n.current)return u.current=[],void(l.current=t.visibleToasts);if(u.current=[...n.current.querySelectorAll('[role="alertdialog"]')],l.current.length===t.visibleToasts.length&&t.visibleToasts.every(((e,t)=>e.key===l.current[t].key)))return void(l.current=t.visibleToasts);let e=l.current.map(((e,n)=>({...e,i:n,isRemoved:!t.visibleToasts.some((t=>e.key===t.key))}))),r=e.findIndex((e=>e.i===c.current));if(r>-1){let t,n,o=0;for(;o<=r;)e[o].isRemoved||(n=Math.max(0,o-1)),o++;for(;o<e.length;){if(!e[o].isRemoved){t=o-1;break}o++}void 0===n&&void 0===t&&(n=0),n>=0&&n<u.current.length?m(u.current[n]):t>=0&&t<u.current.length&&m(u.current[t])}l.current=t.visibleToasts}),[t.visibleToasts,n]);let h=(0,r.useRef)(null),{focusWithinProps:v}=x({onFocusWithin:e=>{t.pauseAll(),h.current=e.relatedTarget},onBlurWithin:()=>{t.resumeAll(),h.current=null}});return(0,r.useEffect)((()=>{0===t.visibleToasts.length&&h.current&&document.body.contains(h.current)&&("pointer"===X()?m(h.current):h.current.focus(),h.current=null)}),[n,t.visibleToasts.length]),(0,r.useEffect)((()=>()=>{h.current&&document.body.contains(h.current)&&("pointer"===X()?m(h.current):h.current.focus(),h.current=null)}),[n]),{regionProps:g(a,s,v,{tabIndex:-1,"data-react-aria-top-layer":!0,onFocus:e=>{let t=e.target.closest('[role="alertdialog"]');c.current=u.current.findIndex((e=>e===t))},onBlur:()=>{c.current=-1}})}}var se=n(80324),ue=n.n(se),le=n(95295),ce=n(31093);const de=["placement","state"];function fe(e){let{placement:t,state:n}=e,o=(0,c.Z)(e,de),i=r.useRef(null),{regionProps:a}=ae(o,n,i);return r.createElement("div",{className:ue()("jkl","jkl-toast-region",{"jkl-toast-region--left":"left"===t})},r.createElement("div",Object.assign({},a,{ref:i,className:"jkl-toast-region__toasts"}),(0,l.Z)(n.visibleToasts).reverse().map((e=>r.createElement(ce.F,{key:e.key,toast:e,state:n})))))}function me(e){let{queue:t,placement:n}=e;const o=a(t);return o.visibleToasts.length>0?le.createPortal(r.createElement(fe,{state:o,placement:n}),document.body):null}const he=(0,r.createContext)({add:()=>"missing-provider"}),ve=e=>{let{children:t,maxVisibleToasts:n=5,placement:o="center"}=e;const{0:i}=(0,r.useState)(new s({maxVisibleToasts:n,hasExitAnimation:!0}));return r.createElement(he.Provider,{value:{add:(e,t)=>{let n=5e3;return"number"==typeof(null==t?void 0:t.timeout)?n=t.timeout:null!==(null==t?void 0:t.timeout)&&"off"!==(null==t?void 0:t.timeout)||(n=void 0),i.add(e,Object.assign({},t,{timeout:n}))}}},t,r.createElement(me,{queue:i,placement:o}))},pe={boolProps:[],choiceProps:[{name:"Plassering",values:["Sentrert","Venstre"],defaultValue:0}]},be=[[{title:"Nytt i Jøkul",content:r.createElement("p",{className:"jkl-body"},"Les mer om"," ",r.createElement("a",{className:"jkl-link",href:"/komponenter/toast/"},"Toast")," ","på komponentsiden.")},{}],[{content:"Saken går til automatisk behandling"},{variant:"info"}],[{content:"Navn Navnesen er fjernet som reell rettighetshaver"},{variant:"success"}],[{title:"Mistet internettforbindelsen",content:"Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake."},{variant:"warning"}],[{title:"Ingen internettforbindelse",content:"Du får ikke lagret før forbindelsen er tilbake."},{variant:"error"}]];function ge(){const{add:e}=(0,r.useContext)(he);return r.createElement(o.KM,{onClick:()=>{const[t,n]=be[Math.floor(Math.random()*be.length)];e(t,n)}},"Vis toast i kontekst")}const ke=e=>{let{choiceValues:t}=e;const n="Venstre"===(null==t?void 0:t.Plassering)?"left":"center";return r.createElement(ve,{placement:n},r.createElement(ge,null))}},31093:function(e,t,n){n.d(t,{F:function(){return T}});var r=n(99767),o=n(55086),i=n(10056),a=n(47919),s=n(92541),u=n(64160),l=n(46835),c=n(92379),d=Object.defineProperty,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const p=e=>{var t=e,{className:n,from:r,isPaused:o}=t,i=((e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(t,["className","from","isPaused"]);const{0:a,1:s}=(0,c.useState)(Math.floor(r/1e3));return(0,c.useEffect)((()=>{a<=0||setTimeout((()=>{o||s((e=>e-1))}),1e3)}),[o,r,a,s]),c.createElement("div",((e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))h.call(t,n)&&v(e,n,t[n]);return e})({className:"jkl-countdown ".concat(null!=n?n:""),role:"timer","data-testid":"jkl-countdown"},i),c.createElement("span",{className:"jkl-countdown__tracker",role:"presentation",style:{"--duration":"".concat(r,"ms"),"--play-state":o?"paused":"running"},"data-testid":"jkl-countdown__tracker"}),c.createElement("span",{className:"jkl-sr-only"},a))};var b=n(49484),g=n(66931),k=n(81272),E=n(51015);var y=n(80324),w=n.n(y);const L=["className","state"],$=e=>{switch(e){case"error":return c.createElement(i.P,{className:"jkl-toast__icon"});case"info":return c.createElement(a.s,{className:"jkl-toast__icon"});case"success":return c.createElement(s.t,{className:"jkl-toast__icon"});case"warning":return c.createElement(u.a,{className:"jkl-toast__icon"});default:return null}};function T(e){var t;let{className:n,state:i}=e,a=(0,r.Z)(e,L),s=(0,c.useRef)(null),{toastProps:u,titleProps:d}=function(e,t){let{key:n,timer:r,timeout:o,animation:i}=e.toast;(0,c.useEffect)((()=>{if(null!=r&&null!=o)return r.reset(o),()=>{r.pause()}}),[r,o]);let[a,s]=c.useState(!1);(0,c.useEffect)((()=>{"entering"!==i&&"queued"!==i||s(!0)}),[i]);let u=(0,k.Me)(),l=(0,k.mp)(),d=(0,E.q)((f=g.Z)&&f.__esModule?f.default:f,"@react-aria/toast");var f;return{toastProps:{role:"alertdialog","aria-modal":"false","aria-label":e["aria-label"],"aria-labelledby":e["aria-labelledby"]||u,"aria-describedby":e["aria-describedby"]||l,"aria-details":e["aria-details"],"aria-hidden":"exiting"===i?"true":void 0,tabIndex:0},contentProps:{role:"alert","aria-atomic":"true",style:{visibility:a||null===i?"visible":"hidden"}},titleProps:{id:u},descriptionProps:{id:l},closeButtonProps:{"aria-label":d.format("close"),onPress:()=>t.close(n)}}}(a,i);const f="string"==typeof a.toast.content?a.toast.content:a.toast.content.content,m="string"==typeof a.toast.content?void 0:a.toast.content.title,h=null==(null===(t=a.toast.timer)||void 0===t?void 0:t.timerId),{prefersReducedMotion:v}=(0,b.c)();return(0,c.useEffect)((()=>{v&&"exiting"===a.toast.animation&&i.remove(a.toast.key)}),[v,a.toast.animation,a.toast.key,i]),c.createElement("div",Object.assign({},u,{ref:s,className:w()("jkl-toast",{"jkl-toast--info":"info"===a.toast.variant,"jkl-toast--error":"error"===a.toast.variant,"jkl-toast--warning":"warning"===a.toast.variant,"jkl-toast--success":"success"===a.toast.variant},n),"data-animation":a.toast.animation,onAnimationEnd:()=>{"exiting"===a.toast.animation&&i.remove(a.toast.key)}}),c.createElement("span",{className:"jkl-toast__progress"},a.toast.timeout?c.createElement(p,{from:a.toast.timeout,isPaused:h,onAnimationEnd:e=>{e.stopPropagation()}}):null),$(a.toast.variant),c.createElement("div",Object.assign({},d,{className:"jkl-toast__content"}),m&&c.createElement("p",{className:"jkl-toast__title"},m),c.createElement("p",{className:"jkl-toast__message"},f)),c.createElement(o.h,{"data-theme":a.toast.variant?"light":void 0,"aria-label":"Lukk varsel",className:"jkl-toast__dismiss-button",onClick:()=>{i.close(a.toast.key)}},c.createElement(l.T,null)))}},5869:function(e,t,n){var r=n(92379);var o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,a=r.useEffect,s=r.useLayoutEffect,u=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,c=r[1];return s((function(){o.value=n,o.getSnapshot=t,l(o)&&c({inst:o})}),[e,n,t]),a((function(){return l(o)&&c({inst:o}),e((function(){l(o)&&c({inst:o})}))}),[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},66226:function(e,t,n){e.exports=n(5869)},51015:function(e,t,n){n.d(t,{q:function(){return T}});const r=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),o=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function i(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return r.has(t.script)}let t=e.split("-")[0];return o.has(t)}var a=n(92379),s=n(67252);const u=Symbol.for("react-aria.i18n.locale");function l(){let e="undefined"!=typeof window&&window[u]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:i(e)?"rtl":"ltr"}}let c=l(),d=new Set;function f(){c=l();for(let e of d)e(c)}function m(){let e=(0,s.Av)(),[t,n]=(0,a.useState)(c);return(0,a.useEffect)((()=>(0===d.size&&window.addEventListener("languagechange",f),d.add(n),()=>{d.delete(n),0===d.size&&window.removeEventListener("languagechange",f)})),[]),e?{locale:"en-US",direction:"ltr"}:t}const h=a.createContext(null);function v(){let e=m();return(0,a.useContext)(h)||e}const p=Symbol.for("react-aria.i18n.locale"),b=Symbol.for("react-aria.i18n.strings");let g;class k{getStringForLocale(e,t){let n=this.getStringsForLocale(t)[e];if(!n)throw new Error(`Could not find intl message ${e} in ${t} locale`);return n}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t,n="en-US"){if(t[e])return t[e];let r=function(e){return Intl.Locale?new Intl.Locale(e).language:e.split("-")[0]}(e);if(t[r])return t[r];for(let o in t)if(o.startsWith(r+"-"))return t[o];return t[n]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if("undefined"==typeof window)return null;let t=window[p];if(void 0===g){let e=window[b];if(!e)return null;g={};for(let n in e)g[n]=new k({[t]:e[n]},t)}let n=null==g?void 0:g[e];if(!n)throw new Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return n}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter((([,e])=>e))),this.defaultLocale=t}}const E=new Map,y=new Map;class w{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return"function"==typeof n?n(t,this):n}plural(e,t,n="cardinal"){let r=t["="+e];if(r)return"function"==typeof r?r():r;let o=this.locale+":"+n,i=E.get(o);return i||(i=new Intl.PluralRules(this.locale,{type:n}),E.set(o,i)),r=t[i.select(e)]||t.other,"function"==typeof r?r():r}number(e){let t=y.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),y.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return"function"==typeof n?n():n}constructor(e,t){this.locale=e,this.strings=t}}const L=new WeakMap;function $(e,t){return t&&k.getGlobalDictionaryForPackage(t)||function(e){let t=L.get(e);return t||(t=new k(e),L.set(e,t)),t}(e)}function T(e,t){let{locale:n}=v(),r=$(e,t);return(0,a.useMemo)((()=>new w(n,r)),[n,r])}},67252:function(e,t,n){n.d(t,{Av:function(){return h},gP:function(){return c}});var r=n(92379);const o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o),a=r.createContext(!1);let s=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),u=new WeakMap;function l(e=!1){let t=(0,r.useContext)(i),n=(0,r.useRef)(null);if(null===n.current&&!e){var o,a;let e=null===(a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===a||null===(o=a.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let n=u.get(e);null==n?u.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,u.delete(e))}n.current=++t.current}return n.current}const c="function"==typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)(h());return e||`${n?"react-aria":`react-aria${o.prefix}`}-${t}`}:function(e){let t=(0,r.useContext)(i);t!==o||s||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=l(!!e),a=`react-aria${t.prefix}`;return e||`${a}-${n}`};function d(){return!1}function f(){return!0}function m(e){return()=>{}}function h(){return"function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(m,d,f):(0,r.useContext)(a)}},66931:function(e,t,n){n.d(t,{Z:function(){return r}});var r={};r={"ar-AE":{close:"إغلاق",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} إشعار`,other:()=>`${t.number(e.count)} إشعارات`})}.`},"bg-BG":{close:"Затвори",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} известие`,other:()=>`${t.number(e.count)} известия`})}.`},"cs-CZ":{close:"Zavřít",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} oznámení`,other:()=>`${t.number(e.count)} oznámení`})}.`},"da-DK":{close:"Luk",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} besked`,other:()=>`${t.number(e.count)} beskeder`})}.`},"de-DE":{close:"Schließen",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} Benachrichtigung`,other:()=>`${t.number(e.count)} Benachrichtigungen`})}.`},"el-GR":{close:"Κλείσιμο",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} ειδοποίηση`,other:()=>`${t.number(e.count)} ειδοποιήσεις`})}.`},"en-US":{close:"Close",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notification`,other:()=>`${t.number(e.count)} notifications`})}.`},"es-ES":{close:"Cerrar",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notificación`,other:()=>`${t.number(e.count)} notificaciones`})}.`},"et-EE":{close:"Sule",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} teatis`,other:()=>`${t.number(e.count)} teatist`})}.`},"fi-FI":{close:"Sulje",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} ilmoitus`,other:()=>`${t.number(e.count)} ilmoitusta`})}.`},"fr-FR":{close:"Fermer",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notification`,other:()=>`${t.number(e.count)} notifications`})}.`},"he-IL":{close:"סגור",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} התראה`,other:()=>`${t.number(e.count)} התראות`})}.`},"hr-HR":{close:"Zatvori",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} obavijest`,other:()=>`${t.number(e.count)} obavijesti`})}.`},"hu-HU":{close:"Bezárás",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} értesítés`,other:()=>`${t.number(e.count)} értesítés`})}.`},"it-IT":{close:"Chiudi",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notifica`,other:()=>`${t.number(e.count)} notifiche`})}.`},"ja-JP":{close:"閉じる",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} 個の通知`,other:()=>`${t.number(e.count)} 個の通知`})}。`},"ko-KR":{close:"닫기",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)}개 알림`,other:()=>`${t.number(e.count)}개 알림`})}.`},"lt-LT":{close:"Uždaryti",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} pranešimas`,other:()=>`${t.number(e.count)} pranešimai`})}.`},"lv-LV":{close:"Aizvērt",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} paziņojums`,other:()=>`${t.number(e.count)} paziņojumi`})}.`},"nb-NO":{close:"Lukk",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} varsling`,other:()=>`${t.number(e.count)} varsler`})}.`},"nl-NL":{close:"Sluiten",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} melding`,other:()=>`${t.number(e.count)} meldingen`})}.`},"pl-PL":{close:"Zamknij",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} powiadomienie`,few:()=>`${t.number(e.count)} powiadomienia`,many:()=>`${t.number(e.count)} powiadomień`,other:()=>`${t.number(e.count)} powiadomienia`})}.`},"pt-BR":{close:"Fechar",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notificação`,other:()=>`${t.number(e.count)} notificações`})}.`},"pt-PT":{close:"Fechar",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notificação`,other:()=>`${t.number(e.count)} notificações`})}.`},"ro-RO":{close:"Închideţi",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} notificare`,other:()=>`${t.number(e.count)} notificări`})}.`},"ru-RU":{close:"Закрыть",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} уведомление`,other:()=>`${t.number(e.count)} уведомления`})}.`},"sk-SK":{close:"Zatvoriť",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} oznámenie`,few:()=>`${t.number(e.count)} oznámenia`,other:()=>`${t.number(e.count)} oznámení`})}.`},"sl-SI":{close:"Zapri",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} obvestilo`,two:()=>`${t.number(e.count)} obvestili`,few:()=>`${t.number(e.count)} obvestila`,other:()=>`${t.number(e.count)} obvestil`})}.`},"sr-SP":{close:"Zatvori",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} obaveštenje`,other:()=>`${t.number(e.count)} obaveštenja`})}.`},"sv-SE":{close:"Stäng",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} meddelande`,other:()=>`${t.number(e.count)} meddelanden`})}.`},"tr-TR":{close:"Kapat",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} bildirim`,other:()=>`${t.number(e.count)} bildirim`})}.`},"uk-UA":{close:"Закрити",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} сповіщення`,other:()=>`${t.number(e.count)} сповіщення`})}.`},"zh-CN":{close:"关闭",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} 个通知`,other:()=>`${t.number(e.count)} 个通知`})}。`},"zh-TW":{close:"關閉",notifications:(e,t)=>`${t.plural(e.count,{one:()=>`${t.number(e.count)} 個通知`,other:()=>`${t.number(e.count)} 個通知`})}。`}}},14424:function(e,t,n){n.d(t,{i:function(){return i}});var r=n(35586),o=n(92379);function i(e){const t=(0,o.useRef)(null);return(0,r.b)((()=>{t.current=e}),[e]),(0,o.useCallback)(((...e)=>{const n=t.current;return null==n?void 0:n(...e)}),[])}},81272:function(e,t,n){n.d(t,{ur:function(){return d},Me:function(){return c},mp:function(){return f}});var r=n(35586),o=n(14424),i=n(92379);function a(e){let[t,n]=(0,i.useState)(e),a=(0,i.useRef)(null),s=(0,o.i)((()=>{if(!a.current)return;let e=a.current.next();e.done?a.current=null:t===e.value?s():n(e.value)}));(0,r.b)((()=>{a.current&&s()}));let u=(0,o.i)((e=>{a.current=e(t),s()}));return[t,u]}var s=n(67252);let u=Boolean("undefined"!=typeof window&&window.document&&window.document.createElement),l=new Map;function c(e){let[t,n]=(0,i.useState)(e),o=(0,i.useRef)(null),a=(0,s.gP)(t),c=(0,i.useCallback)((e=>{o.current=e}),[]);return u&&(l.has(a)&&!l.get(a).includes(c)?l.set(a,[...l.get(a),c]):l.set(a,[c])),(0,r.b)((()=>{let e=a;return()=>{l.delete(e)}}),[a]),(0,i.useEffect)((()=>{let e=o.current;e&&(o.current=null,n(e))})),a}function d(e,t){if(e===t)return e;let n=l.get(e);if(n)return n.forEach((e=>e(t))),t;let r=l.get(t);return r?(r.forEach((t=>t(e))),e):t}function f(e=[]){let t=c(),[n,o]=a(t),s=(0,i.useCallback)((()=>{o((function*(){yield t,yield document.getElementById(t)?t:void 0}))}),[t,o]);return(0,r.b)(s,[t,s,...e]),n}},35586:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(92379);const o="undefined"!=typeof document?r.useLayoutEffect:()=>{}},53048:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}t.Z=function(){for(var e,t,n=0,o="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}}}]);