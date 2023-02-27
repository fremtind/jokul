import cn from "classnames";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

interface ContextualMenuTriggerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Beskrivelse av menyen. Leses for skjermlesere og vises som
     * hjelpetekst ved hover.
     * @default "Meny"
     */
    description?: string;
    /**
     * Ikonet som skal vises i knappen
     */
    icon: ReactNode;
    className?: string;
}

export const ContextualMenuTriggerButton = forwardRef<HTMLButtonElement, ContextualMenuTriggerButtonProps>(
    (props, ref) => {
        const { className, icon, description = "Meny", ...buttonProps } = props;

        return (
            <button
                ref={ref}
                type="button"
                title={description}
                className={cn("jkl-contextual-menu-trigger-button", className)}
                {...buttonProps}
            >
                {icon}
                <span className="jkl-sr-only">{description}</span>
            </button>
        );
    },
);
ContextualMenuTriggerButton.displayName = "ContextualMenuTriggerButton";
