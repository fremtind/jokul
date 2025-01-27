import { clsx } from "clsx";
import type { ComponentPropsWithRef } from "react";

// TODO: Denne burde kanskje være polymorf, og i hvert fall types bedre
export const ButtonGroup = ({
    className,
    children,
    ...props
}: ComponentPropsWithRef<"div">): JSX.Element => (
    <div className={clsx("jkl-button-group", className)} {...props}>
        {children}
    </div>
);
