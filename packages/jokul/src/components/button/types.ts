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
