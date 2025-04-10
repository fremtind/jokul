"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7606],{86631:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return u},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",ul:"ul",li:"li",code:"code",a:"a",h2:"h2",em:"em",img:"img",h3:"h3"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"I oktober tok Jøkul-teamet et skippertak på et nytt konsept for dokumentasjonssider her i portalen. Samtidig har det\nskjedd ting både i kode og Figma. Her er høydepunktene.")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Vi har byttet om på plasseringen av piler i Accordion."),"\n",r.createElement(t.li,null,"Feedback-modulen sitt hovedspørsmål kan få en hjelpetekst."),"\n",r.createElement(t.li,null,'Et utkast til InputGroup i Figma ble "sendt ut på høring".'),"\n",r.createElement(t.li,null,"Det samme ble et forslag til teknisk løsning for mer teknisk avanserte animasjoner."),"\n",r.createElement(t.li,null,"Ny validator for skjemainputs ",r.createElement(t.code,null,"hasNoIllegalCharacters"),", for å luke ut spesialtegn."),"\n",r.createElement(t.li,null,'Den siste lenken i Breadcrumb oppfører seg visuelt som tekst for "pekerbrukere".'),"\n",r.createElement(t.li,null,"Fallback-fonter på web er justerte til å ligne Fremtind Grotesk mest mulig."),"\n"),"\n",r.createElement(t.p,null,"I tillegg bød oktober på en bukett med bugfikser, både i kode og i Figma."),"\n",r.createElement(t.p,null,"Minner om at du under ",r.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/3"},"Projects på GitHub")," kan se hva vi jobber med for tiden. Designere er kanskje interesserte i vår ",r.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/1"},"dedikerte visning for visuelle endringer"),". Håpet er at det skal bli mer synlig hva vi driver med, og enklere å gi tilbakemelding underveis."),"\n",r.createElement(t.h2,null,"Byttet plassering av pila på Accordion"),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"By popular demand")," blant annet på Designsystemforum har pila i Accordion blitt flyttet fra venstre til høyre, og fått justert padding noe. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3132"},"Detaljene finner du på GitHub-issuet"),"."),"\n",r.createElement(t.h2,null,"Hjelpetekst i Feedback"),"\n",r.createElement(t.p,null,"SeOpp-teamet fant behov for å legge til en hjelpetekst under hovedspørsmålet i Feedback-modulen, og Bjørne sørget for å ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3211"},"legge dette til i Jøkul"),"."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/oktober-2022/feedback-helplabel.png",alt:"Skjermbilde som viser et spørsmål om hvor fornøyd en besøkende er med behandling av en sak. Under spørsmålet er det en skala med seks radioknapper listet horisontalt, med verdier fra 1 til 6. Hjelpetekst vises under radioknappene som forklarer at 1 er svært misfornøyd, og 6 er svært fornøyd."})),"\n",r.createElement(t.h2,null,"InputGroup"),"\n",r.createElement(t.p,null,"Det jobbes med å lande en praktisk og fleksibel måte å tilby skjemakomponenter i Figma. Mange typer input skal ofte ha en label og hjelpetekst eller feilmelding, og skal ha en viss type spacing mellom de ulike delene."),"\n",r.createElement(t.p,null,"Diskusjonen har gått på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3136"},"issuet på GitHub")," og på Designsystemforum, og Jøkul-teamet kom med et ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3136#issuecomment-1281875307"},"forslag til løsning i midten av oktober"),". Løsning er ikke landet helt ennå, så involver deg gjerne i diskusjonen på issuet."),"\n",r.createElement(t.h2,null,"Animasjoner"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://www.framer.com/motion/"},"Framer Motion")," har en tendens til å snike seg inn i Jøkul fra tid til annen, sist i Tooltip-komponenten. Det er et flott og kraftig verktøy, men med den ulempen at det er en ",r.createElement(t.a,{href:"https://bundlephobia.com/package/framer-motion@7.6.2"},"ganske stor avhengighet målt i antall kB"),"."),"\n",r.createElement(t.p,null,"For å redusere bundlestørrelsen til de som bruker Jøkul ønsker vi unngå Framer i komponentene, i hvertfall på sikt. Jøkul-teamet kom med et ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3202"},"forslag basert på React Transition Group og CSS-baserte animasjoner")," som kan gjøre jobben Framer gjør i dag. Forslaget legger opp til at vi kan få et voksende bibliotek med gjenbrukbare animasjoner."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/oktober-2022/unframer-tooltip.gif",alt:"Skjermopptak som viser Tooltip-animasjonen med ny teknologi. Lik den gamle, men mindre bundlestørrelse."})),"\n",r.createElement(t.h2,null,"Ny validator"),"\n",r.createElement(t.p,null,"Kenneth har lagt til en ny valideringsfunksjon i ",r.createElement(t.code,null,"@fremtind/jkl-validators-util"),": ",r.createElement(t.code,null,"hasNoIllegalCharacters"),". Denne kan du bruke i skjemaene dine for å luke ut spesialtegn som vi typisk bare ser om noen har pølsefingre eller uærlige hensikter."),"\n",r.createElement(t.p,null,"Listen over tegn som får validatoren til å feile finner du ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3206/files#diff-91d447ff118490d9474c09d5698525dfa96cd988ed5b5102114df29c1d0bcf8c"},"i pull requesten"),"."),"\n",r.createElement(t.h2,null,"Breadcrumb"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3128"},"Brødsmulestien har fått noen justeringer")," i kode som gjør implementasjonen lik den som er i Figma. Kort fortalt:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Det siste elementet (nåværende side) ser ut som tekst."),"\n",r.createElement(t.li,null,"Teknisk sett er det en lenke, av hensyn til skjermlesere som får annonsert det som nåværende side."),"\n",r.createElement(t.li,null,"Tastaturbrukere får fremdeles fokus-ring."),"\n",r.createElement(t.li,null,"Lenken er klikkbar, men gir ingen visuell endring ved hover."),"\n"),"\n",r.createElement(t.h2,null,"Justerte fallback-fonter"),"\n",r.createElement(t.p,null,"Sidene våre bruker Fremtind Grotesk, men nye besøkende vil kunne få en kort periode med ",r.createElement(t.em,null,"fallback-font")," før vår egen font er lastet ned. Siden ingen to fonter er like vil det resultere i noe som heter ",r.createElement(t.a,{href:"https://web.dev/cls/"},r.createElement(t.em,null,"cumulative layout shift"))," (CLS). Høyder og bredder på tekster vil være forskjellige, og dermed høyden og bredden på alle elementer på siden."),"\n",r.createElement(t.p,null,"Hvis vi har en stor CLS vil det gi et rotete og potensielt frustrerende førsteinntrykk dersom for eksempel en knapp brukeren var i ferd med å trykke på plutselig rykker opp eller ned på siden."),"\n",r.createElement(t.p,null,"For å redusere CLS justerte vi fallback-fonter med CSS i oktober. Effekten synes når vi sammenligner ",r.createElement(t.em,null,"før")," og ",r.createElement(t.em,null,"etter"),", som i ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3186#issuecomment-1273226269"},"videoene i denne kommentaren på GitHub"),". Forskjellen er best synlig lengst ned på siden siden den akkumulerte forskjellen blir større jo lenger ut i tekstinnholdet man kommer."),"\n",r.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(t.h3,null,"Figma"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Slot Components kan få bedre hint om bruk (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3076"},"#3076"),")."),"\n",r.createElement(t.li,null,"Visuell sjekk av det nye biblioteket (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3094"},"#3094"),")."),"\n",r.createElement(t.li,null,"Justerte paddinger i Button (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3169"},"#3169"),")."),"\n",r.createElement(t.li,null,"Refactor fokus-markering for Tab (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3171"},"#3171"),")."),"\n",r.createElement(t.li,null,"Fjern absolute position for Radio og Checkbox (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3173"},"#3173"),")."),"\n"),"\n",r.createElement(t.h3,null,"GitHub"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Fjernet dobbel bunnstrek og avrundet kanter i søkbar Select uten treff (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3111"},"#3111"),")."),"\n",r.createElement(t.li,null,"Hver React-pakke har nå sitt eget ",r.createElement(t.code,null,"test"),"-script (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3135"},"#3135"),")."),"\n",r.createElement(t.li,null,"Tastaturbrukere får fokus flyttet til skip-links ved sidebytte (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3138"},"#3138"),")."),"\n",r.createElement(t.li,null,"TextArea som starter åpnet kan scrolles igjen (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3140"},"#3140"),")."),"\n",r.createElement(t.li,null,"Rettet en regresjon i Select hvor den kuttt toppen av valget når den åpnet for andre gang (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3153"},"#3153"),")."),"\n",r.createElement(t.li,null,"Rettet opp i annonsering av sidetittel som var ett steg bak (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3155"},"#3155"),")."),"\n",r.createElement(t.li,null,"Omtaler Comfortable som Default i eksemplene i portalen (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3170"},"#3170"),")."),"\n",r.createElement(t.li,null,r.createElement(t.code,null,"useIntersectionObserver")," kan nå se på flere elementer samtidig (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3182"},"#3182"),")."),"\n",r.createElement(t.li,null,"CookieConsent scroller ikke lenger vinduet til bunnen (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3208"},"#3208"),")."),"\n",r.createElement(t.li,null,r.createElement(t.code,null,"00000000000")," anses ikke lenger som et gyldig fødselsnummer (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/3210"},"#3210"),")."),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"BjorneOma"),"\n",r.createElement(t.li,null,"hegebjo"),"\n",r.createElement(t.li,null,"kennidenni"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var s=n(72285),o=n(22756),m=n(95573),c=n(1634);const u=e=>{let{pageContext:t}=e;return r.createElement(o.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:o}=l;return r.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},i,{versions:l.versions})),r.createElement(m.w5,i),a,o&&r.createElement(s.l,{types:o}))};function p(e){return r.createElement(d,e,r.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(78217),r=n(41994),a=n(87505),i=n(70079),s=n(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],o=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),s=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(26372),r=n.n(l),a=n(70079);const i=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},41994:function(e,t,n){n.d(t,{Q:function(){return m}});var l=n(53484),r=n(3438),a=n(84490),i=n(26372),s=n.n(i),o=n(70079);const m=e=>{let{children:t,title:n,className:i,startExpanded:m=!1,onClick:c,...u}=e;const d=(0,r.M)("title"),p=(0,r.M)("content"),{0:k,1:f}=(0,o.useState)(m),[g]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return o.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:s()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":k})},o.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;f(t),c&&c(e,t)}},n,o.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),o.createElement("div",{id:p,ref:g,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),s=n(82546),o=n(39126),m=n(66169),c=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(o.s,null,l.createElement(c.S,null,u.map(((e,t)=>l.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(c.S,null,l.createElement(s.p,{colSpan:u.length},d)),p.map(((e,t)=>l.createElement(c.S,{key:t},e.map(((e,t)=>l.createElement(s.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);