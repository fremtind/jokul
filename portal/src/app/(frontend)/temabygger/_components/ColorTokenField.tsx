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
    const editField = `${id}.${colorScheme}`;

    const accessibleLabel = `${label} ${colorScheme}`;

    function handleValueChange(nextValue: string) {
        if (onValueChange) {
            onValueChange(nextValue);
            return;
        }

        dispatch({
            type: "UPDATE_COLOR_TOKEN",
            group,
            role: tokenRole,
            colorScheme,
            value: nextValue,
        });
    }

    return (
        <TextInput
            label={label}
            description={description}
            name={id}
            data-theme-history
            value={value}
            maxLength={7}
            spellCheck={false}
            autoComplete="off"
            errorLabel={hexErrorLabel(value) ?? contrastErrorLabel}
            width="100%"
            actionButton={
                <ColorPicker
                    aria-label={`${accessibleLabel} fargevelger`}
                    value={value}
                    onInput={handleValueChange}
                    onChange={() =>
                        dispatch({ type: "END_EDIT", field: editField })
                    }
                />
            }
            onChange={(event) => handleValueChange(event.target.value)}
            onBlur={() => dispatch({ type: "END_EDIT", field: editField })}
        />
    );
}
