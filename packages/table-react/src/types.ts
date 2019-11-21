export enum TableRowType {
    Anchor = "ANCHOR",
}

export interface BaseTableRowData {
    type: TableRowType;
}

export interface TableAnchorRowData extends BaseTableRowData {
    rowData: string[];
    type: TableRowType.Anchor;
    href: string;
    hrefLabel: string;
    onRowClick?: (href: string) => void;
}

export type TableRowData = string[] | TableAnchorRowData;

export function isAnchorRowData(row: string[] | TableAnchorRowData): row is TableAnchorRowData {
    return "type" in row && row.type === TableRowType.Anchor;
}
