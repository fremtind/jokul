import React from "react";
import ReactDOM from "react-dom";
import { SmallText } from "@fremtind/jkl-typography-react";
import { Grid, GridElement } from "@fremtind/jkl-grid-react";
import "@fremtind/jkl-grid/build/css/grid.css";
import "@fremtind/jkl-core/build/css/typography/typography.css";
import "../src/footer.scss";

// eslint-disable-next-line
const FooterDemo = ({ className = "" }) => (
    <footer className={`jkl-footer ${className}`}>
        <Grid>
            <GridElement columnSpan={{ medium: 1, large: 3 }} />
            <GridElement columnSpan={3}>
                <ul>
                    <li>
                        <SmallText>Fremtind Forsikring AS</SmallText>
                    </li>
                    <li>
                        <SmallText>Postboks 778 Sentrum, 0106 Oslo</SmallText>
                    </li>
                    <li>
                        <SmallText>
                            Telefon: <br />
                            SpareBank 1: 915 02300 <br />
                            DNB: 915 04800
                        </SmallText>
                    </li>
                    <li>
                        <SmallText>
                            Organisasjonsnummer:
                            <br />
                            915 651 232
                        </SmallText>
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
