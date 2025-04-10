"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5071],{573:function(e,t,n){n.d(t,{I:function(){return i},i:function(){return s}});var r=n(70079),l=n(8102);const a=e=>{let{variant:t}=e;const n=(e=>{switch(e){case"Info":return l._1;case"Success":return l.rD;case"Warning":return l.wq;case"Error":return l.nS;default:return l.Vp}})(t);return r.createElement(n,{className:"jkl-spacing-2xs--right jkl-spacing-2xs--top"},(e=>{switch(e){case"Info":return"Info";case"Success":return"Suksess";case"Warning":return"Advarsel";case"Error":return"Feil";default:return"Emne"}})(t))},s=()=>r.createElement("div",null,r.createElement(a,null),r.createElement(a,{variant:"Info"}),r.createElement(a,{variant:"Success"}),r.createElement(a,{variant:"Warning"}),r.createElement(a,{variant:"Error"})),i=()=>'\n    <Tag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Emne</Tag>\n    <InfoTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Info Tag</InfoTag>\n    <SuccessTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Success Tag</SuccessTag>\n    <WarningTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Warning Tag</WarningTag>\n    <ErrorTag className="jkl-spacing-2xs--right jkl-spacing-2xs--top">Error Tag</ErrorTag>\n'},8102:function(e,t,n){n.d(t,{Vp:function(){return i},_1:function(){return o},nS:function(){return c},rD:function(){return u},wq:function(){return m}});var r=n(26372),l=n.n(r),a=n(70079);function s(e){const t=t=>{let{className:n,density:r,children:s,...i}=t;return a.createElement("span",Object.assign({className:l()("jkl-tag",{"jkl-tag--info":"info"===e,"jkl-tag--error":"error"===e,"jkl-tag--warning":"warning"===e,"jkl-tag--success":"success"===e},n),"data-density":r},i),s)};return t.displayName=function(e){switch(e){case"info":return"InfoTag";case"error":return"ErrorTag";case"warning":return"WarningTag";case"success":return"SuccessTag";default:return"Tag"}}(e),t}const i=s(),o=s("info"),c=s("error"),m=s("warning"),u=s("success")},50376:function(e,t,n){n.d(t,{E:function(){return u}});var r=n(18887),l=n(26372),a=n.n(l),s=n(22354),i=n.n(s),o=n(79636),c=n(49597),m=n(70079);const u=e=>{let{className:t,children:n,caption:l,disableFullscreen:s}=e;const{0:u,1:p}=(0,m.useState)(!1),d=(0,m.useRef)(null);(0,r.W)(d,"Escape",(()=>p(!1)));return m.createElement(i(),{active:u},m.createElement("div",{className:a()("jkl-portal-image",t)},m.createElement(o.M,null,u&&m.createElement(c.E.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:1},className:"jkl-portal-image__bg-blur"})),m.createElement(c.E.button,{ref:d,layout:!0,onClick:()=>p(!u),className:a()("jkl-portal-image__content",{"jkl-portal-image__content--fullscreen":u,"jkl-portal-paragraph":!u}),disabled:s,role:s?"none presentation":void 0},m.createElement(c.E.div,{layout:!0,className:"jkl-portal-image__img"},n),!s&&!u&&m.createElement("p",{className:"jkl small"},l&&l," Klikk for å se større",l&&".")),u&&m.createElement("div",{className:"jkl-portal-image__content jkl-portal-paragraph"},m.createElement(c.E.div,{layout:!0,className:"jkl-portal-image__img"},n),m.createElement("div",{className:"small"}," "))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(26372),l=n.n(r),a=n(49597),s=n(70079),i=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,s.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},38600:function(e,t,n){n.r(t),n.d(t,{Head:function(){return x}});var r=n(34723),l=n(94989),a=n(56733),s=n(74016),i=n(41699),o=n(39126),c=n(94509),m=n(66169),u=n(65174),p=n(82546),d=n(14549),k=n(38850),g=n(70079),f=n(64900),E=n(67840),h=n(573),v=n(50376),b=n(22756),j=n(54656),N=n(61894),S=n(72628),w=n(1634);const y="Praktisk info for utviklere",x=()=>g.createElement(b.p,{title:y});t.default=()=>{const e=(0,N.D9)(),{menuItems:t}=(0,S.dw)();return g.createElement(w.M,null,g.createElement(j.V1,null,y),g.createElement(j.SX,null,"Designsystemet blir både en ekstern avhengighet og et prosjekt du er med på å påvirke. Derfor er det et par ting det kan være verdt å vite om."),g.createElement(j.Ih,null,"Jøkul er open source"),g.createElement(j.nv,null,"Jøkul oppfører seg som alle andre eksterne avhengigheter du har i prosjektet ditt, som for eksempel React. Du installerer og oppgraderer Jøkul-pakker på akkurat samme måte. Jøkul er open source og offentlig tilgjengelig, så du trenger ikke sette opp noe eget for å få tilgang – det bare funker."),g.createElement(E.d,null,"~ $ npm i @fremtind/jkl-core @fremtind/jkl-webfonts"),g.createElement(j.Ih,null,"Se hvilke pakker som finnes"),g.createElement(j.nv,null,"Jøkuls kode er delt inn i"," ",g.createElement(l.r,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"mange pakker"),", to pakker per komponent. Vi skiller på CSS-pakker og React-pakker i Jøkul for å kunne bruke stilene selv om prosjektet ikke bruker React, selv om det er sterkt anbefalt."),g.createElement(j.nv,null,"Når du bruker React-komponenten blir stilpakken automatisk installert som en avhengighet. Du trenger med andre ord"," ",g.createElement(j.cK,null,"ikke")," både React- og stilpakken i"," ",g.createElement(j.ZM,null,"package.json"),"."),g.createElement(j.Ih,null,"Hvordan starter jeg et prosjekt med Jøkul?"),g.createElement(j.nv,null,"Om du skal lage et helt nytt prosjekt med Jøkul har vi"," ",g.createElement(d.Link,{className:"jkl-link",to:"/guider/utvikler-nytt-prosjekt"},"en guide for det"),"."),g.createElement(j.Ih,null,"Brekkpunkter"),g.createElement(j.nv,null,"Jøkul har tre brekkpunkter: medium, large, extra large. Disse punktene blir brukt innad i Jøkul, men begrenser ikke hva du kan bruke i din egen app. Det vil si at typografi og spacing i komponenter vil forandre seg ved disse verdiene, samtidig som du står fritt til å bruke egne brekkpunkter for å tilpasse layouten i prosjektet ditt etter egne behov."),g.createElement("div",{className:"jkl-portal-paragraph"},g.createElement(i.i,{fullWidth:!0},g.createElement(o.s,null,g.createElement(c.S,null,g.createElement(m.x,null,"Størrelse"),g.createElement(m.x,null,"Verdi"),g.createElement(m.x,null,"Benevnelse"))),g.createElement(u.R,null,g.createElement(c.S,null,g.createElement(p.p,null,"Medium"),g.createElement(p.p,null,"680px"),g.createElement(p.p,null,"md")),g.createElement(c.S,null,g.createElement(p.p,null,"Large"),g.createElement(p.p,null,"1200px"),g.createElement(p.p,null,"l")),g.createElement(c.S,null,g.createElement(p.p,null,"Extra Large"),g.createElement(p.p,null,"1600px"),g.createElement(p.p,null,"xl"))))),g.createElement(j.Ih,null,"Dokumentasjon rett i editoren"),g.createElement(j.nv,null,"Jøkul er skrevet i TypeScript og kommer med typedefinisjoner som en del av pakka. Editors med god TypeScript-støtte som Visual Studio Code hjelper deg med autoutfylling av propnavn og viser deg dokumentasjon i kontekst av det du jobber med."),g.createElement(v.E,null,g.createElement(k.S,{src:"../../../static/assets/kom-i-gang/solarized-light.png",alt:"Skjermbilde som viser et eksempel på dokumentasjon vist i Visual Studio Code",__imageData:n(13736)})),g.createElement(j.Ih,null,"Kodeeksempler i portalen"),g.createElement(j.nv,null,"Alle"," ",g.createElement(d.Link,{className:"jkl-link",to:"/komponenter/accordion"},"komponentene")," ","har ett eller flere eksempler av typen du ser under. De viser hvordan du bruker dem, inkludert kodeeksempler. Bruk Vis kode-knappen for å se hvordan du kan lage eksemplet du ser på. Du finner også en oversikt over alle propsene til komponentene nederst på siden."),g.createElement(f.nT,{title:"Tag",component:h.i,codeExample:h.I}),g.createElement(j.Ih,null,"Endringslogger og annet snadder"),g.createElement(j.nv,null,"Du finner endringslogger og mer teknisk dokumentasjon i hver enkelt pakke på GitHub. Det er spesielt tre filer det verdt å vite om, her eksemplifisert gjennom pakken"," ",g.createElement(j.ZM,null,"@fremtind/jkl-core"),":"),g.createElement(a.QI,{className:"jkl-portal-ul"},g.createElement(s.HC,null,g.createElement(l.r,{href:"https://github.com/fremtind/jokul/blob/main/packages/core/README.md"},"README")," ","for hjelp til installering og import"),g.createElement(s.HC,null,g.createElement(l.r,{href:"https://github.com/fremtind/jokul/blob/main/packages/core/CHANGELOG.md"},"CHANGELOG")," ","for endringshistorikk"),g.createElement(s.HC,null,g.createElement(l.r,{href:"https://github.com/fremtind/jokul/blob/main/packages/core/MIGRATION.md"},"MIGRATION")," ","for hjelp ved ",g.createElement("i",null,"breaking changes"))),g.createElement(j.nv,null,"Til slutt kommer det månedlige oppsummeringer på bloggen som det er verdt å følge med på. Sleng den i RSS-leseren din, så går du ikke glipp av noe."),g.createElement(j.Ih,null,"Nyttige utviklerverktøy"),g.createElement(j.nv,null,"Du har kanskje noen favoritter selv, men ta gjerne en titt på disse verktøyene når du jobber i eget prosjekt."),g.createElement(j.nv,{className:"jkl-bold"},"Visual Studio Code extensions"),g.createElement(a.QI,{className:"jkl-portal-ul"},g.createElement(s.HC,null,g.createElement(l.r,{href:"https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare"},"Live Share")," ","gjør det mulig å dele editoren med én eller flere kolleger i sanntid"),g.createElement(s.HC,null,g.createElement(l.r,{href:"https://marketplace.visualstudio.com/items?itemName=SomewhatStationery.some-sass"},"Some Sass")," ","gir deg IntelliSense og forhåndsvisning av SassDoc som brukes i Jøkul"),g.createElement(s.HC,null,g.createElement(l.r,{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier")," ","for å få formatering ved lagring"),g.createElement(s.HC,null,"Når du skal jobbe i Jøkul bør du ha konfigurert VS Code til å foreslå relative importer, så skal forslag bli riktig med pakkenavn i stedet for paths")),g.createElement(j.nv,{className:"jkl-bold"},"Linting og testing"),g.createElement(a.QI,{className:"jkl-portal-ul"},g.createElement(s.HC,null,g.createElement(l.r,{href:"https://eslint.org"},"ESLint")," og tilhørende"," ",g.createElement(l.r,{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"extension til VS Code")),g.createElement(s.HC,null,g.createElement(l.r,{href:"https://stylelint.io"},"Stylelint")),g.createElement(s.HC,null,g.createElement(l.r,{href:"https://jestjs.io"},"Jest")," med axe-core via"," ",g.createElement(l.r,{href:"https://github.com/nickcolley/jest-axe#readme"},"jest-axe")),g.createElement(s.HC,null,g.createElement(l.r,{href:"https://www.cypress.io"},"Cypress")," for ende-til-ende og visuelle regresjonstester via"," ",g.createElement(l.r,{href:"https://github.com/meinaart/cypress-plugin-snapshots"},"cypress-plugin-snapshots"))),g.createElement(j.nv,{className:"jkl-bold"},"Andre verktøy"),g.createElement(a.QI,{className:"jkl-portal-ul"},g.createElement(s.HC,null,"Vi har flere"," ",g.createElement(d.Link,{className:"jkl-link",to:"/universell-utforming/verktoy"},"verktøytips for test av universell utforming"),"."),g.createElement(s.HC,null,g.createElement(l.r,{href:"https://github.com/nvm-sh/nvm"},"Node Version Manager")," ","hjelper med håndtering av Node")),g.createElement(r.J,{to:"/profil/designprinsipper",component:d.Link,title:"Neste: Profil",description:"Nå som du kjenner til det praktiske er det på tide å bli kjent med profilen",style:{maxWidth:"25rem"},onClick:()=>{e.setCurrentItem(t[1])}}))}},13736:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8e8","images":{"fallback":{"src":"/preview/4371-select-focus/static/eaf40853b7dd58ba2f1e96f0e1351b9b/64505/solarized-light.png","srcSet":"/preview/4371-select-focus/static/eaf40853b7dd58ba2f1e96f0e1351b9b/0c557/solarized-light.png 220w,\\n/preview/4371-select-focus/static/eaf40853b7dd58ba2f1e96f0e1351b9b/107e7/solarized-light.png 440w,\\n/preview/4371-select-focus/static/eaf40853b7dd58ba2f1e96f0e1351b9b/64505/solarized-light.png 880w","sizes":"(min-width: 880px) 880px, 100vw"},"sources":[{"srcSet":"/preview/4371-select-focus/static/eaf40853b7dd58ba2f1e96f0e1351b9b/9dfca/solarized-light.webp 220w,\\n/preview/4371-select-focus/static/eaf40853b7dd58ba2f1e96f0e1351b9b/45b56/solarized-light.webp 440w,\\n/preview/4371-select-focus/static/eaf40853b7dd58ba2f1e96f0e1351b9b/4dadf/solarized-light.webp 880w","type":"image/webp","sizes":"(min-width: 880px) 880px, 100vw"}]},"width":880,"height":421.00000000000006}')}}]);