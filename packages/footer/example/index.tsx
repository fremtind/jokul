import React from "react";
import ReactDOM from "react-dom";
import { SmallParagraph } from "@fremtind/jkl-typography-react";
import { Grid, GridElement } from "@fremtind/jkl-grid-react";
import "@fremtind/jkl-grid/grid.css";
import "@fremtind/jkl-core/core.css";
import "../footer.scss";

// eslint-disable-next-line
const FooterDemo = ({ className = "" }) => (
    <footer className={`jkl-footer ${className}`}>
        <Grid>
            <GridElement columnSpan={{ medium: 1, large: 3 }} />
            <GridElement columnSpan={3}>
                <ul>
                    <li>
                        <SmallParagraph>Fremtind Forsikring AS</SmallParagraph>
                    </li>
                    <li>
                        <SmallParagraph>Postboks 778 Sentrum, 0106 Oslo</SmallParagraph>
                    </li>
                    <li>
                        <SmallParagraph>
                            Telefon: <br />
                            SpareBank 1: 915 02300 <br />
                            DNB: 915 04800
                        </SmallParagraph>
                    </li>
                    <li>
                        <SmallParagraph>
                            Organisasjonsnummer:
                            <br />
                            915 651 232
                        </SmallParagraph>
                    </li>
                </ul>
            </GridElement>
            <GridElement columnSpan={3}>
                <ul>
                    <li>
                        <a href="/">Om oss</a>
                    </li>
                    <li>
                        <a href="/">Spørsmål og svar</a>
                    </li>
                    <li>
                        <a href="/">Presse</a>
                    </li>
                    <li>
                        <a href="/">Personvern</a>
                    </li>
                    <li>
                        <a href="/">Klage</a>
                    </li>
                </ul>
            </GridElement>
        </Grid>
    </footer>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<FooterDemo />, mountNode);
