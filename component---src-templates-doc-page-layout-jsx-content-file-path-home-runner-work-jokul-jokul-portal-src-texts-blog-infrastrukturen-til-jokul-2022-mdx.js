"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[5090],{76845:function(e,t,n){n.r(t),n.d(t,{DocPageLayout:function(){return u},Head:function(){return p},default:function(){return d}});var r=n(47160),l=n(70079);function a(e){const t=Object.assign({p:"p",code:"code",em:"em",a:"a",h2:"h2",pre:"pre",h3:"h3",ul:"ul",li:"li",strong:"strong"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Fredag 4. mars holdt jeg en kort presentasjon om infrastrukturen til Jøkul for ansatte i Fremtind. Det var en lyninnføring i monorepo og verktøyene vi bruker for å gå fra kode på ",l.createElement(t.code,null,"localhost")," til endringen er i produksjon."),"\n",l.createElement(t.p,null,"Dette er en oppsummering for de som ikke fikk med seg presentasjonen ",l.createElement(t.em,null,"live"),". Fremtind-ansatte kan også finne et opptak av presentasjonen under Fagtimen."),"\n",l.createElement(t.p,null,"Her er ",l.createElement(t.a,{href:"https://www.figma.com/file/tUnhcpsbsdJz1LNT0153I7/Fagtime-om-infrastrukturen-til-J%C3%B8kul?node-id=0%3A1"},"FigJamen jeg brukte")," underveis i presentasjonen om du vil bla litt i den selv:"),"\n",l.createElement("iframe",{style:{border:"1px solid rgba(0, 0, 0, 0.1)"},width:"800",height:"450",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FtUnhcpsbsdJz1LNT0153I7%2FFagtime-om-infrastrukturen-til-J%25C3%25B8kul%3Fnode-id%3D0%253A1",allowfullscreen:!0}),"\n",l.createElement(t.h2,null,"Lyninnføring i monorepo"),"\n",l.createElement(t.p,null,"Koden til Jøkul er organisert som et ",l.createElement(t.em,null,"monorepo")," i repositoriet ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/"},"fremtind/jokul")," på GitHub."),"\n",l.createElement(t.p,null,"Kort fortalt går idéen om et monorepo ut på at man samler flere selvstendige men relaterte prosjekter i det samme Git-repositoriet. Det gjør det enklere å gjøre endringer på tvers av disse prosjektene, men gir noen unike utfordringer."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://monorepo.tools"},"Monorepo.tools")," har en fin oversikt om du vil lære litt mer."),"\n",l.createElement(t.p,null,"For Jøkul sin del betyr det at vi har en samling med selvstendige pakker i mappen ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/packages"},"packages"),", i tillegg til ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/tree/main/portal"},"portalen"),". Pakkene (og portalen) er organisert med ",l.createElement(t.a,{href:"https://classic.yarnpkg.com/en/docs/workspaces"},"Yarn workspaces")," slik at pakker som avhenger av hverandre i monorepoet alltid bruker den lokale versjonen, ikke versjonen som er publisert på NPM. Det gjør det mye enklere å teste endringer."),"\n",l.createElement(t.p,null,"I tillegg finner du en ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/package.json"},"package.json")," på rotnivå i repositoriet. Her samler vi avhengigheter, konfigurasjon og scripts som gjelder for ",l.createElement(t.em,null,"alle")," pakkene."),"\n",l.createElement(t.h2,null,"La oss gjøre en endring"),"\n",l.createElement(t.p,null,"La oss følge en tenkt endring hvor vi legger til en ID-prop i ",l.createElement(t.code,null,"LoaderProps"),"-interfacet:"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-tsx"},"export interface LoaderProps {\n    id?: string; // Denne!\n    className?: string;\n}\n")),"\n",l.createElement(t.h3,null,"Kjør bygg og tester"),"\n",l.createElement(t.p,null,"Når endringen er gjort må vi sjekke at vi ikke har innført noen feil. Det gjør vi ved å kjøre ",l.createElement(t.code,null,"yarn build")," og ",l.createElement(t.code,null,"yarn ci:test")," fra ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/package.json"},"rotnivå"),". Hva skjer da?"),"\n",l.createElement(t.p,null,"Hver pakke har sitt eget ",l.createElement(t.code,null,"build"),"-script som beskriver hvordan den pakken bygges. På rotnivå ber vi ",l.createElement(t.a,{href:"https://turborepo.org"},"Turborepo")," ta seg av kjøringen av disse scriptene."),"\n",l.createElement(t.p,null,"Turborepo bygger pakker i riktig rekkefølge, og cacher resultatet mellom bygg. Hvis en pakke ikke har noen endringer så kjøres heller ikke bygget. Det sparer oss for potensielt mye tid, siden et bygg av alle pakker tar et par minutter."),"\n",l.createElement(t.p,null,"Byggscriptene ute i pakkene ser for det meste ganske like ut."),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Reactpakkene bruker ",l.createElement(t.a,{href:"https://rollupjs.org/guide/en/"},"Rollup")," og ",l.createElement(t.a,{href:"https://babeljs.io"},"Babel")," for å kompilere TypeScript til JavaScript."),"\n",l.createElement(t.li,null,"Stilpakkene bruker ",l.createElement(t.a,{href:"https://gulpjs.com"},"Gulp")," for å kompilere ",l.createElement(t.a,{href:"https://sass-lang.com"},"Sass")," til CSS"),"\n"),"\n",l.createElement(t.p,null,"Enhetstesting gjøres med ",l.createElement(t.a,{href:"https://jestjs.io"},"Jest"),", og linting med ",l.createElement(t.a,{href:"https://eslint.org"},"ESLint")," og ",l.createElement(t.a,{href:"https://stylelint.io"},"Stylelint"),". Til slutt gjør testscriptet en typesjekk med ",l.createElement(t.a,{href:"https://www.typescriptlang.org/tsconfig/#noEmit"},"TypeScript"),"."),"\n",l.createElement(t.h3,null,"Lag en commit"),"\n",l.createElement(t.p,null,"I Jøkul bruker vi ",l.createElement(t.a,{href:"https://github.com/commitizen/cz-cli"},"Commitizen")," for å få strukturerte commitmeldinger i et spesielt format, ",l.createElement(t.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),". Formatet bruker vi senere for å automatisk beregne riktig versjonsnummer når endringen skal publiseres, og for å legge til commitmeldingene i pakkens changelog."),"\n",l.createElement(t.p,null,"Vi har en egen kommando, ",l.createElement(t.code,null,"yarn commit"),", som tar deg gjennom en veiviser, sånn at du slipper å tenke på formatering."),"\n",l.createElement(t.p,null,"Før commiten lages kjøres det et par kommandoer i en precommit-hook, satt opp med ",l.createElement(t.a,{href:"https://github.com/typicode/husky"},"Husky")," og ",l.createElement(t.a,{href:"https://github.com/okonet/lint-staged"},"lint-staged"),". Hooken kjører ",l.createElement(t.a,{href:"https://commitlint.js.org/"},"Commitlint")," og ",l.createElement(t.a,{href:"https://prettier.io"},"Prettier"),", i tillegg til ",l.createElement(t.a,{href:"https://eslint.org"},"ESLint")," og ",l.createElement(t.a,{href:"https://stylelint.io"},"Stylelint"),' med "auto-fix" skrudd på. Dette er en ekstra liten sikkerhetssjekk, og sørger for at all koden i Jøkul følger det samme formatet uten at utviklere trenger å tenke noe på det.'),"\n",l.createElement(t.h2,null,"Hva skjer under en pull request?"),"\n",l.createElement(t.p,null,"Pull requests sjekkes av en ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/.github/workflows/pull_request.yml"},"workflow på GitHub Actions"),". Den gjør en hel del ting i bakgrunnen for å sikre at det ikke har skjedd noe uventet."),"\n",l.createElement(t.p,null,"Workflowen gjør en rask sjekk for å se om det er endret noen filer som gjør at vi trenger en grundig sjekk. Hvis det for eksempel bare er endret litt på en tekst i en Readme-fil så trenger vi ikke kjøre alle mulige slags tester."),"\n",l.createElement(t.p,null,"I eksempelet vårt gjør vi endring i TypeScript, så da blir det ",l.createElement(t.em,null,"full pakke")," 🍕"),"\n",l.createElement(t.h3,null,"Actions bygger"),"\n",l.createElement(t.p,null,"Actions bygger pakkene med ",l.createElement(t.a,{href:"https://turborepo.org"},"Turborepo")," på samme måte som på ",l.createElement(t.code,null,"localhost"),". Så bygger den portalen."),"\n",l.createElement(t.p,null,"Portalen er laget med ",l.createElement(t.a,{href:"https://www.gatsbyjs.com"},"Gatsby")," for å kunne bruke React-komponentene fra Jøkul for å bygge statiske nettsider. Innholdet kommer for det meste fra ",l.createElement(t.code,null,".mdx"),"-filer rundtomkring, som er Markdown med React-støtte."),"\n",l.createElement(t.h3,null,"Actions tester"),"\n",l.createElement(t.p,null,"Actions kjører de samme testene som vi gjorde lokalt, men i tillegg kjøres visuelle regresjonstester med ",l.createElement(t.a,{href:"https://www.cypress.io"},"Cypress"),". Cypress-testene fordeles i en matrise med fem ",l.createElement(t.em,null,"runners"),". Hver runner kjører en versjon av portalen som nettop ble bygget."),"\n",l.createElement(t.p,null,"For hver test tar Cypress et skjermbilde og sammenligner med et skjermbilde som ligger i Git. På den måten fanger vi opp uforventede endringer."),"\n",l.createElement(t.h3,null,"Actions forhåndsviser"),"\n",l.createElement(t.p,null,"Til slutt bygger Actions også en versjon av portalen med en annen URL, og denne publiseres på ",l.createElement(t.a,{href:"https://pages.github.com"},"GitHub Pages"),' som et slags "staging-miljø" så vi kan forhåndsvise endringer.'),"\n",l.createElement(t.p,null,"Hvis alle automatiske tester går OK og du får en godkjent review av en kollega er det klart for å merge."),"\n",l.createElement(t.h2,null,"Automatisert publisering"),"\n",l.createElement(t.p,null,"Når en pull request merges er det ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/blob/main/.github/workflows/release.yml"},"release-workflowen")," som tar over. Det er her ",l.createElement(t.a,{href:"https://github.com/lerna/lerna"},"Lerna")," kommer inn og sjekker Git-historikken sammenlignet med forrige publisering. Hele denne workflowen går uten at et menneske er involvert 🤖"),"\n",l.createElement(t.h3,null,"Versjonering"),"\n",l.createElement(t.p,null,"Lerna leser ",l.createElement(t.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/"},"commitmeldinger")," for å se om det skal publiseres en ny ",l.createElement(t.a,{href:"https://semver.org"},"SemVer")," ",l.createElement(t.em,null,"patch"),", ",l.createElement(t.em,null,"minor"),", eller ",l.createElement(t.em,null,"major"),". For eksempel:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"BREAKING CHANGE:")," blir til en major"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"feat:")," blir til en minor"),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"fix:")," blir til en patch"),"\n"),"\n",l.createElement(t.p,null,"Det kan være mange commits som samles inn i samme release, og Lerna er smart nok til å velge rett versjon fra samlingen. For eksempel vil en ",l.createElement(t.code,null,"fix")," pluss en ",l.createElement(t.code,null,"BREAKING CHANGE")," totalt sett bli én major-versjon, ikke først en patch og så en major."),"\n",l.createElement(t.p,null,"Når Lerna har beregnet ferdig oppdaterer den alle ",l.createElement(t.code,null,"package.json")," i repoet med de nye versjonsnummerene. Lerna samler også alle commitmeldinger og putter dem i pakkenes changelogs."),"\n",l.createElement(t.h3,null,"Publisering"),"\n",l.createElement(t.p,null,"Ved publisering bygger Actions pakkene på samme måte som før, med Turborepo. Deretter publiserer Lerna de nye pakkene til ",l.createElement(t.a,{href:"https://www.npmjs.com/search?q=keywords%3Afremtind"},"NPM")," og ",l.createElement(t.a,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"GitHub Packages"),"."),"\n",l.createElement(t.p,null,"Til slutt bygger Actions en ny versjon av portalen som publiseres til GitHub Pages."),"\n",l.createElement(t.p,null,"Nå er alt klart til å brukes! 🎉"),"\n",l.createElement(t.h2,null,"Spørsmål som ble stilt"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Hvorfor er det delt i to pakker, en for CSS og en for React?")),"\n",l.createElement(t.p,null,"Det gir en større fleksibilitet. Ikke alle kan bruke React, og om f. eks. React-koden gjør ",l.createElement(t.code,null,'import "./styles.scss"')," for å få stiler ville det lagt ganske kraftige føringer for hvilke byggverktøy som brukes ute i teamene."),"\n",l.createElement(t.h2,null,"Veien videre"),"\n",l.createElement(t.p,null,"Vi undersøker for tiden alternativer til Lerna, siden det dessverre ikke vedlikeholdes og holder oss på Yarn Classic. Du kan følge ",l.createElement(t.a,{href:"https://github.com/fremtind/jokul/discussions/2626"},"diskusjonen på GitHub")," om du vil se mer om alternativene og veien videre."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(72285),s=n(22756),m=n(95573),c=n(1634);const p=e=>{let{pageContext:t}=e;return l.createElement(s.p,{title:t.title})},u=e=>{let{location:t,data:n,pageContext:r,children:a}=e;const{frontmatter:o}=n.page,{types:s}=r;return l.createElement(c.M,{className:"/profil/bildebruk"===t.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(m.M1,Object.assign({},o,{versions:r.versions})),l.createElement(m.w5,o),a,s&&l.createElement(i.l,{types:s}))};function d(e){return l.createElement(u,e,l.createElement(o,e))}},72285:function(e,t,n){n.d(t,{l:function(){return g}});var r=n(58820),l=n(63571),a=n(87505),o=n(70079),i=n(54656);const s=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),m=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((e=>e.fileName.includes("node_modules")))},c=e=>{var t;return null===(t=e.declarations)||void 0===t?void 0:t.some((t=>"children"===e.name||!t.fileName.includes("node_modules")))},p=(e,t)=>{const{scrollLeft:n,scrollWidth:r}=e,{clientWidth:l}=t,a=n>0,o=r-n>l;t.classList.toggle("left-shadow",a),t.classList.toggle("right-shadow",o)},u=e=>{const t=e.target,n=t.parentElement;p(t,n)},d=e=>{let{props:t}=e;const n=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=n.current;if(e&&window.MutationObserver){const t=new window.MutationObserver((t=>{t.forEach((t=>{if("attributes"===t.type&&"hidden"===t.attributeName){const t=e.querySelector(".jkl-portal-api-docs-table__table");t&&p(t,e)}}))})),r=n.current.parentElement.parentElement;t.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:n,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:u,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=t,r.map((e=>{var t,n;return[e.name?s(e.name):"",e.description,null!==(t=e.defaultValue)&&void 0!==t&&t.value?s(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(n=e.type)&&void 0!==n&&n.name?s(e.type.name):""]})))})));var r},g=e=>{let{types:t}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(t).map((e=>{let[t,n]=e;const r=n.props?Object.values(n.props).filter(c):[],a=n.props?Object.values(n.props).filter(m):[],s=(e=>{var t,n,r,l,a,o;return e.description||null!==(t=e.tags)&&void 0!==t&&t.param||null!==(n=e.tags)&&void 0!==n&&n.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(n);return o.createElement(l.Q,{title:t,key:t,className:"jkl-portal-api-docs__item"},s&&o.createElement(i.dn,{className:"jkl-portal-code-block"},s),r.length>0&&o.createElement(d,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(d,{props:a})))}))))}},1634:function(e,t,n){n.d(t,{M:function(){return s}});var r=n(26372),l=n.n(r),a=n(49597),o=n(70079),i=n(34044);const s=e=>{let{className:t,children:n}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),s="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||s?0:.35},className:l()("jkl-portal__main",t),id:"innhold"},n)}},58820:function(e,t,n){n.d(t,{U:function(){return o}});var r=n(35250),l=n(26372),a=n.n(l);const o=e=>{let{className:t,density:n,id:l,...o}=e;return(0,r.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",t),"data-density":n,id:l,...o})}},63571:function(e,t,n){n.d(t,{Q:function(){return m}});var r=n(35250),l=n(68998),a=n(1386),o=n(26372),i=n.n(o),s=n(70079);const m=e=>{let{children:t,title:n,className:o,startExpanded:m=!1,onClick:c,id:p,...u}=e;const[d,g]=(0,s.useState)(m),[k]=(0,s.useState)((()=>m)),{detailsRef:f,summaryRef:h,contentRef:E,onSummaryClick:v}=(0,a.E)({onOpenChange:(e,t)=>{g(e),c&&c(t,e)},isExpanded:k});return(0,r.jsxs)("details",{"data-testid":"jkl-accordion-item",...u,className:i()("jkl-accordion-item",o),ref:f,id:p,children:[(0,r.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:v,ref:h,children:[n,(0,r.jsx)(l.K,{className:"jkl-accordion-item__arrow",pointingDown:!d,bold:d})]}),(0,r.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:E,children:(0,r.jsx)("div",{className:"jkl-accordion-item__content",children:t})})]})}},87505:function(e,t,n){n.d(t,{w:function(){return p}});var r=n(70079),l=n(41699),a=n(65174),o=n(6914),i=n(82546),s=n(39126),m=n(66169),c=n(94509);const p=(0,r.forwardRef)(((e,t)=>{let{caption:n,columns:p,emptyTableText:u,rows:d,verticalAlign:g,...k}=e;return r.createElement(l.i,{fullWidth:!0,...k,ref:t},n&&r.createElement(o.R,{srOnly:!0},n),r.createElement(s.s,null,r.createElement(c.S,null,p.map(((e,t)=>r.createElement(m.x,{key:t,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===d.length&&u&&r.createElement(c.S,null,r.createElement(i.p,{colSpan:p.length},u)),d.map(((e,t)=>r.createElement(c.S,{key:t},e.map(((e,t)=>r.createElement(i.p,{key:t,"data-th":p[t],verticalAlign:g},e))))))))}));p.displayName="DataTable"}}]);