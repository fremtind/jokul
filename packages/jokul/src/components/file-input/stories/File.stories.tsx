import type {Meta, StoryObj} from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import {Flex} from "../../flex/index.js";
import {File} from "../File.js";
import fileBytes from "./fileBytes.js";

const meta = {
    title: "Komponenter/File",
    component: File,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        style: {
            name: "Style",
            control: "select",
            options: ["list", "card"],
            table: {
                category: "noe",
            },
        },
    },
} satisfies Meta<typeof File>;

export default meta;

type Story = StoryObj<typeof meta>;

const file = new window.File(fileBytes, "symbol_round_black.png", {
    type: "image/png",
});

export const FileGridStory: Story = {
    name: "File Grid",
    args: {
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        file,
        path: "",
    },
    render: (args) => (
        <div
            style={{
                width: "95vw",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "24px",
            }}
        >
            <File {...args} style={"card"}/>
            <File {...args} style={"card"}/>
            <File {...args} style={"card"}/>
            <File {...args} style={"card"}/>
        </div>
    ),
};

export const FileListStory: Story = {
    name: "File List",
    args: {
        fileName: file.name,
        fileType: file.type,
        fileSize: file.size,
        file,
        path: "",
    },
    render: (args) => (
        <Flex gap={12} direction={"column"}>
            <File {...args} />
            <File {...args} />
            <File {...args} />
            <File {...args} />
        </Flex>
    ),
};
