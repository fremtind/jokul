import type { StateChangeOptions } from "downshift";
import { type ReactNode } from "react";
import type { Density } from "../../core/types.js";
import { LabelProps } from "../input-group/types.js";
import type { SupportLabelProps } from "../input-group/types.js";

export type CommonProps = (
    | {
          label: string;
          labelProps?: Omit<
              LabelProps,
              "children" | "density" | "htmlFor" | "standAlone"
          >;
          inputId?: null;
          labelId?: null;
      }
    | {
          label?: null;
          labelProps?: null;
          inputId: string;
          labelId: string;
      }
) & {
    className?: string;
    isOpen?: boolean;
    /** @deprecated Bruk helpLabel eller flytt denne teksten ovenfor skjemafeltets label */
    leadText?: string;
    errorLabel?: string;
    helpLabel?: string;
    supportLabelProps?: Omit<
        SupportLabelProps,
        "id" | "errorLabel" | "helpLabel" | "density"
    >;
    tooltip?: ReactNode;
    variant?: "large" | "medium" | "small";
    density?: Density;
    placeholder?: string;
    /** @deprecated Bruk noHits med text og evt. defaultverdier for items */
    noHitsMessage?: ReactNode;
    maxNumberOfHits?: number;
    showDropdownControllerButton?: boolean;
    onInputValueChange?: (inputValue: string) => void;
    noHits?: { items: string[]; text: ReactNode };
};

export interface AutosuggestStringItemProps {
    allItems: string[];
    value: string;
    onChange?: (item: string) => void;
    onStateChange?: (changes: StateChangeOptions<string>) => void;
    onConfirm?: () => void;
}

export type AutosuggestProps = CommonProps & AutosuggestStringItemProps;
