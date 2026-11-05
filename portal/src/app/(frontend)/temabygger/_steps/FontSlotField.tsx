"use client";

import { File as FileItem } from "@fremtind/jokul/file";
import { FileInput } from "@fremtind/jokul/file-input";
import { useFontUpload } from "../_hooks/useFontUpload";
import {
    CUSTOM_FONT_ACCEPT,
    CUSTOM_FONT_MAX_SIZE_BYTES,
    type FontSlot,
} from "../_shared/customFont";
import styles from "./font-slot-field.module.scss";

type FontSlotFieldProps = {
    slot: FontSlot;
    label: string;
    description?: string;
};

export function FontSlotField({
    slot,
    label,
    description,
}: FontSlotFieldProps) {
    const { shown, shownSize, errorLabel, upload, remove } =
        useFontUpload(slot);

    return (
        <FileInput
            className={styles.fontUpload}
            legend={label}
            description={description}
            accept={CUSTOM_FONT_ACCEPT}
            maxSizeBytes={CUSTOM_FONT_MAX_SIZE_BYTES}
            multiple={false}
            variant="small"
            value={shown ? [shown] : []}
            onChange={(_event, files) => upload(files)}
        >
            {shown && (
                <FileItem
                    fileName={shown.file.name}
                    fileType={shown.file.name.split(".").pop() ?? ""}
                    fileSize={shownSize}
                    state={errorLabel ? "error" : undefined}
                    errorLabel={errorLabel}
                    onRemove={remove}
                />
            )}
        </FileInput>
    );
}
