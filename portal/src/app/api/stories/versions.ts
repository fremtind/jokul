// Hvilke versjoner av Jøkul vi støtter i tillegg til latest.
// Skal holdes i sync med grenene i .github/maintained-versions.json som ikke
// er markert med "latest": true.
export const MAINTAINED_VERSIONS = [4, 5] as const;
export type MaintainedVersion = (typeof MAINTAINED_VERSIONS)[number];
export type SupportedVersion =
    | "next"
    | "latest"
    | `version-${MaintainedVersion}`
    | "local";

export function isSupportedVersion(
    maybeVersion: string,
): maybeVersion is SupportedVersion {
    return [
        ...MAINTAINED_VERSIONS.map((version) => `version-${version}`),
        "next",
        "latest",
        "local",
    ].includes(maybeVersion);
}

export function parseStorybookVersion(url: string): SupportedVersion {
    if (url.includes("localhost")) {
        return "local";
    }

    const match = url.match(RegExp(/jokul\/(.*)\/iframe/));
    if (!match) {
        return "latest";
    }

    const possibleMatch = match[1];
    if (isSupportedVersion(possibleMatch)) {
        return possibleMatch;
    }

    return "latest";
}
