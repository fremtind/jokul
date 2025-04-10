"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3373],{4720:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return v},default:function(){return b}});var a=n(47160),r=n(70079),l=n(21821);const o=r.useId,c={generateSuffix:!0},i=void 0!==o?function(e,t){void 0===t&&(t=c);const n=o();let a=e;e&&t.generateSuffix&&(a=e+"-"+n);const[l]=r.useState(a||n);return l}:function(e,t){void 0===t&&(t=c);const n=(0,l.x0)(8);let a=e;e&&t.generateSuffix&&(a=e+"-"+n);const[o]=r.useState(a||n);return o},s=()=>{const e=i("jkl-useid-example"),{0:t,1:n}=(0,r.useState)(0);return r.createElement("div",null,r.createElement("p",{className:"jkl-body jkl-spacing-l--bottom",id:e},"Denne paragrafen har id følgende id: ",r.createElement("strong",null,e),". Selv om elementet rendrer på nytt, vil ikke id endres.",r.createElement("br",null),r.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing-m--top",onClick:()=>n(t+1)},"Trigger en re-render")))};function d(e){const t=Object.assign({p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||p("ComponentExample",!0),n||p("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"useId lager en unik ID som du kan bruke på elementer. Spesielt er dette nyttig for å for eksempel binde sammen id og\nlabler ol. når man jobber med tilgjengelighet:")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},'const elId = useId("jkl-useid-example"); // jkl-useid-example-V1ifIVj1\n\nreturn (\n    <>\n        <button aria-controls={elId}>Knapp</button>\n        <div id={elId}>{children}</div>\n    </>\n);\n')),"\n",r.createElement(l,{component:s}))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(d,e)):d(e)};function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(72285),f=n(22756),k=n(95573),E=n(1634);const v=e=>{let{pageContext:t}=e;return r.createElement(f.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:c}=a;return r.createElement(E.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(k.M1,Object.assign({},o,{versions:a.versions})),r.createElement(k.w5,o),l,c&&r.createElement(u.l,{types:c}))};function b(e){return r.createElement(g,e,r.createElement(m,e))}},72285:function(e,t,n){n.d(t,{l:function(){return u}});var a=n(78217),r=n(41994),l=n(87505),o=n(70079);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},m=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:m,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(s):[],l=n.props?Object.values(n.props).filter(i):[];return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},a.length>0&&o.createElement(p,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),c=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(c.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||i?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(26372),r=n.n(a),l=n(70079);const o=e=>{let{className:t,density:n,...a}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...a})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var a=n(53484),r=n(3438),l=n(84490),o=n(26372),c=n.n(o),i=n(70079);const s=e=>{let{children:t,title:n,className:o,startExpanded:s=!1,onClick:d,...m}=e;const p=(0,r.M)("title"),u=(0,r.M)("content"),{0:f,1:k}=(0,i.useState)(s),[E]=(0,l.v)(f,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...m,className:c()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":f})},i.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":f,"aria-controls":u,onClick:e=>{const t=!f;k(t),d&&d(e,t)}},n,i.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})),i.createElement("div",{id:u,ref:E,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!f},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),c=n(82546),i=n(39126),s=n(66169),d=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:f,...k}=e;return a.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(i.s,null,a.createElement(d.S,null,m.map(((e,t)=>a.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===u.length&&p&&a.createElement(d.S,null,a.createElement(c.p,{colSpan:m.length},p)),u.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(c.p,{key:t,"data-th":m[t],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);