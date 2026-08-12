import type { Meta, StoryObj } from "@storybook/nextjs";
import { useEffect, useState } from "react";
import { fn } from "storybook/test";
import * as book from "../../../../../../storybook-public/data/metamorphosis.pdf";
import * as url from "../../../../../../storybook-public/images/cow.jpg";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import { Text } from "../../typography/index.js";
import { File } from "../File.js";

const meta = {
    title: "Komponenter/File",
    component: File,
    subcomponents: { Button },
    args: {
        hideThumbnail: false,
        fileName: "Skotsk høylandsfe.png",
        fileType: "image/png",
        fileSize: 3_490_000,
        path: url.default,
        variant: "list",
        onRemove: undefined,
    },
    argTypes: {
        variant: {
            control: { type: "inline-radio" },
        },
        state: {
            control: { type: "inline-radio" },
            options: [undefined, "loading", "error"],
        },
    },
} satisfies Meta<typeof File>;
export default meta;

type Story = StoryObj<typeof meta>;

export const FileStory: Story = {
    name: "File",
};

export const Document: Story = {
    name: "Dokument",
    args: {
        fileName: "kafka.pdf",
        fileSize: 427_000,
        fileType: ".pdf",
        path: book.default,
    },
};

export const FileCard: Story = {
    name: "File vist som kort",
    args: {
        variant: "card",
    },
};

export const FileDelete: Story = {
    name: "Fil med slettefunksjon",
    args: {
        onRemove: fn(),
    },
};

export const FileList: Story = {
    name: "Liste med filer",
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
                <Text size="xs" subdued>
                    Oppdateres automatisk hvert 4. sekund
                </Text>
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

export const FileError: Story = {
    name: "Fil med feil",
    args: {
        state: "error",
    },
};

export const MultifileLoading: Story = {
    name: "Filopplasting (flere filer)",
    args: {
        state: "loading",
    },
    decorators: (Story) => {
        return (
            <Flex
                direction="column"
                gap="xs"
                style={{ minWidth: "min(24rem, 90vw)" }}
            >
                <Story />
                <Text size="xs" subdued>
                    Oppdateres automatisk hvert 2. sekund
                </Text>
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
