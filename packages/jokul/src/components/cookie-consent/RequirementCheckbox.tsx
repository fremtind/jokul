import React from "react";
import type { WithChildren } from "../../core/types.js";
import { Checkbox } from "../checkbox/Checkbox.js";

interface RequirementCheckboxProps extends WithChildren {
    defaultChecked: boolean;
    name: "functional" | "marketing" | "statistics";
    label: string;
}

export const RequirementCheckbox = ({
    defaultChecked,
    name,
    label,
    children,
}: RequirementCheckboxProps) => {
    return (
        <>
            <Checkbox
                className="jkl-cookie-consent-modal__checkbox"
                value="true"
                name={name}
                defaultChecked={defaultChecked}
            >
                {label}
            </Checkbox>
            <p className="jkl-cookie-consent-modal__info-text">{children}</p>
        </>
    );
};
