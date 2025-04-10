"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2994],{26710:function(e,r,n){n.r(r),n.d(r,{DocPageLayout:function(){return k},Head:function(){return u},default:function(){return g}});var l=n(47160),t=n(70079);function a(e){const r=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",a:"a",pre:"pre",h4:"h4",em:"em"},(0,l.ah)(),e.components),{SuccessMessageBox:n,WarningMessageBox:a}=r;return n||i("SuccessMessageBox",!0),a||i("WarningMessageBox",!0),t.createElement(t.Fragment,null,t.createElement("div",{className:"jkl-portal-paragraph"},t.createElement(n,{role:"none presentation",fullWidth:!0,title:"Nye features"},t.createElement("ul",{className:"jkl-list"},t.createElement("li",{className:"jkl-list__item"},"Variabler (også kjent som design tokens) i Sass, TypeScript, CSS og Less"),t.createElement("li",{className:"jkl-list__item"},"Utilityklasser for layout, inspirert av Tailwind")))),"\n",t.createElement("div",{className:"jkl-portal-paragraph"},t.createElement(a,{role:"none presentation",fullWidth:!0,title:"Breaking changes"},t.createElement("ul",{className:"jkl-list"},t.createElement("li",{className:"jkl-list__item"},"Utdaterte farger som har vært merket deprecated lenge er nå fjernet."),t.createElement("li",{className:"jkl-list__item"},"Utilityklasser for farger er fjernet."),t.createElement("li",{className:"jkl-list__item"},t.createElement(r.p,null,"Tilde-prefikset er fjernet i Sass-koden i Jøkul, noe som kanskje vil trenge konfigurasjonsendringer."))))),"\n",t.createElement(r.h2,null,"Hvorfor en breaking change?"),"\n",t.createElement(r.p,null,"Figma har fått en oppgradering nå i sommer, hvor variabler (også kjent som design tokens) er den nye store snakkisen. Vi ønsker å være i forkant, og generere kode basert på de samme variablene."),"\n",t.createElement(r.p,null,"Det samlet seg også del teknisk gjeld i Jøkul som det var på tide å gjøre noe med:"),"\n",t.createElement(r.ul,null,"\n",t.createElement(r.li,null,"TypeScript 5 har vært tilgjengelig en stund, men vi ville vente for ikke å risikere typefeil."),"\n",t.createElement(r.li,null,"Vi har brukt en deprecated feature i Sass, i form av ",t.createElement(r.code,null,"~"),"-prefiks i importer fra ",t.createElement(r.code,null,"node_modules"),"."),"\n",t.createElement(r.li,null,"Farger som ikke er en del av profilen har ligget lenge i kode, merket som deprecated."),"\n",t.createElement(r.li,null,"Vi har hatt et ymse utvalg av utilityklasser, som ikke har vært godt dokumentert eller særlig ergonomiske."),"\n"),"\n",t.createElement(r.h2,null,"Hvordan migrere?"),"\n",t.createElement(r.h3,null,"Fjerning av deprecatede farger"),"\n",t.createElement(r.p,null,"Deprecatede fargevariabler er slettet, uten noen erstatning. Fargene skal ha vært ubrukte lenge. Om du fremdeles bruker dem, må du erstatte dem med andre farger. Hvis du er i tvil, velg ",t.createElement(r.a,{href:"https://jokul.fremtind.no/profil/farger/"},"en av hovedfargene våre"),"."),"\n",t.createElement(r.p,null,"Det gjelder:"),"\n",t.createElement(r.pre,null,t.createElement(r.code,{className:"language-scss"},'jkl.$color-suksess--darkbg;\njkl.$color-info--darkbg;\njkl.$color-advarsel--darkbg;\njkl.$color-feil--darkbg;\njkl.$color-error-color;\njkl.$color-error-color--darkbg;\n\ncolors.varslingsfarger("feil--alt");\ncolors.varslingsfarger("suksess--alt");\n')),"\n",t.createElement(r.h3,null,"Fjerning av utility-klasser for farger"),"\n",t.createElement(r.p,null,"Disse CSS-klassene er fjernet, uten noen direkte erstatning. Om du trenger én konkret farge kan du bruke CSS-variabler (mer om det lenger ned)."),"\n",t.createElement(r.pre,null,t.createElement(r.code,null,".jkl-color-hvit\n.jkl-bgcolor-hvit\n.jkl-color-snohvit\n.jkl-bgcolor-snohvit\n.jkl-color-sand\n.jkl-bgcolor-sand\n.jkl-color-dis\n.jkl-bgcolor-dis\n.jkl-color-varde\n.jkl-bgcolor-varde\n.jkl-color-svaberg\n.jkl-bgcolor-svaberg\n.jkl-color-stein\n.jkl-bgcolor-stein\n.jkl-color-fjellgra\n.jkl-bgcolor-fjellgra\n.jkl-color-skifer\n.jkl-bgcolor-skifer\n.jkl-color-granitt\n.jkl-bgcolor-granitt\n.jkl-color-svart\n.jkl-bgcolor-svart\n.jkl-color-suksess\n.jkl-bgcolor-suksess\n.jkl-color-info\n.jkl-bgcolor-info\n.jkl-color-advarsel\n.jkl-bgcolor-advarsel\n.jkl-color-feil\n.jkl-bgcolor-feil\n.jkl-color-suksess--darkbg\n.jkl-bgcolor-suksess--darkbg\n.jkl-color-info--darkbg\n.jkl-bgcolor-info--darkbg\n.jkl-color-advarsel--darkbg\n.jkl-bgcolor-advarsel--darkbg\n.jkl-color-feil--darkbg\n.jkl-bgcolor-feil--darbg\n")),"\n",t.createElement(r.h4,null,"Bruk CSS-variabler i stedet for utility-klasser for farger"),"\n",t.createElement(r.p,null,"Om du trenger én konkret farge kan du bruke CSS-variabler."),"\n",t.createElement(r.p,null,"På sikt vil det komme variabler med semantisk betydning, for eksempel for tekstfarge, som automatisk endrer seg med lyst og mørkt tema."),"\n",t.createElement(r.pre,null,t.createElement(r.code,{className:"language-css"},"/** Disse variablene er fremdeles tilgjengelige */\nvar(--jkl-color-svart);\nvar(--jkl-color-granitt);\nvar(--jkl-color-skifer);\nvar(--jkl-color-fjellgra);\nvar(--jkl-color-stein);\nvar(--jkl-color-svaberg);\nvar(--jkl-color-varde);\nvar(--jkl-color-dis);\nvar(--jkl-color-sand);\nvar(--jkl-color-snohvit);\nvar(--jkl-color-hvit);\nvar(--jkl-color-suksess);\nvar(--jkl-color-feil);\nvar(--jkl-color-info);\nvar(--jkl-color-advarsel);\n")),"\n",t.createElement(r.h3,null,"Fjerning av tilde-prefiks i Sass"),"\n",t.createElement(r.p,null,"Tilde-prefikset er fjernet i all Sass-kode. Avhengig av oppsettet ditt kan det hende du\nikke trenger gjøre noe. Om bygget ditt brekker, konfigurer Sass sin ",t.createElement(r.code,null,"loadPaths")," så den\ninkluderer ",t.createElement(r.code,null,"node_modules"),". Om du har konfigurert f. eks. Vite til å tåle tilder i paths kan den konfigurasjonen fjernes."),"\n",t.createElement(r.p,null,"Her er et eksempel på endring i Gulp:"),"\n",t.createElement(r.pre,null,t.createElement(r.code,{className:"language-diff"},' sass({\n+    loadPaths: ["./node_modules"],\n-    importers: [\n-        {\n-            findFileUrl(url) {\n-                if (!url.startsWith("~")) return null;\n-                // Point to the packages node_modules (gulp is invoked in each individual package)\n-                const base = path.join(process.cwd(), "node_modules", "/"); // base must end in /, -otherwise node_modules/ is discarded from the URL.\n-                const resolved = new URL(url.substring(1), pathToFileURL(base));\n-                return resolved;\n-            },\n-        },\n-    ],\n }).on("error", throwSassError),\n')),"\n",t.createElement(r.h2,null,"Variabler"),"\n",t.createElement(r.p,null,"Med variabler i Figma åpner det seg store muligheter i måten vi jobber på."),"\n",t.createElement(r.ul,null,"\n",t.createElement(r.li,null,"Designere og utviklere kan forholde seg til de samme variablene, ikke bare komponenter."),"\n",t.createElement(r.li,null,"Inspectoren i Figma kan vise konkrete variabelnavn, i stedet for en pixelverdi eller farge som utvikler så må finne igjen i kode."),"\n"),"\n",t.createElement(r.p,null,"Rent teknisk vil variabler fra Figma listes opp i en ",t.createElement(r.a,{href:"https://amzn.github.io/style-dictionary/"},"Style Dictionary"),", noe som lar oss generere kode for ulike språk."),"\n",t.createElement(r.p,null,"Vi genererer variabler for:"),"\n",t.createElement(r.ul,null,"\n",t.createElement(r.li,null,"Sass"),"\n",t.createElement(r.li,null,"TypeScript/JavaScript"),"\n",t.createElement(r.li,null,"Less"),"\n",t.createElement(r.li,null,"CSS"),"\n"),"\n",t.createElement(r.p,null,"Du kan lese mer om hvordan ta de i bruk i en egen ",t.createElement(r.a,{href:"/preview/fix--replace-classnames-with-clsx/blog/variabler"},"bloggpost om variabler"),"."),"\n",t.createElement(r.h2,null,"Vind – utilityklasser for layout"),"\n",t.createElement(r.p,null,"På frontendforum har det vært diskusjoner om Tailwind og andre utility-baserte verktøy for CSS. Konsensus har vært at det for ",t.createElement(r.em,null,"layout")," er ganske deilig å ikke måtte navngi og lage egne klasser bare for å få en margin eller standard flex-container."),"\n",t.createElement(r.p,null,"Siden Jøkul tar seg av styling av komponenter, er layout en av de tingene som gjøres mest ute i teamene. For å gjøre det enklere å lage layouter med Jøkuls spacingverdier, har vi laget et subset av Tailwind som er opt-in."),"\n",t.createElement(r.p,null,"Les ",t.createElement(r.a,{href:"/preview/fix--replace-classnames-with-clsx/blog/vind"},"mer om Vind")," i en egen bloggpost."))}var o=function(e){void 0===e&&(e={});const{wrapper:r}=Object.assign({},(0,l.ah)(),e.components);return r?t.createElement(r,e,t.createElement(a,e)):a(e)};function i(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=n(72285),c=n(22756),d=n(95573),m=n(1634);const u=e=>{let{pageContext:r}=e;return t.createElement(c.p,{title:r.title})},k=e=>{let{location:r,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return t.createElement(m.M,{className:"/profil/bildebruk"===r.pathname?"jkl-portal__main--no-margin":void 0},t.createElement(d.M1,Object.assign({},o,{versions:l.versions})),t.createElement(d.w5,o),a,i&&t.createElement(s.l,{types:i}))};function g(e){return t.createElement(k,e,t.createElement(o,e))}},72285:function(e,r,n){n.d(r,{l:function(){return g}});var l=n(78217),t=n(41994),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var r;return null===(r=e.declarations)||void 0===r?void 0:r.some((e=>e.fileName.includes("node_modules")))},d=e=>{var r;return null===(r=e.declarations)||void 0===r?void 0:r.some((r=>"children"===e.name||!r.fileName.includes("node_modules")))},m=(e,r)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:t}=r,a=n>0,o=l-n>t;r.classList.toggle("left-shadow",a),r.classList.toggle("right-shadow",o)},u=e=>{const r=e.target,n=r.parentElement;m(r,n)},k=e=>{let{props:r}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const r=new window.MutationObserver((r=>{r.forEach((r=>{if("attributes"===r.type&&"hidden"===r.attributeName){const r=e.querySelector(".jkl-portal-api-docs-table__table");r&&m(r,e)}}))})),l=n.current.parentElement.parentElement;r.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=r,l.map((e=>{var r,n;return[e.name?s(e.name):"",e.description,null!==(r=e.defaultValue)&&void 0!==r&&r.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:r}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(r).map((e=>{let[r,n]=e;const l=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var r,n,l,t,a,o;return e.description||null!==(r=e.tags)&&void 0!==r&&r.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(t=e.tags)||void 0===t||null===(a=t.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(t.Q,{title:r,key:r,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(k,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(k,{props:a})))}))))}},1634:function(e,r,n){n.d(r,{M:function(){return s}});var l=n(26372),t=n.n(l),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:r,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:t()("jkl-portal__main",r),id:"innhold"},n)}},78217:function(e,r,n){n.d(r,{U:function(){return a}});var l=n(53048),t=n(70079);const a=e=>{let{className:r,density:n,id:a,...o}=e;return t.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,l.Z)("jkl-accordion",r),"data-density":n,id:a,...o})}},41994:function(e,r,n){n.d(r,{Q:function(){return i}});var l=n(53484),t=n(1386),a=n(53048),o=n(70079);const i=e=>{let{children:r,title:n,className:i,startExpanded:s=!1,onClick:c,id:d,...m}=e;const{0:u,1:k}=(0,o.useState)(s),{0:g}=(0,o.useState)((()=>s)),{detailsRef:p,summaryRef:v,contentRef:f,onSummaryClick:j}=(0,t.E)({onOpenChange:(e,r)=>{k(e),c&&c(r,e)},isExpanded:g});return o.createElement("details",{"data-testid":"jkl-accordion-item",...m,className:(0,a.Z)("jkl-accordion-item",i),ref:p,id:d},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:v},n,o.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f},o.createElement("div",{className:"jkl-accordion-item__content"},r)))}},87505:function(e,r,n){n.d(r,{w:function(){return m}});var l=n(70079),t=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,l.forwardRef)(((e,r)=>{let{caption:n,columns:m,emptyTableText:u,rows:k,verticalAlign:g,...p}=e;return l.createElement(t.i,{fullWidth:!0,...p,ref:r},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(d.S,null,m.map(((e,r)=>l.createElement(c.x,{key:r,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===k.length&&u&&l.createElement(d.S,null,l.createElement(i.p,{colSpan:m.length},u)),k.map(((e,r)=>l.createElement(d.S,{key:r},e.map(((e,r)=>l.createElement(i.p,{key:r,"data-th":m[r],verticalAlign:g},e))))))))}));m.displayName="DataTable"}}]);