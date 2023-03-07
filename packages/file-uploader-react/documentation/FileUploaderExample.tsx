import React, { FC, useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react/src";
import { FileUploaderInput, FileUploadState, FileUploaderPreview } from "../src";

export const fileUploaderExampleKnobs: ExampleKnobsProps = {};

export const FileUploaderExample: FC<ExampleComponentProps> = () => {
    const [fileStates, setFileStates] = useState<FileUploadState[]>([]);

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
                            isUploading={fileState.isUploading}
                            errorLabel={fileState.validation?.message}
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
                    const promises = fileStates
                        .filter((fileState) => typeof fileState.validation != "undefined")
                        .map((fileState, i) => {
                            const data = new FormData();
                            data.append("file", fileState.file, fileState.file.name);

                            return fetch("http://localhost:2345/upload", {
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
        </div>
    );
};

export default FileUploaderExample;

export const fileUploaderExampleCode: CodeExample = () => `
<FileUploader>Edit me!</FileUploader>
`;
