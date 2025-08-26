import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { FieldGroup } from "../../input-group/FieldGroup.js";
import { CheckListItem, CrossListItem, List } from "../../list/index.js";
import { SegmentedControl } from "../SegmentedControl.js";
import { SegmentedControlButton } from "../SegmentedControlButton.js";

import "../styles/_index.scss";
import "../../list/styles/_index.scss";
import "../../link/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/SegmentedControl",
    component: SegmentedControl,
    subcomponents: { FieldGroup, SegmentedControlButton },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

const coverageChoices = ["Dekker", "Dekker ikke"];

export const DekningsoversiktStory: Story = {
    name: "Segmented Control",
    args: {
        legend: "Velg hva som vises",
        defaultValue: coverageChoices[0],
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
                <SegmentedControl {...args}>
                    {coverageChoices.map((choice) => (
                        <SegmentedControlButton
                            value={choice}
                            key={choice}
                            name="temavalg"
                            onChange={(e) => setValue(e.target.value)}
                        >
                            {choice}
                        </SegmentedControlButton>
                    ))}
                </SegmentedControl>
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
