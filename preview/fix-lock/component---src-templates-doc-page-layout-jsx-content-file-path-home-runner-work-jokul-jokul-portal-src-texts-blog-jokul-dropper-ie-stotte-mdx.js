"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4123],{20084:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return m},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",em:"em",code:"code"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(n,null,"Etter en kartlegging i teamene har Fremtind offisielt avsluttet støtte for Internet Explorer."),"\n",l.createElement(t.p,null,"Torsdag 4. november ble det tatt en sjekk av Internet Explorer-støtte i de ulike teamene i Fremtind.\nPå teamledermøtet tirsdag 9. november ble det bekreftet at ingen av Fremtinds løsninger har behov\nfor fortsatt støtte for Internet Explorer."),"\n",l.createElement(t.h2,null,"Hva betyr dette for brukere av Jøkul?"),"\n",l.createElement(t.p,null,"Det betyr at Jøkul avslutter støtte for IE fra og med i dag."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Nye features vil ",l.createElement(t.em,null,"ikke")," utvikles med støtte for Internet Explorer."),"\n",l.createElement(t.li,null,"Vi vil ",l.createElement(t.em,null,"ikke")," rette browser-spesifike feil for IE."),"\n"),"\n",l.createElement(t.p,null,"Det vil bli en ryddejobb i Jøkul som ender i en ",l.createElement("i",null,"breaking change")," for ",l.createElement(t.code,null,"@fremtind/jkl-core")," (og dermed de fleste andre pakkene):"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Jøkul sin ",l.createElement(t.code,null,"browserslist")," vil oppdateres til ikke å inkludere ",l.createElement(t.code,null,"ie 11"),"."),"\n",l.createElement(t.li,null,"IE-spesifik kode vil forsvinne (for eksempel ",l.createElement(t.code,null,"inverted"),")."),"\n",l.createElement(t.li,null,"Dokumentasjon som bare gjelder IE vil fjernes, med unntak av gamle bloggposter."),"\n"),"\n",l.createElement(t.p,null,"Dette vil sannsynligvis skje i starten av 2022."))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};var o=n(72285),i=n(22756),s=n(95573),u=n(1634);const m=e=>{let{pageContext:t}=e;return l.createElement(i.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:c}=n.page,{types:i}=r;return l.createElement(u.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(s.M1,Object.assign({},c,{versions:r.versions})),l.createElement(s.w5,c),a,i&&l.createElement(o.l,{types:i}))};function p(e){return l.createElement(d,e,l.createElement(c,e))}},72285:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(78217),l=n(76802),a=n(87505),c=n(70079),o=n(54656);const i=e=>c.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},u=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,c=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",c)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},p=e=>{let{props:t}=e;const n=(0,c.useRef)(null);return(0,c.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),c.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},c.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},c.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return c.createElement("section",{className:"mb-104 jkl-portal-paragraph"},c.createElement("h2",{className:"heading-1 mt-104"},"React API"),c.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),c.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(u):[],a=n.props?Object.values(n.props).filter(s):[],i=(e=>{var t,n,r,l,a,c;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(c=e.tags)&&void 0!==c&&c.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return c.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&c.createElement(o.dn,{className:"jkl-portal-code-block"},i),r.length>0&&c.createElement(p,{props:r}),a.length>0&&c.createElement(c.Fragment,null,c.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),c.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),l=n.n(r),a=n(49597),c=n(70079),o=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,c.useContext)(o.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return c.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return c}});var r=n(26372),l=n.n(r),a=n(70079);const c=e=>{let{className:t,density:n,...r}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(53484),l=n(26372),a=n.n(l),c=n(70079);const o=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,c.useRef)(null),l=(0,c.useRef)(null),a=(0,c.useRef)(null),o=(0,c.useRef)(null),{0:i,1:s}=(0,c.useState)(!1),{0:u,1:m}=(0,c.useState)(!1);(0,c.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const d=e=>{r.current&&l.current&&(r.current.open=e,o.current=null,s(!1),m(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:l,contentRef:a,onSummaryClick:e=>{e.preventDefault(),r.current&&l.current&&(r.current.style.overflow="hidden",i||!r.current.open?(e=>{r.current&&l.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&l.current&&a.current){m(!0),t(!0,e);const n=r.current.offsetHeight,c=l.current.offsetHeight+a.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(c,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>d(!0),o.current.oncancel=()=>m(!1))}})))})(e):(u||r.current.open)&&(e=>{if(r.current&&l.current){s(!0),t(!1,e);const n=r.current.offsetHeight,a=l.current.offsetHeight;o.current&&o.current.cancel(),r.current.animate&&(o.current=r.current.animate({height:["".concat(n,"px"),"".concat(a,"px")]},{duration:150,easing:"ease"}),o.current.onfinish=()=>d(!1),o.current.oncancel=()=>s(!1))}})(e))}}},i=e=>{let{children:t,title:n,className:l,startExpanded:i=!1,onClick:s,...u}=e;const{0:m,1:d}=(0,c.useState)(i),{detailsRef:p,summaryRef:f,contentRef:E,onSummaryClick:v}=o({onOpenChange:(e,t)=>{d(e),s&&s(t,e)},startExpanded:i});return c.createElement("details",{"data-testid":"jkl-accordion-item",...u,className:a()("jkl-accordion-item",l),ref:p},c.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:f},n,c.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!m,bold:m})),c.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(41699),a=n(65174),c=n(6914),o=n(82546),i=n(39126),s=n(66169),u=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:d,rows:p,verticalAlign:f,...E}=e;return r.createElement(l.i,{fullWidth:!0,...E,ref:t},n&&r.createElement(c.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(u.S,null,m.map(((e,t)=>r.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&d&&r.createElement(u.S,null,r.createElement(o.p,{colSpan:m.length},d)),p.map(((e,t)=>r.createElement(u.S,{key:t},e.map(((e,t)=>r.createElement(o.p,{key:t,"data-th":m[t],verticalAlign:f},e))))))))}));m.displayName="DataTable"}}]);