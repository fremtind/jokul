"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2652],{35326:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return k}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",h3:"h3",em:"em",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Ingress:n,InfoMessage:a}=t;return a||s("InfoMessage",!0),n||s("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Responsivt design"),"\n",l.createElement(n,null,l.createElement(t.p,null,"Å designe og programmere for web betyr blant annet å ta høyde for at siden din kan bli vist på alle mulige\nskjermbredder. Det holder ikke å bare ta høyde for at et design fungerer på en mobil, en tablet, og en desktop i\nfullskjerm – det må også fungere på breddene ",l.createElement("em",null,"mellom")," disse størrelsene.")),"\n",l.createElement(t.h2,null,"For designere"),"\n",l.createElement(t.p,null,"I praksis betyr det for deg som designer å bruke ",l.createElement(t.a,{href:"https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-Auto-Layout"},"Auto layout")," og se hvordan designet ditt tåler å bli skvist sammen og strukket ut. Blir det så trangt at teksten er vanskelig å lese, eller ser det rart ut når en komponent blir veldig bred? Da må du enten justere designet litt på den skjermstørrelsen, eller tenke helt nytt."),"\n",l.createElement(t.p,null,'Ofte er det små justeringer som trengs – kanskje bare at vi bytter til "neste" layout litt tidligere for akkurat den delen av siden. Alliér deg gjerne med en utvikler om du trenger noen å sparre med.'),"\n",l.createElement(t.h2,null,"For utviklere"),"\n",l.createElement(t.p,null,"Som utvikler betyr det at du må være forberedt på å teste det du programmerer på ulike skjermstørrelser. Det kan være så enkelt som at du drar nettleservinduet så det krymper og vokser mellom en liten og stor bredde. Test gjerne også med zoomfunksjonen i nettleseren. Ved å zoome ut kan du få inntrykk av hvordan siden ser ut på skjermer med høyere oppløsning enn din egen."),"\n",l.createElement(t.p,null,"Se etter layoutproblemer. Om du finner noen, snakk med designer, og kom gjerne med løsningsforslag. Avhengig av løsningen kan det hende du må kode inn et eget media query som løser ditt spesifike problem på skjermbredden det gjelder."),"\n",l.createElement(t.h2,null,"Breakpoints vi bruker i Jøkul"),"\n",l.createElement("div",{className:"jkl-portal-paragraph"},l.createElement(a,{role:"none presentation",fullWidth:!0,title:"Du står fritt til å lage egne breakpoints"},l.createElement(t.p,null,"Dette er hva vi bruker ",l.createElement("i",null,"innad i Jøkul"),". Det vil si at typografi og spacing i komponenter vil forandre seg\nved disse breakpointene. Du kan fortsatt bruke akkurat de breakpointene du trenger i din egen app, sånn at\nlayouten din fungerer godt på alle skjermstørrelser."))),"\n",l.createElement("div",{className:"jkl-portal-paragraph mt-40"},l.createElement("dl",null,l.createElement("dt",null,"Medium"),l.createElement("dd",null,l.createElement("code",null,"680px")),l.createElement("dt",null,"Large"),l.createElement("dd",null,l.createElement("code",null,"1200px")),l.createElement("dt",null,"XL"),l.createElement("dd",null,l.createElement("code",null,"1600px")))),"\n",l.createElement(t.h3,null,"Oppfører en komponent seg rart?"),"\n",l.createElement(t.p,null,"Om du synes en komponent fungerer dårlig på en viss skjermstørrelse er det supert om du sier i fra. ",l.createElement(t.a,{href:"/preview/fix-expandable-hover/guider/hvordan-endre-jokul"},"Sett i gang en diskusjon"),", gjerne med skjermbilder og hvilke skjermstørrelser det gjelder."),"\n",l.createElement(t.h2,null,"Mobil først?"),"\n",l.createElement(t.p,null,"Det kommer an på."),"\n",l.createElement(t.p,null,"Et internsystem for et fåtall superbrukere har ikke de samme forutsetningene og behovene som en side privatkundene våre møter når de er på farten. Du kjenner best dine brukere, deres behov, når og hvordan de bruker løsningen din."),"\n",l.createElement(t.p,null,"Hvis målgruppen er privatkunder skal vi typisk alltid ha en godt fungerende løsning på mobil. Da kan det være verdifult å starte designet på den flaten som kan være mest utfordrende. Det er ofte lettere å legge til ting enn å trekke dem fra."),"\n",l.createElement(t.p,null,"Om det du designer er et arbeidsverktøy som ni av ti ganger brukes fullskjerm på en desktop gir det ikke nødvendigvis mening å ",l.createElement(t.em,null,"starte")," på små flater. Det er verdt å huske på at, selv om brukeren i teorien ",l.createElement(t.em,null,"kan")," bruke hele skjermen, er det ikke gitt at vi har hele skjermen som boltreplass, selv på desktop. Hvor ofte sitter du for eksempel med en 50/50 splitt på din egen skjerm? Det er derfor fint at løsningen i det minste ",l.createElement(t.em,null,"kan")," brukes på mindre flater."),"\n",l.createElement(t.h2,null,"Kjenn brukerne dine"),"\n",l.createElement(t.p,null,"Teamet ditt har kanskje statistikk på blant annet vanlige skjermstørrelser hos brukerne deres?"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://gs.statcounter.com/screen-resolution-stats/all/norway"},"GlobalStats")," har noe statistikk, men den kan være av variabel kvalitet. Foretrekk å bruke egen statistikk fra løsningen deres, eller å hente statistikk fra liknende løsninger i Fremtind. Kontakt Jøkul-teamet eller spør på Support Designsystem om du har spørsmål."),"\n",l.createElement(t.h2,null,"Viktig å huske"),"\n",l.createElement(t.h3,null,"Størrelse er viktig for tilgjengelighet"),"\n",l.createElement(t.p,null,"Det er viktig å ha god nok plass på interaktive elementer, som knapper. Apple anbefaler minimum 44 ganger 44 pixler som ",l.createElement("i",{lang:"en"},"touch target"),"."),"\n",l.createElement(t.h3,null,"Responsive tabeller"),"\n",l.createElement(t.p,null,"Tabeller er blant de vanskeligste å ha på mobilstørrelser. Det er flere måter å løse dette problemet på, inkludert å la tabellen falle ned til en liste i mobilvisning, spesielt hvis du har store kompliserte langbord med mye data. Se ",l.createElement(t.a,{href:"/preview/fix-expandable-hover/komponenter/table"},"Table")," for noen eksempler."),"\n",l.createElement(t.h3,null,"Responsive bilder"),"\n",l.createElement(t.p,null,"Skjermer med høy oppløsning, som Retina-skjermer, kan trenge bilder med høyere punkttetthet enn 72 dpi for å se bra ut."),"\n",l.createElement(t.p,null,"Det er viktig å huske på at et bilde med høy oppløsning og punkttetthet har en betydelig datamengde og gir en dårlig opplevelse på mobil, som kan ha en begrenset båndbredde. Det er flere måter å løse dette på, avhengig av verktøyene som brukes i teamet. Noen verktøy kan ta et høyoppløst bilde og lage responsive bilder for ulike skjermstørrelser og punkttetthet. Andre ganger må vi lage disse bildene selv, og sørge for at rett bilde brukes på rett skjerm. Se ",l.createElement(t.a,{href:"/preview/fix-expandable-hover/komponenter/image"},"Image")," for et mulig hjelpeverktøy for utviklere."),"\n",l.createElement(t.p,null,"Generelt sett skal alt som ",l.createElement("em",null,"kan")," være vektorgrafikk være i SVG-format og ikke som et bilde."),"\n",l.createElement(t.h2,null,"Les mer"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://blog.prototypr.io/a-pragmatic-guide-to-designing-and-building-responsive-web-applications-ff625dd2f206"},"Responsivt design")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://medium.com/@zacdicko/size-matters-accessibility-and-touch-targets-56e942adc0cc"},"Størrelser og touch")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://medium.com/appnroll-publication/5-practical-solutions-to-make-responsive-data-tables-ff031c48b122"},"Responsive datatabeller")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://www.dbswebsite.com/blog/retina-displays-good-for-web-design/"},"Design for retina-skjermer")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"},"Responsive bilder")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};function s(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var o=n(72285),d=n(22756),m=n(95573),c=n(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(d.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:s}=r;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},i,{versions:r.versions})),l.createElement(m.w5,i),a,s&&l.createElement(o.l,{types:s}))};function k(e){return l.createElement(u,e,l.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(58820),l=n(63571),a=n(87505),i=n(70079),s=n(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},c=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,n=t.parentElement;c(t,n)},u=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&c(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(d):[],o=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),r.length>0&&i.createElement(u,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),s=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(35250),l=n(26372),a=n.n(l);const i=e=>{let{className:t,density:n,id:l,...i}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return d}});var r=n(35250),l=n(68998),a=n(1386),i=n(26372),s=n.n(i),o=n(70079);const d=e=>{let{children:t,title:n,className:i,startExpanded:d=!1,onClick:m,id:c,...p}=e;const[u,k]=(0,o.useState)(d),[g]=(0,o.useState)((()=>d)),{detailsRef:v,summaryRef:f,contentRef:h,onSummaryClick:b}=(0,a.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:g});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",i),ref:v,id:c,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:f,children:[n,(0,r.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),s=n(82546),o=n(39126),d=n(66169),m=n(94509);const c=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:c,emptyTableText:p,rows:u,verticalAlign:k,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(o.s,null,r.createElement(m.S,null,c.map(((e,t)=>r.createElement(d.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===u.length&&p&&r.createElement(m.S,null,r.createElement(s.p,{colSpan:c.length},p)),u.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":c[t],verticalAlign:k},e))))))))}));c.displayName="DataTable"}}]);