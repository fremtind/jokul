import type { Density } from "@fremtind/jkl-core";
import { FieldGroup, type FieldGroupProps } from "@fremtind/jkl-input-group-react";
import cn from "classnames";
import React, { forwardRef } from "react";
import { Dropzone } from "./internal/Dropzone";
import { FileInputContextProvider } from "./internal/fileInputContext";
import { Input } from "./internal/Input";
import { FileInputFile } from "./types";

export interface FileInputProps extends Omit<FieldGroupProps, "onChange"> {
    className?: string;
    id?: string;
    density?: Density;
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
    value: FileInputFile[];
    onChange: (
        e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>,
        files: FileInputFile[],
    ) => void;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props, ref) => {
    const { accept, className, children, id, value, density, multiple = true, maxSizeBytes, onChange, ...rest } = props;

    const hasFiles = value.length > 0;

    return (
        <FileInputContextProvider context={{ accept, onChange, maxSizeBytes }}>
            <FieldGroup
                className={cn("jkl-file-input", className, {
                    "jkl-file-input--has-files": hasFiles,
                })}
                data-layout-density={density}
                {...rest}
            >
                <Dropzone>
                    {value.length > 0 && <ul className="jkl-file-input__files">{children}</ul>}
                    <div className="jkl-file-input__call-to-action">
                        {value.length === 0 && <p>Slipp filer her</p>}
                        <Input
                            id={id}
                            label={hasFiles ? "Legg til flere filer" : "Legg til filer"}
                            multiple={multiple}
                            ref={ref}
                        />
                    </div>
                </Dropzone>
            </FieldGroup>
        </FileInputContextProvider>
    );
});

FileInput.displayName = "FileInput";
