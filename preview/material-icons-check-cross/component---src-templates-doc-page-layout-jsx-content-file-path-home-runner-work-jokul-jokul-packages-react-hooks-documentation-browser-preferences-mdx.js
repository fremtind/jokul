"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9521],{75995:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return v},Head:function(){return g},default:function(){return b}});var r=n(33156),l=n(7378),a=n(43092);const o=(0,l.createContext)({prefersReducedMotion:!1,prefersColorScheme:"light",forcedColors:!1}),s=()=>{const{prefersReducedMotion:e,prefersColorScheme:t,forcedColors:n}=(0,l.useContext)(o);return l.createElement("section",{className:"hooks-example key-listener-example jkl-spacing-2xl--bottom"},l.createElement("h2",{className:"jkl-h2 jkl-spacing-xl--bottom"},"Preferanser fra nettleseren din"),l.createElement("dl",null,l.createElement("dt",null,"Redusert bevegelse"),l.createElement("dd",null,e?"Ja":"Ingen preferanse"),l.createElement("dt",null,"Fargetema"),l.createElement("dd",null,"light"===t?"Lyst":"Mørkt"),l.createElement("dt",null,"Høykontrast"),l.createElement("dd",null,n?"Ja":"Nei")))};var i=()=>{const{prefersColorScheme:e,prefersReducedMotion:t,forcedColors:n}=(0,a.e)();return l.createElement(o.Provider,{value:{prefersReducedMotion:t,prefersColorScheme:e,forcedColors:n}},l.createElement(s,null))};function c(e){const t=Object.assign({p:"p",h2:"h2",code:"code",a:"a"},(0,r.RP)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Med useBrowserPreferences får du tilgang til mediepreferanser satt i\nbrukerens nettleser eller operativsystem, slik som preferanse for redusert\nbevegelse eller mørkt fargetema. Dermed kan du enklere tilpasse løsningen\ndin etter brukerens behov og ønsker.")),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"Denne hooken baserer seg på en eventListener, og den bør derfor implementeres så høyt opp i applikasjonen din som mulig for å unngå å lage for mange listeners. Bruk gjerne en React Context heller enn å bruke denne hooken flere steder i løsningen din."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"useBrowserPreferences")," gir tilgang til CSS Media Queries, og kan utvides til å hente ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features"},"alle verdiene som finnes der"),". For øyeblikket støttes ",l.createElement(t.code,null,"prefers-reduced-motion")," og ",l.createElement(t.code,null,"prefers-color-scheme"),"."),"\n",l.createElement(i))}var d=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)};var m=n(68888),p=n(47672),u=n(52948),f=n(38776),k=n(20919);const g=e=>{let{pageContext:t}=e;return l.createElement(p.G,{title:t.title})},v=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(k.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(f.Ao,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(u.A,{variant:"komponent",component:o.title}),l.createElement(f.f6,o),a,s&&l.createElement(m.N,{types:s}))};function b(e){return l.createElement(v,e,l.createElement(d,e))}},68888:function(e,t,n){n.d(t,{N:function(){return f}});var r=n(88635),l=n(24408),a=n(78022),o=n(7378),s=n(45371);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.NG,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(u,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(77800),l=n(38316),a=n(7378),o=n(45371);const s=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(o.fz,null,i[t].text)),a.createElement(r.N,{href:i[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},i={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return i}});var r=n(3698),l=n.n(r),a=n(94270),o=n(7378),s=n(79197);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.M),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return i}});var r=n(45271),l=n(86106),a=n(3698),o=n.n(a);const s=["className","density","id"],i=e=>{let{className:t,density:n,id:a}=e,i=(0,r.A)(e,s);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},i))}},24408:function(e,t,n){n.d(t,{A:function(){return m}});var r=n(45271),l=n(86106),a=n(21197),o=n(82455),s=n(3698),i=n.n(s),c=n(7378);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:t,title:n,className:s,startExpanded:m=!1,onClick:p,id:u}=e,f=(0,r.A)(e,d);const[k,g]=(0,c.useState)(m),[v]=(0,c.useState)((()=>m)),{detailsRef:b,summaryRef:E,contentRef:h,onSummaryClick:y}=(0,o.$)({onOpenChange:(e,t)=>{g(e),p&&p(t,e)},isExpanded:v});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:i()("jkl-accordion-item",s),ref:b,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:E,children:[n,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return d}});var r=n(7378),l=n(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>r.createElement(l.I,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&c(e,n,t[n]);return e})({},e),"");d.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return b}});var r=n(7378),l=n(10494),a=n(75374),o=n(82462),s=n(60630),i=n(94624),c=n(65759),d=n(21664),m=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,m=e,{caption:b,columns:E,emptyTableText:h,rows:y,verticalAlign:j}=m,N=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.X,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))g.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},N),p(n,u({ref:t}))),b&&r.createElement(o.r,{srOnly:!0},b),r.createElement(i.n,null,r.createElement(d.H,null,E.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.B,null,0===y.length&&h&&r.createElement(d.H,null,r.createElement(s.n,{colSpan:E.length},h)),y.map(((e,t)=>r.createElement(d.H,{key:t},e.map(((e,t)=>r.createElement(s.n,{key:t,"data-th":E[t],verticalAlign:j},e))))))))}));b.displayName="DataTable"}}]);