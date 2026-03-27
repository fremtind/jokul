import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type LinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            external?: boolean;
        }
    >;
