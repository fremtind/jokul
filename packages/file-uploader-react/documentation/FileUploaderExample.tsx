import React, { FC, useEffect, useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import {
    FileUploaderInput,
    FileUploadState,
    FileUploaderPreview,
    FileUploaderPreviewList,
    FileUploaderPreviewListItem,
    FileUploader,
} from "../src";
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
            <FileUploader>
                <FileUploaderInput
                    accept="image/*,.pdf"
                    onChange={(e, newFiles) => {
                        setFileStates((currentFiles) => [...currentFiles, ...newFiles]);
                    }}
                    maxSizeBytes={8_000_000}
                />
                <FileUploaderPreviewList>
                    {fileStates.map((fileState, index) => (
                        <FileUploaderPreviewListItem key={fileState.file.name}>
                            <FileUploaderPreview
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
                                    setFileStates([...fileStates.slice(0, index), ...fileStates.slice(index + 1)]);
                                }}
                            />
                        </FileUploaderPreviewListItem>
                    ))}
                </FileUploaderPreviewList>
            </FileUploader>
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
<FileUploader>
    <FileUploaderInput
        accept="image/*,.pdf"
        onChange={(e, newFiles) => {
            setFileStates((currentFiles) => [...currentFiles, ...newFiles]);
        }}
        maxSizeBytes={8_000_000}
    />
    <FileUploaderPreviewList>
        {fileStates.map((fileState, index) => (
            <FileUploaderPreviewListItem key={fileState.file.name}>
                <FileUploaderPreview
                    fileName={fileState.file.name}
                    fileType={fileState.file.type}
                    fileSize={fileState.file.size}
                    file={fileState.file}
                    isUploading={fileState.isUploading}
                    errorLabel={fileState.validation?.message}
                    onRemove={(e) => {
                        setFileStates([...fileStates.slice(0, index), ...fileStates.slice(index + 1)]);
                    }}
                />
            </FileUploaderPreviewListItem>
        ))}
    </FileUploaderPreviewList>
</FileUploader>
<PrimaryButton
    className="jkl-spacing-16--top"
    type="button"
    onClick={async () => {
        const promises = fileStates
            .filter(
                (fileState) => typeof fileState.validation === "undefined"
            )
            .map((fileState, i) => {
                const data = new FormData();

                data.append("file", fileState.file, fileState.file.name);

                return fetch("/api/upload", {
                    method: "POST",
                    body: data,
                }).then((response) => {
                    setFileStates((currentState) => {
                        return [
                            ...currentState.slice(0, i),
                            { ...currentState[i], uploading: false },
                            ...currentState.slice(i + 1),
                        ];
                    });
                });
            });

        setFileStates((fs) => fs.map((f) => ({ ...f, uploading: true })));

        await Promise.all(promises);
    }}
>
    Last opp
</PrimaryButton>
`;
