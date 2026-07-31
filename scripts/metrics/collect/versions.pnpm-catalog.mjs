/**
 * pnpm catalog-oppslag. `catalogVersionFromWorkspace` er ren tekstparsing;
 * `resolveLocalCatalog` leser pnpm-workspace.yaml fra en klon på disk.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function indentOf(line) {
    return line.match(/^(\s*)/)[1].length;
}

/**
 * Leser versjonen for `pkg` fra en pnpm-workspace.yaml-katalog.
 * `name` = "" / "default" → standardkatalogen (`catalog:`),
 * ellers en named catalog (`catalogs.<name>`).
 */
export function catalogVersionFromWorkspace(yamlText, pkg, name) {
    const lines = yamlText.split(/\r?\n/);
    const isDefault = !name || name === "default";

    let blockStart = -1;
    let blockIndent = -1;

    if (isDefault) {
        for (let i = 0; i < lines.length; i++) {
            if (/^catalog:\s*$/.test(lines[i])) {
                blockStart = i + 1;
                blockIndent = 0;
                break;
            }
        }
    } else {
        let catalogsIdx = -1;
        for (let i = 0; i < lines.length; i++) {
            if (/^catalogs:\s*$/.test(lines[i])) {
                catalogsIdx = i;
                break;
            }
        }
        if (catalogsIdx !== -1) {
            const nameRe = new RegExp(`^(\\s+)${escapeRegExp(name)}:\\s*$`);
            for (let i = catalogsIdx + 1; i < lines.length; i++) {
                if (lines[i].trim() === "") continue;
                if (indentOf(lines[i]) === 0) break; // ut av catalogs
                const m = lines[i].match(nameRe);
                if (m) {
                    blockStart = i + 1;
                    blockIndent = m[1].length;
                    break;
                }
            }
        }
    }

    if (blockStart === -1) return null;

    const pkgRe = new RegExp(
        `^\\s+["']?${escapeRegExp(pkg)}["']?\\s*:\\s*(.+?)\\s*$`,
    );
    for (let i = blockStart; i < lines.length; i++) {
        if (lines[i].trim() === "") continue;
        if (indentOf(lines[i]) <= blockIndent) break; // ut av blokken
        const m = lines[i].match(pkgRe);
        if (m) {
            return m[1]
                .replace(/\s+#.*$/, "") // strip kommentar
                .replace(/^["']|["']$/g, "")
                .trim();
        }
    }
    return null;
}

const WORKSPACE_FILES = ["pnpm-workspace.yaml", "pnpm-workspace.yml"];

function readWorkspaceYaml(dir) {
    for (const f of WORKSPACE_FILES) {
        try {
            return readFileSync(join(dir, f), "utf8");
        } catch {
            // prøv neste
        }
    }
    return null;
}

/** Resolver en `catalog:`-spec via klonens pnpm-workspace.yaml. */
export function resolveLocalCatalog(dir, spec, depName) {
    const name = spec.trim().slice("catalog:".length);
    const yaml = readWorkspaceYaml(dir);
    if (!yaml) return null;
    return catalogVersionFromWorkspace(yaml, depName, name);
}
