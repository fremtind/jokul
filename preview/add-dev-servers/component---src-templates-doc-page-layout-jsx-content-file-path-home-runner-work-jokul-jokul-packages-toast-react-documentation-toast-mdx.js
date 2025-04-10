"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4717],{13225:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return b},Head:function(){return h},default:function(){return y}});var r=n(47160),l=n(70079),a=n(79523),s=n(16279);const o={},i=()=>String(Date.now()),m={add:()=>i(),remove:()=>{},close:()=>{},pauseAll(){},resumeAll(){},visibleToasts:[]},d=()=>l.createElement("div",{className:"jkl-toast-region__toasts",style:{position:"relative"}},l.createElement(s.F,{state:m,toast:{key:i(),content:{title:"Nytt i Jøkul",content:l.createElement("p",null,"Les mer om"," ",l.createElement("a",{className:"jkl-link",href:"/komponenter/toast/"},"Toast")," ","på komponentsiden.")}}}),l.createElement(s.F,{state:m,toast:{key:i(),content:{content:"Navn Navnesen er fjernet som reell rettighetshaver"},variant:"success"}}),l.createElement(s.F,{state:m,toast:{key:i(),content:{content:"Saken går til automatisk behandling"},variant:"info"}}),l.createElement(s.F,{state:m,toast:{key:i(),content:{title:"Mistet internettforbindelsen",content:"Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake."},variant:"warning"}}),l.createElement(s.F,{state:m,toast:{key:i(),content:{title:"Ingen internettforbindelse",content:"Du kan ikke lagre før forbindelsen er tilbake."},variant:"error"}})),u=()=>'\nimport { ToastProvider } from "@fremtind/jkl-toast-react";\n\n// Sett opp provider på appnivå\nexport function App({ children }) {\n    return (\n        <ToastProvider>\n            {children}\n        </ToastProvider>\n    );\n};\n\n// Bruk i en komponent\nimport { useToast } from "@fremtind/jkl-toast-react";\n\nfunction ToastUsageExample() {\n    const { add } = useToast();\n\n    // Vis bekreftelse på at handlingen er utført OK\n    const onSuccess = React.useCallback(() => {\n        add("Navn Navnesen er fjernet som reell rettighetshaver", { variant: "success" });\n    }, [add]);\n\n    // Eller vis en toast ved besøk\n    React.useEffect(() => {\n        if (localStorage.getItem("hasSeenToastAboutToast")) {\n            return;\n        }\n\n        add(\n            {\n                title: "Nytt i Jøkul",\n                content: (\n                    <p>\n                        Les mer om{" "}\n                        <a className="jkl-link" href="/komponenter/toast/">\n                            Toast\n                        </a>{" "}\n                        på komponentsiden.\n                    </p>\n                ),\n            },\n        );\n\n        localStorage.setItem("hasSeenToastAboutToast", "true");\n    }, [add]);\n}\n';function k(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",a:"a",h4:"h4",em:"em",code:"code"},(0,r.ah)(),e.components),{Ingress:n,ComponentExample:s,Grid:i,DoDontExample:m}=t;return s||p("ComponentExample",!0),m||p("DoDontExample",!0),i||p("Grid",!0),n||p("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"Vi bruker toast som kort og konsis tilbakemelding til brukeren på en handling som vises subtilt på\nbrukergrensesnittet.")),"\n",l.createElement(s,{title:"Toast",component:d,codeExample:u,knobs:o,noDensity:!0}),"\n",l.createElement(t.h2,null,"Bruk"),"\n",l.createElement(t.p,null,"Toast har som mål å være så lite påtrengende som mulig, men likevel vise brukeren informasjonen de skal se. Den skal gi brukeren en kort statusrapport om hvilke prosesser som nettopp er fullført."),"\n",l.createElement(t.p,null,"Vi trenger toast når vi:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"ønsker å gi brukeren tilbakemelding."),"\n",l.createElement(t.li,null,"ikke ønsker å distrahere dem fra andre aktiviteter."),"\n"),"\n",l.createElement(t.p,null,"Disse hendelsesdrevne meldingene vises ved å overlegge innhold nederst i midten av skjermen og dukke opp fra navigasjonssidefeltet."),"\n",l.createElement(t.h3,null,"Farger"),"\n",l.createElement(t.p,null,"Fargene i toasts har en betydning på samme måte som ",l.createElement(t.a,{href:"/preview/add-dev-servers/komponenter/tag"},"Tag")," og ",l.createElement(t.a,{href:"/preview/add-dev-servers/komponenter/message"},"Message"),":"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Hvis i tvil, bruk den nøytrale varianten."),"\n",l.createElement(t.li,null,"Grønt betyr at noe er vellykket eller ferdig"),"\n",l.createElement(t.li,null,"Gult informerer om noe som kan ha innvirkning på brukeren, men hvor det ikke kreves en handling"),"\n",l.createElement(t.li,null,"Rødt betyr at en handling kreves eller noe har gått galt så handlingen ikke kunne gjennomføres"),"\n"),"\n",l.createElement(t.p,null,"Blått kan brukes om de andre kategoriene ikke passer, men bare dersom samme sted vil kunne vise en annen statusfarge hvis situasjonen var annerledes. Blått er med andre ord ikke en nøytral farge som kan brukes til informasjon utenfor statuskategorien."),"\n",l.createElement(t.h3,null,"Plassering"),"\n",l.createElement(t.p,null,"Vi legger alltid toasten i den nedre delen av skjermen, eller på nedre venstre kant."),"\n",l.createElement(i,null,l.createElement(m,{type:"do",description:"Vi legger toast bunn sentrert i de fleste tilfeller.",image:"/assets/documentation/toast/plassering-do.svg"}),l.createElement(m,{type:"dont",description:"Vi viser ikke toast fra toppen på siden. Bruk SystemMessage om du vil vise innhold her.",image:"/assets/documentation/toast/plassering-dont.svg"})),"\n",l.createElement(t.h3,null,"Gruppering"),"\n",l.createElement(t.p,null,"Flere toasts kan vises på samme tid, vertikalt stablet med spacing mellom. De siste meldingene vises øverst."),"\n",l.createElement(i,null,l.createElement(m,{type:"do",description:"Grupper med spacing, gjerne nede til venstre, vekk fra hovedinnholdet.",image:"/assets/documentation/toast/gruppering-do.svg"}),l.createElement(m,{type:"dont",description:"Ikke samle flere meldinger i samme toast.",image:"/assets/documentation/toast/gruppering-dont.svg"})),"\n",l.createElement(t.h4,null,"Unngå mange samtidige toasts"),"\n",l.createElement(t.p,null,"Selv om en toast ikke er like forstyrrende som en dialog, tiltrekker den likevel brukerens oppmerksomhet. Hyppige avbrudd forstyrrer brukervennligheten, spesielt for personer med visuelle og kognitive funksjonsnedsettelser."),"\n",l.createElement(t.h3,null,"Eksempel på plassering"),"\n",l.createElement(s,{title:"Plassering",component:a.P,codeExample:u,knobs:a._,noDensity:!0}),"\n",l.createElement(t.h2,null,"Når bruker vi Toast?"),"\n",l.createElement(t.p,null,"For enkle feedback og lavprioriterte advarsler er det hensiktsmessig å bruke toast."),"\n",l.createElement(t.p,null,"Så snart handlingen trenger mer oppmerksomhet fra brukeren, for eksempel for å få svar på en handling, er det bedre å bruke ",l.createElement(t.a,{href:"/preview/add-dev-servers/komponenter/message"},"Message"),"."),"\n",l.createElement(t.h2,null,"Animasjon"),"\n",l.createElement(t.p,null,"En toast går inn i viewporten fra bunnen, sentrert eller venstrejustert, og går tilbake samme vei den kom fra når den lukkes."),"\n",l.createElement(t.h2,null,"Universell utforming"),"\n",l.createElement(t.p,null,"Vær oppmerksom på hvor ofte du utløser toasts. Hyppige avbrudd forstyrrer brukervennligheten, spesielt for personer med visuelle og kognitive funksjonsnedsettelser."),"\n",l.createElement(t.h3,null,"Skjermlesere"),"\n",l.createElement(t.p,null,"Toasts vises i en ",l.createElement(t.em,null,"landmark region")," for å gjøre det enklere for brukere å navigere til dem. De er også merket som ",l.createElement(t.code,null,"status")," for å varsle brukere om innholdet, men uten å avbryte."),"\n",l.createElement(t.h3,null,"Automatisk lukking"),"\n",l.createElement(t.p,null,"Standard er at toasts forsvinner etter fem sekunder. Nedtellingen til dette settes på pause ved hover og fokus. Brukeren kan også lukke toasten før tiden har gått ut, ved å trykke på krysset."),"\n",l.createElement(t.h3,null,"Tastaturfokus"),"\n",l.createElement(t.p,null,"Om fokus er plassert i en toast i det den lukkes, flyttes automatisk fokus til neste åpne toast, hvis noen. Om det er siste toast som lukkes, flyttes tastaturfokus tilbake dit det var før det ble flyttet til toast-regionen."),"\n",l.createElement(t.h3,null,"Mer om universell utforming"),"\n",l.createElement(t.p,null,"Se gjerne ",l.createElement(t.a,{href:"https://react-spectrum.adobe.com/react-aria/useToast.html"},"dokumentasjonen til React Aria"),", som denne komponenten er basert på, for flere detaljer om universell utforming."),"\n",l.createElement(t.h2,null,"Tekst"),"\n",l.createElement(t.p,null,"En toast har begrenset plass til innhold, og derfor må innholdet være kort og konsist."),"\n",l.createElement(i,null,l.createElement(m,{type:"do",description:"Hold meldingen kort.",image:"/assets/documentation/toast/tekst-do.png"}),l.createElement(m,{type:"dont",description:"Ikke bruk vage titler, lange setninger, eller handlinger.",image:"/assets/documentation/toast/tekst-dont.png"})))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(k,e)):k(e)};function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var g=n(72285),v=n(22756),f=n(95573),E=n(1634);const h=e=>{let{pageContext:t}=e;return l.createElement(v.p,{title:t.title})},b=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:s}=n.page,{types:o}=r;return l.createElement(E.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(f.M1,Object.assign({},s,{versions:r.versions})),l.createElement(f.w5,s),a,o&&l.createElement(g.l,{types:o}))};function y(e){return l.createElement(b,e,l.createElement(c,e))}}}]);