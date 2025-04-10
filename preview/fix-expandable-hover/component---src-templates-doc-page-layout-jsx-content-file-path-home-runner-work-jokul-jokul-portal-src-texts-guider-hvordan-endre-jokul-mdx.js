"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9985],{34679:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return m},default:function(){return p}});var a=n(47160),r=n(70079);function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a",ul:"ul",li:"li"},(0,a.ah)(),e.components),{PortalImage:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("PortalImage",!0),r.createElement(r.Fragment,null,r.createElement(t.h1,null,"Hvordan gjøre endringer i Jøkul"),"\n",r.createElement(t.p,null,"All utvikling knyttet til Jøkul skjer på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul"},"GitHub"),"."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Ønsker du svar på et spørsmål? Da kan ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions"},"diskusjon")," være et greit sted å starte."),"\n",r.createElement(t.li,null,"Har du funnet en feil? Er det en konkret ting du savner? Da kan et issue ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/new/choose"},"issue")," være på sin plass."),"\n"),"\n",r.createElement(t.p,null,"Usikker på hvor du skal starte? Ta en titt på ",r.createElement(t.a,{href:"/preview/fix-expandable-hover/kom-i-gang/hjelp"},"hvor du kan få hjelp")," og hvordan du kan ",r.createElement(t.a,{href:"/preview/fix-expandable-hover/kom-i-gang/jobb-med-teamet"},"jobbe med Jøkul-teamet"),", så finner vi ut av det sammen."),"\n",r.createElement(n,{src:"/assets/kom-i-gang/bidra-forslag.png",caption:"Om du beskriver utfordringen godt er det enklere for andre å hjelpe til."}))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)};var i=n(72285),s=n(22756),c=n(95573),d=n(1634);const m=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:s}=a;return r.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},o,{versions:a.versions})),r.createElement(c.w5,o),l,s&&r.createElement(i.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return f}});var a=n(58820),r=n(63571),l=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),a.length>0&&o.createElement(p,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(35250),r=n(26372),l=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(35250),r=n(68998),l=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:d,id:m,...u}=e;const[p,f]=(0,s.useState)(c),[k]=(0,s.useState)((()=>c)),{detailsRef:v,summaryRef:h,contentRef:E,onSummaryClick:g}=(0,l.E)({onOpenChange:(e,t)=>{f(e),d&&d(t,e)},isExpanded:k});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:v,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:h,children:[n,(0,a.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:f,...k}=e;return a.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(d.S,null,m.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===p.length&&u&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:m.length},u)),p.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);