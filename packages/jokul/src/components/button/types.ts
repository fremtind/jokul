import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export const buttonVariants = [
    "primary",
    "secondary",
    "tertiary",
    "ghost",
] as const;
export type ButtonVariant = (typeof buttonVariants)[number];
export type IconPosition = "left" | "right";

export type IconOptions =
    // Hvis ikke knappen har ikon, MÅ den ha children:
    | {
          iconPosition?: never;
          icon?: never;
          children: React.ReactNode;
      }
    | {
          /**
           * Plasseringen av ikonet
           * @default "left"
           */
          iconPosition?: IconPosition;
          /**
           * Hvilket ikon som skal vises i knappen
           */
          icon: React.ReactElement;
      };

type Props = {
    /**
     * Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
     * @default "secondary"
     */
    variant?: ButtonVariant;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    /**
     * @deprecated Bruk `icon` i kombinasjon med `iconPosition="left"`
     */
    iconLeft?: React.ReactNode;
    /**
     * @deprecated Bruk `icon` i kombinasjon med `iconPosition="right"`
     */
    iconRight?: React.ReactNode;
} & IconOptions;

export type ButtonProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;

export type ButtonComponent = <
    ElementType extends React.ElementType = "button",
>(
    props: ButtonProps<ElementType>,
) => React.ReactElement | null;
