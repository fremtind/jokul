"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[9819],{34665:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return h},Head:function(){return g},default:function(){return j}});var a=t(47160),l=t(70079),r=t(15522),i=t(33392),s=t(66596),o=t(39190);const c={},d=()=>l.createElement(r.m,null,l.createElement(i.t,{"aria-label":"tabs"},l.createElement(s.O,null,"Bedrifter"),l.createElement(s.O,null,"Bedriftansvarlige"),l.createElement(s.O,null,"Rådgivere")),l.createElement(o.x,null,l.createElement("div",{className:"jkl-spacing-m--all"},"Innhold for Bedrifter")),l.createElement(o.x,null,l.createElement("div",{className:"jkl-spacing-m--all"},"Innhold for Bedriftansvarlige")),l.createElement(o.x,null,l.createElement("div",{className:"jkl-spacing-m--all"},"Innhold for Rådgivere",l.createElement(r.m,null,l.createElement(i.t,{"aria-label":"subtabs"},l.createElement(s.O,null,"Bedrift AS"),l.createElement(s.O,null,"Alternativ AS")),l.createElement(o.x,{className:"jkl-spacing-m--all"},"Innhold for Bedrift AS"),l.createElement(o.x,{className:"jkl-spacing-m--all"},"Innhold for Alternativ AS"))))),m=()=>'\n<Tabs>\n    <TabList aria-label="tabs">\n        <Tab>Bedrifter</Tab>\n        <Tab>Bedriftansvarlige</Tab>\n        <Tab>Rådgivere</Tab>\n    </TabList>\n\n    <TabPanel>Innhold for Bedrifter</TabPanel>\n\n    <TabPanel>Innhold for Bedriftansvarlige</TabPanel>\n\n    <TabPanel>\n        Innhold for Rådgivere\n\n        <Tabs>\n            <TabList aria-label="subtabs">\n                <Tab>Bedrift AS</Tab>\n                <Tab>Alternativ AS</Tab>\n            </TabList>\n            <TabPanel>Innhold for Bedrift AS</TabPanel>\n            <TabPanel>Innhold for Alternativ AS</TabPanel>\n        </Tabs>\n    </TabPanel>\n</Tabs>\n';function u(e){const n=Object.assign({p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h2:"h2"},(0,a.ah)(),e.components),{Ingress:t,ComponentExample:r,PortalImage:i,Grid:s}=n;return r||f("ComponentExample",!0),s||f("Grid",!0),t||f("Ingress",!0),i||f("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Tabs/faner er en enkel måte å organisere innhold på ved å gruppere lignende informasjon på samme side. Dette gjør at\ninnhold kan sees uten at brukeren må navigere bort fra den siden.")),"\n",l.createElement(r,{title:"Tabs",component:d,knobs:c,codeExample:m}),"\n",l.createElement(n.p,null,"Denne komponenten er utformet for å brukes i innholdsdelen av en side, og er designet for å brukes med ett nivå."),"\n",l.createElement(n.p,null,"Fanekomponenten kommer i to varianter som er visuelt like, men teknisk forskjellige:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Den første bytter visning av innhold på samme side med ",l.createElement(n.code,null,"button")," - navigerer ikke til en ny URL."),"\n",l.createElement(n.li,null,"Den andre baserer seg på lenker (",l.createElement(n.code,null,"a")," eller en custom komponent), og at hver fane er sin egen route."),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<div style={{ width: "100%" }}>\n    <NavTabs>\n        {/* Sett aria-selected til true for den nåværende routen. */}\n        <NavTab aria-selected={true} href="/eksempler">\n            Eksempler\n        </NavTab>\n        <NavTab aria-selected={false} href="/bruk">\n            Bruk\n        </NavTab>\n        <NavTab aria-selected={false} href="/tekst">\n            Tekst\n        </NavTab>\n        <NavTab aria-selected={false} href="/spec">\n            Design Spec\n        </NavTab>\n        <NavTab aria-selected={false} href="/kode">\n            Kode\n        </NavTab>\n    </NavTabs>\n    <div role="tabpanel">\n        Sideinnhold, eller for eksempel <code>&lt;Outlet /&gt;</code> i Remix.\n    </div>\n</div>\n')),"\n",l.createElement(n.h2,null,"Best practices"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Brukes horisontalt med 2-9 tabs."),"\n",l.createElement(n.li,null,"Scroller horisontalt på skjermer hvor fanelinjen ikke får plass."),"\n",l.createElement(n.li,null,"Bør ha korte og beskrivende navn."),"\n",l.createElement(n.li,null,"Den første fanen skal vise den informasjonen som er mest relevant for brukeren."),"\n",l.createElement(n.li,null,"En fane må alltid være synlig."),"\n"),"\n",l.createElement(n.h2,null,"Når skal man ikke bruke tabs?"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Bør ikke brukes når det er nødvendig å sammenligne eller se innholdet i de ulike fanene samtidig. Hvis dette er et behov, er det bedre å bruke accordion."),"\n",l.createElement(n.li,null,"Bør ikke brukes hvis man trenger å lese gjennom alt innholdet for å forstå en stegvis prosess."),"\n"),"\n",l.createElement(n.h2,null,"Eksempler på bruk"),"\n",l.createElement(i,{className:"jkl-spacing-xl--bottom",src:"/assets/documentation/tab/tab-animation.gif",caption:"Eksempel på navigasjon mellom faner."}),"\n",l.createElement(i,{className:"jkl-spacing-xl--bottom",src:"/assets/documentation/tab/tabs-scroll.gif",caption:"På smale skjermer vil faner scrolle horisontalt. Ved å legge til en margin på start og slutt vil det gi hint om at det finnes mer."}),"\n",l.createElement(s,{className:"jkl-spacing-xl--bottom"},l.createElement(i,{src:"/assets/documentation/tab/tab-one.png",alt:""}),l.createElement(i,{src:"/assets/documentation/tab/tab-two.png",alt:""})))}var p=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(u,e)):u(e)};function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=t(72285),v=t(22756),E=t(95573),k=t(1634);const g=e=>{let{pageContext:n}=e;return l.createElement(v.p,{title:n.title})},h=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:i}=t.page,{types:s}=a;return l.createElement(k.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(E.M1,Object.assign({},i,{versions:a.versions})),l.createElement(E.w5,i),r,s&&l.createElement(b.l,{types:s}))};function j(e){return l.createElement(h,e,l.createElement(p,e))}},66596:function(e,n,t){t.d(n,{O:function(){return i}});var a=t(26372),l=t.n(a),r=t(70079);const i=r.forwardRef(((e,n)=>{const t=l()("jkl-tab",e.className);return r.createElement("button",Object.assign({role:"tab",type:"button",ref:n},e,{className:t}))}));i.displayName="Tab"},33392:function(e,n,t){t.d(n,{t:function(){return s}});var a=t(26372),l=t.n(a),r=t(70079),i=t(72841);const s=e=>{let{children:n,className:t,...a}=e;const{activeIndex:s,setActiveIndex:o,tabIDs:c,tabPanelIDs:d,...m}=a,{density:u}=(0,i.g)(),{0:p,1:f}=(0,r.useState)(),{0:b,1:v}=(0,r.useState)(),E=(0,r.useRef)(null),k=(0,r.useRef)(null);(0,r.useEffect)((()=>{E.current&&f(E.current.getBoundingClientRect()),k.current&&v(k.current.getBoundingClientRect())}),[s,u]);const g=(0,r.useCallback)((e=>{if("ArrowLeft"===e.key){const a=e.currentTarget,l=e.currentTarget.previousSibling;var n,t;if(l)l.focus();else(null===(n=a.parentElement)||void 0===n||null===(t=n.lastChild)||void 0===t?void 0:t.previousSibling).focus()}if("ArrowRight"===e.key){const n=e.currentTarget,t=e.currentTarget.nextSibling;var a;if(t&&"BUTTON"===t.nodeName)t.focus();else(null===(a=n.parentElement)||void 0===a?void 0:a.firstChild).focus()}}),[]);return r.createElement("div",Object.assign({role:"tablist",ref:E},m,{className:l()("jkl-tablist",t)}),r.Children.map(n,((e,n)=>{const t=s===n;return r.isValidElement(e)?r.cloneElement(e,{onKeyDown:g,tabIndex:t?void 0:-1,ref:t?k:void 0,onClick:()=>o(n),"aria-selected":t,"aria-controls":d[n],id:c[n]}):null})),r.createElement("span",{className:"jkl-tablist__indicator",style:{left:((null==b?void 0:b.left)||0)-((null==p?void 0:p.left)||0),bottom:-1,width:((null==b?void 0:b.width)||0)-("compact"===u?32:38)}}))}},39190:function(e,n,t){t.d(n,{x:function(){return i}});var a=t(26372),l=t.n(a),r=t(70079);const i=e=>{let{children:n,...t}=e;const a=l()("jkl-tabpanel",t.className);return r.createElement("div",Object.assign({role:"tabpanel"},t,{className:a}),n)}},15522:function(e,n,t){t.d(n,{m:function(){return d}});var a=t(15089),l=t(96820),r=t(26372),i=t.n(r),s=t(21821),o=t(70079),c=t(72841);const d=e=>{let{onChange:n,defaultTab:t,density:r,...d}=e;const{0:m,1:u}=(0,o.useState)(null!=t?t:0),p=(0,l.z)(m);(0,o.useEffect)((()=>{void 0!==p&&p!==m&&n&&n(m)}),[n,p,m]);const{0:f,1:b}=(0,o.useState)([]),{0:v,1:E}=(0,o.useState)([]),k=(0,o.useCallback)((()=>{const e=o.Children.toArray(d.children)[0];o.isValidElement(e)&&o.Children.forEach(e.props.children,(e=>{o.isValidElement(e)&&(b((e=>[].concat((0,a.Z)(e),["jkl-tab-"+(0,s.x0)(8)]))),E((e=>[].concat((0,a.Z)(e),["jkl-tabpanel-"+(0,s.x0)(8)]))))}))}),[d.children]);return(0,o.useEffect)((()=>{k()}),[k]),o.createElement(c.c,{state:{density:r}},o.createElement("div",Object.assign({},d,{className:i()("jkl-tabs",d.className),"data-density":r}),(()=>{const e=o.Children.toArray(d.children)[0];if(o.isValidElement(e))return o.cloneElement(e,{activeIndex:m,setActiveIndex:u,tabIDs:f,tabPanelIDs:v})})(),o.Children.map(d.children,((e,n)=>{if(!o.isValidElement(e)||0===n)return;const t=n-1;return t===m?o.cloneElement(e,{"aria-labelledby":f[t],id:v[t]}):null}))))}},72841:function(e,n,t){t.d(n,{c:function(){return i},g:function(){return r}});var a=t(70079);const l=(0,a.createContext)({density:void 0}),r=()=>(0,a.useContext)(l),i=e=>{let{state:n,children:t}=e;return a.createElement(l.Provider,{value:n},t)}},72285:function(e,n,t){t.d(n,{l:function(){return f}});var a=t(58820),l=t(63571),r=t(87505),i=t(70079),s=t(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,i=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",i)},u=e=>{const n=e.target,t=n.parentElement;m(n,t)},p=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?o(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?o(e.type.name):""]})))})));var a},f=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(d):[],r=t.props?Object.values(t.props).filter(c):[],o=(e=>{var n,t,a,l,r,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),a.length>0&&i.createElement(p,{props:a}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:r})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return o}});var a=t(26372),l=t.n(a),r=t(49597),i=t(70079),s=t(34044);const o=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||o?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return i}});var a=t(35250),l=t(26372),r=t.n(l);const i=e=>{let{className:n,density:t,id:l,...i}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",n),"data-density":t,id:l,...i})}},63571:function(e,n,t){t.d(n,{Q:function(){return c}});var a=t(35250),l=t(68998),r=t(1386),i=t(26372),s=t.n(i),o=t(70079);const c=e=>{let{children:n,title:t,className:i,startExpanded:c=!1,onClick:d,id:m,...u}=e;const[p,f]=(0,o.useState)(c),[b]=(0,o.useState)((()=>c)),{detailsRef:v,summaryRef:E,contentRef:k,onSummaryClick:g}=(0,r.E)({onOpenChange:(e,n)=>{f(e),d&&d(n,e)},isExpanded:b});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:s()("jkl-accordion-item",i),ref:v,id:m,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:E,children:[t,(0,a.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:k,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return m}});var a=t(70079),l=t(41699),r=t(65174),i=t(6914),s=t(82546),o=t(39126),c=t(66169),d=t(94509);const m=(0,a.forwardRef)(((e,n)=>{let{caption:t,columns:m,emptyTableText:u,rows:p,verticalAlign:f,...b}=e;return a.createElement(l.i,{fullWidth:!0,...b,ref:n},t&&a.createElement(i.R,{srOnly:!0},t),a.createElement(o.s,null,a.createElement(d.S,null,m.map(((e,n)=>a.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===p.length&&u&&a.createElement(d.S,null,a.createElement(s.p,{colSpan:m.length},u)),p.map(((e,n)=>a.createElement(d.S,{key:n},e.map(((e,n)=>a.createElement(s.p,{key:n,"data-th":m[n],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);