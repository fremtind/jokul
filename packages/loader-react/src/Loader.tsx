import React from "react";
import classNames from "classnames";

interface Props {
    textDescription: string;
    /** @deprecated */
    negative?: boolean;
    inline?: boolean;
    className?: string;
    dataTestAutoId?: string;
    politeness?: "polite" | "assertive";
}
export const Loader = ({
    textDescription,
    negative = false,
    inline = false,
    className,
    dataTestAutoId = "jkl-loader",
    politeness = "polite",
}: Props) => {
    const componentClassName = classNames("jkl-loader", className, {
        "jkl-loader--negative": negative,
        "jkl-loader--inline": inline,
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
        >
            <span className="jkl-loader__dot jkl-loader__dot--left" />
            <span className="jkl-loader__dot jkl-loader__dot--middle" />
            <span className="jkl-loader__dot jkl-loader__dot--right" />
        </span>
    );
};
