import React from "react";
import classNames from "classnames";

export type LoaderVariant = "small" | "medium" | "large";

interface Props {
    variant?: LoaderVariant;
    textDescription: string;
    /** @deprecated */
    negative?: boolean;
    className?: string;
    dataTestAutoId?: string;
    politeness?: "polite" | "assertive";
}
export const Loader = ({
    variant = "large",
    textDescription,
    negative = false,
    className,
    dataTestAutoId = "jkl-loader",
    politeness = "polite",
    ...rest
}: Props) => {
    const componentClassName = classNames("jkl-loader", className, {
        "jkl-loader--negative": negative,
        "jkl-loader--medium": variant === "medium",
        "jkl-loader--small": variant === "small",
    });

    return (
        <span
            className={componentClassName}
            data-testid="jkl-loader"
            data-testautoid={dataTestAutoId}
            title={textDescription}
            aria-label={textDescription}
            role="alert"
            aria-busy="true"
            aria-live={politeness}
            {...rest}
        >
            <span className="jkl-loader__dot jkl-loader__dot--left" />
            <span className="jkl-loader__dot jkl-loader__dot--middle" />
            <span className="jkl-loader__dot jkl-loader__dot--right" />
        </span>
    );
};
