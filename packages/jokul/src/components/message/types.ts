import type { Density } from "../../core/types.js";

export interface MessageProps extends React.ComponentPropsWithRef<"div"> {
    fullWidth?: boolean;
    density?: Density;
    dismissed?: boolean;
    dismissAction?: {
        handleDismiss: () => void;
        buttonTitle?: string;
    };
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
