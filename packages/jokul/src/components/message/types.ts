import type { ColorMode } from "../../utilities/types.js";

export interface MessageProps extends React.ComponentPropsWithoutRef<"div"> {
    fullWidth?: boolean;
    dismissed?: boolean;
    dismissAction?: {
        handleDismiss: () => void;
        buttonTitle?: string;
    };
    /**
     * @default "info"
     */
    variant?: ColorMode;
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
