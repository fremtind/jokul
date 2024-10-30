import React, { FC, useState } from "react";
import { FieldGroup, FieldGroupProps } from "../input-group/FieldGroup.js";
import { context } from "./radioPanelContext.js";

export type RadioPanelGroupProps = FieldGroupProps & {};

export const RadioPanelGroup: FC<RadioPanelGroupProps> = ({
    className,
    ...rest
}) => {
    const [checkedValue, setCheckedValue] = useState<string>();

    const onChange = (value: string) => {
        setCheckedValue(value);
    };

    return (
        <context.Provider value={{ checkedValue, onValueChange: onChange }}>
            <FieldGroup
                className={className}
                role="radiogroup"
                aria-invalid={!!rest.errorLabel}
                {...rest}
            />
        </context.Provider>
    );
};
