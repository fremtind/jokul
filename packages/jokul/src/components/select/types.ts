import type { ChangeEvent, SelectHTMLAttributes } from "react";
import type { ReactNode } from "react";
import type { DataTestAutoId } from "../../utilities/types.js";
import type { ValuePair } from "../../utilities/valuePair.js";
import type { LabelProps } from "../input-group/types.js";
import type { InputGroupProps } from "../input-group/types.js";

export type SelectOption = {
    value: string;
    label: ReactNode;
    disabled?: boolean;
};

type BaseProps = {
    label: string;
    options: SelectOption[];
    searchable?: boolean;
};

export type SingleSelectProps = BaseProps &
    Omit<SelectHTMLAttributes<HTMLSelectElement>, "multiple" | "children"> & {
        multiple?: false;
    };

export type MultiSelectProps = BaseProps & {
    multiple: true;
    name?: string;
    value?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
};

export type SelectProps = SingleSelectProps | MultiSelectProps;
