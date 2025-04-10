"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[8005],{27626:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return p},default:function(){return f}});var r=n(33156),l=n(7378),a=n(46665);function o(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",code:"code",em:"em",h2:"h2",img:"img",pre:"pre",h3:"h3"},(0,r.RP)(),e.components),{ComponentExample:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ComponentExample",!0),l.createElement(l.Fragment,null,l.createElement(t.p,null,"Her er høydepunktene fra Jøkul i mars:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Ny komponent: Footer"),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"/preview/4421-deprecate-accordion-in-docs/komponenter/buttons"},"Knapper")," har varianter med pil på venstre eller høyre side"),"\n",l.createElement(t.li,null,"Ekspanderbar tabellrad har fått et forbedret design"),"\n",l.createElement(t.li,null,"Tabelloverskrifter kan alignes mot høyre"),"\n",l.createElement(t.li,null,"Overskrifter i SummaryTable har blitt mer fleksible"),"\n",l.createElement(t.li,null,"Formatering av telefonnummer kan inkludere landkode"),"\n",l.createElement(t.li,null,"DatePicker annonserer for skjermlesere når man går til et nytt år"),"\n",l.createElement(t.li,null,"Sercan blogget om Mixpanel og kompleksitet i designsystemer"),"\n",l.createElement(t.li,null,"En del husarbeid for utviklere:","\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Tabellkomponenter kan ta i mot en React ref"),"\n",l.createElement(t.li,null,"Forbedret ytelse i flere hooks"),"\n",l.createElement(t.li,null,"useAnimatedHeight kan brukes helt uten egen CSS"),"\n",l.createElement(t.li,null,"Core eksporterer nå ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/2794/commits/58515c857be6ed9d598e3147a6e6600fbb766d2a"},"easinger og timinger som TypeScript")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"@include motion;")," kan brukes uten parametere"),"\n",l.createElement(t.li,null,"Feedback-komponenten med smileys får React keys"),"\n"),"\n"),"\n"),"\n",l.createElement(t.p,null,'Ellers skjer det mye jobbing i Jøkul-teamet med forbedringer "under panseret" både i Figma og i Sass-kode. Der gjenstår det fremdeles en del, men ',l.createElement(t.em,null,"watch this space")," 👀"),"\n",l.createElement(t.h2,null,"Footer"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"/preview/4421-deprecate-accordion-in-docs/komponenter/footer"},"Footeren fra Fremtind")," fungerer som avsender av de respektive nettsidene og applikasjonene. Footer brukes når det kreves tilleggsinformasjon om opphavsrett, kontaktinformasjon, lenker til andre sider eller lignende."),"\n",l.createElement(n,{title:"Footer",scrollable:!0,component:FooterExample,knobs:footerExampleKnobs}),"\n",l.createElement(t.h2,null,"Knapper med piler"),"\n",l.createElement(t.p,null,"Et vanlig mønster er å bruke ",l.createElement(t.a,{href:"/preview/4421-deprecate-accordion-in-docs/komponenter/buttons"},"knapper")," med piler til navigasjon i skjemaflyter med flere steg. De ulike Buttons har fått nye varianter med pil på høyre og venstre side. Om du for eksempel har knapper med teksene ",l.createElement(t.em,null,"Forrige")," og ",l.createElement(t.em,null,"Neste")," kan du vurdere å legge på disse pilene. Stakseth og kennidenni ordnet denne varianten i Figma og i kode."),"\n",l.createElement("div",null,l.createElement(a.tA,{arrow:"left",className:"jkl-spacing-12--right"},l.createElement(t.p,null,"Forrige")),l.createElement(a.jn,{arrow:"right"},"Neste")),"\n",l.createElement(t.h2,null,"Forbedringer i Table"),"\n",l.createElement(t.p,null,"JoMs og Murstam har jobbet med et forbedret design for ekspanderbare tabellrader på mobil. Det er ikke lenger noen ",l.createElement(t.em,null,"border")," før det ekspanderte innholdet, og ekspanderknappen har blitt plassert til høyre. Målet er at det ekspanderte innholdet skal kunne virke mer som en del av den ekspanderte raden, i stedet for en egen rad."),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/updates/mars-2022/ekspander-rad.gif",alt:""})),"\n",l.createElement(t.p,null,"JoMs fikset en ",l.createElement(t.code,null,"align"),"-prop på ",l.createElement(t.code,null,"TableHeader"),", så overskriften kan justeres mot høyre hvis kolonnen er det. Han ordnet også at tabellkomponenter kan motta en ",l.createElement(t.code,null,"ref")," hvis du trenger det."),"\n",l.createElement(t.h2,null,"Formatering av telefonnummer med landkode"),"\n",l.createElement(t.p,null,"JoMs slår til igjen. Du kan nå legge til en landkode når du formaterer telefonnummere."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-ts"},'const formatted = formatTelefonnummer("81549300", {\n    countryCode: "47",\n});\n// "+47 815 49 300"\n')),"\n",l.createElement(t.h2,null,"DatePicker annonserer nytt år"),"\n",l.createElement(t.p,null,"Ved årsskiftet ble det lagt merke til at DatePicker ikke annonserte for skjermlesere når man hadde flyttet seg fra 2022 til 2021. Man kunne ",l.createElement(t.em,null,"anta")," at man hadde flyttet seg til desember 2021, men nå slipper man å anta. DatePicker er endret så skjermlesere annonserer årstallet én gang når man bytter kalenderår."),"\n",l.createElement(t.h2,null,"SummaryTable med skjult overskrift"),"\n",l.createElement(t.p,null,"Vi fortsetter med skjermlesere. Mikail har ordnet så SummaryTable sine overskrifter kan være ReactNodes, ikke bare ",l.createElement(t.code,null,"string"),". Med andre ord kan man sende inn for eksempel en ",l.createElement(t.code,null,'<span className="jkl-sr-only">')," dersom man trenger å skjule overskrifter visuelt, men beholde de for skjermlesere."),"\n",l.createElement(t.h2,null,"Husarbeid for utviklere"),"\n",l.createElement(t.h3,null,"Forbedringer i hooks"),"\n",l.createElement(t.p,null,"Flere hooks har fått forbedret ytelse. ",l.createElement(t.code,null,"useScreen")," og ",l.createElement(t.code,null,"useBrowserPreferences")," bruker nå andre lyttere enn tidligere for å beregne typen skjerm (liten, medium, stor, XL) og brukerens ønsker for fargetema og redusert bevegelse. Det burde gi betydelig færre re-renders ute i apper ved endring av skjermstørrelse."),"\n",l.createElement(t.p,null,"Hvis du bruker ",l.createElement(t.code,null,"useAnimatedHeight")," kan du nå bruke den helt uten egen CSS for å styre synlighet. Hooken ordner alt selv."),"\n",l.createElement(t.h3,null,"Diverse bugfikser"),"\n",l.createElement(t.p,null,"HenrikHermansen fikset en bug i Feedback hvor smileys ikke fikk en React ",l.createElement(t.code,null,"key"),". Han fikset også så typedefinisjoner blir eksportert fra ",l.createElement(t.code,null,"@fremtind/jkl-image-react")," på riktig måte."),"\n",l.createElement(t.p,null,"BjorneOmaFremtind og wkillerud avdekket og fikset enda flere bugs i TextArea i starten av mars."),"\n",l.createElement(t.p,null,"Checkboxer som har en egen ID fikk en regresjon som gjorde at de ikke fungerte, og ble fikset igjen."),"\n",l.createElement(t.p,null,"JoMs forbedret koden for å parse tall, som har blitt litt strengere med hva den godtar."),"\n",l.createElement(t.h2,null,"Takk"),"\n",l.createElement(t.p,null,"Takk til alle bidragsytere, både på GitHub og i Figma!"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"HenrikHermansen"),"\n",l.createElement(t.li,null,"BjorneOmaFremtind"),"\n",l.createElement(t.li,null,"kennidenni"),"\n",l.createElement(t.li,null,"Stakseth"),"\n",l.createElement(t.li,null,"JoMs"),"\n",l.createElement(t.li,null,"Murstam"),"\n",l.createElement(t.li,null,"SercanSercan"),"\n",l.createElement(t.li,null,"Mikaila94"),"\n"),"\n",l.createElement(t.p,null,"En stor takk også til alle som er med på designsystemforum!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var s=n(68888),c=n(47672),m=n(52948),d=n(38776),u=n(20919);const p=e=>{let{pageContext:t}=e;return l.createElement(c.G,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(u.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(d.Ao,Object.assign({},o,{versions:r.versions})),l.createElement(m.A,{variant:"komponent",component:o.title}),l.createElement(d.f6,o),a,i&&l.createElement(s.N,{types:i}))};function f(e){return l.createElement(k,e,l.createElement(i,e))}},46665:function(e,t,n){n.d(t,{$n:function(){return m},JD:function(){return p},jn:function(){return d},tA:function(){return u}});var r=n(45271),l=n(6124),a=n(90558),o=n(3698),i=n.n(o),s=n(7378);const c=["as","children","className","density","onTouchStart","loader","icon","iconPosition","iconLeft","iconRight","variant"],m=s.forwardRef((function(e,t){const{as:n="button",children:o,className:m,density:d,onTouchStart:u,loader:p,icon:k,iconPosition:f="left",iconLeft:g,iconRight:b,variant:E="secondary"}=e,v=(0,r.A)(e,c),h=n;const y=(0,s.useCallback)((e=>{u&&u(e);const t=e.target;if(t&&!t.disabled&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,r=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",r.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[u]),j=(0,a.F)(null==p?void 0:p.showLoader),N=Boolean(o)&&Boolean(null==p?void 0:p.showLoader);return s.createElement(h,Object.assign({},j,{"data-loading":N,"data-density":d,className:i()("jkl-button","jkl-button--"+E,m),disabled:"button"===n?null==p?void 0:p.showLoader:void 0,onTouchStart:y},v,{ref:t}),s.createElement("div",{className:"jkl-button__label"},g&&g,k&&"left"===f&&k,o&&s.createElement("span",{className:"jkl-button__text"},o),b&&b,k&&"right"===f&&k),o&&s.createElement(l.a,{className:"jkl-button__loader",variant:"medium",textDescription:(null==p?void 0:p.textDescription)||"Vennligst vent","aria-hidden":!(null!=p&&p.showLoader)}))}));function d(e){const t=Object.assign({},e,{variant:"primary"});return s.createElement(m,t)}function u(e){const t=Object.assign({},e,{variant:"secondary"});return s.createElement(m,t)}function p(e){const t=Object.assign({},e,{variant:"tertiary"});return s.createElement(m,t)}},68888:function(e,t,n){n.d(t,{N:function(){return k}});var r=n(88635),l=n(24408),a=n(78022),o=n(7378),i=n(45371);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.NG,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),l=n(38316),a=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(o.fz,null,s[t].text)),a.createElement(r.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(3698),l=n.n(r),a=n(94270),o=n(7378),i=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var r=n(45271),l=n(86106),a=n(3698),o=n.n(a);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.A)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},s))}},24408:function(e,t,n){n.d(t,{A:function(){return d}});var r=n(45271),l=n(86106),a=n(21197),o=n(82455),i=n(3698),s=n.n(i),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:u,id:p}=e,k=(0,r.A)(e,m);const[f,g]=(0,c.useState)(d),[b]=(0,c.useState)((()=>d)),{detailsRef:E,summaryRef:v,contentRef:h,onSummaryClick:y}=(0,o.$)({onOpenChange:(e,t)=>{g(e),u&&u(t,e)},isExpanded:b});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:s()("jkl-accordion-item",i),ref:E,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:y,ref:v,children:[n,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),l=n(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(l.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return E}});var r=n(7378),l=n(10494),a=n(75374),o=n(82462),i=n(60630),s=n(94624),c=n(65759),m=n(21664),d=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const E=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:E,columns:v,emptyTableText:h,rows:y,verticalAlign:j}=d,N=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.X,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&b(e,n,t[n]);if(k)for(var n of k(t))g.call(t,n)&&b(e,n,t[n]);return e})({fullWidth:!0},N),u(n,p({ref:t}))),E&&r.createElement(o.r,{srOnly:!0},E),r.createElement(s.n,null,r.createElement(m.H,null,v.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.B,null,0===y.length&&h&&r.createElement(m.H,null,r.createElement(i.n,{colSpan:v.length},h)),y.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":v[t],verticalAlign:j},e))))))))}));E.displayName="DataTable"}}]);