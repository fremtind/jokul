import { Grid, GridElement } from "@fremtind/jkl-grid-react";
import { TinyParagraph } from "@fremtind/jkl-typography-react";
import React from "react";

interface Props {
    className?: string;
}

export const Footer = ({ className = "" }: Props) => (
    <footer className={`jkl-footer ${className}`}>
        <Grid>
            <GridElement columnSpan={{ medium: 1, large: 3 }} />
            <GridElement columnSpan={3}>
                <ul>
                    <li>
                        <TinyParagraph>Fremtind Forsikring AS</TinyParagraph>
                    </li>
                    <li>
                        <TinyParagraph>Postboks 778 Sentrum, 0106 Oslo</TinyParagraph>
                    </li>
                    <li>
                        <TinyParagraph>
                            Telefon: <br />
                            SpareBank 1: 915 02300 <br />
                            DNB: 915 04800
                        </TinyParagraph>
                    </li>
                    <li>
                        <TinyParagraph>
                            Organisasjonsnummer:
                            <br />
                            915 651 232
                        </TinyParagraph>
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
