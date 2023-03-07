import React, { FC, useEffect, useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { FileUploaderInput, FileUploadState, FileUploaderPreview } from "../src";
import iconBytes from "./iconBytes";

export const fileUploaderExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Laster opp", "Med feil"],
};

export const FileUploaderExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const [fileStates, setFileStates] = useState<FileUploadState[]>([]);

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted) {
            return;
        }
        // File er ikke tilgjengelig server-side
        setFileStates([
            {
                file: new File(iconBytes, "icon.png", {
                    type: "image/png",
                }),
                isUploading: false,
            },
        ]);
    }, [hasMounted, setFileStates]);

    return (
        <div>
            <div>
                <FileUploaderInput
                    accept="image/*,.pdf"
                    onChange={(e, newFiles) => {
                        setFileStates((currentFiles) => [...currentFiles, ...newFiles]);
                    }}
                    maxSizeBytes={8_000_000}
                />
                <div>
                    {fileStates.map((fileState, index) => (
                        <FileUploaderPreview
                            key={fileState.file.name}
                            file={fileState.file}
                            isUploading={fileState.isUploading || Boolean(boolValues?.["Laster opp"])}
                            errorLabel={
                                fileState.validation?.message || Boolean(boolValues?.["Med feil"])
                                    ? `Filtypen ${fileState.file.name?.split(".")[1] || ""} støttes ikke`
                                    : undefined
                            }
                            onRemove={(e) => {
                                setFileStates([...fileStates.slice(0, index), ...fileStates.slice(index + 1)]);
                            }}
                        />
                    ))}
                </div>
            </div>
            <PrimaryButton
                className="jkl-spacing-16--top"
                type="button"
                onClick={async () => {
                    // Vis isUploading-tilstand i en tilfeldig varighet. Kun for demoen, naturligvis.
                    const promises = fileStates
                        .filter((fileState) => typeof fileState.validation === "undefined")
                        .map(
                            (fileState, i) =>
                                new Promise<void>((resolve) => {
                                    const timeout = Math.random() * 5_000;
                                    setTimeout(() => {
                                        setFileStates((currentState) => {
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

                    setFileStates((fs) => fs.map((f) => ({ ...f, isUploading: true })));

                    await Promise.all(promises);
                }}
            >
                Last opp
            </PrimaryButton>
        </div>
    );
};

export default FileUploaderExample;

export const fileUploaderExampleCode: CodeExample = () => `
<FileUploader>Edit me!</FileUploader>
`;
