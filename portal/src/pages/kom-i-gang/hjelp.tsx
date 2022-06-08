import { NavCard } from "@fremtind/jkl-card-react";
import { Link } from "@fremtind/jkl-core";
import { UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Portrait, PortraitGallery } from "../../components/portrait-gallery";
import { HeadingLarge, Ingress, PageTitle, Paragraph } from "../../components/Typography";

const pageTitle = "Hvor kan du få hjelp?";

const DegOgJokul: FC = () => (
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
            Alle som bruker Jøkul er ansvarlig for å utvikle og forvalte systemet, men av og til trenger vi alle litt
            ekstra hjelp.
        </Ingress>
        <HeadingLarge>Hvor du kan spørre</HeadingLarge>
        <Paragraph>
            Sjansen for at noen har støtt på samme utfordring som deg tidligere er nok ganske stor. Derfor kan det være
            lurt å svinge innom disse sjekkpunktene om du lurer på noe:
        </Paragraph>
        <UnorderedList className="jkl-portal-ul">
            <ListItem>Har du lett i portalen? Står det noe på GitHub?</ListItem>
            <ListItem>
                Hvis det ikke står noe på GitHub, har du{" "}
                <Link href="https://github.com/fremtind/jokul/discussions/new">postet om det</Link>?
            </ListItem>
            <ListItem>
                Har du spurt i designsystemforum eller{" "}
                <Link href="https://teams.microsoft.com/l/channel/19%3adb7fc5da697547ad8a199247b3be66dc%40thread.skype/Support%2520Designsystem?groupId=460dde26-9370-4131-8b04-61b3e9b47048&tenantId=273051d7-ce03-4594-b66d-0c68e4c778c0">
                    på teams
                </Link>
                ?
            </ListItem>
        </UnorderedList>

        <HeadingLarge>Kjerneteamet</HeadingLarge>
        <Paragraph>
            Selv om designsystemet er laget av alle, er det et par ildsjeler som jobber ekstra mye med Jøkul. Jobben til
            kjerneteamet er ikke å bygge nye komponenter eller fikse feil i systemet, men å sørge for at alt går på
            skinner i kulissene—blant annet ved å vise deg hvordan du fikser feil i systemet selv. Her er noen eksempler
            på ting kjerneteamet sørger for:
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
            Du finner oss i 7. etasje i H2 (av og til), og på Teams i{" "}
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
            to="/kom-i-gang/jobb-med-kjerneteamet"
            component={GatsbyLink}
            title="Neste: Jobb med kjerneteamet"
            description="Vi "
        />
    </motion.main>
);

export default DegOgJokul;
