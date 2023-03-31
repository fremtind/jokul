import { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { forwardRef, useState } from "react";
import { FileUploadState } from "../types";
import { useFileUploaderContext } from "./fileUploaderContext";
import { validateFile } from "./validateFile";

interface DropzoneProps extends WithChildren {}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>((props, ref) => {
    const { children, ...rest } = props;
    const { maxSizeBytes, accept, onChange } = useFileUploaderContext();

    const [onDragClassName, setOnDragClassName] = useState<string>("");

    return (
        <div
            {...rest}
            ref={ref}
            className={cn("jkl-file-uploader__dropzone", onDragClassName)}
            onDragEnter={(e) => {
                setOnDragClassName("jkl-file-uploader__dropzone--enter");
                e.preventDefault();
            }}
            onDragOver={(e) => {
                /* Prevent browser from opening file in a new tab */
                setOnDragClassName("jkl-file-uploader__dropzone--enter");
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
            {children}
        </div>
    );
});

Dropzone.displayName = "Dropzone";
