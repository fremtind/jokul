"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7013],{87555:function(e,t,a){a.r(t),a.d(t,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return k}});var n=a(47160),l=a(70079),r=a(14836);function i(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Spacing"),"\n",l.createElement(t.p,null,"Spacing er viktig for å skape system, hierarki og god rytme på tvers av løsninger. Ved å etablere gode standarder\nfor avstand blir det enklere og raskere for designere og utviklere å ta gode valg."),"\n",l.createElement(t.h2,null,"Skala"),"\n",l.createElement(r.r),"\n",l.createElement(t.h2,null,"Dynamisk spacing"),"\n",l.createElement(t.p,null,"På mindre skjermer ønsker man ofte mindre marginer og avstander enn på store skjermer. Vi tilbyr derfor egne variabler og hjelpeklasser for utviklere med vanlige kombinasjoner av spacinger som endrer seg ut fra skjermstørrelse. Du kan lese mer om disse i ",l.createElement(t.a,{href:"/preview/fix--replace-classnames-with-clsx/komponenter/spacing"},"Komponenter-seksjonen")," av siden."),"\n",l.createElement(t.h2,null,"Praktisk"),"\n",l.createElement(t.p,null,'For å gjøre det lettere å jobbe med skalaen i Figma kan du sette verdien av "big nudge" til 8px. Dette gjør du under Hamburgermeny (øverst til venstre) → Preferences → Nudge Amount.'),"\n",l.createElement(t.h2,null,"Hvordan bruke spacingskalaen?"),"\n",l.createElement(t.p,null,"Det er ingen konkret fasit på hvilke verdier i skalaen du skal benytte. Det vil avhenge av løsningen som designes."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)},s=a(72285),o=a(22756),m=a(95573),d=a(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(o.p,{title:t.title})},u=e=>{let{location:t,data:a,pageContext:n,children:r}=e;const{frontmatter:i}=a.page,{types:c}=n;return l.createElement(d.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},i,{versions:n.versions})),l.createElement(m.w5,i),r,c&&l.createElement(s.l,{types:c}))};function k(e){return l.createElement(u,e,l.createElement(c,e))}},14836:function(e,t,a){a.d(t,{r:function(){return c}});var n=a(70079);const l=["2","4","8","12","16","24","32","40","64","104","168"],r=e=>{let{spacing:t}=e;const{0:a,1:l}=(0,n.useState)("N/A"),r="N/A"!==a?parseInt(a)/16:a,i=!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia("(forced-colors: active)").matches;return n.createElement("tr",{className:"jkl-portal-spacing-example-table__row"},n.createElement("td",{"data-header":"Spacing:",className:"jkl-portal-spacing-example-table__data"},n.createElement("div",{className:"jkl-spacing-"+t+"--top",style:{display:"none"},ref:e=>{l(((e,t)=>{var a,n;return e&&(null===(a=window)||void 0===a||null===(n=a.getComputedStyle(e))||void 0===n?void 0:n.getPropertyValue(t))||"N/A"})(e,"margin-top"))}}),n.createElement("div",{"aria-label":t+",  "+a,style:{backgroundColor:i?"CanvasText":"currentColor",width:r+"rem",height:r+"rem"}})),n.createElement("td",{"data-header":"Variabel:",className:"jkl-portal-spacing-example-table__data"},n.createElement("code",{className:"jkl-portal-inline-code"},"jkl.$","spacing-"+t),n.createElement("br",null),n.createElement("code",{className:"jkl-portal-inline-code"},"var(--jkl-spacing-"+t+")")),n.createElement("td",{"data-header":"Pixelverdi:",className:"jkl-portal-spacing-example-table__data"},n.createElement("code",{className:"jkl-portal-inline-code"},a)),n.createElement("td",{"data-header":"Rem:",className:"jkl-portal-spacing-example-table__data"},n.createElement("code",{className:"jkl-portal-inline-code"},r,"rem")))},i=e=>{let{values:t}=e;return n.createElement("table",{className:"jkl-portal-spacing-example-table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Spacing"),n.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Variabel"),n.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Piksler"),n.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Rem"))),n.createElement("tbody",null,t.map(((e,t)=>n.createElement(r,{key:t,spacing:e})))))},c=()=>n.createElement(i,{values:l})},72285:function(e,t,a){a.d(t,{l:function(){return k}});var n=a(78217),l=a(41994),r=a(87505),i=a(70079),c=a(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:a,scrollWidth:n}=e,{clientWidth:l}=t,r=a>0,i=n-a>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,a=t.parentElement;d(t,a)},u=e=>{let{props:t}=e;const a=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=a.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),n=a.current.parentElement.parentElement;t.observe(n,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:a,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(n=t,n.map((e=>{var t,a;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(a=e.type)&&void 0!==a&&a.name?s(e.type.name):""]})))})));var n},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(n.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,a]=e;const n=a.props?Object.values(a.props).filter(m):[],r=a.props?Object.values(a.props).filter(o):[],s=(e=>{var t,a,n,l,r,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(a=e.tags)&&void 0!==a&&a.returns?["/**",null===(n=e.description)||void 0===n?void 0:n.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(a);return i.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(c.dn,{className:"jkl-portal-code-block"},s),n.length>0&&i.createElement(u,{props:n}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:r})))}))))}},1634:function(e,t,a){a.d(t,{M:function(){return s}});var n=a(26372),l=a.n(n),r=a(49597),i=a(70079),c=a(34044);const s=e=>{let{className:t,children:a}=e;const{prefersReducedMotion:n}=(0,i.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:n?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:n?0:-20,opacity:0},transition:{duration:n||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},a)}},78217:function(e,t,a){a.d(t,{U:function(){return r}});var n=a(53048),l=a(70079);const r=e=>{let{className:t,density:a,id:r,...i}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,n.Z)("jkl-accordion",t),"data-density":a,id:r,...i})}},41994:function(e,t,a){a.d(t,{Q:function(){return c}});var n=a(53484),l=a(1386),r=a(53048),i=a(70079);const c=e=>{let{children:t,title:a,className:c,startExpanded:s=!1,onClick:o,id:m,...d}=e;const{0:p,1:u}=(0,i.useState)(s),{0:k}=(0,i.useState)((()=>s)),{detailsRef:v,summaryRef:g,contentRef:E,onSummaryClick:f}=(0,l.E)({onOpenChange:(e,t)=>{u(e),o&&o(t,e)},isExpanded:k});return i.createElement("details",{"data-testid":"jkl-accordion-item",...d,className:(0,r.Z)("jkl-accordion-item",c),ref:v,id:m},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:f,ref:g},a,i.createElement(n.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,a){a.d(t,{w:function(){return d}});var n=a(70079),l=a(41699),r=a(65174),i=a(6914),c=a(82546),s=a(39126),o=a(66169),m=a(94509);const d=(0,n.forwardRef)(((e,t)=>{let{caption:a,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...v}=e;return n.createElement(l.i,{fullWidth:!0,...v,ref:t},a&&n.createElement(i.R,{srOnly:!0},a),n.createElement(s.s,null,n.createElement(m.S,null,d.map(((e,t)=>n.createElement(o.x,{key:t,density:"compact",bold:!0},e))))),n.createElement(r.R,null,0===u.length&&p&&n.createElement(m.S,null,n.createElement(c.p,{colSpan:d.length},p)),u.map(((e,t)=>n.createElement(m.S,{key:t},e.map(((e,t)=>n.createElement(c.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);