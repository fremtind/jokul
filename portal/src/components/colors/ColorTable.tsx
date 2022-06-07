import React, { FC } from "react";
import { ColorTableRow } from "./";
import "./color-table.scss";

interface ColorTableProps {
    colorNames: string[];
}

export const ColorTable: FC<ColorTableProps> = ({ colorNames }) => {
    const colors = colorNames.map((readableName) => {
        switch (readableName) {
            case "Suksess":
                // Utnytt at success--darkbg er lik meldingsfarge suksess
                return { label: readableName, variable: "suksess--darkbg" };
            case "Feil":
                // Utnytt at error--darkbg er lik meldingsfarge feil
                return { label: readableName, variable: "feil--darkbg" };
            case "Støttefarge Rød":
                return { label: readableName, variable: "feil" };
            case "Støttefarge Grønn":
                return { label: readableName, variable: "suksess" };
            case "Snøhvit":
                return { label: readableName, variable: "snohvit" };
            case "Fjellgrå":
                return { label: readableName, variable: "fjellgra" };
            default:
                return { label: readableName, variable: readableName.toLowerCase() };
        }
    });

    return (
        <table className="jkl-portal-color-table">
            <thead>
                <tr>
                    <th className="jkl-portal-color-table__header">Valør</th>
                    <th className="jkl-portal-color-table__header">Navn</th>
                    <th className="jkl-portal-color-table__header">Hex</th>
                    <th className="jkl-portal-color-table__header">RGB</th>
                </tr>
            </thead>
            <tbody>
                {colors.map((color) => (
                    <ColorTableRow key={color.label} colorName={color.label} colorVariable={color.variable} />
                ))}
            </tbody>
        </table>
    );
};
