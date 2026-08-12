"use client";
import { useUserPreferences } from "@/utils/user-preferences";
import {
    VERSIONS,
    type Version,
    isVersion,
    versionedPath,
} from "@/utils/versions";
import { Select } from "@fremtind/jokul/select";
import { usePathname, useRouter } from "next/navigation";

export function VersionPicker() {
    const router = useRouter();
    const pathname = usePathname();

    const [, firstSegment, ...rest] = pathname.split("/");
    const hasVersion = isVersion(firstSegment);
    const { preferences, updatePreference } = useUserPreferences();
    const current = hasVersion ? firstSegment : preferences.version;
    const basePath = hasVersion ? `/${rest.join("/")}` : pathname;

    return (
        <Select
            label="Velg versjon"
            name="version"
            labelProps={{ srOnly: true }}
            value={current}
            onChange={(e) => {
                const version = e.target.value as Version["id"];
                updatePreference("version", version);
                router.push(versionedPath(version, basePath));
            }}
            items={VERSIONS.map((v) => ({ value: v.id, label: v.title }))}
            data-size="small"
        />
    );
}
