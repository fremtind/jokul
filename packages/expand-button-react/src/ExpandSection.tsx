/* There are no types for core-toggle, so we have to use ts-ignore */
// @ts-ignore: wait for nrk to supply types
import CoreToggle from "@nrk/core-toggle/jsx";
import cx from "classnames";
import React, { ReactNode, useState } from "react";
import type { UseAnimatedHeightOptions } from "@fremtind/jkl-react-hooks";
import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
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
    forceCompact?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
    onToggle?: (e: Event, isExpanded: boolean) => void;
    expandButtonProps?: Omit<ExpandButtonProps, "forceCompact" | "isExpanded" | "onClick" | "hideLabel">;
    useAnimatedHeightOptions?: UseAnimatedHeightOptions;
    /** Om du ønsker å styre komponenten utenfra */
    isExpanded?: boolean;
}

export const ExpandSection = ({
    children,
    className,
    expandButtonProps,
    isExpanded = false,
    forceCompact,
    onClick,
    onToggle,
    title,
    useAnimatedHeightOptions,
    ...rest
}: ExpandSectionProps): JSX.Element => {
    const [expanded, setIsExpanded] = useState(isExpanded);
    const [elementRef] = useAnimatedHeight(expanded, useAnimatedHeightOptions);

    const onCoreToggle = (e: Event) => {
        if (e.defaultPrevented) {
            if (onToggle) {
                onToggle(e, expanded);
            }
            return;
        }
        const nextValue = !expanded;
        setIsExpanded(nextValue);
        if (onToggle) {
            onToggle(e, nextValue);
        }
    };

    const onExpandButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // CoreToggle sin onToggle tar seg av å oppdatere vår interne state
        const nextValue = !expanded;
        if (onClick) {
            onClick(e, nextValue);
        }
    };

    return (
        <div className={cx("jkl-expand-section", className)} {...rest}>
            <ExpandButton
                {...expandButtonProps}
                forceCompact={forceCompact}
                isExpanded={expanded}
                onClick={onExpandButtonClick}
            >
                {title}
            </ExpandButton>
            <CoreToggle
                ref={elementRef}
                data-testid="jkl-expand-section__content-wrapper"
                className="jkl-expand-section__content-wrapper"
                hidden={!expanded}
                onToggle={onCoreToggle}
            >
                <div className="jkl-expand-section__content">{children}</div>
            </CoreToggle>
        </div>
    );
};
