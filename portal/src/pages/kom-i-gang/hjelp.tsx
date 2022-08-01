import { NavCard } from "@fremtind/jkl-card-react";
import { Link } from "@fremtind/jkl-core";
import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Portrait, PortraitGallery } from "../../components/portrait-gallery";
import { Seo } from "../../components/seo";
import { HeadingLarge, Ingress, PageTitle, Paragraph } from "../../components/Typography";

const pageTitle = "Hvor kan du få hjelp?";

export const Head: FC = () => <Seo title={pageTitle} />;

const DegOgJokul: FC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main"
    >
        <PageTitle>{pageTitle}</PageTitle>
        <Ingress>
            Jøkul er et stort system, og det er mange ting å skulle lære. Av og til trenger vi alle litt ekstra hjelp.
        </Ingress>

        <Paragraph>
            Sving innom disse sjekkpunktene om du lurer på noe. Sjansen for at noen har støtt på samme utfordring som
            deg tidligere er nok ganske stor.
        </Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>Har du lett etter svar her i portalen?</ListItem>
            <ListItem>
                Har <Link href="https://github.com/fremtind/jokul/discussions">GitHub</Link> noe relevant under
                diskusjoner eller issues?
            </ListItem>
            <ListItem>
                Har noen spurt om det{" "}
                <Link href="https://teams.microsoft.com/l/channel/19%3adb7fc5da697547ad8a199247b3be66dc%40thread.skype/Support%2520Designsystem?groupId=460dde26-9370-4131-8b04-61b3e9b47048&tenantId=273051d7-ce03-4594-b66d-0c68e4c778c0">
                    på teams
                </Link>
                ?
            </ListItem>
        </UnorderedList>
        <Paragraph>
            Ikke nøl med å spørre om hjelp enten på GitHub Discussions eller i Support Designsystem på Teams hvis du
            ikke finner svar.
        </Paragraph>

        <HeadingLarge>Office Hours</HeadingLarge>
        <Paragraph>
            Du kan komme på <i>office hours</i> hvis du trenger å sparre med oss i Jøkul-teamet om noe. Dette er faste
            tidspunkter hver uke hvor vi setter av tid til å kunne gi god hjelp.
        </Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>
                Tirsdager <time dateTime="13:00">13:00</time> til <time dateTime="14:00">14:00</time> og torsdager{" "}
                <time dateTime="14:00">14:00</time> til <time dateTime="15:00">15:00</time>.
            </ListItem>
            <ListItem>Drop-in en-til-en support.</ListItem>
            <ListItem>En designer og en utvikler er tilgjengelig.</ListItem>
        </UnorderedList>
        <Paragraph>
            Vi er tilgjengelig også utenfor office hours, men det kan hende du må vente litt lenger på å få hjelp.
        </Paragraph>
        <Paragraph>
            Kom veldig gjerne til oss der vi sitter i 7. etasje i H2 — ut mot Youngs gate. Det er ofte lettere å sparre
            når vi sitter i samme rom. Vi er så klart også tilgjengelige digitalt. Det er bare å sende en melding til en
            av oss i Jøkul-teamet.
        </Paragraph>
        <HeadingLarge>Jøkul-teamet</HeadingLarge>
        <Paragraph>
            Jobben til oss i Jøkul-teamet er å sørge for at alt går på skinner i kulissene — blant annet ved å vise deg
            hvordan du endrer på systemet selv. Her er noen eksempler på ting vi sørger for:
        </Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>Vi viser deg hvordan du går fram for å selv lage komponenter og fikse bugs</ListItem>
            <ListItem>Vi er eksperter på designsystemet</ListItem>
            <ListItem>Vi er superbrukere av verktøyene for designsystemet</ListItem>
            <ListItem>Vi sparrer med deg på design og utvikling med og av Jøkul</ListItem>
        </UnorderedList>
        <PortraitGallery>
            <Portrait name="William" title="Utvikler">
                <StaticImage
                    className="jkl-portal-portrait__image"
                    src="../../../static/assets/kom-i-gang/portrett-william.jpg"
                    alt=""
                />
            </Portrait>
            <Portrait name="Mona" title="Designer">
                <StaticImage
                    className="jkl-portal-portrait__image"
                    src="../../../static/assets/kom-i-gang/portrett-mona.jpg"
                    alt=""
                />
            </Portrait>
            <Portrait name="Pio" title="Utvikler">
                <StaticImage
                    className="jkl-portal-portrait__image"
                    src="../../../static/assets/kom-i-gang/portrett-pio.jpg"
                    alt=""
                />
            </Portrait>
            <Portrait name="Glenn" title="Teamleder">
                <StaticImage
                    className="jkl-portal-portrait__image"
                    src="../../../static/assets/kom-i-gang/portrett-glenn.jpg"
                    alt=""
                />
            </Portrait>
            <Portrait name="Lou" title="Designer">
                <StaticImage
                    className="jkl-portal-portrait__image"
                    src="../../../static/assets/kom-i-gang/portrett-lou.jpg"
                    alt=""
                />
            </Portrait>
            <Portrait name="Øyvind" title="Designer">
                <StaticImage
                    className="jkl-portal-portrait__image"
                    src="../../../static/assets/kom-i-gang/portrett-oyvind.jpg"
                    alt=""
                />
            </Portrait>
        </PortraitGallery>
        <p className="jkl-small" style={{ maxWidth: "45rem" }}>
            Du finner oss i 7. etasje i H2 (ut mot Youngs gate), og på Teams i{" "}
            <a
                href="https://teams.microsoft.com/l/channel/19%3adb7fc5da697547ad8a199247b3be66dc%40thread.skype/Support%2520Designsystem?groupId=460dde26-9370-4131-8b04-61b3e9b47048&tenantId=273051d7-ce03-4594-b66d-0c68e4c778c0"
                className="jkl-link"
            >
                Support Designsystem-kanalen
            </a>
            . Vi driver også med god gammeldags mail på:{" "}
            <a href="mailto:fremtind.designsystem@fremtind.no" className="jkl-link">
                fremtind.designsystem@fremtind.no
            </a>
            .
        </p>

        <NavCard
            className="jkl-spacing-xl--top"
            style={{ maxWidth: "35rem" }}
            to="/kom-i-gang/jobb-med-teamet"
            component={GatsbyLink}
            title="Neste: Jobb med Jøkul-teamet"
            description="Finn ut litt mer om hva vi gjør og hvordan vi kan hjelpe deg."
        />
    </motion.main>
);

export default DegOgJokul;
