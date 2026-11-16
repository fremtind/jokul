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
    onValueChange?: (value: string, editField?: string) => void;
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
    const pickerEditField = `picker:${editField}`;
    const accessibleLabel = `${label} ${colorScheme}`;

    function handleValueChange(nextValue: string, field?: string) {
        if (onValueChange) {
            onValueChange(nextValue, field);
            return;
        }

        const action = {
            type: "UPDATE_COLOR_TOKEN" as const,
            group,
            role: tokenRole,
            colorScheme,
            value: nextValue,
        };

        if (field) {
            dispatch({ type: "EDIT_FIELD", field, action });
        } else {
            dispatch(action);
        }
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
                    onChange={(nextValue) =>
                        handleValueChange(nextValue, pickerEditField)
                    }
                    onChangeEnd={() =>
                        dispatch({ type: "END_EDIT", field: pickerEditField })
                    }
                />
            }
            onChange={(event) =>
                handleValueChange(event.target.value, editField)
            }
            onBlur={() => dispatch({ type: "END_EDIT", field: editField })}
        />
    );
}
