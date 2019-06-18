import React from "react";
import { H2, H3, H4, LeadParagraph, P } from "@fremtind/jkl-typography-react";
import { Grid } from "@fremtind/jkl-grid-react";
import Code from "../../components/Code/Code";
import { useWindowSize } from "../../components/useWindowSize/useWindowSize";
import { GridContent, GridOffsetBefore, GridOffsetAfter } from "../../components/GridDefaults/GridDefaults";
import "../styles.scss";

const Contribute = () => {
    const { width } = useWindowSize();
    const smallBreakpoint = 768;
    return (
        <Grid className={`${width < smallBreakpoint ? "portal-page--mobile" : ""}`}>
            <GridOffsetBefore />
            <GridContent>
                <H2>Bidragsguide</H2>
                <LeadParagraph>
                    Jøkul er designsystemet til Fremtind, og er i kontinuerlig utvikling. Jøkul skal gjøre det lettere
                    for alle i Fremtind å utvikle og vedlikeholde løsningen sine. For at Jøkul skal kunne levere den
                    lovnaden kreves det at teamene som bruker Jøkul bidrar tilbake.
                </LeadParagraph>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Utvikling</H3>
                <P>
                    All utvikling skjer på github, her finner du all koden, alle bugrapporter og designsystemteamets
                    prioriterte backlog. Alt er åpent, og du har mulighet til å påvirke ved å bidra i samtalen på
                    github.
                </P>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Organisering av brancher</H3>
                <P>
                    Vi gjør vårt beste for at master er ren, pen og virker til enhver tid. Ut i fra master lages pakkene
                    som publiseres på npm. Pull requester skal normalt sett sendes mot master.
                </P>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Versjonering</H3>
                <P>
                    Vi bruker monorepo med Lerna for å holde kontroll på de individuelle pakkene i repoet. Hver enkelt
                    pakke følger semantisk versjonering. Nye versjoner genereres automatisk fra commit-loggen, derfor er
                    det viktig å følge regelene for hvordan en commit skal se ut. Viktige endringer dokumenteres i
                    changelog i hver enkelt pakke, eller på rotnivå om det er en global endring.
                </P>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Feil og bugs</H3>
                <P>Github er ikke helt på plass enda, så per akkurat nå kan du sende mail til Glenn.</P>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Din første pull request</H3>
                <P>
                    Flott at du vil bidra! Vi trenger den hjelpen vi kan få! Først og fremst, sjekk tråden på issuet at
                    ingen andre har tatt oppgaven, i så fall kan det vært lurt å koordinere med den personen. Så legg
                    igjen en kommentar at du ser på den oppgaven. Kjerneteamet jobbet etter en prioritert backlog, men
                    det hindrer ingen andre i å ta tak i oppgaver som er lavere prioritert, tvert i mot! Et godt tips
                    kan være å følge med på andres pull requester, og gjerne komme med kommentarer og tilbakemeldinger.
                    Der vil man kunne plukke opp hva som er viktig og ikke for Jøkul.
                </P>
                <H3>Send pull request</H3>
                <P>
                    Kjerneteamet følger med på at som skjer på GitHub-repoet til Jøkul, så når du sender inn en pull
                    request som vil du få tilbakemelding fra noen i kjerneteamet. Da kan pull requesten bli merget eller
                    du vil kunne få tilbakemelding på hva som skal til for at den kan merges. Ved større API-endinger
                    kan det ta litt tid før vi kan merge for å kunne teste i noen interne applikasjoner først.
                </P>
                <ol>
                    <li>Fork prosjektet og lag en ny branch</li>
                    <li>
                        Kjør <Code>yarn</Code> på rot i prosjektet
                    </li>
                    <li>Løs feilen eller legg til ny funksjonalitet og legg til tester</li>
                    <li>
                        Pass på at alle tester går grønt med <Code>yarn test</Code>
                    </li>
                    <li>
                        Kjør linteren med <Code>yarn lint</Code>
                    </li>
                    <li>
                        Kjør prettier med <Code>denne finnes ikke enda</Code>
                    </li>
                    <li>
                        Legg til endrede filer med <Code>git add</Code>
                    </li>
                    <li>
                        Commit med <Code>yarn commit</Code> for å få hjelp til å lage en riktig commitmelding. Om du er
                        komfortabel med conventional commit style og lerna prosjekt kan du commite med git som vanlig.
                    </li>
                    <li>Push og opprett pull request mot Jøkul</li>
                </ol>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Systemkrav</H3>
                <P>Du trenger ikke så mye, bare:</P>
                <ul>
                    <li>Node v.8.0.0 eller nyere</li>
                    <li>yarn</li>
                    <li>git</li>
                </ul>
                <P>
                    Vi bruker yarn i stedet for npm siden yarn har bedre integrasjon mot monorepo-verktøyet Lerna, som
                    brukes i Jøkul.
                </P>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Arbeidsflyt for utvikling</H3>
                <H4>Inne i en pakke</H4>
                <P>
                    I<Code>/packages</Code> er hver enkelt mappe en kjørbar npm-pakke. Alle som slutter på -react kan
                    starte et utviklingsview med<Code>yarn dev</Code> fra pakke-nivå. Den starter
                    <Code>`pakkenavn`.html</Code> som brukes som til utviking og automatisk visuell regresjonstesting.
                    <Code>yarn build</Code> bygger koden til ulike modulene vi støtter. Bygge komandoen kan kjøres fra
                    rot, da bygges alle pakkene, eller den kan kjøres enkeltvis. Tester kjøres med
                    <Code>yarn test</Code> fra rot i prosjektet. Hvis du ønsker å kjøre bare en test kan det spesfiseres
                    etter komandoen,<Code>yarn test mintest</Code>, under utvikling kan
                    <Code>yarn test --watch mintest</Code> være nyttig.
                </P>
                <H4>Legg til avhengighet</H4>
                <P>
                    Hvis du skal legge til en avhengighet til en pakke fra det store internettet, er det som normalt. Gå
                    inn i pakken og kjør <Code>yarn add `somePackage`</Code>. Hvis du skal legge til en ny avhengighet
                    på rot nivå, så er det <Code>yarn add -W `somePackage`</Code>, men tenk deg nøye om det er nødvendig
                    å ha den i gloablt scope. Hvis en pakke skal depende på en annen pakke i monorepoet kjøer du{" "}
                    <Code>lerna add @fremtind/jkl-en-pakke --scope=@fremtind/jkl-en-annen-pakke</Code>.
                </P>
                <H4>Legg til ny pakke</H4>
                <P>
                    Når du skal opprette en ny pakke, så gjøres dette fra rotnivå med kommandoen
                    <Code>lerna create pakke-navn</Code>. Den vil spørre noen spørsmål om pakken som du fyller ut etter
                    beste evne. Når den er opprettet, ta gjerne utgangspunkt i en annen pakke av samme type som du har
                    lagd, og kopier inn nødvendige script og oppsettsfiler som
                    <Code>tsconfig-for-declarations.json</Code> for React-pakker.
                </P>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Oppsett av Jøkul</H3>
                <P>
                    På rot finnes alt som skal til for sette opp prosjektet, lint-, typescript-, prettier-konfigurasjon.
                    Vi gjør så godt vi kan med å holde det rent og pent, så det blir lett å sette seg inn i. Det meste
                    av interesse skjer inne i packages. Her er hver enkelt pakke som utviklere kan bruke som
                    avhengigheter i sine prosjekt. Det ligger også et par eksempel prosjekt som kan være til hjelp for å
                    komme i gang å bruke Jøkul. Denne siden her ligger også som en pakke, og kan også brukes til
                    inspirasjon for oppsett av Jøkul. Ellers er det sass-pakker og react-pakker. Koden ligger i src,
                    bygd kode havner i build, og midlertidig kode havner i dist og .cache. Alle pakker skal ha
                    packages.json, README.md og changelog.md. Vi prøver å holde koden så ryddig som mulig, og prøver å
                    samle på funksjonalitet, ikke type. Så tester skal ligge sammen med koden, så langt det lar seg
                    gjøre, ikke i en test-mappe i egen mappe-struktur.
                </P>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Test</H3>
                <P>
                    Siden det er mange som er avhenige av Jøkul for å lage sine sider, er det viktig at komponent
                    biblioteket er godt dokumentert og godt testet. Vi har ikke satt noen eksplistte prosentkrav til
                    test, da dette kan ha negative sideeffekter. Det er opp til oss som utviklere å sørge for at vi
                    tester det som trengs godt nok. Det forventes at all funksjonalitet vi skriver selv blir
                    enhetstestet, pass på å teste som en bruker og ikke direkte på implementasjon. Det er også satt opp
                    rammeverk for visuell regresjonstest og tilgjengelighet.
                </P>
            </GridContent>
            <GridOffsetAfter />
            <GridOffsetBefore />
            <GridContent>
                <H3>Dokumentasjon</H3>
                <P>
                    Det kreves en enkel README.md fil i hver pakke som beskriver hva pakken er og peker brukern i riktig
                    retning for å finne mer info. Hver komponent skal dokumenteres i [Storybook](). Der skal alle props
                    være dokumentert, og alle funksjonelle props skal ha knobs så storien blir interaktiv. Det skal være
                    en enkel forklaring på hvordan komponenten kan taes i bruk, samt en mer utfyldene kommentar som
                    forklarer mer av grunnlaget for komponenten. Ta gjerne ibruk StoryTemplaten for å holde
                    dokumentasjonen pen og uniform, men i noen tilfeller kan det være nødvendig å skrive en custom.
                    StoryTemplaten finnes i @fremtind/jkl-utils internal. Men den viktigste dokumentasjonen vi skriver
                    er koden, så hold koden ren, pen og forståelig. Sørg for å skrive gode og robuste typer og legg inn
                    kommentarer der noe lurt er nødvendig.
                </P>
            </GridContent>
            <GridOffsetAfter />
        </Grid>
    );
};

export default Contribute;
