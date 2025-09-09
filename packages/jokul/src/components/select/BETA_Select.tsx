import React, { forwardRef } from "react";
import type { BETASelectProps } from "./types.js";

/**
 * BETA: Denne komponenten er enda under utvikling, og kan gjerne brukes i løsnignene ute, men vil gå gjennom breaking
 * changes fortløpende.
 */
export const BETA_Select = forwardRef<HTMLSelectElement, BETASelectProps>(
    (props, ref) => {
        const { label, expressive = false, inline = false, ...rest } = props;

        return (
            <div
                data-testid="jkl-select"
                className="BETA_jkl-select"
                data-mode={expressive ? "expressive" : "productive"}
                data-inline={inline ? "true" : "false"}
            >
                <div className="component-wrapper">
                    <label
                        id={`${label}-select-label`}
                        htmlFor={`${label}-select`}
                    >
                        {label}
                    </label>

                    <div className="select-wrapper">
                        <select
                            {...rest}
                            id={`${label}-select`}
                            aria-labelledby={`${label}-select-label`}
                            aria-describedby={`${label}-select-support-label`}
                        >
                            <option value="" disabled selected>
                                Velg
                            </option>

                            {props.children}
                        </select>
                    </div>
                </div>

                <p id={`${label}-select-description`}>{props.description}</p>
            </div>
        );
    },
);
