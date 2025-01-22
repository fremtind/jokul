import React, { forwardRef, useId } from "react";
import { FileInputFile } from "../types";
import { useFileInputContext } from "./fileInputContext";
import { validateFile } from "./validateFile";

interface FileInputProps {
    id?: string;
    label: string;
    multiple: boolean;
}

export const Input = forwardRef<HTMLInputElement, FileInputProps>(
    (props, ref) => {
        const { multiple, id, label, ...rest } = props;

        const defaultId = useId();

        const maxSizeDescriptionId = id + "-description";
        const descriptor = multiple ? "filer" : "fil";

        const context = useFileInputContext();
        if (!context) {
            return (
                <p>Input must be placed inside a FileInputContextProvider.</p>
            );
        }
        const { accept, maxSizeBytes, onChange } = context;

        const elementId = id || defaultId;

        return (
            <>
                <label
                    className="jkl-button jkl-button--secondary"
                    htmlFor={id || defaultId}
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
                        if (e.target.files) {
                            onChange(
                                e,
                                [...e.target.files].map<FileInputFile>(
                                    (file) => ({
                                        file,
                                        state: "SELECTED",
                                        validation: validateFile(
                                            file,
                                            accept,
                                            maxSizeBytes,
                                        ),
                                        uploadProgress: 0,
                                    }),
                                ),
                            );
                        }
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
