"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3373],{4720:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return E},default:function(){return j}});var a=n(47160),r=n(70079),l=n(21821);const o=r.useId,i={generateSuffix:!0},c=void 0!==o?function(e,t){void 0===t&&(t=i);const n=o();let a=e;e&&t.generateSuffix&&(a=e+"-"+n);const[l]=r.useState(a||n);return l}:function(e,t){void 0===t&&(t=i);const n=(0,l.x0)(8);let a=e;e&&t.generateSuffix&&(a=e+"-"+n);const[o]=r.useState(a||n);return o},s=()=>{const e=c("jkl-useid-example"),{0:t,1:n}=(0,r.useState)(0);return r.createElement("div",null,r.createElement("p",{className:"jkl-body jkl-spacing-l--bottom",id:e},"Denne paragrafen har id følgende id: ",r.createElement("strong",null,e),". Selv om elementet rendrer på nytt, vil ikke id endres.",r.createElement("br",null),r.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing-m--top",onClick:()=>n(t+1)},"Trigger en re-render")))};function d(e){const t=Object.assign({p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||p("ComponentExample",!0),n||p("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"useId lager en unik ID som du kan bruke på elementer. Spesielt er dette nyttig for å for eksempel binde sammen id og\nlabler ol. når man jobber med tilgjengelighet:")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-jsx"},'const elId = useId("jkl-useid-example"); // jkl-useid-example-V1ifIVj1\n\nreturn (\n    <>\n        <button aria-controls={elId}>Knapp</button>\n        <div id={elId}>{children}</div>\n    </>\n);\n')),"\n",r.createElement(l,{component:s}))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(d,e)):d(e)};function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(72285),f=n(22756),v=n(95573),k=n(1634);const E=e=>{let{pageContext:t}=e;return r.createElement(f.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:i}=a;return r.createElement(k.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(v.M1,Object.assign({},o,{versions:a.versions})),r.createElement(v.w5,o),l,i&&r.createElement(u.l,{types:i}))};function j(e){return r.createElement(g,e,r.createElement(m,e))}},72285:function(e,t,n){n.d(t,{l:function(){return f}});var a=n(58820),r=n(63571),l=n(87505),o=n(70079),i=n(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),a.length>0&&o.createElement(u,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),i=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(35250),r=n(26372),l=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return s}});var a=n(35250),r=n(68998),l=n(1386),o=n(26372),i=n.n(o),c=n(70079);const s=e=>{let{children:t,title:n,className:o,startExpanded:s=!1,onClick:d,id:m,...p}=e;const[u,f]=(0,c.useState)(s),[v]=(0,c.useState)((()=>s)),{detailsRef:k,summaryRef:E,contentRef:g,onSummaryClick:j}=(0,l.E)({onOpenChange:(e,t)=>{f(e),d&&d(t,e)},isExpanded:v});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",o),ref:k,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:E,children:[n,(0,a.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),i=n(82546),c=n(39126),s=n(66169),d=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:f,...v}=e;return a.createElement(r.i,{fullWidth:!0,...v,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(c.s,null,a.createElement(d.S,null,m.map(((e,t)=>a.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===u.length&&p&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:m.length},p)),u.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);