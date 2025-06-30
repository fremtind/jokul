import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../components/button/Button.jsx";
import { tokens } from "../../../core/index.js";
import { Prose } from "../../prose/Prose.jsx";
import { Column } from "../Column.jsx";

import "../../../components/button/styles/_index.scss";
import "../../prose/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Layout/Primitives/Column",
    component: Column,
    tags: ["autodocs"],
    argTypes: {
        contentWidth: {
            table: {
                defaultValue: { summary: "70ch" },
            },
            control: {
                type: "text",
            },
        },
        position: {
            table: { defaultValue: { summary: "left" } },
            options: ["left", "center"],
            control: {
                type: "select",
            },
        },
        gutter: {
            table: {
                defaultValue: { summary: "40" },
            },
            options: Object.keys(tokens.unit),
            control: {
                type: "select",
            },
        },
        centerWithin: {
            table: {
                defaultValue: { summary: "false" },
            },
        },
        ref: {
            table: { disable: true },
        },
        as: {
            table: { disable: true },
        },
        className: {
            table: { disable: true },
        },
        style: {
            table: { disable: true },
        },
    },
    args: {
        // gutter: 40,
        contentWidth: "70ch",
        centerWithin: false,
        position: "left",
    },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    parameters: {
        layout: "fullscreen",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    paddingBlock: "var(--jkl-unit-130)",
                }}
            >
                <Story />
            </div>
        ),
    ],
    render: (props) => {
        return (
            <Column as={Prose} {...props}>
                <h2 className="jkl-heading-2">Lag en commit</h2>
                <p>
                    For å dokumentere endringer på en måte som automatiserer
                    versjonering og generering av changelogs, bruker vi
                    verktøyet Changesets.
                </p>

                <p>
                    Changesets lar oss definere nøyaktig hvilke pakker som er
                    påvirket av en endring og hva slags versjonsoppdatering
                    (major, minor, eller patch) endringen medfører.
                </p>
                <Button>Gå videre</Button>
            </Column>
        );
    },
};
