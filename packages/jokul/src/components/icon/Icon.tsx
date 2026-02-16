import clsx from "clsx";
import type { Polymorphic } from "../../utilities/index.js";

export type IconProps = {
    /**
     * Angir om ikonet skal vises i fet versjon
     * @default false
     */
    bold?: boolean;
    filled?: boolean;
    className?: string;
    style?: React.CSSProperties;
};

export type IconComponent = <T extends "span" | "div" = "span">(
    props: Polymorphic<IconProps, T>,
) => React.JSX.Element;

export function Icon<T extends "span" | "div" = "span">(
    props: Polymorphic<IconProps, T>,
): React.JSX.Element {
    const { bold, children, className, filled, ref, ...iconProps } = props;

    return (
        <span
            aria-hidden
            ref={ref}
            className={clsx("jkl-icon", className, {
                "jkl-icon--filled": filled,
                "jkl-icon--bold": bold,
            })}
            {...iconProps}
        >
            {children}
        </span>
    );
}
