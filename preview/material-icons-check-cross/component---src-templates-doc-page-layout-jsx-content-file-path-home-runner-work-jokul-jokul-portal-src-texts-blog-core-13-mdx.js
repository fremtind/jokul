"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3540],{62124:function(e,n,r){r.r(n),r.d(n,{DocPageLayout:function(){return p},Head:function(){return k},default:function(){return g}});var t=r(33156),l=r(7378);function a(e){const n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",a:"a",pre:"pre",h4:"h4",em:"em"},(0,t.RP)(),e.components),{SuccessMessage:r,WarningMessage:a}=n;return r||i("SuccessMessage",!0),a||i("WarningMessage",!0),l.createElement(l.Fragment,null,l.createElement("div",{className:"jkl-portal-paragraph"},l.createElement(r,{role:"none presentation",fullWidth:!0,title:"Nye features"},l.createElement("ul",{className:"jkl-list"},l.createElement("li",{className:"jkl-list__item"},"Variabler (også kjent som design tokens) i Sass, TypeScript, CSS og Less"),l.createElement("li",{className:"jkl-list__item"},"Utilityklasser for layout, inspirert av Tailwind")))),"\n",l.createElement("div",{className:"jkl-portal-paragraph"},l.createElement(a,{role:"none presentation",fullWidth:!0,title:"Breaking changes"},l.createElement("ul",{className:"jkl-list"},l.createElement("li",{className:"jkl-list__item"},"Utdaterte farger som har vært merket deprecated lenge er nå fjernet."),l.createElement("li",{className:"jkl-list__item"},"Utilityklasser for farger er fjernet."),l.createElement("li",{className:"jkl-list__item"},l.createElement(n.p,null,"Tilde-prefikset er fjernet i Sass-koden i Jøkul, noe som kanskje vil trenge konfigurasjonsendringer."))))),"\n",l.createElement(n.h2,null,"Hvorfor en breaking change?"),"\n",l.createElement(n.p,null,"Figma har fått en oppgradering nå i sommer, hvor variabler (også kjent som design tokens) er den nye store snakkisen. Vi ønsker å være i forkant, og generere kode basert på de samme variablene."),"\n",l.createElement(n.p,null,"Det samlet seg også del teknisk gjeld i Jøkul som det var på tide å gjøre noe med:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"TypeScript 5 har vært tilgjengelig en stund, men vi ville vente for ikke å risikere typefeil."),"\n",l.createElement(n.li,null,"Vi har brukt en deprecated feature i Sass, i form av ",l.createElement(n.code,null,"~"),"-prefiks i importer fra ",l.createElement(n.code,null,"node_modules"),"."),"\n",l.createElement(n.li,null,"Farger som ikke er en del av profilen har ligget lenge i kode, merket som deprecated."),"\n",l.createElement(n.li,null,"Vi har hatt et ymse utvalg av utilityklasser, som ikke har vært godt dokumentert eller særlig ergonomiske."),"\n"),"\n",l.createElement(n.h2,null,"Hvordan migrere?"),"\n",l.createElement(n.h3,null,"Fjerning av deprecatede farger"),"\n",l.createElement(n.p,null,"Deprecatede fargevariabler er slettet, uten noen erstatning. Fargene skal ha vært ubrukte lenge. Om du fremdeles bruker dem, må du erstatte dem med andre farger. Hvis du er i tvil, velg ",l.createElement(n.a,{href:"https://jokul.fremtind.no/profil/farger/"},"en av hovedfargene våre"),"."),"\n",l.createElement(n.p,null,"Det gjelder:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-scss"},'jkl.$color-suksess--darkbg;\njkl.$color-info--darkbg;\njkl.$color-advarsel--darkbg;\njkl.$color-feil--darkbg;\njkl.$color-error-color;\njkl.$color-error-color--darkbg;\n\ncolors.varslingsfarger("feil--alt");\ncolors.varslingsfarger("suksess--alt");\n')),"\n",l.createElement(n.h3,null,"Fjerning av utility-klasser for farger"),"\n",l.createElement(n.p,null,"Disse CSS-klassene er fjernet, uten noen direkte erstatning. Om du trenger én konkret farge kan du bruke CSS-variabler (mer om det lenger ned)."),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,".jkl-color-hvit\n.jkl-bgcolor-hvit\n.jkl-color-snohvit\n.jkl-bgcolor-snohvit\n.jkl-color-sand\n.jkl-bgcolor-sand\n.jkl-color-dis\n.jkl-bgcolor-dis\n.jkl-color-varde\n.jkl-bgcolor-varde\n.jkl-color-svaberg\n.jkl-bgcolor-svaberg\n.jkl-color-stein\n.jkl-bgcolor-stein\n.jkl-color-fjellgra\n.jkl-bgcolor-fjellgra\n.jkl-color-skifer\n.jkl-bgcolor-skifer\n.jkl-color-granitt\n.jkl-bgcolor-granitt\n.jkl-color-svart\n.jkl-bgcolor-svart\n.jkl-color-suksess\n.jkl-bgcolor-suksess\n.jkl-color-info\n.jkl-bgcolor-info\n.jkl-color-advarsel\n.jkl-bgcolor-advarsel\n.jkl-color-feil\n.jkl-bgcolor-feil\n.jkl-color-suksess--darkbg\n.jkl-bgcolor-suksess--darkbg\n.jkl-color-info--darkbg\n.jkl-bgcolor-info--darkbg\n.jkl-color-advarsel--darkbg\n.jkl-bgcolor-advarsel--darkbg\n.jkl-color-feil--darkbg\n.jkl-bgcolor-feil--darbg\n")),"\n",l.createElement(n.h4,null,"Bruk CSS-variabler i stedet for utility-klasser for farger"),"\n",l.createElement(n.p,null,"Om du trenger én konkret farge kan du bruke CSS-variabler."),"\n",l.createElement(n.p,null,"På sikt vil det komme variabler med semantisk betydning, for eksempel for tekstfarge, som automatisk endrer seg med lyst og mørkt tema."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-css"},"/** Disse variablene er fremdeles tilgjengelige */\nvar(--jkl-color-svart);\nvar(--jkl-color-granitt);\nvar(--jkl-color-skifer);\nvar(--jkl-color-fjellgra);\nvar(--jkl-color-stein);\nvar(--jkl-color-svaberg);\nvar(--jkl-color-varde);\nvar(--jkl-color-dis);\nvar(--jkl-color-sand);\nvar(--jkl-color-snohvit);\nvar(--jkl-color-hvit);\nvar(--jkl-color-suksess);\nvar(--jkl-color-feil);\nvar(--jkl-color-info);\nvar(--jkl-color-advarsel);\n")),"\n",l.createElement(n.h3,null,"Fjerning av tilde-prefiks i Sass"),"\n",l.createElement(n.p,null,"Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du\nikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin ",l.createElement(n.code,null,"loadPaths")," så den\ninkluderer ",l.createElement(n.code,null,"node_modules"),". Om du har konfigurert f. eks. Vite til å tåle tilder i paths kan den konfigurasjonen fjernes."),"\n",l.createElement(n.p,null,"Her er et eksempel på endring i Gulp:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-diff"},' sass({\n+    loadPaths: ["./node_modules"],\n-    importers: [\n-        {\n-            findFileUrl(url) {\n-                if (!url.startsWith("~")) return null;\n-                // Point to the packages node_modules (gulp is invoked in each individual package)\n-                const base = path.join(process.cwd(), "node_modules", "/"); // base must end in /, -otherwise node_modules/ is discarded from the URL.\n-                const resolved = new URL(url.substring(1), pathToFileURL(base));\n-                return resolved;\n-            },\n-        },\n-    ],\n }).on("error", throwSassError),\n')),"\n",l.createElement(n.h2,null,"Variabler"),"\n",l.createElement(n.p,null,"Med variabler i Figma åpner det seg store muligheter i måten vi jobber på."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Designere og utviklere kan forholde seg til de samme variablene, ikke bare komponenter."),"\n",l.createElement(n.li,null,"Inspectoren i Figma kan vise konkrete variabelnavn, i stedet for en pixelverdi eller farge som utvikler så må finne igjen i kode."),"\n"),"\n",l.createElement(n.p,null,"Rent teknisk vil variabler fra Figma listes opp i en ",l.createElement(n.a,{href:"https://amzn.github.io/style-dictionary/"},"Style Dictionary"),", noe som lar oss generere kode for ulike språk."),"\n",l.createElement(n.p,null,"Vi genererer variabler for:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Sass"),"\n",l.createElement(n.li,null,"TypeScript/JavaScript"),"\n",l.createElement(n.li,null,"Less"),"\n",l.createElement(n.li,null,"CSS"),"\n"),"\n",l.createElement(n.p,null,"Du kan lese mer om hvordan ta de i bruk i en egen ",l.createElement(n.a,{href:"/preview/material-icons-check-cross/blog/variabler"},"bloggpost om variabler"),"."),"\n",l.createElement(n.h2,null,"Vind – utilityklasser for layout"),"\n",l.createElement(n.p,null,"På frontendforum har det vært diskusjoner om Tailwind og andre utility-baserte verktøy for CSS. Konsensus har vært at det for ",l.createElement(n.em,null,"layout")," er ganske deilig å ikke måtte navngi og lage egne klasser bare for å få en margin eller standard flex-container."),"\n",l.createElement(n.p,null,"Siden Jøkul tar seg av styling av komponenter, er layout en av de tingene som gjøres mest ute i teamene. For å gjøre det enklere å lage layouter med Jøkuls spacingverdier, har vi laget et subset av Tailwind som er opt-in."),"\n",l.createElement(n.p,null,"Les ",l.createElement(n.a,{href:"/preview/material-icons-check-cross/blog/vind"},"mer om Vind")," i en egen bloggpost."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.RP)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)};function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=r(68888),c=r(47672),m=r(52948),d=r(38776),u=r(20919);const k=e=>{let{pageContext:n}=e;return l.createElement(c.G,{title:n.title})},p=e=>{let{location:n,data:r,pageContext:t,children:a}=e;const{frontmatter:o}=r.page,{types:i}=t;return l.createElement(u.D,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(d.Ao,Object.assign({},o,{versions:t.versions})),n.pathname.includes("komponenter")&&l.createElement(m.A,{variant:"komponent",component:o.title}),l.createElement(d.f6,o),a,i&&l.createElement(s.N,{types:i}))};function g(e){return l.createElement(p,e,l.createElement(o,e))}},68888:function(e,n,r){r.d(n,{N:function(){return p}});var t=r(88635),l=r(24408),a=r(78022),o=r(7378),i=r(45371);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},d=(e,n)=>{const{scrollLeft:r,scrollWidth:t}=e,{clientWidth:l}=n,a=r>0,o=t-r>l;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",o)},u=e=>{const n=e.target,r=n.parentElement;d(n,r)},k=e=>{let{props:n}=e;const r=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=r.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&d(n,e)}}))})),t=r.current.parentElement.parentElement;n.observe(t,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:r,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(t=n,t.map((e=>{var n,r;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(r=e.type)&&void 0!==r&&r.name?s(e.type.name):""]})))})));var t},p=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(t.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,r]=e;const t=r.props?Object.values(r.props).filter(m):[],a=r.props?Object.values(r.props).filter(c):[],s=(e=>{var n,r,t,l,a,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(r=e.tags)&&void 0!==r&&r.returns?["/**",null===(t=e.description)||void 0===t?void 0:t.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(r);return o.createElement(l.A,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.NG,{className:"jkl-portal-code-block"},s),t.length>0&&o.createElement(k,{props:t}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(k,{props:a})))}))))}},52948:function(e,n,r){r.d(n,{A:function(){return i}});var t=r(77800),l=r(38316),a=r(7378),o=r(45371);const i=e=>{let{variant:n,component:r}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(o.fz,null,s[n].text)),a.createElement(t.N,{href:s[n].link+"+<"+r+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,n,r){r.d(n,{D:function(){return s}});var t=r(3698),l=r.n(t),a=r(94270),o=r(7378),i=r(79197);const s=e=>{let{className:n,children:r}=e;const{prefersReducedMotion:t}=(0,o.useContext)(i.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:t?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:t?0:-20,opacity:0},transition:{duration:t||s?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},r)}},88635:function(e,n,r){r.d(n,{n:function(){return s}});var t=r(45271),l=r(86106),a=r(3698),o=r.n(a);const i=["className","density","id"],s=e=>{let{className:n,density:r,id:a}=e,s=(0,t.A)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",n),"data-density":r,id:a},s))}},24408:function(e,n,r){r.d(n,{A:function(){return d}});var t=r(45271),l=r(86106),a=r(21197),o=r(82455),i=r(3698),s=r.n(i),c=r(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:n,title:r,className:i,startExpanded:d=!1,onClick:u,id:k}=e,p=(0,t.A)(e,m);const[g,v]=(0,c.useState)(d),[f]=(0,c.useState)((()=>d)),{detailsRef:j,summaryRef:b,contentRef:E,onSummaryClick:h}=(0,o.$)({onOpenChange:(e,n)=>{v(e),u&&u(n,e)},isExpanded:f});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},p,{className:s()("jkl-accordion-item",i),ref:j,id:k,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:b,children:[r,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},38316:function(e,n,r){r.d(n,{u:function(){return m}});var t=r(7378),l=r(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,r)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;const m=e=>t.createElement(l.I,((e,n)=>{for(var r in n||(n={}))i.call(n,r)&&c(e,r,n[r]);if(o)for(var r of o(n))s.call(n,r)&&c(e,r,n[r]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,n,r){r.d(n,{b:function(){return j}});var t=r(7378),l=r(10494),a=r(75374),o=r(82462),i=r(60630),s=r(94624),c=r(65759),m=r(21664),d=Object.defineProperty,u=Object.defineProperties,k=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,n,r)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;const j=(0,t.forwardRef)(((e,n)=>{var r,d=e,{caption:j,columns:b,emptyTableText:E,rows:h,verticalAlign:y}=d,_=((e,n)=>{var r={};for(var t in e)g.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&p)for(var t of p(e))n.indexOf(t)<0&&v.call(e,t)&&(r[t]=e[t]);return r})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return t.createElement(l.X,(r=((e,n)=>{for(var r in n||(n={}))g.call(n,r)&&f(e,r,n[r]);if(p)for(var r of p(n))v.call(n,r)&&f(e,r,n[r]);return e})({fullWidth:!0},_),u(r,k({ref:n}))),j&&t.createElement(o.r,{srOnly:!0},j),t.createElement(s.n,null,t.createElement(m.H,null,b.map(((e,n)=>t.createElement(c.A,{key:n,density:"compact",bold:!0},e))))),t.createElement(a.B,null,0===h.length&&E&&t.createElement(m.H,null,t.createElement(i.n,{colSpan:b.length},E)),h.map(((e,n)=>t.createElement(m.H,{key:n},e.map(((e,n)=>t.createElement(i.n,{key:n,"data-th":b[n],verticalAlign:y},e))))))))}));j.displayName="DataTable"}}]);