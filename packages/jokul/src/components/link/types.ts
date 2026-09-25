import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";
import type { WithTracking } from "../cookie-consent/types.js";

export type LinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            external?: boolean;
        } & WithTracking
    >;
