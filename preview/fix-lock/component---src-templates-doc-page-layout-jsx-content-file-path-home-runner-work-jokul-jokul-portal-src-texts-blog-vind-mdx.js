"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[2734],{23128:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return u},default:function(){return p}});var r=n(47160),a=n(70079);function l(e){const t=Object.assign({p:"p",em:"em",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"På frontendforum har det vært diskusjoner om Tailwind og andre utility-baserte verktøy for CSS. Konsensus har vært at det for ",a.createElement(t.em,null,"layout")," er ganske deilig å ikke måtte navngi og lage egne klasser bare for å få en margin eller standard flex-container."),"\n",a.createElement(t.p,null,"Siden Jøkul tar seg av styling av komponenter, er layout en av de tingene som gjøres mest ute i teamene. For å gjøre det enklere å lage layouter med Jøkuls spacingverdier, har vi laget et subset av Tailwind som er opt-in."),"\n",a.createElement(t.h2,null,"Bruk med Webpack, Vite og liknende"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},'import "@fremtind/jkl-core/core.min.css";\n// Vind trenger core for å fungere\nimport "@fremtind/jkl-core/vind.min.css";\n')),"\n",a.createElement(t.h2,null,"Bruk med Sass"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-core/core";\n// Vind trenger core for å fungere\n@use "@fremtind/jkl-core/vind";\n')),"\n",a.createElement(t.h2,null,"API"),"\n",a.createElement(t.p,null,"Du finner igjen disse tingene du kanskje kjenner fra Tailwind:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/flex-direction"},"Flex Direction")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/flex-grow"},"Flex Grow")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/flex-shrink"},"Flex Shrink")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/gap"},"Gap")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/justify-content"},"Justify Content")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/align-items"},"Align Items")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/padding"},"Padding")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/margin"},"Margin")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/space"},"Space Between")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/font-family"},"Font Family")," (",a.createElement(t.code,null,"font-serif")," finnes ikke)"),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"https://tailwindcss.com/docs/font-weight"},"Font Weight")," (kun ",a.createElement(t.code,null,"font-normal")," og ",a.createElement(t.code,null,"font-bold"),")"),"\n"),"\n",a.createElement(t.h2,null,"Typografi"),"\n",a.createElement(t.p,null,"Vi har egne utils for typografi som passer med vår egen typografiskala."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,".title\n.title-small\n.heading-1\n.heading-2\n.heading-3\n.heading-4\n.heading-5\n.body\n.small\n")),"\n",a.createElement(t.h2,null,"Migrer til Vind"),"\n",a.createElement(t.p,null,"Om du har brukt utilityklasser fra ",a.createElement(t.code,null,"core.css")," tidligere, kan du migrere til Vind for å få mindre verbose klasenavn."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-diff"},'- <section className="jkl-spacing-104--bottom">\n-   <h2 className="jkl-heading-1 jkl-spacing-104--top">React API</h2>\n-   <p className="jkl-body jkl-spacing-16--top">\n+ <section className="mb-104">\n+   <h2 className="heading-1 mt-104">React API</h2>\n+   <p className="body mt-16">\n      Her finner du en oversikt over props på komponentene i pakken.\n    </p>\n')))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},i=n(72285),o=n(22756),s=n(95573),m=n(1634);const u=e=>{let{pageContext:t}=e;return a.createElement(o.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:r,children:l}=e;const{frontmatter:c}=n.page,{types:o}=r;return a.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},a.createElement(s.M1,Object.assign({},c,{versions:r.versions})),a.createElement(s.w5,c),l,o&&a.createElement(i.l,{types:o}))};function p(e){return a.createElement(d,e,a.createElement(c,e))}},72285:function(e,t,n){n.d(t,{l:function(){return f}});var r=n(78217),a=n(76802),l=n(87505),c=n(70079),i=n(54656);const o=e=>c.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:a}=t,l=n>0,c=r-n>a;t.classList.toggle("left-shadow",l),t.classList.toggle("right-shadow",c)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,c.useRef)(null);return(0,c.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),c.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},c.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},c.createElement(l.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?o(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?o(e.type.name):""]})))})));var r},f=e=>{let{types:t}=e;return c.createElement("section",{className:"mb-104 jkl-portal-paragraph"},c.createElement("h2",{className:"heading-1 mt-104"},"React API"),c.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),c.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],l=n.props?Object.values(n.props).filter(s):[],o=(e=>{var t,n,r,a,l,c;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(a=e.tags)||void 0===a||null===(l=a.param)||void 0===l?void 0:l.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(c=e.tags)&&void 0!==c&&c.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return c.createElement(a.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},o&&c.createElement(i.dn,{className:"jkl-portal-code-block"},o),r.length>0&&c.createElement(p,{props:r}),l.length>0&&c.createElement(c.Fragment,null,c.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),c.createElement(p,{props:l})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return o}});var r=n(26372),a=n.n(r),l=n(49597),c=n(70079),i=n(34044);const o=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,c.useContext)(i.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return c.createElement(l.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||o?0:.35},className:a()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return c}});var r=n(26372),a=n.n(r),l=n(70079);const c=e=>{let{className:t,density:n,...r}=e;return l.createElement("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,...r})}},76802:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(53484),a=n(26372),l=n.n(a),c=n(70079);const i=e=>{let{onOpenChange:t,startExpanded:n}=e;const r=(0,c.useRef)(null),a=(0,c.useRef)(null),l=(0,c.useRef)(null),i=(0,c.useRef)(null),{0:o,1:s}=(0,c.useState)(!1),{0:m,1:u}=(0,c.useState)(!1);(0,c.useEffect)((()=>{r.current&&(r.current.open=n)}),[]);const d=e=>{r.current&&a.current&&(r.current.open=e,i.current=null,s(!1),u(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:a,contentRef:l,onSummaryClick:e=>{e.preventDefault(),r.current&&a.current&&(r.current.style.overflow="hidden",o||!r.current.open?(e=>{r.current&&a.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&a.current&&l.current){u(!0),t(!0,e);const n=r.current.offsetHeight,c=a.current.offsetHeight+l.current.offsetHeight;i.current&&i.current.cancel(),r.current.animate&&(i.current=r.current.animate({height:["".concat(n,"px"),"".concat(c,"px")]},{duration:150,easing:"ease"}),i.current.onfinish=()=>d(!0),i.current.oncancel=()=>u(!1))}})))})(e):(m||r.current.open)&&(e=>{if(r.current&&a.current){s(!0),t(!1,e);const n=r.current.offsetHeight,l=a.current.offsetHeight;i.current&&i.current.cancel(),r.current.animate&&(i.current=r.current.animate({height:["".concat(n,"px"),"".concat(l,"px")]},{duration:150,easing:"ease"}),i.current.onfinish=()=>d(!1),i.current.oncancel=()=>s(!1))}})(e))}}},o=e=>{let{children:t,title:n,className:a,startExpanded:o=!1,onClick:s,...m}=e;const{0:u,1:d}=(0,c.useState)(o),{detailsRef:p,summaryRef:f,contentRef:g,onSummaryClick:h}=i({onOpenChange:(e,t)=>{d(e),s&&s(t,e)},startExpanded:o});return c.createElement("details",{"data-testid":"jkl-accordion-item",...m,className:l()("jkl-accordion-item",a),ref:p},c.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:f},n,c.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),c.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},c.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),a=n(41699),l=n(65174),c=n(6914),i=n(82546),o=n(39126),s=n(66169),m=n(94509);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:f,...g}=e;return r.createElement(a.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(c.R,{srOnly:!0},n),r.createElement(o.s,null,r.createElement(m.S,null,u.map(((e,t)=>r.createElement(s.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(l.R,null,0===p.length&&d&&r.createElement(m.S,null,r.createElement(i.p,{colSpan:u.length},d)),p.map(((e,t)=>r.createElement(m.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":u[t],verticalAlign:f},e))))))))}));u.displayName="DataTable"}}]);