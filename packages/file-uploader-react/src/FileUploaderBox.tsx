import { useId } from "@fremtind/jkl-react-hooks";
import React, { useState } from "react";

export interface FileUploadValidation {
    type: "TO_BIG" | "WRONG_FILE";
    message: string;
}

export interface FileUploadState {
    file: File;
    validation?: FileUploadValidation;
    uploading: boolean;
}

interface Props {
    onChange: (
        e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
        files: FileUploadState[],
    ) => void;
    maxSizeBytes?: number;
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
}

export function FileUploaderBox({ onChange, maxSizeBytes, accept = "" }: Props) {
    const id = useId("jkl-file-uploader-box");

    const [onDragClassName, setOnDragClassName] = useState<string>("");

    return (
        <div
            className={`jkl-file-uploader-box ${onDragClassName}`}
            onDragEnter={(e) => {
                setOnDragClassName("jkl-file-uploader-box--enter");
                e.preventDefault();
            }}
            onDragOver={(e) => {
                /* Prevent browser from opening file in a new tab */
                setOnDragClassName("jkl-file-uploader-box--enter");
                e.preventDefault();
            }}
            onDrop={(e) => {
                e.preventDefault();
                setOnDragClassName("");

                if (e.dataTransfer.files) {
                    onChange(
                        e,
                        [...e.dataTransfer.files].map<FileUploadState>((file) => ({
                            file,
                            uploading: false,
                            validation: validateFile(file, accept, maxSizeBytes),
                        })),
                    );
                }
            }}
            onDragLeave={(e) => {
                setOnDragClassName("");
                e.preventDefault();
            }}
        >
            <div className="jkl-file-uploader-box__drag-text">Slipp filer her, eller</div>
            <label className="jkl-button jkl-button--secondary" htmlFor={id}>
                Legg til fil
            </label>
            {typeof maxSizeBytes !== "undefined" && (
                <div className="jkl-file-uploader-box__max-size-text">
                    Maksimum filstørrelse er {bytesToReadable(maxSizeBytes)}
                </div>
            )}

            <input
                id={id}
                accept={accept}
                className="jkl-sr-only"
                type="file"
                multiple={true}
                onChange={(e) => {
                    if (e.target.files) {
                        onChange(
                            e,
                            [...e.target.files].map<FileUploadState>((file) => ({
                                file,
                                uploading: false,
                                validation: validateFile(file, accept, maxSizeBytes),
                            })),
                        );
                    }
                }}
            />
        </div>
    );
}

export function bytesToReadable(bytes: number): string {
    if (bytes >= 100000) {
        return `${Number(bytes / 1000 / 1000).toLocaleString("nb", {
            maximumFractionDigits: 1,
        })} Mb`;
    } else {
        return `${bytes / 1000} Kb`;
    }
}

function validateFile(file: File, accept = "", maxSizeBytes?: number): FileUploadValidation | undefined {
    const acceptStrings = accept
        ?.split(",")
        .map((s) => s.toLowerCase())
        .map((s) => s.replace("*", ""));

    let isValidFile = acceptStrings.length == 0;

    isValidFile = acceptStrings.reduce(
        (found, acceptString) => found || file.type.includes(acceptString) || file.name.endsWith(acceptString),
        isValidFile,
    );

    if (!isValidFile) {
        return { type: "WRONG_FILE", message: "Feil filtype" };
    }

    if (typeof maxSizeBytes != "undefined" && file.size > maxSizeBytes) {
        return { type: "TO_BIG", message: "Filen er for stor" };
    }

    return undefined;
}
