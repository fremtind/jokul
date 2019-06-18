import React, { BaseHTMLAttributes } from "react";
import { SmallText } from "@fremtind/jkl-typography-react";
import { Grid, GridElement } from "@fremtind/jkl-grid-react";

interface FooterProps extends BaseHTMLAttributes<HTMLElement> {}

export const Footer = ({ className = "" }: FooterProps) => (
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
