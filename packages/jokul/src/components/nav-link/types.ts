import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";
import type { Tracking } from "../types.js";

export type NavLinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            active?: boolean;
            back?: boolean;
            tracking?: Tracking;
        }
    >;
