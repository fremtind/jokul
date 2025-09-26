import clsx from "clsx";
import React from "react";
import { SupportLabel } from "../input-group/index.js";
import type { BETA_SelectProps } from "./types.js";

export const BETA_Select = ({
    children,
    className,
    placeholder = "Velg",
    label = "Label",
    description,
    errorMessage,
    ...rest
}: BETA_SelectProps) => (
    <div className={clsx("BETA_jkl-select", className)}>
        <label htmlFor={`${label}-select`}>{label}</label>
        {description && (
            <p id={`${label}-select-description`} className="description">
                {description}
            </p>
        )}
        <select
            id={`${label}-select`}
            aria-describedby={`${label}-select-error ${label}-select-description`}
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
                id={`${label}-select-error`}
                className="error"
                label={errorMessage}
                labelType="error"
            />
        )}
    </div>
);
