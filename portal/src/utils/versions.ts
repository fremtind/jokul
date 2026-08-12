export type Version = {
    id: "next" | `v${number}`;
    title: `${number}.0`;
};

export const VERSIONS: Version[] = [
    {
        id: "next",
        title: "6.0",
    },
    {
        id: "v5",
        title: "5.0",
    },
    {
        id: "v4",
        title: "4.0",
    },
] as const;

export const DEFAULT_VERSION: Version["id"] = VERSIONS[0].id;

export function isVersion(value: string | undefined): value is Version["id"] {
    return VERSIONS.some((v) => v.id === value);
}

// URL-hjelper: default = ingen prefiks, ellers /<versjon>/...
export function versionedPath(version: Version["id"], path: string): string {
    const suffix = path.startsWith("/") ? path : `/${path}`;
    return version === DEFAULT_VERSION ? suffix : `/${version}${suffix}`;
}
