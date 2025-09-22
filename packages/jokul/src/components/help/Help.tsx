import clsx from "clsx";
import React from "react";
import { Button } from "../button/index.js";
import { Icon } from "../icon/Icon.js";
import type { HelpProps } from "./types.js";

export const BETA_Help = ({
    position = "top",
    buttonText = "Hjelp",
    showButtonText = false,
    iconPosition = "left",
    children,
    ...rest
}: HelpProps) => {
    return (
        <>
            <Button
                {...rest}
                title={buttonText || rest.title}
                iconPosition={iconPosition}
                variant="ghost"
                className={clsx("jkl-help--trigger", rest.className)}
                icon={<Icon aria-hidden="true">help</Icon>}
                data-testid="jkl-help-trigger"
                // @ts-ignore
                popovertarget={`${buttonText}-popover`}
                // @ts-ignore
                style={{ anchorName: `${buttonText}-popover` }}
            >
                {showButtonText && buttonText}
            </Button>

            <output aria-live="assertive">
                <div
                    data-position={position}
                    data-theme="dark"
                    popover="auto"
                    id={`${buttonText}-popover`}
                    className="jkl-help--popover"
                    // @ts-ignore
                    style={{ positionAnchor: `${buttonText}-popover` }}
                >
                    {children}
                </div>
            </output>
        </>
    );
};
