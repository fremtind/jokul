import React, { VFC } from "react";
import classNames from "classnames";

import "./Footer.scss";

interface Props {
    className?: string;
}

export const Footer: VFC<Props> = ({ className }) => {
    const componentClassName = classNames(
        {
            "jkl-portal-footer": true,
        },
        className,
    );
    return (
        <footer className={componentClassName}>
            <p className="jkl-portal-footer__column">
                Fremtind Forsikring er et nytt forsikringsselskap med lang erfaring. 1.januar 2019 fusjonerte
                forsikringsselskapene til SpareBank 1 og DNB, og Fremtind ble født.
            </p>
            <p className="jkl-portal-footer__column">
                Vi er landets tredje største forsikringsselskap, og det største med distribusjon i bank. Vi tilbyr alle
                skade- og personforsikringer for privatpersoner og bedrifter.
            </p>
            <p className="jkl-portal-footer__column">
                Vi har solid erfaring og kunnskap om forsikring, og utvikler nye produkter og tjenester som betyr noe i
                folks liv. Vi var de første til å utnytte teknologi for å gjøre bilforsikringen smart. Vi var også først
                ute med en enkel, selvbetjent helsevurdering.
            </p>
            <p className="jkl-portal-footer__column">
                Vi vil fortsette å bruke digital innovasjon og fornyelse for å gjøre hverdagen enklere og tryggere for
                folk og bedrifter flest.
            </p>
        </footer>
    );
};
