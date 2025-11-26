import type { TableSortDirection } from "./TableHeader.js";

export type TableSortProps = ReturnType<
    ReturnType<typeof useSortableTableHeader>["getSortProps"]
>["sortable"];

export const useSortableTableHeader = (
    activeSortKey: string,
    activeSortDirection: TableSortDirection,
    onChange: (
        newSortKey: string,
        newSortDirection: TableSortDirection,
    ) => void,
) => {
    const getSortProps = (columnKey: string) => {
        const isCurrentSortKey = activeSortKey === columnKey;
        const currentDirection = isCurrentSortKey
            ? activeSortDirection
            : "none";

        const nextDirectionMap: Record<string, TableSortDirection> = {
            asc: "desc",
            desc: "none",
            none: "asc",
        };

        const nextDirection = nextDirectionMap[currentDirection] ?? "asc";

        return {
            sortable: {
                onClick: () => onChange(columnKey, nextDirection),
                direction: currentDirection,
            },
        };
    };

    return {
        getSortProps,
    };
};
