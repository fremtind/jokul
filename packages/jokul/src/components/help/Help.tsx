import clsx from "clsx";
import React, { useId } from "react";
import { Button } from "../button/index.js";
import { Icon } from "../icon/Icon.js";
import type { HelpProps } from "./types.js";

export const Help = ({
    position = "top",
    buttonText = "Hjelp",
    showButtonText = false,
    iconPosition = "left",
    className,
    children,
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
