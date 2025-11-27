import type { Density, WithChildren } from "../../core/types.js";

export interface SystemMessageProps extends WithChildren {
    id?: string;
    className?: string;
    density?: Density;
    maxContentWidth?: string;
    paddingLeft?: string;
    /** Overstyr standardrollen til meldingen. Om du ønsker å "skru av" rollen kan du bruke verdien `none presentation`. */
    role?: string;
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
