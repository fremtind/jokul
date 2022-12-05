import { NavCard } from "@fremtind/jkl-card-react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { FC } from "react";
import feilmeldingMedMelding from "../../static/assets/demoer/feilmelding-med-melding.png";
import feilmelding from "../../static/assets/demoer/feilmelding.png";
import skjemavalidering from "../../static/assets/demoer/skjemavalidering.png";
import { Seo } from "../components/seo";
import "../styles/demoer.scss";

export const Head: FC = () => <Seo title="Demoer" />;

const DemoPage: FC = () => (
    <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="jkl-portal__main jkl-portal__main--full-width"
    >
        <h1 className="jkl-title jkl-spacing-2xl--bottom jkl-spacing-2xl--top">Demoer</h1>
        <p className="jkl-portal-paragraph">
            Demoer viser eksempler på bruk av komponenter i en større sammenheng. Hvert eksempel opner seg i en egen
            fane.
        </p>
        <ul className="jkl-portal-demoer__demo-list">
            <li className="jkl-portal-demoer__demo">
                <NavCard
                    component={Link}
                    padding="l"
                    to="/demoer/skjemavalidering"
                    title="Skjemavalidering"
                    image={{ src: skjemavalidering, alt: "" }}
                    description="Viser et helt skjema med valideringsfeil hvis du ikke fyller ut noe."
                />
            </li>
            <li className="jkl-portal-demoer__demo">
                <NavCard
                    component={Link}
                    padding="l"
                    to="/demoer/feilmelding-500"
                    title="Feilmelding"
                    image={{ src: feilmelding, alt: "" }}
                    description="Viser at noe er galt om siden du prøver å besøke ikke fungerer."
                />
            </li>
            <li className="jkl-portal-demoer__demo">
                <NavCard
                    component={Link}
                    padding="l"
                    to="/demoer/feilmelding-500-med-melding"
                    title="Feilmelding med melding"
                    image={{ src: feilmeldingMedMelding, alt: "" }}
                    description="Viser at noe er galt, med feilmelding, om siden du prøver å besøke ikke fungerer."
                />
            </li>
        </ul>
    </motion.main>
);

export default DemoPage;
