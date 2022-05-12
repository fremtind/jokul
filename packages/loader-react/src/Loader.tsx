import React, { AriaRole } from "react";
import classNames from "classnames";
import { useDelayedRender } from "./useDelayedRender";

export type LoaderVariant = "small" | "medium" | "large";

export interface LoaderProps {
    variant?: LoaderVariant;
    textDescription: string;
    className?: string;
    dataTestAutoId?: string;
    politeness?: "polite" | "assertive";
    role?: AriaRole;
    inline?: boolean;
    /**
     * Antall millisekunder komponenten vil vente før den rendrer
     * @default 0
     */
    delay?: number;
}

export const Loader = ({
    delay = 0,
    variant = "large",
    textDescription,
    className,
    dataTestAutoId = "jkl-loader",
    politeness = "polite",
    inline = false,
    ...rest
}: LoaderProps): JSX.Element | null => {
    const [renderComponent] = useDelayedRender(delay);

    if (delay && !renderComponent) {
        return null;
    }

    const componentClassName = classNames("jkl-loader", className, {
        "jkl-loader--medium": variant === "medium",
        "jkl-loader--small": variant === "small",
        "jkl-loader--inline": inline,
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
