import { existsSync, readFileSync } from "node:fs";

export function loadTeamMap(teamMapPath, log) {
    if (!existsSync(teamMapPath)) {
        log(`No team map found at ${teamMapPath}, using "unknown"`, true);
        return { defaultTeam: "unknown", repoTeams: {}, rules: [] };
    }

    const raw = JSON.parse(readFileSync(teamMapPath, "utf8"));

    return {
        defaultTeam: raw.defaultTeam || "unknown",
        repoTeams: raw.repoTeams || {},
        rules: Array.isArray(raw.rules) ? raw.rules : [],
    };
}

export function resolveTeam(teamMap, context) {
    const exactTeam =
        teamMap.repoTeams[context.fullName] ||
        teamMap.repoTeams[context.repoName];

    if (exactTeam) {
        return exactTeam;
    }

    for (const rule of teamMap.rules) {
        const repoMatches = rule.repoPattern
            ? new RegExp(rule.repoPattern).test(context.fullName)
            : true;
        const pathMatches = rule.pathPattern
            ? new RegExp(rule.pathPattern).test(context.packagePath)
            : true;

        if (repoMatches && pathMatches) {
            return rule.team;
        }
    }

    return teamMap.defaultTeam;
}
