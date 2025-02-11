import { Link } from "@fremtind/jkl-core";
import React from "react";
import { MainContent } from "../layout/MainContent";

const BetaPage: React.FC = () => {
    return (
        <MainContent>
            <p style={{ maxWidth: "60ch" }}>
                Vi jobber for tiden med en ny beta-portal, den vil bli
                tilgjengelig når det arbeidet er ferdig og i mellomtiden er det
                denne portalen som blir oppdatert.
            </p>
            <Link href="/">Gå til forsiden</Link>
        </MainContent>
    );
};

export default BetaPage;
