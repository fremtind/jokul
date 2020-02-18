import React, { HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export const PageTitle = ({ children, ...rest }: HeadingProps) => (
    <h1 className="jkl-title-large jkl-portal-page-title" {...rest}>
        {children}
    </h1>
);

export const HeadingLarge = ({ children, ...rest }: HeadingProps) => (
    <h2 className="jkl-heading-large jkl-portal-heading-large" {...rest}>
        {children}
    </h2>
);

export const HeadingMedium = ({ children, ...rest }: HeadingProps) => (
    <h3 className="jkl-heading-medium jkl-portal-heading-medium" {...rest}>
        {children}
    </h3>
);

export const HeadingSmall = ({ children, ...rest }: HeadingProps) => (
    <h4 className="jkl-heading-small jkl-portal-heading-small" {...rest}>
        {children}
    </h4>
);

export const HeadingXS = ({ children, ...rest }: HeadingProps) => (
    <h5 className="jkl-micro jkl-portal-heading-xs" {...rest}>
        {children}
    </h5>
);

export const Paragraph = ({ children, ...rest }: ParagraphProps) => (
    <p className="jkl-body jkl-portal-paragraph" {...rest}>
        {children}
    </p>
);
