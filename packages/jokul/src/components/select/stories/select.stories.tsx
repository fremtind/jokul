import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Card } from "../../card/Card.js";
import { ExpandablePanel } from "../../expander/ExpandablePanel.js";
import { ExpandablePanelContent } from "../../expander/ExpandablePanelContent.js";
import { Expander } from "../../expander/Expander.js";
import { Select } from "../Select.js";
import { fagsystemer, mobilmerker, saksbehandlere } from "./shared.data.js";

import "../styles/_index.scss";
import "../../card/styles/_index.scss";
import "../../expander/styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Select",
    component: Select,
    args: {
        name: "Select",
        label: "Hvilket merke er telefonen?",
        description: "Du kan kun velge ett merke",
        items: mobilmerker.map((item) => ({ value: item, label: item })),
        multiple: false,
        onSearch: undefined,
        loading: false,
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const SelectStory: Story = {
    name: "Select",
};

export const SelectMedDescription: Story = {
    name: "Select med description",
    args: {
        label: "Velg system",
        items: fagsystemer.map((fagsystem) => ({
            value: fagsystem.navn,
            label: fagsystem.navn,
            description: fagsystem.beskrivelse,
        })),
    },
};

export const SelectMedSok: Story = {
    name: "Select med søk",
    args: {
        label: "Velg saksbehandler",
        description: "",
        multiple: false,
        items: saksbehandlere.map((saksbehandler) => ({
            value: saksbehandler.id,
            label: saksbehandler.navn,
            description: saksbehandler.description,
            media: (
                <img
                    src={saksbehandler.bilde}
                    alt={saksbehandler.navn}
                    width={32}
                    height={32}
                />
            ),
        })),
        searchable: true,
    },
};

export const SelectAsync: Story = {
    name: "Select med asynkront søk",
    args: {
        label: "Velg saksbehandler",
        description: "",
        multiple: false,
        items: [],
        searchable: true,
    },
    render: (args) => {
        const [items, setItems] = React.useState(args.items);
        const [loading, setLoading] = React.useState(false);

        const handleSearch = (searchValue: string) => {
            setLoading(true);
            setTimeout(() => {
                const newItems = saksbehandlere
                    .filter((saksbehandler) =>
                        saksbehandler.navn
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()),
                    )
                    .map((saksbehandler) => ({
                        value: saksbehandler.id,
                        label: saksbehandler.navn,
                        media: (
                            <img
                                src={saksbehandler.bilde}
                                alt={saksbehandler.navn}
                                width={32}
                                height={32}
                            />
                        ),
                    }));
                setItems(newItems);
                setLoading(false);
            }, 1000);
        };

        return (
            <Select
                {...args}
                items={items}
                onSearch={handleSearch}
                loading={loading}
            />
        );
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
