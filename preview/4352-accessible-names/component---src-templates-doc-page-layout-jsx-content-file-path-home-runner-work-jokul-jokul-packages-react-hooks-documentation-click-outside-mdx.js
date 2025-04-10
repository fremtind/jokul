"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5976],{45051:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return f},Head:function(){return k},default:function(){return v}});var l=n(47160),a=n(70079),r=n(15089);var o=()=>{const{0:e,1:t}=(0,a.useState)([]),{0:n,1:l}=(0,a.useState)(!1),o=(0,a.useRef)(null),i=(0,a.useRef)();i.current=e;return function(e,t){function n(n){null!=e&&e.current&&!e.current.contains(n.target)&&t()}(0,a.useEffect)((()=>(e&&document&&document.addEventListener("click",n),()=>{document&&document.removeEventListener("click",n)})))}(o,(()=>{n&&t([].concat((0,r.Z)(i.current||[]),["Klikk utenfor"]))})),a.createElement("section",{ref:o},a.createElement("p",{className:"jkl-body jkl-spacing-l--bottom"},"Klikk utenfor eksempelet for å se klikket listet opp under. Klikk inne i eksempelet vil ikke listes opp"),a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing-l--left",onClick:()=>l(!n)},n?"Skru av":"Skru på"),a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:()=>t([])},"Nullstill liste"),0!==e.length&&a.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},e.map(((e,t)=>a.createElement("li",{className:"jkl-list__item",key:t},e)))))};function i(e){const t=Object.assign({p:"p"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:r}=t;return r||s("ComponentExample",!0),n||s("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"useClickOutside lar deg lytte på klikk utenfor et element. Det kan være\nnyttig for å lukke modaler o.l.")),"\n",a.createElement(r,{title:"useClickOutside",component:o}))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=n(72285),m=n(22756),u=n(95573),p=n(1634);const k=e=>{let{pageContext:t}=e;return a.createElement(m.p,{title:t.title})},f=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:o}=n.page,{types:i}=l;return a.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(u.M1,Object.assign({},o,{versions:l.versions})),a.createElement(u.w5,o),r,i&&a.createElement(d.l,{types:i}))};function v(e){return a.createElement(f,e,a.createElement(c,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(58820),a=n(63571),r=n(87505),o=n(70079),i=n(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,o=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(d):[],r=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,l,a,r,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),l.length>0&&o.createElement(p,{props:l}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var l=n(26372),a=n.n(l),r=n(49597),o=n(70079),i=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||c?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(35250),a=n(26372),r=n.n(a);const o=e=>{let{className:t,density:n,id:a,...o}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:a,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return s}});var l=n(35250),a=n(68998),r=n(1386),o=n(26372),i=n.n(o),c=n(70079);const s=e=>{let{children:t,title:n,className:o,startExpanded:s=!1,onClick:d,id:m,...u}=e;const[p,k]=(0,c.useState)(s),[f]=(0,c.useState)((()=>s)),{detailsRef:v,summaryRef:E,contentRef:j,onSummaryClick:g}=(0,r.E)({onOpenChange:(e,t)=>{k(e),d&&d(t,e)},isExpanded:f});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:v,id:m,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:E,children:[n,(0,l.jsx)(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:j,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),a=n(41699),r=n(65174),o=n(6914),i=n(82546),c=n(39126),s=n(66169),d=n(94509);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:k,...f}=e;return l.createElement(a.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(c.s,null,l.createElement(d.S,null,m.map(((e,t)=>l.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===p.length&&u&&l.createElement(d.S,null,l.createElement(i.p,{colSpan:m.length},u)),p.map(((e,t)=>l.createElement(d.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);