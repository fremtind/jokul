/**
 * Legger til "Blogg" og "Release notes" som hovedsidelenker i footeren på jokul_siteData.
 *
 * Bruk:
 *   SANITY_API_TOKEN=<token> node portal/scripts/add-footer-links.mjs [--dry-run]
 */

import { createClient } from "@sanity/client";

const DRY_RUN = process.argv.includes("--dry-run");

const token = process.env.SANITY_API_TOKEN;
if (!token) {
    console.error("Feil: SANITY_API_TOKEN er ikke satt");
    process.exit(1);
}

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2025-04-03",
    token,
    useCdn: false,
});

const newLinks = [
    {
        _type: "pageLink",
        _key: "footer-link-blog",
        text: "Blogg",
        url: [{ _type: "mainPageLink", _key: "footer-link-blog-url", route: "blog" }],
    },
    {
        _type: "pageLink",
        _key: "footer-link-release-notes",
        text: "Release notes",
        url: [{ _type: "mainPageLink", _key: "footer-link-release-notes-url", route: "release-notes" }],
    },
];

async function main() {
    const siteData = await client.fetch(
        `*[_type == "jokul_siteData"][0]{ _id, footer }`,
    );

    if (!siteData) {
        console.error("Fant ikke jokul_siteData-dokumentet");
        process.exit(1);
    }

    const existingGroups = siteData.footer?.linkGroups ?? [];
    const targetGroup = existingGroups.find(
        (group) => group.title === "Innhold",
    );

    if (targetGroup) {
        const existingRoutes = (targetGroup.linkList ?? [])
            .flatMap((link) => link.url ?? [])
            .filter((urlItem) => urlItem._type === "mainPageLink")
            .map((urlItem) => urlItem.route);

        const linksToAdd = newLinks.filter(
            (link) => !existingRoutes.includes(link.url[0].route),
        );

        if (linksToAdd.length === 0) {
            console.log("Lenkene finnes allerede i 'Innhold'-gruppen. Ingen endringer.");
            return;
        }

        console.log(`Legger til ${linksToAdd.map((link) => link.text).join(", ")} i 'Innhold'-gruppen`);

        if (!DRY_RUN) {
            await client
                .patch(siteData._id)
                .insert("after", `footer.linkGroups[title == "Innhold"].linkList[-1]`, linksToAdd)
                .commit();
        }
    } else {
        console.log("Oppretter ny lenkegruppe 'Innhold' med Blogg og Release notes");

        const newGroup = {
            _type: "linkGroup",
            _key: "footer-group-innhold",
            title: "Innhold",
            linkList: newLinks,
        };

        if (!DRY_RUN) {
            await client
                .patch(siteData._id)
                .setIfMissing({ "footer.linkGroups": [] })
                .append("footer.linkGroups", [newGroup])
                .commit();
        }
    }

    console.log(DRY_RUN ? "(dry-run: ingen endringer)" : "Ferdig.");
}

main().catch((error) => {
    console.error("Skriptet feilet:", error);
    process.exit(1);
});
