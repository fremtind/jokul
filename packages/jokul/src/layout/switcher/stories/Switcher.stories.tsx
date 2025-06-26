import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Switcher } from "../Switcher.jsx";
import "../styles/_index.scss";
import { tokens } from "../../../core/index.js";
import { blockContents, blockContentsMapped } from "./data.jsx";

const meta = {
    title: "Layout/Primitives/Switcher",
    component: Switcher,
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
        treshold: {
            table: {
                defaultValue: { summary: "30ch" },
            },
            control: {
                type: "text",
            },
        },
        maxElements: {
            table: {
                defaultValue: { summary: "3" },
            },
            options: [2, 3, 4],
            control: {
                type: "select",
            },
        },
        ref: {
            table: { disable: true },
        },
        children: {
            name: "Antall elementer",
            description:
                "Antall elementer som skal vises i switcheren (kun for demoene i Storybook).",
            options: blockContents.map((_, index) => index + 1),
            mapping: blockContentsMapped,
            control: {
                type: "select",
            },
        },
        as: {
            table: { disable: true },
        },
    },
    args: {
        children: 3,
        treshold: "30rem",
        gap: 20,
        maxElements: 3,
    },
} satisfies Meta<typeof Switcher>;

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
                <h2 className="jkl-heading-3 jkl-spacing-24--bottom">
                    Switcher
                </h2>
                <p className="jkl-body jkl-spacing-12--bottom">
                    Switcher er en komponent som lar deg vise elementer ved
                    siden av hverandre, frem til en gitt bredde hvor alle
                    elementene vil brekke til å vises i en kolonne.
                </p>
                <p className="jkl-body jkl-spacing-40--bottom">
                    Du kan også velge hvor mange elementer som maksimalt kan
                    vises ved siden av hverandre. Sendes det inn flere elementer
                    enn dette, vil alle elementene vises i en kolonne uavhengig
                    av bredde.
                </p>
                <Switcher
                    style={{
                        border: "1px dashed var(--jkl-color-border-subdued)",
                    }}
                    {...props}
                />
            </div>
        );
    },
};

export const Komponent: Story = {
    parameters: {
        layout: "fullscreen",
    },
};
