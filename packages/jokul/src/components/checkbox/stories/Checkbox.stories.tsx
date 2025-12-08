import type { Meta, StoryObj } from "@storybook/nextjs";
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

export const CheckboxGroup: Story = {
    render: (args) => {
        return (
            <FieldGroup legend="Velg kjeks">
                <CheckboxComponent {...args} value="ritz">
                    Ritz
                </CheckboxComponent>
                <CheckboxComponent {...args} value="biscoff">
                    Biscoff
                </CheckboxComponent>
                <CheckboxComponent {...args} value="tuc">
                    Tuc Paprika
                </CheckboxComponent>
            </FieldGroup>
        );
    },
};
