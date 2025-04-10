"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4721],{94716:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return k}});var r=n(33156),l=n(7378);function a(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",h3:"h3",pre:"pre",code:"code",strong:"strong",h4:"h4",em:"em"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Hvordan lage et nytt prosjekt med Jøkul"),"\n",l.createElement(t.p,null,"Når du skal bruke Jøkul i et nytt prosjekt er det en del å huske på."),"\n",l.createElement(t.h2,null,"Designer som skal lage et nytt prosjekt?"),"\n",l.createElement(t.p,null,"Nye skisser i Figma trenger bare sørge for at Jøkul sitt komponentbibliotek er i bruk under Assets. Etter det blir Jøkul tilgjengelig i skissene dine."),"\n",l.createElement(t.p,null,"Resten av denne guiden retter seg mot utviklere."),"\n",l.createElement(t.h2,null,"Pakker"),"\n",l.createElement(t.p,null,"Om du skal bygge et nytt prosjekt med Jøkul er det noen grunnleggende pakker du alltid må ha installert:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994094"},"@fremtind/jkl-core")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994096"},"@fremtind/jkl-webfonts")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994092"},"@fremtind/browserslist-config-jkl")),"\n"),"\n",l.createElement(t.p,null,"I tillegg har vi ",l.createElement(t.a,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"pakker for mange ulike komponenter"),", og noen pakker med hjelpefunksjoner for ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994095"},"validering"),", ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/1267242"},"formatering"),", og nyttige ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/1011338"},"React hooks"),". Det er lettere å få oversikt over komponentene og hva de gjør under ",l.createElement(t.a,{href:"/preview/4421-deprecate-accordion-in-docs/komponenter/accordion"},"Komponenter"),"."),"\n",l.createElement(t.h3,null,"Installer avhengigheter"),"\n",l.createElement(t.p,null,"For å installere det grunnleggende:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sh"},"npm i @fremtind/jkl-core @fremtind/jkl-webfonts\nnpm i @fremtind/browserslist-config-jkl\n")),"\n",l.createElement(t.h3,null,"Kort om de forskjellige pakkene i Jøkul"),"\n",l.createElement(t.p,null,"Jøkuls kode er delt inn i ",l.createElement(t.a,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"mange pakker"),", typisk to pakker per komponent."),"\n",l.createElement(t.p,null,"Hvorfor to?"),"\n",l.createElement(t.p,null,"Vi skiller på CSS-pakker og React-pakker i Jøkul. Du kan bruke komponentene i Jøkul som rene stilark dersom prosjektet ditt ikke bruker React, for eksempel om du skal bruke Jøkul i et CMS. Alle CSS-stilark finnes i både minifisert og uminifisert utgave. Sørg for å bruke den minifiserte i produksjon."),"\n",l.createElement(t.p,null,"Det er sterkt anbefalt å bruke React-komponentene om du overhode har mulighet."),"\n",l.createElement(t.p,null,"Hvis du bruker React-komponenten blir stilpakken automatisk installert som en avhengighet. Du trenger med andre ord ",l.createElement(t.strong,null,"ikke både React- og stilpakken i")," ",l.createElement(t.code,null,"package.json"),"."),"\n",l.createElement(t.h4,null,"Et eksempel på bruk av en komponent"),"\n",l.createElement(t.p,null,"Ta ",l.createElement(t.a,{href:"/preview/4421-deprecate-accordion-in-docs/komponenter/accordion"},"Accordion")," som et eksempel. Skal du bruke React-komponenten installerer du den med ",l.createElement(t.code,null,"npm i @fremtind/jkl-accordion-react")," og får automatisk med riktig versjon av ",l.createElement(t.code,null,"@fremtind/jkl-accordion")," som en avhengighet. Dersom du bare bruker stilpakken, installerer du den med ",l.createElement(t.code,null,"npm i @fremtind/jkl-accordion"),"."),"\n",l.createElement(t.p,null,"Når du skal ta i bruk en React-komponent trenger du å laste inn både stilen og komponenten. Hvis du har satt opp en CSS-loader i prosjektet ditt kan du importere stilen direkte i TypeScript. Du kan også velge å importere den i en av dine ",l.createElement(t.code,null,".scss"),"- eller ",l.createElement(t.code,null,".css"),"-filer."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-ts"},'import "@fremtind/jkl-core/core.min.css";\nimport "@fremtind/jkl-accordion/accordion.min.css";\nimport { Accordion, AccordionItem } from "@fremtind/jkl-accordion";\n')),"\n",l.createElement(t.h2,null,"Initialisering"),"\n",l.createElement(t.p,null,"For at komponentene i Jøkul skal virke riktig trenger de å vite om brukeren navigerer i løsningen med mus, tastatur eller touch. Det gjøres ved å kjøre ",l.createElement(t.code,null,"initTabListener")," funksjonen fra ",l.createElement(t.code,null,"@fremtind/jkl-core"),". Det trengs bare gjøres én gang, helst så tidlig som det lar seg gjøre. Normalt vil det være i entrypointet i applikasjonen din."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"initTabListener")," ser på hvordan siden interageres med – museklikk, tastetrykk, eller touch – og setter automatisk et ",l.createElement(t.code,null,"data"),"-attributt på ",l.createElement(t.code,null,"<body>"),", som Jøkul bruker til blant annet å vise enda tydeligere fokusringer ved tastaturnavigasjon."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'import { initTabListener } from "@fremtind/jkl-core";\n\ninitTabListener();\n')),"\n",l.createElement(t.h2,null,"Klassen ",l.createElement(t.code,null,"jkl")),"\n",l.createElement(t.p,null,"For at CSSen i Jøkul skal fungere som forventet må du sette klassen ",l.createElement(t.code,null,"jkl")," på rotnivå i applikasjonen din."),"\n",l.createElement(t.p,null,"Vi bruker ",l.createElement(t.code,null,"jkl"),"-klassen til å blant annet:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Sette riktige fonter."),"\n",l.createElement(t.li,null,"Gi standardfarger til tekst og bakgrunn."),"\n",l.createElement(t.li,null,"Noen CSS resets."),"\n"),"\n",l.createElement(t.p,null,"Du har kanskje en komponent som heter ",l.createElement(t.code,null,"Layout")," eller ",l.createElement(t.code,null,"App")," hvor du kan sette denne klassen? Om du er usikker, sett klassen på ",l.createElement(t.code,null,"body"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'import React, { FC } from "react";\nimport { WithChildren } from "@fremtind/jkl-core";\n\nexport const Layout: FC<WithChildren> = ({ children }) => {\n    return <div className="jkl">{children}</div>;\n};\n')),"\n",l.createElement(t.h3,null,"Bruk med Sass"),"\n",l.createElement(t.p,null,"Om du bruker Sass-stilark i prosjektet ditt er dette den enkleste måten å få riktige fonter. I rot-",l.createElement(t.code,null,".scss"),"-filen din:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-scss"},'@use "@fremtind/jkl-webfonts/webfonts.scss" with (\n    $webfonts-dir: "../relative/path/to/node_modules/@fremtind/jkl-webfonts/fonts"\n);\n')),"\n",l.createElement(t.p,null,"Variabelen ",l.createElement(t.code,null,"$webfonts-dir")," angir hvor filene ligger. Hvis den ikke spesifiseres vil stilarket se etter fontfilene i mappen ",l.createElement(t.code,null,"/fonts"),"."),"\n",l.createElement(t.h3,null,"Bruk med CSS"),"\n",l.createElement(t.p,null,"Om du ikke bruker Sass kan du benytte deg av den vanlige ",l.createElement(t.code,null,".css"),"-versjonen. Denne versjonen ser kun etter fontfilene i mappen ",l.createElement(t.code,null,"/fonts"),". Om du vil legge fontfilene et annet sted må du kopiere CSS-filen ",l.createElement(t.code,null,"node_modules/@fremtind/jkl-webfonts/webfonts.css")," og legge den inn i prosjektet ditt. Deretter må du endre url-en i hver ",l.createElement(t.code,null,"@font-face"),"-definisjon manuelt så det stemmer med hvor fontfilene dine ligger:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-css"},'@font-face {\n    font-family: "Fremtind Grotesk";\n    font-display: fallback;\n    font-weight: normal;\n    font-style: normal;\n    src: local("Fremtind Grotesk"),\n        /* Endre de to neste linjene så de stemmer */\n            url("/relative/path/to/font/files/FremtindGrotesk-Regular-Web.woff2") format("woff2"), url("/relative/path/to/font/files/FremtindGrotesk-Regular-Web.woff")\n            format("woff");\n}\n')),"\n",l.createElement(t.h2,null,"Konfigurasjon"),"\n",l.createElement(t.p,null,"Mange av utviklerverktøyene i frontendverden kan lese en ",l.createElement(t.a,{href:"https://github.com/browserslist/browserslist"},"browserslist")," og automatisk sørge for å optimalisere koden som bygges og til slutt ender opp hos brukerne våre. Jøkul bruker ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994092"},"en egen browserslist-config")," internt, og det er anbefalt at du bruker den samme i prosjektet ditt."),"\n",l.createElement(t.p,null,"Etter å ha lagt til pakken som en ",l.createElement(t.code,null,"devDependency")," bruker du den ved å legge til ",l.createElement(t.code,null,"browserslist"),"-feltet i ",l.createElement(t.code,null,"package.json"),":"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-json"},'{\n    "browserslist": ["extends @fremtind/browserslist-config-jkl"]\n}\n')),"\n",l.createElement(t.h3,null,"Polyfills"),"\n",l.createElement(t.p,null,"All kode blir transpilert til å støtte nettleserne i ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/packages/994092"},"browserslist"),", men det ",l.createElement(t.em,null,"kan")," være brukt funksjonalitet som ikke støttes i alle nettlesere uten å laste inn en ",l.createElement(t.em,null,"polyfill"),". Disse polyfillene vil i så fall dokumenteres her."),"\n",l.createElement(t.p,null,"I skrivende stund er det ingen polyfills som trengs, etter at vi ",l.createElement(t.a,{href:"/preview/4421-deprecate-accordion-in-docs/blog/jokul-dropper-ie-stotte/"},"droppet støtte for Internet Explorer 11"),"."),"\n",l.createElement(t.h4,null,"Testing library"),"\n",l.createElement(t.p,null,"Det er en feil i ",l.createElement(t.code,null,"@testing-library")," sin håndtering av Web Components hvis en test feiler. Det vil kunne vi en evig løkke som skriver ut stack trace til terminalen helt til terminalen tryner. Legg til dette i ",l.createElement(t.code,null,"setupTests.ts")," dersom du bruker Jest."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-js"},'import { configure } from "@testing-library/react";\nimport prettier from "prettier";\n\nconfigure({\n    getElementError: (message, container) => {\n        return new Error(\n            [\n                message,\n                prettier.format(container.innerHTML, {\n                    parser: "html",\n                    htmlWhitespaceSensitivity: "ignore",\n                }),\n            ]\n                .filter(Boolean)\n                .join("\\n\\n"),\n        );\n    },\n});\n')),"\n",l.createElement(t.h3,null,"Skjemaverktøy"),"\n",l.createElement(t.h4,null,"React Hook Form"),"\n",l.createElement(t.p,null,"Mange team i Fremtind velger å bruke ",l.createElement(t.a,{href:"https://react-hook-form.com"},"React Hook Form")," for å gjøre skjemavalidering."),"\n",l.createElement(t.p,null,"Skjemakomponentene i Jøkul skal kunne brukes med ",l.createElement(t.code,null,"react-hook-form")," på en enkel måte.\nI praksis betyr det at de skal fungere som ",l.createElement(t.em,null,"uncontrolled components")," så ",l.createElement(t.a,{href:"https://react-hook-form.com/get-started#Registerfields"},"register"),"\nkan brukes i stedet for ",l.createElement(t.a,{href:"https://react-hook-form.com/get-started#IntegratingControlledInputs"},"Controller"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'import React, { FC } from "react";\nimport { useForm } from "react-hook-form";\nimport { PrimaryButton } from "@fremtind/jkl-button-react";\nimport { RadioButtonGroup, RadioButton } from "@fremtind/jkl-radio-button-react";\n\ntype FormValues = {\n    housetype: string;\n};\n\ntype Props = {\n    onSubmit: () => void;\n};\n\nconst HouseDetailsForm: FC<Props> = ({ onSubmit }) => {\n    const { register, handleSubmit } = useForm<FormValues>();\n\n    return (\n        <form onSubmit={handleSubmit(onSubmit)}>\n            <RadioButtonGroup legend="Hvilken boligtype?" variant="large">\n                {["Enebolig", "Tomannsbolig", "Rekkehus", "Leilighet"].map((type) => (\n                    <RadioButton {...register("housetype", { required: true })} key={type} label={type} value={type} />\n                ))}\n            </RadioButtonGroup>\n            <PrimaryButton type="submit">Gå videre</PrimaryButton>\n        </form>\n    );\n};\n\nexport default HouseDetailsForm;\n')),"\n",l.createElement(t.p,null,"Enkelte komponenter kan likevel trenge ",l.createElement(t.code,null,"Controller")," i en overgangsperiode. Om du kommer over en komponent som fortsatt krever\n",l.createElement(t.code,null,"Controller")," må du gjerne ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/issues"},"lage et issue på GitHub"),", og veldig gjerne ",l.createElement(t.a,{href:"/preview/4421-deprecate-accordion-in-docs/guider/utvikling#pull-requests"},"komme med en pull request"),"!"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'import React, { FC } from "react";\nimport { useForm, Controller } from "react-hook-form";\nimport { PrimaryButton } from "@fremtind/jkl-button-react";\nimport { Select } from "@fremtind/jkl-select-react";\n\ntype FormValues = {\n    housetype: string;\n};\n\ntype Props = {\n    onSubmit: () => void;\n};\n\nconst AddressForm: FC<Props> = ({ onSubmit }) => {\n    const { register, handleSubmit } = useForm<FormValues>();\n\n    return (\n        <form onSubmit={handleSubmit(onSubmit)}>\n            <Controller\n                control={control}\n                name="currency"\n                defaultValue="USD"\n                render={({ field: { onChange, value, ref } }) => (\n                    <Select\n                        ref={ref}\n                        label="Valuta"\n                        items={["USD", "EUR", "JPY"]}\n                        onChange={onChange}\n                        value={value}\n                        width="6rem"\n                    />\n                )}\n            />\n            <PrimaryButton type="submit">Gå videre</PrimaryButton>\n        </form>\n    );\n};\n\nexport default AddressForm;\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(68888),s=n(47672),c=n(52948),m=n(38776),u=n(20919);const d=e=>{let{pageContext:t}=e;return l.createElement(s.G,{title:t.title})},p=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(u.D,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.Ao,Object.assign({},o,{versions:r.versions})),l.createElement(c.A,{variant:"komponent",component:o.title}),l.createElement(m.f6,o),a,s&&l.createElement(i.N,{types:s}))};function k(e){return l.createElement(p,e,l.createElement(o,e))}},68888:function(e,t,n){n.d(t,{N:function(){return k}});var r=n(88635),l=n(24408),a=n(78022),o=n(7378),i=n(45371);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},u=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},d=e=>{const t=e.target,n=t.parentElement;u(t,n)},p=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&u(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.b,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},k=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.n,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(c):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.A,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.NG,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},52948:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(77800),l=n(38316),a=n(7378),o=n(45371);const i=e=>{let{variant:t,component:n}=e;return a.createElement("section",{className:"suggestion-block"},a.createElement("div",{className:"suggestion-block__content"},a.createElement(l.u,null),a.createElement(o.fz,null,s[t].text)),a.createElement(r.N,{href:s[t].link+"+<"+n+"/>",className:"suggestion-block__link",target:"_blank","aria-label":"Åpne skjema for innspill i ny fane"},"Gi oss tilbakemelding"))},s={komponent:{text:"Har du innspill til komponenten?",link:"https://github.com/fremtind/jokul/issues/new?labels=✨+Forslag&template=innspill-komponent.yml&title=%5BInnspill+til+komponent%5D%3A+"}}},20919:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(3698),l=n.n(r),a=n(94270),o=n(7378),i=n(79197);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.M),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.P.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},88635:function(e,t,n){n.d(t,{n:function(){return s}});var r=n(45271),l=n(86106),a=n(3698),o=n.n(a);const i=["className","density","id"],s=e=>{let{className:t,density:n,id:a}=e,s=(0,r.A)(e,i);return(0,l.jsx)("section",Object.assign({role:"group","data-testid":"jkl-accordion",className:o()("jkl-accordion",t),"data-density":n,id:a},s))}},24408:function(e,t,n){n.d(t,{A:function(){return u}});var r=n(45271),l=n(86106),a=n(21197),o=n(82455),i=n(3698),s=n.n(i),c=n(7378);const m=["children","title","className","startExpanded","onClick","id"],u=e=>{let{children:t,title:n,className:i,startExpanded:u=!1,onClick:d,id:p}=e,k=(0,r.A)(e,m);const[f,g]=(0,c.useState)(u),[E]=(0,c.useState)((()=>u)),{detailsRef:b,summaryRef:h,contentRef:v,onSummaryClick:j}=(0,o.$)({onOpenChange:(e,t)=>{g(e),d&&d(t,e)},isExpanded:E});return(0,l.jsxs)("details",Object.assign({"data-testid":"jkl-accordion-item"},k,{className:s()("jkl-accordion-item",i),ref:b,id:p,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:j,ref:h,children:[n,(0,l.jsx)(a.l,{className:"jkl-accordion-item__arrow",pointingDown:!f,bold:f})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:v,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]}))}},38316:function(e,t,n){n.d(t,{u:function(){return m}});var r=n(7378),l=n(19767),a=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const m=e=>r.createElement(l.I,((e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({},e),"");m.displayName="QuestionIcon"},78022:function(e,t,n){n.d(t,{b:function(){return b}});var r=n(7378),l=n(10494),a=n(75374),o=n(82462),i=n(60630),s=n(94624),c=n(65759),m=n(21664),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const b=(0,r.forwardRef)(((e,t)=>{var n,u=e,{caption:b,columns:h,emptyTableText:v,rows:j,verticalAlign:y}=u,w=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&k)for(var r of k(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n})(u,["caption","columns","emptyTableText","rows","verticalAlign"]);return r.createElement(l.X,(n=((e,t)=>{for(var n in t||(t={}))f.call(t,n)&&E(e,n,t[n]);if(k)for(var n of k(t))g.call(t,n)&&E(e,n,t[n]);return e})({fullWidth:!0},w),d(n,p({ref:t}))),b&&r.createElement(o.r,{srOnly:!0},b),r.createElement(s.n,null,r.createElement(m.H,null,h.map(((e,t)=>r.createElement(c.A,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.B,null,0===j.length&&v&&r.createElement(m.H,null,r.createElement(i.n,{colSpan:h.length},v)),j.map(((e,t)=>r.createElement(m.H,{key:t},e.map(((e,t)=>r.createElement(i.n,{key:t,"data-th":h[t],verticalAlign:y},e))))))))}));b.displayName="DataTable"}}]);