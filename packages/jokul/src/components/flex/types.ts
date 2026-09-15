import type React from "react";
import * as tokens from "../../tokens.js";
import type {
    AsChildProps,
    PolymorphicPropsWithRef,
} from "../../utilities/index.js";

const staticSpacingTokens = tokens.default.spacing;

type Spacing = keyof typeof staticSpacingTokens;
type SpacingValue = `${Spacing}`;

export type Gap = Spacing | SpacingValue | `${SpacingValue} ${SpacingValue}`;

type FlexBaseProps = {
    alignItems?: "normal" | "start" | "center" | "end" | "baseline" | "stretch";
    alignContent?:
        | "normal"
        | "start"
        | "center"
        | "end"
        | "stretch"
        | "baseline"
        | "space-between"
        | "space-around"
        | "space-evenly";
    direction?: "row" | "row-reverse" | "column" | "column-reverse";
    gap?: Gap;
    justifyContent?:
        | "normal"
        | "start"
        | "center"
        | "end"
        | "space-between"
        | "space-around"
        | "space-evenly";
    /**
     * Om elementene skal brytes over flere linjer.
     * `true`/`false` setter `wrap`/`nowrap`, `"reverse"` som kortform for
     * `"wrap-reverse"`.
     */
    wrap?: boolean | "wrap" | "nowrap" | "reverse";
};

export type FlexProps<As extends React.ElementType = "div"> =
    PolymorphicPropsWithRef<As, FlexBaseProps> & AsChildProps;

// Nødvendig for å fortelle TypeScript at dette ikke returnerer ReactNode, men JSX.Element
export type FlexComponent = <ElementType extends React.ElementType = "div">(
    props: FlexProps<ElementType>,
) => React.ReactElement | null;
