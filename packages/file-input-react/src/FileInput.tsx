import type { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { forwardRef, useState } from "react";
import { Dropzone } from "./internal/Dropzone";
import { FileInputContextProvider } from "./internal/fileInputContext";
import { Input } from "./internal/Input";
import { FileState } from "./types";

export interface FileInputProps extends WithChildren {
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
    defaultValue?: FileState[];
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>, files: FileState[]) => void;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
    const { accept, className, children, id, defaultValue = [], multiple = true, onChange, ...rest } = props;

    const [files, setFiles] = useState<FileState[]>(defaultValue);

    return (
        <FileInputContextProvider context={{ accept, onChange, files, setFiles }}>
            <div className={cn("jkl-file-input", className)} {...rest}>
                <Dropzone>
                    {files.length > 0 && children}
                    {files.length === 0 && <p>Slipp filer her</p>}
                    <Input id={id} multiple={multiple} ref={ref} />
                </Dropzone>
            </div>
        </FileInputContextProvider>
    );
});

FileInput.displayName = "FileInput";
