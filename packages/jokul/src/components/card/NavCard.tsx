import clsx from "clsx";
import React, { AnchorHTMLAttributes, ElementType, FC } from "react";
import { Density, WithChildren } from "../../core/types.js";
import { Image, ImageProps } from "../image/Image.js";
import { ErrorTag, InfoTag, SuccessTag, Tag, TagProps, WarningTag } from "../tag/Tag.js";
import { PaddingOptions } from "./types.js";
import { getPaddingStyles } from "./utils.js";

export type TagType = "success" | "warning" | "info" | "error";

/**
 * Bruk denne komponenten for å legge til ekstra informasjon i NavCard.
 * Innholdet blir rendret med skillelinje, og tekststil "small"
 */
export const InfoBlock: FC<WithChildren> = ({ children }) => <div className="jkl-nav-card__info">{children}</div>;

interface CardTag {
    /**
     * @default <none> Rendres som nøytral tag
     */
    type?: TagType;
    text: string;
}

export interface NavCardProps extends PaddingOptions, AnchorHTMLAttributes<HTMLAnchorElement> {
    tag?: CardTag | Array<CardTag>;
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
const NavCardTag = ({ text, type, density }: CardTag & Pick<TagProps, "density">) => {
    const CardTag = getTag(type);
    return <CardTag density={density}>{text}</CardTag>;
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

    const Component = component;

    const tagArr = !tag ? undefined : Array.isArray(tag) ? tag : [tag];

    return (
        <Component
            ref={ref}
            aria-label={title}
            className={clsx("jkl-nav-card", className)}
            data-density={density}
            {...rest}
        >
            {image && <Image className="jkl-nav-card__image" {...image} />}
            <div className="jkl-nav-card__content" style={getPaddingStyles(padding)}>
                {tagArr && (
                    <div className="jkl-nav-card__tag-wrapper">
                        {tagArr.map((t, index) => (
                            <NavCardTag type={t.type} text={t.text} key={index} />
                        ))}
                    </div>
                )}
                <div>
                    <p className={clsx("jkl-nav-card__link", external ? "jkl-nav-card__link--external" : "")}>
                        {title}
                    </p>
                    {description && <p className="jkl-nav-card__description jkl-spacing-xs--top">{description}</p>}
                </div>
                {children}
            </div>
        </Component>
    );
});

NavCard.displayName = "NavCard";
