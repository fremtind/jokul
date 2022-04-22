import { NavCard } from "@fremtind/jkl-card-react";
import { Link } from "@fremtind/jkl-core";
import { ListItem, UnorderedList } from "@fremtind/jkl-list-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@fremtind/jkl-table-react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { ComponentExample } from "../../../../doc-utils";
import { CodeBlock } from "../../../../doc-utils/CodeBlock";
import { TagExample, tagExampleCode } from "../../../../packages/tag-react/documentation/TagExample";
import { Image } from "../../components/image";
import { HeadingLarge, Ingress, InlineCode, PageTitle, Paragraph } from "../../components/Typography";
import { Strong } from "../../components/Typography/Typography";

const PraktiskInfoUtviklere: FC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <PageTitle>Praktisk info for utviklere</PageTitle>
        <Ingress>
            Designsystemet blir både en ekstern avhengighet og et prosjekt du er med på å utvikle. Derfor er det et par
            ting det kan være verdt å vite om.
        </Ingress>

        <HeadingLarge>Jøkul er open source</HeadingLarge>
        <Paragraph>
            Jøkul oppfører seg som alle andre eksterne avhengigheter du har i prosjektet ditt, som for eksempel React.
            Du installerer og oppgraderer Jøkul-pakker på akkurat samme måte. Jøkul er open source og offentlig
            tilgjengelig, så du trenger ikke sette opp noe eget for å få tilgang – det bare funker.
        </Paragraph>
        <CodeBlock>~ $ yarn add @fremtind/jkl-core @fremtind/jkl-webfonts</CodeBlock>

        <HeadingLarge>Se hvilke pakker som finnes</HeadingLarge>
        <Paragraph>
            Jøkuls kode er delt inn i{" "}
            <Link href="https://github.com/orgs/fremtind/packages?repo_name=jokul">mange pakker</Link>, to pakker per
            komponent. Vi skiller på CSS-pakker og React-pakker i Jøkul for å kunne bruke stilene selv om prosjektet
            ikke bruker React, selv om det er sterkt anbefalt.
        </Paragraph>
        <Paragraph>
            Når du bruker React-komponenten blir stilpakken automatisk installert som en avhengighet. Du trenger med
            andre ord <Strong>ikke</Strong> både React- og stilpakken i <InlineCode>package.json</InlineCode>.
        </Paragraph>

        <HeadingLarge>Hvordan er flyten for å få publisert kode?</HeadingLarge>
        <Paragraph>
            Det er en forventning at du er med på utviklingen av Jøkul, så det er lurt å ha et forhold til hvordan kode
            kommer fra din egen maskin ut i publiserte pakker. Vi har skrevet en egen{" "}
            <GatsbyLink className="jkl-link" to="/guider/hvordan-endre-jokul">
                guide om det her
            </GatsbyLink>
            .
        </Paragraph>

        <HeadingLarge>Brekkpunkter</HeadingLarge>
        <Paragraph>
            Jøkul har tre brekkpunkter: medium, large, extra large. Disse punktene blir brukt innad i Jøkul, men
            begrenser ikke hva du kan bruke i din egen app. Det vil si at typografi og spacing i komponenter vil
            forandre seg ved disse verdiene, samtidig som du står fritt til å bruke egne brekkpunkter for å tilpasse
            layouten i prosjektet ditt etter egne behov.
        </Paragraph>
        <div className="jkl-portal-paragraph">
            <Table fullWidth compact>
                <TableHead>
                    <TableRow>
                        <TableHeader>Størrelse</TableHeader>
                        <TableHeader>Verdi</TableHeader>
                        <TableHeader>Benevnelse</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Medium</TableCell>
                        <TableCell>680px</TableCell>
                        <TableCell>md</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Large</TableCell>
                        <TableCell>1200px</TableCell>
                        <TableCell>l</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Extra Large</TableCell>
                        <TableCell>1600px</TableCell>
                        <TableCell>xl</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>

        <HeadingLarge>Dokumentasjon rett i editoren</HeadingLarge>
        <Paragraph>
            Jøkul er skrevet i TypeScript og kommer med typedefinisjoner som en del av pakka. Editors med god
            TypeScript-støtte som Visual Studio Code hjelper deg med autoutfylling av propnavn og viser deg
            dokumentasjon i kontekst av det du jobber med.
        </Paragraph>
        <Image>
            <StaticImage
                src="../../../static/assets/kom-i-gang/solarized-light.png"
                alt="Skjermbilde som viser et eksempel på dokumentasjon vist i Visual Studio Code"
            />
        </Image>

        <HeadingLarge>Kodeeksempler i portalen</HeadingLarge>
        <Paragraph>
            Alle{" "}
            <GatsbyLink className="jkl-link" to="/komponenter/accordion">
                komponentene
            </GatsbyLink>{" "}
            har ett eller flere eksempler av typen du ser under. De viser hvordan du bruker dem, inkludert
            kodeeksempler. Bruk Vis kode-knappen for å se hvordan du kan lage eksemplet du ser på. Du finner også en
            oversikt over alle propsene til komponentene nederst på siden.
        </Paragraph>
        <ComponentExample title="Tag" component={TagExample} codeExample={tagExampleCode} />

        <HeadingLarge>Endringslogger og annet snadder</HeadingLarge>
        <Paragraph>
            Du finner endringslogger og mer teknisk dokumentasjon i hver enkelt pakke på GitHub. Det er spesielt tre
            filer det verdt å vite om, her eksemplifisert gjennom pakken <InlineCode>@fremtind/jkl-core</InlineCode>:
        </Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>
                <Link href="https://github.com/fremtind/jokul/blob/main/packages/core/README.md">README</Link> for hjelp
                til installering og import
            </ListItem>
            <ListItem>
                <Link href="https://github.com/fremtind/jokul/blob/main/packages/core/CHANGELOG.md">CHANGELOG</Link> for
                endringshistorikk
            </ListItem>
            <ListItem>
                <Link href="https://github.com/fremtind/jokul/blob/main/packages/core/MIGRATION.md">MIGRATION</Link> for
                hjelp ved _breaking changes_
            </ListItem>
            <ListItem>
                Om du skal lage et helt nytt prosjekt med Jøkul har vi{" "}
                <GatsbyLink className="jkl-link" to="/guider/utvikler-nytt-prosjekt">
                    en guide for det
                </GatsbyLink>
            </ListItem>
        </UnorderedList>
        <Paragraph>
            Til slutt kommer det månedlige oppsummeringer på bloggen som det er verdt å følge med på. Sleng den i
            RSS-leseren din, så går du ikke glipp av noe.
        </Paragraph>

        <HeadingLarge>Nyttige utviklerverktøy</HeadingLarge>
        <Paragraph>
            Du har kanskje noen favoritter selv, men ta gjerne en titt på disse verktøyene når du jobber i eget
            prosjekt.
        </Paragraph>

        <Paragraph className="jkl-bold">Visual Studio Code extensions</Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>
                <Link href="https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare">
                    Live Share
                </Link>{" "}
                gjør det mulig å dele editoren med én eller flere kolleger i sanntid
            </ListItem>
            <ListItem>
                <Link href="https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss">
                    SCSS IntelliSense
                </Link>{" "}
                gjør det enklere å se verdiene bak Sass-variabler
            </ListItem>
            <ListItem>
                <Link href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</Link>{" "}
                for å få formatering ved lagring
            </ListItem>
            <ListItem>
                Når du skal jobbe i Jøkul bør du ha konfigurert VS Code til å foreslå relative importer, så skal forslag
                bli riktig med pakkenavn i stedet for paths
            </ListItem>
        </UnorderedList>

        <Paragraph className="jkl-bold">Linting og testing</Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>
                <Link href="https://eslint.org">ESLint</Link> og tilhørende{" "}
                <Link href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">
                    extension til VS Code
                </Link>
            </ListItem>
            <ListItem>
                <Link href="https://stylelint.io">Stylelint</Link>
            </ListItem>
            <ListItem>
                <Link href="https://jestjs.io">Jest</Link> med axe-core via{" "}
                <Link href="https://github.com/nickcolley/jest-axe#readme">jest-axe</Link>
            </ListItem>
            <ListItem>
                <Link href="https://www.cypress.io">Cypress</Link> for ende-til-ende og visuelle regresjonstester via
                <Link href="https://github.com/meinaart/cypress-plugin-snapshots">cypress-plugin-snapshots</Link>
            </ListItem>
        </UnorderedList>

        <Paragraph className="jkl-bold">Andre verktøy</Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>
                Vi har flere{" "}
                <GatsbyLink className="jkl-link" to="/universell-utforming/verktoy">
                    verktøytips for test av universell utforming
                </GatsbyLink>
                .
            </ListItem>
            <ListItem>
                <Link href="https://github.com/nvm-sh/nvm">Node Version Manager</Link> hjelper med håndtering av Node
            </ListItem>
        </UnorderedList>

        <NavCard
            to="/profil/designprinsipper"
            component={GatsbyLink}
            title="Neste: Profil"
            description="Nå som du kjenner til det praktiske er det på tide å bli kjent med profilen"
            style={{ maxWidth: "25rem" }}
        />
    </motion.main>
);

export default PraktiskInfoUtviklere;
