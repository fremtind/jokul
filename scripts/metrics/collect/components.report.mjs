/** Komponent-rapport til terminal: bruk sortert på antall pakker, med
 *  oppsummering, ubrukte kandidater og (verbose) pakker per komponent. */
import { shortName } from "../infra/format.mjs";

export function printComponentReport(usage, config) {
    const sorted = [...usage].sort(
        (a, b) =>
            b.packages.size - a.packages.size ||
            b.files - a.files ||
            a.name.localeCompare(b.name),
    );

    console.log(
        "📊 Komponentbruk (sortert på antall pakker som må oppdateres)\n",
    );
    console.table(
        sorted.map((c) => ({
            Komponent: c.name,
            Repoer: c.repos.size,
            Pakker: c.packages.size,
            Filer: c.files,
        })),
    );

    const used = sorted.filter((c) => c.packages.size > 0);
    const unused = sorted.filter((c) => c.packages.size === 0 && !c.failed);
    const failed = sorted.filter((c) => c.failed);

    console.log(
        `\nOppsummering:\n` +
            `  • ${usage.length} komponenter totalt\n` +
            `  • ${used.length} i bruk (minst én pakke)\n` +
            `  • ${unused.length} ubrukt`,
    );

    if (unused.length) {
        console.log(
            `\n🗑️  Ubrukte komponenter (kandidater for utfasing):\n   ` +
                unused.map((c) => c.name).join(", "),
        );
    }
    if (failed.length) {
        console.log(
            `\n⚠️  Søk feilet for: ${failed.map((c) => c.name).join(", ")}`,
        );
    }

    if (config.verbose) {
        console.log("\n📄 Pakker per komponent:\n");
        for (const c of used) {
            const pkgs = [...c.packages]
                .map((k) => {
                    const [repo, dir] = String(k).split("\u0000");
                    return `${shortName(repo, config.org)}/${dir}`.replace(
                        /\/$/,
                        "",
                    );
                })
                .sort();
            console.log(
                `   ${c.name} (${c.packages.size}): ${pkgs.join(", ")}`,
            );
        }
    }
}
