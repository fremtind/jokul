"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9136],{54:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return y},Head:function(){return h},default:function(){return j}});var r=n(33156),a=n(7378),l=n(21765),s=n(67733);const o={},i=()=>String(Date.now()),c={add:()=>i(),remove:()=>{},close:()=>{},pauseAll(){},resumeAll(){},visibleToasts:[]},m=()=>a.createElement("div",{className:"jkl-toast-region__toasts",style:{position:"relative"}},a.createElement(s.y,{state:c,toast:{key:i(),content:{title:"Nytt i Jøkul",content:a.createElement("p",null,"Les mer om"," ",a.createElement("a",{className:"jkl-link",href:"/komponenter/toast/"},"Toast")," ","på komponentsiden.")}}}),a.createElement(s.y,{state:c,toast:{key:i(),content:{content:"Navn Navnesen er fjernet som reell rettighetshaver"},variant:"success"}}),a.createElement(s.y,{state:c,toast:{key:i(),content:{content:"Saken går til automatisk behandling"},variant:"info"}}),a.createElement(s.y,{state:c,toast:{key:i(),content:{title:"Mistet internettforbindelsen",content:"Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake."},variant:"warning"}}),a.createElement(s.y,{state:c,toast:{key:i(),content:{title:"Ingen internettforbindelse",content:"Du kan ikke lagre før forbindelsen er tilbake."},variant:"error"}})),d=()=>'\nimport { ToastProvider } from "@fremtind/jkl-toast-react";\n\n// Sett opp provider på appnivå\nexport function App({ children }) {\n    return (\n        <ToastProvider>\n            {children}\n        </ToastProvider>\n    );\n};\n\n// Bruk i en komponent\nimport { useToast } from "@fremtind/jkl-toast-react";\n\nfunction ToastUsageExample() {\n    const { add } = useToast();\n\n    // Vis bekreftelse på at handlingen er utført OK\n    const onSuccess = React.useCallback(() => {\n        add("Navn Navnesen er fjernet som reell rettighetshaver", { variant: "success" });\n    }, [add]);\n\n    // Eller vis en toast ved besøk\n    React.useEffect(() => {\n        if (localStorage.getItem("hasSeenToastAboutToast")) {\n            return;\n        }\n\n        add(\n            {\n                title: "Nytt i Jøkul",\n                content: (\n                    <p>\n                        Les mer om{" "}\n                        <a className="jkl-link" href="/komponenter/toast/">\n                            Toast\n                        </a>{" "}\n                        på komponentsiden.\n                    </p>\n                ),\n            },\n        );\n\n        localStorage.setItem("hasSeenToastAboutToast", "true");\n    }, [add]);\n}\n';function u(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",h3:"h3",a:"a",h4:"h4",em:"em",code:"code"},(0,r.RP)(),e.components),{Ingress:n,ComponentExample:s,Grid:i,DoDontExample:c}=t;return s||k("ComponentExample",!0),c||k("DoDontExample",!0),i||k("Grid",!0),n||k("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Vi bruker toast som kort og konsis tilbakemelding til brukeren på en\nhandling som vises subtilt på brukergrensesnittet.")),"\n",a.createElement(s,{title:"Toast",component:m,codeExample:d,knobs:o,noDensity:!0}),"\n",a.createElement(t.h2,null,"Bruk"),"\n",a.createElement(t.p,null,"Toast har som mål å være så lite påtrengende som mulig, men likevel vise brukeren informasjonen de skal se. Den skal gi brukeren en kort statusrapport om hvilke prosesser som nettopp er fullført."),"\n",a.createElement(t.p,null,"Vi trenger toast når vi:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"ønsker å gi brukeren tilbakemelding."),"\n",a.createElement(t.li,null,"ikke ønsker å distrahere dem fra andre aktiviteter."),"\n"),"\n",a.createElement(t.p,null,"Disse hendelsesdrevne meldingene vises ved å overlegge innhold nederst i midten av skjermen og dukke opp fra navigasjonssidefeltet."),"\n",a.createElement(t.h3,null,"Farger"),"\n",a.createElement(t.p,null,"Fargene i toasts har en betydning på samme måte som ",a.createElement(t.a,{href:"/preview/material-icons-check-cross/komponenter/tag"},"Tag")," og ",a.createElement(t.a,{href:"/preview/material-icons-check-cross/komponenter/message"},"Message"),":"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Hvis i tvil, bruk den nøytrale varianten."),"\n",a.createElement(t.li,null,"Grønt betyr at noe er vellykket eller ferdig"),"\n",a.createElement(t.li,null,"Gult informerer om noe som kan ha innvirkning på brukeren, men hvor det ikke kreves en handling"),"\n",a.createElement(t.li,null,"Rødt betyr at en handling kreves eller noe har gått galt så handlingen ikke kunne gjennomføres"),"\n"),"\n",a.createElement(t.p,null,"Blått kan brukes om de andre kategoriene ikke passer, men bare dersom samme sted vil kunne vise en annen statusfarge hvis situasjonen var annerledes. Blått er med andre ord ikke en nøytral farge som kan brukes til informasjon utenfor statuskategorien."),"\n",a.createElement(t.h3,null,"Plassering"),"\n",a.createElement(t.p,null,"Vi legger alltid toasten i den nedre delen av skjermen, eller på nedre venstre kant."),"\n",a.createElement(i,null,a.createElement(c,{type:"do",description:"Vi legger toast bunn sentrert i de fleste tilfeller.",image:"/assets/documentation/toast/plassering-do.svg"}),a.createElement(c,{type:"dont",description:"Vi viser ikke toast fra toppen på siden. Bruk SystemMessage om du vil vise innhold her.",image:"/assets/documentation/toast/plassering-dont.svg"})),"\n",a.createElement(t.h3,null,"Gruppering"),"\n",a.createElement(t.p,null,"Flere toasts kan vises på samme tid, vertikalt stablet med spacing mellom. De siste meldingene vises øverst."),"\n",a.createElement(i,null,a.createElement(c,{type:"do",description:"Grupper med spacing, gjerne nede til venstre, vekk fra hovedinnholdet.",image:"/assets/documentation/toast/gruppering-do.svg"}),a.createElement(c,{type:"dont",description:"Ikke samle flere meldinger i samme toast.",image:"/assets/documentation/toast/gruppering-dont.svg"})),"\n",a.createElement(t.h4,null,"Unngå mange samtidige toasts"),"\n",a.createElement(t.p,null,"Selv om en toast ikke er like forstyrrende som en dialog, tiltrekker den likevel brukerens oppmerksomhet. Hyppige avbrudd forstyrrer brukervennligheten, spesielt for personer med visuelle og kognitive funksjonsnedsettelser."),"\n",a.createElement(t.h3,null,"Eksempel på plassering"),"\n",a.createElement(s,{title:"Plassering",component:l.y,codeExample:d,knobs:l.N,noDensity:!0}),"\n",a.createElement(t.h2,null,"Når bruker vi Toast?"),"\n",a.createElement(t.p,null,"For enkle feedback og lavprioriterte advarsler er det hensiktsmessig å bruke toast."),"\n",a.createElement(t.p,null,"Så snart handlingen trenger mer oppmerksomhet fra brukeren, for eksempel for å få svar på en handling, er det bedre å bruke ",a.createElement(t.a,{href:"/preview/material-icons-check-cross/komponenter/message"},"Message"),"."),"\n",a.createElement(t.h2,null,"Animasjon"),"\n",a.createElement(t.p,null,"En toast går inn i viewporten fra bunnen, sentrert eller venstrejustert, og går tilbake samme vei den kom fra når den lukkes."),"\n",a.createElement(t.h2,null,"Universell utforming"),"\n",a.createElement(t.p,null,"Vær oppmerksom på hvor ofte du utløser toasts. Hyppige avbrudd forstyrrer brukervennligheten, spesielt for personer med visuelle og kognitive funksjonsnedsettelser."),"\n",a.createElement(t.h3,null,"Skjermlesere"),"\n",a.createElement(t.p,null,"Toasts vises i en ",a.createElement(t.em,null,"landmark region")," for å gjøre det enklere for brukere å navigere til dem. De er også merket som ",a.createElement(t.code,null,"status")," for å varsle brukere om innholdet, men uten å avbryte."),"\n",a.createElement(t.h3,null,"Automatisk lukking"),"\n",a.createElement(t.p,null,"Standard er at toasts forsvinner etter fem sekunder. Nedtellingen til dette settes på pause ved hover og fokus. Brukeren kan også lukke toasten før tiden har gått ut, ved å trykke på krysset."),"\n",a.createElement(t.h3,null,"Tastaturfokus"),"\n",a.createElement(t.p,null,"Om fokus er plassert i en toast i det den lukkes, flyttes automatisk fokus til neste åpne toast, hvis noen. Om det er siste toast som lukkes, flyttes tastaturfokus tilbake dit det var før det ble flyttet til toast-regionen."),"\n",a.createElement(t.h3,null,"Mer om universell utforming"),"\n",a.createElement(t.p,null,"Se gjerne ",a.createElement(t.a,{href:"https://react-spectrum.adobe.com/react-aria/useToast.html"},"dokumentasjonen til React Aria"),", som denne komponenten er basert på, for flere detaljer om universell utforming."),"\n",a.createElement(t.h2,null,"Tekst"),"\n",a.createElement(t.p,null,"En toast har begrenset plass til innhold, og derfor må innholdet være kort og konsist."),"\n",a.createElement(i,null,a.createElement(c,{type:"do",description:"Hold meldingen kort.",image:"/assets/documentation/toast/tekst-do.png"}),a.createElement(c,{type:"dont",description:"Ikke bruk vage titler, lange setninger, eller handlinger.",image:"/assets/documentation/toast/tekst-dont.png"})))}var p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?a.createElement(t,e,a.createElement(u,e)):u(e)};function k(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var g=n(68888),v=n(47672),f=n(52948),E=n(38776),b=n(20919);const h=e=>{let{pageContext:t}=e;return a.createElement(v.G,{title:t.title})},y=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:s}=n.page,{types:o}=r;return a.createElement(b.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(E.Ao,Object.assign({},s,{versions:r.versions})),t.pathname.includes("komponenter")&&a.createElement(f.A,{variant:"komponent",component:s.title}),a.createElement(E.f6,s),l,o&&a.createElement(g.N,{types:o}))};function j(e){return a.createElement(y,e,a.createElement(p,e))}},68888:function(e,t,n){n.d(t,{N:function(){return k}});var r=n(88635),a=n(24408),l=n(78022),s=n(7378),o=n(45371);const i=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,s=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",s)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(l.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,a,l,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(a.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&s.createElement(o.NG,{className:"jkl-portal-code-block"},i),r.length>0&&s.createElement(p,{props:r}),l.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:l})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(77800),a=n(38316),l=n(7378),s=n(45371);const o=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.u,null),l.createElement(s.fz,null,i[t].text)),l.createElement(r.N,{href:i[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},i={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return i}});var r=n(3698),a=n.n(r),l=n(94270),s=n(7378),o=n(79197);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,s.useContext)(o.M),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(l.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return i}});var r=n(45271),a=n(86106),l=n(3698),s=n.n(l);const o=["className","density","id"],i=e=>{let{className:t,density:n,id:l}=e,i=(0,r.A)(e,o);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",t),"data-density":n,id:l},i))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),a=n(86106),l=n(21197),s=n(82455),o=n(3698),i=n.n(o),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:o,startExpanded:d=!1,onClick:u,id:p}=e,k=(0,r.A)(e,m);const[g,v]=(0,c.useState)(d),[f]=(0,c.useState)((()=>d)),{detailsRef:E,summaryRef:b,contentRef:h,onSummaryClick:y}=(0,s.$)({onOpenChange:(e,t)=>{v(e),u&&u(t,e)},isExpanded:f});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:i()("jkl-accordion-item",o),ref:E,id:p,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:b,children:[n,(0,a.jsx)(l.l,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),a=n(19767),l=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(a.I,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))i.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return E}});var r=n(7378),a=n(10494),l=n(75374),s=n(82462),o=n(60630),i=n(94624),c=n(65759),m=n(21664),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:E,columns:b,emptyTableText:h,rows:y,verticalAlign:j}=d,N=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&v.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.X,(n=((e,t)=>{for(var n in t||(t={}))g.call(t,n)&&f(e,n,t[n]);if(k)for(var n of k(t))v.call(t,n)&&f(e,n,t[n]);return e})({fullWidth:!0},N),u(n,p({ref:t}))),E&&r.createElement(s.r,{srOnly:!0},E),r.createElement(i.n,null,r.createElement(m.H,null,b.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.B,null,0===y.length&&h&&r.createElement(m.H,null,r.createElement(o.n,{colSpan:b.length},h)),y.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(o.n,{key:t,"data-th":b[t],verticalAlign:j},e))))))))}));E.displayName="DataTable"}}]);