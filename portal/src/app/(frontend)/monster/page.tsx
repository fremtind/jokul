import { OverviewCard } from "@/components/overview/card";
import { OverviewGrid } from "@/components/overview/grid";
import { OverviewHeader } from "@/components/overview/header";
import { logger } from "@/logger";
import { sanityFetch } from "@/sanity/lib/live";
import { monstreQuery } from "@/sanity/queries/monster";

export default async function MonstrePage() {
    logger.info("Rendering mønster overview page");

    const { data: monstre } = await sanityFetch({
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

    return (
        <>
            <OverviewHeader title="Mønster" />
            <OverviewGrid>
                {monstre.map((monster) => (
                    <OverviewCard
                        key={monster.slug}
                        title={monster.name || ""}
                        description={monster.short_description || ""}
                        link={`/monster/${monster.slug}`}
                    />
                ))}
            </OverviewGrid>
        </>
    );
}
