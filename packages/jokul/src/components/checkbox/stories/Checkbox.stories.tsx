import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { FieldGroup } from "../../input-group/index.js";
import { Checkbox as CheckboxComponent } from "../Checkbox.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Checkbox",
    component: CheckboxComponent,
    args: {
        value: "kjekk",
        name: "checkbox",
        children: "Kjekk boks",
    },
} satisfies Meta<typeof CheckboxComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {};

type CheckboxGroupArgs = React.ComponentProps<typeof CheckboxComponent> & {
    helpLabel?: string;
};

export const CheckboxGroup: StoryObj<CheckboxGroupArgs> = {
    args: {
        helpLabel: "Du kan velge én eller flere typer kjeks",
    },
    render: ({ helpLabel, ...checkboxArgs }) => {
        return (
            <FieldGroup legend="Velg kjeks" helpLabel={helpLabel}>
                <CheckboxComponent {...checkboxArgs} value="ritz">
                    Ritz
                </CheckboxComponent>
                <CheckboxComponent {...checkboxArgs} value="biscoff">
                    Biscoff
                </CheckboxComponent>
                <CheckboxComponent {...checkboxArgs} value="tuc">
                    Tuc Paprika
                </CheckboxComponent>
            </FieldGroup>
        );
    },
};
