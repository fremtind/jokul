import React, { forwardRef } from "react";
import { useId } from "../../../hooks/useId/useId.js";
import { formatBytes } from "../../../utilities/formatters/bytes/formatBytes.js";
import { FileInputFile } from "../types.js";
import { useFileInputContext } from "./fileInputContext.js";
import { validateFile } from "./validateFile.js";

interface FileInputProps {
    id?: string;
    label: string;
    multiple: boolean;
}

export const Input = forwardRef<HTMLInputElement, FileInputProps>(
    (props, ref) => {
        const { multiple, id: idProp, label, ...rest } = props;

        const id = useId(idProp || "jkl-file-input", {
            generateSuffix: !idProp,
        });
        const maxSizeDescriptionId = id + "-description";
        const descriptor = multiple ? "filer" : "fil";

        const context = useFileInputContext();
        if (!context) {
            return (
                <p>Input must be placed inside a FileInputContextProvider.</p>
            );
        }
        const { accept, maxSizeBytes, onChange, files } = context;

        return (
            <>
                <label
                    className="jkl-button jkl-button--secondary"
                    htmlFor={id}
                >
                    {label}
                </label>
                <input
                    {...rest}
                    ref={ref}
                    id={id}
                    accept={accept}
                    aria-describedby={
                        maxSizeBytes ? maxSizeDescriptionId : undefined
                    }
                    className="jkl-sr-only"
                    type="file"
                    multiple={multiple}
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
                {files.length === 0 && <p>eller slipp {descriptor} her</p>}
                {typeof maxSizeBytes !== "undefined" && (
                    <div
                        id={maxSizeDescriptionId}
                        className="jkl-file-input__max-size-text"
                    >
                        Maks {formatBytes(maxSizeBytes)} per fil
                    </div>
                )}
            </>
        );
    },
);

Input.displayName = "Input";
