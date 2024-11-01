type ElementTypeProp<ElementType extends React.ElementType> = {
    as?: ElementType;
};

// type PropsToOmit<ElementType extends React.ElementType, Props> = keyof (ElementTypeProp<ElementType> & Props);

export type PolymorphicProps<ElementType extends React.ElementType, Props = {}> = React.PropsWithChildren<
    Props & ElementTypeProp<ElementType>
> &
    Omit<React.ComponentPropsWithoutRef<ElementType>, PropsToOmit<ElementType, Props>>;

export type PolymorphicRef<As extends React.ElementType> = React.ComponentPropsWithRef<As>["ref"];

// old utility with ref
export type PolymorphicPropsWithRef<ElementType extends React.ElementType, Props = {}> = PolymorphicProps<
    ElementType,
    Props
> & { ref?: PolymorphicRef<ElementType> };

// This is a new type utitlity with ref
// Implementation of reusable polymorphic types
// Explaination: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
type AsProp<As extends React.ElementType> = { as?: As };
type PropsToOmit<As extends React.ElementType, P> = keyof (AsProp<As> & P);
type PolymorphicComponentProp<As extends React.ElementType, Props = object> = React.PropsWithChildren<
    Props & AsProp<As>
> &
    Omit<React.ComponentPropsWithoutRef<As>, PropsToOmit<As, Props>>;

export type PolymorphicComponentPropWithRef<As extends React.ElementType, Props = object> = PolymorphicComponentProp<
    As,
    Props
> & { ref?: PolymorphicRef<As> };

// Les https://stackoverflow.com/q/57683303
export type Expand<T> = T extends (...args: infer A) => infer R
    ? (...args: Expand<A>) => Expand<R>
    : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never;
