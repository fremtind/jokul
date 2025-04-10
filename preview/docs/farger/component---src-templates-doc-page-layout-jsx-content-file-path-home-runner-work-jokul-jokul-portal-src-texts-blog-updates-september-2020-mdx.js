"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7789],{41966:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var l=n(47160),r=n(70079);function a(e){const t=Object.assign({p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",h3:"h3"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Ny måned, ny oppdateringspost. De fleste er tilbake fra ferie og maskineriet fyrer på alle sylindere. Ergo har det skjedd en hel del. Heldigvis, ",r.createElement(t.strong,null,"ingen breaking changes")," eller noe som krever noe annet enn en oppdatering av pakkene. Ellers begynner innrammingsballen å rulle, det betyr at flere team kobler seg på Jøkul, der kommer nok fokuset til å ligge fremover, få disse teamene til å føle seg hjemme og følge opp innrammingsbehovene."),"\n",r.createElement(t.h2,null,"📰 Oppdateringer"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.strong,null,"Nytt domene!!")," ",r.createElement(t.a,{href:"https://jokul.fremtind.no/"},"https://jokul.fremtind.no/")," er det nye hjemmet til Jøkul. Vi er jo veldig glade i github, men vi hører jo hjemme hos oss selv. Det blir også lettere for de utenfor utvikling å følge med og ta ibruk Jøkul også."),"\n",r.createElement(t.li,null,"Vi har ventet på en del fikser fra core-components, men selvom vi har lagd PRer og de har ligget der en stund, så har det ikke vært fremdrift. En midlertidig løsning på dette var å bruke ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1214"},"patch-package")," til å legge våre fikser inn, uten å måtte forke eller andre drastiske tiltak. Kjerneteamet kommer til å fortsette å følge opp core-components situasjonen."),"\n",r.createElement(t.li,null,"Automatiske visuelle regresjonstester er på vei inn i de fleste pakker. Vi ønsker å øke tilliten til at endringer i Jøkul gjør det de skal, og ved å få på plass visuelle regresjonstester håper vi å gjøre akkurat det. Per nå er det Accordion, Button og Checkbox som har disse testene, det vil rulles ut på flere av komponenten og etterhvert settes som krav for å få lov til å merge. Vi har allerede sett en markant forbedring i stabiliteten til Cypress testene, så vi er nok ikke veldig langt unna å sette det som krav."),"\n",r.createElement(t.li,null,"Det er nå støtte for universell dark mode i alle* komponentene. Det vil si at du slipper å bruke ",r.createElement(t.code,null,"inverted"),"-propen på komponentene for å få dark mode, med mindre du trenger å støtte IE11. Det fungerer slik at alle komponenter automatisk bytter over til dark mode dersom de er inne i et element med attributten ",r.createElement(t.code,null,'data-theme="dark"'),". *",r.createElement(t.code,null,"Card"),", ",r.createElement(t.code,null,"ProgressBar")," og ",r.createElement(t.code,null,"ToggleSwitch")," har foreløpig ikke denne funksjonaliteten, i påvente av komplett redesign."),"\n"),"\n",r.createElement(t.h2,null,"🌱 Releaser"),"\n",r.createElement(t.h3,null,"Pakker"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1191"},"✏️ Ikoner"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Samle alle ikonene og eksponer i en pakke"),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1154"},"✏️ Accordion"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Oppdatert design"),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1208"},"✏️ Linker"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Oppdatert design"),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1201"},"💡 Søkbar select"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Ny komponent"),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1216"},"💡 NavLink"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Ny komponent for navigeringslenker"),"\n"),"\n"),"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1240"},"💡 Autosuggest"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Ny komponent for tekstfelt med forslag"),"\n"),"\n"),"\n"),"\n",r.createElement(t.h3,null,"Portalen"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"💅 ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1142"},"Grupering i sidemenyen"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Nå som både utilityklasser, hooks og valideringsregler dokumenteres under komponentersiden, så begynner det bli vanskelig å holde oversikten."),"\n"),"\n"),"\n",r.createElement(t.li,null,"💅 ",r.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1241"},"Mobil støtte"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"Vi har fått med oss alt folk av og til bruker telefonen sin til å gå på internet. Portalens primærfokus er power users på desktop, men vi bryr oss også om de som bruker telefonen sin. Med denne tar vi enda noen skritt mot en god brukeropplevelse på alle flater."),"\n"),"\n"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},o=n(72285),s=n(22756),c=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return r.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:a}=e;const{frontmatter:i}=n.page,{types:s}=l;return r.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},i,{versions:l.versions})),r.createElement(c.w5,i),a,s&&r.createElement(o.l,{types:s}))};function p(e){return r.createElement(u,e,r.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(78217),r=n(41994),a=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:r}=t,a=n>0,i=l-n>r;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,r,a,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),r=n.n(l),a=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(26372),r=n.n(l),a=n(70079);const i=e=>{let{className:t,density:n,id:l,...i}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:l,...i})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var l=n(53484),r=n(1386),a=n(26372),i=n.n(a),o=n(70079);const s=e=>{let{children:t,title:n,className:a,startExpanded:s=!1,onClick:c,id:m,...d}=e;const{0:u,1:p}=(0,o.useState)(s),{0:k}=(0,o.useState)((()=>s)),{detailsRef:g,summaryRef:f,contentRef:E,onSummaryClick:v}=(0,r.E)({onOpenChange:(e,t)=>{p(e),c&&c(t,e)},isExpanded:k});return o.createElement("details",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",a),ref:g,id:m},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:f},n,o.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),r=n(41699),a=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:k,...g}=e;return l.createElement(r.i,{fullWidth:!0,...g,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&u&&l.createElement(m.S,null,l.createElement(o.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);