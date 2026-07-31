/** Enkel semver-parsing (kun for sortering/gruppering). */
export function parseVersion(v) {
    const [major = 0, minor = 0, patch = 0] = String(v)
        .replace(/[^0-9.]/g, "")
        .split(".")
        .map(Number);
    return { major, minor, patch };
}

export function compareDesc(a, b) {
    const av = parseVersion(a);
    const bv = parseVersion(b);
    return bv.major - av.major || bv.minor - av.minor || bv.patch - av.patch;
}
