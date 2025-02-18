import { clsx } from "clsx";
import React, { useId } from "react";
import { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { OpenInNewIcon } from "../icon/icons/OpenInNewIcon.js";
import { LinkProps } from "./types.js";

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
        ...rest
    } = props;
    const Component = as;

    const srId = useId();

    return (
        <Component
            ref={ref}
            className={clsx("jkl-link", className, {})}
            aria-describedby={external ? srId : undefined}
            {...rest}
        >
            <span className="jkl-link__content">{children}</span>
            {(external || rest.target === "_blank") && (
                <OpenInNewIcon variant="small" className="jkl-link__icon" />
            )}
            {external && (
                <span hidden={true} id={srId}>
                    Ekstern lenke
                </span>
            )}
        </Component>
    );
}) as LinkComponent;
