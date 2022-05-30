import React, { FC } from "react";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "@fremtind/jkl-core";
import { NavCard } from "@fremtind/jkl-card-react";
import { HeadingLarge, Ingress, PageTitle, Paragraph } from "../../components/Typography";
import { Image } from "../../components/image";
import { Grid } from "../../components/Grid";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const pageTitle = "Deg og Jøkul";

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
            Med et designsystem følger det et litt annerledes tankesett som kan virke uvant dersom man ikke har et
            forhold til det fra før.
        </Ingress>

        <HeadingLarge>Jøkul eies av alle</HeadingLarge>
        <Paragraph>
            Litt som et samvirkelag, er Jøkul et produkt av en større felles innsats fra alle som bruker systemet. Siden
            du er både brukeren og skaperen av Jøkul, blir designsystemet så bra som du gjør det til selv, ved at du
            deltar i utviklingen. Det betyr også at hvis du ser noe som er feil eller som kan forbedres, så er det opp
            til deg å gjennomføre den endringen.
        </Paragraph>
        <Image disableFullscreen>
            <StaticImage src="../../../static/assets/kom-i-gang/samvirke.png" alt="" />
        </Image>

        <HeadingLarge>Diskusjoner på GitHub</HeadingLarge>
        <Paragraph>
            Når vi ikke er fysisk samlet, deler vi idéer, forslag til nye funksjoner, endringer og bugs på GitHub. Ved å
            samle alt på ett sted gjør vi det enklere for alle å delta, og for kjerneteamet å holde oversikt. Innleggene
            stammer som regel fra behov og diskusjoner ute i teamene, eller forumet. GitHub er ofte startpunktet hvis du
            vil påvirke designsystemet.
        </Paragraph>
        <Image>
            <StaticImage
                src="../../../static/assets/kom-i-gang/github-discussions.png"
                alt="Skjermbilde som viser oversikten du finner når du først kommer til Jøkuls GitHub Discussions"
            />
        </Image>
        <Grid className="jkl-portal-paragraph">
            <NavCard
                href="https://github.com/fremtind/jokul/discussions"
                title="Discussions"
                description="Del dine idéer eller diskuter Jøkul med andre designere og utviklere i Fremtind."
            />
            <NavCard
                href="https://www.figma.com/file/HOmcpKHfjHnS9f8397hfxU/Kurs%3A-Github-for-Designere"
                title="Lynkurs"
                description="Ny på GitHub? Vi tar deg gjennom de viktigste elementene av plattformen."
            />
        </Grid>

        <HeadingLarge>Designsystemforum</HeadingLarge>
        <Paragraph>
            Vi samles ukentlig for å dele og drøfte hva som skjer i designsystemet. Forumet har “åpen mikk” og hvem som
            helst kan stille opp med et tema de vil sparre med andre på. Agendaen er basert på en{" "}
            <Link href="https://teams.microsoft.com/l/channel/19%3adb7fc5da697547ad8a199247b3be66dc%40thread.skype/Support%2520Designsystem?groupId=460dde26-9370-4131-8b04-61b3e9b47048&tenantId=273051d7-ce03-4594-b66d-0c68e4c778c0">
                tråd fra teams som kommer ut i forkant
            </Link>
            . Ofte deler vi forumet i to, med en presentasjonsdel først, og en arbeidsdel hvor man kan sparre på tvers
            av team og fag.
        </Paragraph>
        <Image>
            <StaticImage
                src="../../../static/assets/kom-i-gang/forum.png"
                alt="Bilde som viser en gruppe Fremtindere rundt et langbord under et designsystemforum. En person snakker, og de andre rundt bordet følger med på personen. En storskjerm viser deltagere som er med på møtet gjennom Teams."
            />
        </Image>

        <NavCard
            to="/kom-i-gang/hjelp"
            component={GatsbyLink}
            title="Neste: Hvor kan du få hjelp?"
            description="Vi har mange ressurser og arenaer å trekke på for å hjelpe hverandre med Jøkul i hverdagen."
            style={{ maxWidth: "29rem" }}
        />
    </motion.main>
);

export default DegOgJokul;
