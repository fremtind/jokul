"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1567],{29366:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return f}});var r=n(64717),l=n(92379);function a(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Da var februar over, og det er på tide med en ny liten oppdatering fra det som har rørt seg i Jøkul. Det har vært jobbet mye med mer og bedre dokumentasjon av universell utforming, som vi forhåpentligvis veldig snart ser resulatetene av. Gatsby, som portalen bygger på, har kommet i ny majorversjon, det bør gi oss bedre ytelse under utvikling og raskere byggtid, samt en enklere håntering av bilder. Den gir også tydeligere tilbakemeldinger om ting som gjør at serverside-rendering blir trøblete. Vi har også fått ryddet vekk gamle PRer, så vi er mer ajour enn på lenge."),"\n",l.createElement(t.h2,null,"🌱 Releaser"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Card har fått en outline når det er ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1858"},"klikkbar")),"\n"),"\n",l.createElement(t.h2,null,"🐛 Bugfixer"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"ListItem tar nå imot ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1839"},"className riktig")),"\n",l.createElement(t.li,null,"Checklist ser bedre ut i ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1828"},"IE")),"\n",l.createElement(t.li,null,"TextInput tar imot ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1826"},"defaultValue")),"\n",l.createElement(t.li,null,"Datepicker ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1805"},"setter dato på blur")),"\n"),"\n",l.createElement(t.h2,null,"📰 Oppdateringer"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Oppdatert dokumentasjon av ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1829"},"animasjon")),"\n",l.createElement(t.li,null,"Universell utforming seksjonen har fått en ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1794"},"tilbakemeldings-del")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(75482),s=n(96036),c=n(59001),m=n(65458),u=n(79379);const d=e=>{let{pageContext:t}=e;return l.createElement(s.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:s}=r;return l.createElement(u.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},i,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(c.c,{variant:"komponent",component:i.title}),l.createElement(m.w5,i),a,s&&l.createElement(o.l,{types:s}))};function f(e){return l.createElement(p,e,l.createElement(i,e))}},75482:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(96845),l=n(41162),a=n(74797),i=n(92379),o=n(25329);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(p,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(48467),l=n(58990),a=n(92379),i=n(25329);const o=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.U,null),a.createElement(i.nv,null,s[t].text)),a.createElement(r.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(80324),l=n.n(r),a=n(24157),i=n(92379),o=n(69215);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(99767),l=n(651),a=n(80324),i=n.n(a);const o=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.Z)(e,o);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:a},s))}},41162:function(e,t,n){n.d(t,{Q:function(){return u}});var r=n(99767),l=n(651),a=n(42054),i=n(95020),o=n(80324),s=n.n(o),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:o,startExpanded:u=!1,onClick:d,id:p}=e,f=(0,r.Z)(e,m);const[g,k]=(0,c.useState)(u),[v]=(0,c.useState)((()=>u)),{detailsRef:b,summaryRef:h,contentRef:E,onSummaryClick:j}=(0,i.E)({onOpenChange:(e,t)=>{k(e),d&&d(t,e)},isExpanded:v});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",o),ref:b,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:h,children:[n,(0,l.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var r=n(92379),l=n(55650),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(l.J,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return b}});var r=n(92379),l=n(94207),a=n(49309),i=n(36774),o=n(64081),s=n(64483),c=n(42104),m=n(98746),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,u=e,{caption:b,columns:h,emptyTableText:E,rows:j,verticalAlign:y}=u,_=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.i,(n=((e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},_),d(n,p({ref:t}))),b&&r.createElement(i.R,{srOnly:!0},b),r.createElement(s.s,null,r.createElement(m.S,null,h.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===j.length&&E&&r.createElement(m.S,null,r.createElement(o.p,{colSpan:h.length},E)),j.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":h[t],verticalAlign:y},e))))))))}));b.displayName="DataTable"}}]);