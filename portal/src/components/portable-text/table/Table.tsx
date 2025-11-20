import type { Jokul_table } from "@/sanity/types";
import { Flex } from "@fremtind/jokul/flex";
import {
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Table as TokensTable,
} from "@fremtind/jokul/table";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { FC } from "react";

import styles from "./table.module.scss";

export const Table: FC<PortableTextTypeComponentProps<Jokul_table>> = ({
    value,
}) => {
    if (!value?.head?.length && !value?.body?.length) return null;

    return (
        <Flex gap="m">
            <TokensTable
                className={styles.table}
                caption={<TableCaption srOnly>Tabell</TableCaption>}
                fullWidth
            >
                {value.head && value.head.length > 0 && (
                    <TableHead>
                        {value.head.map((row) => (
                            <TableRow key={row._key}>
                                {row.cells?.map((cell, cellIndex) => (
                                    <TableHeader key={cellIndex}>
                                        {cell}
                                    </TableHeader>
                                ))}
                            </TableRow>
                        ))}
                    </TableHead>
                )}

                {value.body && value.body.length > 0 && (
                    <TableBody>
                        {value.body.map((row) => (
                            <TableRow key={row._key}>
                                {row.cells?.map((cell, cellIndex) => (
                                    <TableCell key={cellIndex}>
                                        {cell.startsWith("jkl") ? (
                                            <code>{cell}</code>
                                        ) : (
                                            <>{cell}</>
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                )}
            </TokensTable>
        </Flex>
    );
};
