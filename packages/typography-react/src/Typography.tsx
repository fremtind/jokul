import React, { HTMLAttributes } from "react";

type ValidSemanticHeaders = "h1" | "h2" | "h3" | "h4" | "h5";
type ValidSemanticBlocks = "p";
type ValidModifiers = "lead" | "small" | "micro" | "body";
type ValidSemanticElement = ValidSemanticHeaders | ValidSemanticBlocks;

type Props = HTMLAttributes<HTMLHeadingElement> | HTMLAttributes<HTMLParagraphElement>;

function makeTypographyComponent(variant: ValidSemanticElement, textStyle: string, modifier?: ValidModifiers) {
    return function typography({ children, className, ...rest }: Props) {
        const tagName = (modifier || variant).replace(/^\w/, (c) => c.toUpperCase());
        if (process.env.NODE_ENV === "development") {
            console.warn(
                `ATTENTION! The typographic components in jkl-core, like "${tagName}", are deprecated. Please stop using them and start using typographic CSS classes or the jkl-text-style Sass mixin instead. Refer to the documentation for more info.`,
            );
        }
        const Element = variant;

        return (
            <Element className={`${textStyle} ${className || ""}`} {...rest}>
                {children}
            </Element>
        );
    };
}

export const H1 = makeTypographyComponent("h1", "jkl-title-large");
export const H2 = makeTypographyComponent("h2", "jkl-title-small");
export const H3 = makeTypographyComponent("h3", "jkl-heading-large");
export const H4 = makeTypographyComponent("h4", "jkl-heading-medium");
export const H5 = makeTypographyComponent("h5", "jkl-heading-small");
export const Lead = makeTypographyComponent("p", "jkl-lead", "lead");
export const Body = makeTypographyComponent("p", "jkl-body", "body");
export const Small = makeTypographyComponent("p", "jkl-small", "small");
export const Micro = makeTypographyComponent("p", "jkl-micro", "micro");
