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
        <div className="jkl-action-text-field">
            <button className="jkl-action-text-field__icon" onClick={onClick} aria-label={iconType} title={iconType}>
                <ActionIcon actionType={iconType} />
            </button>
            <TextField className={`jkl-action-text-field__field ${className}`} {...rest} />
        </div>
    );
};
