"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7335],{56201:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return k}});var a=t(64717),l=t(92379);function r(e){const n=Object.assign({p:"p",ul:"ul",li:"li",h3:"h3",a:"a",h4:"h4",pre:"pre",code:"code"},(0,a.ah)(),e.components),{SuccessMessage:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("SuccessMessage",!0),l.createElement(l.Fragment,null,l.createElement("div",{className:"jkl-portal-paragraph"},l.createElement(t,{role:"none presentation",fullWidth:!0,title:"Nye features"},l.createElement("ul",{className:"jkl-list"},l.createElement("li",{className:"jkl-list__item"},"Variabler (også kjent som design tokens) i Figma (ALPHA)"),l.createElement("li",{className:"jkl-list__item"},"Kode generert fra variabler i forskjellige språk")))),"\n",l.createElement(n.p,null,"Med variabler i Figma åpner det seg store muligheter i måten vi jobber på."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Designere og utviklere kan forholde seg til de samme variablene, ikke bare komponenter."),"\n",l.createElement(n.li,null,"Inspectoren i Figma kan vise konkrete variabelnavn, i stedet for en pixelverdi eller farge som utvikler så må finne igjen i kode."),"\n"),"\n",l.createElement(n.h3,null,"Variabler i Figma (ALPHA)"),"\n",l.createElement(n.p,null,"I Figma er arbeidet i gang med å definere semantiske variabler, sånn at vi lettere kan finne fram til riktig farge for riktig situasjon. Heller enn å gjette på hvilken farge som skal brukes ved hover (stein? fjellgrå?), vil du finne en variabel med et navn som beskriver hva den brukes til."),"\n",l.createElement(n.p,null,"Figma-variablene i Jøkul er fortsatt i ALPHA-stadiet, og vil kunne endre seg uten forvarsel. Om du kan leve med litt brekkasjer her og der ønsker vi likevel at du tester dem og gir oss tilbakemeldinger 🙇"),"\n",l.createElement(n.h3,null,"Nye variabler i kode"),"\n",l.createElement(n.p,null,"På kodesiden vil variabler fra Figma listes opp i en ",l.createElement(n.a,{href:"https://amzn.github.io/style-dictionary/"},"Style Dictionary"),", noe som lar oss generere kode for ulike språk."),"\n",l.createElement(n.p,null,"Vi tyvstarter i ",l.createElement(n.a,{href:"/preview/disabled-text-input/blog/core-13"},"Core 13")," med varibler for spacing, kjernefarger og typografi – i prinsippet de samme variablene vi har i dag."),"\n",l.createElement(n.p,null,"Vi genererer variabler for:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Sass"),"\n",l.createElement(n.li,null,"TypeScript/JavaScript"),"\n",l.createElement(n.li,null,"Less"),"\n",l.createElement(n.li,null,"CSS"),"\n"),"\n",l.createElement(n.h4,null,"Sass"),"\n",l.createElement(n.p,null,"Dette vil fungere som før. Variabelnavnene er uendret, du bruker de akkurat som før."),"\n",l.createElement(n.h4,null,"TypeScript/JavaScript"),"\n",l.createElement(n.p,null,"Dette åpner blant annet for at du kan konfigurere opp verktøy som Tailwind eller styled-components til å bruke Jøkul sine variabler."),"\n",l.createElement(n.p,null,"Her er et eksempel på Tailwind-config:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-js"},'import { tokens, breakpoints } from "@fremtind/jkl-core";\nimport plugin from "tailwindcss/plugin";\n\nexport default {\n    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],\n    theme: {\n        extend: {},\n        colors: tokens.color,\n        spacing: tokens.spacing,\n        fontSize: null,\n        lineHeight: null,\n    },\n    plugins: [\n        plugin(function ({ addComponents }) {\n            addComponents({\n                ".title": {\n                    ...tokens.typography.title.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.title.base,\n                    },\n                },\n                ".title-small": {\n                    ...tokens.typography.titleSmall.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.titleSmall.base,\n                    },\n                },\n                ".heading-1": {\n                    ...tokens.typography.heading_1.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_1.base,\n                    },\n                },\n                ".heading-2": {\n                    ...tokens.typography.heading_2.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_2.base,\n                    },\n                },\n                ".heading-3": {\n                    ...tokens.typography.heading_3.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_3.base,\n                    },\n                },\n                ".heading-4": {\n                    ...tokens.typography.heading_4.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_4.base,\n                    },\n                },\n                ".heading-5": {\n                    ...tokens.typography.heading_5.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.heading_5.base,\n                    },\n                },\n                ".body": {\n                    ...tokens.typography.body.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.body.base,\n                    },\n                },\n                ".small": {\n                    ...tokens.typography.small.small,\n                    [`@media (min-width: ${breakpoints.medium}px)`]: {\n                        ...tokens.typography.small.base,\n                    },\n                },\n            });\n        }),\n    ],\n};\n')),"\n",l.createElement(n.h4,null,"Less"),"\n",l.createElement(n.p,null,"Du finner variablene fra Jøkul i Less-format i ",l.createElement(n.code,null,"@fremtind/jkl-core/tokens.less"),"."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-less"},'@import "@fremtind/jkl-core/tokens.less";\n\n.app-section {\n    margin-block: @spacing-64;\n}\n')),"\n",l.createElement(n.h4,null,"CSS-variabler"),"\n",l.createElement(n.p,null,"Om du bruker en annen pre/post-prosessor enn Sass eller Less, kan du bruke CSS-variabler. Disse følger med ut av boksen i ",l.createElement(n.code,null,"core.css"),"."),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-css"},".app-section {\n    margin-block: var(--jkl-spacing-64);\n}\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)};var o=t(75482),s=t(96036),c=t(59001),m=t(65458),p=t(79379);const d=e=>{let{pageContext:n}=e;return l.createElement(s.p,{title:n.title})},u=e=>{let{location:n,data:t,pageContext:a,children:r}=e;const{frontmatter:i}=t.page,{types:s}=a;return l.createElement(p.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},i,{versions:a.versions})),n.pathname.includes("komponenter")&&l.createElement(c.c,{variant:"komponent",component:i.title}),l.createElement(m.w5,i),r,s&&l.createElement(o.l,{types:s}))};function k(e){return l.createElement(u,e,l.createElement(i,e))}},75482:function(e,n,t){t.d(n,{l:function(){return k}});var a=t(96845),l=t(41162),r=t(74797),i=t(92379),o=t(25329);const s=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},m=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},p=(e,n)=>{const{scrollLeft:t,scrollWidth:a}=e,{clientWidth:l}=n,r=t>0,i=a-t>l;n.classList.toggle("left-shadow",r),n.classList.toggle("right-shadow",i)},d=e=>{const n=e.target,t=n.parentElement;p(n,t)},u=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&p(n,e)}}))})),a=t.current.parentElement.parentElement;n.observe(a,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(r.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(a=n,a.map((e=>{var n,t;return[e.name?s(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?s(e.type.name):""]})))})));var a},k=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(a.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const a=t.props?Object.values(t.props).filter(m):[],r=t.props?Object.values(t.props).filter(c):[],s=(e=>{var n,t,a,l,r,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(a=e.description)||void 0===a?void 0:a.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(r=l.param)||void 0===r?void 0:r.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},s&&i.createElement(o.dn,{className:"jkl-portal-code-block"},s),a.length>0&&i.createElement(u,{props:a}),r.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(u,{props:r})))}))))}},59001:function(e,n,t){t.d(n,{c:function(){return o}});var a=t(48467),l=t(58990),r=t(92379),i=t(25329);const o=e=>{let{variant:n,component:t}=e;return r.createElement("section",{className:"suggestion-block"},r.createElement("div",{className:"suggestion-block__content"},r.createElement(l.U,null),r.createElement(i.nv,null,s[n].text)),r.createElement(a.r,{href:s[n].link+"+<"+t+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},79379:function(e,n,t){t.d(n,{M:function(){return s}});var a=t(80324),l=t.n(a),r=t(24157),i=t(92379),o=t(69215);const s=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:a}=(0,i.useContext)(o.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(r.E.main,{initial:{y:a?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:a?0:-20,opacity:0},transition:{duration:a||s?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},96845:function(e,n,t){t.d(n,{U:function(){return s}});var a=t(99767),l=t(651),r=t(80324),i=t.n(r);const o=["className","density","id"],s=e=>{let{className:n,density:t,id:r}=e,s=(0,a.Z)(e,o);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:i()("jkl-accordion",n),"data-density":t,id:r},s))}},41162:function(e,n,t){t.d(n,{Q:function(){return p}});var a=t(99767),l=t(651),r=t(42054),i=t(95020),o=t(80324),s=t.n(o),c=t(92379);const m=["children","title","className","startExpanded","onClick","id"],p=e=>{let{children:n,title:t,className:o,startExpanded:p=!1,onClick:d,id:u}=e,k=(0,a.Z)(e,m);const[g,f]=(0,c.useState)(p),[b]=(0,c.useState)((()=>p)),{detailsRef:v,summaryRef:h,contentRef:y,onSummaryClick:E}=(0,i.E)({onOpenChange:(e,n)=>{f(e),d&&d(n,e)},isExpanded:b});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:s()("jkl-accordion-item",o),ref:v,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:h,children:[t,(0,l.jsx)(r.K,{className:"jkl-accordion-item__arrow",pointingDown:!g,bold:g})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:y,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]}))}},58990:function(e,n,t){t.d(n,{U:function(){return m}});var a=t(92379),l=t(55650),r=Object.defineProperty,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const m=e=>a.createElement(l.J,((e,n)=>{for(var t in n||(n={}))o.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&c(e,t,n[t]);return e})({},e),"");m.displayName="QuestionIcon"},74797:function(e,n,t){t.d(n,{w:function(){return v}});var a=t(92379),l=t(94207),r=t(49309),i=t(36774),o=t(64081),s=t(64483),c=t(42104),m=t(98746),p=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;const v=(0,a.forwardRef)(((e,n)=>{var t,p=e,{caption:v,columns:h,emptyTableText:y,rows:E,verticalAlign:j}=p,_=((e,n)=>{var t={};for(var a in e)g.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&k)for(var a of k(e))n.indexOf(a)<0&&f.call(e,a)&&(t[a]=e[a]);return t})(p,["caption","columns","emptyTableText","rows","verticalAlign"]);return a.createElement(l.i,(t=((e,n)=>{for(var t in n||(n={}))g.call(n,t)&&b(e,t,n[t]);if(k)for(var t of k(n))f.call(n,t)&&b(e,t,n[t]);return e})({fullWidth:!0},_),d(t,u({ref:n}))),v&&a.createElement(i.R,{srOnly:!0},v),a.createElement(s.s,null,a.createElement(m.S,null,h.map(((e,n)=>a.createElement(c.x,{key:n,density:"compact",bold:!0},e))))),a.createElement(r.R,null,0===E.length&&y&&a.createElement(m.S,null,a.createElement(o.p,{colSpan:h.length},y)),E.map(((e,n)=>a.createElement(m.S,{key:n},e.map(((e,n)=>a.createElement(o.p,{key:n,"data-th":h[n],verticalAlign:j},e))))))))}));v.displayName="DataTable"}}]);