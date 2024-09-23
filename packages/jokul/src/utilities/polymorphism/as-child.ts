import type React from "react";

export type AsChildProps =
    | {
          children: React.ReactElement | false | null;
          /**
           * Rendrer komponenten som child-elementet sitt, og slår
           * sammen egenskaper og props.
           * @example
           * ```tsx
           * <Component asChild foo="bar">
           *    <Child baz="qux" />
           * </Component>
           *
           * // Rendrer følgende:
           * <Child foo="bar" baz="qux" />
           * ```
           */
          asChild: true;
          /**
           * Du kan ikke bruke `as` sammen med `asChild`, da den uansett
           * ikke vil ha noen effekt
           */
          as?: never;
      }
    | {
          children: React.ReactNode;
          /**
           * Rendrer komponenten som child-elementet sitt, og slår
           * sammen egenskaper og props.
           * @example
           * ```tsx
           * <Component asChild foo="bar">
           *    <Child baz="qux" />
           * </Component>
           *
           * // Rendrer følgende:
           * <Child foo="bar" baz="qux" />
           * ```
           */
          asChild?: false;
      };
