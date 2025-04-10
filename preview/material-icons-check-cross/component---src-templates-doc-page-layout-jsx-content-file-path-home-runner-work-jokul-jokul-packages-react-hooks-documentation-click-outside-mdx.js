"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2078],{29875:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return v},Head:function(){return f},default:function(){return b}});var l=n(33156),r=n(7378),a=n(2798);var o=()=>{const{0:e,1:t}=(0,r.useState)([]),{0:n,1:l}=(0,r.useState)(!1),o=(0,r.useRef)(null),i=(0,r.useRef)();i.current=e;return function(e,t){function n(n){null!=e&&e.current&&!e.current.contains(n.target)&&t()}(0,r.useEffect)((()=>(e&&document&&document.addEventListener("click",n),()=>{document&&document.removeEventListener("click",n)})))}(o,(()=>{n&&t([].concat((0,a.A)(i.current||[]),["Klikk utenfor"]))})),r.createElement("section",{ref:o},r.createElement("p",{className:"jkl-body jkl-spacing-l--bottom"},"Klikk utenfor eksempelet for å se klikket listet opp under. Klikk inne i eksempelet vil ikke listes opp"),r.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing-l--left",onClick:()=>l(!n)},n?"Skru av":"Skru på"),r.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:()=>t([])},"Nullstill liste"),0!==e.length&&r.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},e.map(((e,t)=>r.createElement("li",{className:"jkl-list__item",key:t},e)))))};function i(e){const t=Object.assign({p:"p"},(0,l.RP)(),e.components),{Ingress:n,ComponentExample:a}=t;return a||s("ComponentExample",!0),n||s("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"useClickOutside lar deg lytte på klikk utenfor et element. Det kan være\nnyttig for å lukke modaler o.l.")),"\n",r.createElement(a,{title:"useClickOutside",component:o}))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(68888),u=n(47672),p=n(52948),d=n(38776),k=n(20919);const f=e=>{let{pageContext:t}=e;return r.createElement(u.G,{title:t.title})},v=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return r.createElement(k.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(d.Ao,Object.assign({},o,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(p.A,{variant:"komponent",component:o.title}),r.createElement(d.f6,o),a,i&&r.createElement(m.N,{types:i}))};function b(e){return r.createElement(v,e,r.createElement(c,e))}},68888:function(e,t,n){n.d(t,{N:function(){return k}});var l=n(88635),r=n(24408),a=n(78022),o=n(7378),i=n(45371);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;u(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.NG,{className:"jkl-portal-code-block"},c),l.length>0&&o.createElement(d,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var l=n(77800),r=n(38316),a=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.u,null),a.createElement(o.fz,null,c[t].text)),a.createElement(l.N,{href:c[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},c={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return c}});var l=n(3698),r=n.n(l),a=n(94270),o=n(7378),i=n(79197);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.M),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return c}});var l=n(45271),r=n(86106),a=n(3698),o=n.n(a);const i=["className","density","id"],c=e=>{let{className:t,density:n,id:a}=e,c=(0,l.A)(e,i);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},c))}},24408:function(e,t,n){n.d(t,{A:function(){return u}});var l=n(45271),r=n(86106),a=n(21197),o=n(82455),i=n(3698),c=n.n(i),s=n(7378);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:i,startExpanded:u=!1,onClick:p,id:d}=e,k=(0,l.A)(e,m);const[f,v]=(0,s.useState)(u),[b]=(0,s.useState)((()=>u)),{detailsRef:E,summaryRef:j,contentRef:g,onSummaryClick:y}=(0,o.$)({onOpenChange:(e,t)=>{v(e),p&&p(t,e)},isExpanded:b});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:c()("jkl-accordion-item",i),ref:E,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:j,children:[n,(0,r.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var l=n(7378),r=n(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(r.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return E}});var l=n(7378),r=n(10494),a=n(75374),o=n(82462),i=n(60630),c=n(94624),s=n(65759),m=n(21664),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,l.forwardRef)(((e,t)=>{var n,u=e,{caption:E,columns:j,emptyTableText:g,rows:y,verticalAlign:h}=u,N=((e,t)=>{var n={};for(var l in e)f.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&k)for(var l of k(e))t.indexOf(l)<0&&v.call(e,l)&&(n[l]=e[l]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.X,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(k)for(var n of k(t))v.call(t,n)&&b(e,n,t[n]);return e})({fullWidth:!0},N),p(n,d({ref:t}))),E&&l.createElement(o.r,{srOnly:!0},E),l.createElement(c.n,null,l.createElement(m.H,null,j.map(((e,t)=>l.createElement(s.A,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.B,null,0===y.length&&g&&l.createElement(m.H,null,l.createElement(i.n,{colSpan:j.length},g)),y.map(((e,t)=>l.createElement(m.H,{key:t},e.map(((e,t)=>l.createElement(i.n,{key:t,"data-th":j[t],verticalAlign:h},e))))))))}));E.displayName="DataTable"}}]);