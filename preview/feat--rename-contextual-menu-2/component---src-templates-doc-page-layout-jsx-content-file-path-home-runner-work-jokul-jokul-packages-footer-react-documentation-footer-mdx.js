"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[29],{20756:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return k},Head:function(){return u},default:function(){return f}});var r=t(47160),l=t(70079),a=t(62242);function o(e){const n=Object.assign({p:"p",em:"em",a:"a",h2:"h2"},(0,r.ah)(),e.components),{Ingress:t,ComponentExample:o}=n;return o||s("ComponentExample",!0),t||s("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Footeren fra Fremtind fungerer som avsender av de respektive nettsidene og applikasjonene, og kan ha enkelte\nforhåndsinnstilte egenskaper, for eksempel lenker.")),"\n",l.createElement(o,{scrollable:!0,component:a.ZP,codeExample:a.U5,knobs:a.Bd,isWide:!0}),"\n",l.createElement(n.p,null,"Om du trenger å vise mer innhold, prøv først å plassere innholdet ",l.createElement(n.em,null,"over")," footeren. Se for eksempel bunnen av denne siden, hvor en ",l.createElement(n.a,{href:"/preview/feat--rename-contextual-menu-2/komponenter/feedback"},"Feedback")," og et ",l.createElement(n.a,{href:"/preview/feat--rename-contextual-menu-2/komponenter/logo"},"LogoStamp")," er plassert over selve Footer-komponenten."),"\n",l.createElement(n.p,null,"Footer-komponenten er ment som et grunnleggende utgangspunkt og vil kunne utvides etter behov. ",l.createElement(n.a,{href:"https://github.com/fremtind/jokul/discussions/2344"},"Si ifra")," om det er noe du trenger!"),"\n",l.createElement(n.h2,null,"Når bruker vi Footer?"),"\n",l.createElement(n.p,null,"Footer brukes når det kreves tilleggsinformasjon om opphavsrett, kontaktinformasjon, lenker til andre sider eller lignende."),"\n",l.createElement(n.p,null,"Når det gjelder innrammede applikasjoner, skal footeren til den respektive leverandøren velges."))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(o,e)):o(e)};function s(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var c=t(72285),m=t(22756),d=t(95573),p=t(1634);const u=e=>{let{pageContext:n}=e;return l.createElement(m.p,{title:n.title})},k=e=>{let{location:n,data:t,pageContext:r,children:a}=e;const{frontmatter:o}=t.page,{types:i}=r;return l.createElement(p.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(d.M1,Object.assign({},o,{versions:r.versions})),l.createElement(d.w5,o),a,i&&l.createElement(c.l,{types:i}))};function f(e){return l.createElement(k,e,l.createElement(i,e))}},62242:function(e,n,t){t.d(n,{ZP:function(){return c},U5:function(){return m},Bd:function(){return s}});var r=t(70079),l=t(94989),a=t(26372),o=t.n(a);const i=e=>{let{heading:n="Fremtind er vår leverandør av forsikring",className:t,links:a,showFinansportalenLink:i=!1,density:s,...c}=e;return r.createElement("footer",Object.assign({className:o()("jkl-footer",t),"data-density":s},c),r.createElement("p",{className:"jkl-footer__description"},n),a&&r.createElement("div",{className:"jkl-footer__links"},r.createElement("ul",null,a.map((e=>{let{component:n=l.r,title:t,external:a,...o}=e;const i=n;return r.createElement("li",{key:t},r.createElement(i,Object.assign({className:"button"===n?"jkl-link jkl-footer__links--small-text":"jkl-footer__links--small-text",external:void 0!==a?a:void 0},o),t))})),i&&r.createElement("li",null,r.createElement("span",{className:"jkl-footer__links--small-text"},"Sammenlign våre priser med andre selskaper på"," ",r.createElement(l.r,{href:"https://www.finansportalen.no/",external:!0},"finansportalen.no"))))))},s={boolProps:[{prop:"Mobil",defaultValue:!0},{prop:"Med lenker",defaultValue:!0},{prop:"Med finansportalen",defaultValue:!0}]};var c=e=>{let{boolValues:n}=e;const t=null==n?void 0:n.Mobil,l=null==n?void 0:n["Med lenker"],a=null==n?void 0:n["Med finansportalen"];return r.createElement("div",Object.assign({},t?{style:{width:"21rem"}}:{style:{minWidth:"82rem"}},{"data-simulate-mobile":t?"true":void 0}),r.createElement(i,{role:"none presentation",showFinansportalenLink:a,links:l?[{title:"Personvern og vilkår",href:"https://www.fremtind.no/personvern/",external:!1},{title:"Bruk av informasjonskapsler",component:"button",onClick:()=>alert("Åpne cookieConsent"),external:!1}]:void 0}))};const m=e=>{let{boolValues:n}=e;const t=null==n?void 0:n["Med lenker"],r=null==n?void 0:n["Med finansportalen"];return t||r?r?t?'<Footer\n    showFinansportalenLink={true}\n    links={\n        [\n            {\n              title: "Personvern og vilkår",\n              href: "https://www.fremtind.no/personvern/",\n              external: false\n            },\n            {\n              title: "Bruk av informasjonskapsler",\n              component: "button",\n              onClick: () => alert("Åpne cookieConsent"),\n              external: false\n            }\n        ]\n    }\n/>':"<Footer showFinansportalenLink={true} />":'<Footer\n    links={\n        [\n            {\n              title: "Personvern og vilkår",\n              href: "https://www.fremtind.no/personvern/",\n              external: false\n            },\n            {\n              title: "Bruk av informasjonskapsler",\n              component: "button",\n              onClick: () => alert("Åpne cookieConsent"),\n              external: false\n            }\n        ]\n    }\n/>':"<Footer />"}},72285:function(e,n,t){t.d(n,{l:function(){return k}});var r=t(58820),l=t(63571),a=t(87505),o=t(70079),i=t(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},d=(e,n)=>{const{scrollLeft:t,scrollWidth:r}=e,{clientWidth:l}=n,a=t>0,o=r-t>l;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",o)},p=e=>{const n=e.target,t=n.parentElement;d(n,t)},u=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&d(n,e)}}))})),r=t.current.parentElement.parentElement;n.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=n,r.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const r=t.props?Object.values(t.props).filter(m):[],a=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,r,l,a,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(u,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return s}});var r=t(26372),l=t.n(r),a=t(49597),o=t(70079),i=t(34044);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return o}});var r=t(35250),l=t(26372),a=t.n(l);const o=e=>{let{className:n,density:t,id:l,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",n),"data-density":t,id:l,...o})}},63571:function(e,n,t){t.d(n,{Q:function(){return c}});var r=t(35250),l=t(68998),a=t(1386),o=t(26372),i=t.n(o),s=t(70079);const c=e=>{let{children:n,title:t,className:o,startExpanded:c=!1,onClick:m,id:d,...p}=e;const[u,k]=(0,s.useState)(c),[f]=(0,s.useState)((()=>c)),{detailsRef:v,summaryRef:E,contentRef:g,onSummaryClick:h}=(0,a.E)({onOpenChange:(e,n)=>{k(e),m&&m(n,e)},isExpanded:f});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",o),ref:v,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[t,(0,r.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return d}});var r=t(70079),l=t(41699),a=t(65174),o=t(6914),i=t(82546),s=t(39126),c=t(66169),m=t(94509);const d=(0,r.forwardRef)(((e,n)=>{let{caption:t,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...f}=e;return r.createElement(l.i,{fullWidth:!0,...f,ref:n},t&&r.createElement(o.R,{srOnly:!0},t),r.createElement(s.s,null,r.createElement(m.S,null,d.map(((e,n)=>r.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===u.length&&p&&r.createElement(m.S,null,r.createElement(i.p,{colSpan:d.length},p)),u.map(((e,n)=>r.createElement(m.S,{key:n},e.map(((e,n)=>r.createElement(i.p,{key:n,"data-th":d[n],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);