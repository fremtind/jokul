import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

type LinkComponentElementType = Exclude<
    React.ElementType,
    keyof React.JSX.IntrinsicElements
>;

export type LinkElementType = "a" | LinkComponentElementType;

export type LinkProps<ElementType extends LinkElementType = "a"> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            external?: boolean;
        }
    >;
