"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3625],{64772:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return y},Head:function(){return h},default:function(){return g}});var a=n(47160),r=n(70079);const l=e=>{let{className:t,header:n,content:a,...l}=e;return r.createElement("tr",Object.assign({},l,{className:t}),r.createElement("th",{scope:"row"},n),r.createElement("td",null,a))},o={header:["Product","Price"],body:r.createElement(r.Fragment,null,r.createElement(l,{header:"Uføre­pensjon",content:"340,00 kr/mnd"}),r.createElement(l,{className:"summary-table-example__custom-row",header:"Livs­forsikring",content:"Tatt ut av tilbudet"}),r.createElement(l,{header:"Innbo­forsikring",content:"122,00 kr/mnd"}),r.createElement(l,{header:"Reise­forsikring",content:"249,00 kr/mnd"}),r.createElement(l,{className:"summary-table-example__custom-row",header:"Rabatt",content:"- 17,50 kr/mnd"})),footer:r.createElement(r.Fragment,null,r.createElement(l,{header:"Total sum",content:"693,50 kr/mnd"}),r.createElement(l,{header:r.createElement("span",{className:"jkl-sr-only"},"Total sum per år"),content:"8322,50 kr/mnd"})),caption:"Informasjon om produkter og pris i handlekurven"};var c=n(26372),s=n.n(c);const m=e=>{let{className:t,caption:n,header:a,body:l,footer:o,...c}=e;return r.createElement("table",Object.assign({},c,{className:s()("jkl-summary-table",t)}),n&&r.createElement("caption",{className:"jkl-sr-only"},n),r.createElement("thead",{className:"jkl-sr-only"},r.createElement("tr",null,a.map(((e,t)=>r.createElement("th",{scope:"col",key:t},e))))),r.createElement("tbody",null,l),r.createElement("tfoot",null,o))},i=()=>r.createElement("div",{className:"summary-table-example"},r.createElement(m,o)),d='\n<SummaryTable\n    caption="Informasjon om produkter og pris i handlekurven"\n    header={["Produkt", "Pris"]}\n    body={\n        <>\n            <SummaryTableRow header={`Uføre­pensjon`} content="340,00 kr/mnd" />\n            <SummaryTableRow\n                className="summary-table-example__custom-row"\n                header={`Livs­forsikring`}\n                content="Tatt ut av tilbudet"\n            />\n            <SummaryTableRow header={`Innbo­forsikring`} content="122,00 kr/mnd" />\n            <SummaryTableRow header={`Reise­forsikring`} content="249,00 kr/mnd" />\n            <SummaryTableRow className="summary-table-example__custom-row" header="Rabatt" content="- 17,50 kr/mnd" />\n        </>\n    }\n    footer={\n        <>\n            <SummaryTableRow header="Total sum" content="693,50 kr/mnd" />\n            <SummaryTableRow header={<span className="jkl-sr-only">Total sum per år</span>} content="8322,50 kr/år" />\n        </>\n    }\n/>\n';function p(e){const t=Object.assign({p:"p",a:"a",em:"em"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||k("ComponentExample",!0),n||k("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Oppsummeringstabeller brukes for eksempel til å vise produkter som ligger i en handlekurv med informasjon om navn og\npris.")),"\n",r.createElement(l,{title:"SummaryTable",component:i,codeExample:d}),"\n",r.createElement(t.p,null,"Bruk ",r.createElement(t.a,{href:"/preview/3876-move-label-2/komponenter/descriptionlist"},"DescriptionList")," om du skal vise ",r.createElement(t.em,null,"metadata"),", for eksempel detaljer om et produkt, hvor oppsummering ikke er et behov."),"\n",r.createElement(t.p,null,"Dersom du trenger mer fleksibilitet i presentasjonen av innholdet, bruk komponentene fra ",r.createElement(t.a,{href:"/preview/3876-move-label-2/komponenter/table"},"Table"),"."))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(p,e)):p(e)};function k(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var E=n(72285),f=n(22756),v=n(95573),b=n(1634);const h=e=>{let{pageContext:t}=e;return r.createElement(f.p,{title:t.title})},y=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:c}=a;return r.createElement(b.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(v.M1,Object.assign({},o,{versions:a.versions})),r.createElement(v.w5,o),l,c&&r.createElement(E.l,{types:c}))};function g(e){return r.createElement(y,e,r.createElement(u,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var a=n(78217),r=n(41994),l=n(87505),o=n(70079),c=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(i):[],l=n.props?Object.values(n.props).filter(m):[],s=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(c.dn,{className:"jkl-portal-code-block"},s),a.length>0&&o.createElement(u,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),c=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(26372),r=n.n(a),l=n(70079);const o=e=>{let{className:t,density:n,id:a,...o}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:a,...o})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var a=n(53484),r=n(1386),l=n(26372),o=n.n(l),c=n(70079);const s=e=>{let{children:t,title:n,className:l,startExpanded:s=!1,onClick:m,id:i,...d}=e;const{0:p,1:u}=(0,c.useState)(s),{0:k}=(0,c.useState)((()=>s)),{detailsRef:E,summaryRef:f,contentRef:v,onSummaryClick:b}=(0,r.E)({onOpenChange:(e,t)=>{u(e),m&&m(t,e)},isExpanded:k});return c.createElement("details",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",l),ref:E,id:i},c.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:f},n,c.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),c.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),c=n(82546),s=n(39126),m=n(66169),i=n(94509);const d=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...E}=e;return a.createElement(r.i,{fullWidth:!0,...E,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(i.S,null,d.map(((e,t)=>a.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===u.length&&p&&a.createElement(i.S,null,a.createElement(c.p,{colSpan:d.length},p)),u.map(((e,t)=>a.createElement(i.S,{key:t},e.map(((e,t)=>a.createElement(c.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);