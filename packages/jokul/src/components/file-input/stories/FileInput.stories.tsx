import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { fn } from "storybook/test";
import { File } from "../../file/File.js";
import { FileInput } from "../FileInput.js";
import type { UploadedFile } from "../types.js";
import { createUploadedFiles, renderFiles } from "./fileInputStoryUtils.js";

import "../styles/_index.scss";

const avansert = { table: { category: "Avansert" } };

const meta = {
    title: "Komponenter/File Input",
    component: FileInput,
    subcomponents: { File },
    args: {
        legend: "Legg til fil",
        description: "",
        errorLabel: "",
        labelProps: {
            variant: "medium",
        },
        value: [],
        accept: "image/*,.pdf",
        maxSizeBytes: 8_000_000,
        multiple: true,
        fileVariant: "list",
        disabled: false,
        onChange: fn(),
    },
    argTypes: {
        legend: {
            description: "Overskriften til feltet. Rendres som `<legend>`.",
        },
        description: {
            description:
                "Hjelpetekst under overskriften. Maks filstørrelse legges til automatisk når `maxSizeBytes` er satt.",
        },
        errorLabel: {
            description:
                "Feilmelding for hele feltet, f.eks. når det er påkrevd. Feil på enkeltfiler vises på `File`.",
        },
        tooltip: {
            description: "Tooltip som vises ved siden av overskriften.",
            control: false,
        },
        labelProps: {
            description:
                "Props til overskriften, f.eks. `variant` for størrelse.",
        },
        helpLabel: {
            ...avansert,
            description: "**Deprecated.** Bruk `description` i stedet.",
            control: false,
        },
        value: { control: false },
        accept: {
            table: {
                type: {
                    summary: '"image/*" | ".pdf" | "image/*,.pdf" | string',
                },
            },
        },
        fileVariant: {
            control: { type: "inline-radio" },
            table: { defaultValue: { summary: '"list"' } },
        },
        onChange: { control: false },
        id: { ...avansert, control: false },
        className: { ...avansert, control: false },
        supportLabelProps: {
            ...avansert,
            description: "Props til støtteteksten under feltet.",
            control: false,
        },
        trackingProps: { ...avansert, control: false },
        "data-testautoid": { ...avansert, control: false },
    },
    render: (args) => {
        const [files, setFiles] = useState<UploadedFile[]>(args.value);

        return (
            <FileInput
                {...args}
                value={files}
                onChange={(e, newFiles) => {
                    args.onChange(e, newFiles);
                    setFiles((current) => [...current, ...newFiles]);
                }}
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
