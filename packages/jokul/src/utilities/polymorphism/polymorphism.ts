type ElementTypeProp<ElementType extends React.ElementType> = {
    /**
     * Her kan du angi hva slags element komponenten skal rendres
     * som. Det kan enten være en string for native HTML elementer
     * eller en komponent (som Link fra react-router og lignende).
     */
    as?: ElementType;
};

type PropsToOmit<
    ElementType extends React.ElementType,
    Props,
> = keyof (ElementTypeProp<ElementType> & Props);

export type PolymorphicProps<
    ElementType extends React.ElementType,
    Props = {},
> = React.PropsWithChildren<Props & ElementTypeProp<ElementType>> &
    Omit<
        React.ComponentPropsWithoutRef<ElementType>,
        PropsToOmit<ElementType, Props>
    > &
    ElementTypeProp<ElementType>;

export type PolymorphicRef<ElementType extends React.ElementType> =
    React.ComponentPropsWithRef<ElementType>["ref"];

export type PolymorphicPropsWithRef<
    ElementType extends React.ElementType,
    Props = {},
> = PolymorphicProps<ElementType, Props> & {
    ref?: PolymorphicRef<ElementType>;
} & ElementTypeProp<ElementType>;
