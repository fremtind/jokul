import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { File } from "../../file/File.js";
import { FileInput } from "../FileInput.js";
import { Dropzone } from "../internal/Dropzone.js";
import { MaxSize } from "../internal/MaxSize.js";
import type { UploadedFile } from "../types.js";
import { createUploadedFiles, renderFiles } from "./fileInputStoryUtils.js";

import "../styles/_index.scss";

const meta = {
    title: "Komponenter/File Input",
    component: FileInput,
    subcomponents: { File, Dropzone, MaxSize },
    args: {
        variant: "flexible",
        fileVariant: "list",
        value: [],
        onChange: console.info,
        legend: "Legg til fil",
        labelProps: {
            variant: "medium",
        },
        accept: "image/*,.pdf",
        maxSizeBytes: 8_000_000,
    },
    argTypes: {
        variant: { control: { type: "inline-radio" } },
        fileVariant: { control: { type: "inline-radio" } },
    },
    render: (args) => {
        const [files, setFiles] = useState<UploadedFile[]>(args.value);

        return (
            <FileInput
                {...args}
                id="file-input-example"
                className="jkl-spacing-16-24--bottom"
                value={files}
                onChange={(_e, newFiles) =>
                    setFiles((current) => [...current, ...newFiles])
                }
            >
                {renderFiles(files, (index) =>
                    setFiles((current) =>
                        current.filter((_, i) => i !== index),
                    ),
                )}
            </FileInput>
        );
    },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FileInputStory: Story = {
    name: "File Input",
};

export const Small: Story = {
    name: "Liten",
    args: { variant: "small" },
};

export const MedValgteFiler: Story = {
    name: "Med valgte filer",
    args: {
        value: createUploadedFiles(["bilde-1.png", "bilde-2.png", "bok.pdf"]),
    },
};

/** Med `fileVariant="card"` vises filene alltid som et rutenett, side om side. */
export const FilerSomKort: Story = {
    name: "Filer vist som kort",
    args: {
        fileVariant: "card",
        value: createUploadedFiles([
            "bilde-1.png",
            "bilde-2.png",
            "bilde-3.png",
            "bilde-4.png",
            "dokument-1.pdf",
            "dokument-2.pdf",
        ]),
    },
    parameters: { layout: "fullscreen" },
    decorators: [
        (Story) => (
            <div style={{ padding: "2rem" }}>
                <Story />
            </div>
        ),
    ],
};

/**
 * Rotelementet er et `fieldset`, så `disabled` slår av filvelgeren nativt. Dropsonen dempes
 * fordi den er selve kontrollflaten, mens legend og støttetekster beholder full kontrast.
 */
export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
