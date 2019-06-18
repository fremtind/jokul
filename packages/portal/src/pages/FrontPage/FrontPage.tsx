import React from "react";
import { H2, LeadParagraph, P } from "@fremtind/jkl-typography-react";
import { Grid } from "@fremtind/jkl-grid-react";
import { useWindowSize } from "../../components/useWindowSize/useWindowSize";
import { GridContent, GridOffsetBefore, GridOffsetAfter } from "../../components/GridDefaults/GridDefaults";
import "../styles.scss";

const FrontPage = () => {
    const { width } = useWindowSize();
    const smallBreakpoint = 768;
    return (
        <>
            <Grid className={`${width < smallBreakpoint ? "portal-page--mobile" : ""}`}>
                <GridOffsetBefore />
                <GridContent>
                    <LeadParagraph>
                        Jøkul er et designsystem som lar oss designe og utvikle konsistente løsninger. Målet vårt er å
                        samle ressursene som gjør at alle kan få kunnskap om hvordan vi best mulig lager Fremtind sine
                        løsninger.
                    </LeadParagraph>
                </GridContent>
                <GridOffsetAfter />
                <GridOffsetBefore />
                <GridContent>
                    <H2>Her finner du</H2>
                    <P>
                        På disse sidene finner du ressurser, dokumentasjon og eksempler for designere, utviklere eller
                        andre som vil lage løsninger for Fremtind.
                    </P>
                    <P>
                        Jøkul er et levende bibliotek og vil aldri være ferdig, men her finner du det som til en hver
                        tid er førende for hvordan vi skal levere gode opplevelser. For å få til dette er vi avhengige
                        av at de som tar det i bruk bidrar tilbake til systemet med sine tanker og erfaringer - så alle
                        kommentarer og innspill mottas med takk.
                    </P>
                </GridContent>
                <GridOffsetAfter />
                <GridOffsetBefore />
                <GridContent>
                    <H2>Kontakt oss</H2>
                    <P>
                        Har du spørsmål kan de rettes til følgende <br />
                        Designsystemteamet - Glenn <br />
                        Marked og merkevare - Jarle <br />
                        Teknisk - Pio
                        <br />
                        Design - Mikkel
                    </P>
                </GridContent>
                <GridOffsetAfter />
            </Grid>
        </>
    );
};

export default FrontPage;
