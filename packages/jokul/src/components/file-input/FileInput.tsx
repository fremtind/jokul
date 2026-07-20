import clsx from "clsx";
import React, { forwardRef, useId } from "react";
import { UploadIcon } from "../icon/icons/UploadIcon.js";
import type { FileInputProps } from "./types.js";

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    (
        { id, label = "Velg fil", className, multiple = false, ...inputProps },
        ref,
    ) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;

        return (
            <span className={clsx("jkl-file-input", className)}>
                <input
                    {...inputProps}
                    ref={ref}
                    id={inputId}
                    type="file"
                    multiple={multiple}
                    className="jkl-file-input__input"
                />

                <label
                    htmlFor={inputId}
                    className={clsx(
                        "jkl-button",
                        "jkl-button--secondary",
                        "jkl-file-input__button",
                    )}
                >
                    <div className="jkl-button__label">
                        <UploadIcon aria-hidden="true" />

                        <span className="jkl-button__text">{label}</span>
                    </div>
                </label>
            </span>
        );
    },
);

FileInput.displayName = "FileInput";
