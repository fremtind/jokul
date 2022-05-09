import React, { FC } from "react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "@forbrukerradet/jkl-core";
import { NavCard } from "@forbrukerradet/jkl-card-react";
import { UnorderedList, ListItem } from "@forbrukerradet/jkl-list-react";
import { HeadingLarge, Paragraph } from "../../components/Typography";
import { Helmet } from "react-helmet";

const Introduksjon: FC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <Helmet>
            <title>Introduksjon | Jøkul Designsystem</title>
        </Helmet>
        <h1 className="jkl-portal-huge-title">
            Jøkul
            <br />
            Design&shy;system
        </h1>
        <Paragraph>
            Designsystemet vårt hjelper oss med å opprettholde en felles forståelse for hvordan vi gjør ting sammen. Det
            er mange gode grunner til å ha et designsystem. I Fremtind gir det oss en god del fordeler, som for
            eksempel:
        </Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>Det gir oss økt fart og bedre forutsetninger for innovasjon</ListItem>
            <ListItem>Det gir oss mer tid til å fokusere på andre ting</ListItem>
            <ListItem>Det gir oss et felles språk på tvers av produkter og tjenester</ListItem>
            <ListItem>Det skaper samhold å lage ting sammen som alle bruker</ListItem>
        </UnorderedList>
        <Paragraph>
            Jøkul har blitt anerkjent av det norske fagmiljøet for design (Grafill),{" "}
            <Link href="https://www.grafill.no/visuelt/vinnere/2021/digital-design/designsystemer/designsystem-jokul">
                da vi ble tildelt gull i Visuelt
            </Link>{" "}
            for designsystemer.
        </Paragraph>

        <HeadingLarge>De viktigste tingene</HeadingLarge>
        <Paragraph>
            Jøkul har mange bevegelige deler og det er mye man kan fordype seg i. På de neste sidene vil du få en kort
            innføring (cirka 15 minutter) i de viktigste temaene vi forventer at du kjenner til, så du har gode
            forutsetninger for å bli en superbruker.
        </Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>Hvordan du forholder deg til Jøkul</ListItem>
            <ListItem>Hvor du kan finne hjelp</ListItem>
            <ListItem>Hvordan systemet er satt sammen</ListItem>
            <ListItem>Tips og triks for deg som designer og utvikler</ListItem>
        </UnorderedList>

        <NavCard
            to="/kom-i-gang/deg-og-jokul"
            component={GatsbyLink}
            title="Neste: Deg og Jøkul"
            description="Vi starter med det essensielle; hvordan du skal forholde deg til designsystemet."
            style={{ maxWidth: "25rem" }}
        />
    </motion.main>
);

export default Introduksjon;
