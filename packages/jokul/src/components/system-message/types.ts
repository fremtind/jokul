import type { AriaRole } from "react";
import type { WithChildren } from "../../core/types.js";

export interface SystemMessageProps extends WithChildren {
    id?: string;
    className?: string;
    maxContentWidth?: string;
    paddingLeft?: string;
    /**
     * Overstyr standardrollen til meldingen. Om du ønsker å "skru av" rollen kan du bruke verdien `none` eller `presentation`.
     *
     * @see https://www.w3.org/TR/wai-aria-1.2/#role_definitions
     */
    role?: AriaRole | string;
    dismissed?: boolean;
    dismissAction?: {
        handleDismiss: () => void;
        buttonTitle?: string;
    };
    /**
     * Setter type melding.
     *
     * @default "info"
     */
    variant?: "info" | "success" | "warning" | "error";
}
