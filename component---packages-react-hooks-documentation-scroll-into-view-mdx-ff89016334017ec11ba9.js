(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[420],{1699:function(e,n,t){"use strict";t.d(n,{zX:function(){return g},vD:function(){return u},cs:function(){return P},O8:function(){return s},Iy:function(){return f},zP:function(){return M},JZ:function(){return o},EV:function(){return O},gE:function(){return k}});var r=t(7378),i="(prefers-reduced-motion: no-preference)",o=function(){var e=(0,r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia(i).matches)),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia(i),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function u(e,n){var t=(0,r.useRef)(),i=(0,r.useRef)(),u=(0,r.useRef)(null),s=(0,r.useRef)(!0),a=o();function l(t){var r,i=c(u);i&&t.target===i&&(i.removeAttribute("style"),null==n||null===(r=n.onTransitionEnd)||void 0===r||r.call(n,e))}var f=(0,r.useCallback)((function(){var r;if(!s.current)if(null==n||null===(r=n.onTransitionStart)||void 0===r||r.call(n,e),a){var o;null==n||null===(o=n.onTransitionEnd)||void 0===o||o.call(n,e)}else{var l=c(u);if(l)if(l.style.display="block",l.style.overflow="hidden",e)l.style.height="0",l.style.height=l.scrollHeight+"px";else{if(0===l.scrollHeight)return void l.removeAttribute("style");l.style.height=l.scrollHeight+"px",t.current=requestAnimationFrame((function(){i.current=requestAnimationFrame((function(){l.style.height="0px"}))}))}}}),[e]);return(0,r.useLayoutEffect)((function(){f()}),[e,f]),(0,r.useEffect)((function(){var e=c(u);return e&&e.addEventListener("transitionend",l),function(){e&&e.removeEventListener("transitionend",l)}}),[e]),(0,r.useEffect)((function(){var e=t.current,n=i.current;return s.current=!1,function(){e&&cancelAnimationFrame(e),n&&cancelAnimationFrame(n)}}),[t,i]),[u,f]}function c(e){return e.current&&(e.current.el||e.current)}function s(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t(7226),t(4417);var a,l=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},f=function(e,n,t){var i=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=i.current;if(l()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(n),o&&r.observe(o,t)}return function(){l()&&r&&r.disconnect()}}),[e,n,t])},d=(t(5424),t(3450)),m=t(6328);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(a||(a={}));var w={resized:a.resized},h=function(e,n){return{isSmallDevice:e<=m.AV.small,isMediumDevice:e>m.AV.small&&e<m.AV.medium,isLargeDevice:e>m.AV.medium&&e<m.AV.large,isXlDevice:e>m.AV.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},g={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},y=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return h(e,n)},b=function(e,n){var t=n.type,r=n.width,i=n.height;switch(t){case w.resized:return p(p({},e),h(r,i))}};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var O=function(){var e=(0,r.useReducer)(b,g,y),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:w.resized,width:window.innerWidth,height:window.innerHeight})}))};return(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},k=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,o=e.autoScroll,u=void 0===o||o,c=e.options,s=void 0===c?{behavior:"smooth"}:c,a=function(){null!=n&&n.current&&n.current.scrollIntoView(s)};return(0,r.useEffect)((function(){if(u){var e=setTimeout(a,i);return function(){return clearTimeout(e)}}}),[n,i,u]),[a]},j="(prefers-reduced-motion: reduce)",D="(prefers-color-scheme: light)",S=function(e){return!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia(e).matches},L=function(e,n){void 0!==e.addEventListener?e.addEventListener("change",n):e.addListener(n)},P=function(){var e=(0,r.useState)(S(j)),n=e[0],t=e[1],i=(0,r.useState)(S(D)?"light":"dark"),o=i[0],u=i[1];return(0,r.useEffect)((function(){"undefined"!=typeof window&&window.matchMedia&&(L(window.matchMedia(j),(function(e){t(e.matches)})),L(window.matchMedia(D),(function(e){u(e.matches?"light":"dark")})))}),[]),{prefersReducedMotion:n,prefersColorScheme:o}},M=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}},7226:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(7378);function i(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},5424:function(e,n,t){"use strict";t.d(n,{S:function(){return o}});var r=t(7378),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,n,t,o){var u=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=u.current;if(i()){var c=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,o),c&&r.observe(c)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,o])}},4417:function(e,n,t){"use strict";t.d(n,{W:function(){return i}});var r=t(7378);function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),(0,r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},8757:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return f},default:function(){return p}});var r,i=t(120),o=t(7378),u=t(1368),c=t(2803),s=t(1699),a=function(){var e=(0,o.useState)(!1),n=e[0],t=e[1],r=(0,o.useState)(0),i=r[0],u=r[1],c=(0,o.useRef)(null),a=(0,s.gE)({ref:c,timeout:i,autoScroll:n})[0];return o.createElement("section",{className:"hooks-example"},o.createElement("section",{style:{height:"100vh"}},o.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.createElement("div",null,o.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing--bottom-2",onClick:function(){return t(!n)}},n?"Skru av":"Skru på"),o.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--left-1",onClick:a},"Scroll")),o.createElement("label",{htmlFor:"autoscroll-input",className:"jkl-label--medium"},"Sett ventetid før autoscroll"),o.createElement("input",{id:"autoscroll-input",className:"jkl-text-input__input",style:{width:"10ch"},value:i,type:"number",onChange:function(e){t(!1),""!==e.currentTarget.value&&u(parseInt(e.currentTarget.value,10))}}))),o.createElement("div",{ref:c},"AutoScroll here"))},l=["components"],f={},d=(r="Ingress",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,u.mdx)("div",e)}),m={_frontmatter:f},v=c.Z;function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,u.mdx)(v,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)(d,{mdxType:"Ingress"},"useScrollIntoView lar deg automatisk scrolle et element til det blir synlig. Hooken returner scrollfunksjonen om du vil trigge den manuelt, og det er mulig å skru av automatisk scrolling om du vil ha full manuell kontroll. Du har også tilgang på alle options tilgjengelig for scrollIntoView"),(0,u.mdx)(a,{mdxType:"ScrollIntoViewExample"}))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-scroll-into-view-mdx-ff89016334017ec11ba9.js.map