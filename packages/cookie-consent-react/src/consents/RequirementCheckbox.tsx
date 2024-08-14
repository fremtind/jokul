import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { WithChildren } from "@fremtind/jkl-core";
import React from "react";

interface RequirementCheckboxProps extends WithChildren {
    defaultChecked: boolean;
    name: "functional" | "marketing" | "statistics";
    label: string;
}

export const RequirementCheckbox = ({ defaultChecked, name, label, children }: RequirementCheckboxProps) => {
    return (
        <>
            <Checkbox
                className="jkl-cookie-consent-modal__checkbox"
                value="True"
                name={name}
                defaultChecked={defaultChecked}
            >
                {label}
            </Checkbox>
            <p className="jkl-cookie-consent-modal__info-text">{children}</p>
        </>
    );
};
