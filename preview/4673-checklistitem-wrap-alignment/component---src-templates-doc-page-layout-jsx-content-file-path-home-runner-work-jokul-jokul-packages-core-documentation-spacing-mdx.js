"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4215],{6506:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return u},default:function(){return g}});var a=n(64717),l=n(92379),r=n(19198);function s(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,a.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Vi tilbyr CSS- og Sass-variabler, en Sass-mixin, og nytteklasser for\nverdiene i spacing-skalaene til Jøkul. Disse støtter også dynamisk spacing.")),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"I Jøkul har vi en spacing-skala som er basert på pikselstørrelser. Du kan bruke skalaene ved hjelp av CSS- eller Sass-variabler som du kan sette inn i ditt eget stilark, bruke en Sass-mixin, eller bruke nytteklassene direkte på elementer i koden."),"\n",l.createElement(t.h3,null,"Variabler"),"\n",l.createElement(t.p,null,"Sass-variablene kan importeres fra ",l.createElement(t.code,null,"@fremtind/jkl-core/jkl"),". Husk å bruke riktig importsyntaks for byggverktøyet ditt når du importerer. De kan da brukes slik:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n\n.jkl-your-component {\n    padding-left: jkl.$spacing-12;\n}\n')),"\n",l.createElement(t.p,null,"CSS-variablene kan brukes direkte uten noen import, så lenge core-stilene fra Jøkul er i bruk i løsningen din."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".jkl-your-component {\n    margin-top: var(--jkl-spacing-32);\n}\n")),"\n",l.createElement(t.h3,null,"Nytteklasser"),"\n",l.createElement(t.p,null,"Nytteklassene setter en verdi fra spacingskalaene som margin på elementet som har klassen. Det finnes varianter for å sette margin på ",l.createElement(t.code,null,"top"),", ",l.createElement(t.code,null,"right"),", ",l.createElement(t.code,null,"bottom")," og ",l.createElement(t.code,null,"left"),", samt for ",l.createElement(t.code,null,"all"),"e sider. Klassene kan brukes slik:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<div class="jkl-spacing-40--all">\n    <span class="jkl-spacing-12--right">Hallo</span>\n    verden\n</div>\n')),"\n",l.createElement(t.h3,null,"Sass-mixin"),"\n",l.createElement(t.p,null,"Sass-mixinen ",l.createElement(t.code,null,"jkl.spacing()")," fungerer på samme måte som nytteklassene, ved at den setter marginer på elementet som har klassen den brukes i. Du kan sette samme margin på alle sider, eller spesifisere en av sidene ",l.createElement(t.code,null,"top"),", ",l.createElement(t.code,null,"right"),", ",l.createElement(t.code,null,"bottom")," eller ",l.createElement(t.code,null,"left"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n\n.jkl-your-component {\n    @include jkl.spacing("12"); // tilsvarer margin: jkl.$spacing-12;\n}\n\n.jkl-your-component {\n    @include jkl.spacing("40", "top"); // tilsvarer margin-top: jkl.$spacing-40;\n}\n')),"\n",l.createElement(t.h2,null,"Dynamisk spacing"),"\n",l.createElement(t.p,null,"Både CSS-variablene, Sass-mixinen og nytteklassene støtter at spacingen endrer seg etter skjermstørrelse. Det finnes variabler for de mest brukte kombinasjonene, og med mixinen kan du definere kombinasjoner fritt."),"\n",l.createElement(t.p,null,"Der det veksles mellom to størrelser skjer byttet ved overgangen fra liten til mellomstor skjerm, og der det er tre verdier skjer byttene ved henholdsvis liten/mellomstor- og mellomstor/stor-overgangene."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n\n// 16px på små skjermer og 24px på medium skjermer og oppover:\n.jkl-your-component {\n    @include jkl.spacing("16/24");\n}\n\n// 16px på små og mellomstore skjermer og 24px på store skjermer og oppover:\n.jkl-your-component {\n    padding: var(--jkl-spacing-16-16-24);\n}\n\n// 16px på små, 24px på mellomstore, og 32px på store skjermer og oppover:\n.jkl-your-component {\n    @include jkl.spacing("16/24/32", "left");\n}\n')),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'\x3c!-- 32px på små, 40px på mellomstore, og 64px på store skjermer og oppover --\x3e\n<div class="jkl-spacing-32-40-64--top">\n    <span class="jkl-spacing-12">Hallo verden</span>\n</div>\n')),"\n",l.createElement("div",{class:"jkl-spacing-40--top"}),"\n",l.createElement(t.h2,null,"Skala"),"\n",l.createElement(r.r))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)};var c=n(75482),i=n(96036),m=n(59001),p=n(65458),d=n(79379);const u=e=>{let{pageContext:t}=e;return l.createElement(i.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:a,children:r}=e;const{frontmatter:s}=n.page,{types:o}=a;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(p.M1,Object.assign({},s,{versions:a.versions})),t.pathname.includes("komponenter")&&l.createElement(m.c,{variant:"komponent",component:s.title}),l.createElement(p.w5,s),r,o&&l.createElement(c.l,{types:o}))};function g(e){return l.createElement(k,e,l.createElement(o,e))}},19198:function(e,t,n){n.d(t,{r:function(){return o}});var a=n(92379);const l=["2","4","8","12","16","24","32","40","64","104","168"],r=e=>{let{spacing:t}=e;const{0:n,1:l}=(0,a.useState)("N/A"),r="N/A"!==n?parseInt(n)/16:n,s=!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia("(forced-colors: active)").matches;return a.createElement("tr",{className:"jkl-portal-spacing-example-table__row"},a.createElement("td",{"data-header":"Spacing:",className:"jkl-portal-spacing-example-table__data"},a.createElement("div",{className:"jkl-spacing-"+t+"--top",style:{display:"none"},ref:e=>{l(((e,t)=>{var n,a;return e&&(null===(n=window)||void 0===n||null===(a=n.getComputedStyle(e))||void 0===a?void 0:a.getPropertyValue(t))||"N/A"})(e,"margin-top"))}}),a.createElement("div",{"aria-label":t+",  "+n,style:{backgroundColor:s?"CanvasText":"currentColor",width:r+"rem",height:r+"rem"}})),a.createElement("td",{"data-header":"Variabel:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},"jkl.$","spacing-"+t),a.createElement("br",null),a.createElement("code",{className:"jkl-portal-inline-code"},"var(--jkl-spacing-"+t+")")),a.createElement("td",{"data-header":"Pixelverdi:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},n)),a.createElement("td",{"data-header":"Rem:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},r,"rem")))},s=e=>{let{values:t}=e;return a.createElement("table",{className:"jkl-portal-spacing-example-table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Spacing"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Variabel"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Piksler"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Rem"))),a.createElement("tbody",null,t.map(((e,t)=>a.createElement(r,{key:t,spacing:e})))))},o=()=>a.createElement(s,{values:l})},75482:function(e,t,n){n.d(t,{l:function(){return k}});var a=n(96845),l=n(41162),r=n(74797),s=n(92379),o=n(25329);const c=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},p=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,r=n>0,s=a-n>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},d=e=>{const t=e.target,n=t.parentElement;p(t,n)},u=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&p(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(m):[],r=n.props?Object.values(n.props).filter(i):[],c=(e=>{var t,n,a,l,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&s.createElement(o.dn,{className:"jkl-portal-code-block"},c),a.length>0&&s.createElement(u,{props:a}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:r})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return o}});var a=n(48467),l=n(58990),r=n(92379),s=n(25329);const o=e=>{let{variant:t,component:n}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(l.U,null),r.createElement(s.nv,null,c[t].text)),r.createElement(a.r,{href:c[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},c={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return c}});var a=n(80324),l=n.n(a),r=n(24157),s=n(92379),o=n(69215);const c=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,s.useContext)(o.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||c?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return c}});var a=n(99767),l=n(651),r=n(80324),s=n.n(r);const o=["className","density","id"],c=e=>{let{className:t,density:n,id:r}=e,c=(0,a.Z)(e,o);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",t),"data-density":n,id:r},c))}},41162:function(e,t,n){n.d(t,{Q:function(){return p}});var a=n(99767),l=n(651),r=n(42054),s=n(95020),o=n(80324),c=n.n(o),i=n(92379);const m=["children","title","className","startExpanded","onClick","id"],p=e=>{let{children:t,title:n,className:o,startExpanded:p=!1,onClick:d,id:u}=e,k=(0,a.Z)(e,m);const[g,v]=(0,i.useState)(p),[E]=(0,i.useState)((()=>p)),{detailsRef:f,summaryRef:j,contentRef:b,onSummaryClick:h}=(0,s.E)({onOpenChange:(e,t)=>{v(e),d&&d(t,e)},isExpanded:E});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:c()("jkl-accordion-item",o),ref:f,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:j,children:[n,(0,l.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var a=n(92379),l=n(55650),r=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>a.createElement(l.J,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&i(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&i(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return f}});var a=n(92379),l=n(94207),r=n(49309),s=n(36774),o=n(64081),c=n(64483),i=n(42104),m=n(98746),p=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const f=(0,a.forwardRef)(((e,t)=>{var n,p=e,{caption:f,columns:j,emptyTableText:b,rows:h,verticalAlign:y}=p,N=((e,t)=>{var n={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&k)for(var a of k(e))t.indexOf(a)<0&&v.call(e,a)&&(n[a]=e[a]);return n})(p,["caption","columns","emptyTableText","rows","verticalAlign"]);return a.createElement(l.i,(n=((e,t)=>{for(var n in t||(t={}))g.call(t,n)&&E(e,n,t[n]);if(k)for(var n of k(t))v.call(t,n)&&E(e,n,t[n]);return e})({fullWidth:!0},N),d(n,u({ref:t}))),f&&a.createElement(s.R,{srOnly:!0},f),a.createElement(c.s,null,a.createElement(m.S,null,j.map(((e,t)=>a.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===h.length&&b&&a.createElement(m.S,null,a.createElement(o.p,{colSpan:j.length},b)),h.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(o.p,{key:t,"data-th":j[t],verticalAlign:y},e))))))))}));f.displayName="DataTable"}}]);