import { WithChildren, Density } from "@fremtind/jkl-core";
import { Image, ImageProps } from "@fremtind/jkl-image-react";
import { ErrorTag, InfoTag, SuccessTag, Tag, WarningTag } from "@fremtind/jkl-tag-react";
import cn from "classnames";
import React, { ElementType, FC, AnchorHTMLAttributes } from "react";
import { PaddingOptions } from "./types";
import { getPaddingStyles } from "./utils";

export type TagType = "success" | "warning" | "info" | "error";

/**
 * Bruk denne komponenten for å legge til ekstra informasjon i NavCard.
 * Innholdet blir rendret med skillelinje, og tekststil "small"
 */
export const InfoBlock: FC<WithChildren> = ({ children }) => <div className="jkl-nav-card__info">{children}</div>;

export interface NavCardProps extends PaddingOptions, AnchorHTMLAttributes<HTMLAnchorElement> {
    tag?: {
        /**
         * @default <none> Rendres som nøytral tag
         */
        type?: TagType;
        text: string;
    };
    title: string;
    href?: string;
    to?: string;
    external?: boolean;
    description?: string;
    image?: Omit<ImageProps, "className">;
    className?: string;
    /**
     * Overstyr hvilken komponent som skal brukes, for eksempel hvis du har en Link-komponent fra en router.
     * @default "a"
     */
    component?: ElementType;
    density?: Density;
}

const getTag = (type?: TagType) => {
    switch (type) {
        case "info":
            return InfoTag;
        case "success":
            return SuccessTag;
        case "warning":
            return WarningTag;
        case "error":
            return ErrorTag;
        default:
            return Tag;
    }
};

export const NavCard: FC<NavCardProps> = React.forwardRef<HTMLAnchorElement, NavCardProps>((props, ref) => {
    const {
        component = "a",
        padding = "l",
        image,
        tag,
        title,
        external,
        description,
        children,
        className,
        density,
        ...rest
    } = props;

    const CardTag = getTag(tag?.type);
    const Component = component;

    return (
        <Component ref={ref} className={cn("jkl-nav-card", className)} data-density={density} {...rest}>
            {image && <Image className="jkl-nav-card__image" {...image} />}
            <div className="jkl-nav-card__content" style={getPaddingStyles(padding)}>
                {tag && <CardTag density={density}>{tag.text}</CardTag>}
                <div>
                    <p className={cn("jkl-nav-card__link", external ? "jkl-nav-card__link--external" : "")}>{title}</p>
                    {description && <p className="jkl-nav-card__description jkl-spacing-xs--top">{description}</p>}
                </div>
                {children}
            </div>
        </Component>
    );
});

NavCard.displayName = "NavCard";
