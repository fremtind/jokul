import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { File } from "../File.js";
import fileBytes from "./fileBytes.js";

const meta = {
    title: "Komponenter/FileInput/File",
    component: File,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof File>;

export default meta;

type Story = StoryObj<typeof meta>;

const file = new window.File(fileBytes, "symbol_round_black.png", {
    type: "image/png",
});

export const FileStory: Story = {
    name: "File",
    args: {
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        file,
    },
    render: (args) => <File {...args} />,
};
