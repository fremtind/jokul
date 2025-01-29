import { clsx } from "clsx";
import React, { type ComponentPropsWithRef } from "react";

export type ButtonGroupProps = {
    /**
     * Tvinger knappene til å vises over hverandre, i full bredde
     * @default false
     */
    stacked?: boolean;
} & ComponentPropsWithRef<"div">;

// TODO: Denne burde kanskje være polymorf, og i hvert fall types bedre
export const ButtonGroup = ({
    className,
    children,
    stacked = false,
    ...props
}: ButtonGroupProps): JSX.Element => (
    <div
        data-stacked={stacked}
        className={clsx("jkl-button-group", className)}
        {...props}
    >
        {children}
    </div>
);
