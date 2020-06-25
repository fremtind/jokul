import React from "react";

import "./IconTable.scss";
import { TableHeader } from "./TableHeader";
import { ExampleRow } from "./ExampleRow";

import IconCheckmark from "../../../../../static/assets/documentation/icon/ikon-checkmark.svg";
import IconEksternPil from "../../../../../static/assets/documentation/icon/ikon-ekstern-pil.svg";
import IconHamburger from "../../../../../static/assets/documentation/icon/ikon-hamburger.svg";
import IconKalender from "../../../../../static/assets/documentation/icon/ikon-kalender.svg";
import IconPilHoyre from "../../../../../static/assets/documentation/icon/ikon-pil-hoyre.svg";
import IconPilVenstre from "../../../../../static/assets/documentation/icon/ikon-pil-venstre.svg";
import IconPluss from "../../../../../static/assets/documentation/icon/ikon-pluss.svg";
import IconSok from "../../../../../static/assets/documentation/icon/ikon-sok.svg";
import IconX from "../../../../../static/assets/documentation/icon/ikon-X.svg";
import IconPilOpp from "../../../../../static/assets/documentation/icon/ikon-pil-opp.svg";
import IconPilNed from "../../../../../static/assets/documentation/icon/ikon-pil-ned.svg";

const icons = [
    {
        icon: IconCheckmark,
        text: "Checkmark",
    },
    {
        icon: IconX,
        text: "Lukk",
    },
    {
        icon: IconPluss,
        text: "Legg til",
    },
    {
        icon: IconSok,
        text: "Søk",
    },
    {
        icon: IconHamburger,
        text: "Hamburgermeny",
    },
    {
        icon: IconKalender,
        text: "Kalender",
    },
    {
        icon: IconEksternPil,
        text: "Ekstern pil",
    },
    {
        icon: IconPilHoyre,
        text: "Pil høyre",
    },
    {
        icon: IconPilVenstre,
        text: "Pil venstre",
    },
    {
        icon: IconPilOpp,
        text: "Pil opp",
    },
    {
        icon: IconPilNed,
        text: "Pil ned",
    },
];

export const Example = () => {
    return (
        <>
            <table className={`jkl-icon-table jkl-spacing--top-2`}>
                <TableHeader />
                <tbody>
                    {icons.map((icon, key) => (
                        <ExampleRow key={key} icon={icon.icon} text={icon.text} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
