import React, { MouseEventHandler } from "react";
import { TextField } from "@fremtind/jkl-text-input-react";
import { ActionIcon, IconVariant } from "@fremtind/jkl-action-icon-react";
import { Props as TextFieldProps } from "@fremtind/jkl-text-input-react/build/TextField";

interface Props extends TextFieldProps {
    iconType: IconVariant;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ActionTextField = ({ iconType, onClick, className, ...rest }: Props) => {
    return (
        <div className="jkl-icon-text-field">
            <button className="jkl-icon-text-field__icon" onClick={onClick}>
                <ActionIcon name={iconType} />
            </button>
            <TextField className={`jkl-icon-text-field__field ${className}`} {...rest} />
        </div>
    );
};
