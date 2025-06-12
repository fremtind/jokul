import type {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import "../styles/_index.scss";
import {formatBytes} from "../../../utilities/index.js";
import {Button, PrimaryButton} from "../../button/index.js";
import type {SupportLabelType} from "../../input-group/index.js";
import {File} from "../File.js";
import {FileInput} from "../FileInput.js";
import {Dropzone} from "../internal/Dropzone.js";
import {MaxSize} from "../internal/MaxSize.js";
import type {FileInputFile, FileInputFileState} from "../types.js";

const meta = {
    title: "Komponenter/FileInput",
    component: FileInput,
    subcomponents: {File, Dropzone, MaxSize, Button},
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
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
        const [files, setFiles] = useState<FileInputFile[]>([]);

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
                    {files.map(({state, file, validation}, index) => {
                        let label: string | undefined = undefined;
                        let labelType: SupportLabelType | undefined = undefined;
                        let demoState: FileInputFileState = state;

                        const isUploading = state === "UPLOADING";

                        if (validation?.type === "WRONG_TYPE") {
                            labelType = "warning";
                            label = `Filtypen ${
                                file.name?.split(".")[1] || ""
                            } støttes ikke`;
                        } else if (state === "UPLOAD_SUCCESS") {
                            labelType = "success";
                            label = "Lastet opp";
                            demoState = "UPLOAD_SUCCESS";
                        } else if (state === "UPLOAD_ERROR") {
                            labelType = "error";
                            label = "Filen lot seg ikke laste opp";
                            demoState = "UPLOAD_ERROR";
                        } else if (
                            validation?.type === "TOO_LARGE" &&
                            args.maxSizeBytes
                        ) {
                            labelType = "error";
                            label = `Filen er større enn ${formatBytes(
                                args.maxSizeBytes,
                            )} og kan ikke lastes opp`;
                        } else if (isUploading) {
                            label = "Laster opp…";
                            demoState = "UPLOADING";
                        }

                        return (
                            <File
                                key={`${file.name}-${index}`}
                                fileName={file.name}
                                fileType={file.type}
                                fileSize={file.size}
                                path={`/path/fil-${index}`}
                                file={file}
                                state={demoState}
                                supportLabel={label}
                                supportLabelType={labelType}
                                onRemove={
                                    ["UPLOAD_ERROR", "SELECTED"].includes(state)
                                        ? () => {
                                            setFiles([
                                                ...files.slice(0, index),
                                                ...files.slice(index + 1),
                                            ]);
                                        }
                                        : undefined
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
                                fileState.state === "SELECTED" &&
                                typeof fileState.validation === "undefined",
                        );

                        const promises = toUpload.map(
                            (fileToUpload) =>
                                new Promise<void>((resolve) => {
                                    const timeout = 5000;
                                    setTimeout(() => {
                                        setFiles((currentFiles) =>
                                            currentFiles.map((file) =>
                                                file.file.name ===
                                                fileToUpload.file.name
                                                    ? {
                                                        ...file,
                                                        state: "UPLOAD_SUCCESS",
                                                    }
                                                    : file,
                                            ),
                                        );
                                        resolve();
                                    }, timeout);
                                }),
                        );

                        const newFiles = files.map((file) =>
                            toUpload.includes(file)
                                ? {
                                    ...file,
                                    state: "UPLOADING" as FileInputFileState,
                                }
                                : file,
                        );

                        setFiles(newFiles);

                        await Promise.all(promises);
                    }}
                >
                    Last opp
                </PrimaryButton>
            </div>
        );
    },
};
