import { Density } from "@fremtind/jkl-core";
import { UseAnimatedHeightOptions, useId, useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cx from "classnames";
import React, { ReactNode, useEffect, useState } from "react";
import type { ExpandButtonProps } from "./ExpandButton";
import { ExpandButton } from "./ExpandButton";

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
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
    expandButtonProps?: Omit<ExpandButtonProps, "id" | "isExpanded" | "onClick" | "hideLabel">;
    useAnimatedHeightOptions?: UseAnimatedHeightOptions;
    /** Om du ønsker å styre komponenten utenfra */
    isExpanded?: boolean;
}

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
    const buttonId = useId("button");
    const contentId = useId("content");
    const [expanded, setIsExpanded] = useState(isExpanded);
    const [elementRef] = useAnimatedHeight<HTMLDivElement>(expanded, useAnimatedHeightOptions);

    useEffect(() => {
        setIsExpanded(isExpanded);
    }, [isExpanded]);

    const onExpandButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const nextValue = !expanded;
        setIsExpanded(nextValue);
        if (onClick) {
            onClick(e, nextValue);
        }
    };

    return (
        <details
            open={isExpanded ? true : undefined}
            className={cx("jkl-expand-section", className)}
            data-testid="jkl-expand-section__wrapper"
            {...rest}
        >
            <ExpandButton
                as={"summary"}
                {...expandButtonProps}
                id={buttonId}
                aria-controls={contentId}
                density={density}
                isExpanded={expanded}
                onClick={onExpandButtonClick}
            >
                {title}
            </ExpandButton>
            <div
                id={contentId}
                ref={elementRef}
                className="jkl-expand-section__content-wrapper"
                role="group"
                aria-labelledby={buttonId}
            >
                <div className="jkl-expand-section__content">{children}</div>
            </div>
        </details>
    );
};
