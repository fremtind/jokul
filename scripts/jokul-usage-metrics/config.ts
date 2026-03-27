import { resolve } from "node:path";
import { HELP_TEXT } from "./constants.ts";

export function parseCliArgs(argv = process.argv.slice(2)) {
    const args = new Set();
    let envFilePath = null;
    let disableEnvFile = false;

    for (let index = 0; index < argv.length; index += 1) {
        const arg = argv[index];

        if (arg === "--env-file") {
            envFilePath = argv[index + 1] || "";
            index += 1;
            continue;
        }

        if (arg.startsWith("--env-file=")) {
            envFilePath = arg.slice("--env-file=".length);
            continue;
        }

        if (arg === "--no-env-file") {
            disableEnvFile = true;
            continue;
        }

        args.add(arg);
    }

    return {
        isDryRun: args.has("--dry-run"),
        isVerbose: args.has("--verbose"),
        showHelp: args.has("--help"),
        envFilePath,
        disableEnvFile,
    };
}

export function printHelp() {
    console.log(HELP_TEXT);
}

export function createConfig(flags) {
    const config = {
        githubToken: getEnv("GITHUB_TOKEN", { required: true }),
        githubOwner: getEnv("GITHUB_OWNER", { required: true }),
        githubOwnerType: getEnv("GITHUB_OWNER_TYPE", {
            defaultValue: "org",
        }).toLowerCase(),
        includeArchived: parseBoolean(
            getEnv("GITHUB_INCLUDE_ARCHIVED", { defaultValue: "false" }),
        ),
        includeForks: parseBoolean(
            getEnv("GITHUB_INCLUDE_FORKS", { defaultValue: "false" }),
        ),
        includeRepositories: parseCommaSeparatedEnv("GITHUB_REPOSITORIES"),
        excludeRepositories: parseCommaSeparatedEnv(
            "GITHUB_EXCLUDE_REPOSITORIES",
        ),
        mixpanelProjectToken: getEnv("MIXPANEL_PROJECT_TOKEN", {
            required: !flags.isDryRun,
        }),
        mixpanelApiUrl: getEnv("MIXPANEL_API_URL", {
            defaultValue: "https://api-eu.mixpanel.com/track",
        }),
        maxSourceFilesPerWorkspace: parseInteger(
            getEnv("JOKUL_USAGE_MAX_SOURCE_FILES_PER_WORKSPACE", {
                defaultValue: "150",
            }),
            "JOKUL_USAGE_MAX_SOURCE_FILES_PER_WORKSPACE",
        ),
        maxSourceFileBytes: parseInteger(
            getEnv("JOKUL_USAGE_MAX_SOURCE_FILE_BYTES", {
                defaultValue: "150000",
            }),
            "JOKUL_USAGE_MAX_SOURCE_FILE_BYTES",
        ),
        teamMapPath: resolve(
            getEnv("JOKUL_USAGE_TEAM_MAP_PATH", {
                defaultValue: ".github/jokul-usage-team-map.json",
            }),
        ),
    };

    if (!["org", "user"].includes(config.githubOwnerType)) {
        throw new Error(
            `GITHUB_OWNER_TYPE must be "org" or "user", got "${config.githubOwnerType}"`,
        );
    }

    return config;
}

export function createSnapshot() {
    return {
        snapshotDate: new Date().toISOString().slice(0, 10),
        snapshotTime: Math.floor(Date.now() / 1000),
    };
}

function getEnv(
    name,
    options: { defaultValue?: string; required?: boolean } = {},
) {
    const value = process.env[name] ?? options.defaultValue;

    if (!value && options.required) {
        throw new Error(`Missing required environment variable ${name}`);
    }

    return value ?? "";
}

function parseBoolean(value) {
    return value === "true";
}

function parseInteger(value, envName) {
    const parsed = Number.parseInt(value, 10);

    if (!Number.isFinite(parsed) || parsed <= 0) {
        throw new Error(
            `${envName} must be a positive integer, got "${value}"`,
        );
    }

    return parsed;
}

function parseCommaSeparatedEnv(name) {
    const value = process.env[name];

    if (!value) {
        return null;
    }

    return new Set(
        value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
    );
}
