import type {Meta, StoryObj} from "@storybook/react";
import React from "react";
import "../../file-input/styles/_index.scss";
import {Button} from "../../button/index.js";
import {Flex} from "../../flex/index.js";
import {
    SkeletonButton,
    SkeletonElement,
    SkeletonInput,
    SkeletonTable,
    SkeletonTableHeader,
    SkeletonTableRow,
} from "../../loader/index.js";
import {File} from "../File.js";

import * as url from "./cow.jpg";

const meta = {
    title: "Komponenter/File/File",
    component: File,
    subcomponents: {Button},
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
    render: (args) => <File {...args} onRemove={() => "e"}/>,
};

export const FileListStory: Story = {
    name: "Eksempel:: File List",
    render: (args) => {
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                    gridTemplateRows: "1lh auto",
                    width: "100dvw",
                    height: "95dvh",
                    maxWidth: "90ch",
                    marginInline: "auto",
                    padding: "2ch",
                    gap: "2lh 40px",
                    boxSizing: "border-box",
                    overflow: "auto",
                }}
            >
                <h1
                    className={"jkl-heading-1"}
                    style={{gridColumn: "1 / -1"}}
                >
                    Søknad om Reiseforsikring
                </h1>
                <Flex
                    gap={32}
                    direction={"column"}
                    style={{
                        background:
                            "var(--jkl-color-background-container-high)",
                        height: "100%",
                        width: "100%",
                        padding: "1lh 3ch",
                        boxSizing: "border-box",
                    }}
                >
                    <h2 className={"jkl-heading-2"}>Steg 2 av 3</h2>
                    <Flex style={{flex: 1}} gap={32} direction={"column"}>
                        <SkeletonInput/>
                        <SkeletonInput/>
                        <SkeletonInput/>
                        <SkeletonInput/>
                    </Flex>
                    <Flex gap={12}>
                        <SkeletonButton width={120}/>
                        <SkeletonButton width={120}/>
                    </Flex>
                </Flex>
                <Flex direction={"column"} gap={16}>
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
                                <SkeletonElement height={20} width={60}/>
                                <SkeletonElement height={20} width={240}/>
                                <SkeletonElement height={20} width={90}/>
                            </SkeletonTableHeader>
                            <SkeletonTableRow>
                                <SkeletonElement height={20} width={60}/>
                                <SkeletonElement height={20} width={240}/>
                                <SkeletonElement height={20} width={90}/>
                            </SkeletonTableRow>
                            <SkeletonTableRow>
                                <SkeletonElement height={20} width={60}/>
                                <SkeletonElement height={20} width={240}/>
                                <SkeletonElement height={20} width={90}/>
                            </SkeletonTableRow>
                            <SkeletonTableRow>
                                <SkeletonElement height={20} width={60}/>
                                <SkeletonElement height={20} width={240}/>
                                <SkeletonElement height={20} width={90}/>
                            </SkeletonTableRow>
                        </SkeletonTable>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gap: "12px",
                            gridTemplateColumns:
                                args.variant === "list"
                                    ? "1fr"
                                    : "repeat(2, 1fr)",
                        }}
                    >
                        <File {...args} />
                        <File {...args} />
                    </div>
                </Flex>
            </div>
        );
    },
};
