import React, { FC, useEffect, useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { formatBytes } from "../../formatters-util/src";
import type { SupportLabelType } from "../../input-group-react/src";
import { ProgressBar } from "../../progress-bar-react/src";
import { File, FileInput, FileInputFile, FileInputFileState } from "../src";
import iconBytes from "./iconBytes";

export const fileInputExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Laster opp", "Med valideringsfeil", "Med feil", "Lastet opp"],
    choiceProps: [
        {
            name: "Variant",
            values: ["flexible", "small"],
            defaultValue: 0,
        },
    ],
};

const FakeProgressBar: FC = () => {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setProgress((p) => (p < 100 ? p + 1 : p));
        }, 20);
    }, [progress, setProgress]);

    const isTestMode = hasMounted && window.location.search === "?mode=e2e" ? "e2e" : undefined;

    return <ProgressBar aria-valuenow={isTestMode ? 50 : progress} />;
};

export const FileInputExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [files, setFiles] = useState<FileInputFile[]>([]);

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted) {
            return;
        }
        // File er ikke tilgjengelig server-side
        setFiles([
            {
                file: new window.File(iconBytes, "symbol_round_black.png", {
                    type: "image/png",
                }),
                state: "SELECTED",
                uploadProgress: 0,
            },
        ]);
    }, [hasMounted, setFiles]);

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
                variant={choiceValues?.["Variant"] as "flexible" | "small"}
                onChange={(e, newFiles) => {
                    setFiles((currentFiles) => [...currentFiles, ...newFiles]);
                }}
            >
                {files.map(({ state, file, validation }, index) => {
                    let label: string | undefined = undefined;
                    let labelType: SupportLabelType | undefined = undefined;
                    let demoState: FileInputFileState = state;

                    const isUploading = Boolean(boolValues?.["Laster opp"]) || state === "UPLOADING";

                    if (Boolean(boolValues?.["Med valideringsfeil"]) || validation?.type === "WRONG_TYPE") {
                        labelType = "warning";
                        label = `Filtypen ${file.name?.split(".")[1] || ""} støttes ikke`;
                    } else if (Boolean(boolValues?.["Lastet opp"]) || state === "UPLOAD_SUCCESS") {
                        labelType = "success";
                        label = "Lastet opp";
                        demoState = "UPLOAD_SUCCESS";
                    } else if (Boolean(boolValues?.["Med feil"]) || state === "UPLOAD_ERROR") {
                        labelType = "error";
                        label = "Filen lot seg ikke laste opp";
                        demoState = "UPLOAD_ERROR";
                    } else if (validation?.type === "TOO_LARGE") {
                        labelType = "error";
                        label = `Filen er større enn ${formatBytes(maxSizeBytes)} og kan ikke lastes opp`;
                    } else if (isUploading) {
                        label = "Laster opp…";
                        demoState = "UPLOADING";
                    }

                    return (
                        <File
                            key={file.name}
                            fileName={file.name}
                            fileType={file.type}
                            fileSize={file.size}
                            file={file}
                            state={demoState}
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
                            {isUploading && <FakeProgressBar />}
                        </File>
                    );
                })}
            </FileInput>
            <PrimaryButton
                className="jkl-spacing-16--top"
                type="button"
                onClick={async () => {
                    const toUpload = files.filter(
                        (fileState) => fileState.state === "SELECTED" && typeof fileState.validation === "undefined",
                    );

                    const promises = toUpload.map(
                        (fileState, i) =>
                            new Promise<void>((resolve) => {
                                const timeout = 2_000;
                                setTimeout(() => {
                                    setFiles((currentState) => {
                                        return [
                                            ...currentState.slice(0, i),
                                            { ...currentState[i], state: "UPLOAD_SUCCESS" },
                                            ...currentState.slice(i + 1),
                                        ];
                                    });
                                    resolve();
                                }, timeout);
                            }),
                    );

                    const newFiles = files.map((file) =>
                        toUpload.includes(file) ? { ...file, state: "UPLOADING" as FileInputFileState } : file,
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

export const fileInputExampleCode: CodeExample = ({ boolValues, choiceValues }) => `
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

                const isUploading = ;

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
