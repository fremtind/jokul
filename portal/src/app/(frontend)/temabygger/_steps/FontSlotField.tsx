"use client";

import { File as FileItem } from "@fremtind/jokul/file";
import { FileInput } from "@fremtind/jokul/file-input";
import { Flex } from "@fremtind/jokul/flex";
import { useFontUpload } from "../_hooks/useFontUpload";
import {
    CUSTOM_FONT_ACCEPT,
    CUSTOM_FONT_MAX_SIZE_BYTES,
    type FontSlot,
} from "../_shared/customFont";
import { FontAxesEditor } from "./FontAxesEditor";
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
    const { shown, shownSize, errorLabel, axes, setAxes, upload, remove } =
        useFontUpload(slot);

    return (
        <Flex direction="column" gap="8">
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
            {shown && !errorLabel && (
                <details>
                    <summary>Akser i variabel font</summary>
                    <FontAxesEditor
                        key={shown.file.name}
                        axes={axes}
                        onChange={setAxes}
                    />
                </details>
            )}
        </Flex>
    );
}
