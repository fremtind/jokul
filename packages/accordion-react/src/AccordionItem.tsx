import { WithChildren } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import { useAnimatedDetails } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { FC, useState } from "react";

export interface AccordionItemProps extends WithChildren {
    title: string;
    startExpanded?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent, isOpen: boolean) => void;
    id?: string;
}

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
            className={cn("jkl-accordion-item", className)}
            ref={detailsRef}
            id={id}
        >
            <summary
                data-testid="jkl-accordion-item__title"
                className="jkl-accordion-item__title"
                onClick={onSummaryClick}
                ref={summaryRef}
            >
                {title}
                <ArrowVerticalAnimated
                    variant="inherit"
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
