import React, { type FC } from "react";
import { Button } from "../button/index.js";
import { Icon } from "../icon/Icon.jsx";
import type { TooltipButtonProps } from "./types.js";

export const TooltipButton: FC<TooltipButtonProps> = (props: TooltipButtonProps) => {
    const {
        title,
        content,
        popover = "auto",
        position = "bottom",
        ...rest
    } = props;

    return (
        <>
            <Button
                {...rest}
                title={title}
                aria-label={title}
                variant="ghost"
                className="jkl-popuptip--trigger"
                data-testid="jkl-popuptip-trigger"
                icon={<Icon aria-hidden="true">help</Icon>}
                popovertarget={`${title}-popover`}
                // @ts-ignore
                style={{ anchorName: `${title}-popover` }}
            />

            <output aria-live="assertive">
                <div
                    data-theme="dark"
                    popover={popover}
                    id={`${title}-popover`}
                    data-position={position}
                    className="jkl-popuptip--popup"
                    // @ts-ignore
                    style={{ positionAnchor: `${title}-popover` }}
                >
                    <header>
                        <p className="title">{title}</p>
                        <Button
                            tabIndex={-1}
                            title="Lukk"
                            aria-label="Lukk dialogen"
                            variant="ghost"
                            icon={<Icon aria-hidden="true">close</Icon>}
                            // @ts-ignore
                            popovertarget={`${title}-popover`}
                            popovertargetaction="hide"
                        />
                    </header>

                    {/* biome-ignore lint/a11y/noNoninteractiveTabindex: */}
                    <div className="jkl-popuptip__content-wrapper" tabIndex={0}>
                        {content}
                    </div>
                </div>
            </output>
        </>
    );
};
