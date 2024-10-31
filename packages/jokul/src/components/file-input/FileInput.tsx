import cn from "classnames";
import React, { forwardRef } from "react";
import {
    FieldGroup,
    type FieldGroupProps,
} from "../../components/input-group/FieldGroup.js";
import { type Density } from "../../core/types.js";
import { Dropzone } from "./internal/Dropzone.js";
import { FileInputContextProvider } from "./internal/fileInputContext.js";
import { Input } from "./internal/Input.js";
import { FileInputFile } from "./types.js";

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
    variant?: "flexible" | "small";
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.DragEvent<HTMLDivElement>,
        files: FileInputFile[],
    ) => void;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    (props, ref) => {
        const {
            accept,
            className,
            children,
            id,
            value,
            density,
            multiple = true,
            maxSizeBytes,
            onChange,
            variant,
            ...rest
        } = props;

        const hasFiles = value.length > 0;

        if (variant === "small") {
            return (
                <FileInputContextProvider
                    context={{ accept, onChange, maxSizeBytes, files: value }}
                >
                    <FieldGroup
                        className={cn(
                            "jkl-file-input",
                            "jkl-file-input--small",
                            className,
                            {
                                "jkl-file-input--has-files": hasFiles,
                            },
                        )}
                        data-layout-density={density ? density : "compact"}
                        {...rest}
                    >
                        <Dropzone>
                            <div className="jkl-file-input__call-to-action">
                                <Input
                                    id={id}
                                    label="Legg til fil"
                                    multiple={multiple}
                                    ref={ref}
                                />
                            </div>
                        </Dropzone>
                        {value.length > 0 && (
                            <ul className="jkl-file-input__files">
                                {children}
                            </ul>
                        )}
                    </FieldGroup>
                </FileInputContextProvider>
            );
        }

        return (
            <FileInputContextProvider
                context={{ accept, onChange, maxSizeBytes, files: value }}
            >
                <FieldGroup
                    className={cn("jkl-file-input", className, {
                        "jkl-file-input--has-files": hasFiles,
                    })}
                    data-layout-density={density}
                    {...rest}
                >
                    <Dropzone>
                        {value.length > 0 && (
                            <ul className="jkl-file-input__files">
                                {children}
                            </ul>
                        )}
                        <div className="jkl-file-input__call-to-action">
                            <Input
                                id={id}
                                label={
                                    multiple && hasFiles
                                        ? "Legg til flere filer"
                                        : "Legg til fil"
                                }
                                multiple={multiple}
                                ref={ref}
                            />
                        </div>
                    </Dropzone>
                </FieldGroup>
            </FileInputContextProvider>
        );
    },
);

FileInput.displayName = "FileInput";
