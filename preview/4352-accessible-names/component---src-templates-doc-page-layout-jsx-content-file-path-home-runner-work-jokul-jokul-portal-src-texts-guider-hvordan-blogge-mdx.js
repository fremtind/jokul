"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[377],{97942:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return c},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",em:"em",ul:"ul",li:"li",pre:"pre",h3:"h3"},(0,l.ah)(),e.components),{InfoMessage:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("InfoMessage",!0),r.createElement(r.Fragment,null,r.createElement(t.h1,null,"Blogge i Jøkul"),"\n",r.createElement(t.p,null,"Bloggen er åpen for bidrag! Ta en titt på ",r.createElement(t.a,{href:"/preview/4352-accessible-names/blog"},"listen over bloggposter")," og se etter inspirasjon."),"\n",r.createElement(t.p,null,"Når du er klar til å skrive er dette måten du publiserer en bloggpost."),"\n",r.createElement(t.h2,null,"Hvor skriver du bloggposten?"),"\n",r.createElement(t.p,null,"En bloggpost er i prinsippet lik all den andre dokumentasjonen her på siden, i den forstand at den starter som en ",r.createElement(t.code,null,"MDX"),"-fil som brukes av Gatsby. Dette er som Markdown, bare med støtte for React, så hvis du kjenner til Markdown har du for det meste det du trenger av forhåndskunnskap."),"\n",r.createElement("aside",{className:"jkl-portal-paragraph"},r.createElement(n,{role:"none presentation",fullWidth:!0,title:"Vanskelig med Markdown eller Git?"},r.createElement("p",{className:"small"},r.createElement(t.p,null,"Om du har en bloggpost i deg som du vil få publisert, men ikke kan Markdown eller synes det er vanskelig å\nfølge denne guiden – frykt ikke! Send en e-post med bloggposten til\n",r.createElement(t.a,{href:"mailto:fremtind.designsystem@fremtind.no"},"fremtind.designsystem@fremtind.no")," , så hjelper noen fra\nJøkul-teamet deg med selve publiseringen.")))),"\n",r.createElement(t.p,null,"Bloggpostene ligger lagret som filer i Git, ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/src/texts/blog"},"i denne mappen"),". Du kan bruke GitHub sitt webgrensesnitt for å skrive bloggposten, eller for eksempel VS Code om du har Jøkul-koden liggende på maskinen din."),"\n",r.createElement(t.p,null,"For å lage en ny bloggpost oppretter du en ny fil i ",r.createElement(t.code,null,"blog"),"-mappen. ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/new/main/portal/src/texts/blog"},"Klikk her for å opprette en ny fil via GitHub"),". Filnavnet brukes til å lage URLen til bloggposten din, så bruk et fornuftig navn. Det er viktig at filnavnet slutter på ",r.createElement(t.code,null,".mdx")," sånn at Gatsby finner filen. Du kan bruke undermapper hvis du vil."),"\n",r.createElement(t.h2,null,"Litt om frontmatter"),"\n",r.createElement(t.p,null,"Selv om du har vært inne og redigert dokumentasjon før kan det hende ",r.createElement(t.em,null,"frontmatter")," er nytt for deg."),"\n",r.createElement(t.p,null,r.createElement(t.em,null,"Frontmatter")," er navnet vi bruker for ",r.createElement(t.em,null,"metadada")," for en side, for eksempel:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"tittel"),"\n",r.createElement(t.li,null,"forfatter"),"\n",r.createElement(t.li,null,"dato"),"\n"),"\n",r.createElement(t.p,null,"Vi skriver ",r.createElement(t.em,null,"frontmatter")," på denne måten, øverst i fila:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-mdx"},'---\ntitle: Min første bloggpost\nauthor: Forfatter Forfattersen\ndescription: En setning eller to om innholdet i bloggposten, denne vises på forsiden når din post er den nyeste\npublishDate: "2020.06.05"\n---\n')),"\n",r.createElement(t.h2,null,"Innhold og publisering"),"\n",r.createElement(t.p,null,"Alt under ",r.createElement(t.code,null,"---")," som avslutter ",r.createElement(t.em,null,"frontmatter")," blir en del av siden. Tittelen du skrev i ",r.createElement(t.code,null,"title")," blir sidens ",r.createElement(t.code,null,"<h1>"),"-overskrift. Du trenger ikke gjenta denne. Overskriftene dine i bloggposten bør med andre ord starte på nivå to (",r.createElement(t.code,null,"##"),")."),"\n",r.createElement(t.p,null,"Når bloggposten din er ferdig er måten å få den publisert på å lage en ",r.createElement(t.em,null,"pull request"),"."),"\n",r.createElement(t.p,null,"Hvis du har skrevet bloggposten din på GitHub kan du scrolle til bunnen av siden hvor det står ",r.createElement(t.em,null,"Commit new file"),". Fyll ut det lille inputfeltet med ",r.createElement(t.code,null,"docs: skrev bloggpost om ting"),", hvor ting gjerne kan beskrive det du faktisk skrev om. Det store skjemafeltet kan stå tomt. I radiovelgeren markerer du ",r.createElement(t.code,null,"Create a new branch from this commit and start a pull request"),". Du kan la branchnavnet som foreslås stå som det er. Trykk på den grønne knappen. Du blir vist en side med tittel ",r.createElement(t.em,null,"Open a pull request"),". Her trykker du ",r.createElement(t.em,null,"Create pull request"),", så får noen fra Jøkul-teamet beskjed om at du har laget en bloggpost. De tar seg av resten derfra."),"\n",r.createElement(t.p,null,"Hvis du har skrevet bloggposten direkte på egen maskin lager du en pull request som vanlig."),"\n",r.createElement(t.h3,null,"Hvordan legge til bilde"),"\n",r.createElement(t.p,null,"Bilder bør lagres i Git på samme måte som teksten. Vi legger bilder til bloggposter ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal/static/assets/blog"},"i en egen mappe"),". Hvis du bruker GitHub for å lage bloggposten kan du ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/upload/main/portal/static/assets/blog"},"laste opp bilder")," på en liknende måte."),"\n",r.createElement(t.p,null,"Når bildet ligger i riktig mappe kan du bake det inn i bloggposten din med Markdown:"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-mdx"},"![Beskrivende bildetekst for skjermlesere](/assets/blog/ditt-bilde.jpg)\n")),"\n",r.createElement(t.p,null,"Et tips om du skriver bloggposten direkte på egen maskin (ikke via GitHub) er at du må restarte Gatsby for at bildet skal plukkes opp."),"\n",r.createElement(t.h3,null,"Hvis du kan litt koding"),"\n",r.createElement(t.p,null,"Som sagt betyr ",r.createElement(t.code,null,"MDX"),"-filer at vi kan bruke React i tillegg til Markdown."),"\n",r.createElement(t.p,null,"For å bruke React-komponenter må de enten hentes inn med ",r.createElement(t.code,null,"import")," som i vanlig React-kode, eller så må de være konfigurert i ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/portal/src/components/Typography/FormatProvider.tsx"},"FormatProvider"),". Om komponenten finnes i ",r.createElement(t.code,null,"FormatProvider")," trenger du ikke importere den. Da er den tilgjengelig globalt."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var i=n(72285),s=n(22756),m=n(95573),d=n(1634);const c=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:o}=n.page,{types:s}=l;return r.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},o,{versions:l.versions})),r.createElement(m.w5,o),a,s&&r.createElement(i.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(58820),r=n(63571),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},c=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,o=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;c(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&c(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(m):[],s=(e=>{var t,n,l,r,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(p,{props:l}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(35250),r=n(26372),a=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return m}});var l=n(35250),r=n(68998),a=n(1386),o=n(26372),i=n.n(o),s=n(70079);const m=e=>{let{children:t,title:n,className:o,startExpanded:m=!1,onClick:d,id:c,...u}=e;const[p,g]=(0,s.useState)(m),[k]=(0,s.useState)((()=>m)),{detailsRef:f,summaryRef:v,contentRef:b,onSummaryClick:E}=(0,a.E)({onOpenChange:(e,t)=>{g(e),d&&d(t,e)},isExpanded:k});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:f,id:c,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:v,children:[n,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return c}});var l=n(70079),r=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),m=n(66169),d=n(94509);const c=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:c,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return l.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(d.S,null,c.map(((e,t)=>l.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(d.S,null,l.createElement(i.p,{colSpan:c.length},u)),p.map(((e,t)=>l.createElement(d.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":c[t],verticalAlign:g},e))))))))}));c.displayName="DataTable"}}]);