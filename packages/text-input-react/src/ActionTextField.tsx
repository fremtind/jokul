import React, { MouseEventHandler } from "react";
import { TextField } from "./TextField";
import { ActionIcon, IconVariant } from "./ActionIcon";
import { Props as TextInputProps } from "./index";

interface Props extends TextInputProps {
    icon: IconVariant;
    onClick: MouseEventHandler<HTMLButtonElement>;
    helpLabel?: string;
    errorLabel?: string;
}

export const ActionTextField = ({ icon, onClick, ...rest }: Props) => {
    return (
        <div className="jkl-text-field--action">
            <button className="jkl-text-field__icon" onClick={onClick} aria-label={icon} title={icon}>
                <ActionIcon forceCompact action={icon} />
            </button>
            <TextField {...rest} />
        </div>
    );
};
