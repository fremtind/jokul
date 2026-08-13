import clsx from "clsx";
import React, { forwardRef, useState } from "react";
import { Button } from "../button/Button.js";
import { UploadIcon } from "../icon/icons/UploadIcon.jsx";
import { InputGroup } from "../input-group/InputGroup.js";
import { Dropzone } from "./internal/Dropzone.js";
import type { FileInputGroupProps, FileInputProps } from "./types.js";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    (
        {
            "data-size": dataSize,
            "data-testautoid": dataTestAutoId,
            "data-testid": dataTestId,
            id,
            label,
            buttonText = "Velg fil",
            className,
            variant = "button",
            multiple = false,
            description,
            disabled,
            errorLabel,
            helpLabel,
            inline,
            labelProps,
            supportLabelProps,
            tooltip,
            style,
            ...nativeInputProps
        },
        ref,
    ) => {
        const [isDragOver, setIsDragOver] = useState(false);

        const inputGroupProps = {
            "data-size": dataSize,
            "data-testautoid": dataTestAutoId,
            "data-testid": dataTestId,
            id,
            label,
            className,
            description,
            errorLabel,
            helpLabel,
            inline,
            labelProps,
            supportLabelProps,
            tooltip,
            style,
        } satisfies FileInputGroupProps;

        const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
            const hasFiles = Array.from(event.dataTransfer.items).some(
                (item) => item.kind === "file",
            );

            if (hasFiles && !disabled) {
                setIsDragOver(true);
            }
        };

        return (
            <InputGroup
                {...inputGroupProps}
                render={(inputPropsFromInputGroup) => (
                    <div
                        className={clsx(
                            "jkl-file-input",
                            `jkl-file-input--${variant}`,
                            {
                                "jkl-file-input--disabled": disabled,
                            },
                        )}
                        onDragOver={handleDragOver}
                        onDragLeave={() => setIsDragOver(false)}
                        onDrop={() => setIsDragOver(false)}
                    >
                        {variant === "dropzone" ? (
                            <Dropzone
                                data-drag-over={isDragOver}
                                multiple={multiple}
                                buttonText={buttonText}
                            />
                        ) : (
                            <Button
                                as="div"
                                aria-hidden="true"
                                variant="secondary"
                                icon={<UploadIcon aria-hidden="true" />}
                                className="jkl-file-input__button"
                            >
                                {buttonText}
                            </Button>
                        )}

                        <input
                            {...nativeInputProps}
                            {...inputPropsFromInputGroup}
                            ref={ref}
                            type="file"
                            multiple={multiple}
                            disabled={disabled}
                            className="jkl-file-input__input"
                        />
                    </div>
                )}
            />
        );
    },
);

FileInput.displayName = "FileInput";
