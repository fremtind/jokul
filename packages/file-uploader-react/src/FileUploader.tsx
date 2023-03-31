import type { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { forwardRef, useState } from "react";
import { Dropzone } from "./internal/Dropzone";
import { FileInput } from "./internal/FileInput";
import { FileUploaderContextProvider } from "./internal/fileUploaderContext";
import { FileUploadState } from "./types";

export interface FileUploaderProps extends WithChildren {
    className?: string;
    id?: string;
    /**
     * En string som begrenser hvilke filtyper som kan velges.
     *
     * Flere filtyper kan defineres som en kommaseparert liste.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    accept?: "image/*" | ".pdf" | "image/*,.pdf" | HTMLInputElement["accept"];
    maxSizeBytes?: number;
    /**
     * @default true
     */
    multiple?: boolean;
    defaultValue?: FileUploadState[];
    onChange: (
        e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
        files: FileUploadState[],
    ) => void;
}

export const FileUploader = forwardRef<HTMLInputElement, FileUploaderProps>((props, ref) => {
    const { accept, className, children, id, defaultValue = [], multiple = true, onChange, ...rest } = props;

    const [files, setFiles] = useState<FileUploadState[]>(defaultValue);

    return (
        <FileUploaderContextProvider context={{ accept, onChange, files, setFiles }}>
            <div className={cn("jkl-file-uploader", className)} {...rest}>
                <Dropzone>
                    {files.length > 0 && children}
                    {files.length === 0 && <p>Slipp filer her</p>}
                    <FileInput id={id} multiple={multiple} ref={ref} />
                </Dropzone>
            </div>
        </FileUploaderContextProvider>
    );
});

FileUploader.displayName = "FileUploader";
