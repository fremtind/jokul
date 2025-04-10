"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2716],{29955:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return k}});var r=n(64717),a=n(92379);function l(e){const t=Object.assign({p:"p",a:"a",strong:"strong",pre:"pre",code:"code"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Operativsystemer og nettleserstandarder sier at det kun er linker som skal ha en egen musepeker, men likevel har\nnormen på internett blitt at alle klikkbare elemenenter har det. Hvordan angriper man en sånn problemstilling for å\nta et konsekvent valg?")),"\n",a.createElement(t.p,null,"Om du trykker rundt i operativsystemet på datamaskinen din vil du se at når du fører musepekeren over en ting er det veldig sjelden du får en egen musepeker. Dette er stort sett forbeholdt linker, og sånn har det vært ment helt siden vi først så den spesielle pekeren i ",a.createElement(t.a,{href:"https://adamsilver.io/blog/buttons-shouldnt-have-a-hand-cursor-part-2/"},"Apple sitt HyperCard i 1987"),"."),"\n",a.createElement(t.p,null,"I designretningslinjenene til de forskjellige operativsystemene kan vi lese at en ",a.createElement(t.a,{href:"https://www.w3.org/TR/CSS21/ui.html#propdef-cursor"},'musepeker av typen "pointer" indikerer en link'),".\nDet samme ser vi på et ustilet HTML-element: Hverken knapper eller select har en egen musepeker ved hover som standard."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"Men om vi ser på web er saken en helt annen.")," Her har knapper, lenker, selects og andre klikkbare elementer mer eller mindre konsekvent en egen peker.\nBåde på større og mindre nettsteder ser man dette, også i designsystemer som ",a.createElement(t.a,{href:"https://www.carbondesignsystem.com/components/select/usage/"},"Carbon")," og ",a.createElement(t.a,{href:"https://mui.com/components/buttons/"},"Material You"),"."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-css"},"button {\n    pointer: cursor;\n}\n")),"\n",a.createElement(t.p,null,'Hvorfor det har blitt sånn er vanskelig å si. Kanskje det kommer fra en misforståelse om at klikkbare elementer skal ha en egen peker, eller kanskje man bare har fortsatt med det fordi "alle andre gjør det". Kanskje har det sneket seg inn gjennom tredjeparts biblioteker.'),"\n",a.createElement(t.p,null,"Selv er dette noe vi har gjort mindre bevisst. Før denne problemstillingen ble tatt opp kunne man se at for eksempel knapper allerede hadde egen musepeker ved hover."),"\n",a.createElement(t.p,null,a.createElement(t.strong,null,"I Jøkul har vi nå tatt en avgjørelse om konsekvent å følge normen:")," Etter å ha snakket om temaet i Designsystemforumet gjorde vi en avstemning på hva designere og utviklere mente om det. Noen mente at vi burde ta et sterkt standpunkt å bidra til å redde internett fra denne utingen. Andre mente at vi burde sikre at klikkbare elementer oppførte seg på en måte som er kjent for brukeren."),"\n",a.createElement(t.p,null,"Med et flertall for konsekvent å bruke egen peker på klikkbare elementer har vi satt brukeren i fokus, og ved å gi en klar forventing om hvordan klikkbare elementer oppfører seg unngår man forvirring."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)};var s=n(75482),i=n(96036),c=n(59001),m=n(65458),d=n(79379);const p=e=>{let{pageContext:t}=e;return a.createElement(i.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:o}=n.page,{types:i}=r;return a.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(m.M1,Object.assign({},o,{versions:r.versions})),t.pathname.includes("komponenter")&&a.createElement(c.c,{variant:"komponent",component:o.title}),a.createElement(m.w5,o),l,i&&a.createElement(s.l,{types:i}))};function k(e){return a.createElement(u,e,a.createElement(o,e))}},75482:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(96845),a=n(41162),l=n(74797),o=n(92379),s=n(25329);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,o=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,a,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(u,{props:r}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:l})))}))))}},59001:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(48467),a=n(58990),l=n(92379),o=n(25329);const s=e=>{let{variant:t,component:n}=e;return l.createElement("section",{className:"suggestion-block"},l.createElement("div",{className:"suggestion-block__content"},l.createElement(a.U,null),l.createElement(o.nv,null,i[t].text)),l.createElement(r.r,{href:i[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},i={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(80324),a=n.n(r),l=n(24157),o=n(92379),s=n(69215);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},96845:function(e,t,n){n.d(t,{U:function(){return i}});var r=n(99767),a=n(651),l=n(80324),o=n.n(l);const s=["className","density","id"],i=e=>{let{className:t,density:n,id:l}=e,i=(0,r.Z)(e,s);return(0,a.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:l},i))}},41162:function(e,t,n){n.d(t,{Q:function(){return d}});var r=n(99767),a=n(651),l=n(42054),o=n(95020),s=n(80324),i=n.n(s),c=n(92379);const m=["children","title","className","startExpanded","onClick","id"],d=e=>{let{children:t,title:n,className:s,startExpanded:d=!1,onClick:p,id:u}=e,k=(0,r.Z)(e,m);const[v,f]=(0,c.useState)(d),[g]=(0,c.useState)((()=>d)),{detailsRef:b,summaryRef:h,contentRef:E,onSummaryClick:j}=(0,o.E)({onOpenChange:(e,t)=>{f(e),p&&p(t,e)},isExpanded:g});return(0,a.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:i()("jkl-accordion-item",s),ref:b,id:u,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:h,children:[n,(0,a.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!v,bold:v})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},58990:function(e,t,n){n.d(t,{U:function(){return m}});var r=n(92379),a=n(55650),l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(a.J,((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))i.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,t,n){n.d(t,{w:function(){return b}});var r=n(92379),a=n(94207),l=n(49309),o=n(36774),s=n(64081),i=n(64483),c=n(42104),m=n(98746),d=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,d=e,{caption:b,columns:h,emptyTableText:E,rows:j,verticalAlign:y}=d,w=((e,t)=>{var n={};for(var r in e)v.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n})(d,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(a.i,(n=((e,t)=>{for(var n in t||(t={}))v.call(t,n)&&g(e,n,t[n]);if(k)for(var n of k(t))f.call(t,n)&&g(e,n,t[n]);return e})({fullWidth:!0},w),p(n,u({ref:t}))),b&&r.createElement(o.R,{srOnly:!0},b),r.createElement(i.s,null,r.createElement(m.S,null,h.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===j.length&&E&&r.createElement(m.S,null,r.createElement(s.p,{colSpan:h.length},E)),j.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":h[t],verticalAlign:y},e))))))))}));b.displayName="DataTable"}}]);