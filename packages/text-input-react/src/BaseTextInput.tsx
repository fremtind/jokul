import { Density } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import type { IconProps } from "@fremtind/jkl-icons-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@fremtind/jkl-tooltip-react";
import cn from "classnames";
import React, {
    type CSSProperties,
    forwardRef,
    HTMLProps,
    InputHTMLAttributes,
    type MouseEventHandler,
    type ReactNode,
} from "react";

function getWidthAsStyle(
    width?: string,
    maxLength?: number,
): CSSProperties | undefined {
    if (width) {
        return { width }; // prioritize width prop
    }

    if (maxLength) {
        // adapt to maxLength, but capped at 40ch
        const length = `${Math.min(maxLength, 40)}ch`;
        const padding = "24px"; // left + right padding
        return { width: `calc(${length} + ${padding})` };
    }

    return undefined;
}

interface ActionBaseProps
    extends Exclude<HTMLProps<HTMLButtonElement>, "disabled"> {
    icon: React.ReactElement<IconProps>;
    label: string;
    buttonRef?: React.Ref<HTMLButtonElement>;
}

export interface ActionButton extends ActionBaseProps {
    type?: "button" | "reset";
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ActionSubmit extends ActionBaseProps {
    type: "submit";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type Action = ActionButton | ActionSubmit;

export type BaseTextInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "children" | "maxLength"
> & {
    /**
     * Brukes til inputfelter hvor det brukes maskering, for formatering av store tall. Brukes typisk bare til valuta.
     * @default "left"
     */
    align?: "left" | "right";
    /**
     * @deprecated Bruk heller actionButton
     *
     */
    action?: Action;
    density?: Density;
    /**
     * Benevnelse for feltet. Unngå å bruke både benevnelse og handling samtidig
     * @example "kr"
     * */
    unit?: ReactNode;
    width?: string;
    /**
     * Element som vises til høyre for inputfeltet. Brukes typisk til å trigge en handling som f.eks. å vise/skjule passord.
     */
    actionButton?: React.ReactElement;
    /**
     * Setter maxlength attributtet og justerer bredden på feltet til å passe det tallet som settes
     *
     * Merk: I noen Android-browsere vil dette ikke fungere som forventet. Det er gjort sånn
     * pga begrensninger med hvordan software-tastaturet fungerer og er ikke en bug. Dersom
     * man er veldig avhengig av at maxLength håndteres på alle plattformer anbefales det
     * å bruke input-feltet som en controlled input og selv begrense lengden på verdien.
     */
    maxLength?: number | undefined;
    /**
     * Lager en tooltip rundt elementet med en forklaring til bruker om hvorfor feltet er utilgjengelig.
     */
    disabledReason?: string;
};

const DisabledTooltip = ({
    children,
    description,
}: {
    children: React.ReactNode;
    description?: string;
}) => (
    <Tooltip>
        <TooltipContent>{description}</TooltipContent>
        <TooltipTrigger>{children}</TooltipTrigger>
    </Tooltip>
);

export const BaseTextInput = forwardRef<HTMLInputElement, BaseTextInputProps>(
    (props, ref) => {
        const {
            action,
            align = "left",
            "aria-invalid": ariaInvalid,
            className = "",
            density,
            maxLength,
            style,
            type = "text",
            unit,
            width,
            actionButton,
            disabled,
            disabledReason = "Dette feltet er utilgjengelig",
            ...rest
        } = props;

        const Wrapper = disabled ? DisabledTooltip : React.Fragment;

        return (
            <Wrapper description={disabledReason}>
                <div
                    className="jkl-text-input-wrapper"
                    data-invalid={ariaInvalid}
                    style={{ ...style, ...getWidthAsStyle(width, maxLength) }}
                >
                    <input
                        aria-invalid={ariaInvalid}
                        ref={ref}
                        className={cn("jkl-text-input__input", className, {
                            "jkl-text-input__input--align-right":
                                align === "right",
                        })}
                        maxLength={maxLength}
                        type={type}
                        disabled={disabled}
                        {...rest}
                    />
                    {unit && (
                        <span className="jkl-text-input__unit">{unit}</span>
                    )}
                    {!action &&
                        actionButton &&
                        React.cloneElement(actionButton, {
                            className: cn(
                                "jkl-text-input-action-button",
                                actionButton.props.className,
                            ),
                            "data-theme": ariaInvalid ? "light" : undefined,
                        })}
                    {action && !actionButton && (
                        <IconButton
                            data-theme={ariaInvalid ? "light" : undefined}
                            density={density}
                            className={cn(
                                "jkl-text-input-action-button",
                                action.className,
                            )}
                            title={action.label}
                            onClick={action.onClick}
                            onFocus={action.onFocus}
                            onBlur={action.onBlur}
                            ref={action.buttonRef}
                            type={action.type || "button"}
                        >
                            {action.icon}
                        </IconButton>
                    )}
                </div>
            </Wrapper>
        );
    },
);

BaseTextInput.displayName = "BaseInputField";
