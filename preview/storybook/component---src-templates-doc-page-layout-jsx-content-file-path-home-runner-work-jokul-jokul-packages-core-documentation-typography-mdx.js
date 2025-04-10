"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7866],{67924:function(e,t,l){l.r(t),l.d(t,{DocPageLayout:function(){return E},Head:function(){return y},default:function(){return f}});var a=l(33156),n=l(7378);const r=e=>{let{text:t,level:l,type:a}=e;return n.createElement("tr",{className:"jkl-typography-example-table__row "+(a?"force-"+a:"")},n.createElement("td",{className:"jkl-typography-example-table__data"},n.createElement("p",{className:"jkl-"+l},t)),n.createElement("td",{"data-header":"Mixin:",className:"jkl-typography-example-table__data"},n.createElement("p",{className:"jkl-small"},n.createElement("code",{className:"jkl-portal-inline-code"},'@include jkl.text-style("'+l+(a?"/"+a:"")+'")'))),!a&&n.createElement("td",{"data-header":"Klasse:",className:"jkl-typography-example-table__data"},n.createElement("p",{className:"jkl-small"},n.createElement("code",{className:"jkl-portal-inline-code"},".jkl-",l))))},s=()=>n.createElement("table",{className:"jkl-typography-example-table"},n.createElement("tr",null,n.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),n.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin"),n.createElement("th",{className:"jkl-typography-example-table__header"},"Utility-klasse")),n.createElement(r,{text:"Title",level:"title"}),n.createElement(r,{text:"Title Small",level:"title-small"}),n.createElement(r,{text:"Heading 1",level:"heading-1"}),n.createElement(r,{text:"Heading 2",level:"heading-2"}),n.createElement(r,{text:"Heading 3",level:"heading-3"}),n.createElement(r,{text:"Heading 4",level:"heading-4"}),n.createElement(r,{text:"Heading 5",level:"heading-5"}),n.createElement(r,{text:"Body",level:"body"}),n.createElement(r,{text:"Small",level:"small"})),i=()=>n.createElement("table",{className:"jkl-typography-example-table","data-layout-density":"compact"},n.createElement("tr",null,n.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),n.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin")),n.createElement(r,{text:"Title",level:"title",type:"small-screen"}),n.createElement(r,{text:"Title Small",level:"title-small",type:"small-screen"}),n.createElement(r,{text:"Heading 1",level:"heading-1",type:"small-screen"}),n.createElement(r,{text:"Heading 2",level:"heading-2",type:"small-screen"}),n.createElement(r,{text:"Heading 3",level:"heading-3",type:"small-screen"}),n.createElement(r,{text:"Heading 4",level:"heading-4",type:"small-screen"}),n.createElement(r,{text:"Heading 5",level:"heading-5",type:"small-screen"}),n.createElement(r,{text:"Body",level:"body",type:"small-screen"}),n.createElement(r,{text:"Small",level:"small",type:"small-screen"})),o=()=>n.createElement("table",{className:"jkl-typography-example-table","data-layout-density":"compact"},n.createElement("tr",null,n.createElement("th",{className:"jkl-typography-example-table__header"},"Stilnavn"),n.createElement("th",{className:"jkl-typography-example-table__header"},"Mixin")),n.createElement(r,{text:"Title",level:"title",type:"large-screen"}),n.createElement(r,{text:"Title Small",level:"title-small",type:"large-screen"}),n.createElement(r,{text:"Heading 1",level:"heading-1",type:"large-screen"}),n.createElement(r,{text:"Heading 2",level:"heading-2",type:"large-screen"}),n.createElement(r,{text:"Heading 3",level:"heading-3",type:"large-screen"}),n.createElement(r,{text:"Heading 4",level:"heading-4",type:"large-screen"}),n.createElement(r,{text:"Heading 5",level:"heading-5",type:"large-screen"}),n.createElement(r,{text:"Body",level:"body",type:"large-screen"}),n.createElement(r,{text:"Small",level:"small",type:"large-screen"}));function c(e){const t=Object.assign({p:"p",h2:"h2",code:"code",a:"a",h3:"h3",h4:"h4"},(0,a.RP)(),e.components),{Ingress:l,InfoMessage:r}=t;return r||d("InfoMessage",!0),l||d("Ingress",!0),n.createElement(n.Fragment,null,n.createElement(l,null,n.createElement(t.p,null,"Vi tilbyr Sass-mixins og utility-klasser for alle de typografiske stilene i\nJøkul.")),"\n",n.createElement(t.h2,null,"Bruk"),"\n",n.createElement(t.p,null,"For å bruke typografistilene kan du velge mellom å bruke utility-klassene direkte, eller å lage din egen klasse hvor du bruker Sass-mixins for å hente inn riktig stil. Vi anbefaler at du bruker mixins til å lage egne klasser når du lager komponenter til løsningen din, og at du bare bruker utility-klassene til løpende tekst og overskrifter."),"\n",n.createElement(t.p,null,"For å bruke mixin-ene må du ha satt opp støtte for Sass i prosjektet ditt, og importere Jøkul der du skal bruke dem, f.eks. slik: ",n.createElement(t.code,null,'@use "@fremtind/jkl-core/jkl";'),". Nøyaktig syntaks kan variere ut fra byggoppsettet ditt."),"\n",n.createElement(t.p,null,"Les mer om regler for typografi ",n.createElement(t.a,{href:"/preview/storybook/profil/typografi"},"under Profilen vår"),"."),"\n",n.createElement(t.h3,null,"Fontskala"),"\n",n.createElement(t.p,null,"Dette er tekststilene som tilbys i Jøkul, og hvordan du bruker dem ved hjelp av mixins eller nytteklasser. Stilene tilpasses automatisk på små skjermer."),"\n",n.createElement("aside",{className:"jkl-portal-paragraph"},n.createElement(r,{role:"none presentation",fullWidth:!0,title:"Om fontskalaen og semantikk"},n.createElement(t.p,null,"Selv om navnene i fontskalaen kanskje ikke gir det inntrykket, så står\ndu fritt til å velge hvilket overskriftsnivå som skal ha hvilket\nutseende. Om du vil bruke ",n.createElement("code",null,"heading-5")," på ",n.createElement("code",null,"h3")," ","\nfordi det ser best ut visuelt, så er det fritt frem for å gjøre det.\nHusk bare at det er en forventning at tekststørrelsen blir mindre for\nhvert overskriftsnivå på siden."))),"\n",n.createElement(s),"\n",n.createElement(t.h3,null,"Manuell styring av variant"),"\n",n.createElement(t.p,null,"I de aller fleste tilfeller skal tekststilene brukes som de er, slik at tekststørrelsen tilpasses brukerens skjerm. I noen tilfeller kan det likevel være riktig å spesifisere varianten av en stil, som for eksempel når man lager en versjon av en komponent for informasjonstette løsninger."),"\n",n.createElement(t.p,null,"For å velge variant må du bruke Sass-mixins, og spesifisere om du vil ha varianten for ",n.createElement(t.code,null,"small-screen")," eller ",n.createElement(t.code,null,"large-screen"),": ",n.createElement(t.code,null,'@include jkl.text-style("body/small-screen");')),"\n",n.createElement(t.h4,null,"Fontskala for små skjermer"),"\n",n.createElement(i),"\n",n.createElement(t.h4,null,"Fontskala for store skjermer"),"\n",n.createElement(o))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?n.createElement(t,e,n.createElement(c,e)):c(e)};function d(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var p=l(68888),u=l(47672),k=l(52948),g=l(38776),v=l(20919);const y=e=>{let{pageContext:t}=e;return n.createElement(u.G,{title:t.title})},E=e=>{let{location:t,data:l,pageContext:a,children:r}=e;const{frontmatter:s}=l.page,{types:i}=a;return n.createElement(v.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},n.createElement(g.Ao,Object.assign({},s,{versions:a.versions})),t.pathname.includes("komponenter")&&n.createElement(k.A,{variant:"komponent",component:s.title}),n.createElement(g.f6,s),r,i&&n.createElement(p.N,{types:i}))};function f(e){return n.createElement(E,e,n.createElement(m,e))}},68888:function(e,t,l){l.d(t,{N:function(){return k}});var a=l(88635),n=l(24408),r=l(78022),s=l(7378),i=l(45371);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:l,scrollWidth:a}=e,{clientWidth:n}=t,r=l>0,s=a-l>n;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},p=e=>{const t=e.target,l=t.parentElement;d(t,l)},u=e=>{let{props:t}=e;const l=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=l.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),a=l.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:l,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,l;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(l=e.type)&&void 0!==l&&l.name?o(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(a.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,l]=e;const a=l.props?Object.values(l.props).filter(m):[],r=l.props?Object.values(l.props).filter(c):[],o=(e=>{var t,l,a,n,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(l=e.tags)&&void 0!==l&&l.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(n=e.tags)||void 0===n||null===(r=n.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(l);return s.createElement(n.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.NG,{className:"jkl-portal-code-block"},o),a.length>0&&s.createElement(u,{props:a}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:r})))}))))}},52948:function(e,t,l){l.d(t,{A:function(){return i}});var a=l(77800),n=l(38316),r=l(7378),s=l(45371);const i=e=>{let{variant:t,component:l}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(n.u,null),r.createElement(s.fz,null,o[t].text)),r.createElement(a.N,{href:o[t].link+"+<"+l+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,l){l.d(t,{D:function(){return o}});var a=l(3698),n=l.n(a),r=l(94270),s=l(7378),i=l(79197);const o=e=>{let{className:t,children:l}=e;const{prefersReducedMotion:a}=(0,s.useContext)(i.M),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.P.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||o?0:.35},className:n()("jkl-portal__main",t),id:"innhold"},l)}},88635:function(e,t,l){l.d(t,{n:function(){return o}});var a=l(45271),n=l(86106),r=l(3698),s=l.n(r);const i=["className","density","id"],o=e=>{let{className:t,density:l,id:r}=e,o=(0,a.A)(e,i);return(0,n.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",t),"data-density":l,id:r},o))}},24408:function(e,t,l){l.d(t,{A:function(){return d}});var a=l(45271),n=l(86106),r=l(21197),s=l(82455),i=l(3698),o=l.n(i),c=l(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:l,className:i,startExpanded:d=!1,onClick:p,id:u}=e,k=(0,a.A)(e,m);const[g,v]=(0,c.useState)(d),[y]=(0,c.useState)((()=>d)),{detailsRef:E,summaryRef:f,contentRef:h,onSummaryClick:b}=(0,s.$)({onOpenChange:(e,t)=>{v(e),p&&p(t,e)},isExpanded:y});return(0,n.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:o()("jkl-accordion-item",i),ref:E,id:u,children:[(0,n.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:f,children:[l,(0,n.jsx)(r.l,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,n.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,n.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,l){l.d(t,{u:function(){return m}});var a=l(7378),n=l(19767),r=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,l)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;const m=e=>a.createElement(n.I,((e,t)=>{for(var l in t||(t={}))i.call(t,l)&&c(e,l,t[l]);if(s)for(var l of s(t))o.call(t,l)&&c(e,l,t[l]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,l){l.d(t,{b:function(){return E}});var a=l(7378),n=l(10494),r=l(75374),s=l(82462),i=l(60630),o=l(94624),c=l(65759),m=l(21664),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,l)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;const E=(0,a.forwardRef)(((e,t)=>{var l,d=e,{caption:E,columns:f,emptyTableText:h,rows:b,verticalAlign:j}=d,x=((e,t)=>{var l={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&v.call(e,a)&&(l[a]=e[a]);return l})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return a.createElement(n.X,(l=((e,t)=>{for(var l in t||(t={}))g.call(t,l)&&y(e,l,t[l]);if(k)for(var l of k(t))v.call(t,l)&&y(e,l,t[l]);return e})({fullWidth:!0},x),p(l,u({ref:t}))),E&&a.createElement(s.r,{srOnly:!0},E),a.createElement(o.n,null,a.createElement(m.H,null,f.map(((e,t)=>a.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.B,null,0===b.length&&h&&a.createElement(m.H,null,a.createElement(i.n,{colSpan:f.length},h)),b.map(((e,t)=>a.createElement(m.H,{key:t},e.map(((e,t)=>a.createElement(i.n,{key:t,"data-th":f[t],verticalAlign:j},e))))))))}));E.displayName="DataTable"}}]);