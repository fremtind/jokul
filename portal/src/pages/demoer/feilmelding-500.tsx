import { Link as InternalLink } from "gatsby";
import React, { FC } from "react";
import { MainContent } from "../../layout/MainContent";

const NotFoundPage: FC = () => (
    <MainContent>
        <h1 className="title my-64">Huff da, nå har det skjedd en feil hos oss!</h1>
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

export default NotFoundPage;
