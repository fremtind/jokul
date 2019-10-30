import React, { MouseEventHandler } from "react";
import { TextField } from "./TextField";
import { ActionIcon, IconVariant } from "./ActionIcon";
import { TextInputProps } from "./index";

interface Props extends TextInputProps {
    action: IconVariant;
    onClick: MouseEventHandler<HTMLButtonElement>;
    description: string;
    helpLabel?: string;
    errorLabel?: string;
}

export const ActionTextField = ({ action, onClick, description, ...rest }: Props) => {
    return (
        <div className="jkl-text-field--action">
            <button
                type="button"
                className="jkl-text-field__icon"
                onClick={onClick}
                aria-label={description}
                title={description}
            >
                <ActionIcon forceCompact action={action} />
            </button>
            <TextField {...rest} />
        </div>
    );
};
