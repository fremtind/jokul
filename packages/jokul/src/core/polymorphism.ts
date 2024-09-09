type ElementTypeProp<ElementType extends React.ElementType> = {
    as?: ElementType;
};

type PropsToOmit<ElementType extends React.ElementType, Props> = keyof (ElementTypeProp<ElementType> & Props);

export type PolymorphicProps<ElementType extends React.ElementType, Props = {}> = React.PropsWithChildren<
    Props & ElementTypeProp<ElementType>
> &
    Omit<React.ComponentPropsWithoutRef<ElementType>, PropsToOmit<ElementType, Props>>;

export type PolymorphicRef<ElementType extends React.ElementType> = React.ComponentPropsWithRef<ElementType>["ref"];

export type PolymorphicPropsWithRef<ElementType extends React.ElementType, Props = {}> = PolymorphicProps<
    ElementType,
    Props
> & { ref?: PolymorphicRef<ElementType> };
