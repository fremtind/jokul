import clsx from "clsx";
import React, { forwardRef } from "react";
import { ArrowDownIcon } from "../../components/icon/index.js";
import { InputGroup } from "../../components/input-group/InputGroup.js";
import type { SelectProps } from "./types.js";

export const Select = forwardRef<HTMLSelectElement, SelectProps>((props) => {
    const {
        label,
        className,
        density,
        errorLabel,
        helpLabel,
        labelProps,
        placeholder = "Velg",
        supportLabelProps,
        tooltip,
        value,
        description,
        ...rest
    } = props;

    const inputGroupProps = {
        label,
        density,
        errorLabel,
        helpLabel,
        labelProps,
        supportLabelProps,
        tooltip,
        description,
    };

    return (
        <InputGroup
            {...inputGroupProps}
            data-testid="jkl-select--beta"
            className={clsx("jkl-select--beta", className)}
            render={(inputProps) => (
                <div className="jkl-select--beta-wrapper">
                    <select
                        defaultValue={value ? undefined : ""}
                        value={value}
                        {...inputProps}
                        {...rest}
                    >
                        {placeholder && (
                            <option disabled selected value="">
                                {placeholder}
                            </option>
                        )}
                        {props.children}
                    </select>
                    <ArrowDownIcon variant="medium" />
                </div>
            )}
        />
    );
});
