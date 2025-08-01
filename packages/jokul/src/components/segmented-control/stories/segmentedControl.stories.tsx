import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Link } from "../../link/index.js";
import {
    CheckListItem,
    CrossListItem,
    List,
    ListItem,
} from "../../list/index.js";
import { SegmentedControl } from "../SegmentedControl.js";

import "../styles/_index.scss";
import "../../list/styles/_index.scss";
import "../../link/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/SegmentedControl",
    component: SegmentedControl,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

export const SegmentedControlStory: Story = {
    name: "Segmented Control",
    args: {
        title: "Tema",
        items: ["Auto", "Light", "Dark", "High Contrast"],
        seperateItem: 1,
        defaultValue: "Auto",
        showTitle: true,
    },
    argTypes: {
        defaultValue: {
            control: "select",
            options: ["Auto", "Light", "Dark", 0, 1, 2],
        },
    },
    render: (args) => <SegmentedControl {...args} />,
};

export const DekningsoversiktStory: Story = {
    name: "Segmented Control: Dekningsoversikt",
    args: {
        title: "Velg hva som vises",
        items: ["Vis alt", "Dekker", "Dekker ikke", "Dekker kanskje"],
        defaultValue: "Dekker",
        showTitle: false,
        seperateItem: 1,
    },
    argTypes: {
        defaultValue: {
            control: "select",
            options: ["Vis alt", "Dekker", "Dekker ikke", "Dekker kanskje"],
        },
    },
    render: (args) => {
        const [value, setValue] = useState(args.defaultValue);

        const dekkesListe = (
            <List>
                <CheckListItem>
                    avtalt erstatning hvis hunder dør eller må avlives som følge
                    av ulykke eller sykdom
                </CheckListItem>
                <CheckListItem>forsvinning og tyveri</CheckListItem>
            </List>
        );

        const dekkesIkkeListe = (
            <List>
                <CrossListItem>
                    hvis hunden må avlives på grunn av atferdsproblemer, for
                    eksempel nervøsitet eller aggresjon
                </CrossListItem>
            </List>
        );

        const dekkesKanskjeListe = (
            <List>
                <ListItem>
                    kanskje hunden din stikker av, det dekker vi ikke hehe
                </ListItem>
            </List>
        );

        return (
            <div
                style={{
                    display: "flex",
                    gap: "40px",
                    flexDirection: "column",
                }}
            >
                <h2>Dekningsoversikt hund og katt</h2>
                <SegmentedControl
                    {...args}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <div
                    style={{
                        maxWidth: "60ch",
                        display: "flex",
                        gap: "24px",
                        flexDirection: "column",
                    }}
                >
                    {value === "Vis alt" && (
                        <>
                            {dekkesListe}
                            {dekkesIkkeListe}
                            {dekkesKanskjeListe}
                            <p>
                                På denne siden har vi forenklet teksten om hva
                                forsikringen dekker og ikke dekker. Du må alltid
                                lese vilkårene i avtaledokumentet for å få full
                                oversikt.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >
                                <Link external={true} href={"#"}>
                                    Fullstendige vilkår (PDF)
                                </Link>
                                <Link external={true} href={"#"}>
                                    Standardisert produktinformasjon (PDF)
                                </Link>
                            </div>
                        </>
                    )}
                    {value === "Dekker" && (
                        <>
                            {dekkesListe}
                            <p>
                                På denne siden har vi forenklet teksten om hva
                                forsikringen dekker og ikke dekker. Du må alltid
                                lese vilkårene i avtaledokumentet for å få full
                                oversikt.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >
                                <Link external={true} href={"#"}>
                                    Fullstendige vilkår (PDF)
                                </Link>
                                <Link external={true} href={"#"}>
                                    Standardisert produktinformasjon (PDF)
                                </Link>
                            </div>
                        </>
                    )}
                    {value === "Dekker kanskje" && (
                        <>
                            {dekkesKanskjeListe}
                            <p>
                                På denne siden har vi forenklet teksten om hva
                                forsikringen dekker og ikke dekker. Du må alltid
                                lese vilkårene i avtaledokumentet for å få full
                                oversikt.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >
                                <Link external={true} href={"#"}>
                                    Fullstendige vilkår (PDF)
                                </Link>
                                <Link external={true} href={"#"}>
                                    Standardisert produktinformasjon (PDF)
                                </Link>
                            </div>
                        </>
                    )}
                    {value === "Dekker ikke" && (
                        <>
                            {dekkesIkkeListe}
                            <p>
                                På denne siden har vi forenklet teksten om hva
                                forsikringen dekker og ikke dekker. Du må alltid
                                lese vilkårene i avtaledokumentet for å få full
                                oversikt.
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                }}
                            >
                                <Link external={true} href={"#"}>
                                    Fullstendige vilkår (PDF)
                                </Link>
                                <Link external={true} href={"#"}>
                                    Standardisert produktinformasjon (PDF)
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    },
};
