"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7953],{77954:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",em:"em",h2:"h2",img:"img",h3:"h3",h4:"h4",code:"code"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Mai er som kjent krydret med røde dager og inneklemte fredager, men det har ikke stoppet Jøkul fra å få\nfeilrettinger og nye features.")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Accordion har fått kompaktversjon igjen i Figma"),"\n",r.createElement(t.li,null,"Logostempelet skalerer riktig i Figma"),"\n",r.createElement(t.li,null,"Alle varianter av ",r.createElement(t.a,{href:"/preview/vite-build-2/komponenter/logo"},"logostempelet")," fra Figma finnes nå i kode"),"\n",r.createElement(t.li,null,"Kode for ",r.createElement(t.a,{href:"/preview/vite-build-2/komponenter/loader#skeleton-loader"},"skeleton loaders")," er publisert"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/vite-build-2/komponenter/toggleswitch"},"ToggleSlider")," tåler lengre tekster"),"\n",r.createElement(t.li,null,"Ny ",r.createElement(t.a,{href:"/preview/vite-build-2/guider/hvordan-teste-endringer-eget-prosjekt"},"utvikler-guide")," for å teste Jøkul-endringer i eget prosjekt"),"\n",r.createElement(t.li,null,"Kommende ",r.createElement(t.em,null,"breaking changes")," i DatePicker, Core"),"\n"),"\n",r.createElement(t.p,null,"Ellers jobber Jøkul-teamet tett med Flyt/ASK og SAM som en fortsettelse av diskusjonen rundt compact og mobil i Figma-skisser. Vi er ikke helt i mål, men er i gang med å teste et sett med nye kompaktvarianter."),"\n",r.createElement(t.p,null,"Kjør detaljer! 👇"),"\n",r.createElement(t.h2,null,"Skeleton loaders"),"\n",r.createElement(t.p,null,"BM demonstrerte et konsept for ",r.createElement(t.em,null,"skeleton loaders")," for en stund siden. Nå har kode for dette blitt tilgjengelig i ",r.createElement(t.a,{href:"/preview/vite-build-2/komponenter/loader#skeleton-loader"},"Loaders"),"-pakka. Ta en titt på komponentdokumentasjonen for et mer omfattende eksempel, og noen ting som er kjekt å vite for utviklere."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/mai-2022/skeleton-demo.gif",alt:""})),"\n",r.createElement(t.h2,null,"Varianter av LogoStamp"),"\n",r.createElement(t.p,null,"Det har vært en del varianter av teksten i logostempelet i Figma, men i kode har det en stundt bare vært én mulighet. Pio har ordnet så alle varianter fra Figma er ",r.createElement(t.a,{href:"/preview/vite-build-2/komponenter/logo"},"tilgjengelig i kode"),"."),"\n",r.createElement(t.p,null,"For øvrig har en skaleringsfeil i denne komponenten blitt fikset i Figma. Nå skal innholdet skalere riktig om du endrer størrelse."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/mai-2022/logostamp-demo.png",alt:""})),"\n",r.createElement(t.p,null,"Dette var en ",r.createElement(t.em,null,"breaking change"),". Ta en titt på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/packages/logo-react/MIGRATION.md#til-jkl-logo-react900"},"migrasjonsguiden")," om du ikke har oppgradert ennå."),"\n",r.createElement(t.h2,null,"ToggleSlider tåler lengre tekster"),"\n",r.createElement(t.p,null,"Espen har bygget opp ",r.createElement(t.a,{href:"/preview/vite-build-2/komponenter/toggleswitch"},"ToggleSlider")," på nytt fra bunnen av. Nå tåler den litt lengre tekster enn før uten å se rar ut, men husk at tekster uansett ",r.createElement(t.a,{href:"/preview/vite-build-2/komponenter/toggleswitch#bruk"},"bør holdes noenlunde korte"),"."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/mai-2022/toggleslider-demo.gif",alt:""})),"\n",r.createElement(t.h2,null,"For utviklere"),"\n",r.createElement(t.h3,null,"Guide for å teste Jøkul-endringer i eget prosjekt"),"\n",r.createElement(t.p,null,"Følg ",r.createElement(t.a,{href:"/preview/vite-build-2/guider/hvordan-teste-endringer-eget-prosjekt"},"denne guiden")," om du skal gjøre endringer i Jøkul-kode og vil teste endringene dine på localhost i kontekst av ditt eget prosjekt."),"\n",r.createElement(t.h3,null,"Kommende breaking changes"),"\n",r.createElement(t.h4,null,"Snart ny kode for DatePicker"),"\n",r.createElement(t.p,null,"Det pågår en designjobb for å fornye DatePicker, men i mellomtiden har dagens versjon blitt så buggy at vi ser oss nødt til å erstatte den med en ny implementasjon."),"\n",r.createElement(t.p,null,"Det blir en breaking change for DatePicker sannsynligvis allerede neste uke (uke 22). Om du er nysgjerrig så ligger endringene så langt på branchen ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/fix/datepicker/packages/datepicker-react/src"},"fix/datepicker"),". Det gjenstår blant annet å fikse enhetstester og migrasjonsguide, men APIet har stabilisert seg."),"\n",r.createElement(t.h4,null,"Fremtidig major-versjon av core"),"\n",r.createElement(t.p,null,"Det ligger i kortene at det kommer en ",r.createElement(t.em,null,"breaking change")," i ",r.createElement(t.code,null,"@fremtind/jkl-core")," for de av dere som bruker Sass-kode fra den pakka."),"\n",r.createElement(t.p,null,"Det ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2868"},"etableres et tydelig API og en stilguide for Sass"),". Det vil bli lagt ut en migreringsguide, og for det meste er det snakk om å følge eksemplene på ",r.createElement(t.em,null,"search and replace")," for å oppgradere."),"\n",r.createElement(t.p,null,"Planen er å merge dette uke 23 (7. til 10. juni)."),"\n",r.createElement(t.p,null,"Siden det er en ",r.createElement(t.em,null,"breaking change")," i core vil alle pakker få en ny majorversjon. Det er ingen breaking changes i pakkene ellers."),"\n",r.createElement(t.h2,null,"Diverse bugfikser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Accordion har fått kompaktversjon igjen i Figma"),"\n",r.createElement(t.li,null,"Sercan la til muligheten for maxLength på Feedback sine tekstfelter (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2863"},"#2863"),")"),"\n",r.createElement(t.li,null,"JoMs fikset en bug i formatering av valuta hvis den var ",r.createElement(t.code,null,"0")," (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2848"},"#2848"),")"),"\n",r.createElement(t.li,null,"kennidenni gjorde så typedefinisjonen til knapper er strengere (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2857"},"#2857"),")"),"\n",r.createElement(t.li,null,"Select i dark mode får nå riktig rødfarge ved valideringsfeil (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2877"},"#2877"),")"),"\n",r.createElement(t.li,null,"matssom fikset en feil i dokumentasjonen for FieldGroup (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2864"},"#2864"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"espkva"),"\n",r.createElement(t.li,null,"JoMs"),"\n",r.createElement(t.li,null,"kennidenni"),"\n",r.createElement(t.li,null,"matssom"),"\n",r.createElement(t.li,null,"SercanSercan"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var o=n(72285),s=n(22756),m=n(95573),c=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},i,{versions:l.versions})),r.createElement(m.w5,i),a,s&&r.createElement(o.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(58820),r=n(63571),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(35250),r=n(26372),a=n.n(r);const i=e=>{let{className:t,density:n,id:r,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return m}});var l=n(35250),r=n(68998),a=n(1386),i=n(26372),o=n.n(i),s=n(70079);const m=e=>{let{children:t,title:n,className:i,startExpanded:m=!1,onClick:c,id:d,...u}=e;const[p,g]=(0,s.useState)(m),[k]=(0,s.useState)((()=>m)),{detailsRef:f,summaryRef:E,contentRef:h,onSummaryClick:v}=(0,a.E)({onOpenChange:(e,t)=>{g(e),c&&c(t,e)},isExpanded:k});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:o()("jkl-accordion-item",i),ref:f,id:d,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:E,children:[n,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),m=n(66169),c=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return l.createElement(r.i,{fullWidth:!0,...k,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(c.S,null,d.map(((e,t)=>l.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(c.S,null,l.createElement(o.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(c.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":d[t],verticalAlign:g},e))))))))}));d.displayName="DataTable"}}]);