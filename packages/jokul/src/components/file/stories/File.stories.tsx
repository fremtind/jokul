import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import * as url from "../../../../../../storybook-public/images/cow.jpg";
import { Button } from "../../button/index.js";
import { File } from "../File.js";

const meta = {
    title: "Komponenter/File",
    component: File,
    subcomponents: { Button },
    args: {
        fileName: "Skotsk høylandsfe.png",
        fileType: "image/png",
        fileSize: 3_490_000,
        path: url.default,
        variant: "list",
    },
} satisfies Meta<typeof File>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FileStory: Story = {
    name: "File",
};

export const FileDelete: Story = {
    name: "File med slettefunksjon",
    args: {
        onRemove: () => "",
    },
};

export const FileList: Story = {
    decorators: (Story, story) => (
        <div
            style={{
                display: "grid",
                gap: "12px",
                gridTemplateColumns:
                    story.args.variant === "list" ? "1fr" : "repeat(2, 1fr)",
            }}
        >
            <Story />
        </div>
    ),
    render: (args) => {
        return (
            <>
                <File {...FileStory.args} {...args} />
                <File
                    {...FileStory.args}
                    {...args}
                    fileName={`${args.fileName} 2`}
                />
            </>
        );
    },
};
