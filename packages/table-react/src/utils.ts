import { TableSortDirection } from "./TableHeader";

export type TableSortProps = ReturnType<ReturnType<typeof useSortableTableHeader>["getSortProps"]>["sortable"];

export const useSortableTableHeader = (
    activeSortKey: string,
    activeSortDirection: TableSortDirection,
    onChange: (newSortKey: string, newSortDirection: TableSortDirection) => void,
) => {
    const calculateNewSortParameters = (sortKey: string): TableSortDirection => {
        if (sortKey === activeSortKey && activeSortDirection === "desc") {
            return "asc";
        }

        return "desc";
    };

    const handleClick = (sortKey: string) => {
        const newSortParameters = calculateNewSortParameters(sortKey);
        onChange(sortKey, newSortParameters);
    };

    const getSortProps = (sortKey: string) => {
        return {
            sortable: {
                onClick: () => handleClick(sortKey),
                direction: activeSortKey === sortKey ? activeSortDirection : undefined,
            },
        };
    };

    return {
        getSortProps,
    };
};
