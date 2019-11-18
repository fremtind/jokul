import React, { ReactNode, MouseEventHandler } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";

export type validButtons = "primary" | "secondary" | "tertiary";

export type Action = {
    type: validButtons;
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

type Media = {
    src: string;
    alt: string;
};

interface Props {
    title: string;
    children?: ReactNode;
    className?: string;
    media?: Media;
    action?: Action;
    dark?: boolean;
}

export const Card = ({ title, children, className, media, action, dark }: Props) => {
    const componentClassName = "jkl-card".concat(dark ? " jkl-card--dark" : "", className ? ` ${className}` : "");

    let Button = PrimaryButton;
    if (action) {
        switch (action.type) {
            case "secondary":
                Button = SecondaryButton;
                break;
            case "tertiary":
                Button = TertiaryButton;
                break;
            default:
                break;
        }
    }

    return (
        <div data-testid="jkl-card" className={componentClassName}>
            {media && <img className="jkl-card__media" src={media.src} alt={media.alt}></img>}
            <div className="jkl-card__title jkl-h3">{title}</div>
            <div className="jkl-card__children">{children}</div>
            {action && (
                <div className="jkl-card__action">
                    <Button onClick={action.onClick}>{action.name}</Button>
                </div>
            )}
        </div>
    );
};
