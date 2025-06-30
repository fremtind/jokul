import clsx from "clsx";
import React from "react";
import { tokens } from "../../core/index.js";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

// Renamed from Center to Column

type Props = {
    /**
     * En CSS-lengde som definerer den maksimale bredden innholdet kan ha.
     * Hvis hele Column er smalere enn denne bredden, vil innholdet ta opp
     * hele bredden (ekskludert marger). Hvis Column er bredere enn denne
     * bredden, vil innholdet vises i en venstre- eller midtstilt kolonne.
     * @default "70ch"
     */
    contentWidth?: string;
    /**
     * Angir om kolonnen med innholdet skal være venstrejustert eller
     * midtstilt. Som standard er denne satt til venstrejustert.
     * @default "left"
     */
    position?: "left" | "center";
    /**
     * Sentrerer smalt innhold _inne i_ Column-komponenten. For eksempel vil
     * en knapp eller en overskrift vises midt på siden, ikke ved venstre marg.
     */
    centerWithin?: boolean;
    /**
     * Setter bredden til margene på hver side av innholdet dersom innholdet
     * i Column fyller hele bredden. Som standard er denne satt til unit.40,
     * som tilsvarer 32px.
     * @default 40
     */
    gutter?: keyof typeof tokens.unit;
};

export type ColumnProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<ElementType, Props> & Props;

type ColumnComponent = <ElementType extends React.ElementType = "div">(
    props: ColumnProps<ElementType>,
) => React.ReactElement | null;

/**
 * Column-komponenten brukes for å sentrere innhold på siden.
 * Du angir den maksimale bredden innholdet kan ta, og eventuelle
 * marger du ønsker at skal være på hver side av innholdet.
 *
 * Du kan også angi at innhold som ikke tar opp hele bredden av
 * Column-komponenten skal sentreres, heller enn å vises til venstre.
 */
export const Column = React.forwardRef(function Column<
    ElementType extends React.ElementType = "div",
>(props: ColumnProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "div",
        className,
        contentWidth = "70ch",
        position = "left",
        centerWithin = false,
        gutter = 40,
        style,
        ...componentProps
    } = props;

    const Component = as;

    return (
        <Component
            data-testid="jkl-column"
            data-position={position}
            data-center-within={centerWithin}
            className={clsx("jkl-column", className)}
            style={{
                ...style,
                "--content-width": contentWidth,
                "--gutter": gutter ? tokens.unit[gutter] : 0,
            }}
            {...componentProps}
            ref={ref}
        />
    );
}) as ColumnComponent;
