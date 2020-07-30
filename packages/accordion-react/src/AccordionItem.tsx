/* There are no types for core-toggle, so we have to use ts-ignore
Hopefully someone (us?) will write types for it sometime soon */
// @ts-ignore: wait for nrk to supply types
import CoreToggle from "@nrk/core-toggle/jsx";
import React, { ReactNode, useState } from "react";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import classNames from "classnames";

interface Props {
    title: string;
    children: ReactNode;
    startExpanded?: boolean;
    className?: string;
}

export function AccordionItem({ children, title, className, startExpanded = false }: Props) {
    const [isOpen, setIsOpen] = useState(startExpanded);
    const [elementRef] = useAnimatedHeight(isOpen);
    const componentClassName = classNames("jkl-accordion-item", className, {
        "jkl-accordion-item--expanded": isOpen,
    });

    const onToggle = () => setIsOpen(!isOpen);

    return (
        <div data-testid="jkl-accordion-item" className={componentClassName}>
            <button className="jkl-accordion-item__title" type="button">
                <span className="jkl-accordion-item__title-text">{title}</span>
                <span className="jkl-accordion-item__title-icon" />
            </button>
            <CoreToggle
                ref={elementRef}
                data-testid="jkl-accordion-item__content-wrapper"
                className="jkl-accordion-item__content-wrapper"
                hidden={!isOpen}
                onToggle={onToggle}
            >
                <div className="jkl-accordion-item__content">{children}</div>
            </CoreToggle>
        </div>
    );
}
