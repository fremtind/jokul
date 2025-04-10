"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2734],{23128:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return p}});var l=n(47160),a=n(70079);function r(e){const t=Object.assign({p:"p",em:"em",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"På frontendforum har det vært diskusjoner om Tailwind og andre utility-baserte verktøy for CSS. Konsensus har vært at det for ",a.createElement(t.em,null,"layout")," er ganske deilig å ikke måtte navngi og lage egne klasser bare for å få en margin eller standard flex-container."),"\n",a.createElement(t.p,null,"Siden Jøkul tar seg av styling av komponenter, er layout en av de tingene som gjøres mest ute i teamene. For å gjøre det enklere å lage layouter med Jøkuls spacingverdier, har vi laget et subset av Tailwind som er opt-in."),"\n",a.createElement(t.h2,null,"Bruk med Webpack, Vite og liknende"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},'import "@fremtind/jkl-core/core.min.css";\n// Vind trenger core for å fungere\nimport "@fremtind/jkl-core/vind.min.css";\n')),"\n",a.createElement(t.h2,null,"Bruk med Sass"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/core";\n// Vind trenger core for å fungere\n@use "@fremtind/jkl-core/vind";\n')),"\n",a.createElement(t.h2,null,"API"),"\n",a.createElement(t.p,null,"Du finner igjen disse tingene du kanskje kjenner fra Tailwind:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/flex-direction"},"Flex Direction")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/flex-grow"},"Flex Grow")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/flex-shrink"},"Flex Shrink")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/gap"},"Gap")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/justify-content"},"Justify Content")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/align-items"},"Align Items")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/padding"},"Padding")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/margin"},"Margin")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/space"},"Space Between")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/font-family"},"Font Family")," (",a.createElement(t.code,null,"font-serif")," finnes ikke)"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/font-weight"},"Font Weight")," (kun ",a.createElement(t.code,null,"font-normal")," og ",a.createElement(t.code,null,"font-bold"),")"),"\n"),"\n",a.createElement(t.h2,null,"Typografi"),"\n",a.createElement(t.p,null,"Vi har egne utils for typografi som passer med vår egen typografiskala."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,".title\n.title-small\n.heading-1\n.heading-2\n.heading-3\n.heading-4\n.heading-5\n.body\n.small\n")),"\n",a.createElement(t.h2,null,"Migrer til Vind"),"\n",a.createElement(t.p,null,"Om du har brukt utilityklasser fra ",a.createElement(t.code,null,"core.css")," tidligere, kan du migrere til Vind for å få mindre verbose klasenavn."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-diff"},'- <section className="jkl-spacing-104--bottom">\n-   <h2 className="jkl-heading-1 jkl-spacing-104--top">React API</h2>\n-   <p className="jkl-body jkl-spacing-16--top">\n+ <section className="mb-104">\n+   <h2 className="heading-1 mt-104">React API</h2>\n+   <p className="body mt-16">\n      Her finner du en oversikt over props på komponentene i pakken.\n    </p>\n')))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},c=n(72285),s=n(22756),o=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return a.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:l,children:r}=e;const{frontmatter:i}=n.page,{types:s}=l;return a.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(o.M1,Object.assign({},i,{versions:l.versions})),a.createElement(o.w5,i),r,s&&a.createElement(c.l,{types:s}))};function p(e){return a.createElement(u,e,a.createElement(i,e))}},72285:function(e,t,n){n.d(t,{l:function(){return f}});var l=n(58820),a=n(63571),r=n(87505),i=n(70079),c=n(54656);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),o=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},d=(e,t)=>{const{scrollLeft:n,scrollWidth:l}=e,{clientWidth:a}=t,r=n>0,i=l-n>a;t.classList.toggle("left-shadow",r),t.classList.toggle("right-shadow",i)},u=e=>{const t=e.target,n=t.parentElement;d(t,n)},p=e=>{let{props:t}=e;const n=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&d(t,e)}}))})),l=n.current.parentElement.parentElement;t.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=t,l.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var l},f=e=>{let{types:t}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const l=n.props?Object.values(n.props).filter(m):[],r=n.props?Object.values(n.props).filter(o):[],s=(e=>{var t,n,l,a,r,i;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(r=a.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return i.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&i.createElement(c.dn,{className:"jkl-portal-code-block"},s),l.length>0&&i.createElement(p,{props:l}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:r})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var l=n(26372),a=n.n(l),r=n(49597),i=n(70079),c=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:l}=(0,i.useContext)(c.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||s?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return i}});var l=n(35250),a=n(26372),r=n.n(a);const i=e=>{let{className:t,density:n,id:a,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",t),"data-density":n,id:a,...i})}},63571:function(e,t,n){n.d(t,{Q:function(){return o}});var l=n(35250),a=n(68998),r=n(1386),i=n(26372),c=n.n(i),s=n(70079);const o=e=>{let{children:t,title:n,className:i,startExpanded:o=!1,onClick:m,id:d,...u}=e;const[p,f]=(0,s.useState)(o),[g]=(0,s.useState)((()=>o)),{detailsRef:E,summaryRef:k,contentRef:h,onSummaryClick:v}=(0,r.E)({onOpenChange:(e,t)=>{f(e),m&&m(t,e)},isExpanded:g});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:c()("jkl-accordion-item",i),ref:E,id:d,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:k,children:[n,(0,l.jsx)(a.K,{className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return d}});var l=n(70079),a=n(41699),r=n(65174),i=n(6914),c=n(82546),s=n(39126),o=n(66169),m=n(94509);const d=(0,l.forwardRef)(((e,t)=>{let{caption:n,columns:d,emptyTableText:u,rows:p,verticalAlign:f,...g}=e;return l.createElement(a.i,{fullWidth:!0,...g,ref:t},n&&l.createElement(i.R,{srOnly:!0},n),l.createElement(s.s,null,l.createElement(m.S,null,d.map(((e,t)=>l.createElement(o.x,{key:t,density:"compact",bold:!0},e))))),l.createElement(r.R,null,0===p.length&&u&&l.createElement(m.S,null,l.createElement(c.p,{colSpan:d.length},u)),p.map(((e,t)=>l.createElement(m.S,{key:t},e.map(((e,t)=>l.createElement(c.p,{key:t,"data-th":d[t],verticalAlign:f},e))))))))}));d.displayName="DataTable"}}]);