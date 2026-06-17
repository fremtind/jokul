"use client";

import { Flex } from "@fremtind/jokul/flex";
import { TextInput } from "@fremtind/jokul/text-input";
import type { ColorScheme } from "../_components/ThemeBuilder";
import { useThemeDraft } from "../_context/ThemeDraftContext";
import type { ThemeDraftColorTokenValue } from "../_context/types";
import { hexErrorLabel } from "../_shared/utils";
import { ColorPicker } from "./ColorPicker/ColorPicker";

type ColorTokenFieldProps = {
    token: ThemeDraftColorTokenValue;
    group: string;
    tokenRole: string;
    colorScheme: ColorScheme;
    label: string;
    description?: string;
    onValueChange?: (value: string) => void;
};

export function ColorTokenField({
    token,
    group,
    tokenRole,
    colorScheme,
    label,
    description,
    onValueChange,
}: ColorTokenFieldProps) {
    const { color } = useThemeDraft();
    const value = token[colorScheme];
    const id = `${group}.${tokenRole}`;
    const accessibleLabel = `${label} ${colorScheme}`;
    const handleValueChange =
        onValueChange ??
        ((nextValue: string) =>
            color.updateToken(group, tokenRole, colorScheme, nextValue));

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
                errorLabel={hexErrorLabel(value)}
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
