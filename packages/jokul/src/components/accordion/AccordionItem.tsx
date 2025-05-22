import clsx from "clsx";
import React, { type FC, useState } from "react";
import { useAnimatedDetails } from "../../hooks/useAnimatedDetails/useAnimatedDetails.js";
import { ArrowVerticalAnimated } from "../icon/icons/animated/ArrowVerticalAnimated.js";
import type { AccordionItemProps } from "./types.js";

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 * Bruk heller komponenten `Expandable.Content`.
 */
export const AccordionItem: FC<AccordionItemProps> = ({
    children,
    title,
    className,
    startExpanded = false,
    onClick,
    id,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(startExpanded);
    const [expandOnMount] = useState(() => startExpanded);

    const { detailsRef, summaryRef, contentRef, onSummaryClick } =
        useAnimatedDetails({
            onOpenChange: (open, e) => {
                setIsOpen(open);
                if (onClick) {
                    onClick(e, open);
                }
            },
            isExpanded: expandOnMount,
        });

    return (
        <details
            data-testid="jkl-accordion-item"
            {...rest}
            className={clsx("jkl-accordion-item", className)}
            ref={detailsRef}
            id={id}
        >
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: Fungerer som forventet */}
            <summary
                data-testid="jkl-accordion-item__title"
                className="jkl-accordion-item__title"
                onClick={onSummaryClick}
                ref={summaryRef}
            >
                {title}
                <ArrowVerticalAnimated
                    className="jkl-accordion-item__arrow"
                    pointingDown={!isOpen}
                    bold={isOpen}
                />
            </summary>
            <div
                data-testid="jkl-accordion-item__content-wrapper"
                className="jkl-accordion-item__content-wrapper"
                ref={contentRef}
            >
                <div className="jkl-accordion-item__content">{children}</div>
            </div>
        </details>
    );
};
