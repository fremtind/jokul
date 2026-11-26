import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import * as cow from "../../../../../stories/assets/cow.jpg";
import { File } from "../../../file/File.js";
import { Help } from "../../../help/index.js";
import type { UploadedFile } from "../../types.js";
import {
    Attributter,
    Eksempel,
    EksempelFileInput,
    FilVisning,
    Sammenligning,
    bilde,
    pdf,
} from "../fileInputStoryUtils.js";

import "../../styles/_index.scss";

/**
 * Én story per prop på FileInput og File, med verdiene side om side. Overskriften over
 * hvert eksempel er koden som gir det.
 */
const meta = {
    title: "Komponenter/File Input/Props",
    parameters: { layout: "padded" },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const toFiler = [bilde("kvittering.jpg"), pdf("faktura.pdf")];

export const LegendOgLabelProps: Story = {
    name: "legend og labelProps",
    render: () => (
        <Sammenligning>
            {(["small", "medium", "large"] as const).map((variant) => (
                <Eksempel
                    key={variant}
                    kode={`labelProps={{ variant: "${variant}" }}`}
                >
                    <EksempelFileInput
                        legend="Vedlegg"
                        labelProps={{ variant }}
                    />
                </Eksempel>
            ))}
            <Eksempel kode="labelProps={{ srOnly: true }}">
                <EksempelFileInput
                    legend="Vedlegg"
                    labelProps={{ srOnly: true }}
                />
            </Eksempel>
            <Eksempel kode="labelProps={{ pageHeading: true }}">
                <EksempelFileInput
                    legend="Last opp kvitteringen"
                    labelProps={{ pageHeading: true }}
                />
            </Eksempel>
        </Sammenligning>
    ),
};

export const Tooltip: Story = {
    name: "tooltip",
    render: () => (
        <Sammenligning>
            <Eksempel kode={`tooltip={<Help buttonText="…">…</Help>}`}>
                <EksempelFileInput
                    legend="Vedlegg"
                    tooltip={
                        <Help buttonText="Hva kan jeg laste opp?">
                            Du kan laste opp bilder og PDF-er.
                        </Help>
                    }
                />
            </Eksempel>
            <Eksempel kode='tooltip={<Help showButtonText buttonText="…">…</Help>}'>
                <EksempelFileInput
                    legend="Vedlegg"
                    tooltip={
                        <Help
                            showButtonText
                            buttonText="Hva kan jeg laste opp?"
                        >
                            Bilder og PDF-er på opptil 8 MB.
                        </Help>
                    }
                />
            </Eksempel>
            <Eksempel kode='tooltip={…} labelProps={{ variant: "large" }}'>
                <EksempelFileInput
                    legend="Vedlegg"
                    labelProps={{ variant: "large" }}
                    tooltip={
                        <Help buttonText="Hva kan jeg laste opp?">
                            Du kan laste opp bilder og PDF-er.
                        </Help>
                    }
                />
            </Eksempel>
        </Sammenligning>
    ),
};

/** `maxSizeBytes` legger til «Maks … per fil.» etter `description`. */
export const DescriptionOgMaxSizeBytes: Story = {
    name: "description og maxSizeBytes",
    render: () => (
        <Sammenligning>
            <Eksempel kode='description="…"'>
                <EksempelFileInput
                    legend="Vedlegg"
                    description="Last opp kvitteringen for det du har kjøpt."
                />
            </Eksempel>
            <Eksempel kode="maxSizeBytes={8_000_000}">
                <EksempelFileInput legend="Vedlegg" maxSizeBytes={8_000_000} />
            </Eksempel>
            <Eksempel kode='description="…" maxSizeBytes={8_000_000}'>
                <EksempelFileInput
                    legend="Vedlegg"
                    description="Last opp kvitteringen for det du har kjøpt."
                    maxSizeBytes={8_000_000}
                />
            </Eksempel>
            <Eksempel kode="maxSizeBytes={100_000} – prøv å legge til en fil">
                <EksempelFileInput legend="Vedlegg" maxSizeBytes={100_000} />
            </Eksempel>
        </Sammenligning>
    ),
};

/** `accept` vises ikke, men filer med feil type får en feilmelding. Prøv å legge til filer. */
export const Accept: Story = {
    name: "accept",
    render: () => (
        <Sammenligning>
            {["image/*", ".pdf", "image/*,.pdf", "image/png,.docx"].map(
                (accept) => (
                    <Eksempel key={accept} kode={`accept="${accept}"`}>
                        <EksempelFileInput legend="Vedlegg" accept={accept} />
                    </Eksempel>
                ),
            )}
        </Sammenligning>
    ),
};

export const Multiple: Story = {
    name: "multiple",
    render: () => (
        <Sammenligning>
            <Eksempel kode="multiple={true} (standard)">
                <EksempelFileInput legend="Vedlegg" filer={toFiler} />
            </Eksempel>
            <Eksempel kode="multiple={false}">
                <EksempelFileInput
                    legend="Vedlegg"
                    multiple={false}
                    filer={[bilde("kvittering.jpg")]}
                />
            </Eksempel>
        </Sammenligning>
    ),
};

export const FileVariant: Story = {
    name: "fileVariant",
    render: () => (
        <Sammenligning>
            <Eksempel kode='fileVariant="list" (standard)'>
                <EksempelFileInput legend="Vedlegg" filer={toFiler} />
            </Eksempel>
            <Eksempel kode='fileVariant="card"'>
                <EksempelFileInput
                    legend="Vedlegg"
                    fileVariant="card"
                    filer={toFiler}
                />
            </Eksempel>
        </Sammenligning>
    ),
};

/** `helpLabel` er utgått. Bruk `description`. */
export const ErrorLabelOgSupportLabelProps: Story = {
    name: "errorLabel, helpLabel og supportLabelProps",
    render: () => (
        <Sammenligning>
            <Eksempel kode='errorLabel="…"'>
                <EksempelFileInput
                    legend="Vedlegg"
                    errorLabel="Du må legge ved kvitteringen"
                />
            </Eksempel>
            <Eksempel kode='helpLabel="…" (utgått)'>
                <EksempelFileInput
                    legend="Vedlegg"
                    helpLabel="Last opp kvitteringen for det du har kjøpt."
                />
            </Eksempel>
            <Eksempel kode='errorLabel="…" supportLabelProps={{ srOnly: true }}'>
                <EksempelFileInput
                    legend="Vedlegg"
                    errorLabel="Du må legge ved kvitteringen"
                    supportLabelProps={{ srOnly: true }}
                />
            </Eksempel>
        </Sammenligning>
    ),
};

/** Ikke bruk i kundeflater, se beskrivelsen av `disabled`. */
export const Disabled: Story = {
    name: "disabled",
    render: () => (
        <Sammenligning>
            <Eksempel kode="disabled={false} (standard)">
                <EksempelFileInput legend="Vedlegg" filer={toFiler} />
            </Eksempel>
            <Eksempel kode="disabled={true}">
                <EksempelFileInput legend="Vedlegg" disabled filer={toFiler} />
            </Eksempel>
        </Sammenligning>
    ),
};

/** Legg til filer og se hva `onChange` får. `value` er filene som vises. */
export const ValueOgOnChange: Story = {
    name: "value og onChange",
    render: () => {
        const [siste, setSiste] = useState<UploadedFile[]>([]);

        return (
            <Sammenligning>
                <Eksempel kode='accept="image/*,.pdf" maxSizeBytes={8_000_000}'>
                    <EksempelFileInput
                        legend="Vedlegg"
                        accept="image/*,.pdf"
                        maxSizeBytes={8_000_000}
                        onChange={(_, files) => setSiste(files)}
                    />
                </Eksempel>
                <Eksempel kode="onChange={(e, files) => …} – files:">
                    <pre style={{ fontSize: "0.8rem", whiteSpace: "pre-wrap" }}>
                        {JSON.stringify(
                            siste.map(({ file, ...rest }) => ({
                                file: {
                                    name: file.name,
                                    type: file.type,
                                    size: file.size,
                                },
                                ...rest,
                            })),
                            null,
                            2,
                        )}
                    </pre>
                </Eksempel>
            </Sammenligning>
        );
    },
};

/** Hvor `id`, `className`, `data-testautoid` og `trackingProps` havner i DOM-en. */
export const Attributes: Story = {
    name: "id, className, data-testautoid og trackingProps",
    render: () => (
        <Attributter selector="fieldset, input[type=file]">
            <EksempelFileInput
                legend="Vedlegg"
                id="vedlegg"
                className="min-klasse"
                data-testautoid="vedlegg"
                accept=".pdf"
                trackingProps={{
                    id: "skademelding-vedlegg",
                    extra: { steg: "3" },
                }}
            />
        </Attributter>
    ),
};

export const FileNavnTypeOgStorrelse: Story = {
    name: "File: fileName, fileType og fileSize",
    render: () => (
        <Sammenligning>
            <Eksempel kode='fileType="image/jpeg"'>
                <FilVisning fil={bilde("kvittering.jpg")} />
            </Eksempel>
            <Eksempel kode='fileType="application/pdf"'>
                <FilVisning fil={pdf("faktura.pdf")} />
            </Eksempel>
            <Eksempel kode='fileType="application/zip"'>
                <FilVisning
                    fil={{
                        navn: "bilder.zip",
                        type: "application/zip",
                        størrelse: 52_000_000,
                    }}
                />
            </Eksempel>
            <Eksempel kode='fileType=""'>
                <FilVisning fil={{ navn: "ukjent", størrelse: 512 }} />
            </Eksempel>
        </Sammenligning>
    ),
};

/** Med `path` blir navnet en lenke. Med `file` lages forhåndsvisningen fra selve filen. */
export const FilePathOgFile: Story = {
    name: "File: path og file",
    loaders: [
        async () => {
            const blob = await (await fetch(cow.default)).blob();
            return {
                ku: new window.File([blob], "ku.jpg", { type: "image/jpeg" }),
            };
        },
    ],
    render: (_, { loaded: { ku } }) => (
        <Sammenligning>
            <Eksempel kode="uten path og file">
                <File
                    fileName="kvittering.jpg"
                    fileType="image/jpeg"
                    fileSize={3_490_000}
                />
            </Eksempel>
            <Eksempel kode='path="/kvittering.jpg"'>
                <File
                    fileName="kvittering.jpg"
                    fileType="image/jpeg"
                    fileSize={3_490_000}
                    path={cow.default}
                />
            </Eksempel>
            <Eksempel kode="file={file}">
                <File
                    fileName={ku.name}
                    fileType={ku.type}
                    fileSize={ku.size}
                    file={ku}
                />
            </Eksempel>
        </Sammenligning>
    ),
};

export const FileStateOgUploadProgress: Story = {
    name: "File: state og uploadProgress",
    render: () => (
        <Sammenligning>
            <Eksempel kode="state={undefined}">
                <FilVisning fil={bilde("kvittering.jpg")} />
            </Eksempel>
            <Eksempel kode='state="loading"'>
                <FilVisning
                    fil={bilde("kvittering.jpg", { state: "loading" })}
                />
            </Eksempel>
            {[0, 35, 90].map((uploadProgress) => (
                <Eksempel
                    key={uploadProgress}
                    kode={`state="loading" uploadProgress={${uploadProgress}}`}
                >
                    <FilVisning
                        fil={bilde("kvittering.jpg", {
                            state: "loading",
                            uploadProgress,
                        })}
                    />
                </Eksempel>
            ))}
            <Eksempel kode='state="error"'>
                <FilVisning fil={bilde("kvittering.jpg", { state: "error" })} />
            </Eksempel>
        </Sammenligning>
    ),
};

/** `errorLabel` vises bare når `state="error"`. */
export const FileErrorLabel: Story = {
    name: "File: errorLabel",
    render: () => (
        <Sammenligning>
            <Eksempel kode='state="error" (errorLabel="Feil" er standard)'>
                <FilVisning fil={bilde("kvittering.jpg", { state: "error" })} />
            </Eksempel>
            <Eksempel kode='state="error" errorLabel="…"'>
                <FilVisning
                    fil={bilde("kvittering.jpg", {
                        state: "error",
                        errorLabel:
                            "Filen er 12 MB, men kan maksimalt være 8 MB",
                    })}
                />
            </Eksempel>
            <Eksempel kode='errorLabel="…" uten state="error"'>
                <FilVisning
                    fil={bilde("kvittering.jpg", { errorLabel: "Vises ikke" })}
                />
            </Eksempel>
        </Sammenligning>
    ),
};

/** Inne i FileInput styres `variant` av `fileVariant`, men kan overstyres per fil. */
export const FileVariantOgHideThumbnail: Story = {
    name: "File: variant og hideThumbnail",
    render: () => (
        <Sammenligning>
            {(["list", "card"] as const).flatMap((variant) =>
                [false, true].map((hideThumbnail) => (
                    <Eksempel
                        key={`${variant}-${hideThumbnail}`}
                        kode={`variant="${variant}"${hideThumbnail ? " hideThumbnail" : ""}`}
                    >
                        <div
                            style={{
                                maxWidth:
                                    variant === "card" ? "12rem" : undefined,
                            }}
                        >
                            <FilVisning
                                fil={bilde("kvittering.jpg", { hideThumbnail })}
                                variant={variant}
                                onRemove={() => {}}
                            />
                        </div>
                    </Eksempel>
                )),
            )}
        </Sammenligning>
    ),
};

/** Uten `onRemove` vises ingen fjern-knapp, f.eks. mens filen lastes opp. */
export const FileOnRemove: Story = {
    name: "File: onRemove",
    render: () => (
        <Sammenligning>
            <Eksempel kode="uten onRemove">
                <FilVisning fil={bilde("kvittering.jpg")} />
            </Eksempel>
            <Eksempel kode="onRemove={() => …}">
                <FilVisning fil={bilde("kvittering.jpg")} onRemove={() => {}} />
            </Eksempel>
        </Sammenligning>
    ),
};

export const FileTrackingProps: Story = {
    name: "File: trackingProps",
    render: () => (
        <Attributter selector=".jkl-file">
            <FilVisning
                fil={bilde("kvittering.jpg")}
                trackingProps={{ id: "kvittering", extra: { steg: "3" } }}
            />
        </Attributter>
    ),
};
