"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6497],{58451:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return p},default:function(){return v}});var l=n(75615),a=n(70079);var r=()=>{const{0:e,1:t}=(0,a.useState)(!1),{0:n,1:l}=(0,a.useState)(0),r=(0,a.useRef)(null),[o]=(e=>{let{ref:t,timeout:n=0,autoScroll:l=!0,options:r={behavior:"smooth"}}=e;const o=()=>{null!=t&&t.current&&t.current.scrollIntoView(r)};return(0,a.useEffect)((()=>{if(!l)return;const e=setTimeout(o,n);return()=>clearTimeout(e)}),[t,n,l]),[o]})({ref:r,timeout:n,autoScroll:e});return a.createElement("section",{style:{height:"100vh",position:"relative"}},a.createElement("div",{style:{display:"flex",flexDirection:"column"}},a.createElement("div",null,a.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing-xl--bottom",onClick:()=>t(!e)},e?"Skru av":"Skru på"),a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing-l--left",onClick:o},"Scroll")),a.createElement("label",{htmlFor:"autoscroll-input",className:"jkl-label--medium"},"Sett ventetid før autoscroll"),a.createElement("input",{id:"autoscroll-input",className:"jkl-text-input__input",style:{width:"10ch"},value:n,type:"number",onChange:e=>{t(!1),""!==e.currentTarget.value&&l(parseInt(e.currentTarget.value,10))}})),a.createElement("div",{ref:r,style:{position:"absolute",bottom:0}},"AutoScroll here"))};function o(e){const t=Object.assign({p:"p"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:o}=t;return o||i("ComponentExample",!0),n||i("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"useScrollIntoView lar deg automatisk scrolle et element til det blir synlig. Hooken returner scrollfunksjonen om du\nvil trigge den manuelt, og det er mulig å skru av automatisk scrolling om du vil ha full manuell kontroll. Du har\nogså tilgang på alle options tilgjengelig for scrollIntoView")),"\n",a.createElement(o,{title:"useScrollIntoView",component:r}))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)};function i(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=n(71111),m=n(16569),u=n(72892),d=n(479);const p=e=>{let{pageContext:t}=e;return a.createElement(m.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:o}=n.page,{types:c}=l;return a.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(u.M1,Object.assign({},o,{versions:l.versions})),a.createElement(u.w5,o),r,c&&a.createElement(s.l,{types:c}))};function v(e){return a.createElement(k,e,a.createElement(c,e))}},71111:function(e,t,n){n.d(t,{l:function(){return p}});var l=n(57986),a=n(80252),r=n(50601),o=n(70079);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,o=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var l},p=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(s):[],r=n.props?Object.values(n.props).filter(i):[];return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&o.createElement(d,{props:l}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:r})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return i}});var l=n(26372),a=n.n(l),r=n(79363),o=n(70079),c=n(56024);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(c.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),a=n.n(l),r=n(70079);const o=e=>{let{className:t,density:n,...l}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...l})}},80252:function(e,t,n){n.d(t,{Q:function(){return s}});var l=n(14092),a=n(89292),r=n(26372),o=n.n(r),c=n(70079);const i=e=>{let{expanded:t=!1,className:n}=e;return c.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},c.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),c.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},s=e=>{let{children:t,title:n,className:r,startExpanded:s=!1,onClick:m,...u}=e;const d=(0,l.M)("title"),p=(0,l.M)("content"),{0:k,1:v}=(0,c.useState)(s),[f]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return c.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",r,{"jkl-accordion-item--expanded":k})},c.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;v(t),m&&m(e,t)}},n,c.createElement(i,{expanded:k})),c.createElement("div",{id:p,ref:f,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),a=n(64327),r=n(1807),o=n(11348),c=n(12675),i=n(14687),s=n(61211),m=n(39666);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...v}=e;return l.createElement(a.i,{fullWidth:!0,...v,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(i.s,null,l.createElement(m.S,null,u.map(((e,t)=>l.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===p.length&&d&&l.createElement(m.S,null,l.createElement(c.p,{colSpan:u.length},d)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(c.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);