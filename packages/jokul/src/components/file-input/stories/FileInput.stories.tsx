import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState, type ChangeEvent } from "react";
import { Button } from "../../button/index.js";
import { File as FileComponent } from "../../file/File.js";
import { Flex } from "../../flex/index.js";
import { FileInput } from "../FileInput.js";

const meta = {
    title: "Komponenter/File Input",
    component: FileInput,
    args: {
        label: "Last opp dokumenter",
        description: "Tillatte formater: JPG, PNG",
        buttonLabel: "Velg fil",
        accept: "image/*,.pdf",
        multiple: false,
    },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

function getFiles(event: ChangeEvent<HTMLInputElement>): File[] {
    return Array.from(event.currentTarget.files ?? []);
}

function createExampleFile(name = "eksempel.png"): File {
    return new File(["Eksempelinnhold"], name, {
        type: "image/png",
        lastModified: Date.now(),
    });
}

export const FileInputStory: Story = {
    name: "File Input",
};

export const FileInputWithFile: Story = {
    name: "File Input med valgte filer",
    render: (args) => {
        const [files, setFiles] = useState<File[]>([
            createExampleFile("forside.png"),
            createExampleFile("kvittering.png"),
            createExampleFile("vedlegg.png"),
        ]);

        function handleChange(event: ChangeEvent<HTMLInputElement>) {
            setFiles((currentFiles) => [...currentFiles, ...getFiles(event)]);

            event.currentTarget.value = "";
        }

        function removeFile(fileToRemove: File) {
            setFiles((currentFiles) =>
                currentFiles.filter((file) => file !== fileToRemove),
            );
        }

        return (
            <Flex direction="column">
                <FileInput
                    {...args}
                    id="file-input-with-files"
                    onChange={handleChange}
                />

                {files.length > 0 && (
                    <ul className="jkl-file-input-example__files">
                        {files.map((file, index) => (
                            <li
                                key={`${file.name}-${file.lastModified}-${index}`}
                            >
                                <FileComponent
                                    file={file}
                                    fileName={file.name}
                                    fileType={file.type}
                                    fileSize={file.size}
                                    path={file.name}
                                    onRemove={() => removeFile(file)}
                                />
                            </li>
                        ))}
                    </ul>
                )}
            </Flex>
        );
    },
};

export const FileInputAndUploadButton: Story = {
    name: "File Input og opplastingsknapp",
    render: (args) => {
        const [files, setFiles] = useState<File[]>([createExampleFile()]);
        const [uploading, setUploading] = useState(false);

        function handleChange(event: ChangeEvent<HTMLInputElement>) {
            setFiles((currentFiles) => [...currentFiles, ...getFiles(event)]);

            event.currentTarget.value = "";
        }

        function removeFile(fileToRemove: File) {
            setFiles((currentFiles) =>
                currentFiles.filter((file) => file !== fileToRemove),
            );
        }

        function uploadFiles() {
            setUploading(true);

            window.setTimeout(() => {
                setUploading(false);
            }, 3000);
        }

        return (
            <Flex direction="column">
                <FileInput
                    {...args}
                    id="file-input-with-upload"
                    disabled={uploading}
                    onChange={handleChange}
                />

                {files.length > 0 && (
                    <ul className="jkl-file-input-example__files">
                        {files.map((file, index) => (
                            <li
                                key={`${file.name}-${file.lastModified}-${index}`}
                            >
                                <FileComponent
                                    file={file}
                                    fileName={file.name}
                                    fileType={file.type}
                                    fileSize={file.size}
                                    path={file.name}
                                    state={uploading ? "loading" : undefined}
                                    onRemove={
                                        uploading
                                            ? undefined
                                            : () => removeFile(file)
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                )}

                <Button
                    variant="secondary"
                    disabled={files.length === 0}
                    onClick={uploadFiles}
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
