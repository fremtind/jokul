import { ErrorMessageBox } from "@fremtind/jkl-message-box-react";
import { Link as InternalLink } from "gatsby";
import React, { FC } from "react";
import { MainContent } from "../../layout/MainContent";

const NotFoundPageWithMessage: FC = () => (
    <MainContent>
        <h1 className="jkl-title jkl-spacing-2xl--bottom jkl-spacing-2xl--top">
            Huff da, nå har det skjedd en feil hos oss!
        </h1>
        <div className="jkl-portal-paragraph">
            <ErrorMessageBox title="Feilmelding" role="none presentation">
                Kunne ikke snakke med systemet
            </ErrorMessageBox>
        </div>
        <p className="jkl-portal-paragraph">Vi setter i gang med å fikse feilen. Imens kan du prøve å:</p>
        <ul className="jkl-portal-paragraph">
            <li>
                <InternalLink className="jkl-link" to="/profil/layout">
                    gå til Mine sider
                </InternalLink>
            </li>
            <li>
                <InternalLink className="jkl-link" to="/profil/layout">
                    logge ut
                </InternalLink>{" "}
                og inn igjen
            </li>
        </ul>
    </MainContent>
);

export default NotFoundPageWithMessage;
