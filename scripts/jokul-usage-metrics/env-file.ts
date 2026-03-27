import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export function loadEnvFile(flags, log) {
    if (flags.disableEnvFile) {
        return null;
    }

    const envFilePath = resolve(
        flags.envFilePath || process.env.JOKUL_USAGE_ENV_FILE || ".env.metrics",
    );

    if (!existsSync(envFilePath)) {
        return null;
    }

    const source = readFileSync(envFilePath, "utf8");
    const loadedKeys = [];

    for (const line of source.replace(/^\uFEFF/, "").split(/\r?\n/)) {
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith("#")) {
            continue;
        }

        const match = trimmed.match(
            /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/,
        );

        if (!match) {
            continue;
        }

        const key = match[1];

        if (process.env[key] !== undefined) {
            continue;
        }

        process.env[key] = parseEnvValue(match[2]);
        loadedKeys.push(key);
    }

    log(`Loaded ${loadedKeys.length} environment value(s) from ${envFilePath}`);

    return {
        path: envFilePath,
        loadedKeys,
    };
}

function parseEnvValue(rawValue) {
    const trimmed = rawValue.trim();

    if (
        (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
        (trimmed.startsWith("'") && trimmed.endsWith("'"))
    ) {
        const quote = trimmed[0];
        const innerValue = trimmed.slice(1, -1);

        if (quote === '"') {
            return innerValue
                .replace(/\\n/g, "\n")
                .replace(/\\r/g, "\r")
                .replace(/\\t/g, "\t")
                .replace(/\\"/g, '"')
                .replace(/\\\\/g, "\\");
        }

        return innerValue;
    }

    return trimmed.replace(/\s+#.*$/, "");
}
