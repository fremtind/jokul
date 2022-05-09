import React, { VFC } from "react";

import "./IconTable.scss";
import { TableHeader } from "./TableHeader";
import { ExampleRow } from "./ExampleRow";
import {
    Close,
    CheckMark,
    Plus,
    Search,
    Hamburger,
    Calendar,
    ArrowUpRight,
    ArrowUp,
    ArrowDown,
    ArrowRight,
    ArrowLeft,
    Error,
    Warning,
    Success,
    Info,
} from "@forbrukerradet/jkl-icons-react";

const icons = [
    {
        icon: <CheckMark />,
        text: "Hake",
    },
    {
        icon: <Close />,
        text: "Lukk",
    },
    {
        icon: <Plus />,
        text: "Legg til",
    },
    {
        icon: <Search />,
        text: "Søk",
    },
    {
        icon: <Hamburger />,
        text: "Hamburger meny",
    },
    {
        icon: <Calendar />,
        text: "Kalender",
    },
    {
        icon: <ArrowUpRight />,
        text: "Pil opp mot høyre",
    },
    {
        icon: <ArrowRight />,
        text: "Pil høyre",
    },
    {
        icon: <ArrowLeft />,
        text: "Pil venstre",
    },
    {
        icon: <ArrowUp />,
        text: "Pil opp",
    },
    {
        icon: <ArrowDown />,
        text: "Pil ned",
    },
    {
        icon: <Error />,
        text: "Feil",
    },
    {
        icon: <Warning />,
        text: "Advarsel",
    },
    {
        icon: <Success />,
        text: "Suksess",
    },
    {
        icon: <Info />,
        text: "Info",
    },
];

export const PortalIconExample: VFC = () => {
    return (
        <>
            <table className={`jkl-icon-table jkl-spacing-xl--top`}>
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
