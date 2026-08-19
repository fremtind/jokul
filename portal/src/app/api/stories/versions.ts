// Hvilke versjoner av Jøkul vi støtter i tillegg til latest og next
export const MAINTAINED_VERSIONS = [4] as const;
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
