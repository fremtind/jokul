import type { Meta, StoryObj } from "@storybook/nextjs";
import { Search } from "../Search.jsx";
import { SearchButton } from "../SearchButton.jsx";

import "../styles/_index.scss";

const meta: Meta = {
    title: "Beta/Search/SearchButton",
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

import { SearchWithButton } from "./search.stories.jsx";
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
