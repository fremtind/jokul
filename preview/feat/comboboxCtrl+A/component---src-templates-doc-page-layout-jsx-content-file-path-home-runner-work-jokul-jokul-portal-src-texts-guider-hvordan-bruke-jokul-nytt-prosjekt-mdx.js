"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[7924],{72297:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return u},default:function(){return p}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",code:"code",strong:"strong",h4:"h4",em:"em"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Hvordan lage et nytt prosjekt med Jøkul"),"\n",l.createElement(t.p,null,"Når du skal bruke Jøkul i et nytt prosjekt er det en del å huske på."),"\n",l.createElement(t.h2,null,"Designer som skal lage et nytt prosjekt?"),"\n",l.createElement(t.p,null,"Nye skisser i Figma trenger bare sørge for at Jøkul sitt komponentbibliotek er i bruk under Assets. Etter det blir Jøkul tilgjengelig i skissene dine."),"\n",l.createElement(t.p,null,"Resten av denne guiden retter seg mot utviklere."),"\n",l.createElement(t.h2,null,"Pakker"),"\n",l.createElement(t.p,null,"Om du skal bygge et nytt prosjekt med Jøkul er det noen grunnleggende pakker du alltid må ha installert:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994094"},"@fremtind/jkl-core")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994096"},"@fremtind/jkl-webfonts")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994092"},"@fremtind/browserslist-config-jkl")),"\n"),"\n",l.createElement(t.p,null,"I tillegg har vi ",l.createElement(t.a,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"pakker for mange ulike komponenter"),", og noen pakker med hjelpefunksjoner for ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994095"},"validering"),", ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/1267242"},"formatering"),", og nyttige ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/1011338"},"React hooks"),". Det er lettere å få oversikt over komponentene og hva de gjør under ",l.createElement(t.a,{href:"/preview/feat/comboboxCtrl+A/komponenter/accordion"},"Komponenter"),"."),"\n",l.createElement(t.h3,null,"Installer avhengigheter"),"\n",l.createElement(t.p,null,"For å installere det grunnleggende:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"npm i @fremtind/jkl-core @fremtind/jkl-webfonts\nnpm i @fremtind/browserslist-config-jkl\n")),"\n",l.createElement(t.h3,null,"Kort om de forskjellige pakkene i Jøkul"),"\n",l.createElement(t.p,null,"Jøkuls kode er delt inn i ",l.createElement(t.a,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"mange pakker"),", typisk to pakker per komponent."),"\n",l.createElement(t.p,null,"Hvorfor to?"),"\n",l.createElement(t.p,null,"Vi skiller på CSS-pakker og React-pakker i Jøkul. Du kan bruke komponentene i Jøkul som rene stilark dersom prosjektet ditt ikke bruker React, for eksempel om du skal bruke Jøkul i et CMS. Alle CSS-stilark finnes i både minifisert og uminifisert utgave. Sørg for å bruke den minifiserte i produksjon."),"\n",l.createElement(t.p,null,"Det er sterkt anbefalt å bruke React-komponentene om du overhode har mulighet."),"\n",l.createElement(t.p,null,"Hvis du bruker React-komponenten blir stilpakken automatisk installert som en avhengighet. Du trenger med andre ord ",l.createElement(t.strong,null,"ikke både React- og stilpakken i")," ",l.createElement(t.code,null,"package.json"),"."),"\n",l.createElement(t.h4,null,"Et eksempel på bruk av en komponent"),"\n",l.createElement(t.p,null,"Ta ",l.createElement(t.a,{href:"/preview/feat/comboboxCtrl+A/komponenter/accordion"},"Accordion")," som et eksempel. Skal du bruke React-komponenten installerer du den med ",l.createElement(t.code,null,"npm i @fremtind/jkl-accordion-react")," og får automatisk med riktig versjon av ",l.createElement(t.code,null,"@fremtind/jkl-accordion")," som en avhengighet. Dersom du bare bruker stilpakken, installerer du den med ",l.createElement(t.code,null,"npm i @fremtind/jkl-accordion"),"."),"\n",l.createElement(t.p,null,"Når du skal ta i bruk en React-komponent trenger du å laste inn både stilen og komponenten. Hvis du har satt opp en CSS-loader i prosjektet ditt kan du importere stilen direkte i TypeScript. Du kan også velge å importere den i en av dine ",l.createElement(t.code,null,".scss"),"- eller ",l.createElement(t.code,null,".css"),"-filer."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-ts"},'import "@fremtind/jkl-core/core.min.css";\nimport "@fremtind/jkl-accordion/accordion.min.css";\nimport { Accordion, AccordionItem } from "@fremtind/jkl-accordion";\n')),"\n",l.createElement(t.h2,null,"Initialisering"),"\n",l.createElement(t.p,null,"For at komponentene i Jøkul skal virke riktig trenger de å vite om brukeren navigerer i løsningen med mus, tastatur eller touch. Det gjøres ved å kjøre ",l.createElement(t.code,null,"initTabListener")," funksjonen fra ",l.createElement(t.code,null,"@fremtind/jkl-core"),". Det trengs bare gjøres én gang, helst så tidlig som det lar seg gjøre. Normalt vil det være i entrypointet i applikasjonen din."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"initTabListener")," ser på hvordan siden interageres med – museklikk, tastetrykk, eller touch – og setter automatisk et ",l.createElement(t.code,null,"data"),"-attributt på ",l.createElement(t.code,null,"<body>"),", som Jøkul bruker til blant annet å vise enda tydeligere fokusringer ved tastaturnavigasjon."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'import { initTabListener } from "@fremtind/jkl-core";\n\ninitTabListener();\n')),"\n",l.createElement(t.h2,null,"Klassen ",l.createElement(t.code,null,"jkl")),"\n",l.createElement(t.p,null,"For at CSSen i Jøkul skal fungere som forventet må du sette klassen ",l.createElement(t.code,null,"jkl")," på rotnivå i applikasjonen din."),"\n",l.createElement(t.p,null,"Vi bruker ",l.createElement(t.code,null,"jkl"),"-klassen til å blant annet:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Sette riktige fonter."),"\n",l.createElement(t.li,null,"Gi standardfarger til tekst og bakgrunn."),"\n",l.createElement(t.li,null,"Noen CSS resets."),"\n"),"\n",l.createElement(t.p,null,"Du har kanskje en komponent som heter ",l.createElement(t.code,null,"Layout")," eller ",l.createElement(t.code,null,"App")," hvor du kan sette denne klassen? Om du er usikker, sett klassen på ",l.createElement(t.code,null,"body"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'import React, { FC } from "react";\nimport { WithChildren } from "@fremtind/jkl-core";\n\nexport const Layout: FC<WithChildren> = ({ children }) => {\n    return <div className="jkl">{children}</div>;\n};\n')),"\n",l.createElement(t.h3,null,"Bruk med Sass"),"\n",l.createElement(t.p,null,"Om du bruker Sass-stilark i prosjektet ditt er dette den enkleste måten å få riktige fonter. I rot-",l.createElement(t.code,null,".scss"),"-filen din:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-webfonts/webfonts.scss" with (\n    $webfonts-dir: "../relative/path/to/node_modules/@fremtind/jkl-webfonts/fonts"\n);\n')),"\n",l.createElement(t.p,null,"Variabelen ",l.createElement(t.code,null,"$webfonts-dir")," angir hvor filene ligger. Hvis den ikke spesifiseres vil stilarket se etter fontfilene i mappen ",l.createElement(t.code,null,"/fonts"),"."),"\n",l.createElement(t.h3,null,"Bruk med CSS"),"\n",l.createElement(t.p,null,"Om du ikke bruker Sass kan du benytte deg av den vanlige ",l.createElement(t.code,null,".css"),"-versjonen. Denne versjonen ser kun etter fontfilene i mappen ",l.createElement(t.code,null,"/fonts"),". Om du vil legge fontfilene et annet sted må du kopiere CSS-filen ",l.createElement(t.code,null,"node_modules/@fremtind/jkl-webfonts/webfonts.css")," og legge den inn i prosjektet ditt. Deretter må du endre url-en i hver ",l.createElement(t.code,null,"@font-face"),"-definisjon manuelt så det stemmer med hvor fontfilene dine ligger:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},'@font-face {\n    font-family: "Fremtind Grotesk";\n    font-display: fallback;\n    font-weight: normal;\n    font-style: normal;\n    src: local("Fremtind Grotesk"),\n        /* Endre de to neste linjene så de stemmer */\n            url("/relative/path/to/font/files/FremtindGrotesk-Regular-Web.woff2") format("woff2"), url("/relative/path/to/font/files/FremtindGrotesk-Regular-Web.woff")\n            format("woff");\n}\n')),"\n",l.createElement(t.h2,null,"Konfigurasjon"),"\n",l.createElement(t.p,null,"Mange av utviklerverktøyene i frontendverden kan lese en ",l.createElement(t.a,{href:"https://github.com/browserslist/browserslist"},"browserslist")," og automatisk sørge for å optimalisere koden som bygges og til slutt ender opp hos brukerne våre. Jøkul bruker ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994092"},"en egen browserslist-config")," internt, og det er anbefalt at du bruker den samme i prosjektet ditt."),"\n",l.createElement(t.p,null,"Etter å ha lagt til pakken som en ",l.createElement(t.code,null,"devDependency")," bruker du den ved å legge til ",l.createElement(t.code,null,"browserslist"),"-feltet i ",l.createElement(t.code,null,"package.json"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'{\n    "browserslist": ["extends @fremtind/browserslist-config-jkl"]\n}\n')),"\n",l.createElement(t.h3,null,"Polyfills"),"\n",l.createElement(t.p,null,"All kode blir transpilert til å støtte nettleserne i ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994092"},"browserslist"),", men det ",l.createElement(t.em,null,"kan")," være brukt funksjonalitet som ikke støttes i alle nettlesere uten å laste inn en ",l.createElement(t.em,null,"polyfill"),". Disse polyfillene vil i så fall dokumenteres her."),"\n",l.createElement(t.p,null,"I skrivende stund er det ingen polyfills som trengs, etter at vi ",l.createElement(t.a,{href:"/preview/feat/comboboxCtrl+A/blog/jokul-dropper-ie-stotte/"},"droppet støtte for Internet Explorer 11"),"."),"\n",l.createElement(t.h4,null,"Testing library"),"\n",l.createElement(t.p,null,"Det er en feil i ",l.createElement(t.code,null,"@testing-library")," sin håndtering av Web Components hvis en test feiler. Det vil kunne vi en evig løkke som skriver ut stack trace til terminalen helt til terminalen tryner. Legg til dette i ",l.createElement(t.code,null,"setupTests.ts")," dersom du bruker Jest."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js"},'import { configure } from "@testing-library/react";\nimport prettier from "prettier";\n\nconfigure({\n    getElementError: (message, container) => {\n        return new Error(\n            [\n                message,\n                prettier.format(container.innerHTML, {\n                    parser: "html",\n                    htmlWhitespaceSensitivity: "ignore",\n                }),\n            ]\n                .filter(Boolean)\n                .join("\\n\\n"),\n        );\n    },\n});\n')),"\n",l.createElement(t.h3,null,"Skjemaverktøy"),"\n",l.createElement(t.h4,null,"React Hook Form"),"\n",l.createElement(t.p,null,"Mange team i Fremtind velger å bruke ",l.createElement(t.a,{href:"https://react-hook-form.com"},"React Hook Form")," for å gjøre skjemavalidering."),"\n",l.createElement(t.p,null,"Skjemakomponentene i Jøkul skal kunne brukes med ",l.createElement(t.code,null,"react-hook-form")," på en enkel måte.\nI praksis betyr det at de skal fungere som ",l.createElement(t.em,null,"uncontrolled components")," så ",l.createElement(t.a,{href:"https://react-hook-form.com/get-started#Registerfields"},"register"),"\nkan brukes i stedet for ",l.createElement(t.a,{href:"https://react-hook-form.com/get-started#IntegratingControlledInputs"},"Controller"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'import React, { FC } from "react";\nimport { useForm } from "react-hook-form";\nimport { PrimaryButton } from "@fremtind/jkl-button-react";\nimport { RadioButtonGroup, RadioButton } from "@fremtind/jkl-radio-button-react";\n\ntype FormValues = {\n    housetype: string;\n};\n\ntype Props = {\n    onSubmit: () => void;\n};\n\nconst HouseDetailsForm: FC<Props> = ({ onSubmit }) => {\n    const { register, handleSubmit } = useForm<FormValues>();\n\n    return (\n        <form onSubmit={handleSubmit(onSubmit)}>\n            <RadioButtonGroup legend="Hvilken boligtype?" variant="large">\n                {["Enebolig", "Tomannsbolig", "Rekkehus", "Leilighet"].map((type) => (\n                    <RadioButton {...register("housetype", { required: true })} key={type} label={type} value={type} />\n                ))}\n            </RadioButtonGroup>\n            <PrimaryButton type="submit">Gå videre</PrimaryButton>\n        </form>\n    );\n};\n\nexport default HouseDetailsForm;\n')),"\n",l.createElement(t.p,null,"Enkelte komponenter kan likevel trenge ",l.createElement(t.code,null,"Controller")," i en overgangsperiode. Om du kommer over en komponent som fortsatt krever\n",l.createElement(t.code,null,"Controller")," må du gjerne ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues"},"lage et issue på GitHub"),", og veldig gjerne ",l.createElement(t.a,{href:"/preview/feat/comboboxCtrl+A/guider/utvikling#pull-requests"},"komme med en pull request"),"!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'import React, { FC } from "react";\nimport { useForm, Controller } from "react-hook-form";\nimport { PrimaryButton } from "@fremtind/jkl-button-react";\nimport { Select } from "@fremtind/jkl-select-react";\n\ntype FormValues = {\n    housetype: string;\n};\n\ntype Props = {\n    onSubmit: () => void;\n};\n\nconst AddressForm: FC<Props> = ({ onSubmit }) => {\n    const { register, handleSubmit } = useForm<FormValues>();\n\n    return (\n        <form onSubmit={handleSubmit(onSubmit)}>\n            <Controller\n                control={control}\n                name="currency"\n                defaultValue="USD"\n                render={({ field: { onChange, value, ref } }) => (\n                    <Select\n                        ref={ref}\n                        label="Valuta"\n                        items={["USD", "EUR", "JPY"]}\n                        onChange={onChange}\n                        value={value}\n                        width="6rem"\n                    />\n                )}\n            />\n            <PrimaryButton type="submit">Gå videre</PrimaryButton>\n        </form>\n    );\n};\n\nexport default AddressForm;\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(72285),s=n(22756),m=n(95573),c=n(1634);const u=e=>{let{pageContext:t}=e;return l.createElement(s.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:r.versions})),l.createElement(m.w5,o),a,s&&l.createElement(i.l,{types:s}))};function p(e){return l.createElement(d,e,l.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return k}});var r=n(78217),l=n(41994),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),l=n.n(r),a=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return m}});var r=n(53484),l=n(3438),a=n(84490),o=n(26372),i=n.n(o),s=n(70079);const m=e=>{let{children:t,title:n,className:o,startExpanded:m=!1,onClick:c,...u}=e;const d=(0,l.M)("title"),p=(0,l.M)("content"),{0:k,1:g}=(0,s.useState)(m),[f]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return s.createElement("div",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":k})},s.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":p,onClick:e=>{const t=!k;g(t),c&&c(e,t)}},n,s.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),s.createElement("div",{id:p,ref:f,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},s.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return u}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),m=n(66169),c=n(94509);const u=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(c.S,null,u.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&d&&r.createElement(c.S,null,r.createElement(i.p,{colSpan:u.length},d)),p.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":u[t],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);