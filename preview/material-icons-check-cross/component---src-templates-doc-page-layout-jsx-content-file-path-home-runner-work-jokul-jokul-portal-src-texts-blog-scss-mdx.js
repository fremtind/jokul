"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2642],{53033:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return f}});var r=n(33156),a=n(7378);function l(e){const t=Object.assign({p:"p",code:"code",pre:"pre",a:"a"},(0,r.RP)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Med Jøkul prøver vi å holde oss oppdatert, både kodemessig, depdencecier, design og med andre ting og trender som\nbeveger seg rundt oss. Nå har Sass-teamet kommet med noen oppdatering, som påvirker hvordan man skal bruke sass\nfilene fra Jøkul.")),"\n",a.createElement(t.p,null,"La meg starte med en viktig poeng, dette er nytt, vi har ikke dårlig tid på oss å få fikset dette, men er greit å ta tak i det når det passer. Det er ikke alle implementasjoner av Sass som har full støtte for dette enda, men om du bruker ",a.createElement(t.code,null,"sass")," eller ",a.createElement(t.code,null,"dart-sass")," kan du migrere nå. ",a.createElement(t.code,null,"node-sass")," har ikke støtte per i dag, men om du bruker den bør du vurdere å migrere til referanse implementasjonen ",a.createElement(t.code,null,"sass"),". Det viktige endringen for oss er at ",a.createElement(t.code,null,"@import")," syntaxen gies tilbake til CSS. Per i dag er det måten vi har hentet funksjonalitet og stiler mellom ulike filer, det erstattes nå av ",a.createElement(t.code,null,"@use")," og ",a.createElement(t.code,null,"@forward"),". Dette gjelder kun ved importer av ",a.createElement(t.code,null,".scss")," filer i ",a.createElement(t.code,null,".scss")," filer, det påvirker ikke importen til JavaScript eller import av våre bydge ",a.createElement(t.code,null,".css")," filer."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'@import "@fremtind/jkl-core/_functions.scss";\n\n.my-class {\n    height: rem(300px);\n}\n')),"\n",a.createElement(t.p,null,"Dette blir nå:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/_functions.scss";\n\n.my-class {\n    height: functions.rem(300px);\n}\n')),"\n",a.createElement(t.p,null,"Import blir byttet ut med use, men importen er nå scopet til et namespace, så for å finne funksjonen må den kalles fra namespace. Du kan også sette det namespacet selv om du ønsker."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/mixins/_all.scss" as mix;\n\n.my-class {\n    @include mix.small-device {\n        display: none;\n    }\n}\n')),"\n",a.createElement(t.p,null,"Med nye syntaxen har ikke lengre den importete filen tilgang til variablene satt i fila den blir importert til. Det treffer oss for å sette opp fonten vår. For å fikse det må man gi den importerende fila tilgang via ",a.createElement(t.code,null,"with")," syntaxen."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'$webfonts-dir: "/relative/path/to/font/files";\n@import "@fremtind/jkl-webfonts/webfonts.scss";\n')),"\n",a.createElement(t.p,null,"blir til"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-webfonts/webfonts.scss" with (\n    $webfonts-dir: "/privat/forsikring/open/fonts"\n);\n')),"\n",a.createElement(t.p,null,"Dette er litt kjipt å fikse, men heldigvis har sass-teamet lagd et migrasjonsverktøy som kan fikse de fleste importen (ikke webfonts). ",a.createElement(t.a,{href:"https://sass-lang.com/documentation/cli/migrator"},"https://sass-lang.com/documentation/cli/migrator"),"."),"\n",a.createElement(t.p,null,"For å ta alle scss filene i samme slengen kan du gjøre noe ala dette på linux:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"$ find . -type f -name '*.scss' | xargs npx sass-migrator module --verbose --migrate-deps\n")),"\n",a.createElement(t.p,null,"Vi har ikke migrert Jøkul enda, vi vil gi beskjed før vi gjør det. Vi anbefaler klienter å gjøre denne oppgraderingen ved første tilgjengelige anledning, så trenger man ikke bry seg den dagen det kommer en breaking change på dette."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)};var i=n(68888),o=n(47672),c=n(52948),m=n(38776),d=n(20919);const p=e=>{let{pageContext:t}=e;return a.createElement(o.G,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:s}=n.page,{types:o}=r;return a.createElement(d.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(m.Ao,Object.assign({},s,{versions:r.versions})),t.pathname.includes("komponenter")&&a.createElement(c.A,{variant:"komponent",component:s.title}),a.createElement(m.f6,s),l,o&&a.createElement(i.N,{types:o}))};function f(e){return a.createElement(u,e,a.createElement(s,e))}},68888:function(e,t,n){n.d(t,{N:function(){return f}});var r=n(88635),a=n(24408),l=n(78022),s=n(7378),i=n(45371);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,s=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",s)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(l.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,r,a,l,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(a.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.NG,{className:"jkl-portal-code-block"},o),r.length>0&&s.createElement(u,{props:r}),l.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:l})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),a=n(38316),l=n(7378),s=n(45371);const i=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.u,null),l.createElement(s.fz,null,o[t].text)),l.createElement(r.N,{href:o[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(3698),a=n.n(r),l=n(94270),s=n(7378),i=n(79197);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,s.useContext)(i.M),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(l.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return o}});var r=n(45271),a=n(86106),l=n(3698),s=n.n(l);const i=["className","density","id"],o=e=>{let{className:t,density:n,id:l}=e,o=(0,r.A)(e,i);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",t),"data-density":n,id:l},o))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),a=n(86106),l=n(21197),s=n(82455),i=n(3698),o=n.n(i),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:p,id:u}=e,f=(0,r.A)(e,m);const[g,k]=(0,c.useState)(d),[v]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:E,contentRef:j,onSummaryClick:y}=(0,s.$)({onOpenChange:(e,t)=>{k(e),p&&p(t,e)},isExpanded:v});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:o()("jkl-accordion-item",i),ref:b,id:u,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:E,children:[n,(0,a.jsx)(l.l,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:j,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),a=n(19767),l=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(a.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return b}});var r=n(7378),a=n(10494),l=n(75374),s=n(82462),i=n(60630),o=n(94624),c=n(65759),m=n(21664),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:E,emptyTableText:j,rows:y,verticalAlign:h}=d,w=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.X,(n=((e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},w),p(n,u({ref:t}))),b&&r.createElement(s.r,{srOnly:!0},b),r.createElement(o.n,null,r.createElement(m.H,null,E.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.B,null,0===y.length&&j&&r.createElement(m.H,null,r.createElement(i.n,{colSpan:E.length},j)),y.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":E[t],verticalAlign:h},e))))))))}));b.displayName="DataTable"}}]);