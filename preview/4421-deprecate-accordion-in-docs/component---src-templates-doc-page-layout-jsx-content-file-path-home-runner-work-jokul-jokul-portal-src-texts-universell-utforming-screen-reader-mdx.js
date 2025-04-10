"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8819],{76765:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return f},Head:function(){return g},default:function(){return h}});var r=n(33156),l=n(7378),a=n(78022);const s=["Funksjon","Taster"],i=[["Gå til neste element","VO + Høyre piltast"],["Gå til neste overskrift","VO + Command + H"],["Simuler klikk","VO + Mellomrom"],["Stopp nåværende talebeskjed","Control"],["Åpne rotoren","VO + U"]],o=[["Gå til neste tabell","VO + T"],["Gå til forrige tabell","VO + Shift + T"],["Gå til neste celle i retning","VO + Piltast"],["Les kolonneoverskrift","VO + C"],["Les radoverskrift","VO + R"],["Les hele raden","VO + R, VO + R"],["Les hele kolonnen","VO + C, VO + C"]];function m(e){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",h4:"h4",em:"em"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Test med skjermleser"),"\n",l.createElement(t.p,null,"Vi anbefaler å sjekke én skjermleser jenvlig under utvikling og en større oppsamling/testfest av og til hvor man tester flere. Dette fordi brukermassen blant skjermlesere har stor spredning, hvorav de tre mest brukte er NVDA, JAWS og VoiceOver."),"\n",l.createElement(t.p,null,"Det er mange ulike skjermlesere hvor alle fungerer noe annerledes. Eksempler på populære alternativer er ",l.createElement(t.a,{href:"https://www.nvaccess.org/"},"NVDA"),", ",l.createElement(t.a,{href:"https://www.freedomscientific.com/products/software/jaws/"},"JAWS"),", ",l.createElement(t.a,{href:"https://help.gnome.org/users/orca/stable/"},"ORCA"),", TalkBack på Android og VoiceOver på iphone. Husk at vi har de samme utfordringene med ulike skjermlesere som vi har med ulike nettlesere: selv om de baserer seg på samme standard, så vil det kunne være forskjeller på hvordan ulike skjermlesere forstår koden. Så skal du være helt sikker på kvalitet ved skjermleser bruk må man teste i ulike system."),"\n",l.createElement(t.p,null,"Jøkul er alltid voksende og vi inviterer alle til å bidra. Har du erfaring med skjermlesere på andre platformer og mulighet til å lage en tilsvarende guide så settes det stor pris på."),"\n",l.createElement(t.h2,null,"VoiceOver"),"\n",l.createElement(t.p,null,"Vi tester VoiceOver hovedsakelig i Safari på macOS. Om VoiceOver er nytt for deg er det nyttig å ta en titt på ",l.createElement(t.a,{href:"https://www.youtube.com/watch?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&params=OAFIAVgF&v=5R-6WvAihms&mode=NORMAL&app=desktop"},"denne innføringen i VoiceOver")," (12 minutter lang)."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://bbc.github.io/accessibility-news-and-you/"},"BBC News Accessibility")," har en fin oversikt med ",l.createElement(t.a,{href:"https://bbc.github.io/accessibility-news-and-you/accessibility-and-testing-with-voiceover-os.html"},"tastatursnarveiene du trenger for testing av VoiceOver"),". Vi har samlet noen av de viktigste her."),"\n",l.createElement(t.p,null,"Når du leser disse snarveiene betyr ",l.createElement(t.code,null,"VO")," vanligvis ",l.createElement(t.code,null,"Control")," og ",l.createElement(t.code,null,"Option"),". Du kan bytte så ",l.createElement(t.code,null,"Caps Lock")," blir brukt som ",l.createElement(t.code,null,"VO")," inne i Systemvalg, menyvalget Tilgjengelighet, så VoiceOver og så Åpne VoiceOver-verktøy. Til slutt velger du Generelt og endrer VoiceOver-spesialtast."),"\n",l.createElement(t.p,null,"Bruk snarveien ",l.createElement(t.code,null,"Command + F5")," for å starte og stoppe VoiceOver."),"\n",l.createElement(t.h3,null,"Topp fem tastatursnarveier"),"\n","\n",l.createElement(a.b,{caption:"Topp fem tasatursnarveier",columns:s,rows:i}),"\n",l.createElement(t.h2,null,"Hva du bør teste"),"\n",l.createElement(t.h3,null,"Overskrifter og struktur"),"\n",l.createElement(t.p,null,"Åpne rotoren til VoiceOver ved å bruke ",l.createElement(t.code,null,"VO + U"),". Naviger deg så mellom ulike typer elementer med piltastene og test at alle overskrifter og strukturelle elementer på siden blir lest opp."),"\n",l.createElement(t.p,null,"Med denne rotoren åpen er det en ypperlig anledning for å sjekke"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"at overskriftsnivåer stemmer"),"\n",l.createElement(t.li,null,"at landemerkene har et logisk oppsett"),"\n",l.createElement(t.li,null,"at lenketekstene gir mening for seg selv"),"\n"),"\n",l.createElement(t.p,null,"Test også å gå igjennom overskriftsnivåene med ",l.createElement(t.code,null,"VO + Command + H")," og hør at denne reisen gir mening. Navigasjon via overskrifter på denne måten er en vanlig metode."),"\n",l.createElement(t.h3,null,"Skjema"),"\n",l.createElement(t.p,null,"Et skjema er satt sammen av mange elementer. Alle inndataelementer skal ha ledetekst. Test at det er en tydelig sammenheng mellom ledeteksten og skjemaelementet."),"\n",l.createElement(t.p,null,"Test at alle knapper leses opp riktig."),"\n",l.createElement(t.h4,null,"Skjemavalidering"),"\n",l.createElement(t.p,null,'Ved validering i skjema skal bruker bli gjort oppmerksom på at feilmelding har dukket opp. Skjermleseren skal lese opp denne når den er synlig på skjermen. Test ved å fylle ut noe du vet gir feilmelding og trykk på "Send inn"-knappen eller en ekvivalens mens skjermleser er på.'),"\n",l.createElement(t.h3,null,"Modaler"),"\n",l.createElement(t.p,null,"Test at skjermleser får med seg at det dukker opp en modal. Bruker skal ikke måtte gjette seg frem til at noe har tatt over fokus på skjermen."),"\n",l.createElement(t.p,null,"Test at skjermleser leser opp elementene i modalen slik at det er tydelig hvordan man kommer seg ut."),"\n",l.createElement(t.h3,null,"Tekstbeskrivelse av bilder"),"\n",l.createElement(t.p,null,"Marker teksten rett før bildet for å bruke det som en snarvei slik at du kun trenger å bruke ",l.createElement(t.code,null,"VO + Høyre piltast")," for å komme til neste element."),"\n",l.createElement(t.h3,null,"Usynlige elementer"),"\n",l.createElement(t.p,null,"Test at elementer som skal være skjulte også er skjult for skjermleser. Et eksempel kan være en modal som ligger gjemt."),"\n",l.createElement(t.p,null,"Dekorativt innhold skal ikke leses opp av skjermleser."),"\n",l.createElement(t.h3,null,"Ikoner"),"\n",l.createElement(t.p,null,"Ikoner skal hvis mulig ha en alt-attributt, men noen ikoner blir satt i CSS slik som kulepunktene i ",l.createElement(t.a,{href:"https://jokul.fremtind.no/komponenter/list#lister-med-ikon"},"Jøkuls liste med ikoner"),". Test at ikonet gir mening med skjermleser uavhengig av om det har en alt-tekst."),"\n",l.createElement(t.h3,null,"Lenker"),"\n",l.createElement(t.p,null,"Naviger deg mellom lenker med ",l.createElement(t.code,null,"VO + Command + L")," (fremover) eller ",l.createElement(t.code,null,"VO + Shift + Command + L")," (bakover)."),"\n",l.createElement(t.h3,null,"Lister"),"\n",l.createElement(t.p,null,"Naviger deg mellom lister med ",l.createElement(t.code,null,"VO + Command + X")," (fremover) eller ",l.createElement(t.code,null,"VO + Shift + Command + X")," (bakover). Bruk deretter ",l.createElement(t.code,null,"VO + Venstre/høyre piltast")," for å velge forrige/neste element."),"\n",l.createElement(t.h3,null,"Tabeller"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://webaim.org/"},"WebAIM")," sin oversikt for ",l.createElement(t.a,{href:"https://webaim.org/techniques/tables/data"},"tilgjengelige tabeller")," er anbefalt lesning.\nDet samme er Tables-delen av ",l.createElement(t.a,{href:"https://bbc.github.io/accessibility-news-and-you/accessibility-and-testing-with-voiceover-os.html"},"BBC News sin accessibility testing-dokumentasjon"),".\nPrøv deg gjerne fram med VoiceOver på ",l.createElement(t.a,{href:"https://webaim.org/articles/voiceover/tables"},"eksempeltabellene til WebAIM")," om du ikke har gjort det før."),"\n",l.createElement(t.p,null,"Alle tabeller må ha overskrifter for hver kolonne. Vi oppfordrer alle til å ha en ",l.createElement(t.em,null,"caption")," som beskriver tabellen for skjermlesere, men som er skjult visuelt."),"\n",l.createElement(t.p,null,"VoiceOver har noen ekstra snarveier for tabeller som gjør det lettere å navigere i rader og kolonner."),"\n","\n",l.createElement(a.b,{caption:"Tastatursnarveier for tabeller",columns:s,rows:o}),"\n",l.createElement(t.h3,null,"Tidsbegrensning"),"\n",l.createElement(t.p,null,"Hvis tjenesten har en tidsbegrensning, ofte som følge av at man blir automatisk logget ut etter et antall minutter så må det testes at skjermleser får med seg nedtellingen."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(m,e)):m(e)},d=n(68888),u=n(47672),p=n(52948),k=n(38776),v=n(20919);const g=e=>{let{pageContext:t}=e;return l.createElement(u.G,{title:t.title})},f=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:s}=n.page,{types:i}=r;return l.createElement(v.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(k.Ao,Object.assign({},s,{versions:r.versions})),l.createElement(p.A,{variant:"komponent",component:s.title}),l.createElement(k.f6,s),a,i&&l.createElement(d.N,{types:i}))};function h(e){return l.createElement(f,e,l.createElement(c,e))}},68888:function(e,t,n){n.d(t,{N:function(){return k}});var r=n(88635),l=n(24408),a=n(78022),s=n(7378),i=n(45371);const o=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,s=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",s)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],o=(e=>{var t,n,r,l,a,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(l.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&s.createElement(i.NG,{className:"jkl-portal-code-block"},o),r.length>0&&s.createElement(p,{props:r}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),l=n(38316),a=n(7378),s=n(45371);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(s.fz,null,o[t].text)),a.createElement(r.N,{href:o[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},o={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(3698),l=n.n(r),a=n(94270),s=n(7378),i=n(79197);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,s.useContext)(i.M),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return o}});var r=n(45271),l=n(86106),a=n(3698),s=n.n(a);const i=["className","density","id"],o=e=>{let{className:t,density:n,id:a}=e,o=(0,r.A)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:s()("jkl-accordion",t),"data-density":n,id:a},o))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),l=n(86106),a=n(21197),s=n(82455),i=n(3698),o=n.n(i),m=n(7378);const c=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:u,id:p}=e,k=(0,r.A)(e,c);const[v,g]=(0,m.useState)(d),[f]=(0,m.useState)((()=>d)),{detailsRef:h,summaryRef:b,contentRef:E,onSummaryClick:j}=(0,s.$)({onOpenChange:(e,t)=>{g(e),u&&u(t,e)},isExpanded:f});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:o()("jkl-accordion-item",i),ref:h,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:b,children:[n,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return c}});var r=n(7378),l=n(19767),a=Object.defineProperty,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const c=e=>r.createElement(l.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&m(e,n,t[n]);return e})({},e),"");c.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return h}});var r=n(7378),l=n(10494),a=n(75374),s=n(82462),i=n(60630),o=n(94624),m=n(65759),c=n(21664),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const h=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:h,columns:b,emptyTableText:E,rows:j,verticalAlign:y}=d,O=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.X,(n=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&f(e,n,t[n]);if(k)for(var n of k(t))g.call(t,n)&&f(e,n,t[n]);return e})({fullWidth:!0},O),u(n,p({ref:t}))),h&&r.createElement(s.r,{srOnly:!0},h),r.createElement(o.n,null,r.createElement(c.H,null,b.map(((e,t)=>r.createElement(m.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.B,null,0===j.length&&E&&r.createElement(c.H,null,r.createElement(i.n,{colSpan:b.length},E)),j.map(((e,t)=>r.createElement(c.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":b[t],verticalAlign:y},e))))))))}));h.displayName="DataTable"}}]);