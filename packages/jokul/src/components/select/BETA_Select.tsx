import clsx from "clsx";
import React, { useId } from "react";
import { BETA_Help } from "../help/index.js";
import { SupportLabel } from "../input-group/index.js";
import type { BETA_SelectProps } from "./types.js";

export const BETA_Select = ({
    children,
    className,
    label = "Label",
    placeholder = "Velg",
    description,
    help,
    errorMessage,
    ...rest
}: BETA_SelectProps) => {
    const id = useId();

    return (
        <div className={clsx("BETA_jkl-select", className)}>
            <label htmlFor={`${id}-select`}>{label}</label>
            {help && (
                <div className="help">
                    <BETA_Help
                        {...help}
                        id={`${id}-select-help`}
                        showButtonText={false}
                    />
                </div>
            )}
            {description && (
                <p id={`${id}-select-description`} className="description">
                    {description}
                </p>
            )}
            <select
                id={`${id}-select`}
                aria-describedby={`${id}-select-error ${id}-select-description`}
                aria-details={`${id}-select-help`}
                {...rest}
            >
                {placeholder && (
                    <option disabled selected value="">
                        {placeholder}
                    </option>
                )}
                {children}
            </select>
            {errorMessage && (
                <SupportLabel
                    id={`${id}-select-error`}
                    className="error"
                    label={errorMessage}
                    labelType="error"
                />
            )}
        </div>
    );
};
