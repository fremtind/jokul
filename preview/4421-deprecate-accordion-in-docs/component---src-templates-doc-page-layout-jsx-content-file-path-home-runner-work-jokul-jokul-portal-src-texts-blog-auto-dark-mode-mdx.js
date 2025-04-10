"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[684],{73263:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return k}});var r=n(33156),a=n(7378);function l(e){const t=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",em:"em",h3:"h3",strong:"strong"},(0,r.RP)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Automatisk dark mode bytter tema på løsninger bygget med Jøkul, basert på inn­stillingene på brukerens mobil\neller data­maskin. Her er noen tips for å gjøre din løsning klar for dette.")),"\n",a.createElement(t.h2,null,"Hjelp! Jeg vil ikke!"),"\n",a.createElement(t.p,null,"Aller først: Hvis du vil oppgradere til siste versjon av Jøkul, men ikke ennå er klar for å aktivere automatisk dark mode, lar det seg likevel gjøre! Bare sørg for at løsningen din rendres inne i et element med følgende attributter satt:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<div class="jkl" data-theme="light" />\n')),"\n",a.createElement(t.p,null,"Da vil applikasjonen ",a.createElement(t.em,null,"alltid")," vises i lyst tema. Du kan selvfølgelig også spesifisere ",a.createElement(t.em,null,"mørkt")," tema på denne måten om du heller vil det. Merk at du også kan sette tema på enkeltdeler av løsningen din med ",a.createElement(t.code,null,"data-theme"),"-attributten."),"\n",a.createElement(t.h2,null,"Ting å huske på når du designer for dark mode"),"\n",a.createElement(t.p,null,"Dark mode setter Granitt som bakgrunnsfarge og Snøhvit som tekstfarge på løsningen. Det blir imidlertid ",a.createElement(t.em,null,"ikke")," automatisk byttet bakgrunnsfarge på seksjoner der man har aktivt satt en bakgrunnsfarge (f.eks. felter som er uthevet med mørkere toner). For disse må man finne en passende bakgrunnsfarge for dark mode, som sørger for å gi tilsvarende kontrast mot Granitt bakgrunn."),"\n",a.createElement(t.p,null,"Husk også på at skygger ikke vil synes mot mørke bakgrunner, og at felter som er utheves med skygge derfor bør utheves på annen måte i dark mode. For eksempel kan man bruke omriss eller endring i bakgrunnsfarge."),"\n",a.createElement(t.p,null,"Hvis det er deler av løsningen din som ",a.createElement(t.em,null,"alltid")," skal vises i mørkt tema må du sørge for at bakgrunnen har ønsket kontrast mot Granitt bakgrunnsfarge, så den ikke går i ett med resten av løsningen i dark mode."),"\n",a.createElement(t.h2,null,"Verktøy for å utvikle med dark mode"),"\n",a.createElement(t.p,null,"Vi har forsøkt å gjøre det så enkelt som mulig å utvikle løsninger med tanke på dark mode. Som standard vil alle Jøkul-komponentene automatisk bytte mellom lyst og mørkt tema basert på brukerens preferanser. For helt enkle løsninger er det dermed ikke sikkert man må gjøre noe ekstra arbeid!"),"\n",a.createElement(t.h3,null,"Overstyre automatisk bytte"),"\n",a.createElement(t.p,null,"Du kan overstyre det automatiske byttet ved å sette attributten ",a.createElement(t.code,null,"data-theme")," på elementer i DOMet. Det er også mulig å nøste seksjoner med forskjellig tema inne i hverandre."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'<div className="jkl din-app">\n    // Dette innholdet bytter automatisk tema\n    <div data-theme="dark">\n        // Dette innholdet er alltid i mørkt tema\n        <div data-theme="light">/* Dette innholdet er alltid lyst, selv om det er inne i en div med mørkt tema */</div>\n    </div>\n</div>\n')),"\n",a.createElement(t.h3,null,"Gjøre spesifikke endringer for dark mode"),"\n",a.createElement(t.p,null,"I noen tilfeller holder det ikke med de automatiske endringene av bakgrunns- og tekstfarge, for eksempel når man har felter med en annen bakgrunnsfarge enn standard. For å gjøre det enklere å løse disse tilfellene har vi laget mixins som er tilgjengelige fra ",a.createElement(t.code,null,"jkl-core"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'@import "@fremtind/jkl-core/jkl";\n\n@include jkl.helper-light-mode-variables {\n    --my-custom-background-color: #{jkl.$color-varde};\n}\n@include jkl.helper-dark-mode-variables {\n    --my-custom-background-color: #{jkl.$color-skifer};\n}\n\n.my-fancy-component {\n    background-color: var(--my-custom-background-color);\n    background-color: jkl.$color-varde; // Husk å ta høyde for IE om du må støtte det\n}\n')),"\n",a.createElement(t.h3,null,"Håndtere elementer som alltid skal ha mørkt tema"),"\n",a.createElement(t.p,null,"Noen løsninger har elementer som alltid skal vises med mørkt tema, også når resten av applikasjonen er i lyst tema. For disse må du huske å sette bakgrunns- og tekstfarge spesifikt, samt å markere at den er låst til mørkt tema:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},"// MyDarkComponent.scss\n\n.my-dark-component {\n    background-color: jkl.$color-granitt;\n    color: jkl.$color-snohvit;\n}\n")),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-tsx"},'// MyDarkComponent.tsx\n\n<div className="my-dark-component" data-theme="dark">\n    Sammendrag\n    <SummaryTable />\n    <PrimaryButton>Kjøp forsikring</PrimaryButton>\n</div>\n')),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"NB!"),": Dersom du skal støtte Internet Explorer er du nødt til å bruke prop-en ",a.createElement(t.code,null,"inverted")," på komponenter inne i elementer med mørkt tema, siden den automatiske løsningen benytter seg av CSS custom properties"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)};var s=n(68888),i=n(47672),m=n(52948),c=n(38776),d=n(20919);const u=e=>{let{pageContext:t}=e;return a.createElement(i.G,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:i}=r;return a.createElement(d.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(c.Ao,Object.assign({},o,{versions:r.versions})),a.createElement(m.A,{variant:"komponent",component:o.title}),a.createElement(c.f6,o),l,i&&a.createElement(s.N,{types:i}))};function k(e){return a.createElement(p,e,a.createElement(o,e))}},68888:function(e,t,n){n.d(t,{N:function(){return k}});var r=n(88635),a=n(24408),l=n(78022),o=n(7378),s=n(45371);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],l=n.props?Object.values(n.props).filter(m):[],i=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.NG,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(p,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(77800),a=n(38316),l=n(7378),o=n(45371);const s=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.u,null),l.createElement(o.fz,null,i[t].text)),l.createElement(r.N,{href:i[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},i={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return i}});var r=n(3698),a=n.n(r),l=n(94270),o=n(7378),s=n(79197);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.M),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return i}});var r=n(45271),a=n(86106),l=n(3698),o=n.n(l);const s=["className","density","id"],i=e=>{let{className:t,density:n,id:l}=e,i=(0,r.A)(e,s);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:l},i))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),a=n(86106),l=n(21197),o=n(82455),s=n(3698),i=n.n(s),m=n(7378);const c=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:s,startExpanded:d=!1,onClick:u,id:p}=e,k=(0,r.A)(e,c);const[g,f]=(0,m.useState)(d),[v]=(0,m.useState)((()=>d)),{detailsRef:b,summaryRef:E,contentRef:h,onSummaryClick:y}=(0,o.$)({onOpenChange:(e,t)=>{f(e),u&&u(t,e)},isExpanded:v});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:i()("jkl-accordion-item",s),ref:b,id:p,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:E,children:[n,(0,a.jsx)(l.l,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return c}});var r=n(7378),a=n(19767),l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement(a.I,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&m(e,n,t[n]);return e})({},e),"");c.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return b}});var r=n(7378),a=n(10494),l=n(75374),o=n(82462),s=n(60630),i=n(94624),m=n(65759),c=n(21664),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:E,emptyTableText:h,rows:y,verticalAlign:j}=d,N=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.X,(n=((e,t)=>{for(var n in t||(t={}))g.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},N),u(n,p({ref:t}))),b&&r.createElement(o.r,{srOnly:!0},b),r.createElement(i.n,null,r.createElement(c.H,null,E.map(((e,t)=>r.createElement(m.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.B,null,0===y.length&&h&&r.createElement(c.H,null,r.createElement(s.n,{colSpan:E.length},h)),y.map(((e,t)=>r.createElement(c.H,{key:t},e.map(((e,t)=>r.createElement(s.n,{key:t,"data-th":E[t],verticalAlign:j},e))))))))}));b.displayName="DataTable"}}]);