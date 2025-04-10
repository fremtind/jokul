"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2824],{4354:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return j},Head:function(){return h},default:function(){return y}});var a=t(33156),l=t(7378),r=t(76377),i=t(14816),o=t(61452),s=t(52940);const c={},d=()=>l.createElement(r.t,null,l.createElement(i.w,{"aria-label":"tabs"},l.createElement(o.o,null,"Bedrifter"),l.createElement(o.o,null,"Bedriftansvarlige"),l.createElement(o.o,null,"Rådgivere")),l.createElement(s.K,null,l.createElement("div",{className:"jkl-spacing-m--all"},"Innhold for Bedrifter")),l.createElement(s.K,null,l.createElement("div",{className:"jkl-spacing-m--all"},"Innhold for Bedriftansvarlige")),l.createElement(s.K,null,l.createElement("div",{className:"jkl-spacing-m--all"},"Innhold for Rådgivere",l.createElement(r.t,null,l.createElement(i.w,{"aria-label":"subtabs"},l.createElement(o.o,null,"Bedrift AS"),l.createElement(o.o,null,"Alternativ AS")),l.createElement(s.K,{className:"jkl-spacing-m--all"},"Innhold for Bedrift AS"),l.createElement(s.K,{className:"jkl-spacing-m--all"},"Innhold for Alternativ AS"))))),m=()=>'\n<Tabs>\n    <TabList aria-label="tabs">\n        <Tab>Bedrifter</Tab>\n        <Tab>Bedriftansvarlige</Tab>\n        <Tab>Rådgivere</Tab>\n    </TabList>\n\n    <TabPanel>Innhold for Bedrifter</TabPanel>\n\n    <TabPanel>Innhold for Bedriftansvarlige</TabPanel>\n\n    <TabPanel>\n        Innhold for Rådgivere\n\n        <Tabs>\n            <TabList aria-label="subtabs">\n                <Tab>Bedrift AS</Tab>\n                <Tab>Alternativ AS</Tab>\n            </TabList>\n            <TabPanel>Innhold for Bedrift AS</TabPanel>\n            <TabPanel>Innhold for Alternativ AS</TabPanel>\n        </Tabs>\n    </TabPanel>\n</Tabs>\n';function u(e){const n=Object.assign({p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h2:"h2"},(0,a.RP)(),e.components),{Ingress:t,ComponentExample:r,PortalImage:i,Grid:o}=n;return r||f("ComponentExample",!0),o||f("Grid",!0),t||f("Ingress",!0),i||f("PortalImage",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Tabs/faner er en enkel måte å organisere innhold på ved å gruppere lignende\ninformasjon på samme side. Dette gjør at innhold kan sees uten at brukeren\nmå navigere bort fra den siden.")),"\n",l.createElement(r,{title:"Tabs",component:d,knobs:c,codeExample:m}),"\n",l.createElement(n.p,null,"Denne komponenten er utformet for å brukes i innholdsdelen av en side, og er designet for å brukes med ett nivå."),"\n",l.createElement(n.p,null,"Fanekomponenten kommer i to varianter som er visuelt like, men teknisk forskjellige:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Den første bytter visning av innhold på samme side med ",l.createElement(n.code,null,"button")," - navigerer ikke til en ny URL."),"\n",l.createElement(n.li,null,"Den andre baserer seg på lenker (",l.createElement(n.code,null,"a")," eller en custom komponent), og at hver fane er sin egen route."),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-jsx"},'<div style={{ width: "100%" }}>\n    <NavTabs>\n        {/* Sett aria-selected til true for den nåværende routen. */}\n        <NavTab aria-selected={true} href="/eksempler">\n            Eksempler\n        </NavTab>\n        <NavTab aria-selected={false} href="/bruk">\n            Bruk\n        </NavTab>\n        <NavTab aria-selected={false} href="/tekst">\n            Tekst\n        </NavTab>\n        <NavTab aria-selected={false} href="/spec">\n            Design Spec\n        </NavTab>\n        <NavTab aria-selected={false} href="/kode">\n            Kode\n        </NavTab>\n    </NavTabs>\n    <div role="tabpanel">\n        Sideinnhold, eller for eksempel <code>&lt;Outlet /&gt;</code> i Remix.\n    </div>\n</div>\n')),"\n",l.createElement(n.h2,null,"Best practices"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Brukes horisontalt med 2-9 tabs."),"\n",l.createElement(n.li,null,"Scroller horisontalt på skjermer hvor fanelinjen ikke får plass."),"\n",l.createElement(n.li,null,"Bør ha korte og beskrivende navn."),"\n",l.createElement(n.li,null,"Den første fanen skal vise den informasjonen som er mest relevant for brukeren."),"\n",l.createElement(n.li,null,"En fane må alltid være synlig."),"\n"),"\n",l.createElement(n.h2,null,"Når skal man ikke bruke tabs?"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Bør ikke brukes når det er nødvendig å sammenligne eller se innholdet i de ulike fanene samtidig. Hvis dette er et behov, er det bedre å bruke accordion."),"\n",l.createElement(n.li,null,"Bør ikke brukes hvis man trenger å lese gjennom alt innholdet for å forstå en stegvis prosess."),"\n"),"\n",l.createElement(n.h2,null,"Eksempler på bruk"),"\n",l.createElement(i,{className:"jkl-spacing-xl--bottom",src:"/assets/documentation/tab/tab-animation.gif",caption:"Eksempel på navigasjon mellom faner."}),"\n",l.createElement(i,{className:"jkl-spacing-xl--bottom",src:"/assets/documentation/tab/tabs-scroll.gif",caption:"På smale skjermer vil faner scrolle horisontalt. Ved å legge til en margin på start og slutt vil det gi hint om at det finnes mer."}),"\n",l.createElement(o,{className:"jkl-spacing-xl--bottom"},l.createElement(i,{src:"/assets/documentation/tab/tab-one.png",alt:""}),l.createElement(i,{src:"/assets/documentation/tab/tab-two.png",alt:""})))}var p=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?l.createElement(n,e,l.createElement(u,e)):u(e)};function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var b=t(68888),v=t(47672),k=t(52948),E=t(38776),g=t(20919);const h=e=>{let{pageContext:n}=e;return l.createElement(v.G,{title:n.title})},j=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:i}=t.page,{types:o}=a;return l.createElement(g.D,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(E.Ao,Object.assign({},i,{versions:a.versions})),n.pathname.includes("komponenter")&&l.createElement(k.A,{variant:"komponent",component:i.title}),l.createElement(E.f6,i),r,o&&l.createElement(b.N,{types:o}))};function y(e){return l.createElement(j,e,l.createElement(p,e))}},61452:function(e,n,t){t.d(n,{o:function(){return i}});var a=t(3698),l=t.n(a),r=t(7378);const i=r.forwardRef(((e,n)=>{const t=l()("jkl-tab",e.className);return r.createElement("button",Object.assign({role:"tab",type:"button",ref:n},e,{className:t}))}));i.displayName="Tab"},14816:function(e,n,t){t.d(n,{w:function(){return d}});var a=t(45271),l=t(3698),r=t.n(l),i=t(7378),o=t(66980);const s=["children","className"],c=["activeIndex","setActiveIndex","tabIDs","tabPanelIDs"],d=e=>{let{children:n,className:t}=e;const l=(0,a.A)(e,s),{activeIndex:d,setActiveIndex:m,tabIDs:u,tabPanelIDs:p}=l,f=(0,a.A)(l,c),{density:b}=(0,o.f)(),{0:v,1:k}=(0,i.useState)(),{0:E,1:g}=(0,i.useState)(),h=(0,i.useRef)(null),j=(0,i.useRef)(null);(0,i.useEffect)((()=>{h.current&&k(h.current.getBoundingClientRect()),j.current&&g(j.current.getBoundingClientRect())}),[d,b]);const y=(0,i.useCallback)((e=>{if("ArrowLeft"===e.key){const a=e.currentTarget,l=e.currentTarget.previousSibling;var n,t;if(l)l.focus();else(null===(n=a.parentElement)||void 0===n||null===(t=n.lastChild)||void 0===t?void 0:t.previousSibling).focus()}if("ArrowRight"===e.key){const n=e.currentTarget,t=e.currentTarget.nextSibling;var a;if(t&&"BUTTON"===t.nodeName)t.focus();else(null===(a=n.parentElement)||void 0===a?void 0:a.firstChild).focus()}}),[]);return i.createElement("div",Object.assign({role:"tablist",ref:h},f,{className:r()("jkl-tablist",t)}),i.Children.map(n,((e,n)=>{const t=d===n;return i.isValidElement(e)?i.cloneElement(e,{onKeyDown:y,tabIndex:t?void 0:-1,ref:t?j:void 0,onClick:()=>m(n),"aria-selected":t,"aria-controls":p[n],id:u[n]}):null})),i.createElement("span",{className:"jkl-tablist__indicator",style:{left:((null==E?void 0:E.left)||0)-((null==v?void 0:v.left)||0),bottom:-1,width:((null==E?void 0:E.width)||0)-("compact"===b?32:38)}}))}},52940:function(e,n,t){t.d(n,{K:function(){return s}});var a=t(45271),l=t(3698),r=t.n(l),i=t(7378);const o=["children"],s=e=>{let{children:n}=e,t=(0,a.A)(e,o);const l=r()("jkl-tabpanel",t.className);return i.createElement("div",Object.assign({role:"tabpanel"},t,{className:l}),n)}},76377:function(e,n,t){t.d(n,{t:function(){return u}});var a=t(2798),l=t(45271),r=t(37761),i=t(3698),o=t.n(i),s=t(24224),c=t(7378),d=t(66980);const m=["onChange","defaultTab","density"],u=e=>{let{onChange:n,defaultTab:t,density:i}=e,u=(0,l.A)(e,m);const{0:p,1:f}=(0,c.useState)(null!=t?t:0),b=(0,r.S)(p);(0,c.useEffect)((()=>{void 0!==b&&b!==p&&n&&n(p)}),[n,b,p]);const{0:v,1:k}=(0,c.useState)([]),{0:E,1:g}=(0,c.useState)([]),h=(0,c.useCallback)((()=>{const e=c.Children.toArray(u.children)[0];c.isValidElement(e)&&c.Children.forEach(e.props.children,(e=>{c.isValidElement(e)&&(k((e=>[].concat((0,a.A)(e),["jkl-tab-"+(0,s.Ak)(8)]))),g((e=>[].concat((0,a.A)(e),["jkl-tabpanel-"+(0,s.Ak)(8)]))))}))}),[u.children]);return(0,c.useEffect)((()=>{h()}),[h]),c.createElement(d.h,{state:{density:i}},c.createElement("div",Object.assign({},u,{className:o()("jkl-tabs",u.className),"data-density":i}),(()=>{const e=c.Children.toArray(u.children)[0];if(c.isValidElement(e))return c.cloneElement(e,{activeIndex:p,setActiveIndex:f,tabIDs:v,tabPanelIDs:E})})(),c.Children.map(u.children,((e,n)=>{if(!c.isValidElement(e)||0===n)return;const t=n-1;return t===p?c.cloneElement(e,{"aria-labelledby":v[t],id:E[t]}):null}))))}},66980:function(e,n,t){t.d(n,{f:function(){return r},h:function(){return i}});var a=t(7378);const l=(0,a.createContext)({density:void 0}),r=()=>(0,a.useContext)(l),i=e=>{let{state:n,children:t}=e;return a.createElement(l.Provider,{value:n},t)}},68888:function(e,n,t){t.d(n,{N:function(){return f}});var a=t(88635),l=t(24408),r=t(78022),i=t(7378),o=t(45371);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,i=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",i)},u=e=>{const n=e.target,t=n.parentElement;m(n,t)},p=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var a},f=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(d):[],r=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,a,l,r,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(l.A,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.NG,{className:"jkl-portal-code-block"},s),a.length>0&&i.createElement(p,{props:a}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:r})))}))))}},52948:function(e,n,t){t.d(n,{A:function(){return o}});var a=t(77800),l=t(38316),r=t(7378),i=t(45371);const o=e=>{let{variant:n,component:t}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(l.u,null),r.createElement(i.fz,null,s[n].text)),r.createElement(a.N,{href:s[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,n,t){t.d(n,{D:function(){return s}});var a=t(3698),l=t.n(a),r=t(94270),i=t(7378),o=t(79197);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,i.useContext)(o.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.P.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},88635:function(e,n,t){t.d(n,{n:function(){return s}});var a=t(45271),l=t(86106),r=t(3698),i=t.n(r);const o=["className","density","id"],s=e=>{let{className:n,density:t,id:r}=e,s=(0,a.A)(e,o);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",n),"data-density":t,id:r},s))}},24408:function(e,n,t){t.d(n,{A:function(){return m}});var a=t(45271),l=t(86106),r=t(21197),i=t(82455),o=t(3698),s=t.n(o),c=t(7378);const d=["children","title","className","startExpanded","onClick","id"],m=e=>{let{children:n,title:t,className:o,startExpanded:m=!1,onClick:u,id:p}=e,f=(0,a.A)(e,d);const[b,v]=(0,c.useState)(m),[k]=(0,c.useState)((()=>m)),{detailsRef:E,summaryRef:g,contentRef:h,onSummaryClick:j}=(0,i.$)({onOpenChange:(e,n)=>{v(e),u&&u(n,e)},isExpanded:k});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},f,{className:s()("jkl-accordion-item",o),ref:E,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:g,children:[t,(0,l.jsx)(r.l,{className:"jkl-accordion-item__arrow",pointingDown:!b,bold:b})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},38316:function(e,n,t){t.d(n,{u:function(){return d}});var a=t(7378),l=t(19767),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const d=e=>a.createElement(l.I,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");d.displayName="QuestionIcon"},78022:function(e,n,t){t.d(n,{b:function(){return E}});var a=t(7378),l=t(10494),r=t(75374),i=t(82462),o=t(60630),s=t(94624),c=t(65759),d=t(21664),m=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const E=(0,a.forwardRef)(((e,n)=>{var t,m=e,{caption:E,columns:g,emptyTableText:h,rows:j,verticalAlign:y}=m,N=((e,n)=>{var t={};for(var a in e)b.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&f)for(var a of f(e))n.indexOf(a)<0&&v.call(e,a)&&(t[a]=e[a]);return t})(m,["caption","columns","emptyTableText","rows","verticalAlign"]);return a.createElement(l.X,(t=((e,n)=>{for(var t in n||(n={}))b.call(n,t)&&k(e,t,n[t]);if(f)for(var t of f(n))v.call(n,t)&&k(e,t,n[t]);return e})({fullWidth:!0},N),u(t,p({ref:n}))),E&&a.createElement(i.r,{srOnly:!0},E),a.createElement(s.n,null,a.createElement(d.H,null,g.map(((e,n)=>a.createElement(c.A,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.B,null,0===j.length&&h&&a.createElement(d.H,null,a.createElement(o.n,{colSpan:g.length},h)),j.map(((e,n)=>a.createElement(d.H,{key:n},e.map(((e,n)=>a.createElement(o.n,{key:n,"data-th":g[n],verticalAlign:y},e))))))))}));E.displayName="DataTable"}}]);