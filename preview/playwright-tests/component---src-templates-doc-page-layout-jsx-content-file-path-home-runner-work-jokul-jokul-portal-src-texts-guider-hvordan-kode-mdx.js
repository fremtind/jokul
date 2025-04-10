"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4412],{77564:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return k}});var l=t(47160),r=t(70079);function a(e){const n=Object.assign({h1:"h1",p:"p",em:"em",a:"a",h2:"h2",ul:"ul",li:"li",ol:"ol",code:"code",pre:"pre",h3:"h3",h4:"h4",strong:"strong"},(0,l.ah)(),e.components),{InfoMessageBox:t,WarningMessageBox:a}=n;return t||o("InfoMessageBox",!0),a||o("WarningMessageBox",!0),r.createElement(r.Fragment,null,r.createElement(n.h1,null,"Slik skriver du kode til Jøkul"),"\n",r.createElement(n.p,null,"Så bra du vil skrive Jøkul-kode! 🥳"),"\n",r.createElement(n.p,null,"Jøkul er et fellesprosjekt for alle i Fremtind. Det vil si at det også er ",r.createElement(n.em,null,"ditt"),"."),"\n",r.createElement(n.p,null,"Å programmere i Jøkul er ganske likt annen frontendprogrammering. Forskjellen fra når du lager en ",r.createElement(n.em,null,"app")," er at vi lager ",r.createElement(n.em,null,"bibliotek")," som brukes i apper. I praksis vil du sjeldent merke noen stor forskjell, med mindre du skal lage helt nye pakker eller jobbe med infrastrukturen i Jøkul."),"\n",r.createElement(n.p,null,"Før du setter i gang er det lurt å ha sett på ",r.createElement(n.a,{href:"/preview/playwright-tests/guider/hvordan-endre-jokul"},"Bidra til designsystemet"),"."),"\n",r.createElement(n.p,null,"Vi har også egne stilguider for ",r.createElement(n.a,{href:"/preview/playwright-tests/stilguide/sass"},"Sass")," og ",r.createElement(n.a,{href:"/preview/playwright-tests/stilguide/react"},"React"),"."),"\n",r.createElement(n.p,null,"Om du er usikker på noe eller står fast er det kort vei til å få hjelp på ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/discussions/categories/sp%C3%B8rsm%C3%A5l-og-svar"},"Discussions"),", Support Designsystem på Teams, eller ved å spørre noen på designsystemforum."),"\n",r.createElement(n.h2,null,"Utviklingsmiljø"),"\n",r.createElement(n.p,null,"Dette må være installert på maskinen for å jobbe i Jøkul:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://nodejs.org/en/download/"},"Node")," Long Term Support release (LTS)"),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://pnpm.io/installation/"},"pnpm")),"\n",r.createElement(n.li,null,r.createElement(n.a,{href:"https://git-scm.com"},"Git")," 2.0.0 eller nyere"),"\n"),"\n",r.createElement(n.p,null,"Når maskinen er klar er det tre steg for å komme i gang:"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"Klon ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul"},"Jøkul-biblioteket")," fra GitHub (du kan lage deg en fork om du ikke har tilgang, eller høre med nærmeste leder om å bli lagt til i GitHub-organisasjonen)"),"\n",r.createElement(n.li,null,"Lag en ny branch basert på ",r.createElement(n.code,null,"main"),"-branchen"),"\n",r.createElement(n.li,null,"Bygg prosjektet med kommandoen ",r.createElement(n.code,null,"pnpm boot")),"\n"),"\n",r.createElement(n.h2,null,"Her finner du pakkene"),"\n",r.createElement(n.p,null,"Alle komponentene er organisert under mappen ",r.createElement(n.em,null,r.createElement(n.a,{href:"https://github.com/fremtind/jokul/tree/main/packages"},"packages")),". De som slutter på ",r.createElement(n.code,null,"-react")," er React-pakker. De som ikke har en endelse, er stilpakker."),"\n",r.createElement(n.p,null,"Grunnen til at vi deler opp i React- og stilpakker er for å kunne la for eksempel et CMS som ikke bruker React fremdeles bruke Jøkul-stiler."),"\n",r.createElement(n.h2,null,"Eksempel på en endring"),"\n",r.createElement(n.p,null,"La oss si at vi savner en ",r.createElement(n.em,null,"prop")," fra en av typedefinisjonene i Jøkul. ",r.createElement(n.code,null,"LoaderProps")," mangler muligheten for å gi den en ",r.createElement(n.code,null,"id"),". Hvordan legger vi den til?"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-ts"},"export interface LoaderProps {\n    // TODO: legg til ID-prop\n    className?: string;\n}\n")),"\n",r.createElement(n.p,null,"Før vi gjør en endring er det greit å sjekke at vi har en oppdatert ",r.createElement(n.code,null,"main"),"-branch. Om det er første gang vi gjør en endring i Jøkul må vi ha kjørt ",r.createElement(n.code,null,"pnpm boot"),"."),"\n",r.createElement(n.h3,null,"Gjør endringen på en ny branch"),"\n",r.createElement(n.p,null,"Med oppdatert ",r.createElement(n.code,null,"main")," er det klart for å lage en branch:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-sh"},"$ git checkout -b feat/loader-id\n")),"\n",r.createElement(n.p,null,"Her har vi valgt å se på dette som en ny ",r.createElement(n.em,null,"feature"),". Om dette hadde vært en bugfix ville det vært naturlig å starte branchnavnet med ",r.createElement(n.code,null,"fix/"),"."),"\n",r.createElement("aside",{className:"jkl-portal-paragraph"},r.createElement(t,{role:"none presentation",fullWidth:!0},r.createElement("p",{className:"small"},r.createElement(n.p,null,"Ikke bruk mye tid på branchnavnet! Det viktiste er at du finner igjen branchen din senere om du skulle\ntrenge det.")))),"\n",r.createElement(n.p,null,"Med branchen vår klar er det på tide å gjøre endringen:"),"\n",r.createElement(n.pre,null,r.createElement(n.code,{className:"language-ts"},"export interface LoaderProps {\n    id?: string;\n    className?: string;\n}\n")),"\n",r.createElement(n.p,null,"Før vi lager en commit er det lurt å sjekke at endringen vår ikke har ødelagt noe. For å være ",r.createElement(n.em,null,"helt")," sikker kan du kjøre kommandoene ",r.createElement(n.code,null,"pnpm build")," og ",r.createElement(n.code,null,"pnpm ci:test")," på toppnivå i Jøkul (altså ",r.createElement(n.code,null,"./"),", ikke i mappen ",r.createElement(n.code,null,"./packages/loader-react"),"). Det kan ta litt tid."),"\n",r.createElement(n.p,null,"I akkurat dette tilfellet har vi bare endret en typedefinisjon, så det holder å kjøre ",r.createElement(n.code,null,"pnpm typecheck"),". Hvis det ikke kommer noen feilmeldinger er alt klart for å lage en commit."),"\n",r.createElement(n.h3,null,"Visuelle regresjonstester"),"\n",r.createElement(n.p,null,"De aller fleste komponentene i Jøkul har visuelle regresjonstester, for å ha en måte å fange opp uventede visuelle endringer. Disse testene baserer seg på ",r.createElement(n.em,null,"snapshots"),". Snapshots er skjermbilder av komponentens eksempler, tatt av ",r.createElement(n.a,{href:"https://www.cypress.io"},"Cypress"),". Cypress sammenligner utseendet på branchen din med disse skjermbildene."),"\n",r.createElement(n.p,null,"Hvis du gjør en villet endring i utseendet til en komponent må mappen ",r.createElement(n.code,null,"<pakkenavn>-react/integration/__image_snapshots__")," slettes. GitHub Actions vil generere nye snapshots for deg."),"\n",r.createElement(n.p,null,"I vårt tilfelle er det ingen visuell endring, så vi hopper over dette steget."),"\n",r.createElement("aside",{className:"jkl-portal-paragraph"},r.createElement(t,{role:"none presentation",fullWidth:!0},r.createElement("p",{className:"small"},r.createElement(n.p,null,"Siden skjermbilder tas av eksemplene må du også slette snapshots om du for eksempel endrer navn eller\nrekkefølge på spakene som styrer eksempelet.")))),"\n",r.createElement(n.h4,null,"Kort om enhetstester"),"\n",r.createElement(n.p,null,"I dette eksempelet hopper vi over enhetstester, men for en endring som fikser en bug eller legger til funksjonalitet ville vi ha skrevet noen. Enhetstester skal ligge sammen med komponenten, med filnavn på formen ",r.createElement(n.code,null,"<MinKomponent>.test.tsx")," eller ",r.createElement(n.code,null,"<minFunksjon>.test.ts"),"."),"\n",r.createElement(n.p,null,"Enhetstestene skal sikre at nøkkelfunksjonaliteten til komponenten virker. For eksempel kan testene for en knapp sjekke at den blir rendret til DOM, og at den kaller riktig funksjon når man klikker på den."),"\n",r.createElement(n.p,null,"Vi bruker ",r.createElement(n.a,{href:"https://jestjs.io/"},"Jest")," som test runner og ",r.createElement(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro"},"React testing library")," for å håndtere React-komponenter."),"\n",r.createElement(n.h3,null,"Lag en commit"),"\n",r.createElement(n.p,null,"Til å lage commits bruker vi kommandoen ",r.createElement(n.code,null,"pnpm commit"),". Grunnen til det er at commitmeldingene brukes for å generere changelogs og versjonsnummer basert på ",r.createElement(n.a,{href:"https://semver.org"},"Semantic Versioning"),". Det kan vi gjøre fordi ",r.createElement(n.code,null,"pnpm commit")," formaterer commitmeldinger på en spesiell måte kalt ",r.createElement(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),". Hvis en commitmelding starter med ",r.createElement(n.code,null,"feat:")," vil det automatisk lages en ",r.createElement(n.em,null,"minor"),"-release av pakken som ble endret."),"\n",r.createElement("aside",{className:"jkl-portal-paragraph"},r.createElement(a,{role:"none presentation",fullWidth:!0},r.createElement("p",{className:"small"},r.createElement(n.p,null,"Bruk ",r.createElement("code",null,"pnpm commit")," for å lage commits!")))),"\n",r.createElement(n.p,null,"Når vi kjører ",r.createElement(n.code,null,"pnpm commit")," startes det en veiviser. Her blir du bedt om å velge hvilken type endring vi har gjort. I vårt tilfelle velger vi ",r.createElement(n.code,null,"feat:"),". Du kan skrive typen, eller velge med piltastene. Trykk Enter."),"\n",r.createElement(n.p,null,"Neste trinn i veiviseren er ",r.createElement(n.em,null,"commit-tittelen"),". Her skriver du kort hva som er gjort, for eksempel ",r.createElement(n.code,null,"la til id i LoaderProps"),". Trykk Enter."),"\n",r.createElement(n.p,null,"Neste trinn er en valgfri ",r.createElement(n.em,null,"commit body"),". Her vil mange kanskje foretrekke å bare trykke Enter og heller gjøre en ",r.createElement(n.code,null,"git commit --amend")," senere for å bruke en annen editor for å skrive. Vi trykker bare Enter og går videre."),"\n",r.createElement(n.p,null,"Vi blir spurt om vi har noen ",r.createElement(n.strong,null,"BREAKING CHANGES"),". Vi har ikke det denne gangen. Hvis du ",r.createElement(n.em,null,"har")," det, beskriv dem her. Hvis en commitmelding har ",r.createElement(n.code,null,"BREAKING CHANGE:")," i ",r.createElement(n.em,null,"footeren")," vil det automatisk lages en ",r.createElement(n.em,null,"major"),"-release av pakken som ble endret."),"\n",r.createElement(n.p,null,"Til slutt blir vi spurt om å liste ",r.createElement(n.em,null,"ISSUES CLOSED"),". Her kan du skrive issue-nummeret fra GitHub (inkludert ",r.createElement(n.code,null,"#"),", f. eks. ",r.createElement(n.code,null,"#1234"),") dersom endringen din vil gjøre at et issue kan lukkes."),"\n",r.createElement(n.h3,null,"Del branchen din"),"\n",r.createElement(n.p,null,"Puh! Det var en del steg. Alt dette er for at automatikken ved publisering skal fungere riktig."),"\n",r.createElement(n.p,null,"Nå kan du pushe endringen din og åpne en pull request."),"\n",r.createElement(n.h2,null,"Pull requests"),"\n",r.createElement(n.p,null,"Pull requests (PR) lager du ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/compare"},"på GitHub"),". Vanligvis er det ",r.createElement(n.code,null,"main"),"-branchen du setter som ",r.createElement(n.em,null,"base"),", og branchen med endringene dine du setter som ",r.createElement(n.em,null,"compare"),"."),"\n",r.createElement(n.p,null,"Når du lager en PR blir du vist et skjema med en mal som kan fylles ut. Det er supert om du gir en kort beskrivelse av innholdet i pull requesten, og lenker til relevante issues og discussions. Sjekk gjerne også av punktene i sjekklisten ved å endre ",r.createElement(n.code,null,"[ ]")," til ",r.createElement(n.code,null,"[x]"),"."),"\n",r.createElement("aside",{className:"jkl-portal-paragraph"},r.createElement(t,{role:"none presentation",fullWidth:!0,title:"Sender du en pull request fra en fork?"},r.createElement("p",{className:"small"},r.createElement(n.p,null,"Sett ",r.createElement("code",null,"external-contributions")," som ",r.createElement("i",null,"base")," for pull requesten, så loser en maintainer koden\nvidere til ",r.createElement("code",null,"main"),".")))),"\n",r.createElement(n.p,null,"Ta gjerne en titt på ",r.createElement(n.em,null,"Labels")," og se om noen av dem er relevante for pull requesten din. Som ",r.createElement(n.em,null,"Reviewers")," kan du bruke forslagene fra GitHub om du vil, eller velge en kollega fra teamet ditt."),"\n",r.createElement(n.h3,null,"Automatiske sjekker"),"\n",r.createElement(n.p,null,"GitHub fanger opp når det lages en pull request, eller det pushes endringer til en branch som har en åpen PR. Når dette skjer kjøres det en ",r.createElement(n.em,null,"workflow")," på GitHub Actions. Workflowen sørger for å bygge prosjektet, kjøre enhetstester, visuelle regresjonstester, og publisere en forhåndsvisning av ",r.createElement(n.a,{href:"https://jokul.fremtind.no"},"jokul.fremtind.no")," med endringene dine."),"\n",r.createElement(n.p,null,"Du kan følge med på workflowen ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/actions/workflows/pull_request.yml"},"i Actions-fanen på GitHub"),". Der kan du også se at kjøretiden for hele workflowen vanligvis ligger på mellom ",r.createElement(n.strong,null,"15-20 minutter"),"."),"\n",r.createElement(n.h3,null,"Hvem skal godkjenne pull requesten?"),"\n",r.createElement(n.p,null,"Vi har ikke noen regler for ",r.createElement(n.em,null,"hvem")," som skal godkjenne en endring, annet enn at minst én kollega må gi en ",r.createElement(n.em,null,"Approve")," og at de automatiske sjekkene må kjøre uten feil. Hvis du gjør en stor endring eller introduserer en ny komponent er det fint om du venter litt så flere får muligheten til å gjøre en review. Bruk magefølelsen!"),"\n",r.createElement(n.p,null,"Jøkul-teamet får varsler i GitHub når det kommer nye pull requests og kommer kanskje med en review uoppfordret, men sett gjerne ",r.createElement(n.code,null,"wkillerud")," og ",r.createElement(n.code,null,"piofinn")," eksplisitt som reviewers. Du trenger ikke vente på at alle reviewers gir svar."),"\n",r.createElement(n.h3,null,"Hvor lenge må du vente?"),"\n",r.createElement(n.p,null,"Hvor lang tid det tar fra en pull request blir laget til den er reviewet og merget varierer, men de fleste vil bli reviewet og merget innen en arbeidsdag. Hvis en pull request introduserer en ny komponent eller større endringer kan det ta noen dager med iterasjoner før en pull request blir godkjent og merget."),"\n",r.createElement(n.h2,null,"Publisering av endringer"),"\n",r.createElement(n.p,null,"Når en pull request merges til ",r.createElement(n.code,null,"main")," skjer det en automatisk publisering. Her får vi endelig uttelling for jobben som blir gjort med å skrive commit-meldinger på måten vi gjør i ",r.createElement(n.a,{href:"#lag-en-commit"},"Lag en commit"),"."),"\n",r.createElement(n.p,null,"Vi bruker ",r.createElement(n.a,{href:"https://github.com/fremtind/jokul/actions/workflows/release.yml"},"GitHub Actions")," på en liknende måte som ved pull requests. Når workflowen er ferdig finner du oppdaterte pakker på ",r.createElement(n.a,{href:"https://www.npmjs.com/search?q=keywords%3Afremtind"},"npmjs.com")," og ",r.createElement(n.a,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"GitHub Packages"),". Versjonsnummeret blir bestemt av Lerna, som bruker commitmeldingene for å bestemme om det skal lages en ny ",r.createElement(n.em,null,"major"),", ",r.createElement(n.em,null,"minor"),", eller ",r.createElement(n.em,null,"patch"),"-versjon. Pakkenes ",r.createElement(n.code,null,"CHANGELOG.md")," blir oppdatert med innholdet fra commitmeldinger. I tillegg har det blitt publisert en oppdatert versjon av ",r.createElement(n.a,{href:"https://jokul.fremtind.no"},"jokul.fremtind.no"),"."),"\n",r.createElement(n.h2,null,"Kort om infrastrukturen til Jøkul"),"\n",r.createElement(n.p,null,"Vi organiserer koden i et monorepo og bruker ",r.createElement(n.a,{href:"https://github.com/lerna/lerna"},"Lerna")," for å holde kontroll på de individuelle pakkene i repositoriet. Hver enkelt pakke følger ",r.createElement(n.a,{href:"https://semver.org"},"semantisk versjonering"),". Nye versjoner og Changelog blir automatisk generert fra commit-loggen basert på ",r.createElement(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional commits"),"."),"\n",r.createElement(n.p,null,"Dokumentasjon skrives i ",r.createElement(n.code,null,"MDX"),"-filer, og disse ligger i egne ",r.createElement(n.code,null,"documentation"),"-mapper sammen med koden til pakkene. Dokumentasjon som ikke har med komponenter å gjøre ligger i ",r.createElement(n.code,null,"portal"),"-mappen, under ",r.createElement(n.code,null,"src/texts"),". All dokumentasjonen leses av ",r.createElement(n.a,{href:"https://www.gatsbyjs.com/"},"Gatsby"),", som genererer ",r.createElement(n.a,{href:"https://jokul.fremtind.no"},"jokul.fremtind.no"),". Siden publiseres med GitHub Pages."),"\n",r.createElement(n.h3,null,"Slik lager du en ny pakke"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"Gå til rot, kjør kommandoen ",r.createElement(n.code,null,"pnpm scaffold"),", og følg instruksene i terminalen."),"\n",r.createElement(n.li,null,"Etter kommandoen har kjørt vil det være opprettet to mapper i packages mappen (komponent-navn og komponent-navn-react)."),"\n"),"\n",r.createElement(n.p,null,"Vi har noen minstekrav til dokumentasjon som den nye komponenten din ",r.createElement(n.strong,null,"må")," følge. Disse kravene gjelder dokumentasjonen som vises under Komponenter. I tillegg ",r.createElement(n.strong,null,"må")," det ligge en Figma-branch klar til å merges inn i ",r.createElement(n.a,{href:"https://www.figma.com/file/y9JtTf3whfTCHCdYSUXVQ5/J%C3%B8kul-bibliotek-2.0?node-id=0%3A1"},"Jøkul-biblioteket")," som dokumenterer komponenten og alle varianter. Tiden mellom merging av kode og merging av design må være så kort som mulig."),"\n",r.createElement(n.p,null,r.createElement(n.strong,null,"Må"),"-krav:"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Ingress med kort beskrivelse av komponenten"),"\n",r.createElement(n.li,null,"Første eksempel synlig uten å scrolle"),"\n",r.createElement(n.li,null,"Relevante eksempler på riktig og feil bruk"),"\n",r.createElement(n.li,null,"Live kodeeksempel (oppdateres med valgte egenskaper)"),"\n",r.createElement(n.li,null,"React-props for komponentene i bunnen"),"\n"),"\n",r.createElement(n.p,null,"I tillegg har vi noen ",r.createElement(n.em,null,"vil"),"-ønsker. Disse er det fint om du har med fordi de gjør det lettere for andre å bruke komponenten, men de er ikke et krav."),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"Kontrollspørsmål for bruk"),"\n",r.createElement(n.li,null,"Lenker til relevante eller alternative komponenter der det er naturlig"),"\n",r.createElement(n.li,null,"Eksempler på bruk ute i teamene"),"\n"),"\n",r.createElement(n.p,null,"Du kan se på dokumentasjonen for ",r.createElement(n.a,{href:"/preview/playwright-tests/komponenter/tag"},"Tag")," og ",r.createElement(n.a,{href:"/preview/playwright-tests/komponenter/alertmessage"},"Alert message")," for inspirasjon."),"\n",r.createElement(n.h3,null,"Slik lenker du pakker sammen"),"\n",r.createElement(n.p,null,"Hvis du vil legge til en pakke i en annen, installerer du den som en vanlig avhengighet."),"\n",r.createElement(n.h3,null,"Slik legger du til en avhengighet"),"\n",r.createElement(n.p,null,"Det finnes avhengigheter på ulike nivåer i Jøkul. Globale avhengigheter, for eksempel de som trengs til å kjøre en byggejobb, ligger på rotnivå. Du kan legge til en ny pakke på rotnivå, med kommandoen ",r.createElement(n.code,null,"pnpm add pakke -w"),". For å legge til som en utviklingsavhengighet bruker du ",r.createElement(n.code,null,"-w -D"),"."),"\n",r.createElement(n.p,null,'Lokale avhengigheter, som trengs for at en pakke skal fungere i bruk, legger vi vanligvis på pakkenivå. Se "Slik lenker du pakker sammen". Bruk kommandoen ',r.createElement(n.code,null,"pnpm add")," for å legge til pakker som ikke er en del av Jøkul. Alternativt kan du bruke ",r.createElement(n.a,{href:"https://github.com/lerna/lerna/tree/main/commands/add#readme"},r.createElement(n.code,null,"lerna add")),". Før du gjør det, er det lurt å tenke på om de skal sendes med komponenten eller om brukeren av komponenten har ansvaret for å ha avhengigheten i sitt prosjekt. React bør for eksempel være en ",r.createElement(n.code,null,"peerDependency"),", slik at brukeren ikke ender opp med flere utgaver av React i sin pakke."))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(a,e)):a(e)};function o(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=t(72285),s=t(22756),c=t(95573),u=t(1634);const d=e=>{let{pageContext:n}=e;return r.createElement(s.p,{title:n.title})},p=e=>{let{location:n,data:t,pageContext:l,children:a}=e;const{frontmatter:i}=t.page,{types:o}=l;return r.createElement(u.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},r.createElement(c.M1,Object.assign({},i,{versions:l.versions})),r.createElement(c.w5,i),a,o&&r.createElement(m.l,{types:o}))};function k(e){return r.createElement(p,e,r.createElement(i,e))}},72285:function(e,n,t){t.d(n,{l:function(){return k}});var l=t(58820),r=t(63571),a=t(87505),i=t(70079),o=t(54656);const m=e=>i.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},u=(e,n)=>{const{scrollLeft:t,scrollWidth:l}=e,{clientWidth:r}=n,a=t>0,i=l-t>r;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",i)},d=e=>{const n=e.target,t=n.parentElement;u(n,t)},p=e=>{let{props:n}=e;const t=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&u(n,e)}}))})),l=t.current.parentElement.parentElement;n.observe(l,{attributes:!0,attributeFilter:["hidden"]})}}),[]),i.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},i.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},i.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(l=n,l.map((e=>{var n,t;return[e.name?m(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?m(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?m(e.type.name):""]})))})));var l},k=e=>{let{types:n}=e;return i.createElement("section",{className:"mb-104 jkl-portal-paragraph"},i.createElement("h2",{className:"heading-1 mt-104"},"React API"),i.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),i.createElement(l.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const l=t.props?Object.values(t.props).filter(c):[],a=t.props?Object.values(t.props).filter(s):[],m=(e=>{var n,t,l,r,a,i;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(l=e.description)||void 0===l?void 0:l.split("\n").map((e=>" * "+e)).join("\n")," *",null===(r=e.tags)||void 0===r||null===(a=r.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(i=e.tags)&&void 0!==i&&i.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return i.createElement(r.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},m&&i.createElement(o.dn,{className:"jkl-portal-code-block"},m),l.length>0&&i.createElement(p,{props:l}),a.length>0&&i.createElement(i.Fragment,null,i.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),i.createElement(p,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return m}});var l=t(26372),r=t.n(l),a=t(49597),i=t(70079),o=t(34044);const m=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:l}=(0,i.useContext)(o.R),m="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return i.createElement(a.E.main,{initial:{y:l?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:l?0:-20,opacity:0},transition:{duration:l||m?0:.35},className:r()("jkl-portal__main",n),id:"innhold"},t)}},58820:function(e,n,t){t.d(n,{U:function(){return i}});var l=t(35250),r=t(26372),a=t.n(r);const i=e=>{let{className:n,density:t,id:r,...i}=e;return(0,l.jsx)("section",{role:"group","data-testid":"jkl-accordion",className:a()("jkl-accordion",n),"data-density":t,id:r,...i})}},63571:function(e,n,t){t.d(n,{Q:function(){return s}});var l=t(35250),r=t(68998),a=t(1386),i=t(26372),o=t.n(i),m=t(70079);const s=e=>{let{children:n,title:t,className:i,startExpanded:s=!1,onClick:c,id:u,...d}=e;const[p,k]=(0,m.useState)(s),[g]=(0,m.useState)((()=>s)),{detailsRef:E,summaryRef:v,contentRef:f,onSummaryClick:h}=(0,a.E)({onOpenChange:(e,n)=>{k(e),c&&c(n,e)},isExpanded:g});return(0,l.jsxs)("details",{"data-testid":"jkl-accordion-item",...d,className:o()("jkl-accordion-item",i),ref:E,id:u,children:[(0,l.jsxs)("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:h,ref:v,children:[t,(0,l.jsx)(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!p,bold:p})]}),(0,l.jsx)("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:f,children:(0,l.jsx)("div",{className:"jkl-accordion-item__content",children:n})})]})}},87505:function(e,n,t){t.d(n,{w:function(){return u}});var l=t(70079),r=t(41699),a=t(65174),i=t(6914),o=t(82546),m=t(39126),s=t(66169),c=t(94509);const u=(0,l.forwardRef)(((e,n)=>{let{caption:t,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...g}=e;return l.createElement(r.i,{fullWidth:!0,...g,ref:n},t&&l.createElement(i.R,{srOnly:!0},t),l.createElement(m.s,null,l.createElement(c.S,null,u.map(((e,n)=>l.createElement(s.x,{key:n,density:"compact",bold:!0},e))))),l.createElement(a.R,null,0===p.length&&d&&l.createElement(c.S,null,l.createElement(o.p,{colSpan:u.length},d)),p.map(((e,n)=>l.createElement(c.S,{key:n},e.map(((e,n)=>l.createElement(o.p,{key:n,"data-th":u[n],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);