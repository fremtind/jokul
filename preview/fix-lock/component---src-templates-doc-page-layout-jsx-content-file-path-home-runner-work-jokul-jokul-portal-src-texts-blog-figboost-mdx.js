"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[3416],{67434:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return m},default:function(){return p}});var r=n(47160),a=n(70079);function l(e){const t=Object.assign({p:"p",h2:"h2",em:"em",strong:"strong",img:"img",a:"a"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"For dere som ikke var i dagens designsystemforum, så lanserte vi vårt splitter nye Figma bibliotek og gikk gjennom de største punktene for hva som er nytt av funksjoner, muligheter og prinsipper. Det vi glemte å nevne var jo ironisk nok noe av det viktigste; nemlig hvordan man tar det i bruk."),"\n",a.createElement(t.h2,null,"Aktivering og bruk av det nye designsystemet"),"\n",a.createElement(t.p,null,"Det nye designsystemet er lagret som et eget Figma-team ",a.createElement(t.em,null,"(for øyeblikket døpt ",a.createElement(t.strong,null,"Jøkul Next"),")"),". Trykk på 'Join' for å få tilgang til biblioteksfilene. Merk at designsystemet er nå delt opp og kategorisert etter funksjon, og du kan selv slå av og på det du ønsker å ha tilgjengelig i søk etter behov. Vi anbefaler alle å ha påslått Core, Assets og Components for alle filer."),"\n",a.createElement(t.p,null,a.createElement(t.img,{src:"/assets/blog/figboost.png",alt:"Bilde som viser to utsnitt av Figma. Til venstre vises en liste med bibliotekene slik de ser ut fra en Figma-fil der de skal brukes. Til høyre vises stegene for å finne og bli med i Jøkul Next-teamet. En rød ring er sirklet rundt Fremtind-organisasjonen, og en pil peker på Jøkul Next sin Join-knapp."})),"\n",a.createElement(t.h2,null,"Eksisterende skisser blir bevart"),"\n",a.createElement(t.p,null,"Du trenger ikke bekymre deg for om filer og skisser du har fra før blir automatisk påvirket eller ødelagt. Det nye designsystemet overskriver ikke dagens bibliotek eller komponenter knyttet til dette. Vi forsker på tips og triks for å gjøre migrering av store filer enkelt. ",a.createElement(t.a,{href:"https://jokul.fremtind.no/kom-i-gang/hjelp"},"Kontakt med Jøkul-teamet")," om du ønsker sparring eller assistanse for å konvertere store filer du måtte ha liggende."),"\n",a.createElement(t.h2,null,'"Nye" Compact-mode er på vei til kodebasen'),"\n",a.createElement(t.p,null,"I det nye designsystemet har vi overhalet hvordan vi deler opp komponenter, og Compact er nå støttet alle steder hvor det er hensiktsmessig. Dette er ikke speilet 1:1 i kode enda, men vi jobber på spreng for å sørge for at dette matcher i alle relevante fagsystemer, pakker og dokumentasjon."),"\n",a.createElement(t.h2,null,"Minimum Lovable Product"),"\n",a.createElement(t.p,null,"Siden dette er en tidlig første versjon, vil du nok oppleve litt knirk og knark her og der, siden vi har beveget oss raskt for å få dette ut. For å kunne oppdage bugs, forbedre og videreutvikle systemet er det viktig at alle som bruker Figma tester det ut skikkelig og gir oss tilbakemelding på opplevelsen."),"\n",a.createElement(t.p,null,"Tilbakemelding kan sendes direkte til teamet, eller ",a.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions/2991"},"deles i diskusjonen på GitHub"),"."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(72285),s=n(22756),c=n(95573),u=n(1634);const m=e=>{let{pageContext:t}=e;return a.createElement(s.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:i}=n.page,{types:s}=r;return a.createElement(u.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(c.M1,Object.assign({},i,{versions:r.versions})),a.createElement(c.w5,i),l,s&&a.createElement(o.l,{types:s}))};function p(e){return a.createElement(d,e,a.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(78217),a=n(76802),l=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,i=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",i)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(u):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,a,l,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),r.length>0&&i.createElement(p,{props:r}),l.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),a=n.n(r),l=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(26372),a=n.n(r),l=n(70079);const i=e=>{let{className:t,density:n,...r}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return s}});var r=n(53484),a=n(26372),l=n.n(a),i=n(70079);const o=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,i.useRef)(null),a=(0,i.useRef)(null),l=(0,i.useRef)(null),o=(0,i.useRef)(null),{0:s,1:c}=(0,i.useState)(!1),{0:u,1:m}=(0,i.useState)(!1);(0,i.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const d=e=>{r.current&&a.current&&(r.current.open=e,o.current=null,c(!1),m(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:a,contentRef:l,onSummaryClick:e=>{e.preventDefault(),r.current&&a.current&&(r.current.style.overflow="hidden",s||!r.current.open?(e=>{r.current&&a.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&a.current&&l.current){m(!0),t(!0,e);const n=r.current.offsetHeight,i=a.current.offsetHeight+l.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(i,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>d(!0),o.current.oncancel=()=>m(!1))}})))})(e):(u||r.current.open)&&(e=>{if(r.current&&a.current){c(!0),t(!1,e);const n=r.current.offsetHeight,l=a.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(l,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>d(!1),o.current.oncancel=()=>c(!1))}})(e))}}},s=e=>{let{children:t,title:n,className:a,startExpanded:s=!1,onClick:c,...u}=e;const{0:m,1:d}=(0,i.useState)(s),{detailsRef:p,summaryRef:k,contentRef:g,onSummaryClick:f}=o({onOpenChange:(e,t)=>{d(e),c&&c(t,e)},startExpanded:s});return i.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:l()("jkl-accordion-item",a),ref:p},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:k},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!m,bold:m})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),a=n(41699),l=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),u=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:d,rows:p,verticalAlign:k,...g}=e;return r.createElement(a.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(i.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(u.S,null,m.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===p.length&&d&&r.createElement(u.S,null,r.createElement(o.p,{colSpan:m.length},d)),p.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);