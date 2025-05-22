import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type NavLinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            active?: boolean;
            back?: boolean;
        }
    >;
