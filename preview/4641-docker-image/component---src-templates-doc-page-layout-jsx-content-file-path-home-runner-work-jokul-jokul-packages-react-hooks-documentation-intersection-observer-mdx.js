"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5957],{80993:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return b},Head:function(){return k},default:function(){return g}});var r=n(64717),l=n(92379);function a(e){return void 0!==e.forEach}const o=()=>"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver;n(80931);var i=()=>{const{0:e,1:t}=(0,l.useState)(!1),n=(0,l.useRef)(null);return((e,t,n,r)=>{const i=(0,l.useRef)(null);(0,l.useEffect)((()=>{let l=i.current;return o()?(l&&l.disconnect(),l=new IntersectionObserver(t,r),a(e)?e.forEach((e=>{var t;return null===(t=l)||void 0===t?void 0:t.observe(e)})):e.current&&a(e.current)?e.current.forEach((e=>{var t;return null===(t=l)||void 0===t?void 0:t.observe(e)})):e.current&&l.observe(e.current)):n&&n(),()=>{o()&&l&&l.disconnect()}}),[e,t,n,r])})(n,(e=>{t(e.some((e=>e.isIntersecting)))}),(()=>console.log("IntersectionObserver not supported")),{rootMargin:"0px",threshold:[0,1]}),l.createElement("div",{className:"jkl jkl-intersection-example","data-theme":e?"dark":"light"},l.createElement("p",{className:"jkl-body jkl-spacing-xl--all",style:{height:"100vh"}},"Scroll for å endre farge"),l.createElement("p",{className:"jkl-body jkl-spacing-xl--all",ref:n},"Scroll tilbake for å endre fargen tilbake"))};function s(e){const t=Object.assign({p:"p"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:a}=t;return a||d("ComponentExample",!0),n||d("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"useIntersectionObserver lar deg observere et eller flere elementer, og kalle\nen funksjon hver gang et av dem beveger seg inn eller ut av et område av\nskjermen.")),"\n",l.createElement(t.p,null,"Bruk useInteractionObserver når du vil utsette lasting av innhold til det nærmer seg den synlige delen av skjermen, eller bruk den til å utløse endringer på siden ut fra hvilket innhold som er synlig. I eksemplet under skifter boksen farge ettersom det nederste avsnittet beveger seg inn og ut av det synlige området."),"\n",l.createElement(a,{title:"useIntersectionObserver",component:i}))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)};function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=n(75482),u=n(96036),p=n(59001),f=n(65458),v=n(79379);const k=e=>{let{pageContext:t}=e;return l.createElement(u.p,{title:t.title})},b=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(v.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(f.M1,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(p.c,{variant:"komponent",component:o.title}),l.createElement(f.w5,o),a,i&&l.createElement(m.l,{types:i}))};function g(e){return l.createElement(b,e,l.createElement(c,e))}},75482:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(96845),l=n(41162),a=n(74797),o=n(92379),i=n(25329);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(48467),l=n(58990),a=n(92379),o=n(25329);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.U,null),a.createElement(o.nv,null,s[t].text)),a.createElement(r.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(80324),l=n.n(r),a=n(24157),o=n(92379),i=n(69215);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(99767),l=n(651),a=n(80324),o=n.n(a);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.Z)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},s))}},41162:function(e,t,n){n.d(t,{Q:function(){return m}});var r=n(99767),l=n(651),a=n(42054),o=n(95020),i=n(80324),s=n.n(i),c=n(92379);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:t,title:n,className:i,startExpanded:m=!1,onClick:u,id:p}=e,f=(0,r.Z)(e,d);const[v,k]=(0,c.useState)(m),[b]=(0,c.useState)((()=>m)),{detailsRef:g,summaryRef:E,contentRef:j,onSummaryClick:y}=(0,o.E)({onOpenChange:(e,t)=>{k(e),u&&u(t,e)},isExpanded:b});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",i),ref:g,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:E,children:[n,(0,l.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:j,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return d}});var r=n(92379),l=n(55650),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>r.createElement(l.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");d.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return g}});var r=n(92379),l=n(94207),a=n(49309),o=n(36774),i=n(64081),s=n(64483),c=n(42104),d=n(98746),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const g=(0,r.forwardRef)(((e,t)=>{var n,m=e,{caption:g,columns:E,emptyTableText:j,rows:y,verticalAlign:h}=m,w=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.i,(n=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&b(e,n,t[n]);return e})({fullWidth:!0},w),u(n,p({ref:t}))),g&&r.createElement(o.R,{srOnly:!0},g),r.createElement(s.s,null,r.createElement(d.S,null,E.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===y.length&&j&&r.createElement(d.S,null,r.createElement(i.p,{colSpan:E.length},j)),y.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":E[t],verticalAlign:h},e))))))))}));g.displayName="DataTable"},80931:function(){}}]);