import { clsx } from "clsx";
import React, { useId } from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { LinkProps } from "./types.js";

type LinkComponent = <ElementType extends React.ElementType = "a">(
    props: LinkProps<ElementType>,
) => React.ReactElement | null;

export const Link = React.forwardRef(function Link<
    ElementType extends React.ElementType = "a",
>(props: LinkProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        external = false,
        className = "",
        children,
        as = "a",
        tracking,
        ...rest
    } = props;
    const Component = as;

    const srId = useId();

    return (
        <Component
            ref={ref}
            className={clsx("jkl-link", className, {
                "jkl-link--external": external,
            })}
            aria-describedby={external ? srId : undefined}
            {...rest}
            {...getExtraTrackingAttributes(tracking?.extra)}
            data-track-component-name={COMPONENT_NAMES.Link}
            data-track-id={
                tracking?.id ?? (children ? String(children) : undefined)
            }
            data-track-label={children ? String(children) : undefined}
            data-track-external={external}
        >
            <span className="jkl-link__content">{children}</span>
            {(external || rest.target === "_blank") && (
                <span hidden={true} id={srId}>
                    Ekstern lenke
                </span>
            )}
        </Component>
    );
}) as LinkComponent;
