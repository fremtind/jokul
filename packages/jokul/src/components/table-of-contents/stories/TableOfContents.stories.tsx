import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { TableOfContents } from "../TableOfContents.js";
import { TableOfContentsLink } from "../TableOfContentsLink.js";

import "../styles/_index.scss";

const sites = [
    "Jobb i Fremtind",
    "Hvorfor velge Fremtind?",
    "Fordeler og goder",
    "Kultur",
    "Bærekraft",
    "Teknologi",
].sort();

const meta: Meta = {
    title: "Komponenter/Table of contents",
    component: TableOfContents,
    subcomponents: {
        TableOfContentsLink,
    },
    args: {
        label: "Sideinnhold",
        children: sites.map((site) => (
            <TableOfContents.Link href="#" key={site}>
                {site}
            </TableOfContents.Link>
        )),
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TableOfContents>;

export default meta;

type Story = StoryObj<typeof TableOfContents>;

export const _TableOfContents: Story = {};
