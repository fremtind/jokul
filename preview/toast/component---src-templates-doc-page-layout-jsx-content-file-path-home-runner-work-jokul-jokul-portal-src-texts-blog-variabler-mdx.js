"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7335],{35185:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return u}});var a=t(47160),l=t(70079);function r(e){const n=Object.assign({p:"p",ul:"ul",li:"li",h3:"h3",a:"a",h4:"h4",pre:"pre",code:"code"},(0,a.ah)(),e.components),{SuccessMessage:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SuccessMessage",!0),l.createElement(l.Fragment,null,l.createElement("div",{className:"jkl-portal-paragraph"},l.createElement(t,{role:"none presentation",fullWidth:!0,title:"Nye features"},l.createElement("ul",{className:"jkl-list"},l.createElement("li",{className:"jkl-list__item"},"Variabler (også kjent som design tokens) i Figma (ALPHA)"),l.createElement("li",{className:"jkl-list__item"},"Kode generert fra variabler i forskjellige språk")))),"\n",l.createElement(n.p,null,"Med variabler i Figma åpner det seg store muligheter i måten vi jobber på."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Designere og utviklere kan forholde seg til de samme variablene, ikke bare komponenter."),"\n",l.createElement(n.li,null,"Inspectoren i Figma kan vise konkrete variabelnavn, i stedet for en pixelverdi eller farge som utvikler så må finne igjen i kode."),"\n"),"\n",l.createElement(n.h3,null,"Variabler i Figma (ALPHA)"),"\n",l.createElement(n.p,null,"I Figma er arbeidet i gang med å definere semantiske variabler, sånn at vi lettere kan finne fram til riktig farge for riktig situasjon. Heller enn å gjette på hvilken farge som skal brukes ved hover (stein? fjellgrå?), vil du finne en variabel med et navn som beskriver hva den brukes til."),"\n",l.createElement(n.p,null,"Figma-variablene i Jøkul er fortsatt i ALPHA-stadiet, og vil kunne endre seg uten forvarsel. Om du kan leve med litt brekkasjer her og der ønsker vi likevel at du tester dem og gir oss tilbakemeldinger 🙇"),"\n",l.createElement(n.h3,null,"Nye variabler i kode"),"\n",l.createElement(n.p,null,"På kodesiden vil variabler fra Figma listes opp i en ",l.createElement(n.a,{href:"https://amzn.github.io/style-dictionary/"},"Style Dictionary"),", noe som lar oss generere kode for ulike språk."),"\n",l.createElement(n.p,null,"Vi tyvstarter i ",l.createElement(n.a,{href:"/preview/toast/blog/core-13"},"Core 13")," med varibler for spacing, kjernefarger og typografi – i prinsippet de samme variablene vi har i dag."),"\n",l.createElement(n.p,null,"Vi genererer variabler for:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Sass"),"\n",l.createElement(n.li,null,"TypeScript/JavaScript"),"\n",l.createElement(n.li,null,"Less"),"\n",l.createElement(n.li,null,"CSS"),"\n"),"\n",l.createElement(n.h4,null,"Sass"),"\n",l.createElement(n.p,null,"Dette vil fungere som før. Variabelnavnene er uendret, du bruker de akkurat som før."),"\n",l.createElement(n.h4,null,"TypeScript/JavaScript"),"\n",l.createElement(n.p,null,"Dette åpner blant annet for at du kan konfigurere opp verktøy som Tailwind eller styled-components til å bruke Jøkul sine variabler."),"\n",l.createElement(n.p,null,"Her er et eksempel på Tailwind-config:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},'import { tokens, breakpoints } from "@fremtind/jkl-core";\nimport plugin from "tailwindcss/plugin";\n\nexport default {\n    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],\n    theme: {\n        extend: {},\n        colors: tokens.color,\n        spacing: tokens.spacing,\n        fontSize: null,\n        lineHeight: null,\n    },\n    plugins: [\n        plugin(function ({ addComponents }) {\n            addComponents({\n                ".title": {\n                    ...tokens.typography.title.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.title.base,\n                    },\n                },\n                ".title-small": {\n                    ...tokens.typography.titleSmall.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.titleSmall.base,\n                    },\n                },\n                ".heading-1": {\n                    ...tokens.typography.heading_1.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_1.base,\n                    },\n                },\n                ".heading-2": {\n                    ...tokens.typography.heading_2.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_2.base,\n                    },\n                },\n                ".heading-3": {\n                    ...tokens.typography.heading_3.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_3.base,\n                    },\n                },\n                ".heading-4": {\n                    ...tokens.typography.heading_4.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_4.base,\n                    },\n                },\n                ".heading-5": {\n                    ...tokens.typography.heading_5.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_5.base,\n                    },\n                },\n                ".body": {\n                    ...tokens.typography.body.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.body.base,\n                    },\n                },\n                ".small": {\n                    ...tokens.typography.small.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.small.base,\n                    },\n                },\n            });\n        }),\n    ],\n};\n')),"\n",l.createElement(n.h4,null,"Less"),"\n",l.createElement(n.p,null,"Du finner variablene fra Jøkul i Less-format i ",l.createElement(n.code,null,"@fremtind/jkl-core/tokens.less"),"."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-less"},'@import "@fremtind/jkl-core/tokens.less";\n\n.app-section {\n    margin-block: @spacing-64;\n}\n')),"\n",l.createElement(n.h4,null,"CSS-variabler"),"\n",l.createElement(n.p,null,"Om du bruker en annen pre/post-prosessor enn Sass eller Less, kan du bruke CSS-variabler. Disse følger med ut av boksen i ",l.createElement(n.code,null,"core.css"),"."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-css"},".app-section {\n    margin-block: var(--jkl-spacing-64);\n}\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var s=t(72285),o=t(22756),c=t(95573),m=t(1634);const d=e=>{let{pageContext:n}=e;return l.createElement(o.p,{title:n.title})},p=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:i}=t.page,{types:o}=a;return l.createElement(m.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},i,{versions:a.versions})),l.createElement(c.w5,i),r,o&&l.createElement(s.l,{types:o}))};function u(e){return l.createElement(p,e,l.createElement(i,e))}},72285:function(e,n,t){t.d(n,{l:function(){return k}});var a=t(58820),l=t(63571),r=t(87505),i=t(70079),s=t(54656);const o=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},d=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,i=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",i)},p=e=>{const n=e.target,t=n.parentElement;d(n,t)},u=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&d(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?o(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?o(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?o(e.type.name):""]})))})));var a},k=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(m):[],r=t.props?Object.values(t.props).filter(c):[],o=(e=>{var n,t,a,l,r,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},o&&i.createElement(s.dn,{className:"jkl-portal-code-block"},o),a.length>0&&i.createElement(u,{props:a}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:r})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return o}});var a=t(26372),l=t.n(a),r=t(49597),i=t(70079),s=t(34044);const o=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,i.useContext)(s.R),o="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||o?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return i}});var a=t(35250),l=t(26372),r=t.n(l);const i=e=>{let{className:n,density:t,id:l,...i}=e;return(0,a.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:r()("jkl-accordion",n),"data-density":t,id:l,...i})}},63571:function(e,n,t){t.d(n,{Q:function(){return c}});var a=t(35250),l=t(68998),r=t(1386),i=t(26372),s=t.n(i),o=t(70079);const c=e=>{let{children:n,title:t,className:i,startExpanded:c=!1,onClick:m,id:d,...p}=e;const[u,k]=(0,o.useState)(c),[g]=(0,o.useState)((()=>c)),{detailsRef:h,summaryRef:v,contentRef:f,onSummaryClick:b}=(0,r.E)({onOpenChange:(e,n)=>{k(e),m&&m(n,e)},isExpanded:g});return(0,a.jsxs)("details",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",i),ref:h,id:d,children:[(0,a.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:b,ref:v,children:[t,(0,a.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,a.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f,children:(0,a.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return d}});var a=t(70079),l=t(41699),r=t(65174),i=t(6914),s=t(82546),o=t(39126),c=t(66169),m=t(94509);const d=(0,a.forwardRef)(((e,n)=>{let{caption:t,columns:d,emptyTableText:p,rows:u,verticalAlign:k,...g}=e;return a.createElement(l.i,{fullWidth:!0,...g,ref:n},t&&a.createElement(i.R,{srOnly:!0},t),a.createElement(o.s,null,a.createElement(m.S,null,d.map(((e,n)=>a.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===u.length&&p&&a.createElement(m.S,null,a.createElement(s.p,{colSpan:d.length},p)),u.map(((e,n)=>a.createElement(m.S,{key:n},e.map(((e,n)=>a.createElement(s.p,{key:n,"data-th":d[n],verticalAlign:k},e))))))))}));d.displayName="DataTable"}}]);