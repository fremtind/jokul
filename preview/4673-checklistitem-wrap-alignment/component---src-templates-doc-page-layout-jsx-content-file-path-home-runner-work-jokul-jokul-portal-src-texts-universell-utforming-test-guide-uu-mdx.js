"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[602],{91589:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return k}});var r=n(64717),l=n(92379);function a(e){const t=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Generell testing av universell utforming"),"\n",l.createElement(t.p,null,"Husk også å se på ",l.createElement(t.a,{href:"/preview/4673-checklistitem-wrap-alignment/universell-utforming/skjermleser"},"skjermleser-")," og ",l.createElement(t.a,{href:"/preview/4673-checklistitem-wrap-alignment/universell-utforming/tastatur"},"tastaturnavigasjonsguiden")),"\n",l.createElement(t.h2,null,"Tekststørrelse"),"\n",l.createElement(t.p,null,"Noen er avhengig av å endre tekststørrelsen på et nettsted for å kunne bruke tjenesten. Test ved å endre størrelse i nettleser."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"I chrome: Gå til ",l.createElement(t.code,null,"chrome://settings/")," og under utseende kan du endre skriftstørrelse"),"\n",l.createElement(t.li,null,"I Firefox: I hamburgermenyen, velg ",l.createElement(t.code,null,"Preferences")," under ",l.createElement(t.code,null,"Language and Appearance")," kan du sette størrelse, standard er 16."),"\n"),"\n",l.createElement(t.h2,null,"Farger og kontrast"),"\n",l.createElement(t.p,null,"Se ",l.createElement(t.a,{href:"https://www.a11yproject.com/posts/2020-01-23-operating-system-and-browser-accessibility-display-modes/"},"a11yproject sin guide")," for hvordan omfattende teste:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"farge og kontrast"),"\n",l.createElement(t.li,null,"dark mode"),"\n",l.createElement(t.li,null,"høykontrastmodus (også: ",l.createElement(t.a,{href:"https://www.smashingmagazine.com/2022/03/windows-high-contrast-colors-mode-css-custom-properties/"},"Eric Bailey for Smashing Magazine"),")"),"\n",l.createElement(t.li,null,"inverted mode"),"\n",l.createElement(t.li,null,"og andre lignende moduser"),"\n"),"\n",l.createElement(t.p,null,"Kan du fortsatt se elementer som for eksempel lenker dersom alt er gråskala? Husk at farger aldri skal være eneste virkemiddel for å formidle informasjon."),"\n",l.createElement(t.h3,null,"Høykontrastmodus"),"\n",l.createElement(t.p,null,"Høykontrastmodus er best støttet på Windows, men kan også ",l.createElement(t.a,{href:"https://developer.chrome.com/blog/new-in-devtools-98/#forced-colors"},"simuleres i Chromium-baserte nettlesere"),". Sjekk at det du lager fortsatt er synlig i denne modusen, i alle states:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"uten fokus"),"\n",l.createElement(t.li,null,"ved hover"),"\n",l.createElement(t.li,null,"tastaturfokus"),"\n"),"\n",l.createElement(t.p,null,"Husk at brukeren velger sine egne farger i denne modusen. Sjekk spesielt at SVGer får fargen sin fra temaet, ikke fra oss."),"\n",l.createElement(t.h2,null,"Zoom i nettleser"),"\n",l.createElement(t.p,null,"Forstørr nettsiden 200%. Sjekk at innhold fortsatt er lesbart og at innhold ikke overlapper."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Normalt gir ",l.createElement(t.code,null,"ctrl + +")," større, ",l.createElement(t.code,null,"ctrl + -")," gir mindre zoom, ",l.createElement(t.code,null,"ctrl + scrollhjul")," også. For å komme tilbake til normalen kan man klikke på indikatoren i høyre hjørnet inne i addressefeltet eller ",l.createElement(t.code,null,"ctrl + 0"),"."),"\n",l.createElement(t.li,null,"I Firefox kan man ",l.createElement(t.code,null,"Preferences\\Language and Appearance")," sette default zoom og tekstzoom verdier"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.youtube.com/watch?v=S1j6CYT3kWA&feature=youtu.be"},"Sugerørstesten (youtube)")," er en test som kan brukes for å simulere hvordan det er å bruke tjenesten for en person som benytter seg av zoom større enn 200%."),"\n",l.createElement(t.h2,null,"Mobil/Touch"),"\n",l.createElement(t.p,null,"Testing av tastaturnavigasjon dekker i stor grad testing av mobil med hjelpeverktøy. Istedenfor ",l.createElement(t.code,null,"tab")," bruker mobil swipe, og istedenfor ",l.createElement(t.code,null,"space/enter")," bruker mobil trykk."),"\n",l.createElement(t.p,null,"Test om nettsiden kan bli rotert i alle retninger."),"\n",l.createElement(t.p,null,"Test at elementer som hamburgermenyer, knapper, lenker og andre touch-elementer er mulig å bruke med både små og store fingre samt pekepenn."),"\n",l.createElement(t.p,null,"Test at det er nok luft slik at man alltid har et område å ta tak i for å scrolle siden. Det er viktig at bruker ikke blir låst fast på en skjerm hvor man ikke kan scrolle videre."),"\n",l.createElement(t.h2,null,"Redusert bevegelse"),"\n",l.createElement(t.p,null,"De fleste opperativ system lar nå brukeren sette et ønske om redusert bevegelse. Dette kan være ønskelig av mange grunner, feks vertigo, ADHD eller epilepsi. Denne setter er også tilgjengelig for oss igjennom de aller fleste nettlesere som ",l.createElement(t.code,null,"prefers-reduced-motion"),". Siden bevegelse er et viktig prinsipp for Jøkul, er det viktig at det ikke går på bekostning av brukeropplevesen hos de som ønsker redusert bevegelse. Jøkul tilbyr en ",l.createElement(t.a,{href:"/preview/4673-checklistitem-wrap-alignment/komponenter/reducedmotion"},"React Hook")," for dette. Små, brukerinitsierte animasjoner, som feks en animasjon ved klikk på en checkbox er helt greit, men man skal unngå store bevegelser, bevegelser som ikke er brukerinitsiert og alt av paralaxeffekter."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"I Windows 10: Settings > Ease of Access > Display > Show animations in Windows"),"\n",l.createElement(t.li,null,"I macOS: System Preferences > Accessibility > Display > Reduce motion"),"\n",l.createElement(t.li,null,"I iOS: Settings > General > Accessibility > Reduce Motion"),"\n",l.createElement(t.li,null,"I Android 9+: Settings > Accessibility > Remove animations"),"\n",l.createElement(t.li,null,"I GTK/GNOME: GNOME Tweaks > General > Animation skrudd av"),"\n",l.createElement(t.li,null,"I Plasma/KDE: System Settings > Workspace Behavior -> General Behavior > “Animation speed” sett til “Instant”"),"\n",l.createElement(t.li,null,"I Firefox about:config: Sett ui.prefersReducedMotion til 1"),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},s=n(75482),i=n(96036),c=n(59001),m=n(65458),u=n(79379);const d=e=>{let{pageContext:t}=e;return l.createElement(i.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(u.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&l.createElement(c.c,{variant:"komponent",component:o.title}),l.createElement(m.w5,o),a,i&&l.createElement(s.l,{types:i}))};function k(e){return l.createElement(p,e,l.createElement(o,e))}},75482:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(96845),l=n(41162),a=n(74797),o=n(92379),s=n(25329);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(48467),l=n(58990),a=n(92379),o=n(25329);const s=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.U,null),a.createElement(o.nv,null,i[t].text)),a.createElement(r.r,{href:i[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},i={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(80324),l=n.n(r),a=n(24157),o=n(92379),s=n(69215);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(99767),l=n(651),a=n(80324),o=n.n(a);const s=["className","density","id"],i=e=>{let{className:t,density:n,id:a}=e,i=(0,r.Z)(e,s);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},i))}},41162:function(e,t,n){n.d(t,{Q:function(){return u}});var r=n(99767),l=n(651),a=n(42054),o=n(95020),s=n(80324),i=n.n(s),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:s,startExpanded:u=!1,onClick:d,id:p}=e,k=(0,r.Z)(e,m);const[f,g]=(0,c.useState)(u),[v]=(0,c.useState)((()=>u)),{detailsRef:E,summaryRef:b,contentRef:h,onSummaryClick:y}=(0,o.E)({onOpenChange:(e,t)=>{g(e),d&&d(t,e)},isExpanded:v});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:i()("jkl-accordion-item",s),ref:E,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:b,children:[n,(0,l.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var r=n(92379),l=n(55650),a=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(l.J,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return E}});var r=n(92379),l=n(94207),a=n(49309),o=n(36774),s=n(64081),i=n(64483),c=n(42104),m=n(98746),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,r.forwardRef)(((e,t)=>{var n,u=e,{caption:E,columns:b,emptyTableText:h,rows:y,verticalAlign:j}=u,w=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.i,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))g.call(t,n)&&v(e,n,t[n]);return e})({fullWidth:!0},w),d(n,p({ref:t}))),E&&r.createElement(o.R,{srOnly:!0},E),r.createElement(i.s,null,r.createElement(m.S,null,b.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===y.length&&h&&r.createElement(m.S,null,r.createElement(s.p,{colSpan:b.length},h)),y.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":b[t],verticalAlign:j},e))))))))}));E.displayName="DataTable"}}]);