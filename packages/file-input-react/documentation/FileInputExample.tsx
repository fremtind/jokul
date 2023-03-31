import React, { FC, useEffect, useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { File, FileInput, FileState } from "../src";
import iconBytes from "./iconBytes";

export const fileInputExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Laster opp", "Med feil"],
};

export const FileInputExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const [files, setFiles] = useState<FileState[]>([]);

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
                isUploading: false,
            },
        ]);
    }, [hasMounted, setFiles]);

    return (
        <div>
            <FileInput
                className="jkl-spacing-16-24--bottom"
                accept="image/*,.pdf"
                maxSizeBytes={8_000_000}
                value={files}
                onChange={(e, newFiles) => {
                    setFiles((currentFiles) => [...currentFiles, ...newFiles]);
                }}
            >
                {files.map((fileState, index) => (
                    <File
                        key={fileState.file.name}
                        fileName={fileState.file.name}
                        fileType={fileState.file.type}
                        fileSize={fileState.file.size}
                        file={fileState.file}
                        isUploading={fileState.isUploading || Boolean(boolValues?.["Laster opp"])}
                        errorLabel={
                            fileState.validation?.message || Boolean(boolValues?.["Med feil"])
                                ? `Filtypen ${fileState.file.name?.split(".")[1] || ""} støttes ikke`
                                : undefined
                        }
                        onRemove={(e) => {
                            setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
                        }}
                    />
                ))}
            </FileInput>
            <PrimaryButton
                className="jkl-spacing-16--top"
                type="button"
                onClick={async () => {
                    // Vis isUploading-tilstand i en tilfeldig varighet. Kun for demoen, naturligvis.
                    const promises = files
                        .filter((fileState) => typeof fileState.validation === "undefined")
                        .map(
                            (fileState, i) =>
                                new Promise<void>((resolve) => {
                                    const timeout = Math.random() * 5_000;
                                    setTimeout(() => {
                                        setFiles((currentState) => {
                                            return [
                                                ...currentState.slice(0, i),
                                                { ...currentState[i], isUploading: false },
                                                ...currentState.slice(i + 1),
                                            ];
                                        });
                                        resolve();
                                    }, timeout);
                                }),
                        );

                    setFiles((fs) => fs.map((f) => ({ ...f, isUploading: true })));

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
const [files, setFiles] = useState<FileState[]>([]);
return (
    <FileInput
        className="jkl-spacing-16-24--bottom"
        accept="image/*,.pdf"
        maxSizeBytes={8_000_000}
        value={files}
        onChange={(e, newFiles) => {
            setFiles((currentFiles) => [...currentFiles, ...newFiles]);
        }}
    >
        {files.map((fileState, index) => (
            <File
                key={fileState.file.name}
                fileName={fileState.file.name}
                fileType={fileState.file.type}
                fileSize={fileState.file.size}
                file={fileState.file}
                isUploading={fileState.isUploading || Boolean(boolValues?.["Laster opp"])}${
                    Boolean(boolValues?.["Med feil"])
                        ? `
                suppoert={\`Filtypen \${fileState.file.name?.split(".")[1] || ""} støttes ikke\`}`
                        : ""
                }
                onRemove={(e) => {
                    setFiles([...files.slice(0, index), ...files.slice(index + 1)]);
                }}
            />
        ))}
    </FileInput>
)
`;
