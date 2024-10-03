import { Density } from "../../core";
import { PolymorphicPropsWithRef } from "../../utilities";

export const buttonVariants = ["primary", "secondary", "tertiary", "ghost"] as const;
export type ButtonVariant = (typeof buttonVariants)[number];
export type IconPosition = "left" | "right";

type IconOptions<T extends React.ElementType> =
    // Hvis ikke knappen har ikon, MÅ den ha children:
    | {
          iconPosition?: never;
          icon?: never;
          children: React.ComponentPropsWithoutRef<T>["children"];
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
        /**
         * @deprecated Bruk `icon` i kombinasjon med `iconPosition="left"`
         */
        iconLeft?: React.ReactNode;
        /**
         * @deprecated Bruk `icon` i kombinasjon med `iconPosition="right"`
         */
        iconRight?: React.ReactNode;
    } & IconOptions<ElementType>
>;

export type ButtonComponent = <ElementType extends React.ElementType = "button">(
    props: ButtonProps<ElementType>,
) => React.ReactElement | null;
