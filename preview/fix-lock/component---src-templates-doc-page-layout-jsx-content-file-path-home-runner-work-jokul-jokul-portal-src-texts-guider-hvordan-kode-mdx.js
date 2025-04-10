"use strict";(self.webpackChunk_fremtind_portal=self.webpackChunk_fremtind_portal||[]).push([[4412],{77564:function(e,n,t){t.r(n),t.d(n,{DocPageLayout:function(){return p},Head:function(){return d},default:function(){return k}});var r=t(47160),l=t(70079);function a(e){const n=Object.assign({h1:"h1",p:"p",em:"em",a:"a",h2:"h2",ul:"ul",li:"li",ol:"ol",code:"code",pre:"pre",h3:"h3",h4:"h4",strong:"strong"},(0,r.ah)(),e.components),{InfoMessageBox:t,WarningMessageBox:a}=n;return t||i("InfoMessageBox",!0),a||i("WarningMessageBox",!0),l.createElement(l.Fragment,null,l.createElement(n.h1,null,"Slik skriver du kode til Jøkul"),"\n",l.createElement(n.p,null,"Så bra du vil skrive Jøkul-kode! 🥳"),"\n",l.createElement(n.p,null,"Jøkul er et fellesprosjekt for alle i Fremtind. Det vil si at det også er ",l.createElement(n.em,null,"ditt"),"."),"\n",l.createElement(n.p,null,"Å programmere i Jøkul er ganske likt annen frontendprogrammering. Forskjellen fra når du lager en ",l.createElement(n.em,null,"app")," er at vi lager ",l.createElement(n.em,null,"bibliotek")," som brukes i apper. I praksis vil du sjeldent merke noen stor forskjell, med mindre du skal lage helt nye pakker eller jobbe med infrastrukturen i Jøkul."),"\n",l.createElement(n.p,null,"Før du setter i gang er det lurt å ha sett på ",l.createElement(n.a,{href:"/preview/fix-lock/guider/hvordan-endre-jokul"},"Bidra til designsystemet"),"."),"\n",l.createElement(n.p,null,"Vi har også egne stilguider for ",l.createElement(n.a,{href:"/preview/fix-lock/stilguide/sass"},"Sass")," og ",l.createElement(n.a,{href:"/preview/fix-lock/stilguide/react"},"React"),"."),"\n",l.createElement(n.p,null,"Om du er usikker på noe eller står fast er det kort vei til å få hjelp på ",l.createElement(n.a,{href:"https://github.com/fremtind/jokul/discussions/categories/sp%C3%B8rsm%C3%A5l-og-svar"},"Discussions"),", Support Designsystem på Teams, eller ved å spørre noen på designsystemforum."),"\n",l.createElement(n.h2,null,"Utviklingsmiljø"),"\n",l.createElement(n.p,null,"Dette må være installert på maskinen for å jobbe i Jøkul:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://nodejs.org/en/download/"},"Node")," Long Term Support release (LTS)"),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://pnpm.io/installation/"},"pnpm")),"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://git-scm.com"},"Git")," 2.0.0 eller nyere"),"\n"),"\n",l.createElement(n.p,null,"Når maskinen er klar er det tre steg for å komme i gang:"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Klon ",l.createElement(n.a,{href:"https://github.com/fremtind/jokul"},"Jøkul-biblioteket")," fra GitHub (du kan lage deg en fork om du ikke har tilgang, eller høre med nærmeste leder om å bli lagt til i GitHub-organisasjonen)"),"\n",l.createElement(n.li,null,"Lag en ny branch basert på ",l.createElement(n.code,null,"main"),"-branchen"),"\n",l.createElement(n.li,null,"Bygg prosjektet med kommandoen ",l.createElement(n.code,null,"pnpm boot")),"\n"),"\n",l.createElement(n.h2,null,"Her finner du pakkene"),"\n",l.createElement(n.p,null,"Alle komponentene er organisert under mappen ",l.createElement(n.em,null,l.createElement(n.a,{href:"https://github.com/fremtind/jokul/tree/main/packages"},"packages")),". De som slutter på ",l.createElement(n.code,null,"-react")," er React-pakker. De som ikke har en endelse, er stilpakker."),"\n",l.createElement(n.p,null,"Grunnen til at vi deler opp i React- og stilpakker er for å kunne la for eksempel et CMS som ikke bruker React fremdeles bruke Jøkul-stiler."),"\n",l.createElement(n.h2,null,"Eksempel på en endring"),"\n",l.createElement(n.p,null,"La oss si at vi savner en ",l.createElement(n.em,null,"prop")," fra en av typedefinisjonene i Jøkul. ",l.createElement(n.code,null,"LoaderProps")," mangler muligheten for å gi den en ",l.createElement(n.code,null,"id"),". Hvordan legger vi den til?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-ts"},"export interface LoaderProps {\n    // TODO: legg til ID-prop\n    className?: string;\n}\n")),"\n",l.createElement(n.p,null,"Før vi gjør en endring er det greit å sjekke at vi har en oppdatert ",l.createElement(n.code,null,"main"),"-branch. Om det er første gang vi gjør en endring i Jøkul må vi ha kjørt ",l.createElement(n.code,null,"pnpm boot"),"."),"\n",l.createElement(n.h3,null,"Gjør endringen på en ny branch"),"\n",l.createElement(n.p,null,"Med oppdatert ",l.createElement(n.code,null,"main")," er det klart for å lage en branch:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-sh"},"$ git checkout -b feat/loader-id\n")),"\n",l.createElement(n.p,null,"Her har vi valgt å se på dette som en ny ",l.createElement(n.em,null,"feature"),". Om dette hadde vært en bugfix ville det vært naturlig å starte branchnavnet med ",l.createElement(n.code,null,"fix/"),"."),"\n",l.createElement("aside",{className:"jkl-portal-paragraph"},l.createElement(t,{role:"none presentation",fullWidth:!0},l.createElement("p",{className:"small"},l.createElement(n.p,null,"Ikke bruk mye tid på branchnavnet! Det viktiste er at du finner igjen branchen din senere om du skulle\ntrenge det.")))),"\n",l.createElement(n.p,null,"Med branchen vår klar er det på tide å gjøre endringen:"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-ts"},"export interface LoaderProps {\n    id?: string;\n    className?: string;\n}\n")),"\n",l.createElement(n.p,null,"Før vi lager en commit er det lurt å sjekke at endringen vår ikke har ødelagt noe. For å være ",l.createElement(n.em,null,"helt")," sikker kan du kjøre kommandoene ",l.createElement(n.code,null,"pnpm build")," og ",l.createElement(n.code,null,"pnpm ci:test")," på toppnivå i Jøkul (altså ",l.createElement(n.code,null,"./"),", ikke i mappen ",l.createElement(n.code,null,"./packages/loader-react"),"). Det kan ta litt tid."),"\n",l.createElement(n.p,null,"I akkurat dette tilfellet har vi bare endret en typedefinisjon, så det holder å kjøre ",l.createElement(n.code,null,"pnpm typecheck"),". Hvis det ikke kommer noen feilmeldinger er alt klart for å lage en commit."),"\n",l.createElement(n.h3,null,"Visuelle regresjonstester"),"\n",l.createElement(n.p,null,"De aller fleste komponentene i Jøkul har visuelle regresjonstester, for å ha en måte å fange opp uventede visuelle endringer. Disse testene baserer seg på ",l.createElement(n.em,null,"snapshots"),". Snapshots er skjermbilder av komponentens eksempler, tatt av ",l.createElement(n.a,{href:"https://www.cypress.io"},"Cypress"),". Cypress sammenligner utseendet på branchen din med disse skjermbildene."),"\n",l.createElement(n.p,null,"Hvis du gjør en villet endring i utseendet til en komponent må mappen ",l.createElement(n.code,null,"<pakkenavn>-react/integration/__image_snapshots__")," slettes. GitHub Actions vil generere nye snapshots for deg."),"\n",l.createElement(n.p,null,"I vårt tilfelle er det ingen visuell endring, så vi hopper over dette steget."),"\n",l.createElement("aside",{className:"jkl-portal-paragraph"},l.createElement(t,{role:"none presentation",fullWidth:!0},l.createElement("p",{className:"small"},l.createElement(n.p,null,"Siden skjermbilder tas av eksemplene må du også slette snapshots om du for eksempel endrer navn eller\nrekkefølge på spakene som styrer eksempelet.")))),"\n",l.createElement(n.h4,null,"Kort om enhetstester"),"\n",l.createElement(n.p,null,"I dette eksempelet hopper vi over enhetstester, men for en endring som fikser en bug eller legger til funksjonalitet ville vi ha skrevet noen. Enhetstester skal ligge sammen med komponenten, med filnavn på formen ",l.createElement(n.code,null,"<MinKomponent>.test.tsx")," eller ",l.createElement(n.code,null,"<minFunksjon>.test.ts"),"."),"\n",l.createElement(n.p,null,"Enhetstestene skal sikre at nøkkelfunksjonaliteten til komponenten virker. For eksempel kan testene for en knapp sjekke at den blir rendret til DOM, og at den kaller riktig funksjon når man klikker på den."),"\n",l.createElement(n.p,null,"Vi bruker ",l.createElement(n.a,{href:"https://jestjs.io/"},"Jest")," som test runner og ",l.createElement(n.a,{href:"https://testing-library.com/docs/react-testing-library/intro"},"React testing library")," for å håndtere React-komponenter."),"\n",l.createElement(n.h3,null,"Lag en commit"),"\n",l.createElement(n.p,null,"Til å lage commits bruker vi kommandoen ",l.createElement(n.code,null,"pnpm commit"),". Grunnen til det er at commitmeldingene brukes for å generere changelogs og versjonsnummer basert på ",l.createElement(n.a,{href:"https://semver.org"},"Semantic Versioning"),". Det kan vi gjøre fordi ",l.createElement(n.code,null,"pnpm commit")," formaterer commitmeldinger på en spesiell måte kalt ",l.createElement(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),". Hvis en commitmelding starter med ",l.createElement(n.code,null,"feat:")," vil det automatisk lages en ",l.createElement(n.em,null,"minor"),"-release av pakken som ble endret."),"\n",l.createElement("aside",{className:"jkl-portal-paragraph"},l.createElement(a,{role:"none presentation",fullWidth:!0},l.createElement("p",{className:"small"},l.createElement(n.p,null,"Bruk ",l.createElement("code",null,"pnpm commit")," for å lage commits!")))),"\n",l.createElement(n.p,null,"Når vi kjører ",l.createElement(n.code,null,"pnpm commit")," startes det en veiviser. Her blir du bedt om å velge hvilken type endring vi har gjort. I vårt tilfelle velger vi ",l.createElement(n.code,null,"feat:"),". Du kan skrive typen, eller velge med piltastene. Trykk Enter."),"\n",l.createElement(n.p,null,"Neste trinn i veiviseren er ",l.createElement(n.em,null,"commit-tittelen"),". Her skriver du kort hva som er gjort, for eksempel ",l.createElement(n.code,null,"la til id i LoaderProps"),". Trykk Enter."),"\n",l.createElement(n.p,null,"Neste trinn er en valgfri ",l.createElement(n.em,null,"commit body"),". Her vil mange kanskje foretrekke å bare trykke Enter og heller gjøre en ",l.createElement(n.code,null,"git commit --amend")," senere for å bruke en annen editor for å skrive. Vi trykker bare Enter og går videre."),"\n",l.createElement(n.p,null,"Vi blir spurt om vi har noen ",l.createElement(n.strong,null,"BREAKING CHANGES"),". Vi har ikke det denne gangen. Hvis du ",l.createElement(n.em,null,"har")," det, beskriv dem her. Hvis en commitmelding har ",l.createElement(n.code,null,"BREAKING CHANGE:")," i ",l.createElement(n.em,null,"footeren")," vil det automatisk lages en ",l.createElement(n.em,null,"major"),"-release av pakken som ble endret."),"\n",l.createElement(n.p,null,"Til slutt blir vi spurt om å liste ",l.createElement(n.em,null,"ISSUES CLOSED"),". Her kan du skrive issue-nummeret fra GitHub (inkludert ",l.createElement(n.code,null,"#"),", f. eks. ",l.createElement(n.code,null,"#1234"),") dersom endringen din vil gjøre at et issue kan lukkes."),"\n",l.createElement(n.h3,null,"Del branchen din"),"\n",l.createElement(n.p,null,"Puh! Det var en del steg. Alt dette er for at automatikken ved publisering skal fungere riktig."),"\n",l.createElement(n.p,null,"Nå kan du pushe endringen din og åpne en pull request."),"\n",l.createElement(n.h2,null,"Pull requests"),"\n",l.createElement(n.p,null,"Pull requests (PR) lager du ",l.createElement(n.a,{href:"https://github.com/fremtind/jokul/compare"},"på GitHub"),". Vanligvis er det ",l.createElement(n.code,null,"main"),"-branchen du setter som ",l.createElement(n.em,null,"base"),", og branchen med endringene dine du setter som ",l.createElement(n.em,null,"compare"),"."),"\n",l.createElement(n.p,null,"Når du lager en PR blir du vist et skjema med en mal som kan fylles ut. Det er supert om du gir en kort beskrivelse av innholdet i pull requesten, og lenker til relevante issues og discussions. Sjekk gjerne også av punktene i sjekklisten ved å endre ",l.createElement(n.code,null,"[ ]")," til ",l.createElement(n.code,null,"[x]"),"."),"\n",l.createElement("aside",{className:"jkl-portal-paragraph"},l.createElement(t,{role:"none presentation",fullWidth:!0,title:"Sender du en pull request fra en fork?"},l.createElement("p",{className:"small"},l.createElement(n.p,null,"Sett ",l.createElement("code",null,"external-contributions")," som ",l.createElement("i",null,"base")," for pull requesten, så loser en maintainer koden\nvidere til ",l.createElement("code",null,"main"),".")))),"\n",l.createElement(n.p,null,"Ta gjerne en titt på ",l.createElement(n.em,null,"Labels")," og se om noen av dem er relevante for pull requesten din. Som ",l.createElement(n.em,null,"Reviewers")," kan du bruke forslagene fra GitHub om du vil, eller velge en kollega fra teamet ditt."),"\n",l.createElement(n.h3,null,"Automatiske sjekker"),"\n",l.createElement(n.p,null,"GitHub fanger opp når det lages en pull request, eller det pushes endringer til en branch som har en åpen PR. Når dette skjer kjøres det en ",l.createElement(n.em,null,"workflow")," på GitHub Actions. Workflowen sørger for å bygge prosjektet, kjøre enhetstester, visuelle regresjonstester, og publisere en forhåndsvisning av ",l.createElement(n.a,{href:"https://jokul.fremtind.no"},"jokul.fremtind.no")," med endringene dine."),"\n",l.createElement(n.p,null,"Du kan følge med på workflowen ",l.createElement(n.a,{href:"https://github.com/fremtind/jokul/actions/workflows/pull_request.yml"},"i Actions-fanen på GitHub"),". Der kan du også se at kjøretiden for hele workflowen vanligvis ligger på mellom ",l.createElement(n.strong,null,"15-20 minutter"),"."),"\n",l.createElement(n.h3,null,"Hvem skal godkjenne pull requesten?"),"\n",l.createElement(n.p,null,"Vi har ikke noen regler for ",l.createElement(n.em,null,"hvem")," som skal godkjenne en endring, annet enn at minst én kollega må gi en ",l.createElement(n.em,null,"Approve")," og at de automatiske sjekkene må kjøre uten feil. Hvis du gjør en stor endring eller introduserer en ny komponent er det fint om du venter litt så flere får muligheten til å gjøre en review. Bruk magefølelsen!"),"\n",l.createElement(n.p,null,"Jøkul-teamet får varsler i GitHub når det kommer nye pull requests og kommer kanskje med en review uoppfordret, men sett gjerne ",l.createElement(n.code,null,"wkillerud")," og ",l.createElement(n.code,null,"piofinn")," eksplisitt som reviewers. Du trenger ikke vente på at alle reviewers gir svar."),"\n",l.createElement(n.h3,null,"Hvor lenge må du vente?"),"\n",l.createElement(n.p,null,"Hvor lang tid det tar fra en pull request blir laget til den er reviewet og merget varierer, men de fleste vil bli reviewet og merget innen en arbeidsdag. Hvis en pull request introduserer en ny komponent eller større endringer kan det ta noen dager med iterasjoner før en pull request blir godkjent og merget."),"\n",l.createElement(n.h2,null,"Publisering av endringer"),"\n",l.createElement(n.p,null,"Når en pull request merges til ",l.createElement(n.code,null,"main")," skjer det en automatisk publisering. Her får vi endelig uttelling for jobben som blir gjort med å skrive commit-meldinger på måten vi gjør i ",l.createElement(n.a,{href:"#lag-en-commit"},"Lag en commit"),"."),"\n",l.createElement(n.p,null,"Vi bruker ",l.createElement(n.a,{href:"https://github.com/fremtind/jokul/actions/workflows/release.yml"},"GitHub Actions")," på en liknende måte som ved pull requests. Når workflowen er ferdig finner du oppdaterte pakker på ",l.createElement(n.a,{href:"https://www.npmjs.com/search?q=keywords%3Afremtind"},"npmjs.com")," og ",l.createElement(n.a,{href:"https://github.com/orgs/fremtind/packages?repo_name=jokul"},"GitHub Packages"),". Versjonsnummeret blir bestemt av Lerna, som bruker commitmeldingene for å bestemme om det skal lages en ny ",l.createElement(n.em,null,"major"),", ",l.createElement(n.em,null,"minor"),", eller ",l.createElement(n.em,null,"patch"),"-versjon. Pakkenes ",l.createElement(n.code,null,"CHANGELOG.md")," blir oppdatert med innholdet fra commitmeldinger. I tillegg har det blitt publisert en oppdatert versjon av ",l.createElement(n.a,{href:"https://jokul.fremtind.no"},"jokul.fremtind.no"),"."),"\n",l.createElement(n.h2,null,"Kort om infrastrukturen til Jøkul"),"\n",l.createElement(n.p,null,"Vi organiserer koden i et monorepo og bruker ",l.createElement(n.a,{href:"https://github.com/lerna/lerna"},"Lerna")," for å holde kontroll på de individuelle pakkene i repositoriet. Hver enkelt pakke følger ",l.createElement(n.a,{href:"https://semver.org"},"semantisk versjonering"),". Nye versjoner og Changelog blir automatisk generert fra commit-loggen basert på ",l.createElement(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional commits"),"."),"\n",l.createElement(n.p,null,"Dokumentasjon skrives i ",l.createElement(n.code,null,"MDX"),"-filer, og disse ligger i egne ",l.createElement(n.code,null,"documentation"),"-mapper sammen med koden til pakkene. Dokumentasjon som ikke har med komponenter å gjøre ligger i ",l.createElement(n.code,null,"portal"),"-mappen, under ",l.createElement(n.code,null,"src/texts"),". All dokumentasjonen leses av ",l.createElement(n.a,{href:"https://www.gatsbyjs.com/"},"Gatsby"),", som genererer ",l.createElement(n.a,{href:"https://jokul.fremtind.no"},"jokul.fremtind.no"),". Siden publiseres med GitHub Pages."),"\n",l.createElement(n.h3,null,"Slik lager du en ny pakke"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"Gå til rot, kjør kommandoen ",l.createElement(n.code,null,"pnpm scaffold"),", og følg instruksene i terminalen."),"\n",l.createElement(n.li,null,"Etter kommandoen har kjørt vil det være opprettet to mapper i packages mappen (komponent-navn og komponent-navn-react)."),"\n"),"\n",l.createElement(n.p,null,"Vi har noen minstekrav til dokumentasjon som den nye komponenten din ",l.createElement(n.strong,null,"må")," følge. Disse kravene gjelder dokumentasjonen som vises under Komponenter. I tillegg ",l.createElement(n.strong,null,"må")," det ligge en Figma-branch klar til å merges inn i ",l.createElement(n.a,{href:"https://www.figma.com/file/y9JtTf3whfTCHCdYSUXVQ5/J%C3%B8kul-bibliotek-2.0?node-id=0%3A1"},"Jøkul-biblioteket")," som dokumenterer komponenten og alle varianter. Tiden mellom merging av kode og merging av design må være så kort som mulig."),"\n",l.createElement(n.p,null,l.createElement(n.strong,null,"Må"),"-krav:"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Ingress med kort beskrivelse av komponenten"),"\n",l.createElement(n.li,null,"Første eksempel synlig uten å scrolle"),"\n",l.createElement(n.li,null,"Relevante eksempler på riktig og feil bruk"),"\n",l.createElement(n.li,null,"Live kodeeksempel (oppdateres med valgte egenskaper)"),"\n",l.createElement(n.li,null,"React-props for komponentene i bunnen"),"\n"),"\n",l.createElement(n.p,null,"I tillegg har vi noen ",l.createElement(n.em,null,"vil"),"-ønsker. Disse er det fint om du har med fordi de gjør det lettere for andre å bruke komponenten, men de er ikke et krav."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"Kontrollspørsmål for bruk"),"\n",l.createElement(n.li,null,"Lenker til relevante eller alternative komponenter der det er naturlig"),"\n",l.createElement(n.li,null,"Eksempler på bruk ute i teamene"),"\n"),"\n",l.createElement(n.p,null,"Du kan se på dokumentasjonen for ",l.createElement(n.a,{href:"/preview/fix-lock/komponenter/tag"},"Tag")," og ",l.createElement(n.a,{href:"/preview/fix-lock/komponenter/alertmessage"},"Alert message")," for inspirasjon."),"\n",l.createElement(n.h3,null,"Slik lenker du pakker sammen"),"\n",l.createElement(n.p,null,"Hvis du vil legge til en pakke i en annen, installerer du den som en vanlig avhengighet."),"\n",l.createElement(n.h3,null,"Slik legger du til en avhengighet"),"\n",l.createElement(n.p,null,"Det finnes avhengigheter på ulike nivåer i Jøkul. Globale avhengigheter, for eksempel de som trengs til å kjøre en byggejobb, ligger på rotnivå. Du kan legge til en ny pakke på rotnivå, med kommandoen ",l.createElement(n.code,null,"pnpm add pakke -w"),". For å legge til som en utviklingsavhengighet bruker du ",l.createElement(n.code,null,"-w -D"),"."),"\n",l.createElement(n.p,null,'Lokale avhengigheter, som trengs for at en pakke skal fungere i bruk, legger vi vanligvis på pakkenivå. Se "Slik lenker du pakker sammen". Bruk kommandoen ',l.createElement(n.code,null,"pnpm add")," for å legge til pakker som ikke er en del av Jøkul. Alternativt kan du bruke ",l.createElement(n.a,{href:"https://github.com/lerna/lerna/tree/main/commands/add#readme"},l.createElement(n.code,null,"lerna add")),". Før du gjør det, er det lurt å tenke på om de skal sendes med komponenten eller om brukeren av komponenten har ansvaret for å ha avhengigheten i sitt prosjekt. React bør for eksempel være en ",l.createElement(n.code,null,"peerDependency"),", slik at brukeren ikke ender opp med flere utgaver av React i sin pakke."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)};function i(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var m=t(72285),s=t(22756),c=t(95573),u=t(1634);const d=e=>{let{pageContext:n}=e;return l.createElement(s.p,{title:n.title})},p=e=>{let{location:n,data:t,pageContext:r,children:a}=e;const{frontmatter:o}=t.page,{types:i}=r;return l.createElement(u.M,{className:"/profil/bildebruk"===n.pathname?"jkl-portal__main--no-margin":void 0},l.createElement(c.M1,Object.assign({},o,{versions:r.versions})),l.createElement(c.w5,o),a,i&&l.createElement(m.l,{types:i}))};function k(e){return l.createElement(p,e,l.createElement(o,e))}},72285:function(e,n,t){t.d(n,{l:function(){return k}});var r=t(78217),l=t(76802),a=t(87505),o=t(70079),i=t(54656);const m=e=>o.createElement("code",{className:"jkl-portal-inline-code"},e),s=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((e=>e.fileName.includes("node_modules")))},c=e=>{var n;return null===(n=e.declarations)||void 0===n?void 0:n.some((n=>"children"===e.name||!n.fileName.includes("node_modules")))},u=(e,n)=>{const{scrollLeft:t,scrollWidth:r}=e,{clientWidth:l}=n,a=t>0,o=r-t>l;n.classList.toggle("left-shadow",a),n.classList.toggle("right-shadow",o)},d=e=>{const n=e.target,t=n.parentElement;u(n,t)},p=e=>{let{props:n}=e;const t=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=t.current;if(e&&window.MutationObserver){const n=new window.MutationObserver((n=>{n.forEach((n=>{if("attributes"===n.type&&"hidden"===n.attributeName){const n=e.querySelector(".jkl-portal-api-docs-table__table");n&&u(n,e)}}))})),r=t.current.parentElement.parentElement;n.observe(r,{attributes:!0,attributeFilter:["hidden"]})}}),[]),o.createElement("div",{ref:t,className:"jkl-portal-api-docs-table"},o.createElement("div",{onScroll:d,className:"jkl-portal-api-docs-table__wrapper"},o.createElement(a.w,{className:"jkl-portal-api-docs-table__table",verticalAlign:"top",columns:["Prop","Beskrivelse","Standardverdi","Påkrevd","Type"],rows:(r=n,r.map((e=>{var n,t;return[e.name?m(e.name):"",e.description,null!==(n=e.defaultValue)&&void 0!==n&&n.value?m(e.defaultValue.value):"ingen",e.required?"Påkrevd":"Ikke påkrevd",null!==(t=e.type)&&void 0!==t&&t.name?m(e.type.name):""]})))})));var r},k=e=>{let{types:n}=e;return o.createElement("section",{className:"mb-104 jkl-portal-paragraph"},o.createElement("h2",{className:"heading-1 mt-104"},"React API"),o.createElement("p",{className:"body mt-16"},"Her finner du en oversikt over props på komponentene i pakken."),o.createElement(r.U,{className:"mt-40 jkl-portal-api-docs"},Object.entries(n).map((e=>{let[n,t]=e;const r=t.props?Object.values(t.props).filter(c):[],a=t.props?Object.values(t.props).filter(s):[],m=(e=>{var n,t,r,l,a,o;return e.description||null!==(n=e.tags)&&void 0!==n&&n.param||null!==(t=e.tags)&&void 0!==t&&t.returns?["/**",null===(r=e.description)||void 0===r?void 0:r.split("\n").map((e=>" * "+e)).join("\n")," *",null===(l=e.tags)||void 0===l||null===(a=l.param)||void 0===a?void 0:a.split("\n").map((e=>" * @param "+e)).join("\n"),null!==(o=e.tags)&&void 0!==o&&o.returns?" * @returns "+e.tags.returns:void 0," */"].filter((e=>Boolean(e))).join("\n"):""})(t);return o.createElement(l.Q,{title:n,key:n,className:"jkl-portal-api-docs__item"},m&&o.createElement(i.dn,{className:"jkl-portal-code-block"},m),r.length>0&&o.createElement(p,{props:r}),a.length>0&&o.createElement(o.Fragment,null,o.createElement("p",{className:"jkl-portal-api-docs__external-props-header"},"Arvede props"),o.createElement(p,{props:a})))}))))}},1634:function(e,n,t){t.d(n,{M:function(){return m}});var r=t(26372),l=t.n(r),a=t(49597),o=t(70079),i=t(34044);const m=e=>{let{className:n,children:t}=e;const{prefersReducedMotion:r}=(0,o.useContext)(i.R),m="undefined"!=typeof window&&"?mode=e2e"===window.location.search;return o.createElement(a.E.main,{initial:{y:r?0:10,opacity:0},animate:{y:0,opacity:1},exit:{y:r?0:-20,opacity:0},transition:{duration:r||m?0:.35},className:l()("jkl-portal__main",n),id:"innhold"},t)}},78217:function(e,n,t){t.d(n,{U:function(){return o}});var r=t(26372),l=t.n(r),a=t(70079);const o=e=>{let{className:n,density:t,...r}=e;return a.createElement("section",{role:"group","data-testid":"jkl-accordion",className:l()("jkl-accordion",n),"data-density":t,...r})}},76802:function(e,n,t){t.d(n,{Q:function(){return m}});var r=t(53484),l=t(26372),a=t.n(l),o=t(70079);const i=e=>{let{onOpenChange:n,startExpanded:t}=e;const r=(0,o.useRef)(null),l=(0,o.useRef)(null),a=(0,o.useRef)(null),i=(0,o.useRef)(null),{0:m,1:s}=(0,o.useState)(!1),{0:c,1:u}=(0,o.useState)(!1);(0,o.useEffect)((()=>{r.current&&(r.current.open=t)}),[]);const d=e=>{r.current&&l.current&&(r.current.open=e,i.current=null,s(!1),u(!1),r.current.style.overflow="",r.current.style.height="")};return{detailsRef:r,summaryRef:l,contentRef:a,onSummaryClick:e=>{e.preventDefault(),r.current&&l.current&&(r.current.style.overflow="hidden",m||!r.current.open?(e=>{r.current&&l.current&&(r.current.style.height="".concat(r.current.offsetHeight,"px"),r.current.open=!0,requestAnimationFrame((()=>{if(r.current&&l.current&&a.current){u(!0),n(!0,e);const t=r.current.offsetHeight,o=l.current.offsetHeight+a.current.offsetHeight;i.current&&i.current.cancel(),r.current.animate&&(i.current=r.current.animate({height:["".concat(t,"px"),"".concat(o,"px")]},{duration:150,easing:"ease"}),i.current.onfinish=()=>d(!0),i.current.oncancel=()=>u(!1))}})))})(e):(c||r.current.open)&&(e=>{if(r.current&&l.current){s(!0),n(!1,e);const t=r.current.offsetHeight,a=l.current.offsetHeight;i.current&&i.current.cancel(),r.current.animate&&(i.current=r.current.animate({height:["".concat(t,"px"),"".concat(a,"px")]},{duration:150,easing:"ease"}),i.current.onfinish=()=>d(!1),i.current.oncancel=()=>s(!1))}})(e))}}},m=e=>{let{children:n,title:t,className:l,startExpanded:m=!1,onClick:s,...c}=e;const{0:u,1:d}=(0,o.useState)(m),{detailsRef:p,summaryRef:k,contentRef:g,onSummaryClick:E}=i({onOpenChange:(e,n)=>{d(e),s&&s(n,e)},startExpanded:m});return o.createElement("details",{"data-testid":"jkl-accordion-item",...c,className:a()("jkl-accordion-item",l),ref:p},o.createElement("summary",{"data-testid":"jkl-accordion-item__title",className:"jkl-accordion-item__title",onClick:E,ref:k},t,o.createElement(r.K,{variant:"inherit",className:"jkl-accordion-item__arrow",pointingDown:!u,bold:u})),o.createElement("div",{"data-testid":"jkl-accordion-item__content-wrapper",className:"jkl-accordion-item__content-wrapper",ref:g},o.createElement("div",{className:"jkl-accordion-item__content"},n)))}},87505:function(e,n,t){t.d(n,{w:function(){return u}});var r=t(70079),l=t(41699),a=t(65174),o=t(6914),i=t(82546),m=t(39126),s=t(66169),c=t(94509);const u=(0,r.forwardRef)(((e,n)=>{let{caption:t,columns:u,emptyTableText:d,rows:p,verticalAlign:k,...g}=e;return r.createElement(l.i,{fullWidth:!0,...g,ref:n},t&&r.createElement(o.R,{srOnly:!0},t),r.createElement(m.s,null,r.createElement(c.S,null,u.map(((e,n)=>r.createElement(s.x,{key:n,density:"compact",bold:!0},e))))),r.createElement(a.R,null,0===p.length&&d&&r.createElement(c.S,null,r.createElement(i.p,{colSpan:u.length},d)),p.map(((e,n)=>r.createElement(c.S,{key:n},e.map(((e,n)=>r.createElement(i.p,{key:n,"data-th":u[n],verticalAlign:k},e))))))))}));u.displayName="DataTable"}}]);