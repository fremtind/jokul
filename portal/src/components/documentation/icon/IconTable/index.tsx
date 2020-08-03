import React from "react";

import "./IconTable.scss";
import { TableHeader } from "./TableHeader";
import { ExampleRow } from "./ExampleRow";
import { icon } from "../Icon";

const icons = [
    {
        name: "checkmark",
        icon: icon("checkmark"),
        text: "Hake",
    },
    {
        icon: icon("x"),
        text: "Lukk",
    },
    {
        icon: icon("pluss"),
        text: "Legg til",
    },
    {
        icon: icon("sok"),
        text: "Søk",
    },
    {
        icon: icon("hamburger"),
        text: "Hamburger meny",
    },
    {
        icon: icon("kalender"),
        text: "Kalender",
    },
    {
        icon: icon("eksternPil"),
        text: "Pil opp mot høyre",
    },
    {
        icon: icon("pilHoyre"),
        text: "Pil høyre",
    },
    {
        icon: icon("pilVenstre"),
        text: "Pil venstre",
    },
    {
        icon: icon("pilOpp"),
        text: "Pil opp",
    },
    {
        icon: icon("pilNed"),
        text: "Pil ned",
    },
];

export const Example = () => {
    return (
        <>
            <table className={`jkl-icon-table jkl-spacing--top-2`}>
                <TableHeader />
                <tbody>
                    {icons.map((ico) => (
                        <ExampleRow
                            key={`ICON-${ico.text.replace(/\s/g, "").toUpperCase()}`}
                            icon={ico.icon}
                            text={ico.text}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};
