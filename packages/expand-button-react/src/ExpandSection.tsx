import { Density } from "@fremtind/jkl-core";
import {
    UseAnimatedHeightOptions,
    useAnimatedDetails,
} from "@fremtind/jkl-react-hooks";
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
    onClick?: (e: React.MouseEvent<HTMLElement>, isExpanded: boolean) => void;
    expandButtonProps?: Omit<
        ExpandButtonProps,
        "id" | "isExpanded" | "onClick" | "hideLabel"
    >;
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
            className={cx("jkl-expand-section", className)}
            {...rest}
            ref={detailsRef}
        >
            <ExpandButton
                as={"summary"}
                {...expandButtonProps}
                density={density}
                isExpanded={expanded}
                onClick={onSummaryClick}
                ref={summaryRef}
            >
                {title}
            </ExpandButton>
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
