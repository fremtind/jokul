import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import "../styles/_index.scss";
import { Button, PrimaryButton } from "../../button/index.js";
import { File } from "../../file/File.js";
import { FileInput } from "../FileInput.js";
import { Dropzone } from "../internal/Dropzone.js";
import { MaxSize } from "../internal/MaxSize.js";
import type { UploadedFile } from "../types.js";

const meta = {
    title: "Komponenter/File/FileInput",
    component: FileInput,
    subcomponents: { File, Dropzone, MaxSize, Button },
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
        labelProps: {
            variant: "medium",
        },
        accept: "image/*,.pdf",
        maxSizeBytes: 8_000_000,
    },
    render: (args) => {
        const [files, setFiles] = useState<UploadedFile[]>([]);

        return (
            <div>
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
                <PrimaryButton
                    className="jkl-spacing-16--top"
                    type="button"
                    onClick={async () => {
                        const toUpload = files.filter(
                            (fileState) =>
                                typeof fileState.validation === "undefined",
                        );

                        const newFiles = files.map((file) =>
                            toUpload.includes(file)
                                ? {
                                      ...file,
                                  }
                                : file,
                        );

                        setFiles(
                            newFiles.map((file) => {
                                return { ...file, state: "loading" };
                            }),
                        );

                        await Promise.all(newFiles);
                    }}
                >
                    Last opp
                </PrimaryButton>
            </div>
        );
    },
};
