import React, { ReactNode, MouseEventHandler } from "react";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
import classNames from "classnames";

type validButtons = "primary" | "secondary" | "tertiary";

type Action = {
    type: validButtons;
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

type Media = {
    src: string;
    alt: string;
};

type Clickable = {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
};

interface Props {
    title?: string;
    children?: ReactNode;
    className?: string;
    media?: Media;
    action?: Action;
    dark?: boolean;
    clickable?: Clickable;
}

export const Card = ({ title, children, className, media, action, dark, clickable }: Props) => {
    const componentClassName = classNames("jkl-card", className, {
        "jkl-card--dark": dark,
        "jkl-card--clickable": clickable,
    });

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
            {title && (
                <div data-testid="jkl-card__title" className="jkl-card__title jkl-h3">
                    {clickable ? (
                        <a className="jkl-card__link" href={clickable.href} onClick={clickable.onClick}>
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </div>
            )}
            <div className="jkl-card__children">{children}</div>
            {action && (
                <div className="jkl-card__action">
                    <Button onClick={action.onClick}>{action.name}</Button>
                </div>
            )}
        </div>
    );
};
