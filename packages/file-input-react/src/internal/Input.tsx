import { formatBytes } from "@fremtind/jkl-formatters-util";
import { useId } from "@fremtind/jkl-react-hooks";
import React, { forwardRef } from "react";
import { FileState } from "../types";
import { useFileInputContext } from "./fileInputContext";
import { validateFile } from "./validateFile";

interface FileInputProps {
    id?: string;
    multiple: boolean;
}

export const Input = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
    const { multiple, id: idProp, ...rest } = props;

    const id = useId(idProp || "jkl-file-input", { generateSuffix: !idProp });
    const maxSizeDescriptionId = id + "-description";

    const context = useFileInputContext();
    if (!context) {
        return <p>Input must be placed inside a FileInputContextProvider.</p>;
    }
    const { accept, maxSizeBytes, onChange } = context;

    return (
        <>
            <label className="jkl-button jkl-button--secondary" htmlFor={id}>
                Legg til fil
            </label>
            <input
                {...rest}
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
                            [...e.target.files].map<FileState>((file) => ({
                                file,
                                isUploading: false,
                                validation: validateFile(file, accept, maxSizeBytes),
                            })),
                        );
                    }
                }}
            />
            {typeof maxSizeBytes !== "undefined" && (
                <div id={maxSizeDescriptionId} className="jkl-file-input__max-size-text">
                    Maksimum filstørrelse er {formatBytes(maxSizeBytes)}
                </div>
            )}
        </>
    );
});

Input.displayName = "Input";
