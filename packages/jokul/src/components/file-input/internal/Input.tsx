import React, { forwardRef, useId } from "react";
import type { UploadedFile } from "../types.js";
import { useFileInputContext } from "./fileInputContext.js";
import { validateFileInputFiles } from "./validateFileInputFiles.js";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label: string;
    multiple: boolean;
}

export const Input = forwardRef<HTMLInputElement, FileInputProps>(
    (props, ref) => {
        const { multiple, id, label, ...rest } = props;

        const defaultId = useId();

        const fileInfoId = "file-info";

        const descriptor = multiple ? "filer" : "fil";

        const context = useFileInputContext();
        if (!context) {
            return (
                <p>Input must be placed inside a FileInputContextProvider.</p>
            );
        }
        const { accept, maxSizeBytes, onChange, files } = context;

        const elementId = id || defaultId;

        const describedBy = [
            fileInfoId,
            maxSizeBytes ? rest["aria-describedby"] : undefined,
        ]
            .filter(Boolean)
            .join(" ");

        const getFileAnnouncementMessage = () => {
            if (files.length === 0) {
                return multiple
                    ? "Velg én eller flere filer for opplasting."
                    : "Velg en fil for opplasting.";
            }
            return `${files.length} ${files.length === 1 ? "fil" : "filer"} valgt.`;
        };

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
                    aria-describedby={describedBy}
                    className="jkl-sr-only"
                    type="file"
                    multiple={multiple}
                    onChange={(e) => {
                        if (e.target.files) {
                            onChange(
                                e,
                                [...e.target.files].map<UploadedFile>(
                                    (file) => ({
                                        file,
                                        state: undefined,
                                        validation: validateFileInputFiles(
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
                <output
                    aria-live="polite"
                    id={fileInfoId}
                    className="jkl-sr-only"
                >
                    {getFileAnnouncementMessage()}
                </output>
                <p className="jkl-file-input__dropzone-hint">
                    eller slipp {descriptor} her
                </p>{" "}
            </>
        );
    },
);

Input.displayName = "Input";
