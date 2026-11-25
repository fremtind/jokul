import clsx from "clsx";
import React, { type DragEvent, forwardRef, useState } from "react";
import type { WithChildren } from "../../../utilities/types.js";
import { COMPONENT_NAMES } from "../../metadata.js";
import { getExtraTrackingAttributes } from "../../types.js";
import type { Tracking } from "../../types.js";
import type { UploadedFile } from "../types.js";
import { useFileInputContext } from "./fileInputContext.js";
import { validateFileInputFiles } from "./validateFileInputFiles.js";

interface DropzoneProps extends WithChildren {
    trackingProps?: Tracking;
    multiple: boolean;
    variant?: "flexible" | "small";
}

export const Dropzone = forwardRef<HTMLDivElement, DropzoneProps>(
    (props, ref) => {
        const { children, trackingProps, multiple, variant, ...rest } = props;
        const [onDragClassName, setOnDragClassName] = useState<string>("");

        const context = useFileInputContext();
        if (!context) {
            return (
                <p>
                    Dropzone must be placed inside a FileInputContextProvider.
                </p>
            );
        }
        const { maxSizeBytes, accept, onChange } = context;

        // `disabled` på fieldset slår bare av input-elementet nativt, ikke dra-og-slipp
        const isDisabled = (e: DragEvent<HTMLDivElement>) =>
            e.currentTarget.closest("fieldset:disabled") !== null;

        return (
            <div
                {...rest}
                ref={ref}
                className={clsx("jkl-file-input__dropzone", onDragClassName)}
                data-track-component-name={COMPONENT_NAMES.FileInput}
                data-track-id={trackingProps?.id}
                data-track-accept={accept}
                data-track-multiple={multiple}
                data-track-variant={variant}
                {...getExtraTrackingAttributes(trackingProps?.extra, rest)}
                onDragOver={(e) => {
                    // Hindrer nettleseren i å åpne filen i en ny fane
                    e.preventDefault();
                    if (isDisabled(e)) {
                        e.dataTransfer.dropEffect = "none";
                        return;
                    }
                    setOnDragClassName("jkl-file-input__dropzone--enter");
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    setOnDragClassName("");

                    if (!isDisabled(e) && e.dataTransfer.files) {
                        onChange(
                            e,
                            [...e.dataTransfer.files]
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
                    }
                }}
                onDragLeave={(e) => {
                    // dragleave fyres også når pekeren går inn over et barn av dropsonen
                    if (
                        !e.currentTarget.contains(
                            e.relatedTarget as Node | null,
                        )
                    ) {
                        setOnDragClassName("");
                    }
                }}
            >
                {children}
            </div>
        );
    },
);

Dropzone.displayName = "Dropzone";
