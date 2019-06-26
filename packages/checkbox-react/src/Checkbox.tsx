import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    defaultChecked?: boolean;
}

export function Checkbox(props: Props) {
    return (
        <label className="jkl-checkbox">
            <input
                data-testid="jkl-checkbox-input"
                defaultChecked={props.defaultChecked}
                className="jkl-checkbox__input"
                type="checkbox"
            />
            {props.children}
        </label>
    );
}
