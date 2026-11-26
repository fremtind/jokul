import clsx from "clsx";
import React, {
    type ChangeEvent,
    type DragEvent,
    forwardRef,
    useEffect,
    useId,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { FieldGroup } from "../../components/input-group/FieldGroup.js";
import { formatBytes } from "../../utilities/formatters/bytes/formatBytes.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import { FileInputContext } from "./internal/fileInputContext.js";
import { validateFileInputFiles } from "./internal/validateFileInputFiles.js";
import type { FileInputProps, UploadedFile } from "./types.js";

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
            fileVariant = "list",
            trackingProps,
            description,
            ...rest
        } = props;

        const defaultId = useId();
        const inputId = id ?? defaultId;
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

        const [isDraggedOver, setIsDraggedOver] = useState(false);

        const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
            onChange(
                e,
                [...(e.target.files ?? [])]
                    .slice(0, multiple ? undefined : 1)
                    .map<UploadedFile>((file) => ({
                        file,
                        state: undefined,
                        validation: validateFileInputFiles(
                            file,
                            accept,
                            maxSizeBytes,
                        ),
                        uploadProgress: 0,
                    })),
            );

        // En deaktivert filvelger tar ikke imot filer, og da ville nettleseren åpnet
        // filen i stedet
        const preventDropWhenDisabled = (e: DragEvent<HTMLDivElement>) => {
            if (e.currentTarget.closest("fieldset:disabled")) {
                e.preventDefault();
                e.dataTransfer.dropEffect = "none";
            }
        };

        // Nettleseren avviser hele slippet hvis flere filer slippes på en filvelger uten
        // `multiple`. Vi tar imot slippet og velger den første filen i stedet, så
        // brukeren får en reaksjon.
        const isMultipleDropOnSingle = (e: DragEvent<HTMLInputElement>) =>
            !multiple &&
            !e.currentTarget.matches(":disabled") &&
            e.dataTransfer.items.length > 1;

        const selectFirstFile = (e: DragEvent<HTMLInputElement>) => {
            e.preventDefault();
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(e.dataTransfer.files[0]);
            e.currentTarget.files = dataTransfer.files;
            e.currentTarget.dispatchEvent(
                new Event("change", { bubbles: true }),
            );
        };

        return (
            <FileInputContext.Provider value={{ fileVariant }}>
                <FieldGroup
                    className={clsx(
                        "jkl-file-input",
                        `jkl-file-input--files-${fileVariant}`,
                        className,
                    )}
                    {...fieldGroupProps}
                >
                    {/* Filvelgeren dekker hele dropsonen, så nettleseren tar seg av både klikk og
                        dra-og-slipp. Vi følger bare med på dra-tilstanden for å style den. */}
                    <div
                        className={clsx("jkl-file-input__dropzone", {
                            "jkl-file-input__dropzone--enter": isDraggedOver,
                        })}
                        onDragOver={preventDropWhenDisabled}
                        onDrop={preventDropWhenDisabled}
                    >
                        <div className="jkl-file-input__call-to-action">
                            <label
                                className="jkl-button jkl-button--secondary"
                                htmlFor={inputId}
                                id={`${inputId}__add-btn`}
                            >
                                Legg til fil
                            </label>
                            <input
                                ref={inputRef}
                                id={inputId}
                                accept={accept}
                                className="jkl-file-input__input"
                                type="file"
                                multiple={multiple}
                                value=""
                                data-track-component-name={
                                    COMPONENT_NAMES.FileInput
                                }
                                data-track-id={trackingProps?.id}
                                data-track-accept={accept}
                                data-track-multiple={multiple}
                                {...getExtraTrackingAttributes(
                                    trackingProps?.extra,
                                )}
                                onChange={handleChange}
                                onDragEnter={(e) =>
                                    setIsDraggedOver(
                                        !e.currentTarget.matches(":disabled"),
                                    )
                                }
                                onDragLeave={() => setIsDraggedOver(false)}
                                onDragOver={(e) => {
                                    if (isMultipleDropOnSingle(e)) {
                                        e.preventDefault();
                                    }
                                }}
                                onDrop={(e) => {
                                    setIsDraggedOver(false);
                                    if (isMultipleDropOnSingle(e)) {
                                        selectFirstFile(e);
                                    }
                                }}
                            />
                            <p className="jkl-file-input__dropzone-hint">
                                eller slipp {multiple ? "filer" : "fil"} her
                            </p>
                        </div>
                    </div>
                    {hasFiles && (
                        <ul
                            className="jkl-file-input__files"
                            aria-label="Valgte filer"
                        >
                            {children}
                        </ul>
                    )}
                    <p className="jkl-sr-only" aria-live="polite">
                        {fileCountText}
                    </p>
                </FieldGroup>
            </FileInputContext.Provider>
        );
    },
);

FileInput.displayName = "FileInput";
