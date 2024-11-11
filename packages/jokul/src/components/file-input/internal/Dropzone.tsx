import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { WithChildren } from "../../../core/types.js";
import { FileInputFile } from "../types.js";
import { useFileInputContext } from "./fileInputContext.js";
import { validateFile } from "./validateFile.js";

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
                            [...e.dataTransfer.files].map<FileInputFile>(
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
