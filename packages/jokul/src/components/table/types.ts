import React, {
    type ChangeEventHandler,
    type ColgroupHTMLAttributes,
    type ColHTMLAttributes,
    type HTMLAttributes,
    type ReactNode,
    type TableHTMLAttributes,
    type TdHTMLAttributes,
    type ThHTMLAttributes,
} from "react";
import type { Density, WithChildren } from "../../core/types.js";
import type { TableSortProps } from "./utils.js";

export interface DataTableProps extends TableHTMLAttributes<HTMLTableElement> {
    /** Beskrivelse av tabellen for skjermlesere */
    caption?: string;
    density?: Density;
    collapseToList?: boolean;
    rows: React.ReactNode[][];
    columns: string[];
    emptyTableText?: string;
    /**
     * Velg mellom vertikal sentrering av innholdet eller toppjustering. Typisk skal innholdet være toppjustert, men dersom raden har knapper kan midtstilling fungere bedre.
     * @default "top"
     */
    verticalAlign?: "center" | "top";
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
    caption: ReactNode;
    children: ReactNode;
    density?: Density;
    /** Bryt ned til en stablet listevisning på små skjermer. NB: husk å sette `data-th` på hver celle! */
    collapseToList?: boolean;
    /** Setter width: 100% */
    fullWidth?: boolean;
}

export interface TableBodyProps
    extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableCaptionProps
    extends HTMLAttributes<HTMLTableCaptionElement> {
    /** Skjuler caption visuelt */
    srOnly?: boolean;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
    density?: Density;
    /**
     * Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal innholdet være venstrejustert, men for eksempel summer er høyrejustert.
     * @default "left"
     */
    align?: "left" | "center" | "right";
    /**
     * Velg mellom vertikal sentrering av innholdet eller toppjustering. Typisk skal innholdet være toppjustert, men dersom raden har knapper kan midtstilling fungere bedre.
     * @default "top"
     */
    verticalAlign?: "center" | "top";
}

export interface TableColumnProps
    extends ColHTMLAttributes<HTMLTableColElement> {}

export interface TableColumnGroupProps
    extends ColgroupHTMLAttributes<HTMLTableColElement> {}

export interface TableFooterProps
    extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableHeadProps
    extends HTMLAttributes<HTMLTableSectionElement> {
    srOnly?: boolean;
    sticky?: boolean;
}

export interface TableHeaderProps
    extends ThHTMLAttributes<HTMLTableCellElement> {
    bold?: boolean;
    density?: Density;
    /**
     * Velg mellom venstrejustering og høyrejustering av innholdet. Typisk skal header følge innholdet i radene.
     * @default "left"
     */
    align?: "left" | "center" | "right";
    /**
     * Si om headeren gjelder for en kolonne eller en rad
     * @default "col"
     */
    scope?: "col" | "row";
    srOnly?: boolean;
    sortable?: TableSortProps;
}

export interface TablePaginationProps {
    className?: string;
    id?: string;
    density?: Density;
    /**
     * @default 1
     */
    activePage?: number;
    /**
     * Null eller negativt tall tolkes som "vis alle".
     */
    rowsPerPage: number;
    rowsPerPageItems: Array<number | { label: string; value: number }>;
    totalNumberOfRows: number;
    /**
     * Viser et valgfritt inputfelt for å hoppe raskt til en spesifik side.
     * Du kan også sende inn en custom label hvis du ønsker det, ellers bruke
     * true for default label
     * @default false
     */
    withGoToPage?: boolean | { gotoLabel: string };
    onChange: (toPage: number, fromPage: number) => void;
    onChangeRowsPerPage: ChangeEventHandler<HTMLSelectElement>;
    /**
     * Dersom du ønsker å ha custom labels kan du sende inn disse. "rowsPerPage"
     * vises alltid på skjerm mens "next" og "previous" brukes som hint til
     * skjermlesere for ikon-knappene til Neste/Forrige side
     * @default { rowsPerPage: "Rader per side", previous: "Forrige", next: "Neste" }
     */
    labels?: {
        rowsPerPage: string;
        previous: string;
        next: string;
    };
}

interface ClickableRowProps {
    markClickedRows?: boolean;
    /** Lar deg kontrollere radens tilstand untenfra */
    isClicked?: boolean;
    onClick: (
        e:
            | React.MouseEvent<HTMLTableRowElement, MouseEvent>
            | React.KeyboardEvent<HTMLTableRowElement>,
    ) => void;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
    /**
     * Gir raden interaktivitet og en click-handler.
     */
    clickable?: ClickableRowProps;
}

export type TableSectionContext = {
    isTableHead: boolean;
    isTableBody: boolean;
    isTableFooter: boolean;
};

export interface TableSectionContextProviderProps extends WithChildren {
    state: TableSectionContext;
}

export interface ExpandableTableRowProps extends TableRowProps {
    expandedChildren: React.ReactNode;
    /**
     * Setter bredden på raden som blir åpnet
     * @default 100
     */
    colSpan?: number;
    /**
     * Om du ønsker en controlled komponent. Hvis du ikke setter denne vil komponenten håndtere state selv.
     */
    isOpen?: boolean;
    onToggle?: (isOpen: boolean) => void;
}

export interface ExpandableTableRowControllerProps extends TableCellProps {
    /** Settes automatisk av ExpandableTableRow */
    isOpen?: boolean;
    /** Settes automatisk av ExpandableTableRow */
    onClick?: () => void;
}

export type TableContext = {
    density?: Density;
    collapseToList: boolean;
    setHasStickyHead: (hasStcikyHead: boolean) => void;
};

export interface TableContextProviderProps extends WithChildren {
    state: TableContext;
}
