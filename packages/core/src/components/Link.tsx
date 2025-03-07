import cn from "classnames";
import React, { useId } from "react";
import { PolymorphicPropsWithRef, PolymorphicRef } from "../polymorphism";

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
            className={cn("jkl-link", className, {
                "jkl-link--external": external,
            })}
            aria-describedby={external ? srId : undefined}
            {...rest}
        >
            <span className="jkl-link__content">{children}</span>
            {(external || rest.target === "_blank") && (
                <>
                    {/* This corresponds with OpenInNewIcon from icon-react package */}
                    <span
                        aria-hidden
                        ref={ref}
                        className={cn(
                            "jkl-icon",
                            `jkl-icon--small`,
                            "jkl-link__icon",
                        )}
                    >
                        {"\ue89e"}
                    </span>
                </>
            )}
            {external && (
                <span hidden={true} id={srId}>
                    Ekstern lenke
                </span>
            )}
        </Component>
    );
});
