import React, { BaseHTMLAttributes } from "react";

type ValidSemanticHeaders = "h1" | "h2" | "h3" | "h4";
type ValidSemanticTexts = "p";
type ValidModifiers = "lead" | "small";
type ValidSemanticElement = ValidSemanticHeaders | ValidSemanticTexts;

interface Props extends BaseHTMLAttributes<HTMLElement> {
    styledAs?: ValidSemanticHeaders;
}

function makeTypographyComponent(variant: ValidSemanticElement, modifier?: ValidModifiers) {
    return function typography(props: Props) {
        const { children, className = "", styledAs, ...rest } = props;
        const Element = variant;
        const elementStyle = styledAs || variant;

        return (
            <Element className={`jkl-${modifier || elementStyle} ${className}`} {...rest}>
                {children}
            </Element>
        );
    };
}

export const H1 = makeTypographyComponent("h1");
export const H2 = makeTypographyComponent("h2");
export const H3 = makeTypographyComponent("h3");
export const H4 = makeTypographyComponent("h4");
export const LeadParagraph = makeTypographyComponent("p", "lead");
export const P = makeTypographyComponent("p");
export const SmallText = makeTypographyComponent("p", "small");
