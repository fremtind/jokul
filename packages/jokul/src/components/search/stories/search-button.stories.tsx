import type { Meta, StoryObj } from "@storybook/nextjs";
import { SearchButton } from "../SearchButton.js";
import { Search } from "../Search.js";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Search/SearchButton",
    component: SearchButton,
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Søk",
        type: "button",
    },
    argTypes: {
        type: {
            control: "inline-radio",
            options: ["button", "submit"],
        },
    },
    tags: ["autodocs", "forms"],
};

export default meta;

type Story = StoryObj<typeof SearchButton>;

import { SearchWithButton } from "./search.stories.js";
export const SearchButtonStory: Story = {
    name: "Search Button",
    args: {
        label: "Søk",
        type: "button",
    },
    render: (args) => (
        <>
            <Search
                {...SearchWithButton.args}
                label={SearchWithButton.args?.label}
            >
                <Search.Button {...args} />
            </Search>
        </>
    ),
};
