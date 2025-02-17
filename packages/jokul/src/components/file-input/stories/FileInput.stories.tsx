import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { FileInput } from "../FileInput.js";

const meta = {
    title: "Komponenter/FileInput",
    component: FileInput,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FileInputStory: Story = {
    name: "FileInput",
    args: {
        variant: "flexible",
        value: [],
        onChange: console.info,
        legend: "Legg til fil",
    },
    render: (args) => <FileInput {...args} />,
};
