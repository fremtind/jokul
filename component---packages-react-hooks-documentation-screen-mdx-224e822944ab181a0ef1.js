"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3096],{1699:function(e,n,t){t.d(n,{zX:function(){return g},vD:function(){return u},cs:function(){return x},O8:function(){return s},Iy:function(){return f},zP:function(){return M},JZ:function(){return o},EV:function(){return O},gE:function(){return k}});var r=t(7378),i="(prefers-reduced-motion: no-preference)",o=function(){var e=(0,r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia(i).matches)),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia(i),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function u(e,n){var t=(0,r.useRef)(),i=(0,r.useRef)(),u=(0,r.useRef)(null),s=(0,r.useRef)(!0),d=o();function a(t){var r,i=c(u);i&&t.target===i&&(i.removeAttribute("style"),null==n||null===(r=n.onTransitionEnd)||void 0===r||r.call(n,e))}var f=(0,r.useCallback)((function(){var r;if(!s.current)if(null==n||null===(r=n.onTransitionStart)||void 0===r||r.call(n,e),d){var o;null==n||null===(o=n.onTransitionEnd)||void 0===o||o.call(n,e)}else{var a=c(u);if(a)if(a.style.display="block",a.style.overflow="hidden",e)a.style.height="0",a.style.height=a.scrollHeight+"px";else{if(0===a.scrollHeight)return void a.removeAttribute("style");a.style.height=a.scrollHeight+"px",t.current=requestAnimationFrame((function(){i.current=requestAnimationFrame((function(){a.style.height="0px"}))}))}}}),[e]);return(0,r.useLayoutEffect)((function(){f()}),[e,f]),(0,r.useEffect)((function(){var e=c(u);return e&&e.addEventListener("transitionend",a),function(){e&&e.removeEventListener("transitionend",a)}}),[e]),(0,r.useEffect)((function(){var e=t.current,n=i.current;return s.current=!1,function(){e&&cancelAnimationFrame(e),n&&cancelAnimationFrame(n)}}),[t,i]),[u,f]}function c(e){return e.current&&(e.current.el||e.current)}function s(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t(7226),t(4417);var d,a=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},f=function(e,n,t){var i=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=i.current;if(a()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(n),o&&r.observe(o,t)}return function(){a()&&r&&r.disconnect()}}),[e,n,t])},l=(t(5424),t(4649)),m=t(6328);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(d||(d={}));var w={resized:d.resized},h=function(e,n){return{isSmallDevice:e<=m.AV.small,isMediumDevice:e>m.AV.small&&e<m.AV.medium,isLargeDevice:e>m.AV.medium&&e<m.AV.large,isXlDevice:e>m.AV.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},g={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},y=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return h(e,n)},b=function(e,n){var t=n.type,r=n.width,i=n.height;if(t===w.resized)return p(p({},e),h(r,i))};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var O=function(){var e=(0,r.useReducer)(b,g,y),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:w.resized,width:window.innerWidth,height:window.innerHeight})}))};return(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},k=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,o=e.autoScroll,u=void 0===o||o,c=e.options,s=void 0===c?{behavior:"smooth"}:c,d=function(){null!=n&&n.current&&n.current.scrollIntoView(s)};return(0,r.useEffect)((function(){if(u){var e=setTimeout(d,i);return function(){return clearTimeout(e)}}}),[n,i,u]),[d]},j="(prefers-reduced-motion: reduce)",D="(prefers-color-scheme: light)",L=function(e){return!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia(e).matches},P=function(e,n){void 0!==e.addEventListener?e.addEventListener("change",n):e.addListener(n)},x=function(){var e=(0,r.useState)(L(j)),n=e[0],t=e[1],i=(0,r.useState)(L(D)?"light":"dark"),o=i[0],u=i[1];return(0,r.useEffect)((function(){"undefined"!=typeof window&&window.matchMedia&&(P(window.matchMedia(j),(function(e){t(e.matches)})),P(window.matchMedia(D),(function(e){u(e.matches?"light":"dark")})))}),[]),{prefersReducedMotion:n,prefersColorScheme:o}},M=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}},7226:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7378);function i(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},5424:function(e,n,t){t.d(n,{S:function(){return o}});var r=t(7378),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,n,t,o){var u=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=u.current;if(i()){var c=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,o),c&&r.observe(c)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,o])}},4417:function(e,n,t){t.d(n,{W:function(){return i}});var r=t(7378);function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),(0,r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},655:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return g}});var r=t(808),i=t(7378),o=t(1368),u=t(2803),c=t(1699),s=i.createContext(c.zX),d=function(){var e=(0,i.useContext)(s),n=e.isSmallDevice,t=e.isMediumDevice,r=e.isLargeDevice,o=e.isXlDevice,u=e.isLandscape,c=e.isPortrait,d=e.inner,a=d.width,f=d.height;return i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-heading-3 jkl-spacing--bottom-2"},"Din dings har en "+function(){switch(!0){case n:return"liten";case t:return"litt større";case r:return"ganske stor";case o:return"stor";default:return""}}()+" skjerm i "+(u?"landskaps":"")+(c?"portrett":"")+"modus"),i.createElement("p",{className:"jkl-body jkl-spacing--bottom-2"},"Oppløsningen på nettleservinduet er "+a+" x "+f))},a=function(){var e=(0,c.EV)();return i.createElement(s.Provider,{value:e},i.createElement(d,null))},f=["components"],l={},m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},v=m("Ingress"),p=m("ComponentExample"),w={_frontmatter:l},h=u.Z;function g(e){var n=e.components,t=(0,r.Z)(e,f);return(0,o.mdx)(h,Object.assign({},w,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(v,{mdxType:"Ingress"},"useScreen lar deg få tilgang til de samme breakpoints som cssen bruker til media queries."),(0,o.mdx)("p",null,"Av og til er kan det være nødvendig å endre strukturen på innholdet bassert på hvor stor skjerm innholdet skal presenteres på. Anbefalt implementasjon er å legge ",(0,o.mdx)("inlineCode",{parentName:"p"},"useScreen")," så høyt oppe i applikasjonen din som du mener er nødvendig i en ",(0,o.mdx)("inlineCode",{parentName:"p"},"context"),", for å benytte den contexten når du trenger å plukke ut verdiene i en komponent. Dette er for å unngå å sette opp flere eventlyttere enn nødvendig. Om du bruker server side rendering bør denne brukes med forsiktighet, da serveren ikke vil vite hvilken size den skal rendre for."),(0,o.mdx)(p,{component:a,mdxType:"ComponentExample"}))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-screen-mdx-224e822944ab181a0ef1.js.map