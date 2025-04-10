"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8834],{39295:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return _},Head:function(){return w},default:function(){return j}});var r=n(75615),a=n(70079),i=n(63549),l=n(56062),c=n(5010);let s;!function(e){e.orientation="ORIENTATION_CHANGED",e.deviceSize="DEVICE_SIZE_CHANGED"}(s||(s={}));const o=(e,t)=>{switch(t.type){case s.orientation:return{...e,...(r=t.property,{isLandscape:"isLandscape"===r,isPortrait:"isPortrait"===r})};case s.deviceSize:return{...e,...(n=t.property,{isSmallDevice:"isSmallDevice"===n,isMediumDevice:"isMediumDevice"===n,isLargeDevice:"isLargeDevice"===n,isXlDevice:"isXlDevice"===n})};default:return e}var n,r},d={isSmallDevice:"(max-width: "+(l.A.medium-1)+"px)",isMediumDevice:"(min-width: "+l.A.medium+"px) and (max-width: "+(l.A.large-1)+"px)",isLargeDevice:"(min-width: "+l.A.large+"px) and (max-width: "+(l.A.xl-1)+"px)",isXlDevice:"(min-width: "+l.A.xl+"px)",isPortrait:"(orientation: portrait)",isLandscape:"(orientation: landscape)"},u=e=>({type:"isLandscape"===e||"isPortrait"===e?s.orientation:s.deviceSize,property:e}),m=()=>{const e=(()=>{const{0:e,1:t}=(0,a.useState)(!1),{0:n,1:r}=(0,a.useReducer)(o,{isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1});(0,a.useEffect)((()=>{t(!0),Object.entries(d).map((e=>{let[t,n]=e;return[t,(0,c.LV)(n)]})).forEach((e=>{let[t,n]=e;n&&r(u(t))}))}),[]);const i=(0,a.useCallback)((e=>t=>{requestAnimationFrame((()=>{t.matches&&r(u(e))}))}),[]);return(0,a.useEffect)((()=>{if(!e||!window.matchMedia)return;const t=[];return Object.entries(d).forEach((e=>{let[n,r]=e;const a=window.matchMedia(r),l=i(n);t.push([a,l]),(0,c.xl)(a,l)})),()=>{t.forEach((e=>{let[t,n]=e;return(0,c.h9)(t,n)}))}}),[i,e]),{...n}})();return a.createElement("p",{className:"jkl-heading-3 jkl-spacing-xl--bottom"},"Din dings har en "+(()=>{switch(!0){case e.isSmallDevice:return"liten";case e.isMediumDevice:return"medium";case e.isLargeDevice:return"stor";case e.isXlDevice:return"veldig stor";default:return""}})()+" skjerm"+(()=>{switch(!0){case e.isLandscape:return" i landskaps"+i.shy+"modus";case e.isPortrait:return" i portrett"+i.shy+"modus";default:return""}})())};function p(e){const t=Object.assign({p:"p",code:"code",a:"a"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:i}=t;return i||f("ComponentExample",!0),n||f("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,"useScreen gir deg informasjon om skjermens størrelse med utgangspunkt i breakpoints fra Jøkul."),"\n",a.createElement(i,{title:"useScreen",component:m,codeExample:'const screen = useScreen();\n\nconst getDeviceName = () => {\n    switch (true) {\n        case screen.isSmallDevice:\n            return "liten";\n        case screen.isMediumDevice:\n            return "medium";\n        case screen.isLargeDevice:\n            return "stor";\n        case screen.isXlDevice:\n            return "veldig stor";\n        default:\n            return "";\n    }\n};\n\nconst getOrientation = () => {\n    switch (true) {\n        case screen.isLandscape:\n            return ` i landskapsmodus`;\n        case screen.isPortrait:\n            return ` i portrettmodus`;\n        default:\n            return "";\n    }\n};\n\nreturn (\n    <p className="jkl-heading-3 jkl-spacing-xl--bottom">\n        {`Din dings har en ${getDeviceName()} skjerm${getOrientation()}`}\n    </p>\n);'}),"\n",a.createElement(t.p,null,"Bruk denne hooken når du trenger å rendre forskjellig innhold på en side ut fra dimensjonene til nettleservinduet. Du bør foretrekke en løsning i ren CSS der det er mulig. Husk også at verdiene fra ",a.createElement(t.code,null,"useScreen")," er upålitelige dersom du bruker server-side rendering."),"\n",a.createElement(t.p,null,"For å unngå å sette mange eventlyttere i nettleseren kan du vurdere å dele verdiene fra ",a.createElement(t.code,null,"useScreen")," i en ",a.createElement(t.a,{href:"https://beta.reactjs.org/learn/passing-data-deeply-with-context"},"context")," på passende nivå i applikasjonen din. Verdiene endrer seg kun når vinduet passerer breakpoints eller går fra landskaps- til portrettformat."))}var v=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(p,e)):p(e)};function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var E=n(71111),g=n(16569),k=n(72892),h=n(479);const w=e=>{let{pageContext:t}=e;return a.createElement(g.p,{title:t.title})},_=e=>{let{location:t,data:n,pageContext:r,children:i}=e;const{frontmatter:l}=n.page,{types:c}=r;return a.createElement(h.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(k.M1,Object.assign({},l,{versions:r.versions})),a.createElement(k.w5,l),i,c&&a.createElement(E.l,{types:c}))};function j(e){return a.createElement(_,e,a.createElement(v,e))}},63549:function(e,t,n){n.r(t),n.d(t,{COPYRIGHT:function(){return o},DOWNWARDS_ARROW:function(){return v},LEFTWARDS_ARROW:function(){return u},NON_BREAKING_HYPHEN:function(){return i},NON_BREAKING_SPACE:function(){return r},NORTH_EAST_ARROW:function(){return d},RIGHTWARDS_ARROW:function(){return p},SOFT_HYPHEN:function(){return c},UPWARDS_ARROW:function(){return m},ZERO_WIDTH_SPACE:function(){return f},nbhy:function(){return l},nbsp:function(){return a},shy:function(){return s}});const r=" ",a=r,i="‑",l=i,c="­",s=c,o="©",d="↗",u="←",m="↑",p="→",v="↓",f="​"},71111:function(e,t,n){n.d(t,{l:function(){return p}});var r=n(57986),a=n(80252),i=n(50601),l=n(70079);const c=e=>l.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,i=n>0,l=r-n>a;t.classList.toggle("left-shadow",i),t.classList.toggle("right-shadow",l)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},m=e=>{let{props:t}=e;const n=(0,l.useRef)(null);return(0,l.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),l.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},l.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},l.createElement(i.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},p=e=>{let{types:t}=e;return l.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},l.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),l.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),l.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(o):[],i=n.props?Object.values(n.props).filter(s):[];return l.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&l.createElement(m,{props:r}),i.length>0&&l.createElement(l.Fragment,null,l.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),l.createElement(m,{props:i})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),a=n.n(r),i=n(79363),l=n(70079),c=n(56024);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,l.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return l.createElement(i.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return l}});var r=n(26372),a=n.n(r),i=n(70079);const l=e=>{let{className:t,density:n,...r}=e;return i.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},80252:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(14092),a=n(89292),i=n(26372),l=n.n(i),c=n(70079);const s=e=>{let{expanded:t=!1,className:n}=e;return c.createElement("span",{className:l()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},c.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),c.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},o=e=>{let{children:t,title:n,className:i,startExpanded:o=!1,onClick:d,...u}=e;const m=(0,r.M)("title"),p=(0,r.M)("content"),{0:v,1:f}=(0,c.useState)(o),[E]=(0,a.v)(v,{easing:"exit",timing:"expressive"});return c.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:l()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":v})},c.createElement("button",{id:m,className:"jkl-accordion-item__title",type:"button","aria-expanded":v,"aria-controls":p,onClick:e=>{const t=!v;f(t),d&&d(e,t)}},n,c.createElement(s,{expanded:v})),c.createElement("div",{id:p,ref:E,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":m,hidden:!v},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),a=n(64327),i=n(1807),l=n(11348),c=n(12675),s=n(14687),o=n(61211),d=n(39666);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:m,rows:p,verticalAlign:v,...f}=e;return r.createElement(a.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(l.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(d.S,null,u.map(((e,t)=>r.createElement(o.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(i.R,null,0===p.length&&m&&r.createElement(d.S,null,r.createElement(c.p,{colSpan:u.length},m)),p.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(c.p,{key:t,"data-th":u[t],verticalAlign:v},e))))))))}));u.displayName="DataTable"}}]);