import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Checkbox } from "../../checkbox/Checkbox.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { FieldGroup } from "../FieldGroup.js";
import "../styles/_index.scss";
import "../../checkbox/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/InputGroup/FieldGroup",
    component: FieldGroup,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        tooltip: {
            type: "boolean",
        },
    },
} satisfies Meta<typeof FieldGroup>;

export default meta;

type Story = StoryObj<typeof FieldGroup>;

const tooltipComponent = (
    <PopupTip content="Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." />
);

export const FieldGroupStory: Story = {
    name: "Kontaktpreferanser",
    args: {
        legend: "Hvordan kan vi kontakte deg?",
        labelProps: {
            variant: "large",
        },
        supportLabelProps: {
            labelType: "help",
        },
        tooltip: false,
    },
    render: ({ tooltip, ...props }) => (
        <FieldGroup {...props} tooltip={tooltip ? tooltipComponent : undefined}>
            <Checkbox name="checklist" value="phone" invalid={false}>
                Telefon
            </Checkbox>
            <Checkbox name="checklist" value="email" invalid={false}>
                E-post
            </Checkbox>
            <Checkbox name="checklist" value="snailmail" invalid={false}>
                Brev
            </Checkbox>
        </FieldGroup>
    ),
};
