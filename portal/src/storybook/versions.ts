// Hvilke versjoner av Jøkul vi støtter i tillegg til latest og next
export const MAINTAINED_VERSIONS = [4] as const;
export type MaintainedVersion = (typeof MAINTAINED_VERSIONS)[number];
export type SupportedVersion =
    | "next"
    | "latest"
    | `version-${MaintainedVersion}`
    | "local";

export function getStorybookBaseUrl(version: SupportedVersion = "latest") {
    const configuredBaseUrl =
        process.env.NEXT_PUBLIC_STORYBOOK_BASE_URL?.replace(/\/+$/, "");

    if (configuredBaseUrl) {
        return configuredBaseUrl;
    }

    return version === "local"
        ? "http://localhost:6007"
        : `https://fremtind.github.io/jokul/${version}`;
}

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
