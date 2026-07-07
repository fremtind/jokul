import { MultiSelect } from "./MultiSelect.jsx";
import { NativeSelect } from "./NativeSelect.jsx";
import type { SelectProps } from "./types.js";

export function Select(props: SelectProps) {
    if (props.multiple) {
        return <MultiSelect {...props} />;
    }

    return <NativeSelect {...props} />;
}
