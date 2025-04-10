"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1632],{6450:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return g}});var r=n(47160),l=n(70079),a=n(34927);function s(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",h3:"h3"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:s,PortalImage:i}=t;return s||o("ComponentExample",!0),n||o("Ingress",!0),i||o("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Vi bruker nedtrekkslister til å gi brukeren en liste med alternativ.\nNedtrekkslister passer i de tilfellene det er for mange valg til å bruke\nradioknapper. Nedtrekkslisten må ha en overskrift, som forteller hva det er\nbrukerne kan velge mellom i listen.")),"\n",l.createElement(s,{title:"Select",component:a.IX,knobs:a.cN,codeExample:a.hW}),"\n",l.createElement(t.p,null,"Om du har fem eller færre valg kan det være bedre å bruke ",l.createElement(t.a,{href:"/preview/4371-select-focus/komponenter/radiobutton"},"Radio buttons"),". "),"\n",l.createElement(t.p,null,"Hvis du trenger en nedtrekksliste med mange valg, kan du også legge inn en søke- eller filtreringsfunksjon. Dersom brukeren alltid må scrolle i listen over valg er det kanskje på tide å la de søke."),"\n",l.createElement(t.p,null,"Du finner et ",l.createElement(t.a,{href:"/preview/4371-select-focus/demoer/skjemavalidering/"},"eksempel på en nedtrekksliste brukt i skjemakontekst")," under Demoer. ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/pages/demoer/skjemavalidering.tsx"},"Koden til eksempelet")," finner du på GitHub."),"\n",l.createElement(t.h2,null,"Tekst og validering"),"\n",l.createElement(t.p,null,"Bruk ",l.createElement(t.a,{href:"/preview/4371-select-focus/guider/skjemadesign"},"prinsippene for skjemadesign")," til å velge størrelse på overskriften til listen. Lag en kort og tydelig tekst, som forteller hva det er brukeren skal gjøre i nedtrekkslisten. Hvis det trengs, kan du legge en hjelpetekst under listen for å forklare mer."),"\n",l.createElement(t.p,null,"Hvis nedtrekkslisten ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta informasjonen fra hjelpeteksten."),"\n",l.createElement(t.p,null,'For eksempel, gitt en hjelpetekst "Velg landet du var på ferie i da du ble syk" kan vi ha en feilmelding "Du må velge hvor du var på ferie da du ble syk".'),"\n",l.createElement(t.h2,null,"Når bruker vi Select?"),"\n",l.createElement(t.p,null,"Vi bruker en nedtrekksliste når vi skal gi brukeren en liste med alternativ, og hvor ",l.createElement(t.a,{href:"/preview/4371-select-focus/komponenter/radiobutton"},"Radio buttons")," ikke passer. Noen eksempler på bruk er:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Til å velge årsak eller skadetype"),"\n",l.createElement(t.li,null,"Til å velge diagnose"),"\n",l.createElement(t.li,null,"Til å velge stilling"),"\n"),"\n",l.createElement(t.p,null,"En nedtrekksliste med søk har noen likhetstrekk med ",l.createElement(t.a,{href:"/preview/4371-select-focus/komponenter/autosuggest"},"Autosuggest"),". En nyanseforskjell er at en nedtrekksliste ikke lar brukeren velge noe annet enn de forhåndsbestemte alternativene. Om du ønsker at brukerens søk skal være et gyldig valg uansett, bruk Autosuggest."),"\n",l.createElement(t.h3,null,"Eksempler på bruk"),"\n",l.createElement(i,{src:"/assets/documentation/select/select-dekningsvelger.png",caption:"To Select i et skjema."}))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)};function o(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var k=n(72285),m=n(22756),u=n(95573),c=n(1634);const d=e=>{let{pageContext:t}=e;return l.createElement(m.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:s}=n.page,{types:i}=r;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(u.M1,Object.assign({},s,{versions:r.versions})),l.createElement(u.w5,s),a,i&&l.createElement(k.l,{types:i}))};function g(e){return l.createElement(p,e,l.createElement(i,e))}}}]);