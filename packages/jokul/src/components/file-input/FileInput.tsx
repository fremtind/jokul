import clsx from "clsx";
import React, {
    forwardRef,
    useEffect,
    useId,
    useImperativeHandle,
    useRef,
} from "react";
import { FieldGroup } from "../../components/input-group/FieldGroup.js";
import { Dropzone } from "./internal/Dropzone.js";
import { Input } from "./internal/Input.js";
import { MaxSize } from "./internal/MaxSize.js";
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
            trackingProps,
            ...rest
        } = props;

        const inputRef = useRef<HTMLInputElement>(null);
        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

        // Når en fil fjernes forsvinner knappen som hadde fokus. Flytt fokus til
        // filvelgeren så brukeren ikke havner på toppen av siden.
        const previousFileCount = useRef(value.length);
        useEffect(() => {
            const fileWasRemoved = value.length < previousFileCount.current;
            previousFileCount.current = value.length;
            const focusWasLost =
                !document.activeElement ||
                document.activeElement === document.body;
            if (fileWasRemoved && focusWasLost) {
                inputRef.current?.focus();
            }
        }, [value.length]);

        const hasFiles = value.length > 0;
        const fileCountText = hasFiles
            ? `${value.length} ${value.length === 1 ? "fil" : "filer"} valgt`
            : "Ingen filer valgt";
        const fileCountAnnouncement = (
            <p className="jkl-sr-only" aria-live="polite">
                {fileCountText}
            </p>
        );

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
                        {...rest}
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
                                    ref={inputRef}
                                    aria-describedby={maxSizeDescriptionId}
                                />
                            </div>
                        </Dropzone>
                        <MaxSize id={maxSizeDescriptionId} />
                        {value.length > 0 && (
                            <ul
                                className="jkl-file-input__files"
                                aria-label="Valgte filer"
                            >
                                {children}
                            </ul>
                        )}
                        {fileCountAnnouncement}
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
                    {...rest}
                >
                    <Dropzone
                        trackingProps={trackingProps}
                        multiple={multiple}
                        variant={variant}
                    >
                        {value.length > 0 && (
                            <ul
                                className="jkl-file-input__files"
                                aria-label="Valgte filer"
                            >
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
                                ref={inputRef}
                                aria-describedby={maxSizeDescriptionId}
                            />
                            <MaxSize id={maxSizeDescriptionId} />
                        </div>
                    </Dropzone>
                    {fileCountAnnouncement}
                </FieldGroup>
            </FileInputContextProvider>
        );
    },
);

FileInput.displayName = "FileInput";
