import clsx from "clsx";
import React, { type FC } from "react";
import { FieldGroup } from "../input-group/FieldGroup.js";
import { InputCardGroupContext } from "./inputCardGroupContext.js";
import type { InputCardGroupProps } from "./types.js";

export const InputCardGroup: FC<InputCardGroupProps> = ({
    name,
    value,
    onChange,
    errorLabel,
    direction = "horizontal",
    type = "radio",
    labelProps = { variant: "medium" },
    className,
    children,
    ...rest
}) => {
    return (
        <InputCardGroupContext.Provider
            value={{ name, value, onChange, invalid: Boolean(errorLabel) }}
        >
            <FieldGroup
                data-testid="jkl-input-card-group"
                {...rest}
                className={clsx("jkl-input-card-group", className)}
                errorLabel={errorLabel}
                labelProps={labelProps}
                role={type === "radio" ? "radiogroup" : "group"}
                aria-invalid={Boolean(errorLabel)}
            >
                <div
                    className="jkl-input-card-group__cards"
                    data-direction={direction}
                >
                    {children}
                </div>
            </FieldGroup>
        </InputCardGroupContext.Provider>
    );
};
