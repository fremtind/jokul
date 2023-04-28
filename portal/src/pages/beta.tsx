import React from "react";
import { Seo } from "../components/seo";
import { MainContent } from "../layout/MainContent";

export const Head: React.FC = () => <Seo title="Beta av den nye Jøkul-portalen" />;

const betaLink = "https://portalen.distlosn-ds-jkl-preprod.aws.fremtind.no";

const BetaPage: React.FC = () => {
    if (window.location) {
        window.location.assign(betaLink);
    }

    return (
        <MainContent>
            <a className="jkl-link jkl-link--external" href={betaLink}>
                Klikk her om du ikke blir videresendt
            </a>
            .
        </MainContent>
    );
};

export default BetaPage;
