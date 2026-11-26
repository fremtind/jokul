import React, { type ReactNode, useEffect, useRef, useState } from "react";
import * as cow from "../../../../stories/assets/cow.jpg";
import { File } from "../../file/File.js";
import type { FileProps } from "../../file/types.js";
import { Flex } from "../../flex/index.js";
import { Text } from "../../typography/index.js";
import { FileInput } from "../FileInput.js";
import type { FileInputProps, UploadedFile } from "../types.js";

// Mock-filer har ikke ekte innhold, så de vises med kua. Faktiske opplastinger vises som de er.
const mockFiles = new WeakSet<globalThis.File>();

export const createUploadedFile = (
    name: string,
    type = "image/png",
    state?: UploadedFile["state"],
): UploadedFile => {
    const file = new window.File(["x".repeat(3_490_000)], name, { type });
    mockFiles.add(file);
    return { file, state, uploadProgress: 0 };
};

export const createUploadedFiles = (names: string[]): UploadedFile[] =>
    names.map((name) =>
        createUploadedFile(
            name,
            name.endsWith(".pdf") ? "application/pdf" : "image/png",
        ),
    );

/** Mock-filer vises med kua via `path`, ekte filer med sitt eget innhold via `file` */
export const getPreviewProps = (file: globalThis.File) =>
    mockFiles.has(file)
        ? {
              path: file.type.startsWith("image/") ? cow.default : undefined,
          }
        : { file };

export const renderFiles = (
    files: UploadedFile[],
    onRemove: (index: number) => void,
    variant?: FileProps["variant"],
) =>
    files.map(({ file, state }, index) => (
        <File
            key={`${file.name}-${index}`}
            fileName={file.name}
            fileType={file.type}
            fileSize={file.size}
            {...getPreviewProps(file)}
            state={state}
            variant={variant}
            onRemove={state !== "loading" ? () => onRemove(index) : undefined}
        />
    ));

/** En fil slik den vises i eksemplene. Uten `file` brukes kua som forhåndsvisning for bilder. */
export type Fil = Pick<
    FileProps,
    "state" | "uploadProgress" | "errorLabel" | "hideThumbnail" | "file"
> & {
    navn: string;
    type?: string;
    størrelse?: number;
};

export const bilde = (navn: string, fil?: Omit<Fil, "navn">): Fil => ({
    navn,
    type: "image/jpeg",
    ...fil,
});

export const pdf = (navn: string, fil?: Omit<Fil, "navn">): Fil => ({
    navn,
    type: "application/pdf",
    størrelse: 427_000,
    ...fil,
});

export const eksempelfiler = {
    valgt: [
        bilde("kvittering.jpg"),
        pdf("faktura.pdf"),
        bilde(
            "skjermbilde-av-skaden-pa-bilen-tatt-rett-etter-uhellet-2026-11-25.jpg",
        ),
        bilde("uten-miniatyrbilde.jpg", { hideThumbnail: true }),
    ],
    lasterOpp: [
        bilde("starter.jpg", { state: "loading" }),
        bilde("fremdrift-35.jpg", { state: "loading", uploadProgress: 35 }),
        pdf("fremdrift-90.pdf", { state: "loading", uploadProgress: 90 }),
    ],
    feil: [
        bilde("for-stor.jpg", {
            state: "error",
            størrelse: 12_000_000,
            errorLabel: "Filen er 12 MB, men kan maksimalt være 8 MB",
        }),
        {
            navn: "regneark.xlsx",
            type: "application/vnd.ms-excel",
            størrelse: 24_000,
            state: "error",
            errorLabel: "Filtypen .xlsx støttes ikke",
        },
        pdf("opplasting-feilet.pdf", {
            state: "error",
            errorLabel: "Opplastingen feilet. Fjern filen og prøv igjen.",
        }),
        bilde("standard-feilmelding.jpg", { state: "error" }),
    ],
} satisfies Record<string, Fil[]>;

const tilUploadedFile = ({ navn, type = "", state, file }: Fil) => ({
    file: file ?? new window.File([], navn, { type }),
    state,
    uploadProgress: 0,
});

const fraUploadedFile = ({ file, state, validation }: UploadedFile): Fil => ({
    navn: file.name,
    type: file.type,
    størrelse: file.size,
    file,
    state: validation ? "error" : state,
    errorLabel: validation?.message,
});

export const FilVisning = ({
    fil,
    ...props
}: { fil: Fil } & Partial<FileProps>) => (
    <File
        fileName={fil.navn}
        fileType={fil.type ?? ""}
        fileSize={fil.størrelse ?? 3_490_000}
        path={
            !fil.file && fil.type?.startsWith("image/")
                ? cow.default
                : undefined
        }
        file={fil.file}
        state={fil.state}
        uploadProgress={fil.uploadProgress}
        errorLabel={fil.errorLabel}
        hideThumbnail={fil.hideThumbnail}
        {...props}
    />
);

export type EksempelFileInputProps = Omit<
    FileInputProps,
    "value" | "onChange"
> & {
    filer?: Fil[];
    onChange?: FileInputProps["onChange"];
};

/** FileInput med state. Nye filer valideres og vises med feil, og alle filer kan fjernes. */
export const EksempelFileInput = ({
    filer: startfiler = [],
    onChange,
    ...props
}: EksempelFileInputProps) => {
    const [filer, setFiler] = useState(startfiler);

    return (
        <FileInput
            {...props}
            value={filer.map(tilUploadedFile)}
            onChange={(e, nyeFiler) => {
                onChange?.(e, nyeFiler);
                const nye = nyeFiler.map(fraUploadedFile);
                setFiler((current) =>
                    props.multiple === false ? nye : [...current, ...nye],
                );
            }}
        >
            {filer.map((fil, index) => (
                <FilVisning
                    key={`${fil.navn}-${index}`}
                    fil={fil}
                    onRemove={
                        fil.state === "loading"
                            ? undefined
                            : () =>
                                  setFiler((current) =>
                                      current.filter((f) => f !== fil),
                                  )
                    }
                />
            ))}
        </FileInput>
    );
};

/** Rutenett der hvert eksempel har koden som gir det som overskrift */
export const Sammenligning = ({ children }: { children: ReactNode }) => (
    <div
        style={{
            display: "grid",
            gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))",
            gap: "var(--jkl-unit-50) var(--jkl-unit-40)",
            alignItems: "start",
        }}
    >
        {children}
    </div>
);

export const Eksempel = ({
    kode,
    children,
}: {
    kode: string;
    children: ReactNode;
}) => (
    <Flex direction="column" gap="12">
        <Text size="s" subdued>
            <code>{kode}</code>
        </Text>
        {children}
    </Flex>
);

/** Viser id, class og data-attributtene på elementene som matcher `selector` */
export const Attributter = ({
    selector,
    children,
}: {
    selector: string;
    children: ReactNode;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [html, setHtml] = useState("");

    useEffect(() => {
        const elementer = [...(ref.current?.querySelectorAll(selector) ?? [])];
        setHtml(
            elementer
                .map((el) => {
                    const attributter = [...el.attributes]
                        .filter((a) => /^(id|class|data-)/.test(a.name))
                        .map((a) => `  ${a.name}="${a.value}"`);
                    return `<${el.tagName.toLowerCase()}\n${attributter.join("\n")}\n>`;
                })
                .join("\n\n"),
        );
    }, [selector]);

    return (
        <Flex direction="column" gap="16">
            <div ref={ref}>{children}</div>
            <pre style={{ fontSize: "0.8rem", whiteSpace: "pre-wrap" }}>
                {html}
            </pre>
        </Flex>
    );
};
