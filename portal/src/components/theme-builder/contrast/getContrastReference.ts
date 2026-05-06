import {
    type ColorToken,
    type ColorTokenDefinition,
    type ContrastRequirementId,
    ROOT_TOKEN_SECTION,
    TOKEN_ROLES_BY_SECTION,
    type TokenGroup,
    type TokenRole,
    type TokenSection,
} from "../tokens";

export function contrastReference(token: ColorToken): {
    against: ColorTokenDefinition;
    requirementId: ContrastRequirementId;
} | null {
    const { section, group, role } = token;

    if (group === "text" && role === "onContrast") {
        return createContrastReference(
            section,
            "background",
            "contrast",
            "text",
        );
    }

    if (group === "background" && role === "contrast") {
        return createContrastReference(section, "text", "onContrast", "text");
    }

    if (group === "text") {
        return createContrastReference(section, "background", "page", "text");
    }

    if (group === "border") {
        return createContrastReference(section, "background", "page", "ui");
    }

    return null;
}

function createContrastReference(
    section: TokenSection,
    group: TokenGroup,
    role: TokenRole,
    requirementId: ContrastRequirementId,
): {
    against: ColorTokenDefinition;
    requirementId: ContrastRequirementId;
} | null {
    if (!TOKEN_ROLES_BY_SECTION[section]?.[group]?.includes(role)) return null;
    return {
        against: createTokenDefinition(section, group, role),
        requirementId,
    };
}

function createTokenDefinition(
    section: TokenSection,
    group: TokenGroup,
    role: TokenRole,
): ColorTokenDefinition {
    const path =
        section === ROOT_TOKEN_SECTION ? [group, role] : [section, group, role];

    return {
        path,
        id: path.join("."),
        section,
        group,
        role,
    };
}
