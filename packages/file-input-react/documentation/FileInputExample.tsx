import React, { FC, useEffect, useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { formatBytes } from "../../formatters-util/src";
import { ProgressBar } from "../../progress-bar-react/src";
import { File, FileInput, FileInputFile, FileInputFileState } from "../src";
import iconBytes from "./iconBytes";

export const fileInputExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Laster opp", "Med valideringsfeil", "Med feil", "Lastet opp"],
};

const FakeProgressBar: FC = () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setProgress((p) => (p < 100 ? p + 1 : p));
        }, 20);
    }, [progress, setProgress]);

    return <ProgressBar aria-valuenow={progress} />;
};

export const FileInputExample: FC<ExampleComponentProps> = ({ boolValues }) => {
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
            },
        ]);
    }, [hasMounted, setFiles]);

    const maxSizeBytes = 8_000_000;

    return (
        <div>
            <FileInput
                className="jkl-spacing-16-24--bottom"
                accept="image/*,.pdf"
                maxSizeBytes={maxSizeBytes}
                value={files}
                onChange={(e, newFiles) => {
                    setFiles((currentFiles) => [...currentFiles, ...newFiles]);
                }}
            >
                {files.map(({ state, file, validation }, index) => {
                    let label: string | undefined = undefined;
                    let labelType: "warning" | "error" | "help" | "success" | undefined = undefined;
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
                            onRemove={(e) => {
                                setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
                            }}
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

export const fileInputExampleCode: CodeExample = ({ boolValues }) => `
// import { File, FileInput, type FileInputFile } from "@fremtind/jkl-file-input-react";

const [files, setFiles] = useState<FileInputFile[]>([]);
const maxSizeBytes = 8_000_000;

return (
    <div>
        <FileInput
            className="jkl-spacing-16-24--bottom"
            accept="image/*,.pdf"
            maxSizeBytes={maxSizeBytes}
            value={files}
            onChange={(e, newFiles) => {
                setFiles((currentFiles) => [...currentFiles, ...newFiles]);
            }}
        >
            {files.map(({ state, file, validation }, index) => {
                let label: string | undefined = undefined;
                let labelType: "warning" | "error" | "help" | "success" | undefined = undefined;

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
                        onRemove={(e) => {
                            setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
                        }}
                    >
                        {state === "UPLOADING" && <ProgressBar aria-valuenow={50} />}
                        {/* Bruk Loader om du ikke får kalkulert fremdrift: <Loader variant="small" textDescription="Vennligst vent" /> */}
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
                    .map((fileState, i) =>
                        new Promise<void>((resolve) => {
                            // Vis tilstand i en tilfeldig varighet. Kun for demoen, naturligvis.
                            const timeout = Math.random() * 5_000;
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

                setFiles((fs) => fs.map((f) => ({ ...f, state: "UPLOADING" })));

                await Promise.all(promises);
            }}
        >
            Last opp
        </PrimaryButton>
    </div>
);
`;
