/** Prop-innsamling: aggregat + drill-down-indeks + verdiuttrekk.
 *  Parser konsument-JSX og krysser mot Jøkul-API-fasiten (classifyProp). */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { mapPool } from "../infra/async.mjs";
import {
    CODE_GLOBS,
    grepFiles,
    listManifests,
    packageDirs,
    packageKey,
} from "../infra/git.mjs";
import { createProgress } from "../infra/progress.mjs";
import { readLocalCodeowners } from "../discovery/codeowners.mjs";
import { classifyProp } from "../fasit/component-api.mjs";
import {
    attrNames,
    jokulTags,
    parseComponentImports,
    propValuesInTag,
    scanProps,
} from "./jsx.mjs";

// ---- aggregert oversikt (brukes i --ci) ---------------------------------
export async function collectProps(
    components,
    clones,
    config,
    teamFilter,
    api,
) {
    console.log(
        `🔧 Analyserer prop-bruk (eksperimentelt) i ${clones.length} klon(er)...`,
    );
    const componentSet = new Set(components);
    const usage = new Map();
    const progress = createProgress(clones.length, "   Søkt");
    await mapPool(
        clones,
        config.grepConcurrency,
        async ({ repo, dir, teams }) => {
            const files = await grepFiles(
                dir,
                ["-F", `${config.package}/`],
                CODE_GLOBS,
            );
            if (!files.length) return;
            const dirs = packageDirs(await listManifests(dir));
            const rules = teamFilter ? readLocalCodeowners(dir) : null;
            for (const path of files) {
                if (teamFilter && !teamFilter(rules, path, teams)) continue;
                let content;
                try {
                    content = readFileSync(join(dir, path), "utf8");
                } catch {
                    continue;
                }
                const imports = parseComponentImports(content, componentSet);
                if (!imports.size) continue;
                for (const [local, sub] of imports) {
                    for (const prop of scanProps(content, local)) {
                        const key = `${sub} · ${prop}`;
                        let u = usage.get(key);
                        if (!u) {
                            u = {
                                component: sub,
                                prop,
                                category: classifyProp(api, sub, prop),
                                repos: new Set(),
                                packages: new Set(),
                                files: new Set(),
                            };
                            usage.set(key, u);
                        }
                        u.repos.add(repo);
                        u.files.add(`${repo}\u0000${path}`);
                        u.packages.add(packageKey(repo, path, dirs));
                    }
                }
            }
        },
        (done) => progress.tick(done),
    );
    progress.done();
    console.log();
    return [...usage.entries()].map(([name, u]) => ({
        name,
        component: u.component,
        prop: u.prop,
        category: u.category,
        repos: u.repos,
        packages: u.packages,
        files: u.files.size,
    }));
}

// ---- drill-down (komponent → alle props / én prop → filer → verdier) -----

/** Fase 1: indekser hvilke props som brukes per komponent, og i hvilke filer.
 *  Parser hver fil én gang og cacher taggene på fil-objektet for fase 3. */
export async function collectPropIndex(
    components,
    clones,
    config,
    teamFilter,
    api,
) {
    console.log(
        `🔧 Kartlegger tilgjengelige props i ${clones.length} klon(er)...`,
    );
    const componentSet = new Set(components);
    const index = new Map();
    const progress = createProgress(clones.length, "   Søkt");
    await mapPool(
        clones,
        config.grepConcurrency,
        async ({ repo, dir, teams }) => {
            const files = await grepFiles(
                dir,
                ["-F", `${config.package}/`],
                CODE_GLOBS,
            );
            if (!files.length) return;
            const rules = teamFilter ? readLocalCodeowners(dir) : null;
            for (const path of files) {
                if (teamFilter && !teamFilter(rules, path, teams)) continue;
                let content;
                try {
                    content = readFileSync(join(dir, path), "utf8");
                } catch {
                    continue;
                }
                const tags = [...jokulTags(content, componentSet)];
                if (!tags.length) continue;
                const fileKey = `${repo}\u0000${path}`;
                const fileObj = { repo, dir, path, tags };
                for (const { sub, tagText } of tags) {
                    for (const name of attrNames(tagText)) {
                        const key = `${sub}\u0000${name}`;
                        let e = index.get(key);
                        if (!e) {
                            e = {
                                component: sub,
                                prop: name,
                                category: classifyProp(api, sub, name),
                                files: new Map(),
                                occurrences: 0,
                            };
                            index.set(key, e);
                        }
                        e.occurrences++;
                        e.files.set(fileKey, fileObj);
                    }
                }
            }
        },
        (done) => progress.tick(done),
    );
    progress.done();
    console.log();
    return [...index.values()]
        .map((e) => ({
            component: e.component,
            prop: e.prop,
            category: e.category,
            label: `${e.component} · ${e.prop}`,
            occurrences: e.occurrences,
            files: [...e.files.values()],
        }))
        .sort(
            (a, b) =>
                b.files.length - a.files.length ||
                a.label.localeCompare(b.label),
        );
}

const countCategories = (props) => {
    const m = new Map();
    for (const p of props) m.set(p.category, (m.get(p.category) ?? 0) + 1);
    return m;
};

/** Grupper drill-down-indeksen per komponent (for komponent-nivå-visning). */
export function groupIndexByComponent(index) {
    const byComp = new Map();
    for (const e of index) {
        let g = byComp.get(e.component);
        if (!g) {
            g = {
                component: e.component,
                props: [],
                files: new Set(),
                repos: new Set(),
            };
            byComp.set(e.component, g);
        }
        g.props.push(e);
        for (const f of e.files) {
            g.files.add(`${f.repo}\u0000${f.path}`);
            g.repos.add(f.repo);
        }
    }
    return [...byComp.values()]
        .map((g) => ({
            component: g.component,
            props: g.props
                .slice()
                .sort(
                    (a, b) =>
                        b.files.length - a.files.length ||
                        a.prop.localeCompare(b.prop),
                ),
            propCount: g.props.length,
            files: g.files.size,
            repos: g.repos.size,
            categories: countCategories(g.props),
        }))
        .sort(
            (a, b) =>
                b.propCount - a.propCount ||
                a.component.localeCompare(b.component),
        );
}

/** Fase 3: hent ut verdiene for én komponent·prop i de valgte filene.
 *  repoContext (valgfri): repo -> {teams, domains, majors, versions}. */
export function collectPropValues(
    entry,
    selectedFiles,
    components,
    repoContext,
) {
    const { component, prop } = entry;
    const componentSet = new Set(components);
    const values = new Map();
    for (const file of selectedFiles) {
        const { repo, path } = file;
        let tags = file.tags;
        if (!tags) {
            try {
                const content = readFileSync(join(file.dir, path), "utf8");
                tags = [...jokulTags(content, componentSet)];
            } catch {
                continue;
            }
        }
        const ctx = repoContext?.get(repo);
        for (const t of tags) {
            if (t.sub !== component) continue;
            for (const { value, kind } of propValuesInTag(t.tagText, prop)) {
                let v = values.get(value);
                if (!v) {
                    v = {
                        occurrences: 0,
                        kinds: new Set(),
                        files: new Set(),
                        repos: new Set(),
                        teams: new Set(),
                        domains: new Set(),
                        majors: new Set(),
                        versions: new Set(),
                    };
                    values.set(value, v);
                }
                v.occurrences++;
                v.kinds.add(kind);
                v.files.add(`${repo}\u0000${path}`);
                v.repos.add(repo);
                if (ctx) {
                    for (const tm of ctx.teams) v.teams.add(tm);
                    for (const d of ctx.domains) v.domains.add(d);
                    for (const m of ctx.majors) v.majors.add(m);
                    for (const s of ctx.versions) v.versions.add(s);
                }
            }
        }
    }
    return [...values.entries()]
        .map(([value, v]) => ({
            value,
            kind: [...v.kinds].sort().join("+"),
            occurrences: v.occurrences,
            files: v.files.size,
            repos: v.repos.size,
            teams: [...v.teams].sort(),
            domains: [...v.domains].sort(),
            majors: [...v.majors].sort(),
            versions: [...v.versions].sort(),
        }))
        .sort(
            (a, b) =>
                b.occurrences - a.occurrences ||
                String(a.value).localeCompare(String(b.value)),
        );
}
