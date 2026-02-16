import type { ComponentPropsWithRef, ElementType } from "react";

export type Polymorphic<
    // biome-ignore lint/complexity/noBannedTypes:
    Props = {},
    DefaultElement extends ElementType = "div",
> = {
    as?: DefaultElement;
} & Props &
    // Ta med alle attributtene til komponenten/elementet vi vil rendre,
    // men utelat eventuelle egenskaper satt i Props, samt "as" som ellers
    // vil bli behandlet som typen any av Typescript.
    Omit<ComponentPropsWithRef<DefaultElement>, "as" | keyof Props>;
