"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3625],{64772:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return h},Head:function(){return b},default:function(){return y}});var a=n(47160),r=n(70079);const l=e=>{let{className:t,header:n,content:a,...l}=e;return r.createElement("tr",Object.assign({},l,{className:t}),r.createElement("th",{scope:"row"},n),r.createElement("td",null,a))},o={header:["Product","Price"],body:r.createElement(r.Fragment,null,r.createElement(l,{header:"Uføre­pensjon",content:"340,00 kr/mnd"}),r.createElement(l,{className:"summary-table-example__custom-row",header:"Livs­forsikring",content:"Tatt ut av tilbudet"}),r.createElement(l,{header:"Innbo­forsikring",content:"122,00 kr/mnd"}),r.createElement(l,{header:"Reise­forsikring",content:"249,00 kr/mnd"}),r.createElement(l,{className:"summary-table-example__custom-row",header:"Rabatt",content:"- 17,50 kr/mnd"})),footer:r.createElement(r.Fragment,null,r.createElement(l,{header:"Total sum",content:"693,50 kr/mnd"}),r.createElement(l,{header:r.createElement("span",{className:"jkl-sr-only"},"Total sum per år"),content:"8322,50 kr/mnd"})),caption:"Informasjon om produkter og pris i handlekurven"};var s=n(26372),c=n.n(s);const i=e=>{let{className:t,caption:n,header:a,body:l,footer:o,...s}=e;return r.createElement("table",Object.assign({},s,{className:c()("jkl-summary-table",t)}),n&&r.createElement("caption",{className:"jkl-sr-only"},n),r.createElement("thead",{className:"jkl-sr-only"},r.createElement("tr",null,a.map(((e,t)=>r.createElement("th",{scope:"col",key:t},e))))),r.createElement("tbody",null,l),r.createElement("tfoot",null,o))},m=()=>r.createElement("div",{className:"summary-table-example"},r.createElement(i,o));function d(e){const t=Object.assign({p:"p",a:"a",em:"em"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||u("ComponentExample",!0),n||u("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Oppsummeringstabeller brukes for eksempel til å vise produkter som ligger i\nen handlekurv med informasjon om navn og pris.")),"\n",r.createElement(l,{title:"SummaryTable",component:m,codeExample:'\n<SummaryTable\n    caption="Informasjon om produkter og pris i handlekurven"\n    header={["Produkt", "Pris"]}\n    body={\n        <>\n            <SummaryTableRow header={`Uføre­pensjon`} content="340,00 kr/mnd" />\n            <SummaryTableRow\n                className="summary-table-example__custom-row"\n                header={`Livs­forsikring`}\n                content="Tatt ut av tilbudet"\n            />\n            <SummaryTableRow header={`Innbo­forsikring`} content="122,00 kr/mnd" />\n            <SummaryTableRow header={`Reise­forsikring`} content="249,00 kr/mnd" />\n            <SummaryTableRow className="summary-table-example__custom-row" header="Rabatt" content="- 17,50 kr/mnd" />\n        </>\n    }\n    footer={\n        <>\n            <SummaryTableRow header="Total sum" content="693,50 kr/mnd" />\n            <SummaryTableRow header={<span className="jkl-sr-only">Total sum per år</span>} content="8322,50 kr/år" />\n        </>\n    }\n/>\n'}),"\n",r.createElement(t.p,null,"Bruk ",r.createElement(t.a,{href:"/preview/4352-accessible-names/komponenter/descriptionlist"},"DescriptionList")," om du skal vise ",r.createElement(t.em,null,"metadata"),", for eksempel detaljer om et produkt, hvor oppsummering ikke er et behov."),"\n",r.createElement(t.p,null,"Dersom du trenger mer fleksibilitet i presentasjonen av innholdet, bruk komponentene fra ",r.createElement(t.a,{href:"/preview/4352-accessible-names/komponenter/table"},"Table"),"."))}var p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(d,e)):d(e)};function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var k=n(72285),E=n(22756),f=n(95573),v=n(1634);const b=e=>{let{pageContext:t}=e;return r.createElement(E.p,{title:t.title})},h=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:s}=a;return r.createElement(v.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(f.M1,Object.assign({},o,{versions:a.versions})),r.createElement(f.w5,o),l,s&&r.createElement(k.l,{types:s}))};function y(e){return r.createElement(h,e,r.createElement(p,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var a=n(58820),r=n(63571),l=n(87505),o=n(70079),s=n(54656);const c=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(i):[],c=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&o.createElement(s.dn,{className:"jkl-portal-code-block"},c),a.length>0&&o.createElement(u,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return c}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),s=n(34044);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(s.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(35250),r=n(26372),l=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return i}});var a=n(35250),r=n(68998),l=n(1386),o=n(26372),s=n.n(o),c=n(70079);const i=e=>{let{children:t,title:n,className:o,startExpanded:i=!1,onClick:m,id:d,...p}=e;const[u,k]=(0,c.useState)(i),[E]=(0,c.useState)((()=>i)),{detailsRef:f,summaryRef:v,contentRef:b,onSummaryClick:h}=(0,l.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:E});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",o),ref:f,id:d,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:v,children:[n,(0,a.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),s=n(82546),c=n(39126),i=n(66169),m=n(94509);const d=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...E}=e;return a.createElement(r.i,{fullWidth:!0,...E,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(c.s,null,a.createElement(m.S,null,d.map(((e,t)=>a.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===u.length&&p&&a.createElement(m.S,null,a.createElement(s.p,{colSpan:d.length},p)),u.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);