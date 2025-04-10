"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7013],{87555:function(e,t,a){a.r(t),a.d(t,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return k}});var n=a(47160),l=a(70079),r=a(14836);function s(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Spacing"),"\n",l.createElement(t.p,null,"Spacing er viktig for å skape system, hierarki og god rytme på tvers av løsninger. Ved å etablere gode standarder\nfor avstand blir det enklere og raskere for designere og utviklere å ta gode valg."),"\n",l.createElement(t.h2,null,"Skala"),"\n",l.createElement(r.r),"\n",l.createElement(t.h2,null,"Dynamisk spacing"),"\n",l.createElement(t.p,null,"På mindre skjermer ønsker man ofte mindre marginer og avstander enn på store skjermer. Vi tilbyr derfor egne variabler og hjelpeklasser for utviklere med vanlige kombinasjoner av spacinger som endrer seg ut fra skjermstørrelse. Du kan lese mer om disse i ",l.createElement(t.a,{href:"/preview/fix/system-message-docs/komponenter/spacing"},"Komponenter-seksjonen")," av siden."),"\n",l.createElement(t.h2,null,"Praktisk"),"\n",l.createElement(t.p,null,'For å gjøre det lettere å jobbe med skalaen i Figma kan du sette verdien av "big nudge" til 8px. Dette gjør du under Hamburgermeny (øverst til venstre) → Preferences → Nudge Amount.'),"\n",l.createElement(t.h2,null,"Hvordan bruke spacingskalaen?"),"\n",l.createElement(t.p,null,"Det er ingen konkret fasit på hvilke verdier i skalaen du skal benytte. Det vil avhenge av løsningen som designes."))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(s,e)):s(e)},c=a(72285),o=a(22756),d=a(95573),m=a(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(o.p,{title:t.title})},u=e=>{let{location:t,data:a,pageContext:n,children:r}=e;const{frontmatter:s}=a.page,{types:i}=n;return l.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(d.M1,Object.assign({},s,{versions:n.versions})),l.createElement(d.w5,s),r,i&&l.createElement(c.l,{types:i}))};function k(e){return l.createElement(u,e,l.createElement(i,e))}},14836:function(e,t,a){a.d(t,{r:function(){return i}});var n=a(70079);const l=["2","4","8","12","16","24","32","40","64","104","168"],r=e=>{let{spacing:t}=e;const{0:a,1:l}=(0,n.useState)("N/A"),r="N/A"!==a?parseInt(a)/16:a,s=!("undefined"==typeof window||!window.matchMedia)&&window.matchMedia("(forced-colors: active)").matches;return n.createElement("tr",{className:"jkl-portal-spacing-example-table__row"},n.createElement("td",{"data-header":"Spacing:",className:"jkl-portal-spacing-example-table__data"},n.createElement("div",{className:"jkl-spacing-"+t+"--top",style:{display:"none"},ref:e=>{l(((e,t)=>{var a,n;return e&&(null===(a=window)||void 0===a||null===(n=a.getComputedStyle(e))||void 0===n?void 0:n.getPropertyValue(t))||"N/A"})(e,"margin-top"))}}),n.createElement("div",{"aria-label":t+",  "+a,style:{backgroundColor:s?"CanvasText":"currentColor",width:r+"rem",height:r+"rem"}})),n.createElement("td",{"data-header":"Variabel:",className:"jkl-portal-spacing-example-table__data"},n.createElement("code",{className:"jkl-portal-inline-code"},"jkl.$","spacing-"+t),n.createElement("br",null),n.createElement("code",{className:"jkl-portal-inline-code"},"var(--jkl-spacing-"+t+")")),n.createElement("td",{"data-header":"Pixelverdi:",className:"jkl-portal-spacing-example-table__data"},n.createElement("code",{className:"jkl-portal-inline-code"},a)),n.createElement("td",{"data-header":"Rem:",className:"jkl-portal-spacing-example-table__data"},n.createElement("code",{className:"jkl-portal-inline-code"},r,"rem")))},s=e=>{let{values:t}=e;return n.createElement("table",{className:"jkl-portal-spacing-example-table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Spacing"),n.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Variabel"),n.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Piksler"),n.createElement("th",{className:"jkl-portal-spacing-example-table__header"},"Rem"))),n.createElement("tbody",null,t.map(((e,t)=>n.createElement(r,{key:t,spacing:e})))))},i=()=>n.createElement(s,{values:l})},72285:function(e,t,a){a.d(t,{l:function(){return k}});var n=a(58820),l=a(63571),r=a(87505),s=a(70079),i=a(54656);const c=e=>s.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:a,scrollWidth:n}=e,{clientWidth:l}=t,r=a>0,s=n-a>l;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",s)},p=e=>{const t=e.target,a=t.parentElement;m(t,a)},u=e=>{let{props:t}=e;const a=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const e=a.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),n=a.current.parentElement.parentElement;t.observe(n,{attributes:!0,attributeFilter:["hidden"]})}}),[]),s.createElement("div",{ref:a,className:"jkl-portal-api-docs-table"},s.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},s.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(n=t,n.map((e=>{var t,a;return[e.name?c(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?c(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(a=e.type)&&void 0!==a&&a.name?c(e.type.name):""]})))})));var n},k=e=>{let{types:t}=e;return s.createElement("section",{className:"mb-104 jkl-portal-paragraph"},s.createElement("h2",{className:"heading-1 mt-104"},"React API"),s.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),s.createElement(n.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,a]=e;const n=a.props?Object.values(a.props).filter(d):[],r=a.props?Object.values(a.props).filter(o):[],c=(e=>{var t,a,n,l,r,s;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(a=e.tags)&&void 0!==a&&a.returns?["/**",null===(n=e.description)||void 0===n?void 0:n.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(s=e.tags)&&void 0!==s&&s.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(a);return s.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},c&&s.createElement(i.dn,{className:"jkl-portal-code-block"},c),n.length>0&&s.createElement(u,{props:n}),r.length>0&&s.createElement(s.Fragment,null,s.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),s.createElement(u,{props:r})))}))))}},1634:function(e,t,a){a.d(t,{M:function(){return c}});var n=a(26372),l=a.n(n),r=a(49597),s=a(70079),i=a(34044);const c=e=>{let{className:t,children:a}=e;const{prefersReducedMotion:n}=(0,s.useContext)(i.R),c="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return s.createElement(r.E.main,{initial:{y:n?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:n?0:-20,opacity:0},transition:{duration:n||c?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},a)}},58820:function(e,t,a){a.d(t,{U:function(){return s}});var n=a(35250),l=a(26372),r=a.n(l);const s=e=>{let{className:t,density:a,id:l,...s}=e;return(0,n.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":a,id:l,...s})}},63571:function(e,t,a){a.d(t,{Q:function(){return o}});var n=a(35250),l=a(68998),r=a(1386),s=a(26372),i=a.n(s),c=a(70079);const o=e=>{let{children:t,title:a,className:s,startExpanded:o=!1,onClick:d,id:m,...p}=e;const[u,k]=(0,c.useState)(o),[g]=(0,c.useState)((()=>o)),{detailsRef:v,summaryRef:E,contentRef:f,onSummaryClick:h}=(0,r.E)({onOpenChange:(e,t)=>{k(e),d&&d(t,e)},isExpanded:g});return(0,n.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",s),ref:v,id:m,children:[(0,n.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[a,(0,n.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,n.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f,children:(0,n.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,a){a.d(t,{w:function(){return m}});var n=a(70079),l=a(41699),r=a(65174),s=a(6914),i=a(82546),c=a(39126),o=a(66169),d=a(94509);const m=(0,n.forwardRef)(((e,t)=>{let{caption:a,columns:m,emptyTableText:p,rows:u,verticalAlign:k,...g}=e;return n.createElement(l.i,{fullWidth:!0,...g,ref:t},a&&n.createElement(s.R,{srOnly:!0},a),n.createElement(c.s,null,n.createElement(d.S,null,m.map(((e,t)=>n.createElement(o.x,{key:t,density:"compact",bold:!0},e))))),n.createElement(r.R,null,0===u.length&&p&&n.createElement(d.S,null,n.createElement(i.p,{colSpan:m.length},p)),u.map(((e,t)=>n.createElement(d.S,{key:t},e.map(((e,t)=>n.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);