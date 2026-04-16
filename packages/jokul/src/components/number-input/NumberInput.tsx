import clsx from "clsx";
import React, {
    type ComponentType,
    forwardRef,
    useRef,
    useState,
} from "react";
import { mergeRefs } from "../../utilities/mergeRefs.js";
import { MinusIcon, PlusIcon } from "../icon/index.js";
import { InputGroup } from "../input-group/InputGroup.js";
import type { NumberInputProps } from "./types.js";

type NumberInputValue = string | number | readonly string[] | undefined;

type StepDirection = "increment" | "decrement";

const stepperConfig: Record<
    StepDirection,
    { label: string; Icon: ComponentType }
> = {
    decrement: { label: "Senk verdien", Icon: MinusIcon },
    increment: { label: "Øk verdien", Icon: PlusIcon },
};

function toNumeric(value: NumberInputValue): number {
    if (typeof value === "number") {
        return value;
    }
    if (typeof value === "string" && value.trim() !== "") {
        return Number(value);
    }
    return Number.NaN;
}

type StepperButtonProps = {
    direction: StepDirection;
    disabled: boolean;
    onClick: () => void;
};

function StepperButton({ direction, disabled, onClick }: StepperButtonProps) {
    const { label, Icon } = stepperConfig[direction];

    return (
        <button
            type="button"
            className="jkl-button jkl-button--ghost"
            aria-label={label}
            data-direction={direction}
            onPointerDown={(event) => event.preventDefault()}
            onClick={onClick}
            disabled={disabled}
        >
            <span aria-hidden="true">
                <Icon />
            </span>
        </button>
    );
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    (props, ref) => {
        const {
            "data-size": dataSize,
            "data-testautoid": testAutoId,
            "data-testid": dataTestId,
            align = "left",
            id,
            label,
            className,
            style,
            errorLabel,
            helpLabel,
            inputClassName,
            labelProps,
            supportLabelProps,
            stepper = false,
            tooltip,
            description,
            width,
            onChange,
            ...rest
        } = props;
        const internalRef = useRef<HTMLInputElement>(null);
        const mergedRef = mergeRefs(internalRef, ref);
        const [uncontrolledValue, setUncontrolledValue] =
            useState<NumberInputValue>(rest.defaultValue);

        // I kontrollert bruk må vi lese direkte fra `value` for at disabled-
        // state på stepper-knappene skal følge prop-en i samme render. Bruker
        // intern state som fallback for ukontrollert bruk.
        const effectiveValue =
            rest.value !== undefined ? rest.value : uncontrolledValue;

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (rest.value === undefined) {
                setUncontrolledValue(event.target.value);
            }
            onChange?.(event);
        };

        const numericValue = toNumeric(effectiveValue);
        const minNumeric =
            rest.min !== undefined ? Number(rest.min) : Number.NaN;
        const maxNumeric =
            rest.max !== undefined ? Number(rest.max) : Number.NaN;
        const isAtOrBelowMin =
            Number.isFinite(numericValue) &&
            Number.isFinite(minNumeric) &&
            numericValue <= minNumeric;
        const isAtOrAboveMax =
            Number.isFinite(numericValue) &&
            Number.isFinite(maxNumeric) &&
            numericValue >= maxNumeric;

        const inputWrapperStyle =
            style || width
                ? {
                      ...style,
                      ...(width ? { width } : undefined),
                  }
                : undefined;
        const inputGroupProps = {
            id,
            label,
            errorLabel,
            helpLabel,
            labelProps,
            supportLabelProps,
            tooltip,
            description,
        };

        const triggerStep = (direction: StepDirection) => {
            const input = internalRef.current;

            if (!input || input.disabled || input.readOnly) {
                return;
            }

            const previousValue = input.value;
            input.focus();

            try {
                if (direction === "increment") {
                    input.stepUp();
                } else {
                    input.stepDown();
                }
            } catch {
                return;
            }

            if (input.value === previousValue) {
                return;
            }

            input.dispatchEvent(new Event("input", { bubbles: true }));
        };

        const stepperDisabled = rest.disabled || rest.readOnly;

        return (
            <InputGroup
                {...inputGroupProps}
                className={clsx(className, "jkl-number-input")}
                data-size={dataSize}
                data-testid={dataTestId ?? "jkl-number-input"}
                render={(inputProps) => (
                    <div
                        className={clsx("jkl-number-input__wrapper", {
                            "jkl-number-input__wrapper--stepper": stepper,
                        })}
                        data-invalid={inputProps["aria-invalid"]}
                        style={inputWrapperStyle}
                    >
                        {stepper && (
                            <StepperButton
                                direction="decrement"
                                disabled={stepperDisabled || isAtOrBelowMin}
                                onClick={() => triggerStep("decrement")}
                            />
                        )}
                        <input
                            {...inputProps}
                            {...rest}
                            ref={mergedRef}
                            type="number"
                            onChange={handleChange}
                            className={clsx(
                                "jkl-number-input__input",
                                {
                                    "jkl-number-input__input--stepper": stepper,
                                    "jkl-number-input__input--align-right":
                                        !stepper && align === "right",
                                },
                                inputClassName,
                            )}
                            data-testautoid={testAutoId}
                        />
                        {stepper && (
                            <StepperButton
                                direction="increment"
                                disabled={stepperDisabled || isAtOrAboveMax}
                                onClick={() => triggerStep("increment")}
                            />
                        )}
                    </div>
                )}
            />
        );
    },
);

NumberInput.displayName = "NumberInput";
