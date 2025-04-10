"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[905],{39196:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var r=n(47160),a=n(70079);function l(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Det nærmer seg jul, og da går vi mot en litt roligere periode igjen. Det er flere prosjekter som er på vei ut eller allerede har kommet seg ut i Jøkuldrakt, både på web og native. Der har vi litt arbeid som står foran oss, for å synce inn native gjengen i Jøkul. Vi har noen ideer der, så vi håper vi får satt i gang med slik at bredden til Jøkul blir enda større. 2021 nærmer seg med stormskritt, og med det en liten innstramming i reglene rundt Universell Utforming på internett, dette har lenge vært fokus for oss, men litt ekstra fokus har det fått og portalen har nå fått på plass en utvikler og testguide for ",a.createElement(t.a,{href:"/preview/docs/farger/universell-utforming"},"Universell Utforming"),". Stor applaus til ",a.createElement(t.a,{href:"https://github.com/joms"},"@joms"),", ",a.createElement(t.a,{href:"https://github.com/murstam"},"@Murstam")," og ",a.createElement(t.a,{href:"https://github.com/vegardsoerlie"},"@vegardsoerlie")," for dette arbeidet 👏👏! På komponentsiden, så er grønnfargen i light mode endret, og layout skalaen er blitt mer komplett."),"\n",a.createElement(t.h2,null,"🌱 Releaser"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"💅 Nye ikoner for ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1649"},"chekclist og crosslist")),"\n",a.createElement(t.li,null,"🔥 ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1628"},"React 17 støtte"),", React 16.8 eller nyere støttes også, ingen konkrete planer om å avslutte den støtte med det første"),"\n",a.createElement(t.li,null,"✨ Ny ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1614"},"grønnfarge i light-mode")),"\n",a.createElement(t.li,null,"Layout spacing skalaen har fått en ny verdi i bunn av ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1615"},"skalaen")),"\n"),"\n",a.createElement(t.h2,null,"📰 Oppdateringer"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Egen seksjon for ",a.createElement(t.a,{href:"/preview/docs/farger/universell-utforming"},"Universell Utforming"),"!"),"\n",a.createElement(t.li,null,"Kom i gang med Jøkul ",a.createElement(t.a,{href:"/preview/docs/farger/guider/utvikling"},"for utviklere")," er skrevet om, med ny seksjon for ",a.createElement(t.a,{href:"/preview/docs/farger/kom-i-gang/bygg"},"Ta i bruk Jøkul")),"\n"),"\n",a.createElement(t.h2,null,"🎈 Design"),"\n",a.createElement(t.p,null,"På designsiden jobbes det med å lage gode patterns og organismer i form at headere, footere, et malsystem (gridsystem) for designerne, hero-animasjoner for toppbilder og hvordan disse forholder seg til cards med microanimasjoner. Dette er nyttig arbeid der det er viktig med godt samarbeid på tvers av produktteamene og designsystemets kjerneteam slik at vi kan lage gode mønstre som skaper et konsistent Fremtind-uttrykk for alle våre løsninger."),"\n",a.createElement(t.p,null,'Videre har Figma kommet med en rekke forbedringer som gjør at vi kan oppdatere komponentbiblioteket til å bli enda bedre for designerne. Dette handler om en forbedret Autolayout-funksjon som gjør det lettere å stable elementer i mer responsive komponenter og lage fleksible organismer basert på eksisterende komponenter.\nVi har også fått "Variants" - en elegant måte å gruppere komponenter med alle states og varianter. Vi kan nå lage ett asset som i praksis inneholder, hover-, fokusstate og samtidig toggle mellom dark/light mode, normal eller kompakt osv. Når vi kommer i gang med disse oppdateringene kan det bli en del breaking changes i Figmabiblioteket men samtidig blir verktøykassa enda bedre å bruke.'))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(72285),s=n(22756),m=n(95573),c=n(1634);const d=e=>{let{pageContext:t}=e;return a.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:i}=n.page,{types:s}=r;return a.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(m.M1,Object.assign({},i,{versions:r.versions})),a.createElement(m.w5,i),l,s&&a.createElement(o.l,{types:s}))};function p(e){return a.createElement(u,e,a.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var r=n(78217),a=n(41994),l=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,i=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},g=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],l=n.props?Object.values(n.props).filter(m):[],s=(e=>{var t,n,r,a,l,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(p,{props:r}),l.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),a=n.n(r),l=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),a=n.n(r),l=n(70079);const i=e=>{let{className:t,density:n,id:r,...i}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:r,...i})}},41994:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(53484),a=n(1386),l=n(26372),i=n.n(l),o=n(70079);const s=e=>{let{children:t,title:n,className:l,startExpanded:s=!1,onClick:m,id:c,...d}=e;const{0:u,1:p}=(0,o.useState)(s),{0:g}=(0,o.useState)((()=>s)),{detailsRef:k,summaryRef:f,contentRef:v,onSummaryClick:h}=(0,a.E)({onOpenChange:(e,t)=>{p(e),m&&m(t,e)},isExpanded:g});return o.createElement("details",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",l),ref:k,id:c},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:f},n,o.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v},o.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var r=n(70079),a=n(41699),l=n(65174),i=n(6914),o=n(82546),s=n(39126),m=n(66169),c=n(94509);const d=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return r.createElement(a.i,{fullWidth:!0,...k,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(c.S,null,d.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===p.length&&u&&r.createElement(c.S,null,r.createElement(o.p,{colSpan:d.length},u)),p.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":d[t],verticalAlign:g},e))))))))}));d.displayName="DataTable"}}]);