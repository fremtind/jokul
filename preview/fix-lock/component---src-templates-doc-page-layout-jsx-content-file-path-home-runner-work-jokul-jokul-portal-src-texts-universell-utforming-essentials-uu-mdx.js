"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8713],{63454:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",ul:"ul",li:"li",strong:"strong",a:"a",img:"img"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Universell utforming i Jøkul"),"\n",l.createElement(n,null,l.createElement(t.p,null,"Universell utforming handler om at vi skal lage løsninger med tanke på at brukere kan ha ulik funksjonsevne,\nmidlertidig eller varig. Ved å ta hensyn til det, når vi alle målgruppene med én og samme løsning.")),"\n",l.createElement(t.p,null,"Det er fort gjort å tenke at universell utforming kun gjelder en liten gruppe mennesker. Men man regner med at mellom 15% og 20% av befolkningen har en form for funksjonsnedsettelse. Dette kan være for eksempel syn, hørsel, bevegelseshemming eller psykososiale funksjonsnedsettelser."),"\n",l.createElement(t.p,null,"Men dette er bare de som har permanente nedsettelser. Selv opplever vi alle flere ganger daglig å ha en form for funksjonsnedsettelse. Dette kan være en fysisk nedsettelse ved at du klemmer en finger så du ikke kan bruke ene hånden ordentlig. Eller det kan være en mental nedsettelse som når du står på perrongen og skal kjøpe togbillett mens toget ruller inn på stasjonen."),"\n",l.createElement(t.p,null,"I alle tilfeller er det viktig at en løsning har tenkt på universell utforming sånn at alle kan bruke tjenesten, uansett om de har permanente, temporærere, fysiske eller mentale nedsettelser."),"\n",l.createElement(t.p,null,"Lovverket definerer i dag at alle nye tjenester skal være universelt utformet fra 1. juli 2014. Eksisterende tjenester skal være universelt utformet innen 1. januar 2020. I tillegg er en oppdatering av lovverket på vei hvor kravene vil oppgraderes til å omfatte WCAG2.1 samt krav til en tilgjengelighetserklæring.\nI utgangspunktet skulle det komme en lov 1. juli 2020 som innfattet dette, men denne ble forsinket da mange land ønsket en lenger overgangsperiode for innføring av de nye kravene. Dette er derimot ingen grunn til å vente med å utvide støtten. Over tid vil denne siden ta for seg flere krav og kunne gi dokumentasjon for hvordan du kommer i gang med en tilgjengelighetserklæring."),"\n",l.createElement(t.h2,null,"Språk"),"\n",l.createElement(t.p,null,"For at opplesende hjelpemidler skal kunne velge riktig stemme må språk være satt i koden. Dette gjør man ved å definere ",l.createElement(t.code,null,"lang")," attributten på ",l.createElement(t.code,null,"<html>")," taggen. Språket må angis ved å bruke språkkode definert i ISO 639-1 standarden."),"\n",l.createElement(t.p,null,"De mest brukte kodene er"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"no"),": norsk"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"nb"),": bokmål"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"nn"),": nynorsk"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"en"),": engelsk"),"\n"),"\n",l.createElement(t.p,null,"En annen sideeffekt av å bruke riktig språk er at søkemotorer får hjelp til å gi relevante traff."),"\n",l.createElement(t.p,null,"I Fremtind har vi en tone of voice som heter Stemmen vår. Den kan du ",l.createElement(t.a,{href:"/preview/fix-lock/profil/stilogtone"},"lese mer om her"),"."),"\n",l.createElement(t.p,null,'Når det kommer til språk er det lurt å teste med en skjermleser for å få et bilde av hvordan siden faktisk høres ut. Her vil man oppdage at man eksempelvis bør unngå bindestrek: skriv "Fra 1 til 10" i stedet for "Fra 1-10". Det kan også være behov for å gi egne tekster til skjermleseren for å gi kontekst som ikke er enkel å oppfatte uten å se selve siden.'),"\n",l.createElement(t.h2,null,"Sidetittel"),"\n",l.createElement(t.p,null,"Sidetittel presenteres øverst i vinduet eller i fanen i nettleseren. Den er et resultat av ",l.createElement(t.code,null,"<title>")," taggen i ",l.createElement(t.code,null,"<head>"),". Sidetittelen er det første som leses av hjelpemidler, og skal være beskrivende for hvilke side brukeren er på og navnet på nettstedeieren."),"\n",l.createElement(t.p,null,"Det er god praksis å innlede sidetittelen med beskrivelse av siden, og deretter nettstedeier. Dette er spesielt med tanke på at det kan være begrenset plass i visningen av navnet. For brukere med for eksempel skjermleser vil det ta kortere tid å få relevant informasjon når sidebeskrivelsen kommer først."),"\n",l.createElement(t.h2,null,"ARIA"),"\n",l.createElement(t.p,null,"ARIA, også kjent som WAI-ARIA (Accessibility Initiative – Accessible Rich Internet Applications) er en spesifikasjon som ble laget for å forbedre tilgjengelighet i HTML. Bruken av ARIA attributter er å utvide funksjonalitet for hjelpemidler hvor ikke semantikk er nok."),"\n",l.createElement(t.p,null,"ARIA-attributter endrer ingenting på nettsiden. Derimot eksponerer de mer informasjon til hjelpemidler, spesielt skjermleser. Eksempelvis er ikke en knapp faktisk disabled ved bare å sette ",l.createElement(t.code,null,'aria-disabled="true"'),", men man må også bruke ",l.createElement(t.code,null,"disabled")," attributten på elementet."),"\n",l.createElement(t.p,null,"Det er viktig å være obs på bruk av ARIA: Det er ikke en offisielt vedtatt spesifikasjon, og støtten kan være forskjellig mellom både operativsystemer, nettlesere og hjelpemidler. En god huskeregel er å kun bruke ARIA når det er nødvendig. Så langt det er mulig skal man forholde seg til standard HTML funksjonalitet. Man kan faktisk gjøre opplevelsen av nettsiden mye dårligere av å bruke ARIA feil. Tidligere har tilgjengelighet og ARIA blitt sett på som samme ting, det er feil. ARIA er viktig for mange, og dermed viktig for oss, men det er en relativt liten komponent i å lage gode opplevelser på nett for alle."),"\n",l.createElement(t.p,null,"Eksempler på mye brukte ARIA attributter er blant annet ",l.createElement(t.code,null,"role"),", ",l.createElement(t.code,null,"tabindex")," og ",l.createElement(t.code,null,"aria-labelledby"),"."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.w3.org/TR/wai-aria-1.1/#state_prop_def"},"Her kan du lese mer om de forskjellige attributtene og når de skal brukes.")),"\n",l.createElement(t.h2,null,"Semantikk"),"\n",l.createElement(t.p,null,"Når man snakker om semantikk og tilgjengelighet, er det ofte betydningen av HTML man snakker om. For eksempel er ",l.createElement(t.code,null,"h1")," et semantisk HTML element, som gir innholdet betydningen av å være toppoverskrift på siden. Nettlesere vil ofte legge på en stil på elementet, men man kan stile semantiske elementer akkurat som man vil. Om man stiler et ",l.createElement(t.code,null,"span")," element til å se ut som en h1, vil det gi samme visuelle betydning, men den faktiske betydningen av elementet er endret."),"\n",l.createElement(t.p,null,"Semantiske HTML elementer hjelper skjermlesere med navigasjon. De gir landemerker skjermleseren kan forholde seg til, og kan gi kontekst til brukeren. I tillegg gir god semantikk bedre score hos søkemotorer, og det motiverer til god kode. Man vil også enklere få en meningsfull flyt"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"http://html5doctor.com/downloads/h5d-sectioning-flowchart.png",alt:"Flytskjema for hvordan man kan bruke semantiske HTML elementer"})),"\n",l.createElement(t.p,null,"På Mac kan man få en enkel oversikt over viktige semantiske elementer på siden ved å ta i bruk 'rotor' i VoiceOver. Se ",l.createElement(t.a,{href:"/preview/fix-lock/universell-utforming/skjermleser"},"guide til test av skjermleser"),"."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};var s=n(72285),o=n(22756),m=n(95573),c=n(1634);const d=e=>{let{pageContext:t}=e;return l.createElement(o.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:o}=r;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},i,{versions:r.versions})),l.createElement(m.w5,i),a,o&&l.createElement(s.l,{types:o}))};function p(e){return l.createElement(u,e,l.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(78217),l=n(76802),a=n(87505),i=n(70079),s=n(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],o=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),r.length>0&&i.createElement(p,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),s=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),l=n.n(r),a=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(53484),l=n(26372),a=n.n(l),i=n(70079);const s=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),s=(0,i.useRef)(null),{0:o,1:m}=(0,i.useState)(!1),{0:c,1:d}=(0,i.useState)(!1);(0,i.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const u=e=>{r.current&&l.current&&(r.current.open=e,s.current=null,m(!1),d(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:l,contentRef:a,onSummaryClick:e=>{e.preventDefault(),r.current&&l.current&&(r.current.style.overflow="hidden",o||!r.current.open?(e=>{r.current&&l.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&l.current&&a.current){d(!0),t(!0,e);const n=r.current.offsetHeight,i=l.current.offsetHeight+a.current.offsetHeight;s.current&&s.current.cancel(),r.current.animate&&(s.current=r.current.animate({height:["".concat(n,"px"),"".concat(i,"px")]},{duration:150,easing:"ease"}),s.current.onfinish=()=>u(!0),s.current.oncancel=()=>d(!1))}})))})(e):(c||r.current.open)&&(e=>{if(r.current&&l.current){m(!0),t(!1,e);const n=r.current.offsetHeight,a=l.current.offsetHeight;s.current&&s.current.cancel(),r.current.animate&&(s.current=r.current.animate({height:["".concat(n,"px"),"".concat(a,"px")]},{duration:150,easing:"ease"}),s.current.onfinish=()=>u(!1),s.current.oncancel=()=>m(!1))}})(e))}}},o=e=>{let{children:t,title:n,className:l,startExpanded:o=!1,onClick:m,...c}=e;const{0:d,1:u}=(0,i.useState)(o),{detailsRef:p,summaryRef:k,contentRef:g,onSummaryClick:f}=s({onOpenChange:(e,t)=>{u(e),m&&m(t,e)},startExpanded:o});return i.createElement("details",{"data-testid":"jkl-accordion-item",...c,className:a()("jkl-accordion-item",l),ref:p},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:k},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),s=n(82546),o=n(39126),m=n(66169),c=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(o.s,null,r.createElement(c.S,null,d.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&u&&r.createElement(c.S,null,r.createElement(s.p,{colSpan:d.length},u)),p.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);