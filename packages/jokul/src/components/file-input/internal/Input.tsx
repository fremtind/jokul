import React, { forwardRef, useId } from "react";
import type { UploadedFile } from "../types.js";
import { useFileInputContext } from "./fileInputContext.js";
import { validateFileInputFiles } from "./validateFileInputFiles.js";

interface FileInputProps {
    id?: string;
    label: string;
    multiple: boolean;
}

export const Input = forwardRef<HTMLInputElement, FileInputProps>(
    (props, ref) => {
        const { multiple, id, label, ...rest } = props;

        const defaultId = useId();

        const maxSizeDescriptionId = `${id}-description`;
        const descriptor = multiple ? "filer" : "fil";

        const context = useFileInputContext();
        if (!context) {
            return (
                <p>Input must be placed inside a FileInputContextProvider.</p>
            );
        }
        const { accept, maxSizeBytes, files, onChange } = context;

        const elementId = id || defaultId;

        return (
            <>
                <label
                    className="jkl-button jkl-button--secondary"
                    htmlFor={elementId}
                    id={`${elementId}__add-btn`}
                >
                    {label}
                </label>
                <input
                    {...rest}
                    ref={ref}
                    id={elementId}
                    accept={accept}
                    aria-describedby={
                        maxSizeBytes ? maxSizeDescriptionId : undefined
                    }
                    className="jkl-sr-only"
                    type="file"
                    multiple={multiple}
                    value=""
                    onChange={(e) => {
                        const { files: selectedFiles } = e.target;

                        if (!selectedFiles) return;

                        const newUploads = Array.from(
                            selectedFiles,
                        ).map<UploadedFile>((file) => ({
                            file,
                            state: undefined,
                            validation: validateFileInputFiles(
                                file,
                                accept,
                                maxSizeBytes,
                            ),
                            uploadProgress: 0,
                        }));

                        const updatedFiles = multiple
                            ? [...files, ...newUploads]
                            : newUploads;

                        onChange(e, updatedFiles);
                    }}
                />
                <p className="jkl-file-input__dropzone-hint">
                    eller slipp {descriptor} her
                </p>{" "}
            </>
        );
    },
);

Input.displayName = "Input";
