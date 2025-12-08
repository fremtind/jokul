import { type FC, useState } from "react";
import type {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { formatBytes } from "../../../utilities/formatters/bytes/formatBytes.js";
import { PrimaryButton } from "../../button/Button.js";
import { File } from "../../file/index.js";
import type { FileProps } from "../../file/types.js";
import { FileInput } from "../FileInput.js";
import type { UploadedFile } from "../types.js";

export const fileInputExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "Laster opp",
        "Med valideringsfeil",
        "Med feil",
        "Lastet opp",
        "Filer med path",
    ],
    choiceProps: [
        {
            name: "Variant",
            values: ["flexible", "small"],
            defaultValue: 0,
        },
    ],
};

export const FileInputExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const [files, setFiles] = useState<UploadedFile[]>([]);

    const maxSizeBytes = 8_000_000;

    return (
        <div>
            <FileInput
                id="file-input-example"
                legend="Vedlegg"
                labelProps={{ variant: "medium" }}
                className="jkl-spacing-16-24--bottom"
                accept="image/*,.pdf"
                maxSizeBytes={maxSizeBytes}
                value={files}
                variant={choiceValues?.["Variant"] as "flexible" | "small"}
                onChange={(e, newFiles) => {
                    setFiles((currentFiles) => [...currentFiles, ...newFiles]);
                }}
            >
                {files.map(({ state, file, validation }, index) => {
                    let label: string | undefined = undefined;
                    let demoState: FileProps["state"] = undefined;

                    const isUploading =
                        Boolean(boolValues?.["Laster opp"]) ||
                        state === "loading";

                    if (
                        Boolean(boolValues?.["Med valideringsfeil"]) ||
                        validation?.type === "WRONG_TYPE"
                    ) {
                        label = `Filtypen ${
                            file.name?.split(".")[1] || ""
                        } støttes ikke`;
                    } else if (Boolean(boolValues?.["Lastet opp"]) || !state) {
                        label = "Lastet opp";
                        !demoState;
                    } else if (
                        Boolean(boolValues?.["Med feil"]) ||
                        state === "error"
                    ) {
                        label = "Filen lot seg ikke laste opp";
                        demoState = "error";
                    } else if (validation?.type === "TOO_LARGE") {
                        label = `Filen er større enn ${formatBytes(
                            maxSizeBytes,
                        )} og kan ikke lastes opp`;
                    } else if (isUploading) {
                        label = "Laster opp…";
                        demoState = "loading";
                    }

                    return (
                        <File
                            key={`${file.name}-${index}`}
                            fileName={file.name}
                            fileType={file.type}
                            fileSize={file.size}
                            path={
                                boolValues?.["Filer med path"]
                                    ? `/path/fil-${index}`
                                    : undefined
                            }
                            file={file}
                            state={demoState}
                            errorLabel={label}
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
                            !fileState.state &&
                            typeof fileState.validation === "undefined",
                    );

                    const promises = toUpload.map(
                        (fileToUpload) =>
                            new Promise<void>((resolve) => {
                                const timeout = 2000;
                                setTimeout(() => {
                                    setFiles((currentFiles) =>
                                        currentFiles.map((file) =>
                                            file.file.name ===
                                            fileToUpload.file.name
                                                ? {
                                                      ...file,
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
                                  state: "loading" as FileProps["state"],
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
};

export default FileInputExample;

export const fileInputExampleCode: CodeExample = ({
    boolValues,
    choiceValues,
}) => `
// import { File, FileInput, type FileInputFile, upload } from "@fremtind/jkl-file-input-react";
// import type { SupportLabelType } from "@fremtind/jkl-input-group-react";

const [files, setFiles] = useState<FileInputFile[]>([]);
const maxSizeBytes = 8_000_000;

return (
    <div>
        <FileInput
            legend="Vedlegg"
            labelProps={{ variant: "medium" }}
            className="jkl-spacing-16-24--bottom"
            accept="image/*,.pdf"
            maxSizeBytes={maxSizeBytes}
            value={files}
            variant={${choiceValues?.["Variant"]}}
            onChange={(e, newFiles) => {
                setFiles((currentFiles) => [...currentFiles, ...newFiles]);
            }}
        >
            {files.map(({ state, file, validation, uploadProgress }, index) => {
                let label: string | undefined = undefined;
                let labelType: SupportLabelType | undefined = undefined;

                if (validation?.type === "WRONG_TYPE") {
                    labelType = "warning";
                    label = \`Filtypen \${file.name?.split(".")[1] || ""} støttes ikke\`;
                } else if (state === "UPLOAD_SUCCESS") {
                    labelType = "success";
                    label = "Lastet opp";
                } else if (state === "UPLOAD_ERROR") {
                    labelType = "error";
                    label = "Filen lot seg ikke laste opp";
                } else if (validation?.type === "TOO_LARGE") {
                    labelType = "error";
                    label = \`Filen er større enn \${formatBytes(maxSizeBytes)} og kan ikke lastes opp\`;
                } else if (state === "UPLOADING") {
                    label = "Laster opp…";
                }

                return (
                    <File
                        key={file.name}
                        fileName={file.name}
                        fileType={file.type}
                        fileSize={file.size}
                        file={file}
                        path={boolValues?.["Filer med path"] ? "/path/file.ext" : undefined
                        state={state}
                        supportLabel={label}
                        supportLabelType={labelType}
                        onRemove={
                            ["UPLOAD_ERROR", "SELECTED"].includes(state)
                                ? () => {
                                    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
                                }
                                : undefined
                        }
                    >
                        {state === "UPLOADING" && <ProgressBar aria-valuenow={uploadProgress} />}
                    </File>
                );
            })}
        </FileInput>
        <PrimaryButton
            className="jkl-spacing-16--top"
            type="button"
            onClick={async () => {
                const promises = files
                    .filter((fileState) =>
                        typeof fileState.validation === "undefined" && fileState.state === "SELECTED",
                    )
                    .map(async (fileState, i) =>
                        setFiles((state) => [
                            ...state.slice(0, i),
                            { ...state[i], state: "UPLOADING" },
                            ...state.slice(i + 1),
                        ]);

                        const data = new FormData();
                        data.append("file", fileState.file, fileState.file.name);

                        try {
                            await upload(
                                "http://localhost:3000/api/upload",
                                data,
                                (uploadProgress) => {
                                    setFiles((state) => [
                                        ...state.slice(0, i),
                                        {
                                            ...state[i],
                                            uploadProgress,
                                        },
                                        ...state.slice(i + 1),
                                    ]);
                                }
                            );

                            setFiles((state) => [
                                ...state.slice(0, i),
                                { ...state[i], state: "UPLOAD_SUCCESS" },
                                ...state.slice(i + 1),
                            ]);
                        } catch (e) {
                            setFiles((state) => [
                                ...state.slice(0, i),
                                { ...state[i], state: "UPLOAD_ERROR" },
                                ...state.slice(i + 1),
                            ]);
                        }
                    );

                await Promise.all(promises);
            }}
        >
            Last opp
        </PrimaryButton>
    </div>
);
`;
