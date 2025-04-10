"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2176],{27223:function(e,t,n){n.d(t,{Q:function(){return s},l:function(){return i}});var r=n(7378),l=n(14617);const a=e=>{let{variant:t}=e;const n=(e=>{switch(e){case"Info":return l.Pi;case"Success":return l.wV;case"Warning":return l.Xn;case"Error":return l.Fr;default:return l.vw}})(t);return r.createElement(n,{className:"jkl-spacing-2xs--right jkl-spacing-2xs--top"},(e=>{switch(e){case"Info":return"Info";case"Success":return"Suksess";case"Warning":return"Advarsel";case"Error":return"Feil";default:return"Emne"}})(t))},i=()=>r.createElement("div",null,r.createElement(a,null),r.createElement(a,{variant:"Info"}),r.createElement(a,{variant:"Success"}),r.createElement(a,{variant:"Warning"}),r.createElement(a,{variant:"Error"})),s=()=>'\n    <Tag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Emne</Tag>\n    <InfoTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Info Tag</InfoTag>\n    <SuccessTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Success Tag</SuccessTag>\n    <WarningTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Warning Tag</WarningTag>\n    <ErrorTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Error Tag</ErrorTag>\n'},14617:function(e,t,n){n.d(t,{Fr:function(){return u},Pi:function(){return m},Xn:function(){return d},vw:function(){return c},wV:function(){return k}});var r=n(45271),l=n(3698),a=n.n(l),i=n(7378);const s=["className","density","children"];function o(e){const t=t=>{let{className:n,density:l,children:o}=t,c=(0,r.A)(t,s);return i.createElement("span",Object.assign({className:a()("jkl-tag",{"jkl-tag--info":"info"===e,"jkl-tag--error":"error"===e,"jkl-tag--warning":"warning"===e,"jkl-tag--success":"success"===e},n),"data-density":l},c),o)};return t.displayName=function(e){switch(e){case"info":return"InfoTag";case"error":return"ErrorTag";case"warning":return"WarningTag";case"success":return"SuccessTag";default:return"Tag"}}(e),t}const c=o(),m=o("info"),u=o("error"),d=o("warning"),k=o("success")},77733:function(e,t,n){n.d(t,{_:function(){return u}});var r=n(8898),l=n(3698),a=n.n(l),i=n(61111),s=n.n(i),o=n(25520),c=n(94270),m=n(7378);const u=e=>{let{className:t,children:n,caption:l,disableFullscreen:i}=e;const{0:u,1:d}=(0,m.useState)(!1),k=(0,m.useRef)(null);(0,r.x)(k,"Escape",(()=>d(!1)));return m.createElement(s(),{active:u},m.createElement("div",{className:a()("jkl-portal-image",t)},m.createElement(o.N,null,u&&m.createElement(c.P.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:1},className:"jkl-portal-image__bg-blur"})),m.createElement(c.P.button,{ref:k,layout:!0,onClick:()=>d(!u),className:a()("jkl-portal-image__content",{"jkl-portal-image__content--fullscreen":u,"jkl-portal-paragraph":!u}),disabled:i,role:i?"none presentation":void 0},m.createElement(c.P.div,{layout:!0,className:"jkl-portal-image__img"},n),!i&&!u&&m.createElement("p",{className:"jkl small"},l&&l," Klikk for å se større",l&&".")),u&&m.createElement("div",{className:"jkl-portal-image__content jkl-portal-paragraph"},m.createElement(c.P.div,{layout:!0,className:"jkl-portal-image__img"},n),m.createElement("div",{className:"small"}," "))))}},20919:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(3698),l=n.n(r),a=n(94270),i=n(7378),s=n(79197);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(s.M),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},3748:function(e,t,n){n.r(t),n.d(t,{Head:function(){return x}});var r=n(58453),l=n(77800),a=n(43842),i=n(99469),s=n(10494),o=n(94624),c=n(21664),m=n(65759),u=n(75374),d=n(60630),k=n(28914),p=n(70251),g=n(7378),f=n(85898),E=n(17943),h=n(27223),v=n(77733),b=n(47672),j=n(45371),N=n(43079),y=n(97257),w=n(20919);const S="Praktisk info for utviklere",x=()=>g.createElement(b.G,{title:S});t.default=()=>{const e=(0,N.hi)(),{menuItems:t}=(0,y.ro)();return g.createElement(w.D,null,g.createElement(j.sT,null,S),g.createElement(j.Gu,null,"Designsystemet blir både en ekstern avhengighet og et prosjekt du er med på å påvirke. Derfor er det et par ting det kan være verdt å vite om."),g.createElement(j.OU,null,"Jøkul er open source"),g.createElement(j.fz,null,"Jøkul oppfører seg som alle andre eksterne avhengigheter du har i prosjektet ditt, som for eksempel React. Du installerer og oppgraderer Jøkul-pakker på akkurat samme måte. Jøkul er open source og offentlig tilgjengelig, så du trenger ikke sette opp noe eget for å få tilgang – det bare funker."),g.createElement(E.N,null,"~ $ npm i @fremtind/jkl-core @fremtind/jkl-webfonts"),g.createElement(j.OU,null,"Se hvilke pakker som finnes"),g.createElement(j.fz,null,"Jøkuls kode er delt inn i"," ",g.createElement(l.N,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"mange pakker"),", to pakker per komponent. Vi skiller på CSS-pakker og React-pakker i Jøkul for å kunne bruke stilene selv om prosjektet ikke bruker React, selv om det er sterkt anbefalt."),g.createElement(j.fz,null,"Når du bruker React-komponenten blir stilpakken automatisk installert som en avhengighet. Du trenger med andre ord"," ",g.createElement(j.OH,null,"ikke")," både React- og stilpakken i"," ",g.createElement(j.R0,null,"package.json"),"."),g.createElement(j.OU,null,"Hvordan starter jeg et prosjekt med Jøkul?"),g.createElement(j.fz,null,"Om du skal lage et helt nytt prosjekt med Jøkul har vi"," ",g.createElement(k.Link,{className:"jkl-link",to:"/guider/utvikler-nytt-prosjekt"},"en guide for det"),"."),g.createElement(j.OU,null,"Brekkpunkter"),g.createElement(j.fz,null,"Jøkul har tre brekkpunkter: medium, large, extra large. Disse punktene blir brukt innad i Jøkul, men begrenser ikke hva du kan bruke i din egen app. Det vil si at typografi og spacing i komponenter vil forandre seg ved disse verdiene, samtidig som du står fritt til å bruke egne brekkpunkter for å tilpasse layouten i prosjektet ditt etter egne behov."),g.createElement("div",{className:"jkl-portal-paragraph"},g.createElement(s.X,{fullWidth:!0},g.createElement(o.n,null,g.createElement(c.H,null,g.createElement(m.A,null,"Størrelse"),g.createElement(m.A,null,"Verdi"),g.createElement(m.A,null,"Benevnelse"))),g.createElement(u.B,null,g.createElement(c.H,null,g.createElement(d.n,null,"Medium"),g.createElement(d.n,null,"680px"),g.createElement(d.n,null,"md")),g.createElement(c.H,null,g.createElement(d.n,null,"Large"),g.createElement(d.n,null,"1200px"),g.createElement(d.n,null,"l")),g.createElement(c.H,null,g.createElement(d.n,null,"Extra Large"),g.createElement(d.n,null,"1600px"),g.createElement(d.n,null,"xl"))))),g.createElement(j.OU,null,"Dokumentasjon rett i editoren"),g.createElement(j.fz,null,"Jøkul er skrevet i TypeScript og kommer med typedefinisjoner som en del av pakka. Editors med god TypeScript-støtte som Visual Studio Code hjelper deg med autoutfylling av propnavn og viser deg dokumentasjon i kontekst av det du jobber med."),g.createElement(v._,null,g.createElement(p.S,{src:"../../../static/assets/kom-i-gang/solarized-light.png",alt:"Skjermbilde som viser et eksempel på dokumentasjon vist i Visual Studio Code",__imageData:n(66140)})),g.createElement(j.OU,null,"Kodeeksempler i portalen"),g.createElement(j.fz,null,"Alle"," ",g.createElement(k.Link,{className:"jkl-link",to:"/komponenter/accordion"},"komponentene")," ","har ett eller flere eksempler av typen du ser under. De viser hvordan du bruker dem, inkludert kodeeksempler. Bruk Vis kode-knappen for å se hvordan du kan lage eksemplet du ser på. Du finner også en oversikt over alle propsene til komponentene nederst på siden."),g.createElement(f.eP,{title:"Tag",component:h.l,codeExample:h.Q}),g.createElement(j.OU,null,"Endringslogger og annet snadder"),g.createElement(j.fz,null,"Du finner endringslogger og mer teknisk dokumentasjon i hver enkelt pakke på GitHub. Det er spesielt tre filer det verdt å vite om, her eksemplifisert gjennom pakken"," ",g.createElement(j.R0,null,"@fremtind/jkl-core"),":"),g.createElement(a.Xy,{className:"jkl-portal-ul"},g.createElement(i.ck,null,g.createElement(l.N,{href:"https://github.com/fremtind/jokul/blob/main/packages/core/README.md"},"README")," ","for hjelp til installering og import"),g.createElement(i.ck,null,g.createElement(l.N,{href:"https://github.com/fremtind/jokul/blob/main/packages/core/CHANGELOG.md"},"CHANGELOG")," ","for endringshistorikk"),g.createElement(i.ck,null,g.createElement(l.N,{href:"https://github.com/fremtind/jokul/blob/main/packages/core/MIGRATION.md"},"MIGRATION")," ","for hjelp ved ",g.createElement("i",null,"breaking changes"))),g.createElement(j.fz,null,"Til slutt kommer det månedlige oppsummeringer på bloggen som det er verdt å følge med på. Sleng den i RSS-leseren din, så går du ikke glipp av noe."),g.createElement(j.OU,null,"Nyttige utviklerverktøy"),g.createElement(j.fz,null,"Du har kanskje noen favoritter selv, men ta gjerne en titt på disse verktøyene når du jobber i eget prosjekt."),g.createElement(j.fz,{className:"jkl-bold"},"Visual Studio Code extensions"),g.createElement(a.Xy,{className:"jkl-portal-ul"},g.createElement(i.ck,null,g.createElement(l.N,{href:"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare"},"Live Share")," ","gjør det mulig å dele editoren med én eller flere kolleger i sanntid"),g.createElement(i.ck,null,g.createElement(l.N,{href:"https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass"},"Some Sass")," ","gir deg IntelliSense og forhåndsvisning av SassDoc som brukes i Jøkul"),g.createElement(i.ck,null,g.createElement(l.N,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier")," ","for å få formatering ved lagring"),g.createElement(i.ck,null,"Når du skal jobbe i Jøkul bør du ha konfigurert VS Code til å foreslå relative importer, så skal forslag bli riktig med pakkenavn i stedet for paths")),g.createElement(j.fz,{className:"jkl-bold"},"Linting og testing"),g.createElement(a.Xy,{className:"jkl-portal-ul"},g.createElement(i.ck,null,g.createElement(l.N,{href:"https://eslint.org"},"ESLint")," og tilhørende"," ",g.createElement(l.N,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"extension til VS Code")),g.createElement(i.ck,null,g.createElement(l.N,{href:"https://stylelint.io"},"Stylelint")),g.createElement(i.ck,null,g.createElement(l.N,{href:"https://jestjs.io"},"Jest")," med axe-core via"," ",g.createElement(l.N,{href:"https://github.com/nickcolley/jest-axe#readme"},"jest-axe")),g.createElement(i.ck,null,g.createElement(l.N,{href:"https://www.cypress.io"},"Cypress")," for ende-til-ende og visuelle regresjonstester via"," ",g.createElement(l.N,{href:"https://github.com/meinaart/cypress-plugin-snapshots"},"cypress-plugin-snapshots"))),g.createElement(j.fz,{className:"jkl-bold"},"Andre verktøy"),g.createElement(a.Xy,{className:"jkl-portal-ul"},g.createElement(i.ck,null,"Vi har flere"," ",g.createElement(k.Link,{className:"jkl-link",to:"/universell-utforming/verktoy"},"verktøytips for test av universell utforming"),"."),g.createElement(i.ck,null,g.createElement(l.N,{href:"https://github.com/nvm-sh/nvm"},"Node Version Manager")," ","hjelper med håndtering av Node")),g.createElement(r.Y,{to:"/profil/designprinsipper",component:k.Link,title:"Neste: Profil",description:"Nå som du kjenner til det praktiske er det på tide å bli kjent med profilen",style:{maxWidth:"25rem"},onClick:()=>{e.setCurrentItem(t[1])}}))}},66140:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8e8","images":{"fallback":{"src":"/preview/4421-deprecate-accordion-in-docs/static/eaf40853b7dd58ba2f1e96f0e1351b9b/64505/solarized-light.png","srcSet":"/preview/4421-deprecate-accordion-in-docs/static/eaf40853b7dd58ba2f1e96f0e1351b9b/0c557/solarized-light.png 220w,\\n/preview/4421-deprecate-accordion-in-docs/static/eaf40853b7dd58ba2f1e96f0e1351b9b/107e7/solarized-light.png 440w,\\n/preview/4421-deprecate-accordion-in-docs/static/eaf40853b7dd58ba2f1e96f0e1351b9b/64505/solarized-light.png 880w","sizes":"(min-width: 880px) 880px, 100vw"},"sources":[{"srcSet":"/preview/4421-deprecate-accordion-in-docs/static/eaf40853b7dd58ba2f1e96f0e1351b9b/9dfca/solarized-light.webp 220w,\\n/preview/4421-deprecate-accordion-in-docs/static/eaf40853b7dd58ba2f1e96f0e1351b9b/45b56/solarized-light.webp 440w,\\n/preview/4421-deprecate-accordion-in-docs/static/eaf40853b7dd58ba2f1e96f0e1351b9b/4dadf/solarized-light.webp 880w","type":"image/webp","sizes":"(min-width: 880px) 880px, 100vw"}]},"width":880,"height":421.00000000000006}')}}]);