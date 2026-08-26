import { OverviewCardWithPreferences } from "@/components/overview/OverviewCardWithPreferences";
import { OverviewGridWithPreferences } from "@/components/overview/OverviewGridWithPreferences";
import { OverviewHeader } from "@/components/overview/header";
import { logger } from "@/logger";
import { sanityFetch } from "@/sanity/lib/live";
import { monstreQuery } from "@/sanity/queries/monster";
import { parseUserPreferences } from "@/utils/user-preferences";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { MonsterFilter } from "./MonsterFilter";

export default async function MonstrePage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    logger.info("Rendering mønster overview page");

    let { data: monstre } = await sanityFetch({
        query: monstreQuery,
        requestTag: "monster-overview",
        tags: ["jokul_monster"],
    });

    if (!monstre) {
        logger.warn("No mønstre found");
        return (
            <>
                <OverviewHeader title="Mønster" />
                <p>Fant ingen mønstre :(</p>
            </>
        );
    }

    const userPreferences = parseUserPreferences(
        await getCookie("userPreferences", { cookies }),
    );

    const { komponent } = await searchParams;

    const componentOptions = Array.from(
        monstre
            .flatMap((m) => m.related_components || [])
            .reduce((map, c) => {
                if (c?.slug) map.set(c.slug, c.name ?? c.slug);
                return map;
            }, new Map<string, string>())
            .entries(),
    )
        .map(([value, label]) => ({ value, label }))
        .sort((a, b) => a.label.localeCompare(b.label));

    if (komponent) {
        logger.info(`Filtering mønstre by component: ${komponent}`);
        monstre = monstre.filter((m) =>
            (m.related_components || []).some((c) => c?.slug === komponent),
        );
    }

    return (
        <>
            <OverviewHeader title="Mønster" showToolbar>
                <MonsterFilter
                    options={componentOptions}
                    selected={komponent ?? ""}
                />
            </OverviewHeader>
            <OverviewGridWithPreferences initialPreferences={userPreferences}>
                {monstre.map((monster) => (
                    <OverviewCardWithPreferences
                        key={monster.slug}
                        title={monster.name || ""}
                        description={monster.short_description || ""}
                        image={monster.images}
                        link={`/monster/${monster.slug}`}
                        initialPreferences={userPreferences}
                    />
                ))}
            </OverviewGridWithPreferences>
        </>
    );
}
