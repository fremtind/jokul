import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { Button } from "../../button/index.js";
import { File } from "../../file/File.js";
import FileStory, { FileDelete } from "../../file/stories/File.stories.js";
import { Flex } from "../../flex/index.js";
import { FileInput } from "../FileInput.js";
import { Dropzone } from "../internal/Dropzone.js";
import { MaxSize } from "../internal/MaxSize.js";
import type { UploadedFile } from "../types.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/File Input",
    component: FileInput,
    subcomponents: { File, Dropzone, MaxSize },
    args: {
        variant: "flexible",
        value: [],
        onChange: console.info,
        legend: "Legg til fil",
        labelProps: {
            variant: "medium",
        },
        accept: "image/*,.pdf",
        maxSizeBytes: 8_000_000,
    },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FileInputStory: Story = {
    name: "File Input",
    render: (args) => {
        const [files, setFiles] = useState<UploadedFile[]>([]);

        return (
            <FileInput
                {...args}
                id="file-input-example"
                className="jkl-spacing-16-24--bottom"
                value={files}
                onChange={(_e, newFiles) => {
                    setFiles((currentFiles) => [...currentFiles, ...newFiles]);
                }}
            >
                {files.map(({ state, file, validation }, index) => {
                    return (
                        <File
                            key={`${file.name}-${index}`}
                            fileName={file.name}
                            fileType={file.type}
                            fileSize={file.size}
                            path={`/path/fil-${index}`}
                            file={file}
                            state={state}
                            onRemove={
                                state !== "loading" ? (e) => "" : undefined
                            }
                        />
                    );
                })}
            </FileInput>
        );
    },
};

export const FileInputWithFile: Story = {
    name: "File Input med valgte filer",
    render: (args) => {
        const [files, setFiles] = useState<UploadedFile[]>([
            {
                file: {
                    ...FileStory.args,
                    lastModified: 0,
                    name: FileStory.args.fileName,
                    webkitRelativePath: FileStory.args.path,
                    size: FileStory.args.fileSize,
                    type: "png",
                    arrayBuffer: (): Promise<ArrayBuffer> => {
                        throw new Error("Function not implemented.");
                    },
                    bytes: (): Promise<Uint8Array<ArrayBuffer>> => {
                        throw new Error("Function not implemented.");
                    },
                    slice: (
                        start?: number,
                        end?: number,
                        contentType?: string,
                    ): Blob => {
                        throw new Error("Function not implemented.");
                    },
                    stream: (): ReadableStream<Uint8Array<ArrayBuffer>> => {
                        throw new Error("Function not implemented.");
                    },
                    text: (): Promise<string> => {
                        throw new Error("Function not implemented.");
                    },
                },
                state: undefined,
                uploadProgress: 0,
            },
            {
                file: {
                    ...FileStory.args,
                    lastModified: 0,
                    name: FileStory.args.fileName,
                    webkitRelativePath: FileStory.args.path,
                    size: FileStory.args.fileSize,
                    type: "png",
                    arrayBuffer: (): Promise<ArrayBuffer> => {
                        throw new Error("Function not implemented.");
                    },
                    bytes: (): Promise<Uint8Array<ArrayBuffer>> => {
                        throw new Error("Function not implemented.");
                    },
                    slice: (
                        start?: number,
                        end?: number,
                        contentType?: string,
                    ): Blob => {
                        throw new Error("Function not implemented.");
                    },
                    stream: (): ReadableStream<Uint8Array<ArrayBuffer>> => {
                        throw new Error("Function not implemented.");
                    },
                    text: (): Promise<string> => {
                        throw new Error("Function not implemented.");
                    },
                },
                state: undefined,
                uploadProgress: 0,
            },
            {
                file: {
                    ...FileStory.args,
                    lastModified: 0,
                    name: FileStory.args.fileName,
                    webkitRelativePath: FileStory.args.path,
                    size: FileStory.args.fileSize,
                    type: "png",
                    arrayBuffer: (): Promise<ArrayBuffer> => {
                        throw new Error("Function not implemented.");
                    },
                    bytes: (): Promise<Uint8Array<ArrayBuffer>> => {
                        throw new Error("Function not implemented.");
                    },
                    slice: (
                        start?: number,
                        end?: number,
                        contentType?: string,
                    ): Blob => {
                        throw new Error("Function not implemented.");
                    },
                    stream: (): ReadableStream<Uint8Array<ArrayBuffer>> => {
                        throw new Error("Function not implemented.");
                    },
                    text: (): Promise<string> => {
                        throw new Error("Function not implemented.");
                    },
                },
                state: undefined,
                uploadProgress: 0,
            },
        ]);

        return (
            <FileInput
                {...args}
                id="file-input-example"
                className="jkl-spacing-16-24--bottom"
                value={files}
                onChange={(_, newFiles) => {
                    setFiles((currentFiles) => [...currentFiles, ...newFiles]);
                }}
            >
                {files.map(({ state, file }, index) => {
                    return (
                        <File
                            key={`${file.name}-${index}`}
                            fileName={file.name}
                            fileType={file.type}
                            fileSize={file.size}
                            path={file.webkitRelativePath}
                            file={file}
                            state={state}
                            onRemove={
                                state !== "loading" ? (e) => "" : undefined
                            }
                        />
                    );
                })}
            </FileInput>
        );
    },
};

export const FileInputAndUploadButton: Story = {
    name: "File Input og opplastingsknapp",
    render: (args) => {
        const [files, setFiles] = useState<UploadedFile[]>([
            {
                file: {
                    ...FileStory.args,
                    lastModified: 0,
                    name: FileStory.args.fileName,
                    webkitRelativePath: FileStory.args.path,
                    size: FileStory.args.fileSize,
                    type: "png",
                    arrayBuffer: (): Promise<ArrayBuffer> => {
                        throw new Error("Function not implemented.");
                    },
                    bytes: (): Promise<Uint8Array<ArrayBuffer>> => {
                        throw new Error("Function not implemented.");
                    },
                    slice: (
                        start?: number,
                        end?: number,
                        contentType?: string,
                    ): Blob => {
                        throw new Error("Function not implemented.");
                    },
                    stream: (): ReadableStream<Uint8Array<ArrayBuffer>> => {
                        throw new Error("Function not implemented.");
                    },
                    text: (): Promise<string> => {
                        throw new Error("Function not implemented.");
                    },
                },
                state: undefined,
                uploadProgress: 0,
            },
        ]);
        const [uploading, setUploading] = useState(false);

        return (
            <Flex direction="column">
                <FileInput
                    {...args}
                    id="file-input-example"
                    className="jkl-spacing-16-24--bottom"
                    value={files}
                    onChange={(_e, newFiles) => {
                        setFiles((currentFiles) => [
                            ...currentFiles,
                            ...newFiles,
                        ]);
                    }}
                >
                    {files.map(({ state, file, validation }, index) => {
                        return (
                            <File
                                {...FileStory.args}
                                {...FileDelete.args}
                                key={`${file.name}-${index}`}
                                fileName={file.name}
                                fileType={file.type}
                                fileSize={file.size}
                                path={`/path/fil-${index}`}
                                file={file}
                                state={uploading ? "loading" : undefined}
                            />
                        );
                    })}
                </FileInput>
                <Button
                    variant="primary"
                    onClick={() => {
                        setUploading(true);
                        setTimeout(() => {
                            setUploading(false);
                        }, 3000);
                    }}
                    loader={{
                        showLoader: uploading,
                        textDescription: "Laster opp fil(er)",
                    }}
                >
                    Last opp
                </Button>
            </Flex>
        );
    },
};
