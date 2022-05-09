import { useId, useIntersectionObserver } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { useRef, useState } from "react";

import { logoStampTextPaths } from "./logoStampTextPaths";

export interface LogoStampProps {
    className?: string;
    id?: string;
    /**
     * Velger hva som står i teksten rundt logostemplet. Se portalen eller Figma for oversikt.
     * @default "fraSB1ogDNB"
     */
    variant?: keyof typeof logoStampTextPaths;
    /**
     * Beskrivelse av logostempelet tilgjengelig for skjermlesere.
     * Teksten i logostempelet er en path, og ikke tilgjengelig for skjermlesere.
     * @default Tekst tilsvarende teksten i stempelvarianten du har valgt
     */
    title?: string;
    /** Roterer teksten rundt logostempelet første gangen stempelet kommer til syne */
    animated?: boolean;
}

export const LogoStamp = ({
    className,
    id,
    animated = false,
    title,
    variant = "fraSB1ogDNB",
}: LogoStampProps): JSX.Element => {
    const uniqueId = useId(id || "jkl-logo-stamp", { generateSuffix: !id });

    const stampRef = useRef<SVGSVGElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [visible, setVisible] = useState(false);

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
        const intersecting = entries.some((entry) => entry.isIntersecting);
        setVisible(intersecting);
        if (intersecting) {
            setHasAnimated(true);
        }
    };
    useIntersectionObserver(stampRef, onIntersect, () => setVisible(true), {
        rootMargin: "50% 0% 0% 0%",
        threshold: 0.5,
    });

    return (
        <svg
            ref={stampRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            aria-labelledby={uniqueId}
            className={cn("jkl-logo-stamp", className, {
                "jkl-logo-stamp--animated": animated,
            })}
            data-rotate={animated && (visible || hasAnimated)}
            role="img"
        >
            <title id={uniqueId}>{title || logoStampTextPaths[variant].title}</title>
            <g className="jkl-logo-stamp__logo">
                <path
                    fill="currentColor"
                    d="M256 177.2L146.4 286.8l8.5 8.4 51.4-51.4 51.4 51.4 8.2-8.1-51.5-51.5 41.9-41.8L357.5 295l8.1-8.2z"
                />
            </g>
            <g className="jkl-logo-stamp__text">
                <path fill="currentColor" d={logoStampTextPaths[variant].path} />
            </g>
        </svg>
    );
};
