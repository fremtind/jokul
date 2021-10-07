"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[6529],{4555:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return i},default:function(){return d}});var t=r(808),l=(r(7378),r(1368)),a=r(2803),o=["components"],i={},s={_frontmatter:i},p=a.Z;function d(e){var n=e.components,r=(0,t.Z)(e,o);return(0,l.mdx)(p,Object.assign({},s,r,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,'"Vi må støtte IE 11" trenger ikke være den verste setningen en utvikler kan høre. Med noen enkle steg kan man komme veldig langt uten å hverken måtte snu opp-ned på markup eller kode.'),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"Oppdatert 2020.09.03 for NanoID.")),(0,l.mdx)("h2",null,"Steg én: Polyfill JavaScript for IE 11"),(0,l.mdx)("p",null,"Legg til følgende konfigurasjon i ",(0,l.mdx)("inlineCode",{parentName:"p"},"package.json"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'"browserslist": {\n    "extends @fremtind/browserslist-config-jkl",\n    "ie 11"\n}\n')),(0,l.mdx)("p",null,"BrowsersList forteller verktøy som ",(0,l.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-preset-env"},"Babel")," og ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer#browsers"},"PostCSS")," hvilke polyfills som kreves. I tillegg til dette må vi registrere noen ekstra polyfills:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'import "document-register-element";\nimport "react-app-polyfill/ie11";\nimport "react-app-polyfill/stable";\n')),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"document-register-element")," polyfiller ",(0,l.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"Web Components"),"."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"react-app-polyfill/ie11")," polyfiller f.eks ",(0,l.mdx)("inlineCode",{parentName:"li"},"Promise"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"fetch")," og ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-app-polyfill"},"noen andre nyttige funksjoner"),"."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"react-app-polyfill/stable")," polyfiller ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/react-app-polyfill#polyfilling-other-language-features"},"ytteligere JavaScript-funksjoner som ikke er støttet"),".")),(0,l.mdx)("p",null,"Jøkul bruker ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/ai/nanoid"},"NanoID"),", som ikke lenger støtter IE 11. For å fikse dette kan man fortelle Babel at pakken må kompileres, samt definere ",(0,l.mdx)("inlineCode",{parentName:"p"},"window.crypto"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'// webpack.config.ts\nmodule.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.m?js$/,\n                exclude: [/node_modules\\/(?!(nanoid)\\/).*/],\n                use: {\n                    loader: "babel-loader",\n                    options: {\n                        presets: ["@babel/preset-env", "@babel/preset-react"],\n                        plugins: ["@babel/plugin-proposal-export-default-from"]\n                    }\n                }\n            }\n        ]\n    }\n}\n\n// polyfills.ts\nif (typeof window !== "undefined" && !window.crypto) {\n    // @ts-ignore\n    window.crypto = window.msCrypto;\n}\n\n// index.ts\nimport "./common/polyfills";\n')),(0,l.mdx)("h2",null,"Steg to: Autoprefix CSS"),(0,l.mdx)("p",null,"IE 11 er ikke helt ukjent for å henge litt etter på stylingfronten. Ofte tenker man spesielt på ",(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"},"CSS Grid"),". Her finnes det også verktøy som kan hjelpe oss på veien, det er dog ikke like mye å hente her som på JavaScript-siden."),(0,l.mdx)("p",null,"Ved å benytte oss av ",(0,l.mdx)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS")," kan vi få en del nyttig funksjonalitet, som blant annet autoprefix. Bare dette hjelper oss et stykke på veien. Dette verktøyet vil prøve å polyfille funksjonalitet så langt det er mulig. Men CSS Grid begrenser seg noe, og derfor er grid-modulen i autoprefixeren slått av som standard. Ved å legge til følgende konfigurasjonsfil kan vi konfigurere PostCSS til å autoprefixe CSS Grid:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javscript"},"// postcss.config.js\n\nmodule.exports = {\n  plugins: {\n    autoprefixer: { grid: 'autoplace' }\n  }\n};\n")),(0,l.mdx)("p",null,"Denne vil prøve å polyfille CSS ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer#grid-autoplacement-support-in-ie"},"så godt det lar seg gjøre")," ved å blant annet bruke ",(0,l.mdx)("inlineCode",{parentName:"p"},"nth-child")," selectorer."),(0,l.mdx)("h2",null,"Veien videre"),(0,l.mdx)("p",null,"JavaScript er mer eller mindre ferdig. Her skal du slippe å tenke på noe mer konfigurasjon, polyfills eller lignende. Men for styling ser derimot historien ganske annerledes ut."),(0,l.mdx)("p",null,"PostCSS og Autoprefixer fikser det ",(0,l.mdx)("a",{parentName:"p",href:"https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/#autoprefixer-has-new-super-powers"},"meste"),", med noen ",(0,l.mdx)("a",{parentName:"p",href:"https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/#table-disclaimers"},"unntak"),". Stort sett er det med CSS Grid man merker den manglende støtten."),(0,l.mdx)("h3",null,"Vår venn, Flexbox"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"},"Flexbox")," er CSS Grid sin éndimensjonale storebror. I motsetning til CSS Grid er Flexbox mye bedre støttet i IE 11, og kan brukes med mye større trygghet."),(0,l.mdx)("p",null,"En viktig ting å huske på er at CSS Grid ikke utelukker Flexbox. Dette er verktøy som kan brukes sammen og hver for seg, med sine bruksområder. Der hvor CSS Grid er todimensjonal og kan gå både vertikalt og horisontalt, bryr Flexbox seg kun om én av aksene. Selv om det frister å skrive mindre kode for å lage noe pent med CSS Grid, kan det være lurt å ta seg bryet med å gjøre det i Flexbox. Et godt eksempel er her er et fler-kolonne oppsett:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-css"},".columns: {\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n}\n")),(0,l.mdx)("p",null,"Hvordan kan dette gjenskapes med Flexbox?"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-css"},".columns {\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.columns .column {\n    flex: 1 0 25%;\n}\n")),(0,l.mdx)("h2",null,"Gotchas"),(0,l.mdx)("h4",null,"1. Bruk CSS Grid til å definere navngitte områder og kjente størrelser; PostCSS klarer ikke blant annet ",(0,l.mdx)("inlineCode",{parentName:"h4"},"grid-auto-rows")," og ",(0,l.mdx)("inlineCode",{parentName:"h4"},"grid-auto-columns"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},'.page__wrapper {\n    display: grid;\n    grid-template-rows: auto auto 1fr auto;\n    grid-template-columns: 100%;\n    grid-template-areas:\n        "message"\n        "header"\n        "main"\n        "footer";\n}\n\n.page__content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n')),(0,l.mdx)("h4",null,"2. Må det egentlig se likt ut i IE 11 som i Chrome? Bruk ",(0,l.mdx)("inlineCode",{parentName:"h4"},"@supports()")," for alt det den er verdt!"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},".avtale-oversikt__gruppe-wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    max-width: $bm-max-width;\n    margin: 0 auto;\n    padding: $layout-spacing--large 0 $padding-bottom 0;\n}\n\n@supports (display: grid) {\n    .avtale-oversikt__gruppe-wrapper {\n        display: grid;\n        grid-template-columns: 50% 50%;\n        grid-template-rows: auto auto;\n        grid-auto-flow: row dense;\n    }\n}\n")),(0,l.mdx)("h4",null,"3. Går innholdet i bare én retning? Like greit å bare bruke Flexbox!"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},".page__content {\n    display: flex;\n    flex-direction: column;\n}\n")),(0,l.mdx)("h2",null,"Videre lesing om CSS Grid i IE 11"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer/"},"CSS Grid in IE: CSS Grid and the New AutoPrefixer (css-tricks.com)")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://medium.com/@elad/supporting-css-grid-in-internet-explorer-b38669e75d66"},"Supporting CSS Grid in Internet Explorer (medium.com)")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer#does-autoprefixer-polyfill-grid-layout-for-ie"},"Does Autoprefixer polyfill Grid Layout for IE (github.com/postcss)")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-blog-ie-pluss-jokul-erlik-sant-ie-pluss-jokul-erlik-sant-mdx-bdf945a16c0cd526d94b.js.map