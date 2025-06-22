import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../../../components/button/Button.js";
import { Flex } from "../../../components/flex/Flex.js";
import { Icon } from "../../../components/icon/Icon.js";
import { Menu, MenuItem } from "../../../components/menu/index.js";
import { tokens } from "../../../core/index.js";
import { Grid } from "../Grid.jsx";
import { mappedExampleComponents } from "./data/data.jsx";

import "../../../components/button/styles/_index.scss";
import "../../../components/icon/styles/_index.scss";
import "../../../components/menu/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Layout/Primitives/Grid",
    component: Grid,
    tags: ["autodocs"],
    argTypes: {
        padding: {
            table: {
                defaultValue: { summary: "undefined" },
            },
            options: Object.keys(tokens.unit),
            control: {
                type: "select",
            },
        },
        gap: {
            table: {
                defaultValue: { summary: "20" },
            },
            options: Object.keys(tokens.unit),
            control: {
                type: "select",
            },
        },
        minElementWidth: {
            table: {
                defaultValue: { summary: "30ch" },
            },
            control: {
                type: "text",
            },
        },
        ref: {
            table: { disable: true },
        },
        children: {
            name: "Antall elementer",
            description:
                "Antall elementer som skal vises i Grid (kun for demoene i Storybook).",
            options: Object.keys(mappedExampleComponents),
            mapping: mappedExampleComponents,
            control: {
                type: "select",
            },
        },
        as: {
            table: { disable: true },
        },
    },
    args: {
        children: "6",
        minElementWidth: "20ch",
        gap: 20,
    },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    parameters: {
        layout: "fullscreen",
    },
    render: (props) => {
        console.log("Switcher props:", props);
        return (
            <div
                style={{
                    paddingInline: "var(--jkl-unit-90)",
                    paddingBlock: "var(--jkl-unit-130)",
                }}
            >
                <h2 className="jkl-heading-3 jkl-spacing-24--bottom">Grid</h2>
                <p className="jkl-body jkl-spacing-40--bottom">
                    Grid lar deg vise elementer i et rutenett, der hvert element
                    tar opp samme bredde. Du kan sette minimumsbredden et
                    element kan ha, og komponenten vil automatisk tilpasse
                    antall kolonner basert på bredden til rutenettet. Dette gjør
                    at du kan vise flere elementer side om side på større
                    skjermer, og færre elementer på mindre skjermer.
                </p>
                <Grid
                    style={{
                        border: "2px dashed var(--jkl-color-border-subdued)",
                    }}
                    {...props}
                />
            </div>
        );
    },
};

export const Brukervalg: Story = {
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        minElementWidth: {
            table: { disable: true },
        },
    },
    render: (props) => {
        const views = {
            small: "175px",
            medium: "250px",
            large: "350px",
        };

        const icons = {
            small: "background_grid_small",
            medium: "grid_on",
            large: "border_all",
        };

        const [view, setView] = React.useState<keyof typeof views>("medium");

        return (
            <div
                style={{
                    paddingInline: "var(--jkl-unit-90)",
                    paddingBlock: "var(--jkl-unit-130)",
                }}
            >
                <h2 className="jkl-heading-3 jkl-spacing-24--bottom">
                    Grid med brukervalg
                </h2>
                <Flex
                    wrap
                    justifyContent="space-between"
                    alignItems="center"
                    gap={16}
                    className="jkl-spacing-40--bottom"
                >
                    <p className="jkl-body">
                        Bruk minElementWidth for å la brukeren velge hvordan de
                        helst vil se innholdet.
                    </p>
                    <Menu
                        initialPlacement="bottom-end"
                        triggerElement={
                            <Button
                                variant="secondary"
                                data-testid="open-menu"
                                // iconPosition="right"
                                icon={<Icon bold>{icons[view]}</Icon>}
                            >
                                Velg visning
                            </Button>
                        }
                    >
                        <MenuItem
                            onClick={() => setView("large")}
                            icon={<Icon>{icons.large}</Icon>}
                        >
                            Stor
                        </MenuItem>
                        <MenuItem
                            onClick={() => setView("medium")}
                            icon={<Icon>{icons.medium}</Icon>}
                        >
                            Medium
                        </MenuItem>
                        <MenuItem
                            onClick={() => setView("small")}
                            icon={<Icon>{icons.small}</Icon>}
                        >
                            Liten
                        </MenuItem>
                    </Menu>
                </Flex>
                <Grid {...props} minElementWidth={views[view]} />
            </div>
        );
    },
};

export const Komponent: Story = {
    parameters: {
        layout: "fullscreen",
    },
};
