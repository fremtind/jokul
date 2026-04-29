import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Card } from "../../card/Card.js";
import { ExpandablePanel } from "../../expander/ExpandablePanel.js";
import { ExpandablePanelContent } from "../../expander/ExpandablePanelContent.js";
import { Expander } from "../../expander/Expander.js";
import { Flex } from "../../flex/index.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { Select } from "../Select.js";
import "../styles/_index.scss";
import "../../card/styles/_index.scss";
import "../../expander/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Select",
    component: Select,
    subcomponents: { PopupTip },
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        id: {
            table: {
                disable: true,
            },
        },
        "data-testautoid": {
            table: {
                disable: true,
            },
        },
        onBlur: {
            table: {
                disable: true,
            },
        },
        onFocus: {
            table: {
                disable: true,
            },
        },
        onChange: {
            table: {
                disable: true,
            },
        },
        searchable: {
            control: "boolean",
        },
    },
    args: {
        name: "Select",
        label: "Hvilket merke er telefonen?",
        description: "Du kan kun velge ett merke",
        items: [
            { value: "Apple", label: "Apple" },
            { value: "Samsung", label: "Samsung" },
            { value: "Google", label: "Google" },
            { value: "OnePlus", label: "OnePlus" },
            { value: "Nokia", label: "Nokia" },
            { value: "Annet", label: "Annet" },
        ],
        defaultPrompt: "Velg merke",
        inline: false,
        invalid: false,
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        maxShownOptions: 12,
        width: "20ch",
        searchable: false,
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
    name: "Select",
};

export const SelectInline: Story = {
    args: {
        label: "Hva jobber du som?",
        items: [
            "Frontend-utvikler",
            "Backend-utvikler",
            "Visuell designer",
            "Interaksjonsdesigner",
            "Tjenestedesigner",
        ],
        inline: true,
        value: "Frontend-utvikler",
        description: "",
        helpLabel: "",
    },
    render: (args) => {
        return (
            <Flex gap="xs" alignItems="center">
                <p>Jeg jobber som</p>
                <Select {...args} />
                <p>hos Fremtind Forsikring.</p>
            </Flex>
        );
    },
};

export const SelectMedTooltip: Story = {
    args: {
        tooltip: (
            <PopupTip
                content={
                    "Er du usikker på hvilket merke du har kan du velge Annet"
                }
            />
        ),
    },
};

/**
 * Demonstrerer at nedtrekkslisten ikke lenger klippes av en `Card` med
 * begrenset høyde (issue #5976).
 */
export const SelectIKort: Story = {
    name: "I et Card",
    parameters: {
        docs: {
            description: {
                story:
                    "Tidligere ble lista klippet fordi `Card` har " +
                    "`overflow: clip`. Lista rendres nå i en portal og " +
                    "vises uavhengig av forelderens overflow.",
            },
        },
    },
    render: (args) => (
        <Card padding="m" style={{ width: "20rem" }}>
            <Select {...args} />
        </Card>
    ),
};

/**
 * Demonstrerer at nedtrekkslisten ikke lenger klippes av en
 * `ExpandablePanel` (issue #4583).
 */
export const SelectIExpandablePanel: Story = {
    name: "I en ExpandablePanel",
    parameters: {
        docs: {
            description: {
                story:
                    "Tidligere ble lista klippet av panelets `overflow: " +
                    "hidden` når innholdet i panelet var lavt. Etter " +
                    "endringen rendres lista i en portal og vises som forventet.",
            },
        },
    },
    render: (args) => (
        <div style={{ width: "30rem" }}>
            <ExpandablePanel>
                <Expander>Velg telefonmerke</Expander>
                <ExpandablePanelContent>
                    <Select {...args} />
                </ExpandablePanelContent>
            </ExpandablePanel>
        </div>
    ),
};

/**
 * Demonstrerer auto-flip: når Select er nederst i viewporten, åpner lista
 * seg over knappen i stedet for under, slik at hele lista alltid er synlig
 * (issue #3775).
 */
export const SelectNederstPaSiden: Story = {
    name: "Nederst på siden (flipper opp)",
    parameters: {
        docs: {
            description: {
                story:
                    "Floating-ui-middlewaren `flip` snur listen over " +
                    "knappen når det ikke er plass under. Scroll Select " +
                    "ned mot bunnen av viewporten for å se effekten.",
            },
        },
    },
    render: (args) => (
        <div style={{ height: "120dvh" }}>
            <div
                style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                }}
            >
                <Select {...args} />
            </div>
        </div>
    ),
};
