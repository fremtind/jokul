import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import dog from "/img/dog-400.jpg";
import { File } from "../File.js";
import type { FileProps } from "../types.js";

export const fileExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Variant",
            values: ["list", "card"],
            defaultValue: 0,
        },
    ],
};

const onRemove = () => {};

const files: FileProps[] = [
    {
        fileName: "skade.jpg",
        fileType: "image/jpeg",
        fileSize: 25_206,
        path: dog,
        onRemove,
    },
    {
        fileName: "kvittering.pdf",
        fileType: "application/pdf",
        fileSize: 120_000,
        path: "#",
        onRemove,
    },
    {
        fileName: "laster-opp.jpg",
        fileType: "image/jpeg",
        fileSize: 25_206,
        path: dog,
        state: "loading",
        onRemove,
    },
    {
        fileName: "for-stor.pdf",
        fileType: "application/pdf",
        fileSize: 12_000_000,
        state: "error",
        errorLabel: "Filen er 12 MB, men kan maksimalt være 8 MB",
        onRemove,
    },
    {
        fileName: "uten-miniatyrbilde.pdf",
        fileType: "application/pdf",
        fileSize: 120_000,
        hideThumbnail: true,
        onRemove,
    },
    {
        fileName:
            "et-veldig-langt-filnavn-som-maa-brytes-over-flere-linjer.pdf",
        fileType: "application/pdf",
        fileSize: 120_000,
    },
];

export const FileExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const variant = choiceValues?.Variant as FileProps["variant"];

    return (
        <div
            style={{
                display: "grid",
                gap: "var(--jkl-unit-10)",
                gridTemplateColumns:
                    variant === "card"
                        ? "repeat(3, 12rem)"
                        : "minmax(0, 24rem)",
            }}
        >
            {files.map((file) => (
                <File key={file.fileName} {...file} variant={variant} />
            ))}
        </div>
    );
};
