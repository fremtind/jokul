"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5638],{22548:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Dette er første oppdateringspost fra Jøkul. Planen er at det kommer flere av disse med jevne mellomrom, så blir det forhåpentligvis lettere å følge med på hva som skjer med Jøkul."),"\n",r.createElement(t.h2,null,"📰 Oppdateringer"),"\n",r.createElement(t.p,null,"Før fellesferien tok oss ut til Prekestolen, Loen og Lofoten med bil, hadde vi en sprint med fokus på portalen. Målet var å få på plass dokumentasjon av alle nøkkelverdier som ikke var dokumentert tidligere. Bildebruk, bevegelse, spacing og typografi har fått både bruk og variabler dokumentert. Både for utviklere og designere."),"\n",r.createElement(t.p,null,"For pakkene våre har det ikke skjedd de største endringene, men det er gjort en del forbedringer og optimaliseringer. Eneste breaking change iløpet av siste periode er at det er lagt til forwardRef for checkbox, gitt at man ikke har gjort noe spesielt med checkbox komponenten, så innebærer det ingen endring. Men det betyr at man nå kan sette referanse på checkbox, og det vil peke på det riktige input-elementet."),"\n",r.createElement(t.h2,null,"🌱 Releaser"),"\n",r.createElement(t.h3,null,"Pakker"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1140"},"💡 Mindre pakkestørrelser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Simen gjorde et grundig stykke arbeid graving i byggingen av både portal og pakkene våre. Ved å optimalisere byggprosessen ble pakkestørrelsen redusert med 15-40%. Også portalens bundle ble redusert med ca 30%."),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1103"},"✏️ Støtte for ref i checkbox"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Er breaking change fordi checkbox komponenten nå blir pakket inn i en forwardRef, for de fleste vil det fortsatt virke som normalt."),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1093"},"✏️ Farger som utility klasser"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Både spacing og farger er nå tilgjengelige som utilityklasser, så de enkleste stilene kan nå oppnåes uten å måtte skrive egen css."),"\n"),"\n"),"\n"),"\n",r.createElement(t.h3,null,"Portalen"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1078"},"🧪 Itegrasjonstester i portalen")),"\n",r.createElement(t.li,null,"📚 Dokumentasjon av farger"),"\n",r.createElement(t.li,null,"📚 Dokumentasjon av spacing"),"\n",r.createElement(t.li,null,"📚 Dokumentasjon av typografi"),"\n",r.createElement(t.li,null,"📚 Ny bildebruk side"),"\n",r.createElement(t.li,null,"💅 Responsiv meny"),"\n",r.createElement(t.li,null,"💅 Sideoverganger og animasjoner"),"\n"),"\n",r.createElement(t.h2,null,"🔮 Kommende"),"\n",r.createElement(t.p,null,"I perioden fremover ligger det enkelte forbedringer i pakkene, oppdatering av design til nyeste stilen og bugfixer. Det jobbes også med en mer robust hosting løsning via Vercel som feks også vil vi preview av PR, som vil gjøre det mye enklere for designere å verifisere endringer i kode."),"\n",r.createElement(t.h3,null,"Pakker"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1139"},"🦽 Hook for reduced motion"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Løser bug ved reduced motion for komponenter som bruker useAnimation hooken, og tilgjengeliggjør reduced motion OS-settingen for oss i js-kontekst. Brukes feks til å fjerne paralax effekt og andre større animasjoner for brukere som ikke ønsker det. Blir viktig for kundefacing applikasjoner som benytter seg av animasjoner og fortsatt bevare god brukeropplevelse for alle brukere."),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1153"},"⚰️ Fjerne divider line"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Divider line fant seg aldri plass i Figma, så dermed ble den aldri ordentlig tatt i bruk heller. Så for nå blir den fjernet."),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1154"},"💅 Oppdatert design Accordion"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Accordion med tidlig utgave av designet får et løft og darkmode støtte"),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues/1167"},"💅 Oppdatert design på lenker"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Lenker med tidlig utgave av designet får et løft og darkmode støtte"),"\n"),"\n"),"\n"),"\n",r.createElement(t.h3,null,"Portalen"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1142"},"Grupering i sidemenyen"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Nå som både utilityklasser, hooks og valideringsregler dokumenteres under komponentersiden, så begynner det bli vanskelig å holde oversikten."),"\n"),"\n"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(72285),s=n(22756),c=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},i,{versions:l.versions})),r.createElement(c.w5,i),a,s&&r.createElement(o.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return p}});var l=n(78217),r=n(41994),a=n(87505),i=n(70079);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var l},p=e=>{let{types:t}=e;return i.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},i.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),i.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(s):[];return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&i.createElement(u,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(26372),r=n.n(l),a=n(70079);const i=e=>{let{className:t,density:n,...l}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,...l})}},41994:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(53484),r=n(3438),a=n(84490),i=n(26372),o=n.n(i),s=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:m,...d}=e;const u=(0,r.M)("title"),p=(0,r.M)("content"),{0:k,1:g}=(0,s.useState)(c),[f]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",i,{"jkl-accordion-item--expanded":k})},s.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;g(t),m&&m(e,t)}},n,s.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),s.createElement("div",{id:p,ref:f,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!k},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return l.createElement(r.i,{fullWidth:!0,...g,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(m.S,null,l.createElement(o.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);