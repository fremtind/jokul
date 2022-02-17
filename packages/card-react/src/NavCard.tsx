import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";
import { ErrorTag, InfoTag, SuccessTag, Tag, WarningTag } from "@fremtind/jkl-tag-react";
import { Image } from "@fremtind/jkl-image-react";
import { PaddingOptions } from "./types";
import { getSpacingClasses } from "./utils";

// TODO: Eksporter typer fra Image-komponenten
type ImageProps = React.ComponentProps<typeof Image>;

export type TagType = "success" | "warning" | "info" | "error";

/**
 * Bruk denne komponenten for å legge til ekstra informasjon i NavCard.
 * Innholdet blir rendret med skillelinje, og tekststil "small"
 */
export const InfoBlock: FC = ({ children }) => <div className="jkl-nav-card__info">{children}</div>;

export interface NavCardProps extends PaddingOptions, HTMLAttributes<HTMLAnchorElement> {
    tag?: {
        /**
         * @default <none> Rendres som nøytral tag
         */
        type?: TagType;
        text: string;
    };
    title: string;
    href: string;
    description?: string;
    image?: Omit<ImageProps, "className">;
    className?: string;
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

export const NavCard: FC<NavCardProps> = React.forwardRef<HTMLAnchorElement, NavCardProps>(
    ({ padding = "l", image, tag, title, description, children, className, ...anchorProps }, ref) => {
        const CardTag = getTag(tag?.type);

        return (
            <a ref={ref} className={cn("jkl-nav-card", className)} {...anchorProps}>
                {image && <Image className="jkl-nav-card__image" {...image} />}
                <div className={cn("jkl-nav-card__content", getSpacingClasses(padding))}>
                    {tag && <CardTag>{tag.text}</CardTag>}
                    <div>
                        <p className="jkl-nav-link jkl-nav-card__link">{title}</p>
                        {description && <p className="jkl-nav-card__description jkl-spacing-xs--top">{description}</p>}
                    </div>
                    {children}
                </div>
            </a>
        );
    },
);
NavCard.displayName = "NavCard";
