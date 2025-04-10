"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5823],{29987:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return f}});var a=n(33156),r=n(7378);function l(e){const t=Object.assign({h2:"h2",p:"p"},(0,a.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Denne brukes til å sjekke om et bilde har blitt lastet og returnere bildet eller et lavoppløst bilde isteden."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},i=n(68888),c=n(47672),s=n(52948),m=n(38776),d=n(20919);const p=e=>{let{pageContext:t}=e;return r.createElement(c.G,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:c}=a;return r.createElement(d.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.Ao,Object.assign({},o,{versions:a.versions})),t.pathname.includes("komponenter")&&r.createElement(s.A,{variant:"komponent",component:o.title}),r.createElement(m.f6,o),l,c&&r.createElement(i.N,{types:c}))};function f(e){return r.createElement(u,e,r.createElement(o,e))}},68888:function(e,t,n){n.d(t,{N:function(){return f}});var a=n(88635),r=n(24408),l=n(78022),o=n(7378),i=n(45371);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.NG,{className:"jkl-portal-code-block"},c),a.length>0&&o.createElement(u,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var a=n(77800),r=n(38316),l=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(r.u,null),l.createElement(o.fz,null,c[t].text)),l.createElement(a.N,{href:c[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},c={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return c}});var a=n(3698),r=n.n(a),l=n(94270),o=n(7378),i=n(79197);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.M),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.P.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return c}});var a=n(45271),r=n(86106),l=n(3698),o=n.n(l);const i=["className","density","id"],c=e=>{let{className:t,density:n,id:l}=e,c=(0,a.A)(e,i);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:l},c))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var a=n(45271),r=n(86106),l=n(21197),o=n(82455),i=n(3698),c=n.n(i),s=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:p,id:u}=e,f=(0,a.A)(e,m);const[v,b]=(0,s.useState)(d),[k]=(0,s.useState)((()=>d)),{detailsRef:E,summaryRef:g,contentRef:j,onSummaryClick:y}=(0,o.$)({onOpenChange:(e,t)=>{b(e),p&&p(t,e)},isExpanded:k});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:c()("jkl-accordion-item",i),ref:E,id:u,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:g,children:[n,(0,r.jsx)(l.l,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:j,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var a=n(7378),r=n(19767),l=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>a.createElement(r.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return E}});var a=n(7378),r=n(10494),l=n(75374),o=n(82462),i=n(60630),c=n(94624),s=n(65759),m=n(21664),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,a.forwardRef)(((e,t)=>{var n,d=e,{caption:E,columns:g,emptyTableText:j,rows:y,verticalAlign:h}=d,_=((e,t)=>{var n={};for(var a in e)v.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&f)for(var a of f(e))t.indexOf(a)<0&&b.call(e,a)&&(n[a]=e[a]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return a.createElement(r.X,(n=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&k(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&k(e,n,t[n]);return e})({fullWidth:!0},_),p(n,u({ref:t}))),E&&a.createElement(o.r,{srOnly:!0},E),a.createElement(c.n,null,a.createElement(m.H,null,g.map(((e,t)=>a.createElement(s.A,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.B,null,0===y.length&&j&&a.createElement(m.H,null,a.createElement(i.n,{colSpan:g.length},j)),y.map(((e,t)=>a.createElement(m.H,{key:t},e.map(((e,t)=>a.createElement(i.n,{key:t,"data-th":g[t],verticalAlign:h},e))))))))}));E.displayName="DataTable"}}]);