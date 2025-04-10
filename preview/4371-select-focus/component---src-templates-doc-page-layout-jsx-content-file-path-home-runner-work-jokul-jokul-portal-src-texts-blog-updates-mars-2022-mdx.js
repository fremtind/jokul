"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4428],{88629:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return u},default:function(){return k}});var r=n(47160),l=n(70079),a=n(56180);function o(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",code:"code",em:"em",h2:"h2",img:"img",pre:"pre",h3:"h3"},(0,r.ah)(),e.components),{ComponentExample:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ComponentExample",!0),l.createElement(l.Fragment,null,l.createElement(t.p,null,"Her er høydepunktene fra Jøkul i mars:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Ny komponent: Footer"),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/4371-select-focus/komponenter/buttons"},"Knapper")," har varianter med pil på venstre eller høyre side"),"\n",l.createElement(t.li,null,"Ekspanderbar tabellrad har fått et forbedret design"),"\n",l.createElement(t.li,null,"Tabelloverskrifter kan alignes mot høyre"),"\n",l.createElement(t.li,null,"Overskrifter i SummaryTable har blitt mer fleksible"),"\n",l.createElement(t.li,null,"Formatering av telefonnummer kan inkludere landkode"),"\n",l.createElement(t.li,null,"DatePicker annonserer for skjermlesere når man går til et nytt år"),"\n",l.createElement(t.li,null,"Sercan blogget om Mixpanel og kompleksitet i designsystemer"),"\n",l.createElement(t.li,null,"En del husarbeid for utviklere:","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Tabellkomponenter kan ta i mot en React ref"),"\n",l.createElement(t.li,null,"Forbedret ytelse i flere hooks"),"\n",l.createElement(t.li,null,"useAnimatedHeight kan brukes helt uten egen CSS"),"\n",l.createElement(t.li,null,"Core eksporterer nå ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2794/commits/58515c857be6ed9d598e3147a6e6600fbb766d2a"},"easinger og timinger som TypeScript")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"@include motion;")," kan brukes uten parametere"),"\n",l.createElement(t.li,null,"Feedback-komponenten med smileys får React keys"),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,'Ellers skjer det mye jobbing i Jøkul-teamet med forbedringer "under panseret" både i Figma og i Sass-kode. Der gjenstår det fremdeles en del, men ',l.createElement(t.em,null,"watch this space")," 👀"),"\n",l.createElement(t.h2,null,"Footer"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"/preview/4371-select-focus/komponenter/footer"},"Footeren fra Fremtind")," fungerer som avsender av de respektive nettsidene og applikasjonene. Footer brukes når det kreves tilleggsinformasjon om opphavsrett, kontaktinformasjon, lenker til andre sider eller lignende."),"\n",l.createElement(n,{title:"Footer",scrollable:!0,component:FooterExample,knobs:footerExampleKnobs}),"\n",l.createElement(t.h2,null,"Knapper med piler"),"\n",l.createElement(t.p,null,"Et vanlig mønster er å bruke ",l.createElement(t.a,{href:"/preview/4371-select-focus/komponenter/buttons"},"knapper")," med piler til navigasjon i skjemaflyter med flere steg. De ulike Buttons har fått nye varianter med pil på høyre og venstre side. Om du for eksempel har knapper med teksene ",l.createElement(t.em,null,"Forrige")," og ",l.createElement(t.em,null,"Neste")," kan du vurdere å legge på disse pilene. Stakseth og kennidenni ordnet denne varianten i Figma og i kode."),"\n",l.createElement("div",null,l.createElement(a.kq,{arrow:"left",className:"jkl-spacing-12--right"},l.createElement(t.p,null,"Forrige")),l.createElement(a.KM,{arrow:"right"},"Neste")),"\n",l.createElement(t.h2,null,"Forbedringer i Table"),"\n",l.createElement(t.p,null,"JoMs og Murstam har jobbet med et forbedret design for ekspanderbare tabellrader på mobil. Det er ikke lenger noen ",l.createElement(t.em,null,"border")," før det ekspanderte innholdet, og ekspanderknappen har blitt plassert til høyre. Målet er at det ekspanderte innholdet skal kunne virke mer som en del av den ekspanderte raden, i stedet for en egen rad."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/updates/mars-2022/ekspander-rad.gif",alt:""})),"\n",l.createElement(t.p,null,"JoMs fikset en ",l.createElement(t.code,null,"align"),"-prop på ",l.createElement(t.code,null,"TableHeader"),", så overskriften kan justeres mot høyre hvis kolonnen er det. Han ordnet også at tabellkomponenter kan motta en ",l.createElement(t.code,null,"ref")," hvis du trenger det."),"\n",l.createElement(t.h2,null,"Formatering av telefonnummer med landkode"),"\n",l.createElement(t.p,null,"JoMs slår til igjen. Du kan nå legge til en landkode når du formaterer telefonnummere."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-ts"},'const formatted = formatTelefonnummer("81549300", {\n    countryCode: "47",\n});\n// "+47 815 49 300"\n')),"\n",l.createElement(t.h2,null,"DatePicker annonserer nytt år"),"\n",l.createElement(t.p,null,"Ved årsskiftet ble det lagt merke til at DatePicker ikke annonserte for skjermlesere når man hadde flyttet seg fra 2022 til 2021. Man kunne ",l.createElement(t.em,null,"anta")," at man hadde flyttet seg til desember 2021, men nå slipper man å anta. DatePicker er endret så skjermlesere annonserer årstallet én gang når man bytter kalenderår."),"\n",l.createElement(t.h2,null,"SummaryTable med skjult overskrift"),"\n",l.createElement(t.p,null,"Vi fortsetter med skjermlesere. Mikail har ordnet så SummaryTable sine overskrifter kan være ReactNodes, ikke bare ",l.createElement(t.code,null,"string"),". Med andre ord kan man sende inn for eksempel en ",l.createElement(t.code,null,'<span className="jkl-sr-only">')," dersom man trenger å skjule overskrifter visuelt, men beholde de for skjermlesere."),"\n",l.createElement(t.h2,null,"Husarbeid for utviklere"),"\n",l.createElement(t.h3,null,"Forbedringer i hooks"),"\n",l.createElement(t.p,null,"Flere hooks har fått forbedret ytelse. ",l.createElement(t.code,null,"useScreen")," og ",l.createElement(t.code,null,"useBrowserPreferences")," bruker nå andre lyttere enn tidligere for å beregne typen skjerm (liten, medium, stor, XL) og brukerens ønsker for fargetema og redusert bevegelse. Det burde gi betydelig færre re-renders ute i apper ved endring av skjermstørrelse."),"\n",l.createElement(t.p,null,"Hvis du bruker ",l.createElement(t.code,null,"useAnimatedHeight")," kan du nå bruke den helt uten egen CSS for å styre synlighet. Hooken ordner alt selv."),"\n",l.createElement(t.h3,null,"Diverse bugfikser"),"\n",l.createElement(t.p,null,"HenrikHermansen fikset en bug i Feedback hvor smileys ikke fikk en React ",l.createElement(t.code,null,"key"),". Han fikset også så typedefinisjoner blir eksportert fra ",l.createElement(t.code,null,"@fremtind/jkl-image-react")," på riktig måte."),"\n",l.createElement(t.p,null,"BjorneOmaFremtind og wkillerud avdekket og fikset enda flere bugs i TextArea i starten av mars."),"\n",l.createElement(t.p,null,"Checkboxer som har en egen ID fikk en regresjon som gjorde at de ikke fungerte, og ble fikset igjen."),"\n",l.createElement(t.p,null,"JoMs forbedret koden for å parse tall, som har blitt litt strengere med hva den godtar."),"\n",l.createElement(t.h2,null,"Takk"),"\n",l.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"HenrikHermansen"),"\n",l.createElement(t.li,null,"BjorneOmaFremtind"),"\n",l.createElement(t.li,null,"kennidenni"),"\n",l.createElement(t.li,null,"Stakseth"),"\n",l.createElement(t.li,null,"JoMs"),"\n",l.createElement(t.li,null,"Murstam"),"\n",l.createElement(t.li,null,"SercanSercan"),"\n",l.createElement(t.li,null,"Mikaila94"),"\n"),"\n",l.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var s=n(72285),c=n(22756),m=n(95573),d=n(1634);const u=e=>{let{pageContext:t}=e;return l.createElement(c.p,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:r.versions})),l.createElement(m.w5,o),a,i&&l.createElement(s.l,{types:i}))};function k(e){return l.createElement(p,e,l.createElement(i,e))}},56180:function(e,t,n){n.d(t,{C9:function(){return d},KM:function(){return c},kq:function(){return m},zx:function(){return s}});var r=n(41886),l=n(80532),a=n(26372),o=n.n(a),i=n(70079);const s=i.forwardRef((function(e,t){const{as:n="button",children:a,className:s,density:c,onTouchStart:m,loader:d,icon:u,iconPosition:p="left",iconLeft:k,iconRight:f,variant:g="secondary",...E}=e,b=n,h=(0,i.useCallback)((e=>{m&&m(e);const t=e.target;if(t&&!t.disabled&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,r=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[m]),v=(0,l.c)(null==d?void 0:d.showLoader),y=Boolean(a)&&Boolean(null==d?void 0:d.showLoader);return i.createElement(b,Object.assign({},v,{"data-loading":y,"data-density":c,className:o()("jkl-button","jkl-button--"+g,s),disabled:"button"===n?null==d?void 0:d.showLoader:void 0,onTouchStart:h},E,{ref:t}),i.createElement("div",{className:"jkl-button__label"},k&&k,u&&"left"===p&&u,a&&i.createElement("span",{className:"jkl-button__text"},a),f&&f,u&&"right"===p&&u),a&&i.createElement(r.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==d?void 0:d.textDescription)||"Vennligst vent","aria-hidden":!(null!=d&&d.showLoader)}))}));function c(e){const t={...e,variant:"primary"};return i.createElement(s,t)}function m(e){const t={...e,variant:"secondary"};return i.createElement(s,t)}function d(e){const t={...e,variant:"tertiary"};return i.createElement(s,t)}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(58820),l=n(63571),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(35250),l=n(26372),a=n.n(l);const o=e=>{let{className:t,density:n,id:l,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),l=n(68998),a=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:m,id:d,...u}=e;const[p,k]=(0,s.useState)(c),[f]=(0,s.useState)((()=>c)),{detailsRef:g,summaryRef:E,contentRef:b,onSummaryClick:h}=(0,a.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:f});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:g,id:d,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[n,(0,r.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:b,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),m=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...f}=e;return r.createElement(l.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(m.S,null,d.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&u&&r.createElement(m.S,null,r.createElement(i.p,{colSpan:d.length},u)),p.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);