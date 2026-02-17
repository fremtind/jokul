import { clsx } from "clsx";
import type { ElementType } from "react";
import type { Polymorphic } from "../../utilities/index.js";
import { ArrowRightIcon } from "../icon/icons/ArrowRightIcon.js";
import { ArrowLeftIcon } from "../icon/index.js";

export type NavLinkProps = {
    active?: boolean;
    back?: boolean;
};

export function NavLink<T extends ElementType = "a">(
    props: Polymorphic<NavLinkProps, T>,
) {
    const {
        active = false,
        back = false,
        className,
        children,
        ref,
        as = "a",
        ...rest
    } = props;
    const Component = as;

    return (
        <Component
            ref={ref}
            className={clsx(
                "jkl-nav-link",
                {
                    "jkl-nav-link--active": active,
                    "jkl-nav-link--back": back,
                },
                className,
            )}
            {...rest}
        >
            {back && <ArrowLeftIcon className="jkl-nav-link__icon" />}
            {children}
            {!back && <ArrowRightIcon className="jkl-nav-link__icon" />}
        </Component>
    );
}
