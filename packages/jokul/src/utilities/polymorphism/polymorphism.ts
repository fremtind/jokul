type ElementTypeProp<ElementType extends React.ElementType> = {
    /**
     * Her kan du angi hva slags element komponenten skal rendres
     * som. Det kan enten være en string for native HTML elementer
     * eller en komponent (som Link fra react-router og lignende).
     */
    as?: ElementType;
};

export type PolymorphicProps<
    ElementType extends React.ElementType,
    // Vi er nødt til å defaulte til {} her for å sikre at komponenten
    // faktisk forventer props
    // biome-ignore lint/complexity/noBannedTypes:
    Props = {},
> = React.PropsWithChildren<Props & ElementTypeProp<ElementType>> &
    Omit<
        React.ComponentPropsWithoutRef<ElementType>,
        PropsToOmit<ElementType, Props>
    > &
    ElementTypeProp<ElementType>;

export type PolymorphicRef<As extends React.ElementType> =
    React.ComponentPropsWithRef<As>["ref"];

export type PolymorphicPropsWithRef<
    ElementType extends React.ElementType,
    // biome-ignore lint/complexity/noBannedTypes:
    Props = {},
> = PolymorphicProps<ElementType, Props> & {
    ref?: PolymorphicRef<ElementType>;
} & ElementTypeProp<ElementType>;

export type PolymorphicComponentPropWithRef<
    As extends React.ElementType,
    Props = object,
> = PolymorphicComponentProp<As, Props> & { ref?: PolymorphicRef<As> };

// Implementation of reusable polymorphic types
// Explaination: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
type AsProp<As extends React.ElementType> = { as?: As };
type PropsToOmit<As extends React.ElementType, P> = keyof (AsProp<As> & P);
type PolymorphicComponentProp<
    As extends React.ElementType,
    Props = object,
> = React.PropsWithChildren<Props & AsProp<As>> &
    Omit<React.ComponentPropsWithoutRef<As>, PropsToOmit<As, Props>>;

// Les https://stackoverflow.com/q/57683303
export type Expand<T> = T extends (...args: infer A) => infer R
    ? (...args: Expand<A>) => Expand<R>
    : T extends infer O
      ? { [K in keyof O]: O[K] }
      : never;
