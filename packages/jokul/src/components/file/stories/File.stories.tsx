import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useEffect, useState } from "react";
import { fn } from "storybook/test";
import * as url from "../../../../../../storybook-public/images/cow.jpg";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
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
        onRemove: fn(),
    },
} satisfies Meta<typeof File>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FileStory: Story = {
    name: "File",
};

export const FileDelete: Story = {
    name: "Fil med slettefunksjon",
};

export const FileList: Story = {
    name: "Liste med filer",
    args: {
        onRemove: undefined,
    },
    decorators: (Story, story) => (
        <Flex
            direction={story.args.variant === "list" ? "column" : "row"}
            gap="xs m"
        >
            {Array("Fil 1", "Fil 2").map((i) => (
                <Story key={i} {...story.args} {...FileStory.args} />
            ))}
        </Flex>
    ),
};

export const FileLoading: Story = {
    name: "Filopplasting (én fil)",
    args: {
        state: "loading",
    },
    decorators: (Story) => {
        return (
            <Flex direction="column" gap="xs">
                <Story />
                <p style={{ fontSize: "0.75em", opacity: 0.5 }}>
                    Oppdateres automatisk hvert 4. sekund
                </p>
            </Flex>
        );
    },
    render: (args) => {
        const [fileLoading, setFileLoading] = useState<boolean>(
            args.state === "loading" || true,
        );

        useEffect(() => {
            setTimeout(() => setFileLoading(!fileLoading), 4000, "mock");
            clearTimeout("mock");
        }, [fileLoading]);

        return (
            <File
                {...FileStory.args}
                {...args}
                state={fileLoading ? "loading" : undefined}
                onRemove={fileLoading ? undefined : fn()}
            />
        );
    },
};

export const MultifileLoading: Story = {
    name: "Filopplasting (flere filer)",
    args: {
        state: "loading",
    },
    decorators: (Story) => {
        return (
            <Flex direction="column" gap="xs">
                <Story />
                <p style={{ fontSize: "0.75em", opacity: 0.5 }}>
                    Oppdateres automatisk hvert 2. sekund
                </p>
            </Flex>
        );
    },
    render: (args) => {
        const files = [1, 2, 3, 4, 5];
        const [filesUploaded, setFilesUploaded] = useState<number>(0);

        useEffect(() => {
            setTimeout(
                () => {
                    if (filesUploaded >= files.length) {
                        setFilesUploaded(0);
                    } else {
                        setFilesUploaded(filesUploaded + 1);
                    }
                },
                2000,
                "mock",
            );
            clearTimeout("mock");
        }, [filesUploaded]);

        return (
            <>
                {files.map((index) => (
                    <File
                        key={index}
                        {...FileLoading.args}
                        {...args}
                        state={filesUploaded < index ? "loading" : undefined}
                        onRemove={filesUploaded < index ? undefined : fn()}
                    />
                ))}
            </>
        );
    },
};
