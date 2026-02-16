import { clsx } from "clsx";
import { type ElementType, useId } from "react";
import type { Polymorphic } from "../../utilities/index.js";

export type LinkProps = {
    external?: boolean;
};

export function Link<T extends ElementType = "a">(
    props: Polymorphic<LinkProps, T>,
) {
    const {
        external = false,
        className = "",
        children,
        as = "a",
        ref,
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
        >
            <span className="jkl-link__content">{children}</span>
            {(external || rest.target === "_blank") && (
                <span hidden={true} id={srId}>
                    Ekstern lenke
                </span>
            )}
        </Component>
    );
}
