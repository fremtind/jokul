import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { useGlobals } from "storybook/preview-api";
import { Card } from "../../card/index.js";
import { Flex } from "../../flex/index.js";
import { Message } from "../../message/index.js";
import { ToggleSwitch as ToggleSwitchComponent } from "../ToggleSwitch.js";
import "../../card/styles/_index.scss";
import "../../flex/styles/_index.scss";
import "../../message/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/ToggleSwitch",
    component: ToggleSwitchComponent,
} satisfies Meta<typeof ToggleSwitchComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleSwitch: Story = {
    render: () => {
        const [checked, setChecked] = React.useState(false);

        return (
            <ToggleSwitchComponent
                aria-pressed={checked}
                onChange={(_, pressed) => setChecked(pressed)}
            />
        );
    },
};

export const ByttTemaForInnhold: Story = {
    render: () => {
        const [{ theme }, updateGlobals] = useGlobals();
        const darkMode = theme === "dark";

        return (
            <Card padding="l">
                <Flex direction="column" gap="l">
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        gap="m"
                        wrap="wrap"
                    >
                        <Flex direction="column" gap="2xs">
                            <h2 className="jkl-heading-3">
                                Tema for innholdet
                            </h2>
                            <p className="jkl-body">
                                Denne bryteren oppdaterer temaet med en gang for
                                innholdet i eksempelet under.
                            </p>
                        </Flex>
                        <ToggleSwitchComponent
                            aria-pressed={darkMode}
                            onChange={(_, pressed) =>
                                updateGlobals({
                                    theme: pressed ? "dark" : "light",
                                })
                            }
                        >
                            Mørk modus
                        </ToggleSwitchComponent>
                    </Flex>

                    {darkMode ? "Mørkt tema aktivt" : "Lyst tema aktivt"}

                    <Flex direction="column" gap="s">
                        <div>
                            <p className="jkl-heading-5">Forsikringsoversikt</p>
                            <p className="jkl-body">
                                Reiseforsikringen din er aktiv, og du er dekket
                                for avbestilling, forsinket bagasje og medisinsk
                                hjelp på reise.
                            </p>
                        </div>
                        <Message variant="info" title="Status">
                            Neste fornyelse er 14. august, og det er ingen
                            utestående endringer på avtalen.
                        </Message>
                    </Flex>
                </Flex>
            </Card>
        );
    },
};
