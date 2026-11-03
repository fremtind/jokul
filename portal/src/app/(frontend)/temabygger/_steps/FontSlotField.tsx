"use client";

import { File as FileItem } from "@fremtind/jokul/file";
import { FileInput } from "@fremtind/jokul/file-input";
import { Flex } from "@fremtind/jokul/flex";
import { Select } from "@fremtind/jokul/select";
import { useFontUpload } from "../_hooks/useFontUpload";
import {
    CUSTOM_FONT_ACCEPT,
    CUSTOM_FONT_MAX_SIZE_BYTES,
    type FontSlot,
} from "../_shared/customFont";
import {
    CUSTOM_FONT_SELECTION,
    type FontOptionId,
} from "../_shared/fontOptions";
import styles from "./font-slot-field.module.scss";

type FontSlotFieldProps = {
    slot: FontSlot;
    label: string;
    description?: string;
    items: Array<{ label: string; value: FontOptionId }>;
};

export function FontSlotField({
    slot,
    label,
    description,
    items,
}: FontSlotFieldProps) {
    const { selection, shown, shownSize, errorLabel, select, upload, remove } =
        useFontUpload(slot);

    return (
        <Flex direction="column" gap="8">
            <Select
                name={slot === "regular" ? "regularFont" : "displayFont"}
                label={label}
                description={description}
                items={[
                    ...items,
                    { label: "Annen font", value: CUSTOM_FONT_SELECTION },
                ]}
                width="100%"
                value={selection}
                onChange={(event) => select(event.target.value)}
            />
            {selection === CUSTOM_FONT_SELECTION && (
                <FileInput
                    className={styles.fontUpload}
                    legend="Last opp fontfil"
                    labelProps={{ srOnly: true }}
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
            )}
        </Flex>
    );
}
