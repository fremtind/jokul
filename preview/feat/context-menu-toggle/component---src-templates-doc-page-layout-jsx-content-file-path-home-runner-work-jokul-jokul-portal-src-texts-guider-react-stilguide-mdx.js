"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5168],{52198:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return d},Head:function(){return p},default:function(){return u}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",em:"em",h3:"h3",h4:"h4",code:"code",pre:"pre",strong:"strong",ul:"ul",li:"li"},(0,r.ah)(),e.components),{Ingress:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Ingress",!0),l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Stilguide for React"),"\n",l.createElement(n,null,"Lurer du på hvordan du skal begynne med React-kode i Jøkul?"),"\n",l.createElement(t.h2,null,"Funksjonelle komponenter"),"\n",l.createElement(t.p,null,"Vi skriver funksjonelle komponenter med ",l.createElement(t.a,{href:"https://reactjs.org/docs/hooks-intro.html"},"hooks"),", ikke ",l.createElement(t.em,null,"class components"),". Hver komponent skrives som regel i sin egen fil, med noen få unntak."),"\n",l.createElement(t.h3,null,"Props eller ",l.createElement(t.em,null,"composite components"),"?"),"\n",l.createElement(t.p,null,"Når man lager komplekse komponenter vil man måtte vurdere om det er riktig med én komponent som tar inn mange props, eller om man skal bryte opp i flere komponenter."),"\n",l.createElement(t.p,null,"Det vil variere fra gang til gang hva som gir mening. Som regel vil det å bryte opp i flere komponenter gi en ",l.createElement(t.em,null,"større fleksibilitet"),", men det gjør også at komponenten får ",l.createElement(t.em,null,"mindre kontroll"),"."),"\n",l.createElement(t.p,null,"Hvis du er usikker, foretrekk én komponent med props."),"\n",l.createElement(t.h4,null,"Kontroll versus fleksibilitet"),"\n",l.createElement(t.p,null,"Det er for eksempel enklere for en skjemakomponent å sørge for at en utvikler gir en ",l.createElement(t.code,null,"label")," dersom dette er en ",l.createElement(t.em,null,"prop"),", i stedet for at vi har en egen ",l.createElement(t.code,null,"<Label>"),"-komponent som kanskje eller kanskje ikke blir brukt."),"\n",l.createElement(t.h4,null,"Props enklere å oppdage"),"\n",l.createElement(t.p,null,"Med et moderne uvtiklingsverktøy vil ",l.createElement(t.em,null,"props")," ofte dukke opp i editoren til utviklere og hjelpe med å oppdage og bruke features i komponenten. Hverken verktøy eller utviklere kan bruke komponenter de ikke vet finnes."),"\n",l.createElement(t.h3,null,"Rest parameters"),"\n",l.createElement(t.p,null,"Komponenter bør ta i mot ",l.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters"},"rest parameters"),", gjerne kalt ",l.createElement(t.em,null,"rest props")," i React-verden. Disse bør ",l.createElement(t.em,null,"spreades")," på det første elementet i render-treet."),"\n",l.createElement(t.p,null,"Med rest props blir det mulig for brukerne av komponenten å sende inn for eksempel ",l.createElement(t.code,null,"data"),"-attributter eller andre native HTML-attributter uten at disse er eksplisitt lagt inn i Jøkul."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {\n    external?: boolean;\n}\n\nexport const Link: FC<LinkProps> = (props) => {\n    const { className, children, external = false, ...rest } = props;\n    return (\n        <a\n            {...rest}\n            className={cn("jkl-link", className, {\n                "jkl-link--external": external,\n            })}\n        >\n            {children}\n        </a>\n    );\n};\n')),"\n",l.createElement(t.h4,null,"Rest props kan gi uventede resultater"),"\n",l.createElement(t.p,null,"Noen ganger er det viktig at brukerne av komponenten ikke kan overstyre en prop satt av komponenten. Det er lurt å tenke over hvor på elementet du sprer propsene."),"\n",l.createElement(t.p,null,"Her er et eksempel fra ",l.createElement(t.code,null,"AlertMessage"),". Vi setter ",l.createElement(t.code,null,'data-theme="light"')," fordi bakgrunnsfargen i meldingsboksen gjør at tekstfargen som vanligvis brukes i mørkt tema får for dårlig kontrast. Her vil vi fjerne muligheten for at en bruker kan overstyre propen."),"\n",l.createElement(t.p,null,"Her er et eksempel hvor det kan gå galt."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},'<div data-theme="light" {...rest}>\n')),"\n",l.createElement(t.p,null,"Hvis ",l.createElement(t.code,null,"rest")," har en prop ",l.createElement(t.code,null,'data-theme: "dark"')," vil propen vår bli overstyrt."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-jsx"},'<div {...rest} data-theme="light">\n')),"\n",l.createElement(t.p,null,"I eksempelet over derimot vil vår egen ",l.createElement(t.code,null,"data-theme"),"-prop overstyre hva enn som ligger i ",l.createElement(t.code,null,"...rest"),", siden vår prop kommer til sist."),"\n",l.createElement(t.p,null,"Med andre ord, gjør ",l.createElement(t.code,null,"{...rest}")," ",l.createElement(t.strong,null,"før")," props som ikke skal kunne endres av brukeren. Om du er i tvil, legg ",l.createElement(t.code,null,"{...rest}")," før alle andre props."),"\n",l.createElement(t.h3,null,"Context over drilling"),"\n",l.createElement(t.p,null,"I pakker hvor vi har flere komponenter som jobber sammen, for eksempel i ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/packages/table"},"packages/table"),", kan det skje at en ",l.createElement(t.em,null,"parent component")," ønsker å sette props på noen av sine ",l.createElement(t.em,null,"children"),". I disse tilfellene skal det brukes ",l.createElement(t.a,{href:"https://reactjs.org/docs/context.html"},"Context"),"."),"\n",l.createElement(t.p,null,"Det ",l.createElement(t.strong,null,"skal ikke")," finnes props i en komponent sin typedefinisjon som settes automatisk av en annen komponent over den i komponenttreet. Dette er for å unngå forvirring hvor en utvikler setter en sånn prop til noe i sin kode, men opplever at den overskrives av Jøkul."),"\n",l.createElement(t.h3,null,"Typedefinisjoner"),"\n",l.createElement(t.p,null,"I Jøkul bruker vi TypeScript for å kode komponenter og støtteverktøy. Alle komponenter og funksjoner skal være typet."),"\n",l.createElement(t.p,null,"Komponenter sine props skal være definert som et ",l.createElement(t.code,null,"interface"),". Interfacenavnet er etter mønsteret ",l.createElement(t.code,null,"KomponentnavnProps"),"."),"\n",l.createElement(t.p,null,"Interfacet skal eksporteres, så det er tilgjengelig for brukerne av komponenten. Eventuelle egne typer skal også eksporteres. Alle typer starter med stor forbokstav."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},'export type LoaderVariant = "small" | "medium" | "large";\n\nexport interface LoaderProps {\n    className?: string;\n    variant?: LoaderVariant;\n    textDescription: string;\n    /* ... */\n}\n\n/* ... */\n\nexport const Loader = (props: LoaderProps): JSX.Element  => (\n  /* ... */\n);\n')),"\n",l.createElement(t.h3,null,"Eksporter fra pakkens index"),"\n",l.createElement(t.p,null,"Alle komponenter og typer skal eksporteres fra pakkens ",l.createElement(t.code,null,"main"),", typisk ",l.createElement(t.code,null,"index.ts")," på rotnivå i pakken."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-ts"},'export type { DataTableProps } from "./DataTable";\nexport { DataTable } from "./DataTable";\nexport type { TableProps } from "./Table";\nexport { Table } from "./Table";\n/* Og så videre */\n')),"\n",l.createElement(t.h2,null,"Tester"),"\n",l.createElement(t.p,null,"Komponenter skal ha enhetstester skrevet i Jest. Testene bør minst dekke ",l.createElement(t.em,null,"happy path")," slik at vi kan fange opp eventuelle regresjoner."),"\n",l.createElement(t.p,null,"Minst én av testene må være for å sjekke etter mangler rundt universell utforming med ",l.createElement(t.a,{href:"https://github.com/nickcolley/jest-axe#readme"},"jest-axe"),". Husk at det kan være UU-mangler selv om ",l.createElement(t.code,null,"axe")," ikke finner feil – verktøyet fanger opp langt fra alt, og tester ",l.createElement(t.em,null,"bare")," øyeblikkstilstanden til komponenten. Om komponenten har flere states, gjør en ",l.createElement(t.code,null,"axe"),"-test per state."),"\n",l.createElement(t.p,null,"Til slutt må komponenten ha en visuell regresjonstest. Til det bruker vi Cypress. Cypress-testen bruker det samme eksempelet som vises i portalen, og det bør være en test for hver mulige tilstand i eksempelet. Se på eksisterende tester (alle filnavnene slutter på ",l.createElement(t.code,null,".spec.js"),") for inspirasjon."),"\n",l.createElement(t.h2,null,"Dokumentasjon"),"\n",l.createElement(t.p,null,"Dokumentasjonen for portalen hentes fra de ulike pakkene. Alle React-pakker har en ",l.createElement(t.code,null,"documentation"),"-mappe hvor det typisk ligger en ",l.createElement(t.code,null,"Komponentnavn.mdx"),"-fil, sammen med én elle flere ",l.createElement(t.code,null,"KomponentnavnExample.tsx"),"-filer. Når du lager dokumentasjon lønner det seg å kjøre en utviklingsversjon av hele portalen, altså kjøre ",l.createElement(t.code,null,"pnpm dev")," fra rotnivå av Jøkul-prosjektet."),"\n",l.createElement(t.p,null,"Minstekrav til dokumentasjon i portalen er:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Kort ingress med komponentens formål"),"\n",l.createElement(t.li,null,"Et interaktivt eksempel rett under ingressen"),"\n",l.createElement(t.li,null,"Beskrive noen prinsipper for riktig og feil bruk"),"\n",l.createElement(t.li,null,"Kodeeksempel som oppdaterer seg etter valgene som er gjort i eksempelet (",l.createElement(t.code,null,"knobs"),")"),"\n",l.createElement(t.li,null,"React-props dokumentert i bunnen av siden (dette bygges automatisk fra typedefinisjonene)"),"\n"),"\n",l.createElement(t.p,null,"Se på eksisterende komponentsider for inspirasjon."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)};var s=n(72285),i=n(22756),m=n(95573),c=n(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(i.p,{title:t.title})},d=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:i}=r;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:r.versions})),l.createElement(m.w5,o),a,i&&l.createElement(s.l,{types:i}))};function u(e){return l.createElement(d,e,l.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return u}});var r=n(78217),l=n(41994),a=n(87505),o=n(70079);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),i=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},c=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},p=e=>{const t=e.target,n=t.parentElement;c(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&c(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:p,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},u=e=>{let{types:t}=e;return o.createElement("section",{className:"jkl-spacing-104--bottom jkl-portal-paragraph"},o.createElement("h2",{className:"jkl-heading-1 jkl-spacing-104--top"},"React API"),o.createElement("p",{className:"jkl-body jkl-spacing-16--top"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"jkl-spacing-40--top jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(m):[],a=n.props?Object.values(n.props).filter(i):[];return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},r.length>0&&o.createElement(d,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return i}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),s=n(34044);const i=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(s.R),i="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||i?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},78217:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(26372),l=n.n(r),a=n(70079);const o=e=>{let{className:t,density:n,...r}=e;return a.createElement("div",{"data-testid":"jkl-accordion",className:l()("jkl-accordion",t),"data-density":n,...r})}},41994:function(e,t,n){n.d(t,{Q:function(){return m}});var r=n(53484),l=n(3438),a=n(84490),o=n(26372),s=n.n(o),i=n(70079);const m=e=>{let{children:t,title:n,className:o,startExpanded:m=!1,onClick:c,...p}=e;const d=(0,l.M)("title"),u=(0,l.M)("content"),{0:k,1:v}=(0,i.useState)(m),[E]=(0,a.v)(k,{easing:"exit",timing:"expressive"});return i.createElement("div",{"data-testid":"jkl-accordion-item",...p,className:s()("jkl-accordion-item",o,{"jkl-accordion-item--expanded":k})},i.createElement("button",{id:d,className:"jkl-accordion-item__title",type:"button","aria-expanded":k,"aria-controls":u,onClick:e=>{const t=!k;v(t),c&&c(e,t)}},n,i.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!k,bold:k})),i.createElement("div",{id:u,ref:E,"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",role:"group","aria-labelledby":d,hidden:!k},i.createElement("div",{className:"jkl-accordion-item__content"},t)))}},87505:function(e,t,n){n.d(t,{w:function(){return p}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),s=n(82546),i=n(39126),m=n(66169),c=n(94509);const p=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:d,rows:u,verticalAlign:k,...v}=e;return r.createElement(l.i,{fullWidth:!0,...v,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(i.s,null,r.createElement(c.S,null,p.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===u.length&&d&&r.createElement(c.S,null,r.createElement(s.p,{colSpan:p.length},d)),u.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(s.p,{key:t,"data-th":p[t],verticalAlign:k},e))))))))}));p.displayName="DataTable"}}]);