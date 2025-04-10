"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6010],{89295:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return N},Head:function(){return _},default:function(){return x}});var a=n(47160),r=n(70079),l=n(68805),o=n(18540),i=n(50165),s=n(35721);const c={},d=()=>{const{0:e,1:t}=(0,r.useState)(50);return r.createElement("div",{style:{width:"100%",minWidth:"240px"}},r.createElement(s.k,{"aria-valuenow":e}),r.createElement("div",{className:"jkl-spacing-l--top",style:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}},r.createElement(l.h,{onClick:()=>t(e-10<0?0:e-10)},r.createElement(o.w,null)),r.createElement("input",{type:"range",min:"0",max:"100",value:e,onChange:e=>t(parseInt(e.target.value,10))}),r.createElement(l.h,{onClick:()=>t(e+10>100?100:e+10)},r.createElement(i.X,null))))},m=()=>"\n<ProgressBar aria-valuenow={50} />\n";var u=n(56180);const p=e=>{let{className:t,from:n,isPaused:a,...l}=e;const{0:o,1:i}=(0,r.useState)(Math.floor(n/1e3));return(0,r.useEffect)((()=>{o<=0||setTimeout((()=>{a||i((e=>e-1))}),1e3)}),[a,n,o,i]),r.createElement("div",Object.assign({className:"jkl-countdown "+(null!=t?t:""),role:"timer","data-testid":"jkl-countdown"},l),r.createElement("span",{className:"jkl-countdown__tracker",role:"presentation",style:{"--duration":n+"ms","--play-state":a?"paused":"running"},"data-testid":"jkl-countdown__tracker"}),r.createElement("span",{className:"jkl-sr-only"},o))},v={},f=()=>{const{0:e,1:t}=(0,r.useState)(!0),{0:n,1:a}=(0,r.useState)(String(Date.now()));return r.createElement("div",{style:{width:"100%",minWidth:"240px"}},r.createElement(p,{key:n,from:5e3,isPaused:e}),r.createElement("div",{className:"jkl-spacing-l--top",style:{display:"flex",flexDirection:"row",gap:"1rem"}},r.createElement(u.KM,{onClick:()=>t(!e)},e?"Start":"Pause"),r.createElement(u.C9,{onClick:()=>{t(!0),a(String(Date.now()))}},"Reset")))},k=()=>"\n<Countdown from={5000} isPaused={isPaused} />\n";function E(e){const t=Object.assign({h2:"h2",p:"p",a:"a",ul:"ul",li:"li"},(0,a.ah)(),e.components),{Ingress:n,ComponentExample:l}=t;return l||g("ComponentExample",!0),n||g("Ingress",!0),r.createElement(r.Fragment,null,r.createElement(n,null,"Fremdriftsindikator kan brukes for å vise brukeren hvor langt man er kommet i en lengre operasjon."),"\n",r.createElement(l,{component:d,knobs:c,codeExample:m}),"\n",r.createElement(t.h2,null,"Når bruker vi ProgressBar?"),"\n",r.createElement(t.p,null,"Vi bruker en fremdriftsindikator i de tilfellene hvor vi ville brukt en ",r.createElement(t.a,{href:"/preview/navcard-vo-improvement/komponenter/loader"},"Loader"),", men hvor vi trenger å gi tilbakemelding til brukeren om hvor langt prosessen har kommet."),"\n",r.createElement(t.p,null,"For eksempel:"),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,r.createElement(t.a,{href:"/preview/navcard-vo-improvement/komponenter/fileinput"},"Filopplasting"),", der vi forventer store filer som kan ta tid å laste opp. Filopplasteren har en hjelpefunksjon for å beregne verdien som skal vises i fremdriftsindikatoren."),"\n"),"\n",r.createElement(t.h2,null,"Nedtelling"),"\n",r.createElement(t.p,null,"Ved nedtelling brukes det en komponent som er visuelt lik, men ",r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/timer_role"},"semantisk ulik"),". Animasjonen er også lineær, siden den er en visuell representasjon av tid."),"\n",r.createElement(l,{title:"Countdown",component:f,knobs:v,codeExample:k}))}var h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(E,e)):E(e)};function g(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var j=n(72285),b=n(22756),y=n(95573),w=n(1634);const _=e=>{let{pageContext:t}=e;return r.createElement(b.p,{title:t.title})},N=e=>{let{location:t,data:n,pageContext:a,children:l}=e;const{frontmatter:o}=n.page,{types:i}=a;return r.createElement(w.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(y.M1,Object.assign({},o,{versions:a.versions})),r.createElement(y.w5,o),l,i&&r.createElement(j.l,{types:i}))};function x(e){return r.createElement(N,e,r.createElement(h,e))}},56180:function(e,t,n){n.d(t,{C9:function(){return m},KM:function(){return c},kq:function(){return d},zx:function(){return s}});var a=n(41886),r=n(80532),l=n(26372),o=n.n(l),i=n(70079);const s=i.forwardRef((function(e,t){const{as:n="button",children:l,className:s,density:c,onTouchStart:d,loader:m,iconLeft:u,iconRight:p,variant:v="secondary",...f}=e,k=n,E=(0,i.useCallback)((e=>{d&&d(e);const t=e.target;if(t&&e.targetTouches.length){const n=e.targetTouches[0].clientX-t.getBoundingClientRect().x,a=e.targetTouches[0].clientY-t.getBoundingClientRect().y;t.style.setProperty("--jkl-touch-xcoord",n.toPrecision(4)+"px"),t.style.setProperty("--jkl-touch-ycoord",a.toPrecision(4)+"px"),t.classList.add("jkl-button--pressed"),setTimeout((()=>{t.classList.remove("jkl-button--pressed"),t.style.removeProperty("--jkl-touch-xcoord"),t.style.removeProperty("--jkl-touch-ycoord")}),400)}}),[d]),h=(0,r.c)(null==m?void 0:m.showLoader);return i.createElement(k,Object.assign({},h,{"data-density":c,className:o()("jkl-button","jkl-button--"+v,s,{"jkl-button--icon-left":u,"jkl-button--icon-right":p}),disabled:"button"===n?null==m?void 0:m.showLoader:void 0,onTouchStart:E},f,{ref:t}),i.createElement("div",{className:"jkl-button__content"},i.createElement("div",{className:o()("jkl-button__slider",{"jkl-button__slider--show-loader":!(null==m||!m.showLoader)})},u&&i.createElement("span",{className:"jkl-button__icon"},u),i.createElement("span",{className:"jkl-button__children"},l),p&&i.createElement("span",{className:"jkl-button__icon"},p),m&&i.createElement("div",{className:"jkl-button__loader"},i.createElement(a.a,{textDescription:m.textDescription,"aria-hidden":!m.showLoader})))))}));function c(e){const t={...e,variant:"primary"};return i.createElement(s,t)}function d(e){const t={...e,variant:"secondary"};return i.createElement(s,t)}function m(e){const t={...e,variant:"tertiary"};return i.createElement(s,t)}},68805:function(e,t,n){n.d(t,{h:function(){return o}});var a=n(26372),r=n.n(a),l=n(70079);const o=(0,l.forwardRef)(((e,t)=>{const{className:n,children:a,density:o,...i}=e;return l.createElement("button",Object.assign({ref:t,type:"button",className:r()("jkl-icon-button",n),"data-testid":"jkl-icon-button","data-density":o},i),a)}));o.displayName="IconButton"},87260:function(e,t,n){n.d(t,{J:function(){return o}});var a=n(26372),r=n.n(a),l=n(70079);const o=l.forwardRef((function(e,t){const{bold:n,children:a,className:o,filled:i,variant:s,...c}=e;return l.createElement("span",Object.assign({"aria-hidden":!0,ref:t,className:r()("jkl-icon",o,{"jkl-icon--filled":i,"jkl-icon--bold":n,["jkl-icon--"+s]:!!s})},c),a)}))},18540:function(e,t,n){n.d(t,{w:function(){return l}});var a=n(70079),r=n(87260);const l=e=>a.createElement(r.J,e,"");l.displayName="ChevronLeftIcon"},50165:function(e,t,n){n.d(t,{X:function(){return l}});var a=n(70079),r=n(87260);const l=e=>a.createElement(r.J,e,"");l.displayName="ChevronRightIcon"},35721:function(e,t,n){n.d(t,{k:function(){return r}});var a=n(70079);const r=e=>{let{"aria-valuenow":t,"aria-valuemin":n=0,"aria-valuemax":r=100,title:l="Fremdrift",className:o,...i}=e;const s=(c=t,(0===(d=r)?0:100*c/d)+"%");var c,d;return a.createElement("div",Object.assign({className:"jkl-progress-bar "+(null!=o?o:""),role:"progressbar",title:l,"aria-valuenow":t,"aria-valuemin":n,"aria-valuemax":r,"data-testid":"jkl-progress-bar"},i),a.createElement("span",{className:"jkl-progress-bar__tracker",style:{width:s},"data-testid":"jkl-progress-bar__tracker"}))}},72285:function(e,t,n){n.d(t,{l:function(){return v}});var a=n(58820),r=n(63571),l=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:a}=e,{clientWidth:r}=t,l=n>0,o=a-n>r;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),a=n.current.parentElement.parentElement;t.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=t,a.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var a},v=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const a=n.props?Object.values(n.props).filter(d):[],l=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,a,r,l,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(l=r.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(r.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),a.length>0&&o.createElement(p,{props:a}),l.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var a=n(26372),r=n.n(a),l=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:a}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(l.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:r()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var a=n(35250),r=n(26372),l=n.n(r);const o=e=>{let{className:t,density:n,id:r,...o}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,id:r,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var a=n(35250),r=n(68998),l=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:d,id:m,...u}=e;const[p,v]=(0,s.useState)(c),[f]=(0,s.useState)((()=>c)),{detailsRef:k,summaryRef:E,contentRef:h,onSummaryClick:g}=(0,l.E)({onOpenChange:(e,t)=>{v(e),d&&d(t,e)},isExpanded:f});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:k,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:E,children:[n,(0,a.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var a=n(70079),r=n(41699),l=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,a.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:u,rows:p,verticalAlign:v,...f}=e;return a.createElement(r.i,{fullWidth:!0,...f,ref:t},n&&a.createElement(o.R,{srOnly:!0},n),a.createElement(s.s,null,a.createElement(d.S,null,m.map(((e,t)=>a.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),a.createElement(l.R,null,0===p.length&&u&&a.createElement(d.S,null,a.createElement(i.p,{colSpan:m.length},u)),p.map(((e,t)=>a.createElement(d.S,{key:t},e.map(((e,t)=>a.createElement(i.p,{key:t,"data-th":m[t],verticalAlign:v},e))))))))}));m.displayName="DataTable"}}]);