import React, { useState, ChangeEvent, MouseEventHandler, CSSProperties } from "react";
import nanoid from "nanoid";
import classNames from "classnames";
import { LabelVariant } from "@fremtind/jkl-core";
import { Label, SupportLabel } from "@fremtind/jkl-typography-react";
import { ActionIcon, IconVariant } from "./ActionIcon";

export interface Action {
    icon: IconVariant;
    label: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

interface Props {
    className?: string;
    label: string;
    helpLabel?: string;
    errorLabel?: string;
    variant?: LabelVariant;
    inline?: boolean;
    inverted?: boolean;
    forceCompact?: boolean;
    action?: Action;
    maxLength?: number;
    width?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export function TextInput({
    className,
    label,
    helpLabel,
    errorLabel,
    variant = "medium",
    inline,
    inverted,
    forceCompact,
    action,
    maxLength,
    width,
    ...inputProps
}: Props) {
    const [id] = useState(`jkl-text-input-${nanoid(8)}`);
    const [supportId] = useState(`jkl-support-label-${nanoid(8)}`);
    const describedBy = helpLabel || errorLabel ? supportId : undefined;
    const componentClassName = classNames(
        {
            "jkl-text-input": true,
            "jkl-text-input--inline": inline,
            "jkl-text-input--inverted": inverted,
            "jkl-text-input--compact": forceCompact,
            "jkl-text-input--action": action,
        },
        className,
    );
    return (
        <div className={componentClassName}>
            <Label forceCompact={forceCompact} standAlone srOnly={inline} htmlFor={id} variant={variant}>
                {label}
            </Label>
            <div className="jkl-text-input__input-wrapper">
                <input
                    id={id}
                    aria-describedby={describedBy}
                    aria-invalid={!!errorLabel}
                    type="text"
                    className="jkl-text-input__input"
                    maxLength={maxLength}
                    style={getWidthAsStyle(width, maxLength)}
                    {...inputProps}
                />
                {action && <ActionButton {...action} />}
            </div>
            <SupportLabel id={supportId} helpLabel={helpLabel} errorLabel={errorLabel} srOnly={inline} />
        </div>
    );
}

function ActionButton({ label, icon, onClick }: Action) {
    return (
        <button
            type="button"
            className="jkl-text-input__action-button"
            onClick={onClick}
            aria-label={label}
            title={label}
        >
            <ActionIcon className="jkl-text-input__action-icon" action={icon} />
        </button>
    );
}

function getWidthAsStyle(width?: string, maxLength?: number): CSSProperties | undefined {
    if (width) {
        return { width }; // prioritize width prop
    }

    if (maxLength) {
        // adapt to maxLength, but capped at 40ch
        const length = Math.min(maxLength, 40);
        return { width: `${length}ch` };
    }

    return undefined;
}
