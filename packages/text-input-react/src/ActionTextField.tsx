import React, { MouseEventHandler } from "react";
import { ActionIcon, IconVariant } from "./ActionIcon";
import { TextInputProps } from "./index";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { getWidthAsStyle } from "./index";

interface Props extends TextInputProps {
    action: IconVariant;
    onClick: MouseEventHandler<HTMLButtonElement>;
    helpLabel?: string;
    errorLabel?: string;
    type?: string;
}

export const ActionTextField = ({
    action,
    onClick,
    forceCompact,
    className,
    helpLabel,
    errorLabel,
    variant,
    label,
    type,
    id,
    placeholder,
    readOnly,
    value,
    maxLength,
    width,
    ...rest
}: Props) => {
    const componentClassName = "jkl-text-field jkl-text-field--action".concat(
        forceCompact ? " jkl-text-field--compact" : "",
        className ? ` ${className}` : "",
    );

    const style = getWidthAsStyle(width, maxLength);

    return (
        <label data-testid="jkl-text-field" className={componentClassName}>
            <Label variant={variant} forceCompact={forceCompact}>
                {label}
            </Label>
            <div className="jkl-text-field__input-wrapper">
                <input
                    type={type}
                    aria-invalid={!!errorLabel}
                    className="jkl-text-field__input"
                    id={id}
                    placeholder={placeholder}
                    readOnly={readOnly}
                    value={value}
                    maxLength={maxLength}
                    style={style}
                    {...rest}
                />
                <button
                    type="button"
                    className="jkl-text-field__action-button"
                    onClick={onClick}
                    aria-label={action}
                    title={action}
                >
                    <ActionIcon className="jkl-text-field__action-icon" action={action} />
                </button>
            </div>
            <SupportLabel helpLabel={helpLabel} errorLabel={errorLabel} forceCompact={forceCompact} />
        </label>
    );
};
