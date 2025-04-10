"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4215],{9871:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return k}});var a=n(47160),l=n(70079),r=n(14836);function s(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,a.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Vi tilbyr CSS- og Sass-variabler, en Sass-mixin, og nytteklasser for verdiene i spacing-skalaene til Jøkul. Disse\nstøtter også dynamisk spacing.")),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"I Jøkul har vi en spacing-skala som er basert på pikselstørrelser. Du kan bruke skalaene ved hjelp av CSS- eller Sass-variabler som du kan sette inn i ditt eget stilark, bruke en Sass-mixin, eller bruke nytteklassene direkte på elementer i koden."),"\n",l.createElement(t.h3,null,"Variabler"),"\n",l.createElement(t.p,null,"Sass-variablene kan importeres fra ",l.createElement(t.code,null,"~@fremtind/jkl-core/jkl"),". Husk å bruke riktig importsyntaks for byggverktøyet ditt når du importerer. De kan da brukes slik:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/jkl";\n\n.jkl-your-component {\n    padding-left: jkl.$spacing-12;\n}\n')),"\n",l.createElement(t.p,null,"CSS-variablene kan brukes direkte uten noen import, så lenge core-stilene fra Jøkul er i bruk i løsningen din."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".jkl-your-component {\n    margin-top: var(--jkl-spacing-32);\n}\n")),"\n",l.createElement(t.h3,null,"Nytteklasser"),"\n",l.createElement(t.p,null,"Nytteklassene setter en verdi fra spacingskalaene som margin på elementet som har klassen. Det finnes varianter for å sette margin på ",l.createElement(t.code,null,"top"),", ",l.createElement(t.code,null,"right"),", ",l.createElement(t.code,null,"bottom")," og ",l.createElement(t.code,null,"left"),", samt for ",l.createElement(t.code,null,"all"),"e sider. Klassene kan brukes slik:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'<div class="jkl-spacing-40--all">\n    <span class="jkl-spacing-12--right">Hallo</span>\n    verden\n</div>\n')),"\n",l.createElement(t.h3,null,"Sass-mixin"),"\n",l.createElement(t.p,null,"Sass-mixinen ",l.createElement(t.code,null,"jkl.spacing()")," fungerer på samme måte som nytteklassene, ved at den setter marginer på elementet som har klassen den brukes i. Du kan sette samme margin på alle sider, eller spesifisere en av sidene ",l.createElement(t.code,null,"top"),", ",l.createElement(t.code,null,"right"),", ",l.createElement(t.code,null,"bottom")," eller ",l.createElement(t.code,null,"left"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/jkl";\n\n.jkl-your-component {\n    @include jkl.spacing("12"); // tilsvarer margin: jkl.$spacing-12;\n}\n\n.jkl-your-component {\n    @include jkl.spacing("40", "top"); // tilsvarer margin-top: jkl.$spacing-40;\n}\n')),"\n",l.createElement(t.h2,null,"Dynamisk spacing"),"\n",l.createElement(t.p,null,"Både CSS-variablene, Sass-mixinen og nytteklassene støtter at spacingen endrer seg etter skjermstørrelse. Det finnes variabler for de mest brukte kombinasjonene, og med mixinen kan du definere kombinasjoner fritt."),"\n",l.createElement(t.p,null,"Der det veksles mellom to størrelser skjer byttet ved overgangen fra liten til mellomstor skjerm, og der det er tre verdier skjer byttene ved henholdsvis liten/mellomstor- og mellomstor/stor-overgangene."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "~@fremtind/jkl-core/jkl";\n\n// 16px på små skjermer og 24px på medium skjermer og oppover:\n.jkl-your-component {\n    @include jkl.spacing("16/24");\n}\n\n// 16px på små og mellomstore skjermer og 24px på store skjermer og oppover:\n.jkl-your-component {\n    padding: var(--jkl-spacing-16-16-24);\n}\n\n// 16px på små, 24px på mellomstore, og 32px på store skjermer og oppover:\n.jkl-your-component {\n    @include jkl.spacing("16/24/32", "left");\n}\n')),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-html"},'\x3c!-- 32px på små, 40px på mellomstore, og 64px på store skjermer og oppover --\x3e\n<div class="jkl-spacing-32-40-64--top">\n    <span class="jkl-spacing-12">Hallo verden</span>\n</div>\n')),"\n",l.createElement("div",{class:"jkl-spacing-40--top"}),"\n",l.createElement(t.h2,null,"Skala"),"\n",l.createElement(r.r))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)};var o=n(72285),i=n(22756),m=n(95573),p=n(1634);const d=e=>{let{pageContext:t}=e;return l.createElement(i.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:a,children:r}=e;const{frontmatter:s}=n.page,{types:c}=a;return l.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},s,{versions:a.versions})),l.createElement(m.w5,s),r,c&&l.createElement(o.l,{types:c}))};function k(e){return l.createElement(u,e,l.createElement(c,e))}},14836:function(e,t,n){n.d(t,{r:function(){return c}});var a=n(70079);const l=["2","4","8","12","16","24","32","40","64","104","168"],r=e=>{let{spacing:t}=e;const{0:n,1:l}=(0,a.useState)("N/A"),r="N/A"!==n?parseInt(n)/16:n,s=!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia("(forced-colors: active)").matches;return a.createElement("tr",{className:"jkl-portal-spacing-example-table__row"},a.createElement("td",{"data-header":"Spacing:",className:"jkl-portal-spacing-example-table__data"},a.createElement("div",{className:"jkl-spacing-"+t+"--top",style:{display:"none"},ref:e=>{l(((e,t)=>{var n,a;return e&&(null===(n=window)||void 0===n||null===(a=n.getComputedStyle(e))||void 0===a?void 0:a.getPropertyValue(t))||"N/A"})(e,"margin-top"))}}),a.createElement("div",{"aria-label":t+",  "+n,style:{backgroundColor:s?"CanvasText":"currentColor",width:r+"rem",height:r+"rem"}})),a.createElement("td",{"data-header":"Variabel:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},"jkl.$","spacing-"+t),a.createElement("br",null),a.createElement("code",{className:"jkl-portal-inline-code"},"var(--jkl-spacing-"+t+")")),a.createElement("td",{"data-header":"Pixelverdi:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},n)),a.createElement("td",{"data-header":"Rem:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},r,"rem")))},s=e=>{let{values:t}=e;return a.createElement("table",{className:"jkl-portal-spacing-example-table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Spacing"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Variabel"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Piksler"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Rem"))),a.createElement("tbody",null,t.map(((e,t)=>a.createElement(r,{key:t,spacing:e})))))},c=()=>a.createElement(s,{values:l})},72285:function(e,t,n){n.d(t,{l:function(){return u}});var a=n(78217),l=n(41994),r=n(87505),s=n(70079);const c=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:l}=t,r=n>0,s=a-n>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},p=e=>{const t=e.target,n=t.parentElement;m(t,n)},d=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?c(e.type.name):""]})))})));var a},u=e=>{let{types:t}=e;return s.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},s.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),s.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(a.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(i):[],r=n.props?Object.values(n.props).filter(o):[];return s.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},a.length>0&&s.createElement(d,{props:a}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(d,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var a=n(26372),l=n.n(a),r=n(49597),s=n(70079),c=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,s.useContext)(c.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return s}});var a=n(26372),l=n.n(a),r=n(70079);const s=e=>{let{className:t,density:n,...a}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...a})}},41994:function(e,t,n){n.d(t,{Q:function(){return i}});var a=n(53484),l=n(3438),r=n(84490),s=n(26372),c=n.n(s),o=n(70079);const i=e=>{let{children:t,title:n,className:s,startExpanded:i=!1,onClick:m,...p}=e;const d=(0,l.M)("title"),u=(0,l.M)("content"),{0:k,1:g}=(0,o.useState)(i),[E]=(0,r.v)(k,{easing:"exit",timing:"expressive"});return o.createElement("div",{"data-testid":"jkl-accordion-item",...p,className:c()("jkl-accordion-item",s,{"jkl-accordion-item--expanded":k})},o.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":u,onClick:e=>{const t=!k;g(t),m&&m(e,t)}},n,o.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),o.createElement("div",{id:u,ref:E,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return p}});var a=n(70079),l=n(41699),r=n(65174),s=n(6914),c=n(82546),o=n(39126),i=n(66169),m=n(94509);const p=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:d,rows:u,verticalAlign:k,...g}=e;return a.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&a.createElement(s.R,{srOnly:!0},n),a.createElement(o.s,null,a.createElement(m.S,null,p.map(((e,t)=>a.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===u.length&&d&&a.createElement(m.S,null,a.createElement(c.p,{colSpan:p.length},d)),u.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(c.p,{key:t,"data-th":p[t],verticalAlign:k},e))))))))}));p.displayName="DataTable"}}]);