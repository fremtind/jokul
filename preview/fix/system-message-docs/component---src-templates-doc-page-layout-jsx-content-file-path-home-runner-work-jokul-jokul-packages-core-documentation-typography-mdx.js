"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[970],{7012:function(e,t,l){l.r(t),l.d(t,{DocPageLayout:function(){return E},Head:function(){return v},default:function(){return y}});var a=l(47160),n=l(70079);const r=e=>{let{text:t,level:l,type:a}=e;return n.createElement("tr",{className:"jkl-typography-example-table__row "+(a?"force-"+a:"")},n.createElement("td",{className:"jkl-typography-example-table__data"},n.createElement("p",{className:"jkl-"+l},t)),n.createElement("td",{"data-header":"Mixin:",className:"jkl-typography-example-table__data"},n.createElement("p",{className:"jkl-small"},n.createElement("code",{className:"jkl-portal-inline-code"},'@include jkl.text-style("'+l+(a?"/"+a:"")+'")'))),!a&&n.createElement("td",{"data-header":"Klasse:",className:"jkl-typography-example-table__data"},n.createElement("p",{className:"jkl-small"},n.createElement("code",{className:"jkl-portal-inline-code"},".jkl-",l))))},s=()=>n.createElement("table",{className:"jkl-typography-example-table"},n.createElement("tr",null,n.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),n.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin"),n.createElement("th",{className:"jkl-typography-example-table__header"},"Utility-klasse")),n.createElement(r,{text:"Title",level:"title"}),n.createElement(r,{text:"Title Small",level:"title-small"}),n.createElement(r,{text:"Heading 1",level:"heading-1"}),n.createElement(r,{text:"Heading 2",level:"heading-2"}),n.createElement(r,{text:"Heading 3",level:"heading-3"}),n.createElement(r,{text:"Heading 4",level:"heading-4"}),n.createElement(r,{text:"Heading 5",level:"heading-5"}),n.createElement(r,{text:"Body",level:"body"}),n.createElement(r,{text:"Small",level:"small"})),i=()=>n.createElement("table",{className:"jkl-typography-example-table","data-layout-density":"compact"},n.createElement("tr",null,n.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),n.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin")),n.createElement(r,{text:"Title",level:"title",type:"small-screen"}),n.createElement(r,{text:"Title Small",level:"title-small",type:"small-screen"}),n.createElement(r,{text:"Heading 1",level:"heading-1",type:"small-screen"}),n.createElement(r,{text:"Heading 2",level:"heading-2",type:"small-screen"}),n.createElement(r,{text:"Heading 3",level:"heading-3",type:"small-screen"}),n.createElement(r,{text:"Heading 4",level:"heading-4",type:"small-screen"}),n.createElement(r,{text:"Heading 5",level:"heading-5",type:"small-screen"}),n.createElement(r,{text:"Body",level:"body",type:"small-screen"}),n.createElement(r,{text:"Small",level:"small",type:"small-screen"})),c=()=>n.createElement("table",{className:"jkl-typography-example-table","data-layout-density":"compact"},n.createElement("tr",null,n.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),n.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin")),n.createElement(r,{text:"Title",level:"title",type:"large-screen"}),n.createElement(r,{text:"Title Small",level:"title-small",type:"large-screen"}),n.createElement(r,{text:"Heading 1",level:"heading-1",type:"large-screen"}),n.createElement(r,{text:"Heading 2",level:"heading-2",type:"large-screen"}),n.createElement(r,{text:"Heading 3",level:"heading-3",type:"large-screen"}),n.createElement(r,{text:"Heading 4",level:"heading-4",type:"large-screen"}),n.createElement(r,{text:"Heading 5",level:"heading-5",type:"large-screen"}),n.createElement(r,{text:"Body",level:"body",type:"large-screen"}),n.createElement(r,{text:"Small",level:"small",type:"large-screen"}));function o(e){const t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",h3:"h3",h4:"h4"},(0,a.ah)(),e.components),{Ingress:l,InfoMessageBox:r}=t;return r||d("InfoMessageBox",!0),l||d("Ingress",!0),n.createElement(n.Fragment,null,n.createElement(l,null,"Vi tilbyr Sass-mixins og utility-klasser for alle de typografiske stilene i Jøkul."),"\n",n.createElement(t.h2,null,"Bruk"),"\n",n.createElement(t.p,null,"For å bruke typografistilene kan du velge mellom å bruke utility-klassene direkte, eller å lage din egen klasse hvor du bruker Sass-mixins for å hente inn riktig stil. Vi anbefaler at du bruker mixins til å lage egne klasser når du lager komponenter til løsningen din, og at du bare bruker utility-klassene til løpende tekst og overskrifter."),"\n",n.createElement(t.p,null,"For å bruke mixin-ene må du ha satt opp støtte for Sass i prosjektet ditt, og importere Jøkul der du skal bruke dem, f.eks. slik: ",n.createElement(t.code,null,'@use "@fremtind/jkl-core/jkl";'),". Nøyaktig syntaks kan variere ut fra byggoppsettet ditt."),"\n",n.createElement(t.p,null,"Les mer om regler for typografi ",n.createElement(t.a,{href:"/preview/fix/system-message-docs/profil/typografi"},"under Profilen vår"),"."),"\n",n.createElement(t.h3,null,"Fontskala"),"\n",n.createElement(t.p,null,"Dette er tekststilene som tilbys i Jøkul, og hvordan du bruker dem ved hjelp av mixins eller nytteklasser. Stilene tilpasses automatisk på små skjermer."),"\n",n.createElement("aside",{className:"jkl-portal-paragraph"},n.createElement(r,{role:"none presentation",fullWidth:!0,title:"Om fontskalaen og semantikk"},n.createElement(t.p,null,"Selv om navnene i fontskalaen kanskje ikke gir det inntrykket, så står du fritt til å velge hvilket\noverskriftsnivå som skal ha hvilket utseende. Om du vil bruke ",n.createElement("code",null,"heading-5")," på ",n.createElement("code",null,"h3")," fordi\ndet ser best ut visuelt, så er det fritt frem for å gjøre det. Husk bare at det er en forventning at\ntekststørrelsen blir mindre for hvert overskriftsnivå på siden."))),"\n",n.createElement(s),"\n",n.createElement(t.h3,null,"Manuell styring av variant"),"\n",n.createElement(t.p,null,"I de aller fleste tilfeller skal tekststilene brukes som de er, slik at tekststørrelsen tilpasses brukerens skjerm. I noen tilfeller kan det likevel være riktig å spesifisere varianten av en stil, som for eksempel når man lager en versjon av en komponent for informasjonstette løsninger."),"\n",n.createElement(t.p,null,"For å velge variant må du bruke Sass-mixins, og spesifisere om du vil ha varianten for ",n.createElement(t.code,null,"small-screen")," eller ",n.createElement(t.code,null,"large-screen"),": ",n.createElement(t.code,null,'@include jkl.text-style("body/small-screen");')),"\n",n.createElement(t.h4,null,"Fontskala for små skjermer"),"\n",n.createElement(i),"\n",n.createElement(t.h4,null,"Fontskala for store skjermer"),"\n",n.createElement(c))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(o,e)):o(e)};function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var p=l(72285),u=l(22756),k=l(95573),g=l(1634);const v=e=>{let{pageContext:t}=e;return n.createElement(u.p,{title:t.title})},E=e=>{let{location:t,data:l,pageContext:a,children:r}=e;const{frontmatter:s}=l.page,{types:i}=a;return n.createElement(g.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},n.createElement(k.M1,Object.assign({},s,{versions:a.versions})),n.createElement(k.w5,s),r,i&&n.createElement(p.l,{types:i}))};function y(e){return n.createElement(E,e,n.createElement(m,e))}},72285:function(e,t,l){l.d(t,{l:function(){return k}});var a=l(58820),n=l(63571),r=l(87505),s=l(70079),i=l(54656);const c=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:l,scrollWidth:a}=e,{clientWidth:n}=t,r=l>0,s=a-l>n;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},p=e=>{const t=e.target,l=t.parentElement;d(t,l)},u=e=>{let{props:t}=e;const l=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=l.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=l.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:l,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,l;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(l=e.type)&&void 0!==l&&l.name?c(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,l]=e;const a=l.props?Object.values(l.props).filter(m):[],r=l.props?Object.values(l.props).filter(o):[],c=(e=>{var t,l,a,n,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(l=e.tags)&&void 0!==l&&l.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(n=e.tags)||void 0===n||null===(r=n.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(l);return s.createElement(n.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&s.createElement(i.dn,{className:"jkl-portal-code-block"},c),a.length>0&&s.createElement(u,{props:a}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:r})))}))))}},1634:function(e,t,l){l.d(t,{M:function(){return c}});var a=l(26372),n=l.n(a),r=l(49597),s=l(70079),i=l(34044);const c=e=>{let{className:t,children:l}=e;const{prefersReducedMotion:a}=(0,s.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:n()("jkl-portal__main",t),id:"innhold"},l)}},58820:function(e,t,l){l.d(t,{U:function(){return s}});var a=l(35250),n=l(26372),r=l.n(n);const s=e=>{let{className:t,density:l,id:n,...s}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":l,id:n,...s})}},63571:function(e,t,l){l.d(t,{Q:function(){return o}});var a=l(35250),n=l(68998),r=l(1386),s=l(26372),i=l.n(s),c=l(70079);const o=e=>{let{children:t,title:l,className:s,startExpanded:o=!1,onClick:m,id:d,...p}=e;const[u,k]=(0,c.useState)(o),[g]=(0,c.useState)((()=>o)),{detailsRef:v,summaryRef:E,contentRef:y,onSummaryClick:h}=(0,r.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:g});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",s),ref:v,id:d,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[l,(0,a.jsx)(n.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:y,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,l){l.d(t,{w:function(){return d}});var a=l(70079),n=l(41699),r=l(65174),s=l(6914),i=l(82546),c=l(39126),o=l(66169),m=l(94509);const d=(0,a.forwardRef)(((e,t)=>{let{caption:l,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...g}=e;return a.createElement(n.i,{fullWidth:!0,...g,ref:t},l&&a.createElement(s.R,{srOnly:!0},l),a.createElement(c.s,null,a.createElement(m.S,null,d.map(((e,t)=>a.createElement(o.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===u.length&&p&&a.createElement(m.S,null,a.createElement(i.p,{colSpan:d.length},p)),u.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);