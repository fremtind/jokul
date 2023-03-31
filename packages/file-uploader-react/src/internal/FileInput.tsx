import { formatBytes } from "@fremtind/jkl-formatters-util";
import { useId } from "@fremtind/jkl-react-hooks";
import React, { forwardRef } from "react";
import { FileUploadState } from "../types";
import { useFileUploaderContext } from "./fileUploaderContext";
import { validateFile } from "./validateFile";

interface FileInputProps {
    id?: string;
    multiple: boolean;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
    const { multiple, id: idProp, ...rest } = props;
    const { accept, maxSizeBytes, onChange } = useFileUploaderContext();

    const id = useId(idProp || "jkl-file-uploader", { generateSuffix: !idProp });
    const maxSizeDescriptionId = id + "-description";

    return (
        <>
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
                <div id={maxSizeDescriptionId} className="jkl-file-uploader__max-size-text">
                    Maksimum filstørrelse er {formatBytes(maxSizeBytes)}
                </div>
            )}
        </>
    );
});

FileInput.displayName = "FileInput";
