import React, { forwardRef, useId } from "react";
import { COMPONENT_NAMES } from "../../metadata.js";
import { getExtraTrackingAttributes } from "../../types.js";
import type { Tracking } from "../../types.js";
import type { UploadedFile } from "../types.js";
import { useFileInputContext } from "./fileInputContext.js";
import { validateFileInputFiles } from "./validateFileInputFiles.js";

interface FileInputProps {
    id?: string;
    label: string;
    multiple: boolean;
    tracking?: Tracking;
    variant?: "flexible" | "small";
}

export const Input = forwardRef<HTMLInputElement, FileInputProps>(
    (props, ref) => {
        const { multiple, id, label, tracking, variant, ...rest } = props;

        const defaultId = useId();

        const maxSizeDescriptionId = `${id}-description`;
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
                    {...getExtraTrackingAttributes(tracking?.extra)}
                    data-track-component-name={COMPONENT_NAMES.FileInput}
                    data-track-id={tracking?.id}
                    data-track-accept={accept}
                    data-track-multiple={multiple}
                    data-track-variant={variant}
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
                <p className="jkl-file-input__dropzone-hint">
                    eller slipp {descriptor} her
                </p>{" "}
            </>
        );
    },
);

Input.displayName = "Input";
