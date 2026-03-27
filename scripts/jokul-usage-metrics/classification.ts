import { readFileSync } from "node:fs";

const CURRENT_JOKUL_VERSION = JSON.parse(
    readFileSync("packages/jokul/package.json", "utf8"),
).version;

const PRERELEASE_RANGE_MARKERS = ["alpha", "beta", "rc", "next", "canary"];

export function summarizeDependencyUsage(matches) {
    const consolidatedMatches = matches.filter(
        (match) => match.packageFamily === "consolidated",
    );
    const legacyMatches = matches.filter(
        (match) => match.packageFamily === "legacy",
    );
    const usesPrereleaseRange = consolidatedMatches.some((match) =>
        isPrereleaseRange(match.dependencyRange),
    );
    const knownConsolidatedRanges = consolidatedMatches.filter((match) =>
        isSupportedSemverRange(match.dependencyRange),
    );
    const unknownConsolidatedRanges =
        consolidatedMatches.length - knownConsolidatedRanges.length;
    const currentVersionSatisfied = knownConsolidatedRanges.some((match) =>
        rangeIncludesVersion(match.dependencyRange, CURRENT_JOKUL_VERSION),
    );

    return {
        currentJokulVersion: CURRENT_JOKUL_VERSION,
        dependencyCount: matches.length,
        consolidatedDependencyCount: consolidatedMatches.length,
        legacyDependencyCount: legacyMatches.length,
        mixedLegacyAndConsolidated:
            consolidatedMatches.length > 0 && legacyMatches.length > 0,
        migrationState: determineMigrationState(
            consolidatedMatches.length,
            legacyMatches.length,
        ),
        versionFreshness: determineVersionFreshness({
            consolidatedDependencyCount: consolidatedMatches.length,
            usesPrereleaseRange,
            currentVersionSatisfied,
            unknownConsolidatedRanges,
        }),
        usesPrereleaseRange,
        currentVersionSatisfied,
        unknownConsolidatedRanges,
    };
}

function determineMigrationState(
    consolidatedDependencyCount,
    legacyDependencyCount,
) {
    if (consolidatedDependencyCount > 0 && legacyDependencyCount > 0) {
        return "mixed";
    }

    if (consolidatedDependencyCount > 0) {
        return "consolidated-only";
    }

    return "legacy-only";
}

function determineVersionFreshness({
    consolidatedDependencyCount,
    usesPrereleaseRange,
    currentVersionSatisfied,
    unknownConsolidatedRanges,
}) {
    if (consolidatedDependencyCount === 0) {
        return "legacy-only";
    }

    if (usesPrereleaseRange) {
        return "prerelease";
    }

    if (currentVersionSatisfied) {
        return "stable";
    }

    if (unknownConsolidatedRanges > 0) {
        return "unknown-range";
    }

    return "outdated-range";
}

function isPrereleaseRange(range) {
    return (
        /-\w/.test(range) ||
        PRERELEASE_RANGE_MARKERS.some((marker) =>
            new RegExp(`(^|[^a-z])${marker}([^a-z]|$)`, "i").test(range),
        )
    );
}

function isSupportedSemverRange(range) {
    if (!range || isNonSemverReference(range)) {
        return false;
    }

    return splitRangeOrGroups(range).every((group) =>
        canParseComparatorGroup(group),
    );
}

function rangeIncludesVersion(range, version) {
    if (!isSupportedSemverRange(range)) {
        return false;
    }

    const parsedVersion = parseVersion(version);

    if (!parsedVersion) {
        return false;
    }

    return splitRangeOrGroups(range).some((group) =>
        comparatorGroupMatchesVersion(group, parsedVersion),
    );
}

function splitRangeOrGroups(range) {
    return range
        .split("||")
        .map((group) => group.trim())
        .filter(Boolean);
}

function canParseComparatorGroup(group) {
    if (group.includes(" - ")) {
        const [lower, upper] = group.split(" - ").map((part) => part.trim());
        return Boolean(parseVersion(lower) && parseVersion(upper));
    }

    return tokenizeComparatorGroup(group).every((token) =>
        token === "*" ? true : parseComparatorToken(token) !== null,
    );
}

function comparatorGroupMatchesVersion(group, version) {
    if (group.includes(" - ")) {
        const [lower, upper] = group
            .split(" - ")
            .map((part) => parseVersion(part.trim()));
        return (
            Boolean(lower) &&
            Boolean(upper) &&
            compareVersions(version, lower) >= 0 &&
            compareVersions(version, upper) <= 0
        );
    }

    const tokens = tokenizeComparatorGroup(group);

    if (tokens.length === 0) {
        return true;
    }

    return tokens.every((token) => {
        if (token === "*") {
            return true;
        }

        const comparator = parseComparatorToken(token);
        return comparator ? comparator(version) : false;
    });
}

function tokenizeComparatorGroup(group) {
    return group
        .replace(/,/g, " ")
        .split(/\s+/)
        .map((token) => token.trim())
        .filter(Boolean);
}

function parseComparatorToken(token) {
    if (token === "*" || token.toLowerCase() === "x") {
        return () => true;
    }

    const comparatorMatch = token.match(
        /^(<=|>=|<|>|=)?\s*(v?\d+(?:\.\d+){0,2}(?:-[0-9A-Za-z.-]+)?)$/,
    );

    if (comparatorMatch) {
        const operator = comparatorMatch[1] || "=";
        const target = parseVersion(comparatorMatch[2]);

        if (!target) {
            return null;
        }

        return (version) => compareWithOperator(version, target, operator);
    }

    const shortRangeMatch = token.match(
        /^(\^|~)(v?\d+(?:\.\d+){0,2}(?:-[0-9A-Za-z.-]+)?)$/,
    );

    if (shortRangeMatch) {
        const operator = shortRangeMatch[1];
        const base = parseVersion(shortRangeMatch[2]);

        if (!base) {
            return null;
        }

        const upperBound =
            operator === "^"
                ? incrementCaretUpperBound(base)
                : incrementTildeUpperBound(base);

        return (version) =>
            compareVersions(version, base) >= 0 &&
            compareVersions(version, upperBound) < 0;
    }

    const wildcardMatch = token.match(
        /^v?(\d+|x|\*)(?:\.(\d+|x|\*))?(?:\.(\d+|x|\*))?$/,
    );

    if (wildcardMatch) {
        return buildWildcardComparator(
            wildcardMatch[1],
            wildcardMatch[2],
            wildcardMatch[3],
        );
    }

    return null;
}

function buildWildcardComparator(major, minor, patch) {
    if (major === "x" || major === "*") {
        return () => true;
    }

    const lowerBound = {
        major: Number.parseInt(major, 10),
        minor:
            minor && minor !== "x" && minor !== "*"
                ? Number.parseInt(minor, 10)
                : 0,
        patch:
            patch && patch !== "x" && patch !== "*"
                ? Number.parseInt(patch, 10)
                : 0,
        prerelease: "",
    };

    const upperBound =
        !minor || minor === "x" || minor === "*"
            ? {
                  major: lowerBound.major + 1,
                  minor: 0,
                  patch: 0,
                  prerelease: "",
              }
            : !patch || patch === "x" || patch === "*"
              ? {
                    major: lowerBound.major,
                    minor: lowerBound.minor + 1,
                    patch: 0,
                    prerelease: "",
                }
              : {
                    major: lowerBound.major,
                    minor: lowerBound.minor,
                    patch: lowerBound.patch + 1,
                    prerelease: "",
                };

    return (version) =>
        compareVersions(version, lowerBound) >= 0 &&
        compareVersions(version, upperBound) < 0;
}

function compareWithOperator(version, target, operator) {
    const comparison = compareVersions(version, target);

    switch (operator) {
        case "<":
            return comparison < 0;
        case "<=":
            return comparison <= 0;
        case ">":
            return comparison > 0;
        case ">=":
            return comparison >= 0;
        case "=":
            return comparison === 0;
        default:
            return false;
    }
}

function incrementCaretUpperBound(base) {
    if (base.segmentCount === 1) {
        return { major: base.major + 1, minor: 0, patch: 0, prerelease: "" };
    }

    if (base.major > 0) {
        return { major: base.major + 1, minor: 0, patch: 0, prerelease: "" };
    }

    if (base.minor > 0 || base.segmentCount === 2) {
        return { major: 0, minor: base.minor + 1, patch: 0, prerelease: "" };
    }

    return { major: 0, minor: 0, patch: base.patch + 1, prerelease: "" };
}

function incrementTildeUpperBound(base) {
    if (base.segmentCount === 1) {
        return { major: base.major + 1, minor: 0, patch: 0, prerelease: "" };
    }

    return {
        major: base.major,
        minor: base.minor + 1,
        patch: 0,
        prerelease: "",
    };
}

function parseVersion(version) {
    const match = version.match(
        /^v?(\d+)(?:\.(\d+))?(?:\.(\d+))?(?:-([0-9A-Za-z.-]+))?$/,
    );

    if (!match) {
        return null;
    }

    return {
        major: Number.parseInt(match[1], 10),
        minor: Number.parseInt(match[2] || "0", 10),
        patch: Number.parseInt(match[3] || "0", 10),
        prerelease: match[4] || "",
        segmentCount: match[3] ? 3 : match[2] ? 2 : 1,
    };
}

function compareVersions(left, right) {
    for (const key of ["major", "minor", "patch"]) {
        if (left[key] !== right[key]) {
            return left[key] - right[key];
        }
    }

    if (!left.prerelease && !right.prerelease) {
        return 0;
    }

    if (!left.prerelease) {
        return 1;
    }

    if (!right.prerelease) {
        return -1;
    }

    return comparePrerelease(left.prerelease, right.prerelease);
}

function comparePrerelease(left, right) {
    const leftParts = left.split(".");
    const rightParts = right.split(".");
    const maxLength = Math.max(leftParts.length, rightParts.length);

    for (let index = 0; index < maxLength; index += 1) {
        const leftPart = leftParts[index];
        const rightPart = rightParts[index];

        if (leftPart === undefined) {
            return -1;
        }

        if (rightPart === undefined) {
            return 1;
        }

        const leftNumeric = /^\d+$/.test(leftPart);
        const rightNumeric = /^\d+$/.test(rightPart);

        if (leftNumeric && rightNumeric) {
            const difference =
                Number.parseInt(leftPart, 10) - Number.parseInt(rightPart, 10);

            if (difference !== 0) {
                return difference;
            }

            continue;
        }

        if (leftNumeric) {
            return -1;
        }

        if (rightNumeric) {
            return 1;
        }

        const lexical = leftPart.localeCompare(rightPart);

        if (lexical !== 0) {
            return lexical;
        }
    }

    return 0;
}

function isNonSemverReference(range) {
    return /^(workspace:|file:|link:|github:|https?:|git\+|npm:)/.test(range);
}
