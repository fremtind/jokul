"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2012],{65366:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return v},Head:function(){return k},default:function(){return f}});var a=n(47160),r=n(70079),l=n(91517),o=n(69169);function i(e){const t=Object.assign({p:"p",a:"a",h2:"h2"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:i,Grid:s,DoDontExample:d}=t;return i||c("ComponentExample",!0),d||c("DoDontExample",!0),s||c("Grid",!0),n||c("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Datovelgeren gir brukerne mulighet til å skrive inn eller velge en dato. Ledeteksten beskriver hvilken dato brukeren\nskal fylle inn. To datovelgere kan brukes sammen for å angi perioder.")),"\n",r.createElement(i,{title:"DatePicker",component:o.xM,knobs:o.o9,codeExample:o.bK}),"\n",r.createElement(t.p,null,"Du finner et ",r.createElement(t.a,{href:"/preview/docs/farger/demoer/skjemavalidering/"},"eksempel på datovelger brukt i skjemakontekst")," under Demoer. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"Bruk datovelgeren når du vil be om en spesifikk dato. Datoen kan skrives inn eller velges fra en kalender."),"\n",r.createElement(t.p,null,'Vi kan også bruke to datovelgere, når vi vil at brukeren skal angi en periode med fra- og tildato. For eksempel "Hvor lenge var du syk da du var på ferie? Velg dato fra og til".'),"\n",r.createElement(t.h2,null,"Tekst og validering"),"\n",r.createElement(t.p,null,"Velg størrelse på ledeteksten etter prinsippene for skjemadesign. Bruk en kort og tydelig ledetekst, som forteller hva brukeren skal velge. Hvis det trengs, kan du også gi mer forklaring med en hjelpetekst under feltet."),"\n",r.createElement(t.p,null,"Hvis datovelgeren ikke validerer, vises en feilmelding, som forteller hva som er galt. Merk at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),"\n",r.createElement(s,null,r.createElement(d,{type:"do",description:"Hjelpetekst i feilmelding",content:r.createElement(l.M,{label:"Fra dato",errorLabel:"Du må velge datoen da du først ble syk"})}),r.createElement(d,{type:"dont",description:"Feilmelding uten hjelp",content:r.createElement(l.M,{label:"Fra dato",errorLabel:"Du må velge dato"})})))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function c(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var d=n(72285),m=n(22756),u=n(95573),p=n(1634);const k=e=>{let{pageContext:t}=e;return r.createElement(m.p,{title:t.title})},v=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:i}=a;return r.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(u.M1,Object.assign({},o,{versions:a.versions})),r.createElement(u.w5,o),l,i&&r.createElement(d.l,{types:i}))};function f(e){return r.createElement(v,e,r.createElement(s,e))}},69169:function(e,t,n){n.d(t,{bK:function(){return c},o9:function(){return o},xM:function(){return s}});var a=n(70079),r=n(91517),l=n(39065);const o={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},i=e=>{const t=864e5*(30*e-5);return t<0?12+t:t},s=e=>{let{boolValues:t,choiceValues:n}=e;const o=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,s=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,c=n&&n.Variant,d=null!=t&&t["Med tooltip"]?{content:"Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært."}:void 0,{0:m,1:u}=(0,a.useState)("");return a.createElement(r.M,{label:"Velg startdato for forsikringen",labelProps:{variant:c},tooltipProps:d,errorLabel:s,name:"datepicker",helpLabel:o,disableBeforeDate:(0,l.Bb)(new Date(Date.now()-i(14))),disableAfterDate:(0,l.Bb)(new Date(Date.now()+i(14))),value:m,onFocus:(e,t,n)=>{console.log("onFocus",{event:e,date:t,meta:n})},onBlur:(e,t,n)=>{(0,l.j3)(e)&&console.log("onBlur",{event:e,date:t,meta:n})},onChange:(e,t,n)=>{u(e.target.value),console.log("onChange",{event:e,date:t,meta:n})},action:{onBlur:e=>{(0,l.j3)(e)&&console.log("action.onBlur",{event:e})},onClick:e=>{console.log("action.onClick",{event:e})}}})},c=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<DatePicker\n    label="Velg startdato for forsikringen"\n    variant="'+((null==n?void 0:n.Variant)||"small")+'"'+(null!=t&&t["Med feil"]?'\n    errorLabel="Du kan ikke velge en dato som har vært"':"")+(null!=t&&t["Med hjelpetekst"]?'\n    helpLabel="Du vil være forsikret fra denne datoen"':"")+(null!=t&&t["Med tooltip"]?'\n    tooltipProps={{ content: "Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært." }}':"")+"\n/>\n"}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var a=n(78217),r=n(41994),l=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),a.length>0&&o.createElement(p,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(26372),r=n.n(a),l=n(70079);const o=e=>{let{className:t,density:n,id:a,...o}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:a,...o})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var a=n(53484),r=n(1386),l=n(26372),o=n.n(l),i=n(70079);const s=e=>{let{children:t,title:n,className:l,startExpanded:s=!1,onClick:c,id:d,...m}=e;const{0:u,1:p}=(0,i.useState)(s),{0:k}=(0,i.useState)((()=>s)),{detailsRef:v,summaryRef:f,contentRef:g,onSummaryClick:E}=(0,r.E)({onOpenChange:(e,t)=>{p(e),c&&c(t,e)},isExpanded:k});return i.createElement("details",{"data-testid":"jkl-accordion-item",...m,className:o()("jkl-accordion-item",l),ref:v,id:d},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:f},n,i.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:k,...v}=e;return a.createElement(r.i,{fullWidth:!0,...v,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(d.S,null,m.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===p.length&&u&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:m.length},u)),p.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);