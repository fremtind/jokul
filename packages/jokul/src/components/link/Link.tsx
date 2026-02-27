import { clsx } from "clsx";
import React, { useId } from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import type { LinkElementType, LinkProps } from "./types.js";

type LinkComponent = <ElementType extends LinkElementType = "a">(
    props: LinkProps<ElementType>,
) => React.ReactElement | null;

export const Link = React.forwardRef(function Link<
    ElementType extends LinkElementType = "a",
>(props: LinkProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        external = false,
        className = "",
        children,
        as = "a",
        ...rest
    } = props;
    const Component = typeof as === "string" && as !== "a" ? "a" : as;

    const srId = useId();

    return (
        <Component
            ref={ref}
            className={clsx("jkl-link", className, {
                "jkl-link--external": external,
            })}
            aria-describedby={external ? srId : undefined}
            {...rest}
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
