import clsx from "clsx";
import { forwardRef } from "react";
import { getValuePair } from "../../utilities/valuePair.js";
import { ArrowVerticalAnimated } from "../icon/icons/animated/ArrowVerticalAnimated.js";
import { InputGroup } from "../input-group/InputGroup.js";
import type { NativeSelectProps } from "./types.js";

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
    (props, ref) => {
        const {
            label,
            className,
            density,
            errorLabel,
            helpLabel,
            inline,
            invalid,
            items,
            labelProps,
            placeholder = "Velg",
            selectClassName,
            supportLabelProps,
            tooltip,
            value,
            width,
            description,
            ...rest
        } = props;

        const inputGroupProps = {
            label,
            density,
            errorLabel,
            helpLabel,
            labelProps,
            inline,
            supportLabelProps,
            tooltip,
            description,
        };

        return (
            <InputGroup
                {...inputGroupProps}
                data-testid="jkl-select"
                className={clsx("jkl-select", className, {
                    "jkl-select--inline": inline,
                    "jkl-select--invalid": !!errorLabel || invalid,
                })}
                render={(inputProps) => (
                    <div
                        className="jkl-select__outer-wrapper"
                        style={{ width }}
                    >
                        <select
                            ref={ref}
                            className={clsx(
                                "jkl-select__button",
                                selectClassName,
                                {
                                    "jkl-select__button--active-value": !!value,
                                },
                            )}
                            defaultValue={value ? undefined : ""}
                            value={value}
                            {...inputProps}
                            {...rest}
                        >
                            {placeholder && !value && (
                                <option disabled value="">
                                    {placeholder}
                                </option>
                            )}
                            {items.map(getValuePair).map((item) => (
                                <option
                                    data-testid="jkl-select__option"
                                    className="jkl-select__option"
                                    key={item.value}
                                    value={item.value}
                                >
                                    {item.label}
                                </option>
                            ))}
                        </select>
                        <ArrowVerticalAnimated
                            variant="medium"
                            pointingDown
                            className="jkl-select__arrow"
                        />
                    </div>
                )}
            />
        );
    },
);

NativeSelect.displayName = "NativeSelect";
