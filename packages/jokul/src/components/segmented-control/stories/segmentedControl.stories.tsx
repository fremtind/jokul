import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { FieldGroup } from "../../input-group/FieldGroup.js";

import { SegmentedControl } from "../SegmentedControl.js";
import { SegmentedControlButton } from "../SegmentedControlButton.js";
import { DekningsoversiktExample } from "./DekningsoversiktExample.js";
import dekningsoversiktSource from "./DekningsoversiktExample.tsx?raw";

const meta: Meta = {
    title: "Komponenter/SegmentedControl",
    component: SegmentedControl,
    subcomponents: { FieldGroup, SegmentedControlButton },
    args: {
        labelProps: {
            srOnly: false,
            variant: "small",
        },
    },
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

export const Basic: Story = {
    name: "Segmented Control",
    args: {
        legend: "Segmented Control",
    },
    render: (args) => (
        <SegmentedControl {...args}>
            <SegmentedControlButton value="Vi" name="basic" defaultChecked>
                Vi
            </SegmentedControlButton>
            <SegmentedControlButton value="Står" name="basic">
                Står
            </SegmentedControlButton>
            <SegmentedControlButton value="Sammen" name="basic">
                Sammen
            </SegmentedControlButton>
        </SegmentedControl>
    ),
};

/**
 * Viser hvordan du bruker `useState` til å holde valgt knapp og dekningslisten
 * i takt når brukeren bytter mellom «Dekkes» og «Dekkes ikke».
 *
 */
export const Dekningsoversikt: Story = {
    name: "Dekningsoversikt",
    args: {
        legend: "Dekning i reiseforsikringen",
    },
    parameters: {
        docs: {
            source: {
                type: "code",
                language: "tsx",
                code: dekningsoversiktSource
                    .replace("../../flex/index.js", "@fremtind/jokul/flex")
                    .replace("../../list/index.js", "@fremtind/jokul/list")

                    .replace(
                        "../index.js",
                        "@fremtind/jokul/segmented-control",
                    ),
            },
        },
    },
    render: (args) => <DekningsoversiktExample {...args} />,
};
