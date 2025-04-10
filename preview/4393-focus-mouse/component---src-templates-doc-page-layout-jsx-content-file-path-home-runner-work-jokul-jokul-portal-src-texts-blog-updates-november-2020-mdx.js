"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7724],{83490:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return p},default:function(){return u}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Hvis forrige månded var stille, så var denne stormen. En rekke nye kompenter, bugfixer i eksisternede, opprydding og forvaltning."),"\n",l.createElement(t.h2,null,"🌱 Releaser"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"✨ ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1558"},"Datepicker")," fikk en kraftig ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1443"},"robustifisering"),", ingen breaking changes, bare en sterk oppfordring om å oppdatere!"),"\n",l.createElement(t.li,null,"✨ ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1537"},"Ny validator"),", med en ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1536"},"opprydding")," av pakken"),"\n",l.createElement(t.li,null,"🔥 Ny komponent ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1534"},"ContentToggle"),", animasjonskomponent som ivaretar et av våre animasjonsprinsipper for små bevegelser, se i ",l.createElement(t.a,{href:"/preview/4393-focus-mouse/komponenter/contenttoggle"},"portalen")),"\n",l.createElement(t.li,null,"🔥 Ny pakke med ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1528"},"konstanter"),", se i ",l.createElement(t.a,{href:"/preview/4393-focus-mouse/komponenter/constants"},"portalen")),"\n",l.createElement(t.li,null,"🔥 Ny komponent med ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1524"},"ToggleSlider"),", se i ",l.createElement(t.a,{href:"/preview/4393-focus-mouse/komponenter/toggleswitch"},"portalen")),"\n",l.createElement(t.li,null,"🔥 Ny komponent ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1522"},"Check og crosslist"),", se i ",l.createElement(t.a,{href:"/preview/4393-focus-mouse/komponenter/list"},"portalen")),"\n",l.createElement(t.li,null,"🔥 Ny pakke ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1517"},"Feedback"),", se i ",l.createElement(t.a,{href:"/preview/4393-focus-mouse/komponenter/feedback"},"portalen")),"\n",l.createElement(t.li,null,"💅 Mobil forbedring på ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1465"},"knappene")),"\n"),"\n",l.createElement(t.h2,null,"📰 Oppdateringer"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Vi kan ønske @Fridaks velkommen som ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1418"},"bidragsyter"),"!"),"\n",l.createElement(t.li,null,"Vi har skrudd på CodeQL for å analysere koden vår for ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1414"},"sikkerhetshull")),"\n",l.createElement(t.li,null,"Vi har lagt til ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/pull/1431"},"CodeSandbox")," integrasjon, som tilgjengeliggjør oppdatert versjon av pakkene våre i en sandbox på hver PR. Hvis PRen er knyttet til en bugrapport som inneholder end CodeSandbox for å reprodusere feilen, så vil den automatisk forkes og bygges med oppdatert versjon i PRen."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(72285),s=n(22756),c=n(95573),m=n(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(s.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},o,{versions:r.versions})),l.createElement(c.w5,o),a,s&&l.createElement(i.l,{types:s}))};function u(e){return l.createElement(d,e,l.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(58820),l=n(63571),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},p=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;p(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&p(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(u,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(35250),l=n(26372),a=n.n(l);const o=e=>{let{className:t,density:n,id:l,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),l=n(68998),a=n(1386),o=n(26372),i=n.n(o),s=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:m,id:p,...d}=e;const[u,f]=(0,s.useState)(c),[k]=(0,s.useState)((()=>c)),{detailsRef:h,summaryRef:g,contentRef:E,onSummaryClick:v}=(0,a.E)({onOpenChange:(e,t)=>{f(e),m&&m(t,e)},isExpanded:k});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:i()("jkl-accordion-item",o),ref:h,id:p,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:g,children:[n,(0,r.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return p}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),c=n(66169),m=n(94509);const p=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:d,rows:u,verticalAlign:f,...k}=e;return r.createElement(l.i,{fullWidth:!0,...k,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(m.S,null,p.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===u.length&&d&&r.createElement(m.S,null,r.createElement(i.p,{colSpan:p.length},d)),u.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":p[t],verticalAlign:f},e))))))))}));p.displayName="DataTable"}}]);