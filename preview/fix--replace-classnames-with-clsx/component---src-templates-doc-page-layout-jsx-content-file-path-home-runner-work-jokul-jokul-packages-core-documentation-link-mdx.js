"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7909],{86254:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return y},Head:function(){return j},default:function(){return N}});var l=n(47160),a=n(70079),r=n(53048);const i=e=>{let{external:t=!1,className:n="",children:l,...i}=e;return a.createElement("a",Object.assign({className:(0,r.Z)("jkl-link",n,{"jkl-link--external":t})},i),l)},o={boolProps:["Ekstern"]},s=e=>{let{boolValues:t}=e;return a.createElement("p",null,a.createElement(i,{href:"/",external:null==t?void 0:t.Ekstern},"Gå til forsiden"))},c=e=>{let{boolValues:t}=e;return'\n<p>\n    <Link href="/" external={'+(null==t?void 0:t.Ekstern)+"}>\n        Gå til forsiden\n    </Link>\n</p>"},d=e=>{let{active:t=!1,back:n=!1,className:l,children:i,...o}=e;return a.createElement("a",Object.assign({className:(0,r.Z)("jkl-nav-link",{"jkl-nav-link--active":t,"jkl-nav-link--back":n},l)},o),i)},m={boolProps:["Aktiv","Back"]},p=e=>{let{boolValues:t}=e;return a.createElement("p",null,a.createElement(d,{href:"#",active:null==t?void 0:t.Aktiv,back:null==t?void 0:t.Back},"Gå til forsiden"))},u=e=>{let{boolValues:t}=e;return'\n<NavLink\n    href="#"\n    active={'+(null==t?void 0:t.Aktiv)+"}\n    back={"+(null==t?void 0:t.Back)+"}\n>\n    Gå til forsiden\n</NavLink>"};function k(e){const t=Object.assign({p:"p",h2:"h2",code:"code"},(0,l.ah)(),e.components),{Ingress:n,ComponentExample:r,Grid:i,DoDontExample:d}=t;return r||E("ComponentExample",!0),d||E("DoDontExample",!0),i||E("Grid",!0),n||E("Ingress",!0),a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(t.p,null,"Vi bruker lenker for å lede brukeren til andre nettsider, eller til andre steder på samme nettside. Lenker til\neksterne nettsider markeres med en pil opp og til høyre etter lenketeksten.")),"\n",a.createElement(r,{component:s,title:"Link",knobs:o,codeExample:c}),"\n",a.createElement(r,{component:p,title:"NavLink",knobs:m,codeExample:u}),"\n",a.createElement(t.h2,null,"Bruk"),"\n",a.createElement(t.p,null,"Vi har to typer lenker. I løpende tekst brukes vanlige lenker, mens navigasjons­lenker brukes i menyer og der lenken står for seg selv. Bruk egenskapen ",a.createElement(t.code,null,"Back"),' hvis det skal indikere en navigasjon som går mot hovedretningen. Feks en tilbake til "oversikt" i en kjøpsflyt.'),"\n",a.createElement(i,null,a.createElement(d,{image:"/assets/documentation/link/link-tekst.svg",type:"do",description:"Bruk vanlige lenker i løpende tekst, og marker eksterne lenker."}),a.createElement(d,{image:"/assets/documentation/link/navlink-tekst-feil.svg",type:"dont",description:"Ikke bruk navigasjonslenker i løpende tekst, heller ikke for eksterne lenker."})),"\n",a.createElement(i,null,a.createElement(d,{image:"/assets/documentation/link/navlink-meny.svg",type:"do",description:"Bruk navigasjonslenker når du skal lage en meny."}),a.createElement(d,{image:"/assets/documentation/link/navlink-alene.svg",type:"do",description:"Bruk en navigasjonslenke hvis lenken skal stå for seg selv."})))}var v=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(k,e)):k(e)};function E(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var f=n(72285),g=n(22756),b=n(95573),h=n(1634);const j=e=>{let{pageContext:t}=e;return a.createElement(g.p,{title:t.title})},y=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:i}=n.page,{types:o}=l;return a.createElement(h.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(b.M1,Object.assign({},i,{versions:l.versions})),a.createElement(b.w5,i),r,o&&a.createElement(f.l,{types:o}))};function N(e){return a.createElement(y,e,a.createElement(v,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var l=n(78217),a=n(41994),r=n(87505),i=n(70079),o=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},d=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,i=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",i)},p=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},k=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(d):[],r=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,l,a,r,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(u,{props:l}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),a=n.n(l),r=n(49597),i=n(70079),o=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return r}});var l=n(53048),a=n(70079);const r=e=>{let{className:t,density:n,id:r,...i}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:(0,l.Z)("jkl-accordion",t),"data-density":n,id:r,...i})}},41994:function(e,t,n){n.d(t,{Q:function(){return o}});var l=n(53484),a=n(1386),r=n(53048),i=n(70079);const o=e=>{let{children:t,title:n,className:o,startExpanded:s=!1,onClick:c,id:d,...m}=e;const{0:p,1:u}=(0,i.useState)(s),{0:k}=(0,i.useState)((()=>s)),{detailsRef:v,summaryRef:E,contentRef:f,onSummaryClick:g}=(0,a.E)({onOpenChange:(e,t)=>{u(e),c&&c(t,e)},isExpanded:k});return i.createElement("details",{"data-testid":"jkl-accordion-item",...m,className:(0,r.Z)("jkl-accordion-item",o),ref:v,id:d},i.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:g,ref:E},n,i.createElement(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})),i.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var l=n(70079),a=n(41699),r=n(65174),i=n(6914),o=n(82546),s=n(39126),c=n(66169),d=n(94509);const m=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:p,rows:u,verticalAlign:k,...v}=e;return l.createElement(a.i,{fullWidth:!0,...v,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(d.S,null,m.map(((e,t)=>l.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===u.length&&p&&l.createElement(d.S,null,l.createElement(o.p,{colSpan:m.length},p)),u.map(((e,t)=>l.createElement(d.S,{key:t},e.map(((e,t)=>l.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:k},e))))))))}));m.displayName="DataTable"}}]);