import { NavCard } from "@fremtind/jkl-card-react";
import { ListItem, OrderedList } from "@fremtind/jkl-list-react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Grid } from "../../components/Grid";
import { Image } from "../../components/image";
import { Seo } from "../../components/seo";
import {
    HeadingLarge,
    Ingress,
    PageTitle,
    Paragraph,
} from "../../components/Typography";
import { MainContent } from "../../layout/MainContent";

const pageTitle = "Slik er Jøkul satt sammen";

export const Head: FC = () => <Seo title={pageTitle} />;

const SlikErJokulSattSammen: FC = () => (
    <MainContent>
        <PageTitle>{pageTitle}</PageTitle>
        <Ingress>
            Siden et system er summen av dets deler i samspill, så er det greit
            å ha en samlet oversikt over alle delene på ett sted. Portalen er
            det stedet.
        </Ingress>
        <Image disableFullscreen>
            <StaticImage
                src="../../../static/assets/kom-i-gang/systemet.png"
                alt=""
            />
        </Image>

        <HeadingLarge>Portalen</HeadingLarge>
        <Paragraph>
            All informasjon som er felles for designsystemet skal ligge i
            portalen (denne siden), slik at vi har ett sted å gå til for å finne
            informasjon om vi lurer på noe. Se på dette området som et slags
            oppslagsverk for hele designsystemet. I portalen skal du finne alt
            du trenger av eksempler, råd og regler for bruk av komponenter og
            merkevaren vår.
        </Paragraph>
        <Paragraph>
            I tillegg til portalen lever Jøkul i det daglige på to forskjellige
            områder: Figma for design, og Github for kode. Felles dokumentasjon
            finner du i portalen.
        </Paragraph>
        <Grid className="jkl-portal-paragraph">
            <NavCard
                href="https://github.com/fremtind/jokul"
                title="Kode"
                description="Vi samler koden og dokumentasjonen vår på GitHub som åpen kildekode."
            />
            <NavCard
                href="https://www.figma.com/file/y9JtTf3whfTCHCdYSUXVQ5/?node-id=0%3A1"
                title="Design"
                description="Komponentene, fargene og typografi-skalaen vår er tilgjengelig i Figma."
            />
        </Grid>

        <HeadingLarge>Slik lages Jøkul</HeadingLarge>
        <Paragraph>
            Designsystemet forandres og utvikles på mange forskjellige måter,
            men i korte trekk er det fire steg som skal til for å mekke på
            systemet:
        </Paragraph>
        <OrderedList className="jkl-portal-ol">
            <ListItem>
                Du oppdager en bug eller noe annet du vil endre på
            </ListItem>
            <ListItem>Du fikser et forslag i Figma eller på GitHub</ListItem>
            <ListItem>
                Du deler forslaget ditt med oss eller noen andre
            </ListItem>
            <ListItem>
                Noen kameratsjekker deg, før det legges inn i Jøkul
            </ListItem>
        </OrderedList>
        <Paragraph>
            Det er noen detaljer underveis, men de er det lett å få hjelp med av
            en kollega i teamet ditt eller fra noen i Jøkul-teamet, om du måtte
            behøve det.
        </Paragraph>
        <NavCard
            href="https://github.com/fremtind/jokul/discussions/new?category=ideer"
            title="Vil du endre på noe?"
            description="Jøkul er under konstant endring, og vi ønsker oss feedback fra alle som bruker Jøkul."
            style={{ maxWidth: "26rem" }}
        />

        <HeadingLarge>Praktiske tips og triks</HeadingLarge>
        <Paragraph>
            Til slutt har vi en samling med verktøy og ekstra ressurser som vil
            gjøre hverdagen din enklere som bruker av verktøyene våre.
        </Paragraph>
        <Grid className="jkl-portal-paragraph">
            <NavCard
                component={GatsbyLink}
                to="/kom-i-gang/utvikling"
                title="For utviklere"
                description="Om pakker, steder å finne kodeeksempler og dokumentasjon, nyttige verktøy og mer."
            />
            <NavCard
                component={GatsbyLink}
                to="/kom-i-gang/design"
                title="For designere"
                description="Branching, Variants, Auto-Layout, breakpoints, praktiske plugins, “uskrevne regler” og mer."
            />
        </Grid>
    </MainContent>
);

export default SlikErJokulSattSammen;
