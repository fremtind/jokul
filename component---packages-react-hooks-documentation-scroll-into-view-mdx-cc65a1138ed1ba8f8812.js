"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[420],{51699:function(e,n,t){t.d(n,{zX:function(){return y},vD:function(){return u},cs:function(){return P},O8:function(){return a},Iy:function(){return l},zP:function(){return x},JZ:function(){return o},EV:function(){return O},gE:function(){return j}});var r=t(27378),i="(prefers-reduced-motion: no-preference)",o=function(){var e=(0,r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia(i).matches)),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia(i),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function u(e,n){var t=(0,r.useRef)(),i=(0,r.useRef)(),u=(0,r.useRef)(null),a=(0,r.useRef)(!0),s=o();function f(t){var r,i=c(u);i&&t.target===i&&(i.removeAttribute("style"),null==n||null===(r=n.onTransitionEnd)||void 0===r||r.call(n,e))}var l=(0,r.useCallback)((function(){var r;if(!a.current)if(null==n||null===(r=n.onTransitionStart)||void 0===r||r.call(n,e),s){var o;null==n||null===(o=n.onTransitionEnd)||void 0===o||o.call(n,e)}else{var f=c(u);if(f)if(f.style.display="block",f.style.overflow="hidden",e)f.style.height="0",f.style.height=f.scrollHeight+"px";else{if(0===f.scrollHeight)return void f.removeAttribute("style");f.style.height=f.scrollHeight+"px",t.current=requestAnimationFrame((function(){i.current=requestAnimationFrame((function(){f.style.height="0px"}))}))}}}),[e,n,s]);return(0,r.useLayoutEffect)((function(){l()}),[e,l]),(0,r.useEffect)((function(){var e=c(u);return e&&e.addEventListener("transitionend",f),function(){e&&e.removeEventListener("transitionend",f)}}),[e]),(0,r.useEffect)((function(){var e=t.current,n=i.current;return a.current=!1,function(){e&&cancelAnimationFrame(e),n&&cancelAnimationFrame(n)}}),[t,i]),[u,l]}function c(e){return e.current&&(e.current.el||e.current)}function a(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t(17226),t(14417);var s,f=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},l=function(e,n,t){var i=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=i.current;if(f()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(n),o&&r.observe(o,t)}return function(){f()&&r&&r.disconnect()}}),[e,n,t])},d=(t(45424),t(64649)),m=t(76328);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(s||(s={}));var w={resized:s.resized},h=function(e,n){return{isSmallDevice:e<=m.AV.small,isMediumDevice:e>m.AV.small&&e<m.AV.medium,isLargeDevice:e>m.AV.medium&&e<m.AV.large,isXlDevice:e>m.AV.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},y={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},g=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return h(e,n)},b=function(e,n){var t=n.type,r=n.width,i=n.height;if(t===w.resized)return p(p({},e),h(r,i))};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var O=function(){var e=(0,r.useReducer)(b,y,g),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:w.resized,width:window.innerWidth,height:window.innerHeight})}))};return(0,r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},j=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,o=e.autoScroll,u=void 0===o||o,c=e.options,a=void 0===c?{behavior:"smooth"}:c,s=function(){null!=n&&n.current&&n.current.scrollIntoView(a)};return(0,r.useEffect)((function(){if(u){var e=setTimeout(s,i);return function(){return clearTimeout(e)}}}),[n,i,u]),[s]},k="(prefers-reduced-motion: reduce)",D="(prefers-color-scheme: light)",S=function(e){return!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia(e).matches},L=function(e,n){void 0!==e.addEventListener?e.addEventListener("change",n):e.addListener(n)},P=function(){var e=(0,r.useState)(S(k)),n=e[0],t=e[1],i=(0,r.useState)(S(D)?"light":"dark"),o=i[0],u=i[1];return(0,r.useEffect)((function(){"undefined"!=typeof window&&window.matchMedia&&(L(window.matchMedia(k),(function(e){t(e.matches)})),L(window.matchMedia(D),(function(e){u(e.matches?"light":"dark")})))}),[]),{prefersReducedMotion:n,prefersColorScheme:o}},x=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}},17226:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(27378);function i(e,n){function t(t){null!=e&&e.current&&!e.current.contains(t.target)&&n()}(0,r.useEffect)((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},45424:function(e,n,t){t.d(n,{S:function(){return o}});var r=t(27378),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,n,t,o){var u=(0,r.useRef)(null);(0,r.useEffect)((function(){var r=u.current;if(i()){var c=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,o),c&&r.observe(c)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,o])}},14417:function(e,n,t){t.d(n,{W:function(){return i}});var r=t(27378);function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),(0,r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},48757:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return f},default:function(){return w}});var r=t(30808),i=t(27378),o=t(81368),u=t(77309),c=t(51699),a=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1],r=(0,i.useState)(0),o=r[0],u=r[1],a=(0,i.useRef)(null),s=(0,c.gE)({ref:a,timeout:o,autoScroll:n})[0];return i.createElement("section",{style:{height:"100vh",position:"relative"}},i.createElement("div",{style:{display:"flex",flexDirection:"column"}},i.createElement("div",null,i.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing-xl--bottom",onClick:function(){return t(!n)}},n?"Skru av":"Skru på"),i.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing-l--left",onClick:s},"Scroll")),i.createElement("label",{htmlFor:"autoscroll-input",className:"jkl-label--medium"},"Sett ventetid før autoscroll"),i.createElement("input",{id:"autoscroll-input",className:"jkl-text-input__input",style:{width:"10ch"},value:o,type:"number",onChange:function(e){t(!1),""!==e.currentTarget.value&&u(parseInt(e.currentTarget.value,10))}})),i.createElement("div",{ref:a,style:{position:"absolute",bottom:0}},"AutoScroll here"))},s=["components"],f={},l=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)}},d=l("Ingress"),m=l("ComponentExample"),v={_frontmatter:f},p=u.Z;function w(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.mdx)(p,Object.assign({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(d,{mdxType:"Ingress"},"useScrollIntoView lar deg automatisk scrolle et element til det blir synlig. Hooken returner scrollfunksjonen om du vil trigge den manuelt, og det er mulig å skru av automatisk scrolling om du vil ha full manuell kontroll. Du har også tilgang på alle options tilgjengelig for scrollIntoView"),(0,o.mdx)(m,{component:a,mdxType:"ComponentExample"}))}w.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-scroll-into-view-mdx-cc65a1138ed1ba8f8812.js.map