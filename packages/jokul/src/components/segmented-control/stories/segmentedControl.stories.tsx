import type {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {Link} from "../../link/index.js";
import {
    CheckListItem,
    CrossListItem,
    List,
    ListItem,
} from "../../list/index.js";
import {SegmentedControl} from "../SegmentedControl.js";

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

const themeChoices = ["Auto", "Light", "Dark", "High Contrast"];
const coverageChoices = ["Vis alt", "Dekker", "Dekker ikke", "Dekkes kanskje"];

export const SegmentedControlStory: Story = {
    name: "Segmented Control",
    args: {
        legend: "Tema",
        items: themeChoices,
        separateItem: 1,
    },
    argTypes: {
        defaultValue: {
            control: "select",
            options: [...themeChoices, ...themeChoices.keys()],
        },
    },
    render: (args) => <SegmentedControl {...args} />,
};

export const DekningsoversiktStory: Story = {
    name: "Segmented Control: Dekningsoversikt",
    args: {
        legend: "Velg hva som vises",
        items: coverageChoices,
        defaultValue: coverageChoices[1],
        showLegend: false,
        separateItem: 1,
    },
    argTypes: {
        defaultValue: {
            control: "select",
            options: [...coverageChoices, ...coverageChoices.keys()],
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

        const links = (
            <div style={{marginBlockStart: "24px"}}>
                <p>
                    På denne siden har vi forenklet teksten om hva forsikringen
                    dekker og ikke dekker. Du må alltid lese vilkårene i
                    avtaledokumentet for å få full oversikt.
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
            </div>
        );

        return (
            <>
                <h2 style={{marginBlockEnd: "24px"}}>
                    Dekningsoversikt hund og katt
                </h2>
                <SegmentedControl
                    {...args}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div
                    style={{
                        maxWidth: "60ch",
                        display: "flex",
                        gap: "24px",
                        flexDirection: "column",
                        marginBlockStart: "24px",
                    }}
                >
                    {value === coverageChoices[0] && (
                        <>
                            {dekkesListe}
                            {dekkesIkkeListe}
                            {dekkesKanskjeListe}
                        </>
                    )}
                    {value === coverageChoices[1] && dekkesListe}
                    {value === coverageChoices[2] && dekkesKanskjeListe}
                    {value === coverageChoices[3] && dekkesIkkeListe}
                    {links}
                </div>
            </>
        );
    },
};
