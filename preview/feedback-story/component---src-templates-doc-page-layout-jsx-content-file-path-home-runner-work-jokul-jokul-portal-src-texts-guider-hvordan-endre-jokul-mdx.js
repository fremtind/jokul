"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9985],{27872:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return f}});var r=n(64717),a=n(92379);function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li"},(0,r.ah)(),e.components),{PortalImage:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("PortalImage",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Hvordan gjøre endringer i Jøkul"),"\n",a.createElement(t.p,null,"All utvikling knyttet til Jøkul skjer på ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul"},"GitHub"),"."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Ønsker du svar på et spørsmål? Da kan ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions"},"diskusjon")," være et greit sted å starte."),"\n",a.createElement(t.li,null,"Har du funnet en feil? Er det en konkret ting du savner? Da kan et issue ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/new/choose"},"issue")," være på sin plass."),"\n"),"\n",a.createElement(t.p,null,"Usikker på hvor du skal starte? Ta en titt på ",a.createElement(t.a,{href:"/preview/feedback-story/kom-i-gang/hjelp"},"hvor du kan få hjelp")," og hvordan du kan ",a.createElement(t.a,{href:"/preview/feedback-story/kom-i-gang/jobb-med-teamet"},"jobbe med Jøkul-teamet"),", så finner vi ut av det sammen."),"\n",a.createElement(n,{src:"/assets/kom-i-gang/bidra-forslag.png",caption:"Om du beskriver utfordringen godt er det enklere for andre å hjelpe til."}))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)};var i=n(75482),s=n(96036),c=n(59001),m=n(65458),d=n(79379);const p=e=>{let{pageContext:t}=e;return a.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:s}=r;return a.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(m.M1,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&a.createElement(c.c,{variant:"komponent",component:o.title}),a.createElement(m.w5,o),l,s&&a.createElement(i.l,{types:s}))};function f(e){return a.createElement(u,e,a.createElement(o,e))}},75482:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(96845),a=n(41162),l=n(74797),o=n(92379),i=n(25329);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(u,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(48467),a=n(58990),l=n(92379),o=n(25329);const i=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.U,null),l.createElement(o.nv,null,s[t].text)),l.createElement(r.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(80324),a=n.n(r),l=n(24157),o=n(92379),i=n(69215);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(99767),a=n(651),l=n(80324),o=n.n(l);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:l}=e,s=(0,r.Z)(e,i);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:l},s))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var r=n(99767),a=n(651),l=n(42054),o=n(95020),i=n(80324),s=n.n(i),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:p,id:u}=e,f=(0,r.Z)(e,m);const[k,v]=(0,c.useState)(d),[b]=(0,c.useState)((()=>d)),{detailsRef:g,summaryRef:E,contentRef:h,onSummaryClick:j}=(0,o.E)({onOpenChange:(e,t)=>{v(e),p&&p(t,e)},isExpanded:b});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",i),ref:g,id:u,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:E,children:[n,(0,a.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var r=n(92379),a=n(55650),l=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(a.J,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return g}});var r=n(92379),a=n(94207),l=n(49309),o=n(36774),i=n(64081),s=n(64483),c=n(42104),m=n(98746),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const g=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:g,columns:E,emptyTableText:h,rows:j,verticalAlign:y}=d,w=((e,t)=>{var n={};for(var r in e)k.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.i,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&b(e,n,t[n]);return e})({fullWidth:!0},w),p(n,u({ref:t}))),g&&r.createElement(o.R,{srOnly:!0},g),r.createElement(s.s,null,r.createElement(m.S,null,E.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===j.length&&h&&r.createElement(m.S,null,r.createElement(i.p,{colSpan:E.length},h)),j.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":E[t],verticalAlign:y},e))))))))}));g.displayName="DataTable"}}]);