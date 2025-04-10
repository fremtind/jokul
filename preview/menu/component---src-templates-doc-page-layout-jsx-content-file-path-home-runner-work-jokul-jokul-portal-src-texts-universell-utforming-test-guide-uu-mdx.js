"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[602],{60726:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return u},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Generell testing av universell utforming"),"\n",l.createElement(t.p,null,"Husk også å se på ",l.createElement(t.a,{href:"/preview/menu/universell-utforming/skjermleser"},"skjermleser-")," og ",l.createElement(t.a,{href:"/preview/menu/universell-utforming/tastatur"},"tastaturnavigasjonsguiden")),"\n",l.createElement(t.h2,null,"Tekststørrelse"),"\n",l.createElement(t.p,null,"Noen er avhengig av å endre tekststørrelsen på et nettsted for å kunne bruke tjenesten. Test ved å endre størrelse i nettleser."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"I chrome: Gå til ",l.createElement(t.code,null,"chrome://settings/")," og under utseende kan du endre skriftstørrelse"),"\n",l.createElement(t.li,null,"I Firefox: I hamburgermenyen, velg ",l.createElement(t.code,null,"Preferences")," under ",l.createElement(t.code,null,"Language and Appearance")," kan du sette størrelse, standard er 16."),"\n"),"\n",l.createElement(t.h2,null,"Farger og kontrast"),"\n",l.createElement(t.p,null,"Se ",l.createElement(t.a,{href:"https://www.a11yproject.com/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/"},"a11yproject sin guide")," for hvordan omfattende teste:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"farge og kontrast"),"\n",l.createElement(t.li,null,"dark mode"),"\n",l.createElement(t.li,null,"høykontrastmodus (også: ",l.createElement(t.a,{href:"https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/"},"Eric Bailey for Smashing Magazine"),")"),"\n",l.createElement(t.li,null,"inverted mode"),"\n",l.createElement(t.li,null,"og andre lignende moduser"),"\n"),"\n",l.createElement(t.p,null,"Kan du fortsatt se elementer som for eksempel lenker dersom alt er gråskala? Husk at farger aldri skal være eneste virkemiddel for å formidle informasjon."),"\n",l.createElement(t.h3,null,"Høykontrastmodus"),"\n",l.createElement(t.p,null,"Høykontrastmodus er best støttet på Windows, men kan også ",l.createElement(t.a,{href:"https://developer.chrome.com/blog/new-in-devtools-98/#forced-colors"},"simuleres i Chromium-baserte nettlesere"),". Sjekk at det du lager fortsatt er synlig i denne modusen, i alle states:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"uten fokus"),"\n",l.createElement(t.li,null,"ved hover"),"\n",l.createElement(t.li,null,"tastaturfokus"),"\n"),"\n",l.createElement(t.p,null,"Husk at brukeren velger sine egne farger i denne modusen. Sjekk spesielt at SVGer får fargen sin fra temaet, ikke fra oss."),"\n",l.createElement(t.h2,null,"Zoom i nettleser"),"\n",l.createElement(t.p,null,"Forstørr nettsiden 200%. Sjekk at innhold fortsatt er lesbart og at innhold ikke overlapper."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Normalt gir ",l.createElement(t.code,null,"ctrl + +")," større, ",l.createElement(t.code,null,"ctrl + -")," gir mindre zoom, ",l.createElement(t.code,null,"ctrl + scrollhjul")," også. For å komme tilbake til normalen kan man klikke på indikatoren i høyre hjørnet inne i addressefeltet eller ",l.createElement(t.code,null,"ctrl + 0"),"."),"\n",l.createElement(t.li,null,"I Firefox kan man ",l.createElement(t.code,null,"Preferences\\Language and Appearance")," sette default zoom og tekstzoom verdier"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.youtube.com/watch?v=S1j6CYT3kWA&feature=youtu.be"},"Sugerørstesten (youtube)")," er en test som kan brukes for å simulere hvordan det er å bruke tjenesten for en person som benytter seg av zoom større enn 200%."),"\n",l.createElement(t.h2,null,"Mobil/Touch"),"\n",l.createElement(t.p,null,"Testing av tastaturnavigasjon dekker i stor grad testing av mobil med hjelpeverktøy. Istedenfor ",l.createElement(t.code,null,"tab")," bruker mobil swipe, og istedenfor ",l.createElement(t.code,null,"space/enter")," bruker mobil trykk."),"\n",l.createElement(t.p,null,"Test om nettsiden kan bli rotert i alle retninger."),"\n",l.createElement(t.p,null,"Test at elementer som hamburgermenyer, knapper, lenker og andre touch-elementer er mulig å bruke med både små og store fingre samt pekepenn."),"\n",l.createElement(t.p,null,"Test at det er nok luft slik at man alltid har et område å ta tak i for å scrolle siden. Det er viktig at bruker ikke blir låst fast på en skjerm hvor man ikke kan scrolle videre."),"\n",l.createElement(t.h2,null,"Redusert bevegelse"),"\n",l.createElement(t.p,null,"De fleste opperativ system lar nå brukeren sette et ønske om redusert bevegelse. Dette kan være ønskelig av mange grunner, feks vertigo, ADHD eller epilepsi. Denne setter er også tilgjengelig for oss igjennom de aller fleste nettlesere som ",l.createElement(t.code,null,"prefers-reduced-motion"),". Siden bevegelse er et viktig prinsipp for Jøkul, er det viktig at det ikke går på bekostning av brukeropplevesen hos de som ønsker redusert bevegelse. Jøkul tilbyr en ",l.createElement(t.a,{href:"/preview/menu/komponenter/reducedmotion"},"React Hook")," for dette. Små, brukerinitsierte animasjoner, som feks en animasjon ved klikk på en checkbox er helt greit, men man skal unngå store bevegelser, bevegelser som ikke er brukerinitsiert og alt av paralaxeffekter."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"I Windows 10: Settings > Ease of Access > Display > Show animations in Windows"),"\n",l.createElement(t.li,null,"I macOS: System Preferences > Accessibility > Display > Reduce motion"),"\n",l.createElement(t.li,null,"I iOS: Settings > General > Accessibility > Reduce Motion"),"\n",l.createElement(t.li,null,"I Android 9+: Settings > Accessibility > Remove animations"),"\n",l.createElement(t.li,null,"I GTK/GNOME: GNOME Tweaks > General > Animation skrudd av"),"\n",l.createElement(t.li,null,"I Plasma/KDE: System Settings > Workspace Behavior -> General Behavior > “Animation speed” sett til “Instant”"),"\n",l.createElement(t.li,null,"I Firefox about:config: Sett ui.prefersReducedMotion til 1"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(72285),i=n(22756),c=n(95573),m=n(1634);const u=e=>{let{pageContext:t}=e;return l.createElement(i.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:s}=n.page,{types:i}=r;return l.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},s,{versions:r.versions})),l.createElement(c.w5,s),a,i&&l.createElement(o.l,{types:i}))};function p(e){return l.createElement(d,e,l.createElement(s,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(58820),l=n(63571),a=n(87505),s=n(70079),o=n(54656);const i=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,s=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",s)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,l,a,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return s.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&s.createElement(o.dn,{className:"jkl-portal-code-block"},i),r.length>0&&s.createElement(p,{props:r}),a.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),l=n.n(r),a=n(49597),s=n(70079),o=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,s.useContext)(o.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return s}});var r=n(35250),l=n(26372),a=n.n(l);const s=e=>{let{className:t,density:n,id:l,...s}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...s})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),l=n(68998),a=n(1386),s=n(26372),o=n.n(s),i=n(70079);const c=e=>{let{children:t,title:n,className:s,startExpanded:c=!1,onClick:m,id:u,...d}=e;const[p,k]=(0,i.useState)(c),[g]=(0,i.useState)((()=>c)),{detailsRef:f,summaryRef:E,contentRef:v,onSummaryClick:h}=(0,a.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:g});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",s),ref:f,id:u,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[n,(0,r.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),l=n(41699),a=n(65174),s=n(6914),o=n(82546),i=n(39126),c=n(66169),m=n(94509);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(s.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(m.S,null,u.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&d&&r.createElement(m.S,null,r.createElement(o.p,{colSpan:u.length},d)),p.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);