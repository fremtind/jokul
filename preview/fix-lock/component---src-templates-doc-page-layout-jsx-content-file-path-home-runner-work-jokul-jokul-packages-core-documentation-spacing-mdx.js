"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4215],{9871:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return u},default:function(){return k}});var a=n(47160),r=n(70079),l=n(14836);function s(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",code:"code",pre:"pre"},(0,a.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Vi tilbyr CSS- og Sass-variabler, en Sass-mixin, og nytteklasser for verdiene i spacing-skalaene til Jøkul. Disse\nstøtter også dynamisk spacing.")),"\n",r.createElement(t.h2,null,"Bruk"),"\n",r.createElement(t.p,null,"I Jøkul har vi en spacing-skala som er basert på pikselstørrelser. Du kan bruke skalaene ved hjelp av CSS- eller Sass-variabler som du kan sette inn i ditt eget stilark, bruke en Sass-mixin, eller bruke nytteklassene direkte på elementer i koden."),"\n",r.createElement(t.h3,null,"Variabler"),"\n",r.createElement(t.p,null,"Sass-variablene kan importeres fra ",r.createElement(t.code,null,"@fremtind/jkl-core/jkl"),". Husk å bruke riktig importsyntaks for byggverktøyet ditt når du importerer. De kan da brukes slik:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n\n.jkl-your-component {\n    padding-left: jkl.$spacing-12;\n}\n')),"\n",r.createElement(t.p,null,"CSS-variablene kan brukes direkte uten noen import, så lenge core-stilene fra Jøkul er i bruk i løsningen din."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-css"},".jkl-your-component {\n    margin-top: var(--jkl-spacing-32);\n}\n")),"\n",r.createElement(t.h3,null,"Nytteklasser"),"\n",r.createElement(t.p,null,"Nytteklassene setter en verdi fra spacingskalaene som margin på elementet som har klassen. Det finnes varianter for å sette margin på ",r.createElement(t.code,null,"top"),", ",r.createElement(t.code,null,"right"),", ",r.createElement(t.code,null,"bottom")," og ",r.createElement(t.code,null,"left"),", samt for ",r.createElement(t.code,null,"all"),"e sider. Klassene kan brukes slik:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-html"},'<div class="jkl-spacing-40--all">\n    <span class="jkl-spacing-12--right">Hallo</span>\n    verden\n</div>\n')),"\n",r.createElement(t.h3,null,"Sass-mixin"),"\n",r.createElement(t.p,null,"Sass-mixinen ",r.createElement(t.code,null,"jkl.spacing()")," fungerer på samme måte som nytteklassene, ved at den setter marginer på elementet som har klassen den brukes i. Du kan sette samme margin på alle sider, eller spesifisere en av sidene ",r.createElement(t.code,null,"top"),", ",r.createElement(t.code,null,"right"),", ",r.createElement(t.code,null,"bottom")," eller ",r.createElement(t.code,null,"left"),":"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n\n.jkl-your-component {\n    @include jkl.spacing("12"); // tilsvarer margin: jkl.$spacing-12;\n}\n\n.jkl-your-component {\n    @include jkl.spacing("40", "top"); // tilsvarer margin-top: jkl.$spacing-40;\n}\n')),"\n",r.createElement(t.h2,null,"Dynamisk spacing"),"\n",r.createElement(t.p,null,"Både CSS-variablene, Sass-mixinen og nytteklassene støtter at spacingen endrer seg etter skjermstørrelse. Det finnes variabler for de mest brukte kombinasjonene, og med mixinen kan du definere kombinasjoner fritt."),"\n",r.createElement(t.p,null,"Der det veksles mellom to størrelser skjer byttet ved overgangen fra liten til mellomstor skjerm, og der det er tre verdier skjer byttene ved henholdsvis liten/mellomstor- og mellomstor/stor-overgangene."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/jkl";\n\n// 16px på små skjermer og 24px på medium skjermer og oppover:\n.jkl-your-component {\n    @include jkl.spacing("16/24");\n}\n\n// 16px på små og mellomstore skjermer og 24px på store skjermer og oppover:\n.jkl-your-component {\n    padding: var(--jkl-spacing-16-16-24);\n}\n\n// 16px på små, 24px på mellomstore, og 32px på store skjermer og oppover:\n.jkl-your-component {\n    @include jkl.spacing("16/24/32", "left");\n}\n')),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-html"},'\x3c!-- 32px på små, 40px på mellomstore, og 64px på store skjermer og oppover --\x3e\n<div class="jkl-spacing-32-40-64--top">\n    <span class="jkl-spacing-12">Hallo verden</span>\n</div>\n')),"\n",r.createElement("div",{class:"jkl-spacing-40--top"}),"\n",r.createElement(t.h2,null,"Skala"),"\n",r.createElement(l.r))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(s,e)):s(e)};var o=n(72285),i=n(22756),m=n(95573),p=n(1634);const u=e=>{let{pageContext:t}=e;return r.createElement(i.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:s}=n.page,{types:c}=a;return r.createElement(p.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},s,{versions:a.versions})),r.createElement(m.w5,s),l,c&&r.createElement(o.l,{types:c}))};function k(e){return r.createElement(d,e,r.createElement(c,e))}},14836:function(e,t,n){n.d(t,{r:function(){return c}});var a=n(70079);const r=["2","4","8","12","16","24","32","40","64","104","168"],l=e=>{let{spacing:t}=e;const{0:n,1:r}=(0,a.useState)("N/A"),l="N/A"!==n?parseInt(n)/16:n,s=!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia("(forced-colors: active)").matches;return a.createElement("tr",{className:"jkl-portal-spacing-example-table__row"},a.createElement("td",{"data-header":"Spacing:",className:"jkl-portal-spacing-example-table__data"},a.createElement("div",{className:"jkl-spacing-"+t+"--top",style:{display:"none"},ref:e=>{r(((e,t)=>{var n,a;return e&&(null===(n=window)||void 0===n||null===(a=n.getComputedStyle(e))||void 0===a?void 0:a.getPropertyValue(t))||"N/A"})(e,"margin-top"))}}),a.createElement("div",{"aria-label":t+",  "+n,style:{backgroundColor:s?"CanvasText":"currentColor",width:l+"rem",height:l+"rem"}})),a.createElement("td",{"data-header":"Variabel:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},"jkl.$","spacing-"+t),a.createElement("br",null),a.createElement("code",{className:"jkl-portal-inline-code"},"var(--jkl-spacing-"+t+")")),a.createElement("td",{"data-header":"Pixelverdi:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},n)),a.createElement("td",{"data-header":"Rem:",className:"jkl-portal-spacing-example-table__data"},a.createElement("code",{className:"jkl-portal-inline-code"},l,"rem")))},s=e=>{let{values:t}=e;return a.createElement("table",{className:"jkl-portal-spacing-example-table"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Spacing"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Variabel"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Piksler"),a.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Rem"))),a.createElement("tbody",null,t.map(((e,t)=>a.createElement(l,{key:t,spacing:e})))))},c=()=>a.createElement(s,{values:r})},72285:function(e,t,n){n.d(t,{l:function(){return k}});var a=n(78217),r=n(76802),l=n(87505),s=n(70079),c=n(54656);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},p=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,s=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",s)},u=e=>{const t=e.target,n=t.parentElement;p(t,n)},d=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&p(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var a},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(i):[],o=(e=>{var t,n,a,r,l,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(c.dn,{className:"jkl-portal-code-block"},o),a.length>0&&s.createElement(d,{props:a}),l.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(d,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var a=n(26372),r=n.n(a),l=n(49597),s=n(70079),c=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,s.useContext)(c.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return s}});var a=n(26372),r=n.n(a),l=n(70079);const s=e=>{let{className:t,density:n,...a}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...a})}},76802:function(e,t,n){n.d(t,{Q:function(){return o}});var a=n(53484),r=n(26372),l=n.n(r),s=n(70079);const c=e=>{let{onOpenChange:t,startExpanded:n}=e;const a=(0,s.useRef)(null),r=(0,s.useRef)(null),l=(0,s.useRef)(null),c=(0,s.useRef)(null),{0:o,1:i}=(0,s.useState)(!1),{0:m,1:p}=(0,s.useState)(!1);(0,s.useEffect)((()=>{a.current&&(a.current.open=n)}),[]);const u=e=>{a.current&&r.current&&(a.current.open=e,c.current=null,i(!1),p(!1),a.current.style.overflow="",a.current.style.height="")};return{detailsRef:a,summaryRef:r,contentRef:l,onSummaryClick:e=>{e.preventDefault(),a.current&&r.current&&(a.current.style.overflow="hidden",o||!a.current.open?(e=>{a.current&&r.current&&(a.current.style.height="".concat(a.current.offsetHeight,"px"),a.current.open=!0,requestAnimationFrame((()=>{if(a.current&&r.current&&l.current){p(!0),t(!0,e);const n=a.current.offsetHeight,s=r.current.offsetHeight+l.current.offsetHeight;c.current&&c.current.cancel(),a.current.animate&&(c.current=a.current.animate({height:["".concat(n,"px"),"".concat(s,"px")]},{duration:150,easing:"ease"}),c.current.onfinish=()=>u(!0),c.current.oncancel=()=>p(!1))}})))})(e):(m||a.current.open)&&(e=>{if(a.current&&r.current){i(!0),t(!1,e);const n=a.current.offsetHeight,l=r.current.offsetHeight;c.current&&c.current.cancel(),a.current.animate&&(c.current=a.current.animate({height:["".concat(n,"px"),"".concat(l,"px")]},{duration:150,easing:"ease"}),c.current.onfinish=()=>u(!1),c.current.oncancel=()=>i(!1))}})(e))}}},o=e=>{let{children:t,title:n,className:r,startExpanded:o=!1,onClick:i,...m}=e;const{0:p,1:u}=(0,s.useState)(o),{detailsRef:d,summaryRef:k,contentRef:g,onSummaryClick:E}=c({onOpenChange:(e,t)=>{u(e),i&&i(t,e)},startExpanded:o});return s.createElement("details",{"data-testid":"jkl-accordion-item",...m,className:l()("jkl-accordion-item",r),ref:d},s.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:k},n,s.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),s.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return p}});var a=n(70079),r=n(41699),l=n(65174),s=n(6914),c=n(82546),o=n(39126),i=n(66169),m=n(94509);const p=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:u,rows:d,verticalAlign:k,...g}=e;return a.createElement(r.i,{fullWidth:!0,...g,ref:t},n&&a.createElement(s.R,{srOnly:!0},n),a.createElement(o.s,null,a.createElement(m.S,null,p.map(((e,t)=>a.createElement(i.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===d.length&&u&&a.createElement(m.S,null,a.createElement(c.p,{colSpan:p.length},u)),d.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(c.p,{key:t,"data-th":p[t],verticalAlign:k},e))))))))}));p.displayName="DataTable"}}]);