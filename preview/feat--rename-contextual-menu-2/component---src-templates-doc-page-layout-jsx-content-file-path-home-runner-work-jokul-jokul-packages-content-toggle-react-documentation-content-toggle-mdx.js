"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4493],{64911:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return h},Head:function(){return E},default:function(){return j}});var l=n(47160),a=n(70079),r=n(26372),o=n.n(r);const i=e=>{let{"aria-live":t="polite",showSecondary:n,secondary:l,children:r,className:i,variant:s="flip",...c}=e;const{0:m}=(0,a.useState)(n),{0:d,1:p}=(0,a.useState)(!0);return(0,a.useEffect)((()=>{n!==m&&p(!1)}),[n,m]),a.createElement("span",Object.assign({},c,{className:o()("jkl-content-toggle","jkl-content-toggle--"+s,i)}),a.createElement("span",{className:"jkl-content-toggle__slider","data-show":n?"second":"first","data-initial":d,"aria-live":t},a.createElement("span",{key:n+"children",className:"jkl-content-toggle__first","aria-hidden":n},r),a.createElement("span",{key:n+"secondary",className:"jkl-content-toggle__second","aria-hidden":!n},l)))},s={boolProps:["Bytt verdi"],choiceProps:[{name:"Variant",values:["flip","fade"],defaultValue:0}]},c=e=>{let{boolValues:t,choiceValues:n}=e;return a.createElement("div",{className:"jkl-body"},a.createElement(i,{variant:null==n?void 0:n.Variant,showSecondary:!(null==t||!t["Bytt verdi"]),secondary:"World!"},"Hello"))},m=e=>{let{boolValues:t,choiceValues:n}=e;return'\n<div className="jkl-body">\n    <ContentToggle\n        variant='+(null==n?void 0:n.Variant)+"\n        showSecondary={"+(null==t?void 0:t["Bytt verdi"])+'}\n        secondary="World!"\n    >\n        Hello\n    </ContentToggle>\n</div>\n'};function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",strong:"strong"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:r}=t;return r||u("ComponentExample",!0),n||u("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"ContentToggle er en komponent for to av Jøkuls kjerneanimasjoner. Om du har behov for to tilstander som man veksler\nmellom, så er ContentToggle en måte å løse det på en elegant måte.")),"\n",a.createElement(r,{title:"ContentToggle",knobs:s,component:c,codeExample:m}),"\n",a.createElement(t.p,null,"ContentToggle komponenten tar inn to React-komponenter. Det kan være tekststrenger eller sammensatte komponenter, men egner seg nok best til tekster kortere enn en setning, og enkeltkomponenter som én knapp."),"\n",a.createElement(t.p,null,"Om du skal animere høyden til et element kan du bruke ",a.createElement(t.a,{href:"/preview/feat--rename-contextual-menu-2/komponenter/animation"},"useAnimatedHeight"),"."),"\n",a.createElement(t.h2,null,"Bruk"),"\n",a.createElement(t.p,null,"Eksempler på bruk:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Animere overgang fra ",a.createElement(t.a,{href:"/preview/feat--rename-contextual-menu-2/komponenter/loader"},"Loader"),' til innhold (tenk på varigheten her – unngå "flash of loader")'),"\n",a.createElement(t.li,null,"Veksle mellom visning av pris per år og per måned"),"\n",a.createElement(t.li,null,"Bytte fra ett ikon til et annet, som ikke er dekket av ",a.createElement(t.a,{href:"/preview/feat--rename-contextual-menu-2/komponenter/icons"},"Icons")," (men ",a.createElement(t.a,{href:"/preview/feat--rename-contextual-menu-2/guider/hvordan-endre-jokul"},"del gjerne at det er et behov"),"!)"),"\n"),"\n",a.createElement(t.h2,null,"Tilgjengelighet"),"\n",a.createElement(t.p,null,"Komponenten setter ",a.createElement(t.code,null,"aria-hidden")," på elemetet som ikke synes for øyeblikket. Vi kan dessverre ikke sette ",a.createElement(t.code,null,"hidden"),", siden vi er avhengige av at elementet har en høyde for at animasjonene skal fungere riktig."),"\n",a.createElement(t.p,null,"Det betyr at ",a.createElement(t.strong,null,"du selv sørger for at interaktive elementer som knapper kan ikke nås med tastatur"),", ved å sette ",a.createElement(t.code,null,"disabled"),"-attributtet på komponenten."),"\n",a.createElement(t.p,null,"Komponenten har også satt ",a.createElement(t.code,null,'aria-live="polite"')," slik at innholdet vil leses opp av skjermleser når tilstanden endres. Om dette ikke passer for ditt bruk kan du overstyre det med props."),"\n",a.createElement(t.h2,null,"Feilsøking"),"\n",a.createElement(t.p,null,"ContentToggle komponenten gjør sitt beste på å gjette hvor store elementene inni er, så den animerer riktig avstand. Det er basert på fontstørrelsen fra foreldrekomponenten (",a.createElement(t.code,null,"height")," settes med ",a.createElement(t.code,null,"em"),"-enheten). Så om du animerer ",a.createElement(t.code,null,"jkl-lead"),", sørg for at den klassen er satt over ContentToggle komponenten."),"\n",a.createElement(t.p,null,"I noen tilfeller så treffer den ikke helt. For å fortelle ContentToggle at den skal bevege seg mer eller mindre, så kan du overstyre ",a.createElement(t.code,null,"height")," på ContentToggle elementet via ",a.createElement(t.code,null,"className"),"."))}var p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(d,e)):d(e)};function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var k=n(72285),g=n(22756),v=n(95573),f=n(1634);const E=e=>{let{pageContext:t}=e;return a.createElement(g.p,{title:t.title})},h=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:o}=n.page,{types:i}=l;return a.createElement(f.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(v.M1,Object.assign({},o,{versions:l.versions})),a.createElement(v.w5,o),r,i&&a.createElement(k.l,{types:i}))};function j(e){return a.createElement(h,e,a.createElement(p,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(58820),a=n(63571),r=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,o=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;d(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],r=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,a,r,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),l.length>0&&o.createElement(u,{props:l}),r.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),a=n.n(l),r=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var l=n(35250),a=n(26372),r=n.n(a);const o=e=>{let{className:t,density:n,id:a,...o}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:a,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var l=n(35250),a=n(68998),r=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:m,id:d,...p}=e;const[u,k]=(0,s.useState)(c),[g]=(0,s.useState)((()=>c)),{detailsRef:v,summaryRef:f,contentRef:E,onSummaryClick:h}=(0,r.E)({onOpenChange:(e,t)=>{k(e),m&&m(t,e)},isExpanded:g});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",o),ref:v,id:d,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:f,children:[n,(0,l.jsx)(a.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),a=n(41699),r=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...g}=e;return l.createElement(a.i,{fullWidth:!0,...g,ref:t},n&&l.createElement(o.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===u.length&&p&&l.createElement(m.S,null,l.createElement(i.p,{colSpan:d.length},p)),u.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(i.p,{key:t,"data-th":d[t],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);