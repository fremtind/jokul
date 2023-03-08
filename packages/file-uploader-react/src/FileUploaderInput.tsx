import { formatBytes } from "@fremtind/jkl-formatters-util";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, useState } from "react";
import { validateFile } from "./validateFile";

export interface FileUploadValidation {
    type: "TOO_BIG" | "WRONG_FORMAT";
    message: string;
}

export interface FileUploadState {
    file: File;
    validation?: FileUploadValidation;
    isUploading: boolean;
}

export interface FileUploaderInputProps {
    className?: string;
    id?: string;
    /**
     * En string som begrenser hvilke filtyper som kan velges.
     *
     * Flere filtyper kan defineres som en kommaseparert liste.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
    maxSizeBytes?: number;
    /**
     * @default true
     */
    multiple?: boolean;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
        files: FileUploadState[],
    ) => void;
}

export const FileUploaderInput = forwardRef<HTMLInputElement, FileUploaderInputProps>((props, ref) => {
    const { onChange, maxSizeBytes, accept, multiple, className, id: idProp, ...rest } = props;

    const id = useId(idProp || "jkl-file-uploader-input", { generateSuffix: !idProp });
    const maxSizeDescriptionId = id + "description";

    const [onDragClassName, setOnDragClassName] = useState<string>("");

    return (
        <div
            {...rest}
            className={cn("jkl-file-uploader-input", onDragClassName, className)}
            onDragEnter={(e) => {
                setOnDragClassName("jkl-file-uploader-input--enter");
                e.preventDefault();
            }}
            onDragOver={(e) => {
                /* Prevent browser from opening file in a new tab */
                setOnDragClassName("jkl-file-uploader-input--enter");
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
                            isUploading: false,
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
            <div className="jkl-file-uploader-input__drag-text">Slipp filer her, eller</div>
            <label className="jkl-button jkl-button--primary" htmlFor={id}>
                Legg til fil
            </label>
            <input
                ref={ref}
                id={id}
                accept={accept}
                aria-describedby={maxSizeBytes ? maxSizeDescriptionId : undefined}
                className="jkl-sr-only"
                type="file"
                multiple={multiple}
                onChange={(e) => {
                    if (e.target.files) {
                        onChange(
                            e,
                            [...e.target.files].map<FileUploadState>((file) => ({
                                file,
                                isUploading: false,
                                validation: validateFile(file, accept, maxSizeBytes),
                            })),
                        );
                    }
                }}
            />
            {typeof maxSizeBytes !== "undefined" && (
                <div id={maxSizeDescriptionId} className="jkl-file-uploader-input__max-size-text">
                    Maksimum filstørrelse er {formatBytes(maxSizeBytes)}
                </div>
            )}
        </div>
    );
});

FileUploaderInput.displayName = "FileUploaderInput";
