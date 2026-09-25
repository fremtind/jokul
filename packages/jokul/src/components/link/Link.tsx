import { clsx } from "clsx";
import React, { useId } from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
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
            // Merker lenken for Mixpanels `autocapture` så lenkeklikk kan
            // spores via `data-jkl-*` når Mixpanel er initialisert. Uten
            // samtykke/token er attributtene helt inerte.
            data-jkl-tracked="Link"
            data-jkl-variant={external ? "external" : undefined}
            data-jkl-tracking={tracking ? JSON.stringify(tracking) : undefined}
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
