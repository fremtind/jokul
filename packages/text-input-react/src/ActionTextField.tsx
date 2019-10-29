import React, { MouseEventHandler } from "react";
import { TextField } from "./TextField";
import { ActionIcon, IconVariant } from "./ActionIcon";
import { TextInputProps } from "./index";

interface Props extends TextInputProps {
    action: IconVariant;
    onClick: MouseEventHandler<HTMLButtonElement>;
    helpLabel?: string;
    errorLabel?: string;
    type?: "text" | "number" | "tel" | "password" | "email" | "year";
}

export const ActionTextField = ({ action, onClick, ...rest }: Props) => {
    return (
        <div className="jkl-text-field--action">
            <button type="button" className="jkl-text-field__icon" onClick={onClick} aria-label={action} title={action}>
                <ActionIcon forceCompact action={action} />
            </button>
            <TextField {...rest} />
        </div>
    );
};
