"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3870],{55065:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var l=n(75615),a=n(70079);function r(e){const t=Object.assign({p:"p",code:"code",em:"em",h2:"h2",strong:"strong",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Etter at vi har gjort om spacing-skalaen i Jøkul er det kanskje mange som har en stor refaktoreringsjobb foran seg.\nHer er noen tips som kan gjøre den litt lettere!")),"\n",a.createElement(t.p,null,"Det er et par ting som bør gjøres når du tar i bruk den nye spacing-skalaen. For det første må du bytte om til de nye navnene både der du har brukt hjelpeklasser og der du har brukt variablene i Sass. I tillegg bør du sørge for å importere Sass-variablene fra ",a.createElement(t.code,null,"@fremtind/jkl-core/jkl"),". Med litt smart bruk av regex og søk-og-erstatt kan vi få til dette litt enklere enn man skulle tro."),"\n",a.createElement(t.p,null,"Siden vi har endret navngivingen i skalaen kan man ikke bruke ",a.createElement(t.em,null,"ett")," magisk regex-uttrykk for å refaktorere til de nye verdiene, men ved å ta et par små mellomsteg kan vi i hvert fall redusere det manuelle arbeidet ganske mye."),"\n",a.createElement(t.h2,null,"1. Hjelpeklassene"),"\n",a.createElement(t.p,null,"De gamle hjelpelklassene var på formen ",a.createElement(t.code,null,"jkl-<type>-spacing--<steg>-<posisjon>"),", der ",a.createElement(t.strong,null,"type")," er ",a.createElement(t.code,null,"layout")," eller ",a.createElement(t.code,null,"component"),", ",a.createElement(t.strong,null,"steg")," er steget i den gamle skalaen (f.eks. ",a.createElement(t.code,null,"large"),"), og ",a.createElement(t.strong,null,"posisjon")," er ",a.createElement(t.code,null,"top"),", ",a.createElement(t.code,null,"right"),", ",a.createElement(t.code,null,"bottom"),", ",a.createElement(t.code,null,"left")," eller ",a.createElement(t.code,null,"all"),"."),"\n",a.createElement(t.p,null,"De nye klassene er på formen ",a.createElement(t.code,null,"jkl-spacing-<steg>--<posisjon>"),", der ",a.createElement(t.strong,null,"steg")," er et steg i den nye skalaen ",a.createElement(t.strong,null,"posisjon")," er det samme som i de gamle klassene. Med en regex søk-og-erstatt kan vi gjøre om fra det gamle til det nye formatet, men med steg og type fra den gamle skalaen. Da er vi klare for senere å oversette verdiene fra gammel til ny skala."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Vi søker etter ",a.createElement(t.code,null,"jkl-(component|layout)-spacing--(\\w+)-(\\w+)"),", og får da ut grupper for type, steg og posisjon. Disse kan vi sette inn i det nye formatet, f.eks. slik: ",a.createElement(t.code,null,"jkl-spacing-<$1-$2>--$3"),"."),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"Det finnes også en enda eldre skala med tall, som kun omfatter layout-spacing. Vi gjør om den på tilsvarende måte med søk ",a.createElement(t.code,null,"jkl-spacing--(\\w+)-(\\d)")," og erstatt ",a.createElement(t.code,null,"jkl-spacing-<tall-layout-$2>--$1"),"."),"\n"),"\n"),"\n",a.createElement(t.h2,null,"2. Variablene"),"\n",a.createElement(t.p,null,"Variablene har ingen varianter for posisjon, så her blir regexen hakket enklere! Vi gjør om både den gamle og den eldgamle skalaen her også, til det samme formatet som vi brukte for hjelpeklassene."),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"For den gamle skalaen bruker du søk ",a.createElement(t.code,null,"\\$(component|layout)-spacing--(\\w+)")," og erstatt ",a.createElement(t.code,null,"$spacing-<$1-$2>")),"\n",a.createElement(t.li,null,'For den enda eldre skalaen med tall (som her omfatter "hele" skalaen) bruker du søk ',a.createElement(t.code,null,"$spacing-(\\d)")," og erstatt ",a.createElement(t.code,null,"$spacing-<tall-komplett-$1>")),"\n"),"\n",a.createElement(t.h2,null,"3. Oversettingen"),"\n",a.createElement(t.p,null,"Nå har du fått både hjelpeklasser og variabler over i samme format, så det er på tide å faktisk oversette verdiene. Du må fortsatt gå gjennom verdiene en og en, men siden vi har fikset formatet holder det med ",a.createElement(t.em,null,"erstatt alle")," én gang per skala og verdi!"),"\n",a.createElement(t.p,null,"Ta utgangspunkt i ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/packages/core/MIGRATION.md#variabler-i-spacingskalaen"},"tabellene i migrasjonsguiden"),", og erstatt verdiene på følgende måte (ingen regex nødvendig!):"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"For komponent-/og layoutskala søk ",a.createElement(t.code,null,"<component-xxs>")," og erstatt ",a.createElement(t.code,null,"3xs"),". Gjør tilsvarende med alle steg i tabellene for både layout- og komponentskalaene."),"\n",a.createElement(t.li,null,"For den komplette tallskalaen søk ",a.createElement(t.code,null,"<tall-komplett-1>")," og erstatt ",a.createElement(t.code,null,"3xs"),". Gjør tilsvarende for alle tallene i skalaen."),"\n",a.createElement(t.li,null,"For tall-layoutskalaen søk ",a.createElement(t.code,null,"<tall-layout-1>")," og erstatt ",a.createElement(t.code,null,"l"),". Gjør tilsvarende for resten av tallene i skalaen."),"\n"),"\n",a.createElement(t.p,null,"Gratulerer! Du har nå oversatt alle gamle varianter av spacing med de nyeste! 🎉"),"\n",a.createElement(t.h2,null,"4. Importene"),"\n",a.createElement(t.p,null,"Dette steget er foreløpig strengt tatt valgfritt, men vi anbefaler alle å gå over til den nye importen av Jøkul-variablene i Sass ved hjelp av ",a.createElement(t.code,null,"@use"),". NB! Dette krever at man bruker nyeste versjon av Sass i prosjektet sitt, noe vi også anbefaler at man gjør."),"\n",a.createElement(t.p,null,"Her har vi dessverre ingen magisk regex, siden det vil kunne variere fra prosjekt til prosjekt, men man ønsker å endre importen til ",a.createElement(t.code,null,"@use '~@fremtind/jkl-core/jkl';")," og prefikse alle variablene med ",a.createElement(t.code,null,"jkl"),". Dette lar seg også i stor grad løse med søk-og-erstatt, du vet best hva du må lete etter i ditt prosjekt!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)};var s=n(71111),i=n(16569),c=n(72892),m=n(479);const d=e=>{let{pageContext:t}=e;return a.createElement(i.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:o}=n.page,{types:i}=l;return a.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(c.M1,Object.assign({},o,{versions:l.versions})),a.createElement(c.w5,o),r,i&&a.createElement(s.l,{types:i}))};function p(e){return a.createElement(u,e,a.createElement(o,e))}},71111:function(e,t,n){n.d(t,{l:function(){return p}});var l=n(57986),a=n(80252),r=n(50601),o=n(70079);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,o=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},p=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(c):[],r=n.props?Object.values(n.props).filter(i):[];return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},l.length>0&&o.createElement(u,{props:l}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:r})))}))))}},479:function(e,t,n){n.d(t,{M:function(){return i}});var l=n(26372),a=n.n(l),r=n(79363),o=n(70079),s=n(56024);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},57986:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(26372),a=n.n(l),r=n(70079);const o=e=>{let{className:t,density:n,...l}=e;return r.createElement("div",{"data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...l})}},80252:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(14092),a=n(89292),r=n(26372),o=n.n(r),s=n(70079);const i=e=>{let{expanded:t=!1,className:n}=e;return s.createElement("span",{className:o()("jkl-accordion-item__arrow",n,{"jkl-accordion-item__arrow--expanded":t})},s.createElement("svg",{className:"jkl-accordion-item__arrow-down",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{d:"M11.15 8.51998L10.35 7.73998L6.54999 11.58L6.55 0.699982L5.43 0.699982L5.43 11.56L1.67 7.73998L0.869995 8.51998L6.01 13.54L11.15 8.51998Z",fill:"currentColor"})),s.createElement("svg",{className:"jkl-accordion-item__arrow-up",viewBox:"0 0 12 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.createElement("path",{d:"M0.940002 5.71998L1.74 6.49998L5.54 2.65998V13.54H6.66V2.67998L10.42 6.49998L11.22 5.71998L6.08 0.699982L0.940002 5.71998Z",fill:"currentColor"})))},c=e=>{let{children:t,title:n,className:r,startExpanded:c=!1,onClick:m,...d}=e;const u=(0,l.M)("title"),p=(0,l.M)("content"),{0:g,1:k}=(0,s.useState)(c),[E]=(0,a.v)(g,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",r,{"jkl-accordion-item--expanded":g})},s.createElement("button",{id:u,className:"jkl-accordion-item__title",type:"button","aria-expanded":g,"aria-controls":p,onClick:e=>{const t=!g;k(t),m&&m(e,t)}},n,s.createElement(i,{expanded:g})),s.createElement("div",{id:p,ref:E,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":u,hidden:!g},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},50601:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),a=n(64327),r=n(1807),o=n(11348),s=n(12675),i=n(14687),c=n(61211),m=n(39666);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:g,...k}=e;return l.createElement(a.i,{fullWidth:!0,...k,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(i.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===p.length&&u&&l.createElement(m.S,null,l.createElement(s.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(s.p,{key:t,"data-th":d[t],verticalAlign:g},e))))))))}));d.displayName="DataTable"}}]);