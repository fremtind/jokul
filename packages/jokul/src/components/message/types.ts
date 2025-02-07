import { AriaRole } from "react";
import { Density, WithChildren } from "../../core/types.js";

export interface MessageProps extends WithChildren {
    id?: string;
    title?: string;
    fullWidth?: boolean;
    density?: Density;
    className?: string;
    dismissed?: boolean;
    dismissAction?: {
        handleDismiss: () => void;
        buttonTitle?: string;
    };
    role?: AriaRole;
}

export interface FormErrorMessageProps {
    className?: string;
    id?: string;
    /**
     * @default { title: "Feil og mangler i skjemaet" }
     */
    messageProps?: Partial<MessageProps>;
    errors: (string | undefined)[];
    isSubmitted: boolean;
    isValid: boolean;
}
