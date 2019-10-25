import React, { MouseEventHandler } from "react";
import { TextField } from "@fremtind/jkl-text-input-react";
import { ActionIcon, IconVariant } from "@fremtind/jkl-action-icon-react";
import { Props as TextFieldProps } from "@fremtind/jkl-text-input-react/build/TextField";

interface Props extends TextFieldProps {
    icon: IconVariant;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ActionTextField = ({ icon, onClick, className, ...rest }: Props) => {
    return (
        <div className="jkl-action-text-field">
            <button className="jkl-action-text-field__icon" onClick={onClick} aria-label={icon} title={icon}>
                <ActionIcon action={icon} />
            </button>
            <TextField className={`jkl-action-text-field__field ${className}`} {...rest} />
        </div>
    );
};
