"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1874],{18265:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return E},default:function(){return f}});var l=n(47160),r=n(70079),a=n(60565);const i=()=>r.createElement(a.o6,null,r.createElement(a.iV,null,"Dekning"),r.createElement(a.uM,null,"Kasko"),r.createElement(a.iV,null,"Egenandel"),r.createElement(a.uM,null,"2 000 kr for glass"),r.createElement(a.uM,null,"6 000 kr for øvrige skader"),r.createElement(a.iV,null,"Sjåfør under 23 år"),r.createElement(a.uM,null,"Nei")),s=()=>"\n<DescriptionList>\n    <DescriptionTerm>Dekning</DescriptionTerm>\n    <DescriptionDetail>Kasko</DescriptionDetail>\n\n    <DescriptionTerm>Egenandel</DescriptionTerm>\n    <DescriptionDetail>2 000 kr for glass</DescriptionDetail>\n    <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>\n\n    <DescriptionTerm>Sjåfør under 23 år</DescriptionTerm>\n    <DescriptionDetail>Nei</DescriptionDetail>\n</DescriptionList>\n";function o(e){const t=Object.assign({p:"p",a:"a",h2:"h2",em:"em"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:o,Grid:c,DoDontExample:d}=t;return o||m("ComponentExample",!0),d||m("DoDontExample",!0),c||m("Grid",!0),n||m("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"En definisjonsliste brukes gjerne til ",r.createElement("i",null,"metadata")," eller\nbegrepsdefinisjoner, for eksempel detaljer om et produkt eller en avtale\nkunden har.")),"\n",r.createElement(o,{title:"DescriptionList",component:i,codeExample:s}),"\n",r.createElement(t.p,null,"Selv om en definisjonsliste visuelt sett kan deles inn i to kolonner, og kan sies å ha rader, så er det ikke en tabell. Om du trenger kolonneoverskrifter eller ønsker deg flere kolonner, se ",r.createElement(t.a,{href:"/preview/troubleshoot/komponenter/table"},"Table"),"."),"\n",r.createElement(t.h2,null,"Tilgjengelighet"),"\n",r.createElement(t.p,null,"En definisjonsliste har en betydning ",r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#accessibility_concerns"},"som skjermlesere kan bruke")," til navigasjon og opplesning. Dessverre er ",r.createElement(t.a,{href:"https://a11ysupport.io/tech/html/dl_element"},"støtten litt variabel"),", men de mest brukte skjermleserne VoiceOver, JAWS, og NVDA har for det meste god støtte. De som ikke har like god støtte vil lese opp innholdet som et vanlig avsnitt."),"\n",r.createElement(t.p,null,"Siden støtten er noe variabel bør man kunne forstå forholdet mellom begrep og definisjon. Kanskje spesielt viktig at man forstår at ",r.createElement(t.em,null,"neste begrep")," ikke er en del av definisjonen av det forrige begrepet."),"\n",r.createElement(t.p,null,"Skjermlesere med full støtte vil annonsere en definisjonsliste som enten liste (",r.createElement("i",{lang:"en"},"list"),"), definisjonsliste (",r.createElement("i",{lang:"en"},"definition list"),") eller beskrivelsesliste (",r.createElement("i",{lang:"en"},"description list"),"). De vil også annonsere antall listeelementer, og gjerne annonsere om det som ble lest opp er et begrep (",r.createElement("i",{lang:"en"},"term"),") eller en beskrivelse (",r.createElement("i",{lang:"en"},"definition/description"),")."),"\n",r.createElement(t.p,null,"Fordi skjermlesere med støtte annonserer hva som er begrep og hva som er beskrivelse bruker vi ikke skilletegn som kolon etter begrep."),"\n",r.createElement(c,null,r.createElement(d,{type:"do",description:"La skjermleseren annonsere rollen uten ekstra støy",content:r.createElement(a.o6,{className:"jkl-body"},r.createElement(a.iV,null,"Forsikring"),r.createElement(a.uM,null,"Innboforsikring"),r.createElement(a.iV,null,"Adresse"),r.createElement(a.uM,null,"Testgata 1"))}),r.createElement(d,{type:"dont",description:"Skilletegn blir lest opp i tillegg til elementets rolle",content:r.createElement(a.o6,{className:"jkl-body"},r.createElement(a.iV,null,"Forsikring:"),r.createElement(a.uM,null,"Innboforsikring"),r.createElement(a.iV,null,"Adresse:"),r.createElement(a.uM,null,"Testgata 1"))})))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=n(72285),p=n(22756),u=n(95573),k=n(1634);const E=e=>{let{pageContext:t}=e;return r.createElement(p.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(k.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(u.M1,Object.assign({},i,{versions:l.versions})),r.createElement(u.w5,i),a,s&&r.createElement(d.l,{types:s}))};function f(e){return r.createElement(g,e,r.createElement(c,e))}},60565:function(e,t,n){n.d(t,{iV:function(){return s},o6:function(){return i},uM:function(){return o}});var l=n(26372),r=n.n(l),a=n(70079);const i=e=>{let{children:t,className:n,...l}=e;return a.createElement("dl",Object.assign({},l,{className:r()("jkl-description-list",n)}),t)},s=e=>{let{children:t,className:n,...l}=e;return a.createElement("dt",Object.assign({},l,{className:r()("jkl-description-list__term",n)}),t)},o=e=>{let{children:t,className:n,...l}=e;return a.createElement("dd",Object.assign({},l,{className:r()("jkl-description-list__detail",n)}),t)}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(58820),r=n(63571),a=n(87505),i=n(70079),s=n(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),l.length>0&&i.createElement(u,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),s=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(35250),r=n(26372),a=n.n(r);const i=e=>{let{className:t,density:n,id:r,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(35250),r=n(68998),a=n(1386),i=n(26372),s=n.n(i),o=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:m,id:d,...p}=e;const[u,k]=(0,o.useState)(c),[E]=(0,o.useState)((()=>c)),{detailsRef:g,summaryRef:f,contentRef:v,onSummaryClick:j}=(0,a.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:E});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",i),ref:g,id:d,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:f,children:[n,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),s=n(82546),o=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...E}=e;return l.createElement(r.i,{fullWidth:!0,...E,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(o.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===u.length&&p&&l.createElement(m.S,null,l.createElement(s.p,{colSpan:d.length},p)),u.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);