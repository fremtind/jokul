import { Density, PolymorphicPropsWithRef } from "../..";

export const buttonVariants = ["primary", "secondary", "tertiary", "ghost"] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export type ButtonProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
        density?: Density;
        /**
         * Hvilken variant av knappen skal vises
         * @default "secondary"
         */
        variant?: ButtonVariant;
        className?: string;
        loader?: {
            showLoader: boolean;
            textDescription: string;
        };
        iconLeft?: React.ReactNode;
        iconRight?: React.ReactNode;
    }
>;

export type ButtonComponent = <ElementType extends React.ElementType = "button">(
    props: ButtonProps<ElementType>,
) => React.ReactElement | null;
