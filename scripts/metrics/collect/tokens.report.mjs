/** Token-rapportering til terminal: fasit-analyse (ukjent/privat/overstyrt),
 *  bruksoversikt, og fargeadopsjon (token-farger vs hardkodet hex). */

const pct = (part, total) =>
    total === 0 ? null : Math.round((part / total) * 100);

export function printTokenApiReport(tokens) {
    const byCat = new Map();
    for (const t of tokens)
        byCat.set(t.category, (byCat.get(t.category) ?? 0) + 1);
    console.log("\n🔬 Token-analyse (mot Jøkul-fasiten)\n");
    console.log(
        "   " +
            [...byCat.entries()]
                .sort((a, b) => b[1] - a[1])
                .map(([c, n]) => `${c}: ${n}`)
                .join("  ·  "),
    );
    const sev = (a, b) =>
        b.occurrences - a.occurrences || a.name.localeCompare(b.name);
    const simpleRow = (t) => ({
        Token: t.name,
        Forekomster: t.occurrences,
        Repoer: t.repos.size,
        Pakker: t.packages.size,
    });
    const unknown = tokens.filter((t) => t.status === "ukjent").sort(sev);
    if (unknown.length) {
        console.log("\n❓ Ukjente tokens (typo/fjernet):\n");
        console.table(unknown.map(simpleRow));
    }
    const priv = tokens.filter((t) => t.status === "privat").sort(sev);
    if (priv.length) {
        console.log("\n🔒 Private/interne tokens (skjøre):\n");
        console.table(priv.map(simpleRow));
    }
    const over = tokens
        .filter((t) => t.usesOverride > 0)
        .sort((a, b) => b.usesOverride - a.usesOverride);
    if (over.length) {
        console.log("\n🎛️  Overstyrte Jøkul-tokens (tematisering/hacks):\n");
        console.table(
            over.map((t) => ({
                Token: t.name,
                Status: t.status,
                Overstyringer: t.usesOverride,
                Repoer: t.repos.size,
                Pakker: t.packages.size,
            })),
        );
    }
    if (!unknown.length && !priv.length && !over.length)
        console.log("\n✅ Ingen ukjente, private eller overstyrte tokens.");
}

export function printTokenReport(tokens, limit = 40) {
    const sorted = [...tokens].sort(
        (a, b) =>
            b.occurrences - a.occurrences ||
            b.packages.size - a.packages.size ||
            a.name.localeCompare(b.name),
    );
    const byStatus = new Map();
    for (const t of tokens)
        byStatus.set(t.status, (byStatus.get(t.status) ?? 0) + 1);
    console.log("\n🎨 Design-token-bruk (sortert på forekomster)\n");
    console.table(
        sorted.slice(0, limit).map((t) => ({
            Token: t.name,
            Kategori: t.category,
            Status: t.status,
            Forekomster: t.occurrences,
            "var()": t.usesVar,
            Overstyrt: t.usesOverride,
            Repoer: t.repos.size,
            Pakker: t.packages.size,
            Filer: t.files,
        })),
    );
    console.log(
        `\nOppsummering: ${tokens.length} distinkte tokens` +
            (tokens.length > limit ? ` (viser topp ${limit})` : "") +
            ".",
    );
    console.log(
        "   Status: " +
            [...byStatus.entries()]
                .sort((a, b) => b[1] - a[1])
                .map(([s, n]) => `${s}: ${n}`)
                .join("  ·  "),
    );
    return sorted;
}

export function printTokenAdoptionReport(adoption) {
    const { colorTokenOcc, hexOcc } = adoption;
    const rate = pct(colorTokenOcc, colorTokenOcc + hexOcc);
    console.log("\n🎨 Token-adopsjon (farge)\n");
    console.log(
        `   Fargeadopsjon: ${rate === null ? "–" : rate + "%"} ` +
            `(${colorTokenOcc} token-farger vs ${hexOcc} hardkodet hex)`,
    );
    console.log(
        `   Hardkodet hex: ${adoption.hexColors.size} distinkte · ` +
            `${adoption.hexFiles.size} filer · ` +
            `${adoption.hexRepos.size} repoer · ` +
            `${adoption.hexPackages.size} pakker`,
    );
    const offenders = [...adoption.byRepo.entries()]
        .filter(([, v]) => v.hex > 0)
        .map(([repo, v]) => ({
            Repo: repo,
            "Token-farger": v.token,
            "Hardkodet hex": v.hex,
            Adopsjon:
                pct(v.token, v.token + v.hex) === null
                    ? "–"
                    : pct(v.token, v.token + v.hex) + "%",
        }))
        .sort((a, b) => b["Hardkodet hex"] - a["Hardkodet hex"])
        .slice(0, 20);
    if (offenders.length) {
        console.log("\n   Repoer med mest hardkodet hex:\n");
        console.table(offenders);
    }
}
