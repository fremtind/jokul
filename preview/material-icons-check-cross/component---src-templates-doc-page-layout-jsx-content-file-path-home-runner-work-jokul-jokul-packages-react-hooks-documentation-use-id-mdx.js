"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5213],{56947:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return E},Head:function(){return g},default:function(){return j}});var r=n(33156),a=n(7378),l=n(24224);const o=a.useId,i={generateSuffix:!0},c=void 0!==o?function(e,t){void 0===t&&(t=i);const n=o();let r=e;e&&t.generateSuffix&&(r=e+"-"+n);const[l]=a.useState(r||n);return l}:function(e,t){void 0===t&&(t=i);const n=(0,l.Ak)(8);let r=e;e&&t.generateSuffix&&(r=e+"-"+n);const[o]=a.useState(r||n);return o},s=()=>{const e=c("jkl-useid-example"),{0:t,1:n}=(0,a.useState)(0);return a.createElement("div",null,a.createElement("p",{className:"jkl-body jkl-spacing-l--bottom",id:e},"Denne paragrafen har id følgende id: ",a.createElement("strong",null,e),". Selv om elementet rendrer på nytt, vil ikke id endres.",a.createElement("br",null),a.createElement("button",{className:"jkl-button jkl-button--primary jkl-spacing-m--top",onClick:()=>n(t+1)},"Trigger en re-render")))};function m(e){const t=Object.assign({p:"p",pre:"pre",code:"code"},(0,r.RP)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||p("ComponentExample",!0),n||p("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"useId lager en unik ID som du kan bruke på elementer. Spesielt er dette\nnyttig for å for eksempel binde sammen id og labler ol. når man jobber med\ntilgjengelighet:")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-jsx"},'const elId = useId("jkl-useid-example"); // jkl-useid-example-V1ifIVj1\n\nreturn (\n    <>\n        <button aria-controls={elId}>Knapp</button>\n        <div id={elId}>{children}</div>\n    </>\n);\n')),"\n",a.createElement(l,{component:s}))}var d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(m,e)):m(e)};function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var u=n(68888),f=n(47672),k=n(52948),v=n(38776),b=n(20919);const g=e=>{let{pageContext:t}=e;return a.createElement(f.G,{title:t.title})},E=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:i}=r;return a.createElement(b.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(v.Ao,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&a.createElement(k.A,{variant:"komponent",component:o.title}),a.createElement(v.f6,o),l,i&&a.createElement(u.N,{types:i}))};function j(e){return a.createElement(E,e,a.createElement(d,e))}},68888:function(e,t,n){n.d(t,{N:function(){return f}});var r=n(88635),a=n(24408),l=n(78022),o=n(7378),i=n(45371);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.NG,{className:"jkl-portal-code-block"},c),r.length>0&&o.createElement(u,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),a=n(38316),l=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.u,null),l.createElement(o.fz,null,c[t].text)),l.createElement(r.N,{href:c[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},c={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return c}});var r=n(3698),a=n.n(r),l=n(94270),o=n(7378),i=n(79197);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.M),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||c?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return c}});var r=n(45271),a=n(86106),l=n(3698),o=n.n(l);const i=["className","density","id"],c=e=>{let{className:t,density:n,id:l}=e,c=(0,r.A)(e,i);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:l},c))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),a=n(86106),l=n(21197),o=n(82455),i=n(3698),c=n.n(i),s=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:p,id:u}=e,f=(0,r.A)(e,m);const[k,v]=(0,s.useState)(d),[b]=(0,s.useState)((()=>d)),{detailsRef:g,summaryRef:E,contentRef:j,onSummaryClick:y}=(0,o.$)({onOpenChange:(e,t)=>{v(e),p&&p(t,e)},isExpanded:b});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:c()("jkl-accordion-item",i),ref:g,id:u,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:E,children:[n,(0,a.jsx)(l.l,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:j,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),a=n(19767),l=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(a.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return g}});var r=n(7378),a=n(10494),l=n(75374),o=n(82462),i=n(60630),c=n(94624),s=n(65759),m=n(21664),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const g=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:g,columns:E,emptyTableText:j,rows:y,verticalAlign:h}=d,N=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.X,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&b(e,n,t[n]);return e})({fullWidth:!0},N),p(n,u({ref:t}))),g&&r.createElement(o.r,{srOnly:!0},g),r.createElement(c.n,null,r.createElement(m.H,null,E.map(((e,t)=>r.createElement(s.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.B,null,0===y.length&&j&&r.createElement(m.H,null,r.createElement(i.n,{colSpan:E.length},j)),y.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":E[t],verticalAlign:h},e))))))))}));g.displayName="DataTable"}}]);