"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2967],{94490:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return u}});var a=n(47160),r=n(70079);function l(e){const t=Object.assign({p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Med Jøkul prøver vi å holde oss oppdatert, både kodemessig, depdencecier, design og med andre ting og trender som beveger seg rundt oss. Nå har Sass-teamet kommet med noen oppdatering, som påvirker hvordan man skal bruke sass filene fra Jøkul.")),"\n",r.createElement(t.p,null,"La meg starte med en viktig poeng, dette er nytt, vi har ikke dårlig tid på oss å få fikset dette, men er greit å ta tak i det når det passer. Det er ikke alle implementasjoner av Sass som har full støtte for dette enda, men om du bruker ",r.createElement(t.code,null,"sass")," eller ",r.createElement(t.code,null,"dart-sass")," kan du migrere nå. ",r.createElement(t.code,null,"node-sass")," har ikke støtte per i dag, men om du bruker den bør du vurdere å migrere til referanse implementasjonen ",r.createElement(t.code,null,"sass"),". Det viktige endringen for oss er at ",r.createElement(t.code,null,"@import")," syntaxen gies tilbake til CSS. Per i dag er det måten vi har hentet funksjonalitet og stiler mellom ulike filer, det erstattes nå av ",r.createElement(t.code,null,"@use")," og ",r.createElement(t.code,null,"@forward"),". Dette gjelder kun ved importer av ",r.createElement(t.code,null,".scss")," filer i ",r.createElement(t.code,null,".scss")," filer, det påvirker ikke importen til JavaScript eller import av våre bydge ",r.createElement(t.code,null,".css")," filer."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},"@import '~@fremtind/jkl-core/_functions.scss';\n\n.my-class {\n    height: rem(300px);\n}\n\n")),"\n",r.createElement(t.p,null,"Dette blir nå:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},"@use '~@fremtind/jkl-core/_functions.scss';\n\n.my-class {\n    height: functions.rem(300px);\n}\n\n")),"\n",r.createElement(t.p,null,"Import blir byttet ut med use, men importen er nå scopet til et namespace, så for å finne funksjonen må den kalles fra namespace. Du kan også sette det namespacet selv om du ønsker."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},"@use '~@fremtind/jkl-core/mixins/_all.scss' as mix;\n\n.my-class {\n    @include mix.small-device {\n        display: none;\n    }\n}\n\n")),"\n",r.createElement(t.p,null,"Med nye syntaxen har ikke lengre den importete filen tilgang til variablene satt i fila den blir importert til. Det treffer oss for å sette opp fonten vår. For å fikse det må man gi den importerende fila tilgang via ",r.createElement(t.code,null,"with")," syntaxen."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},'$webfonts-dir: "/relative/path/to/font/files";\n@import "~@fremtind/jkl-webfonts/webfonts.scss";\n')),"\n",r.createElement(t.p,null,"blir til"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-scss"},"@use '~@fremtind/jkl-webfonts/webfonts.scss' with (\n    $webfonts-dir: \"/privat/forsikring/open/fonts\"\n);\n")),"\n",r.createElement(t.p,null,"Dette er litt kjipt å fikse, men heldigvis har sass-teamet lagd et migrasjonsverktøy som kan fikse de fleste importen (ikke webfonts). ",r.createElement(t.a,{href:"https://sass-lang.com/documentation/cli/migrator"},"https://sass-lang.com/documentation/cli/migrator"),"."),"\n",r.createElement(t.p,null,"For å ta alle scss filene i samme slengen kan du gjøre noe ala dette på linux:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"$ find . -type f -name '*.scss' | xargs npx sass-migrator module --verbose --migrate-deps\n")),"\n",r.createElement(t.p,null,"Vi har ikke migrert Jøkul enda, vi vil gi beskjed før vi gjør det. Vi anbefaler klienter å gjøre denne oppgraderingen ved første tilgjengelige anledning, så trenger man ikke bry seg den dagen det kommer en breaking change på dette."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)};var i=n(72285),o=n(22756),c=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(o.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:s}=n.page,{types:o}=a;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},s,{versions:a.versions})),r.createElement(c.w5,s),l,o&&r.createElement(i.l,{types:o}))};function u(e){return r.createElement(p,e,r.createElement(s,e))}},72285:function(e,t,n){n.d(t,{l:function(){return u}});var a=n(78217),r=n(41994),l=n(87505),s=n(70079);const i=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,s=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",s)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var a},u=e=>{let{types:t}=e;return s.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},s.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),s.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(a.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(c):[],l=n.props?Object.values(n.props).filter(o):[];return s.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},a.length>0&&s.createElement(p,{props:a}),l.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var a=n(26372),r=n.n(a),l=n(49597),s=n(70079),i=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return s}});var a=n(26372),r=n.n(a),l=n(70079);const s=e=>{let{className:t,density:n,...a}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...a})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(53484),r=n(3438),l=n(84490),s=n(26372),i=n.n(s),o=n(70079);const c=e=>{let{children:t,title:n,className:s,startExpanded:c=!1,onClick:m,...d}=e;const p=(0,r.M)("title"),u=(0,r.M)("content"),{0:g,1:f}=(0,o.useState)(c),[k]=(0,l.v)(g,{easing:"exit",timing:"expressive"});return o.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",s,{"jkl-accordion-item--expanded":g})},o.createElement("button",{id:p,className:"jkl-accordion-item__title",type:"button","aria-expanded":g,"aria-controls":u,onClick:e=>{const t=!g;f(t),m&&m(e,t)}},n,o.createElement(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})),o.createElement("div",{id:u,ref:k,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":p,hidden:!g},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var a=n(70079),r=n(41699),l=n(65174),s=n(6914),i=n(82546),o=n(39126),c=n(66169),m=n(94509);const d=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:u,verticalAlign:g,...f}=e;return a.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&a.createElement(s.R,{srOnly:!0},n),a.createElement(o.s,null,a.createElement(m.S,null,d.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===u.length&&p&&a.createElement(m.S,null,a.createElement(i.p,{colSpan:d.length},p)),u.map(((e,t)=>a.createElement(m.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:g},e))))))))}));d.displayName="DataTable"}}]);