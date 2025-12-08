import clsx from "clsx";
import { forwardRef, useState } from "react";
import type { WithChildren } from "../../../core/types.js";
import type { UploadedFile } from "../types.js";
import { useFileInputContext } from "./fileInputContext.js";
import { validateFileInputFiles } from "./validateFileInputFiles.js";

interface DropzoneProps extends WithChildren {}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(
    (props, ref) => {
        const { children, ...rest } = props;
        const [onDragClassName, setOnDragClassName] = useState<string>("");

        const context = useFileInputContext();
        if (!context) {
            return (
                <p>
                    Dropzone must be placed inside a FileInputContextProvider.
                </p>
            );
        }
        const { maxSizeBytes, accept, onChange } = context;

        return (
            <div
                {...rest}
                ref={ref}
                className={clsx("jkl-file-input__dropzone", onDragClassName)}
                onDragEnter={(e) => {
                    setOnDragClassName("jkl-file-input__dropzone--enter");
                    e.preventDefault();
                }}
                onDragOver={(e) => {
                    /* Prevent browser from opening file in a new tab */
                    setOnDragClassName("jkl-file-input__dropzone--enter");
                    e.preventDefault();
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    setOnDragClassName("");

                    if (e.dataTransfer.files) {
                        onChange(
                            e,
                            [...e.dataTransfer.files].map<UploadedFile>(
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
                onDragLeave={(e) => {
                    setOnDragClassName("");
                    e.preventDefault();
                }}
            >
                {children}
            </div>
        );
    },
);

Dropzone.displayName = "Dropzone";
