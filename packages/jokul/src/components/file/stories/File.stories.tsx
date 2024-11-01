import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../../file-input/styles/_index.scss";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import {
    SkeletonElement,
    SkeletonTable,
    SkeletonTableHeader,
    SkeletonTableRow,
} from "../../loader/index.js";
import { File } from "../File.js";

import * as url from "./cow.jpg";

const meta = {
    title: "Komponenter/File/File",
    component: File,
    subcomponents: { Button },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        state: {
            control: "select",
            options: [undefined, "error", "loading"],
        },
        file: {
            control: false,
        },
    },
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
    args: {
        onRemove: () => "",
    },
    render: (args) => <File {...args} onRemove={() => "e"} />,
};

export const FileListStory: Story = {
    name: "Eksempel:: File List",
    render: (args) => {
        return (
            <Flex direction={"column"} gap="sm">
                <div
                    style={{
                        background:
                            "var(--jkl-color-background-container-high)",
                        maxHeight: "80%",
                        width: "100%",
                        padding: "1lh 3ch",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2ch",
                        boxSizing: "border-box",
                        overflow: "hidden",
                    }}
                >
                    <h2 className={"jkl-heading-2"}>Oppsummering</h2>
                    <SkeletonTable>
                        <SkeletonTableHeader>
                            <SkeletonElement height={20} width={60} />
                            <SkeletonElement height={20} width={240} />
                            <SkeletonElement height={20} width={90} />
                        </SkeletonTableHeader>
                        <SkeletonTableRow>
                            <SkeletonElement height={20} width={60} />
                            <SkeletonElement height={20} width={240} />
                            <SkeletonElement height={20} width={90} />
                        </SkeletonTableRow>
                        <SkeletonTableRow>
                            <SkeletonElement height={20} width={60} />
                            <SkeletonElement height={20} width={240} />
                            <SkeletonElement height={20} width={90} />
                        </SkeletonTableRow>
                        <SkeletonTableRow>
                            <SkeletonElement height={20} width={60} />
                            <SkeletonElement height={20} width={240} />
                            <SkeletonElement height={20} width={90} />
                        </SkeletonTableRow>
                    </SkeletonTable>
                </div>

                <div
                    style={{
                        display: "grid",
                        gap: "12px",
                        gridTemplateColumns:
                            args.variant === "list" ? "1fr" : "repeat(2, 1fr)",
                    }}
                >
                    <File
                        {...args}
                        fileName={"Dekningsoversikt (IPID).pdf"}
                        fileType={"PDF"}
                    />
                    <File
                        {...args}
                        fileName={"Avtaledokument.pdf"}
                        fileType={"PDF"}
                    />
                </div>
            </Flex>
        );
    },
};
