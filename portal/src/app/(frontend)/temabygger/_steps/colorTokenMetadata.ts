import type { ThemeDraftColorTokenValue } from "../_context/types";
import type { ColorRole, EditableLightDarkPalette } from "../generator/types";

export type EditableColorToken = {
    colorRole: ColorRole;
    group: string;
    role: string;
    token: ThemeDraftColorTokenValue;
    label: string;
    description?: string;
};

export type EditableColorTokenGroup = {
    id: string;
    title: string;
    tokens: EditableColorToken[];
};

type ColorTokenMetadata = {
    label?: string;
    description?: string;
    groupId?: string;
};

const TOKEN_GROUP_ORDER = ["contrast", "background", "text", "border"];

const TOKEN_GROUP_TITLES: Record<string, string> = {
    contrast: "Kontrast",
    background: "Bakgrunner",
    text: "Tekst og ikoner",
    border: "Linjer og omriss",
};

/**
 * Midlertidig metadata for fargetokens i temabyggeren.
 *
 * På sikt bør dette komme fra token-JSON, for eksempel via `$description` og
 * `$extensions`, når endelig token-format er landet.
 */
const COLOR_TOKEN_METADATA: Record<string, ColorTokenMetadata> = {
    "background.page": {
        label: "Page",
        description: "Heldekkende sidebakgrunn",
    },
    "background.container": {
        label: "Container",
        description: "Standard overflate",
    },
    "background.container-accent": {
        label: "Container accent",
        description: "Fremhevet overflate",
    },
    "background.contrast": {
        label: "Background contrast",
        description: "Kontrastflate",
        groupId: "contrast",
    },
    "text.default": {
        label: "Text default",
        description: "Standard tekst- og ikonfarge",
    },
    "text.subdued": {
        label: "Text subdued",
        description: "Nedtonet tekst- og ikonfarge",
    },
    "text.accent": {
        label: "Text accent",
        description: "Fremhevet tekst- og ikonfarge",
    },
    "text.on-contrast": {
        label: "Text on contrast",
        description: "Tekst- og ikonfarge på kontrastflate",
        groupId: "contrast",
    },
    "border.default": {
        label: "Border default",
        description: "Standard kantlinje",
    },
    "border.subdued": {
        label: "Border subdued",
        description: "Nedtonet kantlinje",
    },
    "border.strong": {
        label: "Border strong",
        description: "Fremhevet kantlinje",
    },
};

export function getEditableColorTokenGroups(
    colorTokens: EditableLightDarkPalette,
): EditableColorTokenGroup[] {
    const groups = new Map<string, EditableColorToken[]>();

    for (const [group, roles] of Object.entries(colorTokens) as Array<
        [string, Record<string, ThemeDraftColorTokenValue>]
    >) {
        for (const [role, token] of Object.entries(roles)) {
            const colorRole = getColorRole(group, role);
            const groupId = getTokenGroupId(group, role);
            groups.set(groupId, [
                ...(groups.get(groupId) ?? []),
                {
                    colorRole,
                    group,
                    role,
                    token,
                    label: getTokenLabel(group, role),
                    description: getTokenDescription(group, role),
                },
            ]);
        }
    }

    return [...groups.entries()]
        .sort(
            ([groupA], [groupB]) =>
                getGroupOrder(groupA) - getGroupOrder(groupB),
        )
        .map(([id, tokens]) => ({
            id,
            title: TOKEN_GROUP_TITLES[id] ?? formatTokenName(id),
            tokens,
        }));
}

function getTokenGroupId(group: string, role: string): string {
    return COLOR_TOKEN_METADATA[getTokenKey(group, role)]?.groupId ?? group;
}

function getTokenLabel(group: string, role: string): string {
    return (
        COLOR_TOKEN_METADATA[getTokenKey(group, role)]?.label ??
        formatTokenName(role)
    );
}

function getTokenDescription(group: string, role: string): string | undefined {
    return COLOR_TOKEN_METADATA[getTokenKey(group, role)]?.description;
}

function getTokenKey(group: string, role: string): string {
    return `${group}.${role}`;
}

function getColorRole(group: string, role: string): ColorRole {
    return getTokenKey(group, role) as ColorRole;
}

function getGroupOrder(group: string): number {
    const knownIndex = TOKEN_GROUP_ORDER.indexOf(group);
    return knownIndex === -1 ? TOKEN_GROUP_ORDER.length : knownIndex;
}

function formatTokenName(value: string): string {
    const withSpaces = value.replaceAll("-", " ");
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}
