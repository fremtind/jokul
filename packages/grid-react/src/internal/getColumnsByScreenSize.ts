import { ColumnType } from "./types";

export const getColumnsByScreenSize = (props: ColumnType): string =>
    Object.entries(props)
        .map(([deviceSize, value]) => `jkl-grid__element--${value}__${deviceSize}-device`)
        .join(" ");
