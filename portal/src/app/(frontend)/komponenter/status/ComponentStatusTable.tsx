"use client";

import type { Jokul_component } from "@/sanity/types";
import { Link } from "@fremtind/jokul/link";
import {
    Table,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@fremtind/jokul/table";
import { ErrorTag, SuccessTag, Tag } from "@fremtind/jokul/tag";
import NextLink from "next/link";

export type ComponentStatusTableProps = {
    components: Jokul_component[];
};

export default function ComponentStatusTable({
    components,
}: ComponentStatusTableProps) {
    return (
        <Table
            caption={<TableCaption>Komponentstatuser</TableCaption>}
            collapseToList
        >
            <TableHead>
                <TableRow>
                    <TableHeader>Komponent</TableHeader>
                    <TableHeader>React</TableHeader>
                    <TableHeader>Figma</TableHeader>
                </TableRow>
            </TableHead>
            {components.map((component) => (
                <TableRow key={component.name}>
                    <TableCell>
                        <Link
                            as={NextLink}
                            href={`/komponenter/${component.slug?.current}`}
                            className={"jkl-link"}
                            aria-label={component.name || "Gå til komponent"}
                            aria-describedby={`${component.name}-description`}
                        >
                            {component.name}
                        </Link>
                    </TableCell>
                    <TableCell>
                        {component.external_links?.github_link ? (
                            <SuccessTag>Tilgjengelig</SuccessTag>
                        ) : (
                            <Tag>Ikke tilgjengelig</Tag>
                        )}
                    </TableCell>
                    <TableCell>
                        {component.external_links?.figma_link ? (
                            <SuccessTag>Tilgjengelig</SuccessTag>
                        ) : (
                            <Tag>Ikke tilgjengelig</Tag>
                        )}
                    </TableCell>
                </TableRow>
            ))}
        </Table>
    );
}
