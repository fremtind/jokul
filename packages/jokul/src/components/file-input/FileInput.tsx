import clsx from "clsx";
import React, { forwardRef } from "react";
import { FieldGroup } from "../../components/input-group/FieldGroup.js";
import { formatBytes } from "../../utilities/formatters/bytes/formatBytes.js";
import { Dropzone } from "./internal/Dropzone.js";
import { Input } from "./internal/Input.js";
import { FileInputContextProvider } from "./internal/fileInputContext.js";
import type { FileInputProps } from "./types.js";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    (props, ref) => {
        const {
            accept,
            className,
            children,
            id,
            value,
            multiple = true,
            maxSizeBytes,
            onChange,
            variant,
            fileVariant = "list",
            trackingProps,
            description,
            ...rest
        } = props;

        const hasFiles = value.length > 0;

        const fieldGroupProps = {
            ...rest,
            description: [
                description,
                maxSizeBytes !== undefined &&
                    `Maks ${formatBytes(maxSizeBytes)} per fil.`,
            ]
                .filter(Boolean)
                .join(" "),
        };

        if (variant === "small") {
            return (
                <FileInputContextProvider
                    context={{
                        accept,
                        onChange,
                        maxSizeBytes,
                        files: value,
                        fileVariant,
                    }}
                >
                    <FieldGroup
                        className={clsx(
                            "jkl-file-input",
                            "jkl-file-input--small",
                            `jkl-file-input--files-${fileVariant}`,
                            className,
                            {
                                "jkl-file-input--has-files": hasFiles,
                            },
                        )}
                        {...fieldGroupProps}
                    >
                        <Dropzone
                            trackingProps={trackingProps}
                            multiple={multiple}
                            variant={variant}
                        >
                            <div className="jkl-file-input__call-to-action">
                                <Input
                                    id={id}
                                    label="Legg til fil"
                                    multiple={multiple}
                                    trackingProps={trackingProps}
                                    variant={variant}
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
                context={{
                    accept,
                    onChange,
                    maxSizeBytes,
                    files: value,
                    fileVariant,
                }}
            >
                <FieldGroup
                    className={clsx(
                        "jkl-file-input",
                        `jkl-file-input--files-${fileVariant}`,
                        className,
                        {
                            "jkl-file-input--has-files": hasFiles,
                        },
                    )}
                    {...fieldGroupProps}
                >
                    <Dropzone
                        trackingProps={trackingProps}
                        multiple={multiple}
                        variant={variant}
                    >
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
                                trackingProps={trackingProps}
                                variant={variant}
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
