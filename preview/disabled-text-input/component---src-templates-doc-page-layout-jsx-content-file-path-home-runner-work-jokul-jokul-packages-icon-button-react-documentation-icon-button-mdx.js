"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1510],{33097:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return h},Head:function(){return g},default:function(){return j}});var r=n(64717),a=n(92379),l=n(49095),o=n(94726);const i={};function c(){console.log("Hallo")}const s=()=>a.createElement("p",{className:"jkl-body"},a.createElement(o.h,{onClick:c,title:"Søk"},a.createElement(l.W,null))),m=()=>'\n<IconButton onClick={onClick} title="Søk">\n    <SearchIcon />\n</IconButton>\n';function d(e){const t=Object.assign({p:"p",h2:"h2",code:"code",a:"a"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||u("ComponentExample",!0),n||u("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Ikonknapper er klikkbare varianter av ikoner for vanlige handlinger.")),"\n",a.createElement(l,{title:"IconButton",component:s,knobs:i,codeExample:m}),"\n",a.createElement(t.h2,null,"Tilgjengelighet"),"\n",a.createElement(t.p,null,"En ikonknapp har ingen synlig tekst. Det er viktig at en bruker kan forstå hva knappen er til ut i fra konteksten."),"\n",a.createElement(t.p,null,"Det er et krav at knappen har en beskrivende hjelpetekst for brukere av skjermleser, enten ",a.createElement(t.code,null,"title")," eller ",a.createElement(t.code,null,"aria-label"),"."),"\n",a.createElement(t.h2,null,"Hvordan bruker vi ikonknapper?"),"\n",a.createElement(t.p,null,"Se ",a.createElement(t.a,{href:"/preview/disabled-text-input/profil/ikoner"},"profildokumentasjonen")," for mer om hvordan vi bruker ikoner generelt."),"\n",a.createElement(t.p,null,"Vi bruker sjeldent ikoner. En ikonknapp bør derfor helst bare brukes i sammenhenger hvor for eksempel en ",a.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/buttons"},"TertiaryButton")," ikke fungerer."))}var p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(d,e)):d(e)};function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var f=n(75482),k=n(96036),v=n(59001),b=n(65458),E=n(79379);const g=e=>{let{pageContext:t}=e;return a.createElement(k.p,{title:t.title})},h=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:i}=r;return a.createElement(E.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(b.M1,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&a.createElement(v.c,{variant:"komponent",component:o.title}),a.createElement(b.w5,o),l,i&&a.createElement(f.l,{types:i}))};function j(e){return a.createElement(h,e,a.createElement(p,e))}},94726:function(e,t,n){n.d(t,{h:function(){return c}});var r=n(99767),a=n(80324),l=n.n(a),o=n(92379);const i=["className","children","density"],c=(0,o.forwardRef)(((e,t)=>{const{className:n,children:a,density:c}=e,s=(0,r.Z)(e,i);return o.createElement("button",Object.assign({ref:t,type:"button",className:l()("jkl-icon-button",n),"data-testid":"jkl-icon-button","data-density":c},s),a)}));c.displayName="IconButton"},51060:function(e,t,n){n.d(t,{J:function(){return c}});var r=n(99767),a=n(80324),l=n.n(a),o=n(92379);const i=["bold","children","className","filled","variant"],c=o.forwardRef((function(e,t){const{bold:n,children:a,className:c,filled:s,variant:m}=e,d=(0,r.Z)(e,i);return o.createElement("span",Object.assign({"aria-hidden":!0,ref:t,className:l()("jkl-icon",c,{"jkl-icon--filled":s,"jkl-icon--bold":n,["jkl-icon--"+m]:!!m})},d),a)}))},49095:function(e,t,n){n.d(t,{W:function(){return l}});var r=n(92379),a=n(51060);const l=e=>r.createElement(a.J,e,"");l.displayName="SearchIcon"},75482:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(96845),a=n(41162),l=n(74797),o=n(92379),i=n(25329);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(s):[],c=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(i.dn,{className:"jkl-portal-code-block"},c),r.length>0&&o.createElement(u,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(48467),a=n(58990),l=n(92379),o=n(25329);const i=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.U,null),l.createElement(o.nv,null,c[t].text)),l.createElement(r.r,{href:c[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},c={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(80324),a=n.n(r),l=n(24157),o=n(92379),i=n(69215);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||c?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return c}});var r=n(99767),a=n(651),l=n(80324),o=n.n(l);const i=["className","density","id"],c=e=>{let{className:t,density:n,id:l}=e,c=(0,r.Z)(e,i);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:l},c))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var r=n(99767),a=n(651),l=n(42054),o=n(95020),i=n(80324),c=n.n(i),s=n(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:p,id:u}=e,f=(0,r.Z)(e,m);const[k,v]=(0,s.useState)(d),[b]=(0,s.useState)((()=>d)),{detailsRef:E,summaryRef:g,contentRef:h,onSummaryClick:j}=(0,o.E)({onOpenChange:(e,t)=>{v(e),p&&p(t,e)},isExpanded:b});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:c()("jkl-accordion-item",i),ref:E,id:u,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:g,children:[n,(0,a.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var r=n(92379),a=n(55650),l=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(a.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return E}});var r=n(92379),a=n(94207),l=n(49309),o=n(36774),i=n(64081),c=n(64483),s=n(42104),m=n(98746),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:E,columns:g,emptyTableText:h,rows:j,verticalAlign:y}=d,N=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.i,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&b(e,n,t[n]);return e})({fullWidth:!0},N),p(n,u({ref:t}))),E&&r.createElement(o.R,{srOnly:!0},E),r.createElement(c.s,null,r.createElement(m.S,null,g.map(((e,t)=>r.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===j.length&&h&&r.createElement(m.S,null,r.createElement(i.p,{colSpan:g.length},h)),j.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":g[t],verticalAlign:y},e))))))))}));E.displayName="DataTable"}}]);