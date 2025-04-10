"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6511],{99096:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return k},Head:function(){return m},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",img:"img",h2:"h2",em:"em"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,l.createElement(t.img,{src:"/assets/blog/ikon_illustrasjon.png",alt:"Illustrasjon av ikon justert i forhold til fonthøyde, linjehøyde og baseline"})),"\n",l.createElement(t.h2,null,"Bakgrunn"),"\n",l.createElement(t.p,null,"Ikonbiblioteket i Jøkul har frem til nå bestått av desktop- og kompaktversjoner av ikonene og hatt varierende størrelser på innrammingen. Dette kan gi utfordringer mht plassering hvis man ønsker å bytte ut en instance av et ikon i Figma eller i kode."),"\n",l.createElement(t.h2,null,"Løsning"),"\n",l.createElement(t.p,null,"For å lage et enklere og mer fleksibelt prinsipp har vi valgt å basere ikonene på fontens em-size. Det betyr at alle ikonene er tegnet innenfor en ramme som matcher fontens høyde mens bredden tilpasses ikon- bredden. Slik følger vi samme prinsipp som for tegn med ulik bredde i et skriftsnitt. Ikonets baseline (grunnlinje) følger fontens baseline og ikonet kan i praksis skaleres opp relatert til fontens størrelse. På denne måten trenger vi ikke lenger én definert ikonstørrelse for desktop og en annen for kompakt fordi det samme ikonet følger fontstørrelsen."),"\n",l.createElement(t.p,null,l.createElement(t.em,null,"(Her kan du enten stoppe å lese eller fortsette hvis du ønsker nerdete detaljer...)")),"\n",l.createElement(t.h2,null,"Tykkelse"),"\n",l.createElement(t.p,null,"Ikonene er tegnet slik at de følger tykkelsen til fonten Fremtind Grotesk i størst mulig grad. I motsetning til fonten har ikonene samme tykkelse på horisontale og vertikale streker og er bygget opp med en strektykkelse tilsvarende Fremtind Grotesk satt i 20 px (desktop body size).\n\u2028Enkelte ikoner slik som Checkmark, Kryss og Pluss er i tillegg tegnet i bold og minuskel-versjoner. Dette for at de skal kunne fremstå som ekstra tydelige i sammenligningstabeller og gi større spillerom."),"\n",l.createElement(t.p,null,"For vanlige ikoner er strektykkelsen satt til 1,2 px mens den for bold versjoner er satt til 2,0 px."),"\n",l.createElement(t.h2,null,"Men hvorfor …?"),"\n",l.createElement(t.p,null,"Strektykkelsene kunne variert kalligrafisk slik at de matchet fontens vekt både horisontalt og vertikalt og totalt sett vært justert slik at de optisk fremsto som like. For å ha et forvaltbart og enkelt system har vi besluttet å bruke de eksakte verdiene ovenfor.\nMed tanke på optisk justering har bold versjonene kun fått en tykkere strek selv om konsekvensen er at ikonet bygger lavere i forhold til optisk grunnlinje enn regular versjon gjør. Gevinsten er at ikonet får større muligheter for dynamisk animert strektykkelse."),"\n",l.createElement(t.h2,null,"Skalering i Figma"),"\n",l.createElement(t.p,null,"Hvis et ikon skaleres opp for å matche en gitt fontstørrelse er det viktig at du tar utgangspunkt i fontsize og ikke lineheight. Ikonet skaleres proposjonalt i høyde/bredderetning slik at det ikke blir strukket (hold inne shift-tasten). Merk at ved skalering i Figma må du bruke scale-funksjonen (keyboard-K) slik at også strektykkelsen skaleres sammen med størrelsen."),"\n",l.createElement(t.h2,null,"Og så videre ..."),"\n",l.createElement(t.p,null,"Prinsippene ovenfor er viktige å ta hensyn til ved design av nye ikoner slik at vi får et konsistent og funksjonelt ikonbibliotek: Design ikonet som en font med optiske justeringer i forhold til baseline og sett i forhold til fontens høyder på versaler og minuskler men bruk de definerte verdiene for strektykkelser."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},s=n(72285),o=n(22756),c=n(95573),d=n(1634);const m=e=>{let{pageContext:t}=e;return l.createElement(o.p,{title:t.title})},k=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:i}=n.page,{types:o}=r;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},i,{versions:r.versions})),l.createElement(c.w5,i),a,o&&l.createElement(s.l,{types:o}))};function p(e){return l.createElement(k,e,l.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(58820),l=n(63571),a=n(87505),i=n(70079),s=n(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,i=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},k=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:k,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},u=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(d):[],a=n.props?Object.values(n.props).filter(c):[],o=(e=>{var t,n,r,l,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),r.length>0&&i.createElement(p,{props:r}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(26372),l=n.n(r),a=n(49597),i=n(70079),s=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(35250),l=n(26372),a=n.n(l);const i=e=>{let{className:t,density:n,id:l,...i}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),l=n(68998),a=n(1386),i=n(26372),s=n.n(i),o=n(70079);const c=e=>{let{children:t,title:n,className:i,startExpanded:c=!1,onClick:d,id:m,...k}=e;const[p,u]=(0,o.useState)(c),[g]=(0,o.useState)((()=>c)),{detailsRef:f,summaryRef:v,contentRef:h,onSummaryClick:b}=(0,a.E)({onOpenChange:(e,t)=>{u(e),d&&d(t,e)},isExpanded:g});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...k,className:s()("jkl-accordion-item",i),ref:f,id:m,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:v,children:[n,(0,r.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(41699),a=n(65174),i=n(6914),s=n(82546),o=n(39126),c=n(66169),d=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:k,rows:p,verticalAlign:u,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(o.s,null,r.createElement(d.S,null,m.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&k&&r.createElement(d.S,null,r.createElement(s.p,{colSpan:m.length},k)),p.map(((e,t)=>r.createElement(d.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":m[t],verticalAlign:u},e))))))))}));m.displayName="DataTable"}}]);