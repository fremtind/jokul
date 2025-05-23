import clsx from "clsx";
import React, { useRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import type { LogoStampProps } from "./types.js";
import { useTextSpinner } from "./useTextSpinner.js";

export const LogoStamp = ({
    children,
    className,
    id,
    animated = false,
    title,
    ...rest
}: LogoStampProps): JSX.Element => {
    const uniqueId = useId(id || "jkl-logo-stamp", { generateSuffix: !id });
    const stampRef = useRef<SVGSVGElement>(null);
    const { hasAnimated, visible } = useTextSpinner(stampRef);

    return (
        <svg
            {...rest}
            ref={stampRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-labelledby={uniqueId}
            className={clsx("jkl-logo-stamp", className, {
                "jkl-logo-stamp--animated": animated,
            })}
            data-rotate={animated && (visible || hasAnimated)}
            role="img"
        >
            <title id={uniqueId}>
                {title || "Forsikring levert av Fremtind"}
            </title>
            <g className="jkl-logo-stamp__logo">
                <path
                    fill="currentColor"
                    d="M256 177.2L146.4 286.8l8.5 8.4 51.4-51.4 51.4 51.4 8.2-8.1-51.5-51.5 41.9-41.8L357.5 295l8.1-8.2z"
                />
            </g>
            <g className="jkl-logo-stamp__text">{children}</g>
        </svg>
    );
};
