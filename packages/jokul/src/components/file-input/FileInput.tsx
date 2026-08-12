import React, { forwardRef, useRef, useState } from "react";
import { mergeRefs } from "../../utilities/mergeRefs.js";
import { Button } from "../button/Button.js";
import { UploadIcon } from "../icon/icons/UploadIcon.jsx";
import { InputGroup } from "../input-group/InputGroup.js";
import type { FileInputProps } from "./types.js";

// Det går også an å dra inn tekst og lenker, så sjekk at det faktisk er filer.
const isFileDrag = (event: React.DragEvent<HTMLLabelElement>) =>
    [...event.dataTransfer.items].some((item) => item.kind === "file");

const limitDroppedFiles = (files: FileList, multiple: boolean) => {
    if (multiple || files.length < 2) return files;

    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(files[0]);
    return dataTransfer.files;
};

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    (
        {
            id,
            label,
            children,
            className,
            variant = "button",
            hideFileName = false,
            multiple = false,
            description,
            disabled,
            errorLabel,
            helpLabel,
            ...inputProps
        },
        ref,
    ) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [isDragOver, setIsDragOver] = useState(false);
        const mergedRef = mergeRefs(inputRef, ref);
        const buttonText = children ?? "Velg fil";

        const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
            if (!isFileDrag(event)) return;

            event.preventDefault();
            if (!disabled) setIsDragOver(true);
        };

        const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
            const nextTarget = event.relatedTarget;

            if (
                nextTarget instanceof Node &&
                event.currentTarget.contains(nextTarget)
            ) {
                return;
            }

            setIsDragOver(false);
        };

        const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
            if (!isFileDrag(event)) return;

            event.preventDefault();
            setIsDragOver(false);

            const input = inputRef.current;
            const droppedFiles = event.dataTransfer.files;

            if (disabled || !input || droppedFiles.length === 0) return;

            input.files = limitDroppedFiles(droppedFiles, multiple);
            input.dispatchEvent(new Event("change", { bubbles: true }));
        };

        return (
            <InputGroup
                id={id}
                label={label ?? "Last opp dokumenter"}
                description={description}
                errorLabel={errorLabel}
                helpLabel={helpLabel}
                className={className}
                render={(groupInputProps) => {
                    const inputElement = (
                        <input
                            {...inputProps}
                            {...groupInputProps}
                            ref={mergedRef}
                            type="file"
                            multiple={multiple}
                            disabled={disabled}
                            data-hide-file-name={hideFileName || undefined}
                            className="jkl-file-input__input"
                        />
                    );

                    return (
                        <div
                            className={`jkl-file-input jkl-file-input--${variant}`}
                        >
                            {variant === "dropzone" ? (
                                <label
                                    htmlFor={groupInputProps.id}
                                    className="jkl-file-input__dropzone"
                                    data-drag-over={isDragOver || undefined}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <span className="jkl-file-input__call-to-action">
                                        <Button
                                            as="span"
                                            variant="secondary"
                                            icon={<UploadIcon />}
                                            className="jkl-file-input__button"
                                        >
                                            {buttonText}
                                        </Button>
                                        <span className="jkl-file-input__dropzone-text">
                                            {multiple
                                                ? "eller slipp filer her"
                                                : "eller slipp fil her"}
                                        </span>
                                    </span>
                                    {inputElement}
                                </label>
                            ) : (
                                <>
                                    <Button
                                        htmlFor={groupInputProps.id}
                                        as="label"
                                        variant="secondary"
                                        icon={<UploadIcon />}
                                        className="jkl-file-input__button"
                                    >
                                        {buttonText}
                                    </Button>
                                    {inputElement}
                                </>
                            )}
                        </div>
                    );
                }}
            />
        );
    },
);

FileInput.displayName = "FileInput";
