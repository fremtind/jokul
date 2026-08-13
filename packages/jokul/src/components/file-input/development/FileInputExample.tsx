import React, { type FC, useState } from "react";
import type {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { PrimaryButton } from "../../button/Button.js";
import { File } from "../../file/index.js";
import type { FileProps } from "../../file/types.js";
import { FileInput } from "../FileInput.js";

type ExampleFile = {
    file: globalThis.File;
    state?: FileProps["state"];
};

export const fileInputExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Laster opp", "Med feil", "Filer med path"],
};

export const FileInputExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const [files, setFiles] = useState<ExampleFile[]>([]);

    const isUploading = Boolean(boolValues?.["Laster opp"]);
    const hasError = Boolean(boolValues?.["Med feil"]);

    return (
        <div>
            <FileInput
                id="file-input-example"
                label="Last opp dokumenter"
                description="Tillatte formater: JPG, PNG og PDF"
                buttonText="Velg filer"
                className="jkl-spacing-16-24--bottom"
                accept="image/*,.pdf"
                multiple
                errorLabel={
                    hasError ? "Det oppstod en feil ved valg av fil" : undefined
                }
                onChange={(event) => {
                    const selectedFiles = Array.from(
                        event.currentTarget.files ?? [],
                    );

                    setFiles((currentFiles) => [
                        ...currentFiles,
                        ...selectedFiles.map((file) => ({
                            file,
                        })),
                    ]);
                }}
            />

            {files.length > 0 && (
                <ul className="jkl-file-input-example__files">
                    {files.map(({ file, state }, index) => (
                        <li key={`${file.name}-${file.lastModified}`}>
                            <File
                                fileName={file.name}
                                fileType={file.type}
                                fileSize={file.size}
                                path={
                                    boolValues?.["Filer med path"]
                                        ? `/path/fil-${index}`
                                        : undefined
                                }
                                file={file}
                                state={isUploading ? "loading" : state}
                                onRemove={
                                    isUploading
                                        ? undefined
                                        : () => {
                                              setFiles((currentFiles) =>
                                                  currentFiles.filter(
                                                      (currentFile) =>
                                                          currentFile.file !==
                                                          file,
                                                  ),
                                              );
                                          }
                                }
                            />
                        </li>
                    ))}
                </ul>
            )}

            <PrimaryButton
                className="jkl-spacing-16--top"
                type="button"
                disabled={files.length === 0}
                onClick={() => {
                    setFiles((currentFiles) =>
                        currentFiles.map((entry) => ({
                            ...entry,
                            state: "loading",
                        })),
                    );

                    setTimeout(() => {
                        setFiles((currentFiles) =>
                            currentFiles.map((entry) => ({
                                ...entry,
                                state: undefined,
                            })),
                        );
                    }, 2000);
                }}
            >
                Last opp
            </PrimaryButton>
        </div>
    );
};

export default FileInputExample;

export const fileInputExampleCode: CodeExample = () => `
const [files, setFiles] = useState<File[]>([]);

return (
    <div>
        <FileInput
            label="Last opp dokumenter"
            description="Tillatte formater: JPG, PNG og PDF"
            buttonText="Velg filer"
            accept="image/*,.pdf"
            multiple
            onChange={(event) => {
                const selectedFiles = Array.from(
                    event.currentTarget.files ?? [],
                );

                setFiles((currentFiles) => [
                    ...currentFiles,
                    ...selectedFiles,
                ]);
            }}
        />

        {files.length > 0 && (
            <ul>
                {files.map((file) => (
                    <li key={\`\${file.name}-\${file.lastModified}\`}>
                        <File
                            file={file}
                            fileName={file.name}
                            fileType={file.type}
                            fileSize={file.size}
                        />
                    </li>
                ))}
            </ul>
        )}
    </div>
);
`;
