"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3255],{98435:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return E},Head:function(){return k},default:function(){return g}});var r=n(47160),l=n(70079),a=n(83523);const o=(0,l.createContext)({prefersReducedMotion:!1,prefersColorScheme:"light",forcedColors:!1}),c=()=>{const{prefersReducedMotion:e,prefersColorScheme:t,forcedColors:n}=(0,l.useContext)(o);return l.createElement("section",{className:"hooks-example key-listener-example jkl-spacing-2xl--bottom"},l.createElement("h2",{className:"jkl-h2 jkl-spacing-xl--bottom"},"Preferanser fra nettleseren din"),l.createElement("dl",null,l.createElement("dt",null,"Redusert bevegelse"),l.createElement("dd",null,e?"Ja":"Ingen preferanse"),l.createElement("dt",null,"Fargetema"),l.createElement("dd",null,"light"===t?"Lyst":"Mørkt"),l.createElement("dt",null,"Høykontrast"),l.createElement("dd",null,n?"Ja":"Nei")))};var s=()=>{const{prefersColorScheme:e,prefersReducedMotion:t,forcedColors:n}=(0,a.c)();return l.createElement(o.Provider,{value:{prefersReducedMotion:t,prefersColorScheme:e,forcedColors:n}},l.createElement(c,null))};function i(e){const t=Object.assign({p:"p",h2:"h2",code:"code",a:"a"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Med useBrowserPreferences får du tilgang til mediepreferanser satt i brukerens nettleser eller operativsystem, slik\nsom preferanse for redusert bevegelse eller mørkt fargetema. Dermed kan du enklere tilpasse løsningen din etter\nbrukerens behov og ønsker.")),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"Denne hooken baserer seg på en eventListener, og den bør derfor implementeres så høyt opp i applikasjonen din som mulig for å unngå å lage for mange listeners. Bruk gjerne en React Context heller enn å bruke denne hooken flere steder i løsningen din."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"useBrowserPreferences")," gir tilgang til CSS Media Queries, og kan utvides til å hente ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features"},"alle verdiene som finnes der"),". For øyeblikket støttes ",l.createElement(t.code,null,"prefers-reduced-motion")," og ",l.createElement(t.code,null,"prefers-color-scheme"),"."),"\n",l.createElement(s))}var d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)};var m=n(72285),p=n(22756),u=n(95573),f=n(1634);const k=e=>{let{pageContext:t}=e;return l.createElement(p.p,{title:t.title})},E=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:c}=r;return l.createElement(f.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(u.M1,Object.assign({},o,{versions:r.versions})),l.createElement(u.w5,o),a,c&&l.createElement(m.l,{types:c}))};function g(e){return l.createElement(E,e,l.createElement(d,e))}},72285:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(78217),l=n(41994),a=n(87505),o=n(70079);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(i):[],a=n.props?Object.values(n.props).filter(s):[];return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),c=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),l=n.n(r),a=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(53484),l=n(3438),a=n(84490),o=n(26372),c=n.n(o),s=n(70079);const i=e=>{let{children:t,title:n,className:o,startExpanded:i=!1,onClick:d,...m}=e;const p=(0,l.M)("title"),u=(0,l.M)("content"),{0:f,1:k}=(0,s.useState)(i),[E]=(0,a.v)(f,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:c()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":f})},s.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":f,"aria-controls":u,onClick:e=>{const t=!f;k(t),d&&d(e,t)}},n,s.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})),s.createElement("div",{id:u,ref:E,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!f},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),c=n(82546),s=n(39126),i=n(66169),d=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:f,...k}=e;return r.createElement(l.i,{fullWidth:!0,...k,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===u.length&&p&&r.createElement(d.S,null,r.createElement(c.p,{colSpan:m.length},p)),u.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(c.p,{key:t,"data-th":m[t],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);