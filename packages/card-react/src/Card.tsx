import { Button, type ButtonVariant } from "@fremtind/jkl-button-react";
import { WithOptionalChildren } from "@fremtind/jkl-core";
import clsx from "clsx";
import React, { MouseEventHandler, FC } from "react";

type Action = {
    type: ButtonVariant;
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

interface Props extends WithOptionalChildren {
    title?: string;
    className?: string;
    media?: Media;
    action?: Action;
    dark?: boolean;
    clickable?: Clickable;
}

/**
 * @deprecated bruk NavCard, TaskCard eller InfoCard i stedet.
 * Se https://jokul.fremtind.no/komponenter/card for informasjon om bruk
 */
export const Card: FC<Props> = ({ title, children, className, media, action, dark, clickable }) => {
    const componentClassName = clsx("jkl-card", className, {
        "jkl-card--dark": dark,
        "jkl-card--clickable": clickable,
    });

    return (
        <div data-testid="jkl-card" className={componentClassName}>
            {media && (
                <img className="jkl-card__media" src={media.src} alt={media.alt} loading="lazy" decoding="async"></img>
            )}
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
                    <Button variant={action.type || "primary"} onClick={action.onClick}>
                        {action.name}
                    </Button>
                </div>
            )}
        </div>
    );
};
