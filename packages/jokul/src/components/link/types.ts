import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";
import type { Tracking } from "../types.js";

export type LinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            external?: boolean;
            tracking?: Tracking;
        }
    >;
