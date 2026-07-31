/** Fjerner org-prefikset («fremtind/» eller «@fremtind/») fra repo-/teamnavn for lesbar output. */
export function shortName(name, org) {
    if (!name) return name;
    const s = String(name).replace(/^@/, "");
    const prefix = `${org}/`.toLowerCase();
    return s.toLowerCase().startsWith(prefix) ? s.slice(prefix.length) : s;
}
