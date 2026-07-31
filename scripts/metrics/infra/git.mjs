/** Lavnivå git/grep-primitiver mot klonede repoer. */
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const MAX_BUFFER = 256 * 1024 * 1024;

export const CODE_GLOBS = [
    "*.ts",
    "*.tsx",
    "*.js",
    "*.jsx",
    "*.mts",
    "*.cts",
    "*.mjs",
    "*.cjs",
];
export const STYLE_GLOBS = [
    "*.css",
    "*.scss",
    "*.sass",
    "*.less",
    "*.ts",
    "*.tsx",
    "*.js",
    "*.jsx",
    "*.vue",
    "*.svelte",
    "*.astro",
];

export function git(dir, args) {
    return execFileAsync("git", ["-C", dir, ...args], {
        encoding: "utf8",
        maxBuffer: MAX_BUFFER,
    });
}

function parsePathContent(stdout) {
    const out = [];
    for (const line of stdout.split("\n")) {
        if (!line) continue;
        const idx = line.indexOf(":");
        if (idx === -1) continue;
        out.push({ path: line.slice(0, idx), content: line.slice(idx + 1) });
    }
    return out;
}

/** Alle sporede package.json-stier (ekskluderer node_modules automatisk). */
export async function listManifests(dir) {
    try {
        const { stdout } = await git(dir, ["ls-files", "--", "*package.json"]);
        return stdout
            .split("\n")
            .map((s) => s.trim())
            .filter((p) => p === "package.json" || p.endsWith("/package.json"));
    } catch {
        return [];
    }
}

/** Katalog-prefikser per workspace, lengste først. */
export function packageDirs(manifests) {
    const dirs = manifests.map((p) =>
        p === "package.json" ? "" : p.slice(0, -"package.json".length),
    );
    return [...new Set([...dirs, ""])].sort((a, b) => b.length - a.length);
}

/** Nøkkel for pakken (workspace) en fil tilhører. */
export function packageKey(repo, path, dirs) {
    for (const d of dirs) if (path.startsWith(d)) return `${repo}\u0000${d}`;
    return `${repo}\u0000`;
}

export async function grepPathContent(dir, patternArgs, globs) {
    try {
        const { stdout } = await git(dir, [
            "grep",
            "-I",
            "--no-color",
            ...patternArgs,
            "--",
            ...globs,
        ]);
        return parsePathContent(stdout);
    } catch (err) {
        if (err.code === 1) return [];
        console.warn(
            `   ⚠️  git grep feilet i ${dir}: ${String(err.stderr || err.message).trim()}`,
        );
        return [];
    }
}

export async function grepFiles(dir, patternArgs, globs) {
    try {
        const { stdout } = await git(dir, [
            "grep",
            "-Il",
            "--no-color",
            ...patternArgs,
            "--",
            ...globs,
        ]);
        return stdout
            .split("\n")
            .map((s) => s.trim())
            .filter(Boolean);
    } catch (err) {
        if (err.code === 1) return [];
        console.warn(
            `   ⚠️  git grep feilet i ${dir}: ${String(err.stderr || err.message).trim()}`,
        );
        return [];
    }
}

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Global regex som fanger subpath rett etter «pkg/» til ord/slash/dash-grense.
 *  Ett søk per linje + Set-oppslag i stedet for én regex-test per komponent. */
export function specRegex(pkg) {
    return new RegExp(`${escapeRe(pkg)}/([\\w/-]+)`, "g");
}
