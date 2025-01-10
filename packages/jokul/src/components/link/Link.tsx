import { clsx } from "clsx";
import React, { useId } from "react";
import {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/polymorphism/polymorphism.js";
import { OpenInNewIcon } from "../icon/icons/OpenInNewIcon.js";

export type LinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            external?: boolean;
        }
    >;

export type LinkComponent = <ElementType extends React.ElementType = "a">(
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
                <OpenInNewIcon variant="small" />
            )}
            {external && (
                <span hidden={true} id={srId}>
                    Ekstern lenke
                </span>
            )}
        </Component>
    );
});
