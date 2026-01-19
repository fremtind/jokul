import type { Jokul_table } from "@/sanity/types";
import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { CopyIcon } from "@fremtind/jokul/icon";
import {
    Table as JklTable,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@fremtind/jokul/table";
import type { PortableTextTypeComponentProps } from "@portabletext/react";
import type { FC } from "react";

export const Table: FC<PortableTextTypeComponentProps<Jokul_table>> = ({
    value,
}) => {
    const { table, caption, show_caption, copy_button, sticky_header } = value;

    if (!table?.rows?.some((row) => row.cells?.some((cell) => cell)))
        return null;

    const headerRow = table?.rows[0].cells;

    return (
        <JklTable
            fullWidth
            caption={
                <TableCaption srOnly={!show_caption}>{caption}</TableCaption>
            }
        >
            {headerRow && (
                <TableHead sticky={sticky_header}>
                    <TableRow>
                        {headerRow.map((cell) => (
                            <TableHeader key={cell}>{cell}</TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
            )}
            <TableBody>
                {table.rows?.slice(1).map((row) => (
                    <TableRow key={row._key}>
                        {row.cells?.map((cell, index) => (
                            <TableCell key={cell}>
                                <Flex gap="xs">
                                    <p>{cell}</p>
                                    {copy_button && index === 0 && (
                                        <Button
                                            variant="ghost"
                                            icon={<CopyIcon />}
                                            aria-label={`Kopier ${cell}`}
                                            data-size="small"
                                            data-density="compact"
                                            onClick={(_) => {
                                                navigator.clipboard.writeText(
                                                    cell.toString(),
                                                );
                                            }}
                                        />
                                    )}
                                </Flex>
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </JklTable>
    );
};
