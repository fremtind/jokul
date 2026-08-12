import { DEFAULT_VERSION, VERSIONS } from "@/utils/versions";
import {
    Button,
    Container,
    Flex,
    Grid,
    Heading,
    Select,
    Stack,
} from "@sanity/ui";
import { useState } from "react";
import { GroupSection } from "./GroupSection";
import { type Row, TYPES, TYPE_TITLES } from "./types";
import { useSelection } from "./useSelection";
import { useVersionDocuments } from "./useVersionDocuments";

const sorters: Record<string, (a: Row, b: Row) => number> = {
    redigert: (a, b) => b._updatedAt.localeCompare(a._updatedAt),
    postet: (a, b) => b._createdAt.localeCompare(a._createdAt),
    tittel: (a, b) => a.title.localeCompare(b.title, "nb"),
};

export function VersionManager() {
    const { rows, setVersion, copyToVersion } = useVersionDocuments();
    const { selected, toggle, setMany, clear } = useSelection();
    const [target, setTarget] = useState<string>(DEFAULT_VERSION);
    const [filter, setFilter] = useState<string>("all");
    const [sort, setSort] = useState<string>("tittel");

    const targetTitle = VERSIONS.find((v) => v.id === target)?.title ?? target;

    const visible = rows
        .filter((r) =>
            filter === "all"
                ? true
                : filter === "none"
                  ? !r.versjon
                  : r.versjon === filter,
        )
        .sort(sorters[sort]);

    const byType = Object.groupBy(visible, (r) => r._type);

    const allSelected =
        visible.length > 0 && visible.every((r) => selected.has(r._id));

    const toggleAll = () =>
        setMany(
            visible.map((r) => r._id),
            !allSelected,
        );

    const applyToSelected = () => setVersion([...selected], target).then(clear);
    const copySelected = () => copyToVersion([...selected], target).then(clear);

    return (
        <Container width={5} paddingX={4} paddingY={5}>
            <Stack gap={5}>
                <Heading size={2}>Versjonshåndtering</Heading>
                <Flex align="center" gap={3}>
                    <Select
                        value={target}
                        onChange={(e) => setTarget(e.currentTarget.value)}
                    >
                        {VERSIONS.map((v) => (
                            <option key={v.id} value={v.id}>
                                {v.title}
                            </option>
                        ))}
                    </Select>
                    <Button
                        text={`Endre ${selected.size} til ${targetTitle}`}
                        mode="ghost"
                        disabled={selected.size === 0}
                        onClick={applyToSelected}
                    />
                    <Button
                        text={`Kopier ${selected.size} til ${targetTitle}`}
                        mode="ghost"
                        tone="positive"
                        disabled={selected.size === 0}
                        onClick={copySelected}
                    />
                </Flex>
                <Flex gap={3} justify="space-between" align="center">
                    <Heading size={1}>Velg dokumenter å oppdatere</Heading>
                    <Flex gap={3} align="center">
                        <Select
                            value={sort}
                            onChange={(e) => setSort(e.currentTarget.value)}
                        >
                            <option value="tittel">Tittel A–Å</option>
                            <option value="redigert">Redigert</option>
                            <option value="postet">Postet</option>
                        </Select>
                        <Select
                            value={filter}
                            onChange={(e) => setFilter(e.currentTarget.value)}
                        >
                            <option value="all">Alle versjoner</option>
                            {VERSIONS.map((v) => (
                                <option key={v.id} value={v.id}>
                                    {v.title}
                                </option>
                            ))}
                            <option value="none">Uten versjon</option>
                        </Select>
                        <Button
                            text={allSelected ? "Fjern alle" : "Velg alle"}
                            mode="ghost"
                            disabled={visible.length === 0}
                            onClick={toggleAll}
                        />
                    </Flex>
                </Flex>
                <Grid gridTemplateColumns={4} gap={5}>
                    {TYPES.map((type) => {
                        const group = byType[type];
                        if (!group?.length) return null;
                        return (
                            <GroupSection
                                key={type}
                                title={TYPE_TITLES[type]}
                                rows={group}
                                selected={selected}
                                onToggle={toggle}
                                onToggleGroup={setMany}
                            />
                        );
                    })}
                </Grid>
            </Stack>
        </Container>
    );
}
