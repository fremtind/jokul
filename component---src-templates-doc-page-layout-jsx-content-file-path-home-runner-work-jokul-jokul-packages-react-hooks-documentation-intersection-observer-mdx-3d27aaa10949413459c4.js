"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5957],{51010:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return f},default:function(){return g}});var r=n(75615),a=n(70079);function l(e){return void 0!==e.forEach}const o=()=>"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver;n(70707);var c=()=>{const{0:e,1:t}=(0,a.useState)(!1),n=(0,a.useRef)(null);return((e,t,n,r)=>{const c=(0,a.useRef)(null);(0,a.useEffect)((()=>{let a=c.current;return o()?(a&&a.disconnect(),a=new IntersectionObserver(t,r),l(e)?e.forEach((e=>{var t;return null===(t=a)||void 0===t?void 0:t.observe(e)})):e.current&&l(e.current)?e.current.forEach((e=>{var t;return null===(t=a)||void 0===t?void 0:t.observe(e)})):e.current&&a.observe(e.current)):n(),()=>{o()&&a&&a.disconnect()}}),[e,t,n,r])})(n,(e=>{t(e.some((e=>e.isIntersecting)))}),(()=>console.log("IntersectionObserver not supported")),{rootMargin:"0px",threshold:[0,1]}),a.createElement("div",{className:"jkl jkl-intersection-example","data-theme":e?"dark":"light"},a.createElement("p",{className:"jkl-body jkl-spacing-xl--all",style:{height:"100vh"}},"Scroll for å endre farge"),a.createElement("p",{className:"jkl-body jkl-spacing-xl--all",ref:n},"Scroll tilbake for å endre fargen tilbake"))};function s(e){const t=Object.assign({p:"p"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||d("ComponentExample",!0),n||d("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"useIntersectionObserver lar deg observere et eller flere elementer, og kalle en funksjon hver gang et av dem beveger\nseg inn eller ut av et område av skjermen.")),"\n",a.createElement(t.p,null,"Bruk useInteractionObserver når du vil utsette lasting av innhold til det nærmer seg den synlige delen av skjermen, eller bruk den til å utløse endringer på siden ut fra hvilket innhold som er synlig. I eksemplet under skifter boksen farge ettersom det nederste avsnittet beveger seg inn og ut av det synlige området."),"\n",a.createElement(l,{title:"useIntersectionObserver",component:c}))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)};function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(71111),p=n(16569),u=n(72892),v=n(479);const f=e=>{let{pageContext:t}=e;return a.createElement(p.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:c}=r;return a.createElement(v.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(u.M1,Object.assign({},o,{versions:r.versions})),a.createElement(u.w5,o),l,c&&a.createElement(m.l,{types:c}))};function g(e){return a.createElement(k,e,a.createElement(i,e))}},71111:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(57986),a=n(80252),l=n(50601),o=n(70079);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(i):[],l=n.props?Object.values(n.props).filter(s):[];return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&o.createElement(p,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),a=n.n(r),l=n(79363),o=n(70079),c=n(56024);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),a=n.n(r),l=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},80252:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(14092),a=n(89292),l=n(26372),o=n.n(l),c=n(70079);const s=e=>{let{expanded:t=!1,className:n}=e;return c.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},c.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),c.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},i=e=>{let{children:t,title:n,className:l,startExpanded:i=!1,onClick:d,...m}=e;const p=(0,r.M)("title"),u=(0,r.M)("content"),{0:v,1:f}=(0,c.useState)(i),[k]=(0,a.v)(v,{easing:"exit",timing:"expressive"});return c.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:o()("jkl-accordion-item",l,{"jkl-accordion-item--expanded":v})},c.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":v,"aria-controls":u,onClick:e=>{const t=!v;f(t),d&&d(e,t)}},n,c.createElement(s,{expanded:v})),c.createElement("div",{id:u,ref:k,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!v},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),a=n(64327),l=n(1807),o=n(11348),c=n(12675),s=n(14687),i=n(61211),d=n(39666);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:v,...f}=e;return r.createElement(a.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===u.length&&p&&r.createElement(d.S,null,r.createElement(c.p,{colSpan:m.length},p)),u.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(c.p,{key:t,"data-th":m[t],verticalAlign:v},e))))))))}));m.displayName="DataTable"},70707:function(){}}]);