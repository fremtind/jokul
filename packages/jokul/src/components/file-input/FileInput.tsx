import clsx from "clsx";
import React, {forwardRef, useId} from "react";
import {FieldGroup} from "../../components/input-group/FieldGroup.js";
import {Dropzone} from "./internal/Dropzone.js";
import {Input} from "./internal/Input.js";
import {MaxSize} from "./internal/MaxSize.js";
import {FileInputContextProvider} from "./internal/fileInputContext.js";
import type {FileInputProps} from "./types.js";

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

        const maxSizeDescriptionId = useId();

        if (variant === "small") {
            return (
                <FileInputContextProvider
                    context={{ accept, onChange, maxSizeBytes, files: value }}
                >
                    <FieldGroup
                        className={clsx(
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
                                    aria-describedby={maxSizeDescriptionId}
                                />
                            </div>
                        </Dropzone>
                        <MaxSize id={maxSizeDescriptionId} />
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
                    className={clsx("jkl-file-input", className, {
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
                                aria-describedby={maxSizeDescriptionId}
                            />
                            <MaxSize id={maxSizeDescriptionId} />
                        </div>
                    </Dropzone>
                </FieldGroup>
            </FileInputContextProvider>
        );
    },
);

FileInput.displayName = "FileInput";
