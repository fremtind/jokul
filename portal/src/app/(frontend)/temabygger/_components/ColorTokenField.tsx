"use client";

import { Flex } from "@fremtind/jokul/flex";
import { TextInput } from "@fremtind/jokul/text-input";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import { hexErrorLabel } from "../_shared/utils";
import type { ColorScheme } from "../generator/types";
import { ColorPicker } from "./ColorPicker/ColorPicker";

type ColorTokenFieldProps = {
    group: string;
    tokenRole: string;
    colorScheme: ColorScheme;
    label: string;
    description?: string;
    contrastErrorLabel?: string;
    onValueChange?: (value: string) => void;
};

export function ColorTokenField({
    group,
    tokenRole,
    colorScheme,
    label,
    description,
    contrastErrorLabel,
    onValueChange,
}: ColorTokenFieldProps) {
    const { draft, dispatch } = useThemeDraft();
    const value =
        (
            draft.colorTokens as Record<
                string,
                Record<string, Record<string, string>>
            >
        )[group]?.[tokenRole]?.[colorScheme] ?? "";
    const id = `${group}.${tokenRole}`;
    const accessibleLabel = `${label} ${colorScheme}`;
    const handleValueChange =
        onValueChange ??
        ((nextValue: string) =>
            dispatch({
                type: "UPDATE_COLOR_TOKEN",
                group,
                role: tokenRole,
                colorScheme,
                value: nextValue,
            }));

    return (
        <Flex alignItems="end" gap="8" fill>
            <TextInput
                label={label}
                description={description}
                name={id}
                value={value}
                maxLength={7}
                spellCheck={false}
                autoComplete="off"
                errorLabel={hexErrorLabel(value) ?? contrastErrorLabel}
                width="100%"
                onChange={(event) => handleValueChange(event.target.value)}
            />
            <ColorPicker
                aria-label={`${accessibleLabel} fargevelger`}
                value={value}
                onChange={handleValueChange}
            />
        </Flex>
    );
}
