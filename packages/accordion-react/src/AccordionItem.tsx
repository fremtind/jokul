import { WithChildren } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import { useAnimatedHeight, useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { FC, useState } from "react";

export interface AccordionItemProps extends WithChildren {
    title: string;
    startExpanded?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent, isOpen: boolean) => void;
}

export const AccordionItem: FC<AccordionItemProps> = ({
    children,
    title,
    className,
    startExpanded = false,
    onClick,
    ...rest
}) => {
    const buttonId = useId("title");
    const contentId = useId("content");
    const [isOpen, setIsOpen] = useState(startExpanded);
    const [elementRef] = useAnimatedHeight<HTMLDivElement>(isOpen, {
        easing: "exit",
        timing: "expressive",
    });

    return (
        <div
            data-testid="jkl-accordion-item"
            {...rest}
            className={cn("jkl-accordion-item", className, {
                "jkl-accordion-item--expanded": isOpen,
            })}
        >
            <button
                id={buttonId}
                className="jkl-accordion-item__title"
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={(e) => {
                    const nextValue = !isOpen;
                    setIsOpen(nextValue);
                    if (onClick) {
                        onClick(e, nextValue);
                    }
                }}
            >
                {title}
                <ArrowVerticalAnimated
                    variant="medium"
                    className="jkl-accordion-item__arrow"
                    pointingDown={!isOpen}
                    bold={isOpen}
                />
            </button>
            <div
                id={contentId}
                ref={elementRef}
                data-testid="jkl-accordion-item__content-wrapper"
                className="jkl-accordion-item__content-wrapper"
                role="group"
                aria-labelledby={buttonId}
                hidden={!isOpen}
            >
                <div className="jkl-accordion-item__content">{children}</div>
            </div>
        </div>
    );
};
