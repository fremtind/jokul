"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1874],{82150:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return E},default:function(){return f}});var l=n(75615),r=n(70079),a=n(36821);const i=()=>r.createElement(a.o6,null,r.createElement(a.iV,null,"Dekning"),r.createElement(a.uM,null,"Kasko"),r.createElement(a.iV,null,"Egenandel"),r.createElement(a.uM,null,"2 000 kr for glass"),r.createElement(a.uM,null,"6 000 kr for øvrige skader"),r.createElement(a.iV,null,"Sjåfør under 23 år"),r.createElement(a.uM,null,"Nei")),o=()=>"\n<DescriptionList>\n    <DescriptionTerm>Dekning</DescriptionTerm>\n    <DescriptionDetail>Kasko</DescriptionDetail>\n\n    <DescriptionTerm>Egenandel</DescriptionTerm>\n    <DescriptionDetail>2 000 kr for glass</DescriptionDetail>\n    <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>\n\n    <DescriptionTerm>Sjåfør under 23 år</DescriptionTerm>\n    <DescriptionDetail>Nei</DescriptionDetail>\n</DescriptionList>\n";function s(e){const t=Object.assign({p:"p",a:"a",h2:"h2",em:"em"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:s,Grid:c,DoDontExample:d}=t;return s||m("ComponentExample",!0),d||m("DoDontExample",!0),c||m("Grid",!0),n||m("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"En definisjonsliste brukes gjerne til ",r.createElement("i",null,"metadata")," eller begrepsdefinisjoner, for eksempel detaljer om et produkt\neller en avtale kunden har.")),"\n",r.createElement(s,{title:"DescriptionList",component:i,codeExample:o}),"\n",r.createElement(t.p,null,"Selv om en definisjonsliste visuelt sett kan deles inn i to kolonner, og kan sies å ha rader, så er det ikke en tabell. Om du trenger kolonneoverskrifter eller ønsker deg flere kolonner, se ",r.createElement(t.a,{href:"/komponenter/table"},"Table"),"."),"\n",r.createElement(t.h2,null,"Tilgjengelighet"),"\n",r.createElement(t.p,null,"En definisjonsliste har en betydning ",r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#accessibility_concerns"},"som skjermlesere kan bruke")," til navigasjon og opplesning. Dessverre er ",r.createElement(t.a,{href:"https://a11ysupport.io/tech/html/dl_element"},"støtten litt variabel"),", men de mest brukte skjermleserne VoiceOver, JAWS, og NVDA har for det meste god støtte. De som ikke har like god støtte vil lese opp innholdet som et vanlig avsnitt."),"\n",r.createElement(t.p,null,"Siden støtten er noe variabel bør man kunne forstå forholdet mellom begrep og definisjon. Kanskje spesielt viktig at man forstår at ",r.createElement(t.em,null,"neste begrep")," ikke er en del av definisjonen av det forrige begrepet."),"\n",r.createElement(t.p,null,"Skjermlesere med full støtte vil annonsere en definisjonsliste som enten liste (",r.createElement("i",{lang:"en"},"list"),"), definisjonsliste (",r.createElement("i",{lang:"en"},"definition list"),") eller beskrivelsesliste (",r.createElement("i",{lang:"en"},"description list"),"). De vil også annonsere antall listeelementer, og gjerne annonsere om det som ble lest opp er et begrep (",r.createElement("i",{lang:"en"},"term"),") eller en beskrivelse (",r.createElement("i",{lang:"en"},"definition/description"),")."),"\n",r.createElement(t.p,null,"Fordi skjermlesere med støtte annonserer hva som er begrep og hva som er beskrivelse bruker vi ikke skilletegn som kolon etter begrep."),"\n",r.createElement(c,null,r.createElement(d,{type:"do",description:"La skjermleseren annonsere rollen uten ekstra støy",content:r.createElement(a.o6,{className:"jkl-body"},r.createElement(a.iV,null,"Forsikring"),r.createElement(a.uM,null,"Innboforsikring"),r.createElement(a.iV,null,"Adresse"),r.createElement(a.uM,null,"Testgata 1"))}),r.createElement(d,{type:"dont",description:"Skilletegn blir lest opp i tillegg til elementets rolle",content:r.createElement(a.o6,{className:"jkl-body"},r.createElement(a.iV,null,"Forsikring:"),r.createElement(a.uM,null,"Innboforsikring"),r.createElement(a.iV,null,"Adresse:"),r.createElement(a.uM,null,"Testgata 1"))})))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(s,e)):s(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=n(71111),p=n(16569),u=n(72892),k=n(479);const E=e=>{let{pageContext:t}=e;return r.createElement(p.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:o}=l;return r.createElement(k.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(u.M1,Object.assign({},i,{versions:l.versions})),r.createElement(u.w5,i),a,o&&r.createElement(d.l,{types:o}))};function f(e){return r.createElement(g,e,r.createElement(c,e))}},36821:function(e,t,n){n.d(t,{iV:function(){return o},o6:function(){return i},uM:function(){return s}});var l=n(26372),r=n.n(l),a=n(70079);const i=e=>{let{children:t,className:n,...l}=e;return a.createElement("dl",Object.assign({},l,{className:r()("jkl-description-list",n)}),t)},o=e=>{let{children:t,className:n,...l}=e;return a.createElement("dt",Object.assign({},l,{className:r()("jkl-description-list__term",n)}),t)},s=e=>{let{children:t,className:n,...l}=e;return a.createElement("dd",Object.assign({},l,{className:r()("jkl-description-list__detail",n)}),t)}},71111:function(e,t,n){n.d(t,{l:function(){return u}});var l=n(57986),r=n(80252),a=n(50601),i=n(70079);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},u=e=>{let{types:t}=e;return i.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},i.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),i.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(s):[];return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(79363),i=n(70079),o=n(56024);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(26372),r=n.n(l),a=n(70079);const i=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},80252:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(14092),r=n(89292),a=n(26372),i=n.n(a),o=n(70079);const s=e=>{let{expanded:t=!1,className:n}=e;return o.createElement("span",{className:i()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},o.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),o.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},c=e=>{let{children:t,title:n,className:a,startExpanded:c=!1,onClick:m,...d}=e;const p=(0,l.M)("title"),u=(0,l.M)("content"),{0:k,1:E}=(0,o.useState)(c),[g]=(0,r.v)(k,{easing:"exit",timing:"expressive"});return o.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",a,{"jkl-accordion-item--expanded":k})},o.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":u,onClick:e=>{const t=!k;E(t),m&&m(e,t)}},n,o.createElement(s,{expanded:k})),o.createElement("div",{id:u,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!k},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(64327),a=n(1807),i=n(11348),o=n(12675),s=n(14687),c=n(61211),m=n(39666);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...E}=e;return l.createElement(r.i,{fullWidth:!0,...E,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===u.length&&p&&l.createElement(m.S,null,l.createElement(o.p,{colSpan:d.length},p)),u.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);