import React, { FC } from "react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import { NavCard } from "@fremtind/jkl-card-react";
import { ListItem, OrderedList } from "@fremtind/jkl-list-react";
import { HeadingLarge, Ingress, PageTitle, Paragraph } from "../../components/Typography";
import { Image } from "../../components/image";
import { Grid } from "../../components/Grid";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

const pageTitle = "Slik er Jøkul satt sammen";

const SlikErJokulSattSammen: FC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <Helmet>
            <title>{pageTitle} | Jøkul Designsystem</title>
        </Helmet>
        <PageTitle>{pageTitle}</PageTitle>
        <Ingress>
            Siden et system er summen av dets deler i samspill, så er det greit å ha en samlet oversikt over alle delene
            på ett sted. Portalen er det stedet.
        </Ingress>
        <Image disableFullscreen>
            <StaticImage src="../../../static/assets/kom-i-gang/systemet.png" alt="" />
        </Image>

        <HeadingLarge>Portalen</HeadingLarge>
        <Paragraph>
            All informasjon som er felles for designsystemet skal ligge i portalen (denne siden), slik at vi har ett
            sted å gå til for å finne informasjon om vi lurer på noe. Se på dette området som et slags oppslagsverk for
            hele designsystemet. I portalen skal du finne alt du trenger av eksempler, råd og regler for bruk av
            komponenter og merkevaren vår.
        </Paragraph>
        <Paragraph>
            I tillegg til portalen lever Jøkul i det daglige på to forskjellige områder: Figma for design, og Github for
            kode. Felles dokumentasjon finner du i portalen.
        </Paragraph>
        <Grid className="jkl-portal-paragraph" stackSmall>
            <NavCard
                href="https://github.com/fremtind/jokul"
                title="Kode"
                description="Vi samler koden og dokumentasjonen vår på GitHub som åpen kildekode."
            />
            <NavCard
                href="https://www.figma.com/file/y9JtTf3whfTCHCdYSUXVQ5/?node-id=0%3A1"
                title="Design"
                description="Vi designer løsningene våre i Figma, der vil du finne deler av Jøkul tilgjengelig som et bibliotek."
            />
        </Grid>

        <HeadingLarge>Slik lages Jøkul</HeadingLarge>
        <Paragraph>
            Designsystemet forandres og utvikles på mange forskjellige måter, men i korte trekk er det fire steg som
            skal til for å mekke på systemet:
        </Paragraph>
        <OrderedList>
            <ListItem>Du oppdager et behov for å endre noe, eller finner en bug som må fikses</ListItem>
            <ListItem>Du fikser et kjapt forslag i en Figma-branch eller en Pull Request på GitHub</ListItem>
            <ListItem>Du deler forslaget ditt med noen, enten i Teams, på GitHub, eller i et møte</ListItem>
            <ListItem>Vi samarbeider om å sjekke at alt funker som det skal, så legges tingen inn i Jøkul</ListItem>
        </OrderedList>
        <Paragraph>
            Det er noen detaljer underveis, men de er det lett å få hjelp til av en kollega i teamet ditt eller fra noen
            i kjerneteamet, om du måtte behøve det.
        </Paragraph>
        <NavCard
            href="https://github.com/fremtind/jokul/discussions/new?category=ideer"
            title="Vil du endre på noe?"
            description="Jøkul er under konstant endring, og vi ønsker oss feedback fra alle som bruker Jøkul."
            style={{ maxWidth: "26rem" }}
        />

        <HeadingLarge>Praktiske tips og triks</HeadingLarge>
        <Paragraph>
            Til slutt har vi en samling med verktøy og ekstra ressurser som vil gjøre hverdagen din enklere som bruker
            av verktøyene våre.
        </Paragraph>
        <Grid className="jkl-portal-paragraph" stackSmall>
            <NavCard
                component={GatsbyLink}
                to="/kom-i-gang/utvikling"
                title="For utviklere"
                description="Det er nyttig å ha et forhold til flyten fra design til kode i Jøkul, videre til kode i teamets egne apper."
            />
            <NavCard
                component={GatsbyLink}
                to="/kom-i-gang/design"
                title="For designere"
                description="Branching, Variants, Auto-Layout, breakpoints, praktiske plugins, “uskrevne regler” og mer."
            />
        </Grid>
    </motion.main>
);

export default SlikErJokulSattSammen;
