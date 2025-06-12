import type {Meta, StoryObj} from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import {IconButton} from "../../icon-button/index.js";
import {File} from "../File.js";
import {Thumbnail} from "../internal/Thumbnail.js";
import fileBytes from "./fileBytes.js";

const file = new window.File(fileBytes, "symbol_round_black.png", {
    type: "image/png",
});

const meta = {
    title: "Komponenter/FileInput/File",
    component: File,
    subcomponents: {Thumbnail, IconButton},
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof File>;
export default meta;

type Story = StoryObj<typeof meta>;

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
