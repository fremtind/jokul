import clsx from "clsx";
import React, { ReactNode, useEffect, useState } from "react";
import { Density } from "../../../core/types.js";
import { useAnimatedDetails } from "../../../hooks/useAnimatedDetails/useAnimatedDetails.js";
import { UseAnimatedHeightOptions } from "../../../hooks/useAnimatedHeight/types.js";
import { Expander, ExpanderProps } from "./Expander.js";

export interface ExpandSectionProps {
    /**
     * Innholdet som skal kunne ekspanderes og skjules.
     * Om du ikke trenger at komponenten tar seg av visning og skjuling av
     * innholdet skal du bruke `ExpandButton` direkte. Det sparer deg for
     * å laste inn unødvendige avhengigheter.
     */
    children: ReactNode;
    title: string;
    className?: string;
    density?: Density;
    onClick?: (e: React.MouseEvent<HTMLElement>, isExpanded: boolean) => void;
    expandButtonProps?: Omit<
        ExpanderProps,
        "id" | "isExpanded" | "onClick" | "hideLabel"
    >;
    useAnimatedHeightOptions?: UseAnimatedHeightOptions;
    /** Om du ønsker å styre komponenten utenfra */
    isExpanded?: boolean;
}

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 * Bruk heller komponenten `Expandable`.
 */
export const ExpandSection = ({
    children,
    className,
    expandButtonProps,
    isExpanded = false,
    density,
    onClick,
    title,
    useAnimatedHeightOptions,
    ...rest
}: ExpandSectionProps): JSX.Element => {
    const [expanded, setIsExpanded] = useState(isExpanded);

    useEffect(() => {
        setIsExpanded(isExpanded);
    }, [isExpanded]);

    const { detailsRef, summaryRef, contentRef, onSummaryClick } =
        useAnimatedDetails({
            onOpenChange: (open, e) => {
                setIsExpanded(open);
                if (onClick) {
                    onClick(e, open);
                }
            },
            isExpanded,
        });

    return (
        <details
            data-testid={"jkl-expand-section"}
            className={clsx("jkl-expand-section", className)}
            {...rest}
            ref={detailsRef}
        >
            <Expander
                as={"summary"}
                {...expandButtonProps}
                density={density}
                isExpanded={expanded}
                onClick={onSummaryClick}
                ref={summaryRef}
            >
                {title}
            </Expander>
            <div
                data-testid="jkl-expand-section__content-wrapper"
                className="jkl-expand-section__content-wrapper"
                ref={contentRef}
            >
                <div className="jkl-expand-section__content">{children}</div>
            </div>
        </details>
    );
};
