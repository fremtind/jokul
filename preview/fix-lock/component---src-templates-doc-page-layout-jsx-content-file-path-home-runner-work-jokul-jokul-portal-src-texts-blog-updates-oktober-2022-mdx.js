"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7606],{86631:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return u},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",ul:"ul",li:"li",code:"code",a:"a",h2:"h2",em:"em",img:"img",h3:"h3"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,l.createElement(t.p,null,"I oktober tok Jøkul-teamet et skippertak på et nytt konsept for dokumentasjonssider her i portalen. Samtidig har det\nskjedd ting både i kode og Figma. Her er høydepunktene.")),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Vi har byttet om på plasseringen av piler i Accordion."),"\n",l.createElement(t.li,null,"Feedback-modulen sitt hovedspørsmål kan få en hjelpetekst."),"\n",l.createElement(t.li,null,'Et utkast til InputGroup i Figma ble "sendt ut på høring".'),"\n",l.createElement(t.li,null,"Det samme ble et forslag til teknisk løsning for mer teknisk avanserte animasjoner."),"\n",l.createElement(t.li,null,"Ny validator for skjemainputs ",l.createElement(t.code,null,"hasNoIllegalCharacters"),", for å luke ut spesialtegn."),"\n",l.createElement(t.li,null,'Den siste lenken i Breadcrumb oppfører seg visuelt som tekst for "pekerbrukere".'),"\n",l.createElement(t.li,null,"Fallback-fonter på web er justerte til å ligne Fremtind Grotesk mest mulig."),"\n"),"\n",l.createElement(t.p,null,"I tillegg bød oktober på en bukett med bugfikser, både i kode og i Figma."),"\n",l.createElement(t.p,null,"Minner om at du under ",l.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/3"},"Projects på GitHub")," kan se hva vi jobber med for tiden. Designere er kanskje interesserte i vår ",l.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/1"},"dedikerte visning for visuelle endringer"),". Håpet er at det skal bli mer synlig hva vi driver med, og enklere å gi tilbakemelding underveis."),"\n",l.createElement(t.h2,null,"Byttet plassering av pila på Accordion"),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"By popular demand")," blant annet på Designsystemforum har pila i Accordion blitt flyttet fra venstre til høyre, og fått justert padding noe. ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3132"},"Detaljene finner du på GitHub-issuet"),"."),"\n",l.createElement(t.h2,null,"Hjelpetekst i Feedback"),"\n",l.createElement(t.p,null,"SeOpp-teamet fant behov for å legge til en hjelpetekst under hovedspørsmålet i Feedback-modulen, og Bjørne sørget for å ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3211"},"legge dette til i Jøkul"),"."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/updates/oktober-2022/feedback-helplabel.png",alt:"Skjermbilde som viser et spørsmål om hvor fornøyd en besøkende er med behandling av en sak. Under spørsmålet er det en skala med seks radioknapper listet horisontalt, med verdier fra 1 til 6. Hjelpetekst vises under radioknappene som forklarer at 1 er svært misfornøyd, og 6 er svært fornøyd."})),"\n",l.createElement(t.h2,null,"InputGroup"),"\n",l.createElement(t.p,null,"Det jobbes med å lande en praktisk og fleksibel måte å tilby skjemakomponenter i Figma. Mange typer input skal ofte ha en label og hjelpetekst eller feilmelding, og skal ha en viss type spacing mellom de ulike delene."),"\n",l.createElement(t.p,null,"Diskusjonen har gått på ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3136"},"issuet på GitHub")," og på Designsystemforum, og Jøkul-teamet kom med et ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3136#issuecomment-1281875307"},"forslag til løsning i midten av oktober"),". Løsning er ikke landet helt ennå, så involver deg gjerne i diskusjonen på issuet."),"\n",l.createElement(t.h2,null,"Animasjoner"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.framer.com/motion/"},"Framer Motion")," har en tendens til å snike seg inn i Jøkul fra tid til annen, sist i Tooltip-komponenten. Det er et flott og kraftig verktøy, men med den ulempen at det er en ",l.createElement(t.a,{href:"https://bundlephobia.com/package/framer-motion@7.6.2"},"ganske stor avhengighet målt i antall kB"),"."),"\n",l.createElement(t.p,null,"For å redusere bundlestørrelsen til de som bruker Jøkul ønsker vi unngå Framer i komponentene, i hvertfall på sikt. Jøkul-teamet kom med et ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3202"},"forslag basert på React Transition Group og CSS-baserte animasjoner")," som kan gjøre jobben Framer gjør i dag. Forslaget legger opp til at vi kan få et voksende bibliotek med gjenbrukbare animasjoner."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/updates/oktober-2022/unframer-tooltip.gif",alt:"Skjermopptak som viser Tooltip-animasjonen med ny teknologi. Lik den gamle, men mindre bundlestørrelse."})),"\n",l.createElement(t.h2,null,"Ny validator"),"\n",l.createElement(t.p,null,"Kenneth har lagt til en ny valideringsfunksjon i ",l.createElement(t.code,null,"@fremtind/jkl-validators-util"),": ",l.createElement(t.code,null,"hasNoIllegalCharacters"),". Denne kan du bruke i skjemaene dine for å luke ut spesialtegn som vi typisk bare ser om noen har pølsefingre eller uærlige hensikter."),"\n",l.createElement(t.p,null,"Listen over tegn som får validatoren til å feile finner du ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3206/files#diff-91d447ff118490d9474c09d5698525dfa96cd988ed5b5102114df29c1d0bcf8c"},"i pull requesten"),"."),"\n",l.createElement(t.h2,null,"Breadcrumb"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3128"},"Brødsmulestien har fått noen justeringer")," i kode som gjør implementasjonen lik den som er i Figma. Kort fortalt:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Det siste elementet (nåværende side) ser ut som tekst."),"\n",l.createElement(t.li,null,"Teknisk sett er det en lenke, av hensyn til skjermlesere som får annonsert det som nåværende side."),"\n",l.createElement(t.li,null,"Tastaturbrukere får fremdeles fokus-ring."),"\n",l.createElement(t.li,null,"Lenken er klikkbar, men gir ingen visuell endring ved hover."),"\n"),"\n",l.createElement(t.h2,null,"Justerte fallback-fonter"),"\n",l.createElement(t.p,null,"Sidene våre bruker Fremtind Grotesk, men nye besøkende vil kunne få en kort periode med ",l.createElement(t.em,null,"fallback-font")," før vår egen font er lastet ned. Siden ingen to fonter er like vil det resultere i noe som heter ",l.createElement(t.a,{href:"https://web.dev/cls/"},l.createElement(t.em,null,"cumulative layout shift"))," (CLS). Høyder og bredder på tekster vil være forskjellige, og dermed høyden og bredden på alle elementer på siden."),"\n",l.createElement(t.p,null,"Hvis vi har en stor CLS vil det gi et rotete og potensielt frustrerende førsteinntrykk dersom for eksempel en knapp brukeren var i ferd med å trykke på plutselig rykker opp eller ned på siden."),"\n",l.createElement(t.p,null,"For å redusere CLS justerte vi fallback-fonter med CSS i oktober. Effekten synes når vi sammenligner ",l.createElement(t.em,null,"før")," og ",l.createElement(t.em,null,"etter"),", som i ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3186#issuecomment-1273226269"},"videoene i denne kommentaren på GitHub"),". Forskjellen er best synlig lengst ned på siden siden den akkumulerte forskjellen blir større jo lenger ut i tekstinnholdet man kommer."),"\n",l.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",l.createElement(t.h3,null,"Figma"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Slot Components kan få bedre hint om bruk (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3076"},"#3076"),")."),"\n",l.createElement(t.li,null,"Visuell sjekk av det nye biblioteket (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3094"},"#3094"),")."),"\n",l.createElement(t.li,null,"Justerte paddinger i Button (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3169"},"#3169"),")."),"\n",l.createElement(t.li,null,"Refactor fokus-markering for Tab (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3171"},"#3171"),")."),"\n",l.createElement(t.li,null,"Fjern absolute position for Radio og Checkbox (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3173"},"#3173"),")."),"\n"),"\n",l.createElement(t.h3,null,"GitHub"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Fjernet dobbel bunnstrek og avrundet kanter i søkbar Select uten treff (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3111"},"#3111"),")."),"\n",l.createElement(t.li,null,"Hver React-pakke har nå sitt eget ",l.createElement(t.code,null,"test"),"-script (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3135"},"#3135"),")."),"\n",l.createElement(t.li,null,"Tastaturbrukere får fokus flyttet til skip-links ved sidebytte (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3138"},"#3138"),")."),"\n",l.createElement(t.li,null,"TextArea som starter åpnet kan scrolles igjen (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3140"},"#3140"),")."),"\n",l.createElement(t.li,null,"Rettet en regresjon i Select hvor den kuttt toppen av valget når den åpnet for andre gang (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3153"},"#3153"),")."),"\n",l.createElement(t.li,null,"Rettet opp i annonsering av sidetittel som var ett steg bak (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3155"},"#3155"),")."),"\n",l.createElement(t.li,null,"Omtaler Comfortable som Default i eksemplene i portalen (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3170"},"#3170"),")."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"useIntersectionObserver")," kan nå se på flere elementer samtidig (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3182"},"#3182"),")."),"\n",l.createElement(t.li,null,"CookieConsent scroller ikke lenger vinduet til bunnen (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3208"},"#3208"),")."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"00000000000")," anses ikke lenger som et gyldig fødselsnummer (",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3210"},"#3210"),")."),"\n"),"\n",l.createElement(t.h2,null,"Takk"),"\n",l.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"BjorneOma"),"\n",l.createElement(t.li,null,"hegebjo"),"\n",l.createElement(t.li,null,"kennidenni"),"\n"),"\n",l.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};var s=n(72285),o=n(22756),m=n(95573),c=n(1634);const u=e=>{let{pageContext:t}=e;return l.createElement(o.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:o}=r;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},i,{versions:r.versions})),l.createElement(m.w5,i),a,o&&l.createElement(s.l,{types:o}))};function p(e){return l.createElement(d,e,l.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(78217),l=n(76802),a=n(87505),i=n(70079),s=n(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],o=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),r.length>0&&i.createElement(p,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),s=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),l=n.n(r),a=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(53484),l=n(26372),a=n.n(l),i=n(70079);const s=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,i.useRef)(null),l=(0,i.useRef)(null),a=(0,i.useRef)(null),s=(0,i.useRef)(null),{0:o,1:m}=(0,i.useState)(!1),{0:c,1:u}=(0,i.useState)(!1);(0,i.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const d=e=>{r.current&&l.current&&(r.current.open=e,s.current=null,m(!1),u(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:l,contentRef:a,onSummaryClick:e=>{e.preventDefault(),r.current&&l.current&&(r.current.style.overflow="hidden",o||!r.current.open?(e=>{r.current&&l.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&l.current&&a.current){u(!0),t(!0,e);const n=r.current.offsetHeight,i=l.current.offsetHeight+a.current.offsetHeight;s.current&&s.current.cancel(),r.current.animate&&(s.current=r.current.animate({height:["".concat(n,"px"),"".concat(i,"px")]},{duration:150,easing:"ease"}),s.current.onfinish=()=>d(!0),s.current.oncancel=()=>u(!1))}})))})(e):(c||r.current.open)&&(e=>{if(r.current&&l.current){m(!0),t(!1,e);const n=r.current.offsetHeight,a=l.current.offsetHeight;s.current&&s.current.cancel(),r.current.animate&&(s.current=r.current.animate({height:["".concat(n,"px"),"".concat(a,"px")]},{duration:150,easing:"ease"}),s.current.onfinish=()=>d(!1),s.current.oncancel=()=>m(!1))}})(e))}}},o=e=>{let{children:t,title:n,className:l,startExpanded:o=!1,onClick:m,...c}=e;const{0:u,1:d}=(0,i.useState)(o),{detailsRef:p,summaryRef:k,contentRef:f,onSummaryClick:g}=s({onOpenChange:(e,t)=>{d(e),m&&m(t,e)},startExpanded:o});return i.createElement("details",{"data-testid":"jkl-accordion-item",...c,className:a()("jkl-accordion-item",l),ref:p},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:k},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),s=n(82546),o=n(39126),m=n(66169),c=n(94509);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...f}=e;return r.createElement(l.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(o.s,null,r.createElement(c.S,null,u.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&d&&r.createElement(c.S,null,r.createElement(s.p,{colSpan:u.length},d)),p.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);