import { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type PaginationProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            currentPage: number;
            numberOfPages: number;
            onPageChange: (toPage: number, fromPage: number) => void;
            /**
             * Dersom du ønsker å ha custom labels kan du sende inn disse. "next" og "previous"
             * brukes som hint til skjermlesere for ikon-knappene til Neste/Forrige side
             * @default { previous: "Forrige side", next: "Neste side" }
             */
            labels?: {
                previous: string;
                next: string;
            };
        }
    >;
