import clsx from "clsx";
import React, { forwardRef } from "react";
import { Button } from "../button/Button.js";
import { UploadIcon } from "../icon/icons/UploadIcon.jsx";
import { InputGroup } from "../input-group/InputGroup.js";
import type { FileInputProps } from "./types.js";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    (
        {
            id,
            label,
            children,
            className,
            multiple = false,
            description,
            disabled,
            errorLabel,
            helpLabel,
            ...inputProps
        },
        ref,
    ) => {
        return (
            <InputGroup
                id={id}
                label={label ?? "Last opp dokumenter"}
                description={description}
                errorLabel={errorLabel}
                helpLabel={helpLabel}
                className={className}
                render={(groupInputProps) => (
                    <span
                        className={clsx("jkl-file-input", {
                            "jkl-file-input--error": Boolean(errorLabel),
                        })}
                    >
                        <Button
                            htmlFor={groupInputProps.id}
                            as="label"
                            variant="secondary"
                            icon={<UploadIcon />}
                            className="jkl-file-input__button"
                        >
                            {children ?? "Velg fil"}
                        </Button>

                        <input
                            {...inputProps}
                            {...groupInputProps}
                            ref={ref}
                            type="file"
                            multiple={multiple}
                            disabled={disabled}
                            className="jkl-file-input__input"
                        />
                    </span>
                )}
            />
        );
    },
);

FileInput.displayName = "FileInput";
