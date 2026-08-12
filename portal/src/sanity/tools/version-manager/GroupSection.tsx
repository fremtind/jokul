import { Card, Checkbox, Flex, Label, Stack } from "@sanity/ui";
import { DocumentRow } from "./DocumentRow";
import type { Row } from "./types";

type Props = {
    title: string;
    rows: Row[];
    selected: Set<string>;
    onToggle: (id: string) => void;
    onToggleGroup: (ids: string[], checked: boolean) => void;
};

export function GroupSection({
    title,
    rows,
    selected,
    onToggle,
    onToggleGroup,
}: Props) {
    const ids = rows.map((r) => r._id);
    const selectedCount = ids.filter((id) => selected.has(id)).length;
    const allSelected = selectedCount === ids.length;

    return (
        <Card padding={4} radius={2} shadow={1}>
            <Stack gap={3}>
                <Flex align="center" gap={3}>
                    <Checkbox
                        checked={allSelected}
                        indeterminate={selectedCount > 0 && !allSelected}
                        onChange={() => onToggleGroup(ids, !allSelected)}
                    />
                    <Label>
                        {title} ({selectedCount}/{ids.length})
                    </Label>
                </Flex>
                <Stack gap={4}>
                    {rows.map((row) => (
                        <DocumentRow
                            key={row._id}
                            row={row}
                            checked={selected.has(row._id)}
                            onToggle={() => onToggle(row._id)}
                        />
                    ))}
                </Stack>
            </Stack>
        </Card>
    );
}
