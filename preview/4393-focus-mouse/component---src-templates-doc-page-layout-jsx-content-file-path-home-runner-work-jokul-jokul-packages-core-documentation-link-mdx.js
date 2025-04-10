"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7909],{86254:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return N},Head:function(){return y},default:function(){return w}});var r=t(47160),l=t(70079),a=t(26372),o=t.n(a);const i=l.forwardRef((function(e,n){const{external:t=!1,className:r="",children:a,as:i="a",...s}=e,c=i,d=(0,l.useId)();return l.createElement(c,Object.assign({ref:n,className:o()("jkl-link",r,{"jkl-link--external":t}),"aria-describedby":t?d:void 0},s),a,t&&l.createElement("span",{hidden:!0,id:d},"Ekstern lenke"))})),s={boolProps:["Ekstern"]},c=e=>{let{boolValues:n}=e;return l.createElement("p",null,l.createElement(i,{href:"/",external:null==n?void 0:n.Ekstern},"Gå til forsiden"))},d=e=>{let{boolValues:n}=e;return'\n<p>\n    <Link href="/" external={'+(null==n?void 0:n.Ekstern)+"}>\n        Gå til forsiden\n    </Link>\n</p>"},m=l.forwardRef((function(e,n){const{active:t=!1,back:r=!1,className:a,children:i,as:s="a",...c}=e,d=s;return l.createElement(d,Object.assign({ref:n,className:o()("jkl-nav-link",{"jkl-nav-link--active":t,"jkl-nav-link--back":r},a)},c),i)})),p={boolProps:["Aktiv","Back"]},k=e=>{let{boolValues:n}=e;return l.createElement("p",null,l.createElement(m,{href:"#",active:null==n?void 0:n.Aktiv,back:null==n?void 0:n.Back},"Gå til forsiden"))},u=e=>{let{boolValues:n}=e;return'\n<NavLink\n    href="#"\n    active={'+(null==n?void 0:n.Aktiv)+"}\n    back={"+(null==n?void 0:n.Back)+"}\n>\n    Gå til forsiden\n</NavLink>"};function v(e){const n=Object.assign({p:"p",h2:"h2",em:"em",code:"code",pre:"pre"},(0,r.ah)(),e.components),{Ingress:t,ComponentExample:a,Grid:o,DoDontExample:i}=n;return a||E("ComponentExample",!0),i||E("DoDontExample",!0),o||E("Grid",!0),t||E("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t,null,l.createElement(n.p,null,"Vi bruker lenker for å lede brukeren til andre nettsider, eller til andre\nsteder på samme nettside. Lenker til eksterne nettsider markeres med en pil\nopp og til høyre etter lenketeksten.")),"\n",l.createElement(a,{component:c,title:"Link",knobs:s,codeExample:d}),"\n",l.createElement(a,{component:k,title:"NavLink",knobs:p,codeExample:u}),"\n",l.createElement(n.h2,null,"Lenker rendret som andre elementer"),"\n",l.createElement(n.p,null,"Både ensideapplikasjoner (SPA-er) og serverrendrede applikasjoner bruker gjerne egne lenkekomponenter for å navigere mellom sider. Lenkene i Jøkul er derfor ",l.createElement(n.em,null,"polymorfe")," komponenter, som kan ta formen til et annet element eller en React-komponent. Som standard rendres lenkene som ",l.createElement(n.code,null,"<a>"),"-elementer;"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-tsx"},'// Rendrer en vanlig HTML-lenke til gitt href:\n<Link href="https://www.fremtind.no">Besøk nettsidene våre</Link>;\n\n// Rendrer en Remix-lenke som bruker rammeverkets ruting:\nimport { Link as RemixLink } from "@remix-run/react";\n\n<Link as={RemixLink} to="/products">\n    Se alle produkter\n</Link>;\n')),"\n",l.createElement(n.p,null,"Lenken tar automatisk imot riktige props og riktig ",l.createElement(n.code,null,"ref")," for komponenten som sendes inn, slik at du får typesikkerhet."),"\n",l.createElement(n.h2,null,"Bruk"),"\n",l.createElement(n.p,null,"Vi har to typer lenker. I løpende tekst brukes vanlige lenker, mens navigasjons­lenker brukes i menyer og der lenken står for seg selv. Bruk egenskapen ",l.createElement(n.code,null,"Back"),' hvis det skal indikere en navigasjon som går mot hovedretningen. Feks en tilbake til "oversikt" i en kjøpsflyt.'),"\n",l.createElement(o,null,l.createElement(i,{image:"/assets/documentation/link/link-tekst.svg",type:"do",description:"Bruk vanlige lenker i løpende tekst, og marker eksterne lenker."}),l.createElement(i,{image:"/assets/documentation/link/navlink-tekst-feil.svg",type:"dont",description:"Ikke bruk navigasjonslenker i løpende tekst, heller ikke for eksterne lenker."})),"\n",l.createElement(o,null,l.createElement(i,{image:"/assets/documentation/link/navlink-meny.svg",type:"do",description:"Bruk navigasjonslenker når du skal lage en meny."}),l.createElement(i,{image:"/assets/documentation/link/navlink-alene.svg",type:"do",description:"Bruk en navigasjonslenke hvis lenken skal stå for seg selv."})))}var f=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(v,e)):v(e)};function E(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var g=t(72285),h=t(22756),b=t(95573),j=t(1634);const y=e=>{let{pageContext:n}=e;return l.createElement(h.p,{title:n.title})},N=e=>{let{location:n,data:t,pageContext:r,children:a}=e;const{frontmatter:o}=t.page,{types:i}=r;return l.createElement(j.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(b.M1,Object.assign({},o,{versions:r.versions})),l.createElement(b.w5,o),a,i&&l.createElement(g.l,{types:i}))};function w(e){return l.createElement(N,e,l.createElement(f,e))}},72285:function(e,n,t){t.d(n,{l:function(){return u}});var r=t(58820),l=t(63571),a=t(87505),o=t(70079),i=t(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},d=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},m=(e,n)=>{const{scrollLeft:t,scrollWidth:r}=e,{clientWidth:l}=n,a=t>0,o=r-t>l;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",o)},p=e=>{const n=e.target,t=n.parentElement;m(n,t)},k=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&m(n,e)}}))})),r=t.current.parentElement.parentElement;n.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=n,r.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var r},u=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const r=t.props?Object.values(t.props).filter(d):[],a=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,r,l,a,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(k,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(k,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return s}});var r=t(26372),l=t.n(r),a=t(49597),o=t(70079),i=t(34044);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return o}});var r=t(35250),l=t(26372),a=t.n(l);const o=e=>{let{className:n,density:t,id:l,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",n),"data-density":t,id:l,...o})}},63571:function(e,n,t){t.d(n,{Q:function(){return c}});var r=t(35250),l=t(68998),a=t(1386),o=t(26372),i=t.n(o),s=t(70079);const c=e=>{let{children:n,title:t,className:o,startExpanded:c=!1,onClick:d,id:m,...p}=e;const[k,u]=(0,s.useState)(c),[v]=(0,s.useState)((()=>c)),{detailsRef:f,summaryRef:E,contentRef:g,onSummaryClick:h}=(0,a.E)({onOpenChange:(e,n)=>{u(e),d&&d(n,e)},isExpanded:v});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:i()("jkl-accordion-item",o),ref:f,id:m,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:E,children:[t,(0,r.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return m}});var r=t(70079),l=t(41699),a=t(65174),o=t(6914),i=t(82546),s=t(39126),c=t(66169),d=t(94509);const m=(0,r.forwardRef)(((e,n)=>{let{caption:t,columns:m,emptyTableText:p,rows:k,verticalAlign:u,...v}=e;return r.createElement(l.i,{fullWidth:!0,...v,ref:n},t&&r.createElement(o.R,{srOnly:!0},t),r.createElement(s.s,null,r.createElement(d.S,null,m.map(((e,n)=>r.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===k.length&&p&&r.createElement(d.S,null,r.createElement(i.p,{colSpan:m.length},p)),k.map(((e,n)=>r.createElement(d.S,{key:n},e.map(((e,n)=>r.createElement(i.p,{key:n,"data-th":m[n],verticalAlign:u},e))))))))}));m.displayName="DataTable"}}]);