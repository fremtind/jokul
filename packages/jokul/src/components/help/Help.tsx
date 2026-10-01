import clsx from "clsx";
import React, { useId } from "react";
import { Button } from "../button/index.js";
import { Icon } from "../icon/Icon.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { HelpProps } from "./types.js";

export const Help = ({
    position = "top",
    buttonText = "Hjelp",
    showButtonText = false,
    iconPosition = "left",
    className,
    children,
    tracking,
    ...rest
}: HelpProps) => {
    const helpId = useId();

    return (
        <div className={clsx("jkl-help", className)}>
            <Button
                {...rest}
                title={buttonText || rest.title}
                iconPosition={iconPosition}
                variant="ghost"
                className={"jkl-help-trigger"}
                icon={<Icon aria-hidden="true">help</Icon>}
                data-testid="jkl-help-trigger"
                data-track-component-name={COMPONENT_NAMES.Help}
                data-track-id={tracking?.id ?? buttonText}
                data-track-label={buttonText}
                data-track-position={position}
                data-track-icon-position={iconPosition}
                data-track-show-button-text={showButtonText}
                data-track-variant={undefined}
                {...getExtraTrackingAttributes(tracking?.extra)}
                // @ts-ignore
                popovertarget={`${helpId}-popover`}
            >
                {showButtonText && buttonText}
            </Button>

            <output aria-live="assertive">
                <div
                    data-position={position}
                    // @ts-ignore
                    popover="auto"
                    id={`${helpId}-popover`}
                    className="jkl-help-popover"
                >
                    {children}
                </div>
            </output>
        </div>
    );
};
