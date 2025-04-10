"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7953],{8035:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return g}});var l=n(64717),r=n(92379);function a(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",em:"em",h2:"h2",img:"img",h3:"h3",h4:"h4",code:"code"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,r.createElement(t.p,null,"Mai er som kjent krydret med røde dager og inneklemte fredager, men det har ikke stoppet Jøkul fra å få\nfeilrettinger og nye features.")),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Accordion har fått kompaktversjon igjen i Figma"),"\n",r.createElement(t.li,null,"Logostempelet skalerer riktig i Figma"),"\n",r.createElement(t.li,null,"Alle varianter av ",r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/logo"},"logostempelet")," fra Figma finnes nå i kode"),"\n",r.createElement(t.li,null,"Kode for ",r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/loader#skeleton-loader"},"skeleton loaders")," er publisert"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/toggleswitch"},"ToggleSlider")," tåler lengre tekster"),"\n",r.createElement(t.li,null,"Ny ",r.createElement(t.a,{href:"/preview/disabled-text-input/guider/hvordan-teste-endringer-eget-prosjekt"},"utvikler-guide")," for å teste Jøkul-endringer i eget prosjekt"),"\n",r.createElement(t.li,null,"Kommende ",r.createElement(t.em,null,"breaking changes")," i DatePicker, Core"),"\n"),"\n",r.createElement(t.p,null,"Ellers jobber Jøkul-teamet tett med Flyt/ASK og SAM som en fortsettelse av diskusjonen rundt compact og mobil i Figma-skisser. Vi er ikke helt i mål, men er i gang med å teste et sett med nye kompaktvarianter."),"\n",r.createElement(t.p,null,"Kjør detaljer! 👇"),"\n",r.createElement(t.h2,null,"Skeleton loaders"),"\n",r.createElement(t.p,null,"BM demonstrerte et konsept for ",r.createElement(t.em,null,"skeleton loaders")," for en stund siden. Nå har kode for dette blitt tilgjengelig i ",r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/loader#skeleton-loader"},"Loaders"),"-pakka. Ta en titt på komponentdokumentasjonen for et mer omfattende eksempel, og noen ting som er kjekt å vite for utviklere."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/mai-2022/skeleton-demo.gif",alt:""})),"\n",r.createElement(t.h2,null,"Varianter av LogoStamp"),"\n",r.createElement(t.p,null,"Det har vært en del varianter av teksten i logostempelet i Figma, men i kode har det en stundt bare vært én mulighet. Pio har ordnet så alle varianter fra Figma er ",r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/logo"},"tilgjengelig i kode"),"."),"\n",r.createElement(t.p,null,"For øvrig har en skaleringsfeil i denne komponenten blitt fikset i Figma. Nå skal innholdet skalere riktig om du endrer størrelse."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/mai-2022/logostamp-demo.png",alt:""})),"\n",r.createElement(t.p,null,"Dette var en ",r.createElement(t.em,null,"breaking change"),". Ta en titt på ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/packages/logo-react/MIGRATION.md#til-jkl-logo-react900"},"migrasjonsguiden")," om du ikke har oppgradert ennå."),"\n",r.createElement(t.h2,null,"ToggleSlider tåler lengre tekster"),"\n",r.createElement(t.p,null,"Espen har bygget opp ",r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/toggleswitch"},"ToggleSlider")," på nytt fra bunnen av. Nå tåler den litt lengre tekster enn før uten å se rar ut, men husk at tekster uansett ",r.createElement(t.a,{href:"/preview/disabled-text-input/komponenter/toggleswitch#bruk"},"bør holdes noenlunde korte"),"."),"\n",r.createElement(t.p,null,r.createElement(t.img,{src:"/assets/blog/updates/mai-2022/toggleslider-demo.gif",alt:""})),"\n",r.createElement(t.h2,null,"For utviklere"),"\n",r.createElement(t.h3,null,"Guide for å teste Jøkul-endringer i eget prosjekt"),"\n",r.createElement(t.p,null,"Følg ",r.createElement(t.a,{href:"/preview/disabled-text-input/guider/hvordan-teste-endringer-eget-prosjekt"},"denne guiden")," om du skal gjøre endringer i Jøkul-kode og vil teste endringene dine på localhost i kontekst av ditt eget prosjekt."),"\n",r.createElement(t.h3,null,"Kommende breaking changes"),"\n",r.createElement(t.h4,null,"Snart ny kode for DatePicker"),"\n",r.createElement(t.p,null,"Det pågår en designjobb for å fornye DatePicker, men i mellomtiden har dagens versjon blitt så buggy at vi ser oss nødt til å erstatte den med en ny implementasjon."),"\n",r.createElement(t.p,null,"Det blir en breaking change for DatePicker sannsynligvis allerede neste uke (uke 22). Om du er nysgjerrig så ligger endringene så langt på branchen ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/fix/datepicker/packages/datepicker-react/src"},"fix/datepicker"),". Det gjenstår blant annet å fikse enhetstester og migrasjonsguide, men APIet har stabilisert seg."),"\n",r.createElement(t.h4,null,"Fremtidig major-versjon av core"),"\n",r.createElement(t.p,null,"Det ligger i kortene at det kommer en ",r.createElement(t.em,null,"breaking change")," i ",r.createElement(t.code,null,"@fremtind/jkl-core")," for de av dere som bruker Sass-kode fra den pakka."),"\n",r.createElement(t.p,null,"Det ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2868"},"etableres et tydelig API og en stilguide for Sass"),". Det vil bli lagt ut en migreringsguide, og for det meste er det snakk om å følge eksemplene på ",r.createElement(t.em,null,"search and replace")," for å oppgradere."),"\n",r.createElement(t.p,null,"Planen er å merge dette uke 23 (7. til 10. juni)."),"\n",r.createElement(t.p,null,"Siden det er en ",r.createElement(t.em,null,"breaking change")," i core vil alle pakker få en ny majorversjon. Det er ingen breaking changes i pakkene ellers."),"\n",r.createElement(t.h2,null,"Diverse bugfikser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Accordion har fått kompaktversjon igjen i Figma"),"\n",r.createElement(t.li,null,"Sercan la til muligheten for maxLength på Feedback sine tekstfelter (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2863"},"#2863"),")"),"\n",r.createElement(t.li,null,"JoMs fikset en bug i formatering av valuta hvis den var ",r.createElement(t.code,null,"0")," (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2848"},"#2848"),")"),"\n",r.createElement(t.li,null,"kennidenni gjorde så typedefinisjonen til knapper er strengere (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2857"},"#2857"),")"),"\n",r.createElement(t.li,null,"Select i dark mode får nå riktig rødfarge ved valideringsfeil (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2877"},"#2877"),")"),"\n",r.createElement(t.li,null,"matssom fikset en feil i dokumentasjonen for FieldGroup (",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2864"},"#2864"),")"),"\n"),"\n",r.createElement(t.h2,null,"Takk"),"\n",r.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"espkva"),"\n",r.createElement(t.li,null,"JoMs"),"\n",r.createElement(t.li,null,"kennidenni"),"\n",r.createElement(t.li,null,"matssom"),"\n",r.createElement(t.li,null,"SercanSercan"),"\n"),"\n",r.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)};var o=n(75482),s=n(96036),c=n(59001),m=n(65458),d=n(79379);const u=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(m.M1,Object.assign({},i,{versions:l.versions})),t.pathname.includes("komponenter")&&r.createElement(c.c,{variant:"komponent",component:i.title}),r.createElement(m.w5,i),a,s&&r.createElement(o.l,{types:s}))};function g(e){return r.createElement(p,e,r.createElement(i,e))}},75482:function(e,t,n){n.d(t,{l:function(){return g}});var l=n(96845),r=n(41162),a=n(74797),i=n(92379),o=n(25329);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return o}});var l=n(48467),r=n(58990),a=n(92379),i=n(25329);const o=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(r.U,null),a.createElement(i.nv,null,s[t].text)),a.createElement(l.r,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(80324),r=n.n(l),a=n(24157),i=n(92379),o=n(69215);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return s}});var l=n(99767),r=n(651),a=n(80324),i=n.n(a);const o=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,l.Z)(e,o);return(0,r.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",t),"data-density":n,id:a},s))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var l=n(99767),r=n(651),a=n(42054),i=n(95020),o=n(80324),s=n.n(o),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:o,startExpanded:d=!1,onClick:u,id:p}=e,g=(0,l.Z)(e,m);const[k,f]=(0,c.useState)(d),[E]=(0,c.useState)((()=>d)),{detailsRef:h,summaryRef:v,contentRef:b,onSummaryClick:j}=(0,i.E)({onOpenChange:(e,t)=>{f(e),u&&u(t,e)},isExpanded:E});return(0,r.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},g,{className:s()("jkl-accordion-item",o),ref:h,id:p,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:v,children:[n,(0,r.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var l=n(92379),r=n(55650),a=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>l.createElement(r.J,((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return h}});var l=n(92379),r=n(94207),a=n(49309),i=n(36774),o=n(64081),s=n(64483),c=n(42104),m=n(98746),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const h=(0,l.forwardRef)(((e,t)=>{var n,d=e,{caption:h,columns:v,emptyTableText:b,rows:j,verticalAlign:y}=d,w=((e,t)=>{var n={};for(var l in e)k.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&g)for(var l of g(e))t.indexOf(l)<0&&f.call(e,l)&&(n[l]=e[l]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return l.createElement(r.i,(n=((e,t)=>{for(var n in t||(t={}))k.call(t,n)&&E(e,n,t[n]);if(g)for(var n of g(t))f.call(t,n)&&E(e,n,t[n]);return e})({fullWidth:!0},w),u(n,p({ref:t}))),h&&l.createElement(i.R,{srOnly:!0},h),l.createElement(s.s,null,l.createElement(m.S,null,v.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===j.length&&b&&l.createElement(m.S,null,l.createElement(o.p,{colSpan:v.length},b)),j.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":v[t],verticalAlign:y},e))))))))}));h.displayName="DataTable"}}]);