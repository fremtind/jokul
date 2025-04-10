"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[1664],{55121:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return g},Head:function(){return f},default:function(){return k}});var l=n(64717),r=n(92379),a=n(41252),i=n(47484);function o(e){const t=Object.assign({p:"p",ul:"ul",li:"li",em:"em",a:"a",h2:"h2",code:"code",img:"img",h3:"h3"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Nye varianter, nye komponenter, nytt typografinivå, og nye features. Her er høydepunktene fra Jøkul i september.")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Nye Compact er lansert!"),"\n",r.createElement(t.li,null,"Vi har fått en ny komponent: Tooltip."),"\n",r.createElement(t.li,null,"Et nytt typografinivå har blitt etablert: ",r.createElement(t.em,null,"Title small"),"."),"\n",r.createElement(t.li,null,"Visuelle endringer i Select for å tydeliggjøre scrollmulighet."),"\n",r.createElement(t.li,null,"Autosuggest kan nå konfigureres til å gi forslag hvis det ikke er noen treff på søket til brukeren."),"\n",r.createElement(t.li,null,"Eksperimenter med Jøkul-kode i ",r.createElement(t.a,{href:"/preview/fix--flex-component/kom-i-gang/lekegrind"},"lekegrinda"),"."),"\n"),"\n",r.createElement(t.p,null,"Jøkul-teamet har også begynt å bruke GitHub Projects flittig."),"\n",r.createElement(t.p,null,"Under ",r.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/3"},"Projects")," kan du se hva vi jobber med for tiden. Designere er kanskje interesserte i vår ",r.createElement(t.a,{href:"https://github.com/orgs/fremtind/projects/22/views/1"},"dedikerte visning for visuelle endringer"),"."),"\n",r.createElement(t.p,null,"Håpet er at det skal bli mer synlig hva vi driver med, og enklere å gi tilbakemelding underveis."),"\n",r.createElement(t.h2,null,"Nye kompaktvarianter"),"\n",r.createElement(t.p,null,"Vi skal ikke gjenta oss for mye, så les gjerne ",r.createElement(t.a,{href:"/preview/fix--flex-component/blog/compact-reboot/"},"Kompaktvarianter har landet")," for detaljene om dette."),"\n",r.createElement("div",{className:"jkl-portal-paragraph"},r.createElement("p",{className:"jkl-bold"},"tl;dr",a.NON_BREAKING_SPACE,r.createElement(i.u,{content:"Too long; didn't read"}))),"\n",r.createElement(t.p,null,'Konseptet vi ble enige om i sommer for kompakt modus er ute både i Figma og i kode. Kompakt er nå sin egen ting, ikke "mobil på desktop".'),"\n",r.createElement(t.h2,null,"Tooltip"),"\n",r.createElement(t.p,null,"Jøkul har fått en ",r.createElement(t.a,{href:"/preview/fix--flex-component/komponenter/tooltip"},"tooltip"),", som du kanskje så i aksjon over (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3052"},"#3052"),")."),"\n",r.createElement(t.p,null,"Første versjon av tooltip må alltid ha knappen med spørsmålstegn for å vises. Hvis det viser seg å bli et behov for\ndet kan en fremtidig versjon gjøres tilgjengelig for bruk i andre kontekster. Meld fra om du har ønsker."),"\n",r.createElement(t.p,null,"Stor takk til alle som har vært involvert i å få landet denne i Jøkul!"),"\n",r.createElement(t.h2,null,"Title Small"),"\n",r.createElement(t.p,null,"Etter diskusjoner på forum (og litt graving i historiebøkene) kom vi fram til at det trengtes en ting mellom ",r.createElement(t.code,null,"title")," og ",r.createElement(t.code,null,"heading-1"),", siden spennet var såpass stort mellom de to nivåene (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3045"},"#3045"),")."),"\n",r.createElement(t.p,null,"Det nye nivået ",r.createElement(t.code,null,"title-small")," fyller denne plassen i ",r.createElement(t.a,{href:"/preview/fix--flex-component/profil/typografi"},"typografiskalaen"),"."),"\n",r.createElement(t.h2,null,"Designendringer i Select"),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/september-2022/select-scroll-hint.gif",alt:"Skjermopptak som viser at Select-komponenten åpnes. Fem ulike telefonprodusenter er synlige. En sjette produsent er delvis synlig, og hinter om at listen kan scrolles."})),"\n",r.createElement(t.p,null,"Vi har bygget videre på den ",r.createElement(t.a,{href:"/preview/fix--flex-component/blog/updates/august-2022/#oppdatert-select-design"},"visuelle endringen i Select fra august")," i september, med to endringer:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Det skal bare være ett valg med aktiv-tilstand (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3099"},"#3099"),")."),"\n",r.createElement(t.li,null,'Visningen av valg er nå default "5,5 valg høy" (',r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3130"},"#3130"),")."),"\n"),"\n",r.createElement(t.p,null,"Førstnevnte løser et problem der et element er valgt, men brukeren åpner listen igjen og hovrer over et annet element. Tidligere ville det valgte elementet beholde markeringen. Nå er det bare elementet som hovres over eller har tastaturfokus som markeres."),"\n",r.createElement(t.p,null,"Sistnevnte er for å tydeliggjøre at det går an å scrolle hvis det er flere enn fem elementer i listen. Du kan selv styre hvor mange elementer som skal være helt synlige. Standard er fem."),"\n",r.createElement(t.h2,null,"Forslag hvis søk ikke gir noen treff"),"\n",r.createElement(t.p,null,"Det er nå mulig å foreslå noen vanlige valg fra en Autosuggest dersom brukeren input ikke gir noen kjente treff (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3062"},"#3062"),")."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/september-2022/autosuggest-ingen-treff-valg.gif",alt:"Skjermopptak som viser at Autosuggest-komponenten kommer med forslag til land hvis vi ikke får noen treff på søket, som i dette tilfellet er Fantasiland."})),"\n",r.createElement(t.h2,null,"Lekegrind"),"\n",r.createElement(t.p,null,"Den nye ",r.createElement(t.a,{href:"/preview/fix--flex-component/kom-i-gang/lekegrind"},"lekegrinda")," lar deg teste en komponent uten å sette opp et utviklingsmiljø eller en CodeSandbox. Bare lim inn ett av kodeeksemplene våre og rediger i vei."),"\n",r.createElement(t.h2,null,"Diverse bugfikser og forbedringer"),"\n",r.createElement(t.h3,null,"Figma"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Større kulepunkter for usorterte lister i Text/List (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3069"},"#3069"),")."),"\n",r.createElement(t.li,null,"Fiks feilen hvor ikoner tidvis flippet opp ned ved innsetting (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3075"},"#3075"),")."),"\n",r.createElement(t.li,null,"Legg inn egen linjehøyde for lister (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3087"},"#3087"),")."),"\n",r.createElement(t.li,null,"Legg til GroupTitle/Small for Text Input (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3122"},"#3122"),")."),"\n"),"\n",r.createElement(t.h3,null,"GitHub"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Nevn ",r.createElement(t.code,null,"jkl")," i dokumentasjonen til Core (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3059"},"#3059"),")."),"\n",r.createElement(t.li,null,"Legg til utility for å linke opp hele Jøkul for testing lokalt (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3061"},"#3061"),")."),"\n",r.createElement(t.li,null,"Portalens filter er mer bevisst på hva den sier ved null treff (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3065"},"#3065"),")."),"\n",r.createElement(t.li,null,"Sync Autosuggest og Select sitt utseende (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3088"},"#3088"),")."),"\n",r.createElement(t.li,null,"Finjuster størrelsen på valg i Select i compact (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3106"},"#3106"),")."),"\n",r.createElement(t.li,null,"Få Table sine props til å samarbeide i React 17 (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3108"},"#3108"),")."),"\n",r.createElement(t.li,null,"Henvis til riktig pakke i ExpandButton sin readme (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3116"},"#3116"),")."),"\n",r.createElement(t.li,null,"Fiks feil tekststørrelse i NavCard (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3120"},"#3120"),")."),"\n",r.createElement(t.li,null,"Fiks alignment av tekst i Input (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3131"},"#3131"),")."),"\n",r.createElement(t.li,null,"Sørg for at hopp til innhold fungerer som forventet (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/3137"},"#3137"),")."),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"henrikhermansen"),"\n",r.createElement(t.li,null,"daa1"),"\n",r.createElement(t.li,null,"kennidenni"),"\n",r.createElement(t.li,null,"Murstam"),"\n",r.createElement(t.li,null,"hegebjo"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)};var c=n(75482),m=n(96036),u=n(59001),p=n(65458),d=n(79379);const f=e=>{let{pageContext:t}=e;return r.createElement(m.p,{title:t.title})},g=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:o}=l;return r.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(p.M1,Object.assign({},i,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(u.c,{variant:"komponent",component:i.title}),r.createElement(p.w5,i),a,o&&r.createElement(c.l,{types:o}))};function k(e){return r.createElement(g,e,r.createElement(s,e))}},41252:function(e,t,n){n.r(t),n.d(t,{BULLET:function(){return k},COPYRIGHT:function(){return c},DOWNWARDS_ARROW:function(){return f},LEFTWARDS_ARROW:function(){return u},NON_BREAKING_HYPHEN:function(){return a},NON_BREAKING_SPACE:function(){return l},NORTH_EAST_ARROW:function(){return m},RIGHTWARDS_ARROW:function(){return d},SOFT_HYPHEN:function(){return o},UPWARDS_ARROW:function(){return p},ZERO_WIDTH_SPACE:function(){return g},nbhy:function(){return i},nbsp:function(){return r},shy:function(){return s}});const l=" ",r=l,a="‑",i=a,o="­",s=o,c="©",m="↗",u="←",p="↑",d="→",f="↓",g="​",k="•"},75482:function(e,t,n){n.d(t,{l:function(){return f}});var l=n(96845),r=n(41162),a=n(74797),i=n(92379),o=n(25329);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,n=t.parentElement;u(t,n)},d=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},f=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(d,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(d,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return o}});var l=n(48467),r=n(58990),a=n(92379),i=n(25329);const o=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.U,null),a.createElement(i.nv,null,s[t].text)),a.createElement(l.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},96845:function(e,t,n){n.d(t,{U:function(){return s}});var l=n(99767),r=n(651),a=n(80324),i=n.n(a);const o=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,l.Z)(e,o);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:a},s))}},41162:function(e,t,n){n.d(t,{Q:function(){return u}});var l=n(99767),r=n(651),a=n(42054),i=n(95020),o=n(80324),s=n.n(o),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:o,startExpanded:u=!1,onClick:p,id:d}=e,f=(0,l.Z)(e,m);const[g,k]=(0,c.useState)(u),[E]=(0,c.useState)((()=>u)),{detailsRef:h,summaryRef:v,contentRef:b,onSummaryClick:j}=(0,i.E)({onOpenChange:(e,t)=>{k(e),p&&p(t,e)},isExpanded:E});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",o),ref:h,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:v,children:[n,(0,r.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var l=n(92379),r=n(55650),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(r.J,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return h}});var l=n(92379),r=n(94207),a=n(49309),i=n(36774),o=n(64081),s=n(64483),c=n(42104),m=n(98746),u=Object.defineProperty,p=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const h=(0,l.forwardRef)(((e,t)=>{var n,u=e,{caption:h,columns:v,emptyTableText:b,rows:j,verticalAlign:y}=u,O=((e,t)=>{var n={};for(var l in e)g.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&f)for(var l of f(e))t.indexOf(l)<0&&k.call(e,l)&&(n[l]=e[l]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.i,(n=((e,t)=>{for(var n in t||(t={}))g.call(t,n)&&E(e,n,t[n]);if(f)for(var n of f(t))k.call(t,n)&&E(e,n,t[n]);return e})({fullWidth:!0},O),p(n,d({ref:t}))),h&&l.createElement(i.R,{srOnly:!0},h),l.createElement(s.s,null,l.createElement(m.S,null,v.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===j.length&&b&&l.createElement(m.S,null,l.createElement(o.p,{colSpan:v.length},b)),j.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":v[t],verticalAlign:y},e))))))))}));h.displayName="DataTable"},47484:function(e,t,n){n.d(t,{nr:function(){return h},u:function(){return v}});var l=n(97498),r=n(53624),a=n(60286),i=n(92379),o=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(m)for(var n of m(t))p.call(t,n)&&d(e,n,t[n]);return e},g=(e,t)=>s(e,c(t));const k=(0,i.createContext)(null),E=k.Provider,h=()=>{const e=(0,i.useContext)(k);if(null===e)throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");return e},v=e=>{var t=e,{children:n}=t;const o=(e=>{let{initialOpen:t=!1,placement:n="top",delay:o=250,triggerOn:s="hover",onOpenChange:c}=e;const{0:m,1:u}=(0,i.useState)(t),p=(0,i.useRef)(null),d=(0,i.useRef)(null),k=(0,l.YF)({open:m,onOpenChange:e=>{null==c||c(e),u(e)},placement:n,whileElementsMounted:r.Me,middleware:[(0,a.cv)(16),(0,a.RR)(),(0,a.uY)({padding:16}),(0,a.x7)({element:p,padding:8})]}),E=(0,l.qs)(k.context,{role:"tooltip"}),h=(0,l.bQ)(k.context),v=(0,l.eS)(k.context,{enabled:"click"===s}),b=(0,l.XI)(k.context,{enabled:"hover"===s,delay:m?0:o}),j=(0,l.KK)(k.context,{enabled:"click"!==s||m}),y=(0,l.NI)([h,j,E,v,b]);return f(g(f({triggerOn:s,isOpen:m,setOpen:u,arrowElement:p},k),{refs:g(f({},k.refs),{description:d,setDescription:e=>d.current=e})}),y)})(((e,t)=>{var n={};for(var l in e)u.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&m)for(var l of m(e))t.indexOf(l)<0&&p.call(e,l)&&(n[l]=e[l]);return n})(t,["children"]));return i.createElement(E,{value:o},n)}}}]);