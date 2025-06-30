import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../components/button/Button.jsx";
import { tokens } from "../../../core/index.js";
import { Column } from "../../column/Column.jsx";
import { Prose } from "../../prose/Prose.jsx";
import { TwoColumn } from "../TwoColumn.jsx";

import "../../../components/button/styles/_index.scss";
import "../../prose/styles/_index.scss";
import "../../column/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Layout/Primitives/TwoColumn",
    component: TwoColumn,
    tags: ["autodocs"],
    argTypes: {
        minContentWidth: {
            table: {
                defaultValue: {
                    summary: "50%",
                },
            },
            options: ["50%", "60%", "70%", "80%", "90%"],
            control: {
                type: "select",
            },
        },
        gap: {
            table: {
                defaultValue: { summary: "undefined" },
            },
            options: Object.keys(tokens.unit),
            control: {
                type: "select",
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
        minContentWidth: "50%",
        gap: undefined,
    },
} satisfies Meta<typeof TwoColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    parameters: {
        layout: "fullscreen",
    },
    render: (props) => {
        return (
            <TwoColumn {...props}>
                {/* TODO: Lag bedre innhold for Sidebar */}
                <div
                    style={{
                        width: "200px",
                        paddingInline: tokens.unit[40],
                        flexGrow: 0,
                    }}
                >
                    Sidebar
                </div>
                <Column as={Prose}>
                    <h2>Lag en commit</h2>
                    <p>
                        For å dokumentere endringer på en måte som automatiserer
                        versjonering og generering av changelogs, bruker vi
                        verktøyet Changesets.
                    </p>
                    <p>
                        Changesets lar oss definere nøyaktig hvilke pakker som
                        er påvirket av en endring og hva slags
                        versjonsoppdatering (major, minor, eller patch)
                        endringen medfører.
                    </p>
                    <Button>Gå videre</Button>
                </Column>
            </TwoColumn>
        );
    },
};
