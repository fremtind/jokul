"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3940],{17019:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return k}});var l=t(47160),r=t(70079);function a(e){const n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",strong:"strong",pre:"pre",h3:"h3",a:"a",h4:"h4"},(0,l.ah)(),e.components),{Ingress:t,InfoMessageBox:a}=n;return a||o("InfoMessageBox",!0),t||o("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n.h1,null,"Hvordan teste kodeendringer i Jøkul i ditt eget prosjekt før publisering"),"\n",r.createElement(t,null,r.createElement(n.p,null,"Noen ganger er det vanskelig å sette opp et realistisk testscenario i eksemplene eller i portalen. Her er hvordan du\nkan bruke ",r.createElement("code",null,"link")," for å teste endringer i Jøkul direkte i ditt prosjekt uten å måtte publisere en pakke.")),"\n",r.createElement(n.p,null,"Denne guiden antar at du har en kopi av Jøkul-repositoryet på maskinen din."),"\n",r.createElement(n.p,null,"Guiden dekker både Yarn og NPM."),"\n",r.createElement(n.h2,null,"Hvordan linke pakker"),"\n",r.createElement(n.p,null,"Enten prosjektet ditt bruker Yarn slik som vi gjør i Jøkul, eller om du bruker NPM er stegene identiske. Kort fortalt er det to trinn du trenger å gjøre:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Kjør ",r.createElement(n.code,null,"yarn link")," eller ",r.createElement(n.code,null,"npm link")," fra mappen til pakka du skal teste"),"\n",r.createElement(n.li,null,"Kjør ",r.createElement(n.code,null,"yarn link <pakkenavn>")," eller ",r.createElement(n.code,null,"npm link <pakkenavn>")," i ditt eget prosjekt"),"\n"),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"NB:")," hvis du bruker NPM og skal teste flere pakker (for eksempel både React og CSS av en komponent) så ",r.createElement(n.strong,null,"må")," du kjøre én kommando med alle pakkenavn! Du kan også bruke scriptet ",r.createElement(n.code,null,"yarn linker")," fra toppnivå i Jøkul."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"npm link @fremtind/jkl-summary-table @fremtind/jkl-summary-table-react\n")),"\n",r.createElement(n.p,null,"Om du bruker Yarn kan du kjøre en ",r.createElement(n.code,null,"link"),"-kommando per pakke hvis du vil, men den samme kommandoen som over vil også fungere med ",r.createElement(n.code,null,"yarn")," i stedet for ",r.createElement(n.code,null,"npm"),"."),"\n",r.createElement(n.h3,null,"Hjelpeverktøy for å linke hele Jøkul"),"\n",r.createElement(n.p,null,"Om du skal teste mer enn én pakke kan det være like greit å linke opp hele Jøkul. For å gjøre det enklere har vi et ferdig script som automatiserer dette."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"yarn linker\n")),"\n",r.createElement(n.p,null,"Scriptet vil be deg om en filsti, men ellers skal resten gå av seg selv. Filstien kan være absolutt eller relativ til Jøkul sin ",r.createElement(n.code,null,"package.json"),". Scriptet finner automatisk ut av om du bruker ",r.createElement(n.code,null,"yarn")," eller ",r.createElement(n.code,null,"npm")," i prosjektet ditt."),"\n",r.createElement(n.p,null,"Her er et eksempel på hvordan det kan se ut om du har et prosjekt i samme mappe som Jøkul-repositoriet."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"> $ yarn linker\nyarn run v1.22.18\n$ node scripts/linker.js\nprompt: Hva er filstien til prosjektet hvor du vil teste?:  ../wllm-importkalkulator\nFant package-lock.json. Fortsetter med npm.\nGjør klar pakker for linking...\n")),"\n",r.createElement(n.h3,null,"Linking steg for steg"),"\n",r.createElement("div",{className:"jkl-portal-paragraph"},r.createElement(a,{role:"none presentation",fullWidth:!0},r.createElement("p",{className:"small"},r.createElement(n.p,null,"Guiden bruker ",r.createElement("code",null,"npm")," som eksempel, men de samme kommandoene fungerer med ",r.createElement("code",null,"yarn"),". Bruk\ndet samme verktøyet dere vanligvis bruker i prosjektet du skal teste med.")))),"\n",r.createElement(n.p,null,"Si at vi skal teste endringer i ",r.createElement(n.code,null,"SummaryTable")," lokalt i vår egen app. Vi har endringer i både React og Sass vi vil teste."),"\n",r.createElement(n.p,null,"Start med å åpne en terminal og gå til mappen ",r.createElement(n.code,null,"packages/summary-table"),". Kjør ",r.createElement(n.code,null,"npm link")," i denne mappen."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"cd ~/jokul/packages/summary-table\nnpm link\n")),"\n",r.createElement(n.p,null,"Nå har vi fortalt ",r.createElement(n.code,null,"npm")," at det finnes en pakke ",r.createElement(n.code,null,"@fremtind/jkl-summary-table")," på disk som skal kunne brukes i andre prosjekter."),"\n",r.createElement(n.p,null,"Gå til ",r.createElement(n.code,null,"packages/summary-table-react")," og gjenta kommandoen."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"cd ../summary-table-react\nnpm link\n")),"\n",r.createElement(n.p,null,"Igjen, nå har vi fortalt ",r.createElement(n.code,null,"npm")," at det finnes en pakke ",r.createElement(n.code,null,"@fremtind/jkl-summary-table-react")," på disk som skal kunne brukes i andre prosjekter."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"På tide å bruke dem!")),"\n",r.createElement(n.p,null,"Åpne en terminal og gå til ditt eget prosjekt hvor du vil teste endringene. Kjør ",r.createElement(n.code,null,"npm link"),", men denne gangen oppgir du hvilke pakker du ønsker å bruke."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"cd ~/my-project\nnpm link @fremtind/jkl-summary-table @fremtind/jkl-summary-table-react\n")),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"NB:")," med NPM er det viktig at du lister opp alle pakkene du vil linke i samme kommando. Neste gang du kjører ",r.createElement(n.code,null,"npm link <pakkenavn>")," vil gamle linker fjernes. Yarn har ikke denne oppførselen, så der kan du kjøre ",r.createElement(n.code,null,"yarn link <pakkenavn>")," så mange ganger du vil."),"\n",r.createElement(n.h3,null,"Test endringene dine"),"\n",r.createElement(n.p,null,"Nå skal du kunne teste endringer du har gjort i kontekst av din egen app. Start appen din på vanlig måte og sjekk at endringene du har gjort i Jøkul er med og fungerer som forventet."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"NB:")," du må bygge pakkene i Jøkul for at endringer skal kunne plukkes opp i appen din. Linkede pakker har ikke tilgang på flere filer enn de som vanligvis blir publisert. Med andre ord, ferdigbygget JavaScript, CSS, og Sass-kode."),"\n",r.createElement(n.p,null,"Når du er fornøyd med endringene dine bør du ",r.createElement(n.a,{href:"#rydd-opp-etter-deg"},"rydde opp")," slik at du ikke ender opp i en rar tilstand senere."),"\n",r.createElement(n.h4,null,"Konfigurasjon av Webpack"),"\n",r.createElement(n.p,null,"For dere som bruker Webpack kan dere oppleve at bygget feiler på grunn av en krasj i React, for eksempel \"Cannot read properties of null (reading 'useState')\". Det skjer fordi Webpack blir forvirret av Jøkuls versjon av React på disk, som ligger nærmere den linkede koden."),"\n",r.createElement(n.p,null,"For å fikse problemet må du peke Webpack eksplisit til din versjon av React og React DOM:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},'const path = require("path");\n\nconst config = {\n    resolve: {\n        alias: {\n            // Path her antar at webpack.config.js ligger i samme mappe som node_modules/\n            react$: path.resolve(__dirname, "node_modules/react/index.js"),\n            "react-dom$": path.resolve(__dirname, "node_modules/react-dom/index.js"),\n        },\n    },\n};\n')),"\n",r.createElement(n.h4,null,"Konfigurasjon av Next.js"),"\n",r.createElement(n.p,null,"Next bruker Webpack under panseret, så løsningen for å teste der blir liknende den for Webpack direkte:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-js"},'const path = require("path");\n\nmodule.exports = {\n    webpack: (config) => {\n        config.resolve = {\n            ...config.resolve,\n            alias: {\n                ...config.resolve.alias,\n                react$: path.resolve(__dirname, "node_modules/react/index.js"),\n                "react-dom$": path.resolve(__dirname, "node_modules/react-dom/index.js"),\n            },\n        };\n        return config;\n    },\n};\n')),"\n",r.createElement(n.h4,null,"Endringene mine dukker ikke opp selv om node_modules er lenket opp riktig"),"\n",r.createElement(n.p,null,"Ikke alle byggverktøy ser etter endringer i ",r.createElement(n.code,null,"node_modules"),". Om du ser at filene peker riktig på disk, prøv å restart devserveren din."),"\n",r.createElement(n.p,null,"Om du sliter med at CSS-endringer ikke plukkes opp av appen din, prøv å importer ",r.createElement(n.strong,null,"uminifiserte filer"),". Ved testing med Yarn og Next.js ble det ikke plukket endringer i ",r.createElement(n.code,null,".min.css"),", men ved endring til ",r.createElement(n.code,null,".css")," gikk alt fint."),"\n",r.createElement(n.p,null,"Ved lenking med NPM og Next.js måtte siden refreshes for å få de nyeste endringene."),"\n",r.createElement(n.h3,null,"Rydd opp etter deg"),"\n",r.createElement(n.p,null,"For å unngå at du sitter med en aktiv ",r.createElement(n.code,null,"link")," til en annen versjon av Jøkul enn det prosjektet ditt forventer er det lurt å rydde opp etter deg først som sist. Dette er en reversering av de samme stegene du gjorde for å linke, men denne gangen er kommandoen ",r.createElement(n.code,null,"unlink"),"."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Kjør ",r.createElement(n.code,null,"yarn unlink <pakkenavn>")," eller ",r.createElement(n.code,null,"npm unlink <pakkenavn>")," i ditt eget prosjekt"),"\n",r.createElement(n.li,null,"Kjør ",r.createElement(n.code,null,"yarn unlink")," eller ",r.createElement(n.code,null,"npm unlink")," fra mappen til pakka du skal teste"),"\n"),"\n",r.createElement(n.h3,null,"Opprydding steg for steg"),"\n",r.createElement("div",{className:"jkl-portal-paragraph"},r.createElement(a,{role:"none presentation",fullWidth:!0},r.createElement("p",{className:"small"},r.createElement(n.p,null,"Guiden bruker ",r.createElement("code",null,"npm")," som eksempel, men de samme kommandoene fungerer med ",r.createElement("code",null,"yarn"),". Bruk\ndet samme verktøyet dere vanligvis bruker i prosjektet du skal teste med.")))),"\n",r.createElement(n.p,null,"Åpne en terminal og gå til ditt eget prosjekt hvor du har testet endringene. Kjør ",r.createElement(n.code,null,"npm unlink")," og list opp alle pakkene du har testet. For å forstette på eksempelet vårt med SummaryTable ville det sett slik ut:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"cd ~/my-project\nnpm unlink @fremtind/jkl-summary-table @fremtind/jkl-summary-table-react\n")),"\n",r.createElement(n.p,null,"Nå som det har skjedd endringer i ",r.createElement(n.code,null,"node_modules")," er det en god idé å kjøre ",r.createElement(n.code,null,"npm install"),". Om du bruker Yarn vil du få tips om å kjøre ",r.createElement(n.code,null,"yarn --force-install"),"."),"\n",r.createElement(n.p,null,"Det er også lurt å rydde opp lenkene fra Jøkul-siden."),"\n",r.createElement(n.p,null,"I terminalen, gå til mappen ",r.createElement(n.code,null,"packages/summary-table"),". Kjør ",r.createElement(n.code,null,"npm unlink")," i denne mappen."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"cd ~/jokul/packages/summary-table\nnpm unlink\n")),"\n",r.createElement(n.p,null,"Gå til ",r.createElement(n.code,null,"packages/summary-table-react")," og gjenta kommandoen."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"cd ../summary-table-react\nnpm unlink\n")),"\n",r.createElement(n.p,null,"Takk for at du er med og gjør Jøkul bedre ♥️"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=t(72285),s=t(22756),c=t(95573),d=t(1634);const u=e=>{let{pageContext:n}=e;return r.createElement(s.p,{title:n.title})},p=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:i}=t.page,{types:o}=l;return r.createElement(d.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},i,{versions:l.versions})),r.createElement(c.w5,i),a,o&&r.createElement(m.l,{types:o}))};function k(e){return r.createElement(p,e,r.createElement(i,e))}},72285:function(e,n,t){t.d(n,{l:function(){return k}});var l=t(78217),r=t(41994),a=t(87505),i=t(70079),o=t(54656);const m=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},d=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,i=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",i)},u=e=>{const n=e.target,t=n.parentElement;d(n,t)},p=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&d(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?m(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?m(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?m(e.type.name):""]})))})));var l},k=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(c):[],a=t.props?Object.values(t.props).filter(s):[],m=(e=>{var n,t,l,r,a,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},m&&i.createElement(o.dn,{className:"jkl-portal-code-block"},m),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return m}});var l=t(26372),r=t.n(l),a=t(49597),i=t(70079),o=t(34044);const m=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),m="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||m?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},78217:function(e,n,t){t.d(n,{U:function(){return i}});var l=t(26372),r=t.n(l),a=t(70079);const i=e=>{let{className:n,density:t,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",n),"data-density":t,...l})}},41994:function(e,n,t){t.d(n,{Q:function(){return s}});var l=t(53484),r=t(3438),a=t(84490),i=t(26372),o=t.n(i),m=t(70079);const s=e=>{let{children:n,title:t,className:i,startExpanded:s=!1,onClick:c,...d}=e;const u=(0,r.M)("title"),p=(0,r.M)("content"),{0:k,1:g}=(0,m.useState)(s),[E]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return m.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":k})},m.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const n=!k;g(n),c&&c(e,n)}},t,m.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),m.createElement("div",{id:p,ref:E,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!k},m.createElement("div",{className:"jkl-accordion-item__content"},n)))}},87505:function(e,n,t){t.d(n,{w:function(){return d}});var l=t(70079),r=t(41699),a=t(65174),i=t(6914),o=t(82546),m=t(39126),s=t(66169),c=t(94509);const d=(0,l.forwardRef)(((e,n)=>{let{caption:t,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return l.createElement(r.i,{fullWidth:!0,...g,ref:n},t&&l.createElement(i.R,{srOnly:!0},t),l.createElement(m.s,null,l.createElement(c.S,null,d.map(((e,n)=>l.createElement(s.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(c.S,null,l.createElement(o.p,{colSpan:d.length},u)),p.map(((e,n)=>l.createElement(c.S,{key:n},e.map(((e,n)=>l.createElement(o.p,{key:n,"data-th":d[n],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);