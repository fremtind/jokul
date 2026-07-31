/** Prop-rapportering til terminal: API-analyse, komponent-oversikt,
 *  verdiuttrekk med valgfri gyldig/ugyldig-sjekk mot tillatte verdier. */

const countOf = (v) =>
    v == null ? 0 : typeof v === "number" ? v : (v.size ?? v.length ?? 0);

/** API-analyse: løft frem utfasede og ukjente props (både aggregat og index). */
export function printPropApiReport(entries) {
    const rows = entries.map((e) => ({
        component: e.component,
        prop: e.prop,
        category: e.category,
        filer: countOf(e.files),
        repoer: countOf(e.repos),
    }));
    const byCat = new Map();
    for (const r of rows)
        byCat.set(r.category, (byCat.get(r.category) ?? 0) + 1);

    console.log("\n🔬 Prop-API-analyse (mot Jøkul-kildekoden)\n");
    console.log(
        "   " +
            [...byCat.entries()]
                .sort((a, b) => b[1] - a[1])
                .map(([c, n]) => `${c}: ${n}`)
                .join("  ·  "),
    );

    const bySeverity = (a, b) =>
        b.filer - a.filer || a.component.localeCompare(b.component);
    const deprecated = rows
        .filter((r) => r.category === "utfaset")
        .sort(bySeverity);
    const unknown = rows
        .filter((r) => r.category === "ukjent")
        .sort(bySeverity);

    if (deprecated.length) {
        console.log("\n⚠️  Utfasede props i bruk (kandidater for migrering):\n");
        console.table(
            deprecated.map((r) => ({
                Komponent: r.component,
                Prop: r.prop,
                Filer: r.filer,
                Repoer: r.repoer,
            })),
        );
    }
    if (unknown.length) {
        console.log("\n❓ Ukjente props (mulige typos eller fjernet API):\n");
        console.table(
            unknown.map((r) => ({
                Komponent: r.component,
                Prop: r.prop,
                Filer: r.filer,
                Repoer: r.repoer,
            })),
        );
    }
    if (!deprecated.length && !unknown.length) {
        console.log("\n✅ Ingen utfasede eller ukjente props i bruk.");
    }
}

/** Alle props i bruk på én komponent. */
export function printComponentPropsReport(group, limit = 60) {
    console.log(
        `\n🔧 Alle props i bruk på «${group.component}» ` +
            `(${group.propCount} props · ${group.files} filer · ${group.repos} repoer)\n`,
    );
    console.table(
        group.props.slice(0, limit).map((e) => ({
            Prop: e.prop,
            Kategori: e.category,
            Forekomster: e.occurrences,
            Filer: e.files.length,
            Repoer: new Set(e.files.map((f) => f.repo)).size,
        })),
    );
    console.log(
        "\n   " +
            [...group.categories.entries()]
                .sort((a, b) => b[1] - a[1])
                .map(([c, n]) => `${c}: ${n}`)
                .join("  ·  ") +
            (group.propCount > limit ? `\n   (viser topp ${limit})` : ""),
    );
}

export function printPropValueReport(
    entry,
    values,
    allowed = null,
    limit = 40,
) {
    const checkable = (v) => {
        const s = String(v.value);
        if (s === "(ukjent)" || s === "…spread") return false;
        if (/^\{[\s\S]*\}$/.test(s)) return false; // dynamisk uttrykk
        return true;
    };
    console.log(
        `\n🔧 Verdier for «${entry.component} · ${entry.prop}» (${entry.category}, sortert på forekomster)\n`,
    );
    console.table(
        values.slice(0, limit).map((v) => {
            const row = {
                Verdi: v.value,
                Type: v.kind,
                Forekomster: v.occurrences,
                Filer: v.files,
                Repoer: v.repos,
            };
            if (allowed)
                row.Gyldig = !checkable(v)
                    ? "–"
                    : allowed.has(String(v.value))
                      ? "✓"
                      : "✗";
            return row;
        }),
    );
    const total = values.reduce((s, v) => s + v.occurrences, 0);
    console.log(
        `\nOppsummering: ${values.length} distinkt(e) verdi(er), ` +
            `${total} forekomst(er)` +
            (values.length > limit ? ` (viser topp ${limit})` : "") +
            ".",
    );
    if (allowed) {
        const invalid = values.filter(
            (v) => checkable(v) && !allowed.has(String(v.value)),
        );
        console.log(`Tillatte verdier: ${[...allowed].sort().join(", ")}.`);
        if (invalid.length) {
            console.log(
                `⚠️  ${invalid.length} ugyldig(e) verdi(er): ` +
                    invalid
                        .map((v) => `${v.value} (${v.occurrences})`)
                        .join(", "),
            );
        } else {
            console.log("✅ Alle konkrete verdier er gyldige.");
        }
    }
}
