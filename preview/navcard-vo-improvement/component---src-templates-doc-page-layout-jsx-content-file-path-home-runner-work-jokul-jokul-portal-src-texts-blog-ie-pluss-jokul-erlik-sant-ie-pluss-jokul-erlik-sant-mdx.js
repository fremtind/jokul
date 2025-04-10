"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7591],{48966:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return d},default:function(){return g}});var r=n(47160),l=n(70079),a=n(696);function o(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",code:"code",pre:"pre",h3:"h3",h4:"h4"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(a.sk,{title:"Du ser på en gammel bloggpost",className:"jkl-spacing-64--bottom"},l.createElement(t.p,null,"Støtten for Internet Explorer har blitt droppet i Jøkul etter at denne bloggposten ble skrevet.")),"\n",l.createElement(n,null,l.createElement(t.p,null,'"Vi må støtte IE 11" trenger ikke være den verste setningen en utvikler kan høre. Med noen enkle steg kan man komme\nveldig langt uten å hverken måtte snu opp-ned på markup eller kode.')),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Oppdatert 2021.11.15: ",l.createElement(t.a,{href:"/preview/navcard-vo-improvement/blog/jokul-dropper-ie-stotte/"},"IE-støtte droppes i Jøkul"),"."),"\n",l.createElement(t.li,null,"Oppdatert 2020.09.03: NanoID."),"\n"),"\n",l.createElement(t.h2,null,"Steg én: Polyfill JavaScript for IE 11"),"\n",l.createElement(t.p,null,"Legg til følgende konfigurasjon i ",l.createElement(t.code,null,"package.json"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'"browserslist": {\n    "extends @fremtind/browserslist-config-jkl",\n    "ie 11"\n}\n')),"\n",l.createElement(t.p,null,"BrowsersList forteller verktøy som ",l.createElement(t.a,{href:"https://babeljs.io/docs/en/babel-preset-env"},"Babel")," og ",l.createElement(t.a,{href:"https://github.com/postcss/autoprefixer#browsers"},"PostCSS")," hvilke polyfills som kreves. I tillegg til dette må vi registrere noen ekstra polyfills:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript"},'import "document-register-element";\nimport "react-app-polyfill/ie11";\nimport "react-app-polyfill/stable";\n')),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"document-register-element")," polyfiller ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"Web Components"),"."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"react-app-polyfill/ie11")," polyfiller f.eks ",l.createElement(t.code,null,"Promise"),", ",l.createElement(t.code,null,"fetch")," og ",l.createElement(t.a,{href:"https://www.npmjs.com/package/react-app-polyfill"},"noen andre nyttige funksjoner"),"."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"react-app-polyfill/stable")," polyfiller ",l.createElement(t.a,{href:"https://www.npmjs.com/package/react-app-polyfill#polyfilling-other-language-features"},"ytteligere JavaScript-funksjoner som ikke er støttet"),"."),"\n"),"\n",l.createElement(t.p,null,"Jøkul bruker ",l.createElement(t.a,{href:"https://github.com/ai/nanoid"},"NanoID"),", som ikke lenger støtter IE 11. For å fikse dette kan man fortelle Babel at pakken må kompileres, samt definere ",l.createElement(t.code,null,"window.crypto"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javascript"},'// webpack.config.ts\nmodule.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.m?js$/,\n                exclude: [/node_modules\\/(?!(nanoid)\\/).*/],\n                use: {\n                    loader: "babel-loader",\n                    options: {\n                        presets: ["@babel/preset-env", "@babel/preset-react"],\n                        plugins: ["@babel/plugin-proposal-export-default-from"],\n                    },\n                },\n            },\n        ],\n    },\n};\n\n// polyfills.ts\nif (typeof window !== "undefined" && !window.crypto) {\n    // @ts-ignore\n    window.crypto = window.msCrypto;\n}\n\n// index.ts\nimport "./common/polyfills";\n')),"\n",l.createElement(t.h2,null,"Steg to: Autoprefix CSS"),"\n",l.createElement(t.p,null,"IE 11 er ikke helt ukjent for å henge litt etter på stylingfronten. Ofte tenker man spesielt på ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},"CSS Grid"),". Her finnes det også verktøy som kan hjelpe oss på veien, det er dog ikke like mye å hente her som på JavaScript-siden."),"\n",l.createElement(t.p,null,"Ved å benytte oss av ",l.createElement(t.a,{href:"https://postcss.org/"},"PostCSS")," kan vi få en del nyttig funksjonalitet, som blant annet autoprefix. Bare dette hjelper oss et stykke på veien. Dette verktøyet vil prøve å polyfille funksjonalitet så langt det er mulig. Men CSS Grid begrenser seg noe, og derfor er grid-modulen i autoprefixeren slått av som standard. Ved å legge til følgende konfigurasjonsfil kan vi konfigurere PostCSS til å autoprefixe CSS Grid:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-javscript"},"// postcss.config.js\n\nmodule.exports = {\n  plugins: {\n    autoprefixer: { grid: 'autoplace' }\n  }\n};\n")),"\n",l.createElement(t.p,null,"Denne vil prøve å polyfille CSS ",l.createElement(t.a,{href:"https://github.com/postcss/autoprefixer#grid-autoplacement-support-in-ie"},"så godt det lar seg gjøre")," ved å blant annet bruke ",l.createElement(t.code,null,"nth-child")," selectorer."),"\n",l.createElement(t.h2,null,"Veien videre"),"\n",l.createElement(t.p,null,"JavaScript er mer eller mindre ferdig. Her skal du slippe å tenke på noe mer konfigurasjon, polyfills eller lignende. Men for styling ser derimot historien ganske annerledes ut."),"\n",l.createElement(t.p,null,"PostCSS og Autoprefixer fikser det ",l.createElement(t.a,{href:"https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/#autoprefixer-has-new-super-powers"},"meste"),", med noen ",l.createElement(t.a,{href:"https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/#table-disclaimers"},"unntak"),". Stort sett er det med CSS Grid man merker den manglende støtten."),"\n",l.createElement(t.h3,null,"Vår venn, Flexbox"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"},"Flexbox")," er CSS Grid sin éndimensjonale storebror. I motsetning til CSS Grid er Flexbox mye bedre støttet i IE 11, og kan brukes med mye større trygghet."),"\n",l.createElement(t.p,null,"En viktig ting å huske på er at CSS Grid ikke utelukker Flexbox. Dette er verktøy som kan brukes sammen og hver for seg, med sine bruksområder. Der hvor CSS Grid er todimensjonal og kan gå både vertikalt og horisontalt, bryr Flexbox seg kun om én av aksene. Selv om det frister å skrive mindre kode for å lage noe pent med CSS Grid, kan det være lurt å ta seg bryet med å gjøre det i Flexbox. Et godt eksempel er her er et fler-kolonne oppsett:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".columns: {\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n}\n")),"\n",l.createElement(t.p,null,"Hvordan kan dette gjenskapes med Flexbox?"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},".columns {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.columns .column {\n    flex: 1 0 25%;\n}\n")),"\n",l.createElement(t.h2,null,"Gotchas"),"\n",l.createElement(t.h4,null,"1. Bruk CSS Grid til å definere navngitte områder og kjente størrelser; PostCSS klarer ikke blant annet ",l.createElement(t.code,null,"grid-auto-rows")," og ",l.createElement(t.code,null,"grid-auto-columns"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'.page__wrapper {\n    display: grid;\n    grid-template-rows: auto auto 1fr auto;\n    grid-template-columns: 100%;\n    grid-template-areas:\n        "message"\n        "header"\n        "main"\n        "footer";\n}\n\n.page__content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n')),"\n",l.createElement(t.h4,null,"2. Må det egentlig se likt ut i IE 11 som i Chrome? Bruk ",l.createElement(t.code,null,"@supports()")," for alt det den er verdt!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},".avtale-oversikt__gruppe-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: $bm-max-width;\n    margin: 0 auto;\n    padding: jkl.$spacing-2xl 0 $padding-bottom 0;\n}\n\n@supports (display: grid) {\n    .avtale-oversikt__gruppe-wrapper {\n        display: grid;\n        grid-template-columns: 50% 50%;\n        grid-template-rows: auto auto;\n        grid-auto-flow: row dense;\n    }\n}\n")),"\n",l.createElement(t.h4,null,"3. Går innholdet i bare én retning? Like greit å bare bruke Flexbox!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},".page__content {\n    display: flex;\n    flex-direction: column;\n}\n")),"\n",l.createElement(t.h2,null,"Videre lesing om CSS Grid i IE 11"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/"},"CSS Grid in IE: CSS Grid and the New AutoPrefixer (css-tricks.com)")),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://medium.com/@elad/supporting-css-grid-in-internet-explorer-b38669e75d66"},"Supporting CSS Grid in Internet Explorer (medium.com)")),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie"},"Does Autoprefixer polyfill Grid Layout for IE (github.com/postcss)")))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)};var i=n(72285),c=n(22756),p=n(95573),m=n(1634);const d=e=>{let{pageContext:t}=e;return l.createElement(c.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(m.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(p.M1,Object.assign({},o,{versions:r.versions})),l.createElement(p.w5,o),a,s&&l.createElement(i.l,{types:s}))};function g(e){return l.createElement(u,e,l.createElement(s,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var r=n(58820),l=n(63571),a=n(87505),o=n(70079),s=n(54656);const i=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},p=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},m=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;m(t,n)},u=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&m(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?i(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?i(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?i(e.type.name):""]})))})));var r},g=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(p):[],a=n.props?Object.values(n.props).filter(c):[],i=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},i&&o.createElement(s.dn,{className:"jkl-portal-code-block"},i),r.length>0&&o.createElement(u,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(u,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),s=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(35250),l=n(26372),a=n.n(l);const o=e=>{let{className:t,density:n,id:l,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return c}});var r=n(35250),l=n(68998),a=n(1386),o=n(26372),s=n.n(o),i=n(70079);const c=e=>{let{children:t,title:n,className:o,startExpanded:c=!1,onClick:p,id:m,...d}=e;const[u,g]=(0,i.useState)(c),[f]=(0,i.useState)((()=>c)),{detailsRef:k,summaryRef:E,contentRef:h,onSummaryClick:v}=(0,a.E)({onOpenChange:(e,t)=>{g(e),p&&p(t,e)},isExpanded:f});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:s()("jkl-accordion-item",o),ref:k,id:m,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:E,children:[n,(0,r.jsx)(l.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:h,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return m}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),s=n(82546),i=n(39126),c=n(66169),p=n(94509);const m=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:m,emptyTableText:d,rows:u,verticalAlign:g,...f}=e;return r.createElement(l.i,{fullWidth:!0,...f,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(p.S,null,m.map(((e,t)=>r.createElement(c.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===u.length&&d&&r.createElement(p.S,null,r.createElement(s.p,{colSpan:m.length},d)),u.map(((e,t)=>r.createElement(p.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":m[t],verticalAlign:g},e))))))))}));m.displayName="DataTable"}}]);