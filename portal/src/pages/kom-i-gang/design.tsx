import { NavCard } from "@fremtind/jkl-card-react";
import { Link } from "@fremtind/jkl-core";
import { ListItem, UnorderedList } from "@fremtind/jkl-list-react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { FC, useEffect } from "react";
import { GroupKey, GroupValue, useAnalytics } from "../../analytics";
import { FigmaLogo } from "../../components/figma-logo";
import { Grid } from "../../components/Grid";
import { Image } from "../../components/image";
import { Seo } from "../../components/seo";
import { HeadingLarge, Ingress, KeyboardShortcut, PageTitle, Paragraph } from "../../components/Typography";
import { RootItem, useFullscreenMenuContext } from "../../fullscreenMenuContext";
import { useNavigationLinks } from "../../layout/header/useNavigationLinks";
import { MainContent } from "../../layout/MainContent";

const pageTitle = "Praktisk i designhverdagen";

export const Head: FC = () => <Seo title={pageTitle} />;

const PraktiskDesignhverdagen: FC = () => {
    const fullscreenMenuContext = useFullscreenMenuContext();
    const { menuItems } = useNavigationLinks();

    const analytics = useAnalytics();
    useEffect(() => {
        analytics.setGroup(GroupKey.Profile, GroupValue.Designer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <MainContent>
            <PageTitle>{pageTitle}</PageTitle>
            <Ingress>
                Vi bruker Figma til å designe skisser. I tillegg har vi et{" "}
                <a href="https://github.com/fremtind/jokul/discussions" className="jkl-link">
                    diskusjonsområde
                </a>{" "}
                på GitHub for samarbeid, og Adobe-programmer for nisjerte utfordringer.
            </Ingress>

            <HeadingLarge>Komponentbibliotek</HeadingLarge>
            <Paragraph>
                Alle Jøkul-komponenter fra kodebasen er også tilgjengelig i Figma. Komponentene er satt opp etter alle
                kunstens regler, med{" "}
                <Link href="https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-auto-layout">
                    Auto-Layout
                </Link>{" "}
                og{" "}
                <Link href="https://help.figma.com/hc/en-us/articles/360056440594-Create-and-use-variants">
                    Variants
                </Link>
                . Hver komponent kommer med states ut av boksen, så du slipper å finne opp hjulet på nytt hver gang du
                skal lage skisser.
            </Paragraph>
            <Paragraph>
                Vi anbefaler alle som bruker Figma regelmessig å gjøre seg kjent med Auto-Layout. I tillegg til at det
                vil gi deg en dypere forståelse av hvordan komponentbiblioteket er bygget opp, vil det markant redusere
                tiden du vil bruke på å lage detaljerte skisser.
            </Paragraph>
            <Image disableFullscreen>
                <StaticImage
                    src="../../../static/assets/kom-i-gang/components-example.png"
                    alt="Skjermbilde som viser tre knappekomponenter til venstre for Figmas liste over komponenter fra komponentbiblioteket"
                />
            </Image>

            <HeadingLarge>Hvordan endrer jeg på biblioteket?</HeadingLarge>
            <Paragraph>
                Det er mange som bruker Figma-biblioteket, derfor må vi kvalitetssikre endringer før de
                tilgjengeliggjøres for alle våre brukere. Dette gjør vi gjennom branching, som i hovedsak går ut på at
                du lager en kopi av biblioteket og gjør endringer, før du deretter sender forslaget ditt tilbake til
                biblioteket via en merge request.
            </Paragraph>
            <Grid className="jkl-portal-paragraph">
                <NavCard
                    href="https://help.figma.com/hc/en-us/articles/360063144053-Create-branches-and-merge-changes"
                    title="Branching"
                    description="Aldri brukt branching i Figma før? Ta en kikk på introduksjonen fra Figma."
                />
                <NavCard
                    to="/guider/hvordan-endre-jokul#klar-for-å-lansere-huskelista-hjelper-deg-"
                    component={GatsbyLink}
                    title="Endre på Jøkul"
                    description="Det er et par ting å huske på, så ta en kikk på tipsene vi har skrevet."
                />
            </Grid>
            <Image
                caption={
                    <>
                        Branching: Ved å lage en kopi (<b>branch</b>) av en fil inne i seg selv, kan man enkelt
                        eksperimentere med nye tillegg eller endringer, uten å måtte bekymre seg for å “ødelegge” noe
                        mens man utforsker. Når man er ferdig kan man enkelt sette de inn i hovedfila, via en{" "}
                        <b>merge request</b>.{" "}
                    </>
                }
            >
                <StaticImage src="../../../static/assets/kom-i-gang/design-branchdiagram.png" alt="" />
            </Image>

            <HeadingLarge>Praktiske plugins og tips</HeadingLarge>
            <Paragraph>
                Takket være masse flinke folk på internett så finnes det et trucklass med plugins, tips og triks for å
                gjøre Figma-hverdagen enklere. Vi har samlet våre beste tips nedenfor:
            </Paragraph>
            <UnorderedList className="jkl-portal-ul">
                <ListItem>
                    Endre “Big Nudge...” innstillingen i Figma fra 10pt til 8pt, da hele spacingskalaen vår går opp i
                    åttegangeren. (<FigmaLogo /> → Preferences → Nudge amount...)
                </ListItem>
                <ListItem>
                    <Link className="jkl-link" href="https://www.figma.com/community/plugin/732603254453395948/Stark">
                        Stark
                    </Link>{" "}
                    er en Figma-plugin for å sjekke kontraster og enkle UU krav raskt
                </ListItem>
                <ListItem>
                    <Link
                        className="jkl-link"
                        href="https://chrome.google.com/webstore/detail/figma-github/bieeiojdjdkkacfckmaamnbinloppgjf"
                    >
                        Figma-Github
                    </Link>{" "}
                    lar deg se skisser direkte rett i GitHub kommentarer (Chrome-plugin)
                </ListItem>
                <ListItem>
                    <Link
                        className="jkl-link"
                        href="https://www.figma.com/community/plugin/741895659787979282/Instance-Finder"
                    >
                        Instance Finder
                    </Link>{" "}
                    hjelper deg med å finne brukte instanser
                </ListItem>
                <ListItem>
                    <Link
                        className="jkl-link"
                        href="https://www.figma.com/community/plugin/973621811122426089/Figma-Tips"
                    >
                        Figma-Tips
                    </Link>{" "}
                    samler alt du måtte lure på av hvordan ting funker i Figma inni et søkbart vindu
                </ListItem>
            </UnorderedList>
            <Paragraph className="jkl-bold">Jøkul-teamets favoritthurtigtaster i Figma</Paragraph>
            <UnorderedList className="jkl-portal-ul">
                <ListItem>
                    Auto-Layout (<KeyboardShortcut>⇧A</KeyboardShortcut>), Frame (
                    <KeyboardShortcut>⌥⌘G</KeyboardShortcut>)
                </ListItem>
                <ListItem>
                    Søk etter komponenter (<KeyboardShortcut>⇧I</KeyboardShortcut>)
                </ListItem>
                <ListItem>
                    macOS “spotlight-style” kommandosøk (<KeyboardShortcut>⌘P</KeyboardShortcut>)
                </ListItem>
                <ListItem>
                    Show Layout Grid (<KeyboardShortcut>⌃G</KeyboardShortcut>)
                </ListItem>
            </UnorderedList>

            <NavCard
                to="/profil/designprinsipper"
                component={GatsbyLink}
                title="Neste: Profil"
                description="Nå som du kjenner til det praktiske er det på tide å bli kjent med profilen"
                style={{ maxWidth: "25rem" }}
                onClick={() => {
                    fullscreenMenuContext.setCurrentItem(menuItems[1] as RootItem);
                }}
            />
        </MainContent>
    );
};

export default PraktiskDesignhverdagen;
