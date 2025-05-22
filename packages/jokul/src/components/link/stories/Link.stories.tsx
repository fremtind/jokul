import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Link } from "../Link.js";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Link",
    component: Link,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        href: {
            control: "text",
            defaultValue: "https://www.fremtind.no",
        },
    },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const LinkStory: Story = {
    name: "Link",
    args: {
        children: "Example Link",
        external: false,
        as: "a",
        target: "#",
        href: "https://www.fremtind.no",
    },
    render: (props) => (
        // Setter style.cursor til pointer fordi Storybook overskriver default styles.
        <Link style={{ cursor: "pointer" }} {...props} as={props.as || "a"} />
    ),
};
