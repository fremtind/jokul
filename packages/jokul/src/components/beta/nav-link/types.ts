import React from "react";
import type { PolymorphicPropsWithRef } from "../../../utilities/index.js";

export type NavLinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            title: string;
            description?: string;
            /**
             * Gir lenken transparent bakgrunn og en ramme.
             * @default false
             */
            outlined?: boolean;
        }
    >;
