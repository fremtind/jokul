"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8532],{57948:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return p},default:function(){return k}});var r=n(47160),l=n(70079),a=n(78217),i=n(76802);function o(e){const t=Object.assign({ul:"ul",li:"li",p:"p",h2:"h2",h3:"h3",a:"a",em:"em",h4:"h4",img:"img",code:"code"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,"Her er høydepunktene fra Jøkul i august."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Figma-biblioteket er bygget opp fra bunnen av med rykende ferske Figma-features"),"\n",l.createElement(t.li,null,"Select har fått et oppdatert design basert på farger, uten ikoner"),"\n",l.createElement(t.li,null,"Animasjonsverdier (easingkurver og varigheter) er dokumentert i Figma"),"\n",l.createElement(t.li,null,"Fokusringen rundt lenker for tastaturbrukere har blitt litt mer luftig"),"\n"),"\n",l.createElement(t.p,null,"Og en drøss med mindre forbedringer og feilrettinger."),"\n",l.createElement(t.p,null,"Ellers jobber Jøkul-teamet med å lande nytt design for kompakte varianter av komponenter i kode. Et førsteutkast er allerede ute i Figma-verden, så det er muligheter for å bli med på designfinpussen om du vil."),"\n",l.createElement(t.h2,null,"Nytt Figma-bibliotek"),"\n",l.createElement(t.p,null,"Etter flere år med utvikling av Jøkul i design og kode har mye endret seg. Figma-biblioteket har gått gjennom mange iterasjoner. Over tid har kvaliteten og kontinuiteten fra komponent til komponent forvitret, og biblioteket har ikke holdt tritt med koden."),"\n",l.createElement(t.p,null,'Det var rett og slett på tide å "rydde i Figma-boden".'),"\n",l.createElement(t.h3,null,"Hvorfor denne endringen?"),"\n",l.createElement(t.p,null,"Vi begynte å vurdere en gjenoppbygning av biblioteket i februar, og i sommer slapp Figma en flunka ny versjon av Auto-Layout og Component Properties. Siden arbeidet med å rydde opp i gammalt rot og slurv allerede var i gang, var det naturlig å gjøre dette nå med de nye Figma-featuresene. Vi fikk muligheten til å speile komponentenes adferd i kode enda mer presist, gjøre det enklere og raskere (for alle) å endre på, oppdatere og utvide designsystemet, samtidig som vi rigger oss for langsiktig vekst."),"\n",l.createElement(t.h3,null,"Hva er nytt?"),"\n",l.createElement(t.p,null,"På overflaten er det ikke veldig mye som egentlig er nytt. De aller fleste komponentene heter det samme som før, og skal stort sett se like ut som før. Under panseret er derimot alt nytt."),"\n",l.createElement(t.p,null,"Komponentene følger nå ",l.createElement(t.a,{href:"https://jokul.fremtind.no/komponenter/spacing#skala"},"spacingskalaen")," ",l.createElement(t.em,null,"(med noen få særskilte unntak)"),", og komponetene er nå konsekvente i bruk av stilsettene og design tokens på tvers av states. Siden dette ikke har vært tilfellet frem til nå, kan komponenter man har blitt vant til å se på over tid oppleves annerledes i formen, siden de har blitt oppdatert til å følge form og adferd slik de gjør i koden."),"\n",l.createElement(t.h4,null,"Det nye bibliotekets struktur"),"\n",l.createElement(t.p,null,"De forskjellige delene av biblioteket er delt opp i egne filer som snakker med hverandre for å unngå rot og misforståelser om hva som er hva. Samtidig unngår vi massivt tunge filer som laster tregt. På denne måten gjør vi det også enkelt for oss selv å utvide designsystemet med flere verktøy og funksjoner. I tillegg kan man nå velge selv hvilke deler av designsystemet man vil ha påskrudd, i stedet for å få absolutt alt lastet inn hele tiden."),"\n",l.createElement(t.p,null,"Filene er delt opp i:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Assets (Statiske ressurser som ikoner, o.l.)"),"\n",l.createElement(t.li,null,"Components (Det dere til nå har kjent som komponenter)"),"\n",l.createElement(t.li,null,"Core (Kjernefunksjoner som design tokens og stilsett, farger, skygger, m.m.)"),"\n",l.createElement(t.li,null,'Patterns (Sammensatte komponenter som brukes ofte i samme form, også kjent som "Mønstre").'),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/updates/august-2022/aug22-figboost.png",alt:"Skjermbilde fra Figma-området for det nye Jøkul-biblioteket. Fire Figma-filer er synlige: Patterns, Components, Assets og Docs. Ikke synlig er to Figma-filer: Core og Team Kits."})),"\n",l.createElement(t.h4,null,"Rendyrking av Compact og egne varianter for mobil"),"\n",l.createElement(t.p,null,'Originalideen til "Compact" var at de skulle brukes i informasjonstette løsninger (fagsystemer, interne løsninger, etc.).'),"\n",l.createElement(t.p,null,'Siden vi manglet noe som het "Mobil" i biblioteket har Compact endt opp med å bli en slags krykke for mobilskisser der man har følt at det har vært for trangt til "vanlige" komponenter. Typografiskalaen for Compact har vært litt hummer og kanari. Nå bruker den konsekvent den samme skalaen over hele linja (Desktop). Compact har heller ikke vært konsekvent tilgjengelig for alle komponenter, og de har ikke kunnet blitt brukt av de som trenger de, slik de var tiltenkt. Nå kan man det.'),"\n",l.createElement(t.p,null,"Alle komponenter har nå en egen dedikert mobilstørrelse som reflekterer hva som finnes i kode, og som bruker mobilens typografiskala."),"\n",l.createElement(t.p,null,"De nye prinsippene vi presenterte for Compact før sommeren er som følger:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Compact er laget og optimalisert for desktop-løsninger."),"\n",l.createElement(t.li,null,"Compact skal ha minst mulig padding. Målet er funksjonell plassbesparelse."),"\n",l.createElement(t.li,null,"Hovedregelen for Compact padding er halvparten av desktop."),"\n",l.createElement(t.li,null,"Tekst i Compact følger desktop-typografiskala. Komponentene er tiltenkt for løsninger hvor brukerne sitter på enheter med litt avstand, lenge, over tid. Da må de være lesbare."),"\n",l.createElement(t.li,null,'Compact komponenter i Figma tilbys som en "Size"-variant på lik linje som desktop og mobil.'),"\n"),"\n",l.createElement(t.p,null,"Bruk av compact styres av hvor mye luft en komponent behøver uavhengig av skjermstørrelse, og skal bare brukes i interne systemer og løsninger med høy informasjonstetthet. For eksempel; styr unna compact hvis du trenger å støtte touch-skjermer."),"\n",l.createElement(t.h4,null,"Components Properties"),"\n",l.createElement(t.p,null,"Noen steder bruker vi Component Properties i stedet for Variants i Figma (Ny funksjon, fra sommeren). Det er i hovedsak en måte å tilgjenggeliggjøre innstillinger for å skjule/vise deler av en komponent, knytte mange tekstelementer til samme tekstverdi så det er lettere å endre flere steder samtidig, eller for å tilgjengeliggjøre muligheten for Slot Components (se nedenfor)."),"\n",l.createElement(t.h4,null,"Slot components"),"\n",l.createElement(t.p,null,"Noen steder vil dere se at en komponent har en rosa boks hvor det står ",l.createElement(t.code,null,"<Erstatt meg>"),'. Dette er komponenter med fleksibelt innhold, også kjent som "Slot Components".'),"\n",l.createElement(t.p,null,"Siden vi har både mønstre og komponenter som potensielt kan (eller skal) holde andre komponenter, har vi løst dette ved å la brukerne selv legge inn de komponentene de ønsker å bruke der hvor en slot er tilgjengelig. Du kan enten bruke andre ferdigbygde Jøkul komponenter, eller sette sammen dine egne komponenter og bruke de i en slot."),"\n",l.createElement(t.p,null,"Et eksempel på dette er TaskCard; hvor innholdet vil variere utifra case og behov, men det er noen fellesnevnere som bakgrunnsfarge, padding og skygge. Da tilbyr vi en grunnkomponent som designere kan bygge innhold på toppen av."),"\n",l.createElement(t.p,null,'Et annet eksempel er tabeller; som også har fått "slots" slik at man kan sette sammen celler med interaktivt innhold utover tekst. Dette gjør at alle teamene våre kan ta i bruk flere deler av designsystemet, og dra nytte av den kollektive intelligensen vi samler på tvers av teamene.'),"\n",l.createElement(t.h3,null,"FAQ"),"\n",l.createElement(a.U,{className:"jkl-portal-paragraph"},l.createElement(i.Q,{title:"Noe er herpa eller fungerer ikke som det skal! Hvor sier jeg fra?"},l.createElement(t.p,null,"Send melding på Teams, ta det opp i forum/office-hours, eller ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/new?assignees=&labels=%F0%9F%90%9D%20bug&template=feilmelding.md&title=Feil:%20"},"legg det inn her"),".")),l.createElement(i.Q,{title:"Jeg skjønner ikke hva som skjer! Hjelp meg!"},l.createElement(t.p,null,"Send melding på Teams, ta det opp i forum/office-hours, eller ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions/new?category=sp%C3%B8rsm%C3%A5l-og-svar"},"legg det inn her"),".")),l.createElement(i.Q,{title:"Jeg har funnet noe som ikke stemmer overens med det dere har skrevet over!"},l.createElement(t.p,null,"Bra catch. Send melding på Teams, ta det opp i forum/office-hours, eller ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/new?assignees=&labels=%F0%9F%90%9D%20bug&template=feilmelding.md&title=Feil:%20"},"legg det inn her"),".")),l.createElement(i.Q,{title:"Jeg er uenig i hvordan dere har løst en ting!"},l.createElement(t.p,null,"Fair. Send melding på Teams, ta det opp i forum/office-hours, eller ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions/new?category=ideer"},"legg det inn her"),"."))),"\n",l.createElement(t.h3,null,"Si ifra om noe ikke funker"),"\n",l.createElement(t.p,null,"Biblioteket har blitt noen uker gammelt, men siden det er bygget på nytt fra bunnen av kan det hende noen ting ikke fungerer helt som det skal."),"\n",l.createElement(t.p,null,"Det er viktig at du sier ifra enten direkte til Øyvind Nordbø, eller i kanalen Support Designsystem på Teams, hvis du finner feil."),"\n",l.createElement(t.h2,null,"Oppdatert Select-design"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/updates/august-2022/aug22-select-design-changes.gif",alt:"Skjermopptak som viser designendringene i Select. I opptaket åpnes en Select-komponent, og det navigeres med piltaster for å markere tre ulike elementer. Det markerte elementet får en annen bakgrunnsfarge."})),"\n",l.createElement(t.p,null,"Select fikk et oppdatert design i august. Pila i komponenten var årsaken til ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3001"},"en bug"),", som gjorde at vi ønsket å fjerne den. Tidligere hadde også ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2995"},"checkmark skapt problemer"),". Derfor ville vi heller bruke Fremtind-farger for å vise tilstanden i komponenten."),"\n",l.createElement(t.p,null,"Du kan teste det nye designet på ",l.createElement(t.a,{href:"https://jokul.fremtind.no/komponenter/select"},"Select-siden under Komponenter"),"."),"\n",l.createElement(t.h2,null,"Animasjonsverdier"),"\n",l.createElement(t.p,null,"De ulike easingkurvene og varighetene vi bruker i animasjoner i Jøkul er blitt dokumentert i Figma. Du finner dem i ",l.createElement(t.a,{href:"https://www.figma.com/file/F65UrpWc7JsWYhDJgMD8F8/Core?node-id=0%3A1"},"Core-fila")," på siden Design Tokens, under overskriften Animasjon."),"\n",l.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",l.createElement(t.h3,null,"Figma"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Fikset TaskCard sin auto-layout så innholdskomponenter wrapper både i bredden og høyden."),"\n",l.createElement(t.li,null,"Table/Table Cell har fått en egen slot component."),"\n",l.createElement(t.li,null,"Checkbox sin Check er nå en frittstående koponent du kan bruke i slots og liknende."),"\n"),"\n",l.createElement(t.h3,null,"GitHub"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Ryddet opp installasjons- og bruksveiledninger i READMEs (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2979"},"#2979"),")."),"\n",l.createElement(t.li,null,"Gjør tabelloverskrifter u-sticky som utgangspunkt (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2990"},"#2990"),")."),"\n",l.createElement(t.li,null,"Endre metode for å finne ut om relatedTarget er utenfor datovelgeren (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2998"},"#2998"),", ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3012"},"#3012"),", ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3024"},"#3024"),")."),"\n",l.createElement(t.li,null,"La til ",l.createElement(t.code,null,"date-fns")," som avhengighet i DatePicker (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3003"},"#3003"),")."),"\n",l.createElement(t.li,null,"Forbedret opplevelsen ved sletting av innhold i inputfelt med maske (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3007"},"#3007"),")."),"\n",l.createElement(t.li,null,"Oppdater intern state i ExpandButton ved endring av prop (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3009"},"#3009"),")."),"\n",l.createElement(t.li,null,"Tilbakestiller søketekst ved valg i Select (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3013"},"#3013"),", ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3017"},"#3017"),")."),"\n",l.createElement(t.li,null,"La til ",l.createElement(t.code,null,'loading="lazy"')," og ",l.createElement(t.code,null,'decoding="async"')," på bilder (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3014"},"#3014"),")."),"\n",l.createElement(t.li,null,"Endret fokusring rundt lenker til outline med litt avstand (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3015"},"#3015"),", ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3018"},"#3018"),")."),"\n",l.createElement(t.li,null,"Kortet ned animasjonstiden i hovedmenyen (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3021"},"#3021"),")."),"\n",l.createElement(t.li,null,"Dokumenter hvordan få listevisning av tabell på egendefinert skjermbredde (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3030"},"#3030"),")."),"\n",l.createElement(t.li,null,"Fiks navigasjon med piltaster forbi skjulte elementer i søkbar Select (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3034"},"#3034"),")."),"\n"),"\n",l.createElement(t.h2,null,"Takk"),"\n",l.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"JoMs"),"\n",l.createElement(t.li,null,"daa1"),"\n",l.createElement(t.li,null,"kennidenni"),"\n",l.createElement(t.li,null,"paulinfrancis"),"\n",l.createElement(t.li,null,"hegebjo"),"\n",l.createElement(t.li,null,"Sven Håkon"),"\n",l.createElement(t.li,null,"Joachim"),"\n"),"\n",l.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var m=n(72285),u=n(22756),c=n(95573),d=n(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(u.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:o}=r;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},i,{versions:r.versions})),l.createElement(c.w5,i),a,o&&l.createElement(m.l,{types:o}))};function k(e){return l.createElement(g,e,l.createElement(s,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var r=n(78217),l=n(76802),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},c=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;c(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&c(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(u):[],a=n.props?Object.values(n.props).filter(m):[],s=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(p,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),l=n.n(r),a=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(53484),l=n(26372),a=n.n(l),i=n(70079);const o=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),o=(0,i.useRef)(null),{0:s,1:m}=(0,i.useState)(!1),{0:u,1:c}=(0,i.useState)(!1);(0,i.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const d=e=>{r.current&&l.current&&(r.current.open=e,o.current=null,m(!1),c(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:l,contentRef:a,onSummaryClick:e=>{e.preventDefault(),r.current&&l.current&&(r.current.style.overflow="hidden",s||!r.current.open?(e=>{r.current&&l.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&l.current&&a.current){c(!0),t(!0,e);const n=r.current.offsetHeight,i=l.current.offsetHeight+a.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(i,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>d(!0),o.current.oncancel=()=>c(!1))}})))})(e):(u||r.current.open)&&(e=>{if(r.current&&l.current){m(!0),t(!1,e);const n=r.current.offsetHeight,a=l.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(a,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>d(!1),o.current.oncancel=()=>m(!1))}})(e))}}},s=e=>{let{children:t,title:n,className:l,startExpanded:s=!1,onClick:m,...u}=e;const{0:c,1:d}=(0,i.useState)(s),{detailsRef:p,summaryRef:g,contentRef:k,onSummaryClick:f}=o({onOpenChange:(e,t)=>{d(e),m&&m(t,e)},startExpanded:s});return i.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:a()("jkl-accordion-item",l),ref:p},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:g},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!c,bold:c})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:k},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),m=n(66169),u=n(94509);const c=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:c,emptyTableText:d,rows:p,verticalAlign:g,...k}=e;return r.createElement(l.i,{fullWidth:!0,...k,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(u.S,null,c.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&d&&r.createElement(u.S,null,r.createElement(o.p,{colSpan:c.length},d)),p.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":c[t],verticalAlign:g},e))))))))}));c.displayName="DataTable"}}]);