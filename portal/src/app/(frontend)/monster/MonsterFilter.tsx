"use client";

import { Select } from "@fremtind/jokul/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type MonsterFilterProps = {
    options: { label: string; value: string }[];
    selected: string;
};

export function MonsterFilter({ options, selected }: MonsterFilterProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <Select
            name="komponent"
            label="Filtrer på komponent"
            searchable
            width="20rem"
            value={selected}
            items={[{ label: "Alle komponenter", value: "" }, ...options]}
            onChange={(event) => {
                const params = new URLSearchParams(searchParams.toString());
                const value = event.target.value;
                if (value) {
                    params.set("komponent", value);
                } else {
                    params.delete("komponent");
                }
                router.push(`${pathname}?${params.toString()}`);
            }}
        />
    );
}
