import React, { VFC } from "react";
import classNames from "classnames";

export type LoaderVariant = "small" | "medium" | "large";

interface Props {
    variant?: LoaderVariant;
    textDescription: string;
    className?: string;
    dataTestAutoId?: string;
    politeness?: "polite" | "assertive";
}
export const Loader: VFC<Props> = ({
    variant = "large",
    textDescription,
    className,
    dataTestAutoId = "jkl-loader",
    politeness = "polite",
    ...rest
}) => {
    const componentClassName = classNames("jkl-loader", className, {
        "jkl-loader--medium": variant === "medium",
        "jkl-loader--small": variant === "small",
    });

    return (
        <span
            aria-busy="true"
            aria-label={textDescription}
            aria-live={politeness}
            className={componentClassName}
            data-testautoid={dataTestAutoId}
            data-testid="jkl-loader"
            role="alert"
            title={textDescription}
            {...rest}
        >
            <span className="jkl-loader__dot jkl-loader__dot--left" />
            <span className="jkl-loader__dot jkl-loader__dot--middle" />
            <span className="jkl-loader__dot jkl-loader__dot--right" />
        </span>
    );
};
