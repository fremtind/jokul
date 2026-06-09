import type { StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../../src/components/button/Button.js";
import { Checkbox } from "../../src/components/checkbox/Checkbox.js";
import { Flex } from "../../src/components/flex/Flex.js";
import { RadioButton } from "../../src/components/radio-button/RadioButton.js";
import { ToggleSwitch } from "../../src/components/toggle-switch/ToggleSwitch.js";
const meta = {
    title: "Fargeroller/Kontrast",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ContrastColor: Story = {
    render: () => (
        <Flex alignItems="center">
            <Button
                variant="primary"
                style={{
                    backgroundColor: "var(--jkl-color-background-contrast)",
                    color: "var(--jkl-color-text-on-contrast)",
                }}
            >
                Knapp
            </Button>
            <Checkbox
                name="kjekkboks"
                value="kjekkboks"
                style={{
                    color: "var(--jkl-color-text-on-contrast)",
                }}
            >
                Kjekkboks
            </Checkbox>
            <RadioButton
                name="radio"
                value="radio"
                style={{
                    color: "var(--jkl-color-text-on-contrast)",
                }}
            >
                Radio
            </RadioButton>
            <ToggleSwitch
                style={{
                    color: "var(--jkl-color-text-on-contrast)",
                }}
            />
        </Flex>
    ),
};
