import { NavCard } from "@fremtind/jkl-card-react";
import { Link } from "@fremtind/jkl-core";
import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import React, { FC } from "react";
import { Seo } from "../../components/seo";
import { HeadingLarge, Paragraph } from "../../components/Typography";

export const Head: FC = () => <Seo title="Introduksjon" />;

const Introduksjon: FC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <h1 className="jkl-portal-huge-title">
            Jøkul
            <br />
            Design&shy;system
        </h1>
        <Paragraph>
            Et designsystem kan være veldig mange ting. For oss er det blant annet et sett med felles normer for hvordan
            vi samarbeider om å bygge digitale produkter og tjenester.
        </Paragraph>
        <HeadingLarge>Hvorfor har vi et designsystem?</HeadingLarge>
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
