"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5771],{86867:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return h},Head:function(){return g},default:function(){return f}});var l=n(64717),r=n(92379),a=n(87042),o=n(18889);function i(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",em:"em",h2:"h2",h3:"h3"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:i}=t;return i||m("ComponentExample",!0),n||m("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Om du jobber eller tar fri, holder deg i byen eller stikker til fjells – god påske, fra oss i Jøkul-teamet.")),"\n",r.createElement(t.p,null,"Her er mars, kort oppsummert:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Datovelgeren har fått et nytt design, som kombinerer det beste fra begge varianter vi hadde før."),"\n",r.createElement(t.li,null,"Kontekstuell meny er klar til bruk."),"\n",r.createElement(t.li,null,"En hel smørbrødliste med feilrettinger og forbedringer."),"\n"),"\n",r.createElement(t.p,null,"Vi har også rigget om på ",r.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/19"},"prosjekttavla vår"),". Blant annet har vi tatt i bruk ",r.createElement(t.em,null,"iterasjon"),"-feltet i Projects, sånn at det\nlettere går an å se hva vi jobber med akkurat nå, og hva vi planlegger å jobbe med framover."),"\n",r.createElement(t.h2,null,"Nytt design på datovelger"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"/preview/fix/chip-button-type/komponenter/datepicker"},"Datovelgeren")," ble redesignet under Jøkuluka, og nå er det klart for bruk. For kode er det ingen ",r.createElement(t.em,null,"breaking change"),"."),"\n",r.createElement(t.p,null,"Under ser du et eksempel på hvordan det kan se ut. Her har vi satt begrensninger på hvor langt frem og tilbake i tid man har lov til å velge, men dette er valgfritt og kan konfigureres."),"\n",r.createElement(i,{title:"DatePicker",component:a.xM}),"\n",r.createElement(t.p,null,"Det nye designet slår sammen den tidligere ",r.createElement(t.em,null,"utvidede")," datovelgeren og standard datovelger. De to variantene hadde hver sine svakheter."),"\n",r.createElement(t.p,null,"Med standard datovelger var det vanskelig å hoppe langt frem eller tilbake i tid, siden vi bare hadde knapper for å bla én måned frem eller tilbake."),"\n",r.createElement(t.p,null,"Med den utvidede velgeren var det vanskelig å skulle hoppe fra, for eksempel, januar 2023 til desember 2022. Først måtte man skrive 2022 inn i tekstfeltet, og så kunne man velge januar fra nedtrekkslisten."),"\n",r.createElement(t.p,null,"Som alltid er det mulig å skrive inn datoer manuelt, rett i tekstfeltet. Minner om at det i januar ble lagt til støtte for å ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3381"},"lime inn datoer i flere formater"),"."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3391"},"#3391")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3415"},"#3415")),"\n"),"\n",r.createElement(t.h2,null,"Kontekstuell meny"),"\n",r.createElement(t.p,null,"Nok en komponent fra Jøkuluka som er klar for bruk. Med en kontekstuell meny kan du vise et lite sett med handlinger som er relevante for brukeren, men som ikke er en essensiell del av flyten brukeren beveger seg i."),"\n",r.createElement(i,{component:o.gL}),"\n",r.createElement(t.p,null,"Du kan lese mer om ",r.createElement(t.a,{href:"/preview/fix/chip-button-type/komponenter/contextualmenu"},"anbefalinger rundt bruk av kontekstuell meny")," i dokumentasjonen til komponenten."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3416"},"#3416")),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3464"},"#3464")),"\n"),"\n",r.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(t.h3,null,"Figma"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Ga MessageBox en større clicktarget (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3071"},"#3071"),")"),"\n",r.createElement(t.li,null,"Justerte avstand mellom pil og tekst i ExpandButton (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3167"},"#3167"),")"),"\n",r.createElement(t.li,null,"Justerte utseendet til MessageBox så innhold får mer plass på mobil (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3387"},"#3387"),")"),"\n",r.createElement(t.li,null,"Laget komponenter for å kunne lage DescriptionList på en enklere måte (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3212"},"#3212"),")"),"\n",r.createElement(t.li,null,"Footer og header fra Jøkuluka merget inn (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3399"},"#3399"),")"),"\n",r.createElement(t.li,null,"Fjernet animasjon av pil i NavCard for å unngå bevegelse i to retninger (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3429"},"#3429"),")"),"\n",r.createElement(t.li,null,"La til manglende alilgn i TableHeader (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3448"},"#3448"),")"),"\n",r.createElement(t.li,null,"Accordion åpnes nok til at text component vises i prototype (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3449"},"#3449"),")"),"\n"),"\n",r.createElement(t.h3,null,"GitHub"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Åpne for en SupportLabel for RadioButton (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3410"},"#3410"),")"),"\n",r.createElement(t.li,null,"Utvid kodeeksempler for ikonene (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3428"},"#3428"),")"),"\n",r.createElement(t.li,null,"Nytt design på error-ikon (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3441"},"#3441"),")"),"\n",r.createElement(t.li,null,"Align ikonet i MessageBox med tittel, og med teksten hvis uten tittel (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3446"},"#3446"),")"),"\n",r.createElement(t.li,null,"Select, unngå onChange når value endres fra utsiden (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3443"},"#3443"),")"),"\n",r.createElement(t.li,null,"Rett feil i kodeeksempel for image-propen i kortkomponenter (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3456"},"#3456"),")"),"\n",r.createElement(t.li,null,"Unngå at inline-elementer blir gjort til block i kortkomponenter (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3451"},"#3451"),")"),"\n",r.createElement(t.li,null,"Sett UTF-8 som charset i stilark for å unngå encoding-bugs rundt piler (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3468"},"#3468"),")"),"\n",r.createElement(t.li,null,"Kjør bare de Cypress-testene som trengs under pull requests (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3466"},"#3466"),")"),"\n",r.createElement(t.li,null,"Gjør sorteringsikon bold i TableHeader (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3442"},"#3442"),")"),"\n",r.createElement(t.li,null,"Oppdater deler av Profil-seksjonen i portalen, etter Jøkuluka (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3469"},"#3469"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle som har vært med å bygge videre på Jøkul, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"BjorneOma"),"\n",r.createElement(t.li,null,"Chrihenn"),"\n",r.createElement(t.li,null,"henrikhermansen"),"\n",r.createElement(t.li,null,"ivnai"),"\n",r.createElement(t.li,null,"joms"),"\n",r.createElement(t.li,null,"kjetilbendik"),"\n",r.createElement(t.li,null,"leon-ho"),"\n",r.createElement(t.li,null,"maciejost"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var s=n(75482),c=n(96036),d=n(59001),p=n(65458),k=n(79379);const g=e=>{let{pageContext:t}=e;return r.createElement(c.p,{title:t.title})},h=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:i}=l;return r.createElement(k.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(p.M1,Object.assign({},o,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(d.c,{variant:"komponent",component:o.title}),r.createElement(p.w5,o),a,i&&r.createElement(s.l,{types:i}))};function f(e){return r.createElement(h,e,r.createElement(u,e))}},87042:function(e,t,n){n.d(t,{bK:function(){return s},o9:function(){return i},xM:function(){return m}});var l=n(92379),r=n(41046),a=n(64115),o=n(86238);const i={boolProps:["Med hjelpetekst","Med feil","Med tooltip"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:0}]},u=e=>{const t=864e5*(30*e-5);return t<0?12+t:t},m=e=>{let{boolValues:t,choiceValues:n}=e;const i=t&&t["Med hjelpetekst"]?"Du vil være forsikret fra denne datoen":void 0,m=t&&t["Med feil"]?"Du kan ikke velge en dato som har vært":void 0,s=n&&n.Variant,c=null!=t&&t["Med tooltip"]?l.createElement(r.d,{content:"Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært."}):void 0,{0:d,1:p}=(0,l.useState)("");return l.createElement(a.M,{label:"Velg startdato for forsikringen",labelProps:{variant:s},tooltip:c,errorLabel:m,name:"datepicker",helpLabel:i,disableBeforeDate:(0,o.Bb)(new Date(Date.now()-u(14))),disableAfterDate:(0,o.Bb)(new Date(Date.now()+u(14))),value:d,onFocus:(e,t,n)=>{console.log("onFocus",{event:e,date:t,meta:n})},onBlur:(e,t,n)=>{(0,o.j3)(e)&&console.log("onBlur",{event:e,date:t,meta:n})},onChange:(e,t,n)=>{p(e.target.value),console.log("onChange",{event:e,date:t,meta:n})},action:{onBlur:e=>{(0,o.j3)(e)&&console.log("action.onBlur",{event:e})},onClick:e=>{console.log("action.onClick",{event:e})}}})},s=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<DatePicker\n    label="Velg startdato for forsikringen"\n    variant="'+((null==n?void 0:n.Variant)||"small")+'"'+(null!=t&&t["Med feil"]?'\n    errorLabel="Du kan ikke velge en dato som har vært"':"")+(null!=t&&t["Med hjelpetekst"]?'\n    helpLabel="Du vil være forsikret fra denne datoen"':"")+(null!=t&&t["Med tooltip"]?'\n    tooltip={\n        <PopupTip content="Du vil være forsikret fra denne datoen. Du kan ikke velge en dato som har vært." />\n    }':"")+"\n/>\n"}},41046:function(e,t,n){n.d(t,{d:function(){return d}});var l=n(99767),r=n(58990),a=n(80324),o=n.n(a),i=n(92379),u=n(16965),m=n(6854),s=n(27547);const c=["content","triggerProps"],d=e=>{let{content:t,triggerProps:n}=e,a=(0,l.Z)(e,c);const{0:d,1:p}=(0,i.useState)(!1);return i.createElement(u.u,Object.assign({onOpenChange:p,triggerOn:"click"},a),i.createElement(s.a,null,i.createElement("button",Object.assign({},n,{type:"button",className:o()("jkl-tooltip-question-button",null==n?void 0:n.className),"data-testid":"jkl-tooltip-question-button"}),i.createElement(r.U,{variant:"inherit",bold:d}),i.createElement("span",{className:"jkl-sr-only"},"Vis hjelpetekst"),i.createElement("span",{className:"jkl-sr-only","aria-live":"polite","data-testid":"popuptip-content"},d?t:""))),i.createElement(m._,{"data-ispopup":!0},t))}}}]);