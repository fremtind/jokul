import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { CheckListItem, CrossListItem, List } from "../../list/index.js";
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

const themeChoices = ["Auto", "Light", "Dark"];
const coverageChoices = ["Dekker", "Dekker ikke"];

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
        defaultValue: coverageChoices[0],
        showLegend: false,
        separateItem: 0,
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

        return (
            <>
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
                    {value === coverageChoices[0] && dekkesListe}
                    {value === coverageChoices[1] && dekkesIkkeListe}
                </div>
            </>
        );
    },
};
