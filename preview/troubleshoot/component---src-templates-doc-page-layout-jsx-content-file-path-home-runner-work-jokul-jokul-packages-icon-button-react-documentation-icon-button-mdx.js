"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1510],{56777:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return b},Head:function(){return h},default:function(){return j}});var r=n(47160),a=n(70079),l=n(83722),o=n(68805);const i={};function c(){console.log("Hallo")}const s=()=>a.createElement("p",{className:"jkl-body"},a.createElement(o.h,{onClick:c,title:"Søk"},a.createElement(l.W,null))),d=()=>'\n<IconButton onClick={onClick} title="Søk">\n    <SearchIcon />\n</IconButton>\n';function m(e){const t=Object.assign({p:"p",h2:"h2",code:"code",a:"a"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||u("ComponentExample",!0),n||u("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Ikonknapper er klikkbare varianter av ikoner for vanlige handlinger.")),"\n",a.createElement(l,{title:"IconButton",component:s,knobs:i,codeExample:d}),"\n",a.createElement(t.h2,null,"Tilgjengelighet"),"\n",a.createElement(t.p,null,"En ikonknapp har ingen synlig tekst. Det er viktig at en bruker kan forstå hva knappen er til ut i fra konteksten."),"\n",a.createElement(t.p,null,"Det er et krav at knappen har en beskrivende hjelpetekst for brukere av skjermleser, enten ",a.createElement(t.code,null,"title")," eller ",a.createElement(t.code,null,"aria-label"),"."),"\n",a.createElement(t.h2,null,"Hvordan bruker vi ikonknapper?"),"\n",a.createElement(t.p,null,"Se ",a.createElement(t.a,{href:"/preview/troubleshoot/profil/ikoner"},"profildokumentasjonen")," for mer om hvordan vi bruker ikoner generelt."),"\n",a.createElement(t.p,null,"Vi bruker sjeldent ikoner. En ikonknapp bør derfor helst bare brukes i sammenhenger hvor for eksempel en ",a.createElement(t.a,{href:"/preview/troubleshoot/komponenter/buttons"},"TertiaryButton")," ikke fungerer."))}var p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(m,e)):m(e)};function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var k=n(72285),f=n(22756),v=n(95573),E=n(1634);const h=e=>{let{pageContext:t}=e;return a.createElement(f.p,{title:t.title})},b=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:i}=r;return a.createElement(E.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(v.M1,Object.assign({},o,{versions:r.versions})),a.createElement(v.w5,o),l,i&&a.createElement(k.l,{types:i}))};function j(e){return a.createElement(b,e,a.createElement(p,e))}},68805:function(e,t,n){n.d(t,{h:function(){return o}});var r=n(26372),a=n.n(r),l=n(70079);const o=(0,l.forwardRef)(((e,t)=>{const{className:n,children:r,density:o,...i}=e;return l.createElement("button",Object.assign({ref:t,type:"button",className:a()("jkl-icon-button",n),"data-testid":"jkl-icon-button","data-density":o},i),r)}));o.displayName="IconButton"},87260:function(e,t,n){n.d(t,{J:function(){return o}});var r=n(26372),a=n.n(r),l=n(70079);const o=l.forwardRef((function(e,t){const{bold:n,children:r,className:o,filled:i,variant:c,...s}=e;return l.createElement("span",Object.assign({"aria-hidden":!0,ref:t,className:a()("jkl-icon",o,{"jkl-icon--filled":i,"jkl-icon--bold":n,["jkl-icon--"+c]:!!c})},s),r)}))},83722:function(e,t,n){n.d(t,{W:function(){return l}});var r=n(70079),a=n(87260);const l=e=>r.createElement(a.J,e,"");l.displayName="SearchIcon"},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(58820),a=n(63571),l=n(87505),o=n(70079),i=n(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),r.length>0&&o.createElement(u,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(26372),a=n.n(r),l=n(49597),o=n(70079),i=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||c?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(35250),a=n(26372),l=n.n(a);const o=e=>{let{className:t,density:n,id:a,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:a,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(35250),a=n(68998),l=n(1386),o=n(26372),i=n.n(o),c=n(70079);const s=e=>{let{children:t,title:n,className:o,startExpanded:s=!1,onClick:d,id:m,...p}=e;const[u,k]=(0,c.useState)(s),[f]=(0,c.useState)((()=>s)),{detailsRef:v,summaryRef:E,contentRef:h,onSummaryClick:b}=(0,l.E)({onOpenChange:(e,t)=>{k(e),d&&d(t,e)},isExpanded:f});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",o),ref:v,id:m,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:E,children:[n,(0,r.jsx)(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),a=n(41699),l=n(65174),o=n(6914),i=n(82546),c=n(39126),s=n(66169),d=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:k,...f}=e;return r.createElement(a.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(c.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===u.length&&p&&r.createElement(d.S,null,r.createElement(i.p,{colSpan:m.length},p)),u.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);