"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3286],{65425:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return c},default:function(){return k}});var r=n(47160),a=n(70079);function l(e){const t=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",em:"em",h3:"h3",strong:"strong"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Automatisk dark mode bytter tema på løsninger bygget med Jøkul, basert på inn­stillingene på brukerens mobil\neller data­maskin. Her er noen tips for å gjøre din løsning klar for dette.")),"\n",a.createElement(t.h2,null,"Hjelp! Jeg vil ikke!"),"\n",a.createElement(t.p,null,"Aller først: Hvis du vil oppgradere til siste versjon av Jøkul, men ikke ennå er klar for å aktivere automatisk dark mode, lar det seg likevel gjøre! Bare sørg for at løsningen din rendres inne i et element med følgende attributter satt:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<div class="jkl" data-theme="light" />\n')),"\n",a.createElement(t.p,null,"Da vil applikasjonen ",a.createElement(t.em,null,"alltid")," vises i lyst tema. Du kan selvfølgelig også spesifisere ",a.createElement(t.em,null,"mørkt")," tema på denne måten om du heller vil det. Merk at du også kan sette tema på enkeltdeler av løsningen din med ",a.createElement(t.code,null,"data-theme"),"-attributten."),"\n",a.createElement(t.h2,null,"Ting å huske på når du designer for dark mode"),"\n",a.createElement(t.p,null,"Dark mode setter Granitt som bakgrunnsfarge og Snøhvit som tekstfarge på løsningen. Det blir imidlertid ",a.createElement(t.em,null,"ikke")," automatisk byttet bakgrunnsfarge på seksjoner der man har aktivt satt en bakgrunnsfarge (f.eks. felter som er uthevet med mørkere toner). For disse må man finne en passende bakgrunnsfarge for dark mode, som sørger for å gi tilsvarende kontrast mot Granitt bakgrunn."),"\n",a.createElement(t.p,null,"Husk også på at skygger ikke vil synes mot mørke bakgrunner, og at felter som er utheves med skygge derfor bør utheves på annen måte i dark mode. For eksempel kan man bruke omriss eller endring i bakgrunnsfarge."),"\n",a.createElement(t.p,null,"Hvis det er deler av løsningen din som ",a.createElement(t.em,null,"alltid")," skal vises i mørkt tema må du sørge for at bakgrunnen har ønsket kontrast mot Granitt bakgrunnsfarge, så den ikke går i ett med resten av løsningen i dark mode."),"\n",a.createElement(t.h2,null,"Verktøy for å utvikle med dark mode"),"\n",a.createElement(t.p,null,"Vi har forsøkt å gjøre det så enkelt som mulig å utvikle løsninger med tanke på dark mode. Som standard vil alle Jøkul-komponentene automatisk bytte mellom lyst og mørkt tema basert på brukerens preferanser. For helt enkle løsninger er det dermed ikke sikkert man må gjøre noe ekstra arbeid!"),"\n",a.createElement(t.h3,null,"Overstyre automatisk bytte"),"\n",a.createElement(t.p,null,"Du kan overstyre det automatiske byttet ved å sette attributten ",a.createElement(t.code,null,"data-theme")," på elementer i DOMet. Det er også mulig å nøste seksjoner med forskjellig tema inne i hverandre."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'<div className="jkl din-app">\n    // Dette innholdet bytter automatisk tema\n    <div data-theme="dark">\n        // Dette innholdet er alltid i mørkt tema\n        <div data-theme="light">/* Dette innholdet er alltid lyst, selv om det er inne i en div med mørkt tema */</div>\n    </div>\n</div>\n')),"\n",a.createElement(t.h3,null,"Gjøre spesifikke endringer for dark mode"),"\n",a.createElement(t.p,null,"I noen tilfeller holder det ikke med de automatiske endringene av bakgrunns- og tekstfarge, for eksempel når man har felter med en annen bakgrunnsfarge enn standard. For å gjøre det enklere å løse disse tilfellene har vi laget mixins som er tilgjengelige fra ",a.createElement(t.code,null,"jkl-core"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'@import "@fremtind/jkl-core/jkl";\n\n@include jkl.helper-light-mode-variables {\n    --my-custom-background-color: #{jkl.$color-varde};\n}\n@include jkl.helper-dark-mode-variables {\n    --my-custom-background-color: #{jkl.$color-skifer};\n}\n\n.my-fancy-component {\n    background-color: var(--my-custom-background-color);\n    background-color: jkl.$color-varde; // Husk å ta høyde for IE om du må støtte det\n}\n')),"\n",a.createElement(t.h3,null,"Håndtere elementer som alltid skal ha mørkt tema"),"\n",a.createElement(t.p,null,"Noen løsninger har elementer som alltid skal vises med mørkt tema, også når resten av applikasjonen er i lyst tema. For disse må du huske å sette bakgrunns- og tekstfarge spesifikt, samt å markere at den er låst til mørkt tema:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},"// MyDarkComponent.scss\n\n.my-dark-component {\n    background-color: jkl.$color-granitt;\n    color: jkl.$color-snohvit;\n}\n")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'// MyDarkComponent.tsx\n\n<div className="my-dark-component" data-theme="dark">\n    Sammendrag\n    <SummaryTable />\n    <PrimaryButton>Kjøp forsikring</PrimaryButton>\n</div>\n')),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"NB!"),": Dersom du skal støtte Internet Explorer er du nødt til å bruke prop-en ",a.createElement(t.code,null,"inverted")," på komponenter inne i elementer med mørkt tema, siden den automatiske løsningen benytter seg av CSS custom properties"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)};var s=n(72285),i=n(22756),m=n(95573),d=n(1634);const c=e=>{let{pageContext:t}=e;return a.createElement(i.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:i}=r;return a.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(m.M1,Object.assign({},o,{versions:r.versions})),a.createElement(m.w5,o),l,i&&a.createElement(s.l,{types:i}))};function k(e){return a.createElement(u,e,a.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return p}});var r=n(78217),a=n(41994),l=n(87505),o=n(70079),s=n(54656);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},c=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;c(t,n)},k=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&c(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},p=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(m):[],i=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(k,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(k,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),a=n.n(r),l=n(49597),o=n(70079),s=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),a=n.n(r),l=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return l.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return m}});var r=n(53484),a=n(3438),l=n(84490),o=n(26372),s=n.n(o),i=n(70079);const m=e=>{let{children:t,title:n,className:o,startExpanded:m=!1,onClick:d,...c}=e;const u=(0,a.M)("title"),k=(0,a.M)("content"),{0:p,1:g}=(0,i.useState)(m),[v]=(0,l.v)(p,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...c,className:s()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":p})},i.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":p,"aria-controls":k,onClick:e=>{const t=!p;g(t),d&&d(e,t)}},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),i.createElement("div",{id:k,ref:v,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!p},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(70079),a=n(41699),l=n(65174),o=n(6914),s=n(82546),i=n(39126),m=n(66169),d=n(94509);const c=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:c,emptyTableText:u,rows:k,verticalAlign:p,...g}=e;return r.createElement(a.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(d.S,null,c.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===k.length&&u&&r.createElement(d.S,null,r.createElement(s.p,{colSpan:c.length},u)),k.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":c[t],verticalAlign:p},e))))))))}));c.displayName="DataTable"}}]);