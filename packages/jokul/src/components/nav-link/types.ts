import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";
import type { WithTracking } from "../cookie-consent/types.js";

export type NavLinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            active?: boolean;
            back?: boolean;
        } & WithTracking
    >;
