"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1664],{84236:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return p},default:function(){return f}});var l=n(47160),r=n(70079),a=n(60203),i=n(54800);function s(e){const t=Object.assign({p:"p",ul:"ul",li:"li",em:"em",a:"a",h2:"h2",code:"code",img:"img",h3:"h3"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Nye varianter, nye komponenter, nytt typografinivå, og nye features. Her er høydepunktene fra Jøkul i september.")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Nye Compact er lansert!"),"\n",r.createElement(t.li,null,"Vi har fått en ny komponent: Tooltip."),"\n",r.createElement(t.li,null,"Et nytt typografinivå har blitt etablert: ",r.createElement(t.em,null,"Title small"),"."),"\n",r.createElement(t.li,null,"Visuelle endringer i Select for å tydeliggjøre scrollmulighet."),"\n",r.createElement(t.li,null,"Autosuggest kan nå konfigureres til å gi forslag hvis det ikke er noen treff på søket til brukeren."),"\n",r.createElement(t.li,null,"Eksperimenter med Jøkul-kode i ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/kom-i-gang/lekegrind"},"lekegrinda"),"."),"\n"),"\n",r.createElement(t.p,null,"Jøkul-teamet har også begynt å bruke GitHub Projects flittig."),"\n",r.createElement(t.p,null,"Under ",r.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/3"},"Projects")," kan du se hva vi jobber med for tiden. Designere er kanskje interesserte i vår ",r.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/1"},"dedikerte visning for visuelle endringer"),"."),"\n",r.createElement(t.p,null,"Håpet er at det skal bli mer synlig hva vi driver med, og enklere å gi tilbakemelding underveis."),"\n",r.createElement(t.h2,null,"Nye kompaktvarianter"),"\n",r.createElement(t.p,null,"Vi skal ikke gjenta oss for mye, så les gjerne ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/blog/compact-reboot/"},"Kompaktvarianter har landet")," for detaljene om dette."),"\n",r.createElement("div",{className:"jkl-portal-paragraph"},r.createElement("p",{className:"jkl-bold"},"tl;dr",a.NON_BREAKING_SPACE,r.createElement(i.u,{content:"Too long; didn't read"}))),"\n",r.createElement(t.p,null,'Konseptet vi ble enige om i sommer for kompakt modus er ute både i Figma og i kode. Kompakt er nå sin egen ting, ikke "mobil på desktop".'),"\n",r.createElement(t.h2,null,"Tooltip"),"\n",r.createElement(t.p,null,"Jøkul har fått en ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/tooltip"},"tooltip"),", som du kanskje så i aksjon over (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3052"},"#3052"),")."),"\n",r.createElement(t.p,null,"Første versjon av tooltip må alltid ha knappen med spørsmålstegn for å vises. Hvis det viser seg å bli et behov for\ndet kan en fremtidig versjon gjøres tilgjengelig for bruk i andre kontekster. Meld fra om du har ønsker."),"\n",r.createElement(t.p,null,"Stor takk til alle som har vært involvert i å få landet denne i Jøkul!"),"\n",r.createElement(t.h2,null,"Title Small"),"\n",r.createElement(t.p,null,"Etter diskusjoner på forum (og litt graving i historiebøkene) kom vi fram til at det trengtes en ting mellom ",r.createElement(t.code,null,"title")," og ",r.createElement(t.code,null,"heading-1"),", siden spennet var såpass stort mellom de to nivåene (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3045"},"#3045"),")."),"\n",r.createElement(t.p,null,"Det nye nivået ",r.createElement(t.code,null,"title-small")," fyller denne plassen i ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/profil/typografi"},"typografiskalaen"),"."),"\n",r.createElement(t.h2,null,"Designendringer i Select"),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/september-2022/select-scroll-hint.gif",alt:"Skjermopptak som viser at Select-komponenten åpnes. Fem ulike telefonprodusenter er synlige. En sjette produsent er delvis synlig, og hinter om at listen kan scrolles."})),"\n",r.createElement(t.p,null,"Vi har bygget videre på den ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/blog/updates/august-2022/#oppdatert-select-design"},"visuelle endringen i Select fra august")," i september, med to endringer:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Det skal bare være ett valg med aktiv-tilstand (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3099"},"#3099"),")."),"\n",r.createElement(t.li,null,'Visningen av valg er nå default "5,5 valg høy" (',r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3130"},"#3130"),")."),"\n"),"\n",r.createElement(t.p,null,"Førstnevnte løser et problem der et element er valgt, men brukeren åpner listen igjen og hovrer over et annet element. Tidligere ville det valgte elementet beholde markeringen. Nå er det bare elementet som hovres over eller har tastaturfokus som markeres."),"\n",r.createElement(t.p,null,"Sistnevnte er for å tydeliggjøre at det går an å scrolle hvis det er flere enn fem elementer i listen. Du kan selv styre hvor mange elementer som skal være helt synlige. Standard er fem."),"\n",r.createElement(t.h2,null,"Forslag hvis søk ikke gir noen treff"),"\n",r.createElement(t.p,null,"Det er nå mulig å foreslå noen vanlige valg fra en Autosuggest dersom brukeren input ikke gir noen kjente treff (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3062"},"#3062"),")."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/september-2022/autosuggest-ingen-treff-valg.gif",alt:"Skjermopptak som viser at Autosuggest-komponenten kommer med forslag til land hvis vi ikke får noen treff på søket, som i dette tilfellet er Fantasiland."})),"\n",r.createElement(t.h2,null,"Lekegrind"),"\n",r.createElement(t.p,null,"Den nye ",r.createElement(t.a,{href:"/preview/fix/system-message-docs/kom-i-gang/lekegrind"},"lekegrinda")," lar deg teste en komponent uten å sette opp et utviklingsmiljø eller en CodeSandbox. Bare lim inn ett av kodeeksemplene våre og rediger i vei."),"\n",r.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(t.h3,null,"Figma"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Større kulepunkter for usorterte lister i Text/List (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3069"},"#3069"),")."),"\n",r.createElement(t.li,null,"Fiks feilen hvor ikoner tidvis flippet opp ned ved innsetting (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3075"},"#3075"),")."),"\n",r.createElement(t.li,null,"Legg inn egen linjehøyde for lister (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3087"},"#3087"),")."),"\n",r.createElement(t.li,null,"Legg til GroupTitle/Small for Text Input (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3122"},"#3122"),")."),"\n"),"\n",r.createElement(t.h3,null,"GitHub"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Nevn ",r.createElement(t.code,null,"jkl")," i dokumentasjonen til Core (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3059"},"#3059"),")."),"\n",r.createElement(t.li,null,"Legg til utility for å linke opp hele Jøkul for testing lokalt (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3061"},"#3061"),")."),"\n",r.createElement(t.li,null,"Portalens filter er mer bevisst på hva den sier ved null treff (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3065"},"#3065"),")."),"\n",r.createElement(t.li,null,"Sync Autosuggest og Select sitt utseende (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3088"},"#3088"),")."),"\n",r.createElement(t.li,null,"Finjuster størrelsen på valg i Select i compact (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3106"},"#3106"),")."),"\n",r.createElement(t.li,null,"Få Table sine props til å samarbeide i React 17 (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3108"},"#3108"),")."),"\n",r.createElement(t.li,null,"Henvis til riktig pakke i ExpandButton sin readme (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3116"},"#3116"),")."),"\n",r.createElement(t.li,null,"Fiks feil tekststørrelse i NavCard (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3120"},"#3120"),")."),"\n",r.createElement(t.li,null,"Fiks alignment av tekst i Input (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3131"},"#3131"),")."),"\n",r.createElement(t.li,null,"Sørg for at hopp til innhold fungerer som forventet (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3137"},"#3137"),")."),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"henrikhermansen"),"\n",r.createElement(t.li,null,"daa1"),"\n",r.createElement(t.li,null,"kennidenni"),"\n",r.createElement(t.li,null,"Murstam"),"\n",r.createElement(t.li,null,"hegebjo"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(s,e)):s(e)};var m=n(72285),c=n(22756),u=n(95573),d=n(1634);const p=e=>{let{pageContext:t}=e;return r.createElement(c.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(u.M1,Object.assign({},i,{versions:l.versions})),r.createElement(u.w5,i),a,s&&r.createElement(m.l,{types:s}))};function f(e){return r.createElement(g,e,r.createElement(o,e))}},60203:function(e,t,n){n.r(t),n.d(t,{COPYRIGHT:function(){return m},DOWNWARDS_ARROW:function(){return g},LEFTWARDS_ARROW:function(){return u},NON_BREAKING_HYPHEN:function(){return a},NON_BREAKING_SPACE:function(){return l},NORTH_EAST_ARROW:function(){return c},RIGHTWARDS_ARROW:function(){return p},SOFT_HYPHEN:function(){return s},UPWARDS_ARROW:function(){return d},ZERO_WIDTH_SPACE:function(){return f},nbhy:function(){return i},nbsp:function(){return r},shy:function(){return o}});const l=" ",r=l,a="‑",i=a,s="­",o=s,m="©",c="↗",u="←",d="↑",p="→",g="↓",f="​"},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(58820),r=n(63571),a=n(87505),i=n(70079),s=n(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],o=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),s=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||o?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(35250),r=n(26372),a=n.n(r);const i=e=>{let{className:t,density:n,id:r,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return m}});var l=n(35250),r=n(68998),a=n(1386),i=n(26372),s=n.n(i),o=n(70079);const m=e=>{let{children:t,title:n,className:i,startExpanded:m=!1,onClick:c,id:u,...d}=e;const[p,g]=(0,o.useState)(m),[f]=(0,o.useState)((()=>m)),{detailsRef:k,summaryRef:E,contentRef:h,onSummaryClick:v}=(0,a.E)({onOpenChange:(e,t)=>{g(e),c&&c(t,e)},isExpanded:f});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",i),ref:k,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:E,children:[n,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),s=n(82546),o=n(39126),m=n(66169),c=n(94509);const u=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:g,...f}=e;return l.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(o.s,null,l.createElement(c.S,null,u.map(((e,t)=>l.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(c.S,null,l.createElement(s.p,{colSpan:u.length},d)),p.map(((e,t)=>l.createElement(c.S,{key:t},e.map(((e,t)=>l.createElement(s.p,{key:t,"data-th":u[t],verticalAlign:g},e))))))))}));u.displayName="DataTable"}}]);