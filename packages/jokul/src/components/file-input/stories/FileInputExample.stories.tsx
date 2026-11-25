import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { fn } from "storybook/test";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/index.js";
import { FileInput } from "../FileInput.js";
import type { UploadedFile } from "../types.js";
import { createUploadedFiles, renderFiles } from "./fileInputStoryUtils.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/File Input/Eksempler",
    component: FileInput,
    args: {
        value: [],
        onChange: fn(),
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

export const FileInputOgOpplastingsknapp: Story = {
    name: "File Input og opplastingsknapp",
    render: (args) => {
        const [files, setFiles] = useState<UploadedFile[]>(
            createUploadedFiles(["bilde-1.png"]),
        );
        const [uploading, setUploading] = useState(false);

        return (
            <Flex gap="m" direction="column">
                <FileInput
                    {...args}
                    id="file-input-upload-example"
                    className="jkl-spacing-16-24--bottom"
                    value={files}
                    onChange={(e, newFiles) => {
                        args.onChange(e, newFiles);
                        setFiles((current) => [...current, ...newFiles]);
                    }}
                >
                    {renderFiles(
                        files.map((f) => ({
                            ...f,
                            state: uploading ? "loading" : undefined,
                        })),
                        (index) =>
                            setFiles((current) =>
                                current.filter((_, i) => i !== index),
                            ),
                    )}
                </FileInput>
                <Button
                    variant="primary"
                    onClick={() => {
                        setUploading(true);
                        setTimeout(() => setUploading(false), 3000);
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
