import type { StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../../src/components/button/Button.jsx";
import { Checkbox } from "../../src/components/checkbox/Checkbox.jsx";
import { Flex } from "../../src/components/flex/Flex.jsx";
import { RadioButton } from "../../src/components/radio-button/RadioButton.jsx";
import { ToggleSwitch } from "../../src/components/toggle-switch/ToggleSwitch.jsx";
const meta = {
    title: "Skjermbilder/Temabygger",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Kontrast: Story = {
    render: () => (
        <Flex alignItems="center">
            <Button variant="primary">Knapp</Button>
            <Checkbox name="kjekkboks" value="kjekkboks" defaultChecked>
                Kjekkboks
            </Checkbox>
            <RadioButton name="radio" value="radio" defaultChecked>
                Radio
            </RadioButton>
            <ToggleSwitch aria-label="Bryter" aria-pressed />
        </Flex>
    ),
};
