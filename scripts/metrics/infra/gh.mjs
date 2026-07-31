import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { sleep } from "./async.mjs";
import { getStatus } from "./progress.mjs";

export const execFileAsync = promisify(execFile);

function isRateLimit(stderr = "") {
    return /rate limit|secondary rate|abuse detection|submitted too quickly|retry.?after|\b429\b/i.test(
        stderr,
    );
}

function parseRetryAfter(stderr = "") {
    const m = stderr.match(/retry.?after[:\s]+(\d+)/i);
    return m ? Number(m[1]) : null;
}

/** Slår opp når rate limit-vinduet nullstilles (rate_limit-kallet er unntatt). */
async function rateLimitResetSeconds(resource) {
    try {
        const { stdout } = await execFileAsync(
            "gh",
            ["api", "rate_limit", "--jq", `.resources.${resource}.reset`],
            { encoding: "utf8" },
        );
        const reset = Number(stdout.trim());
        if (!Number.isNaN(reset)) {
            return Math.max(0, reset - Math.floor(Date.now() / 1000)) + 2;
        }
    } catch {
        /* faller tilbake til backoff */
    }
    return null;
}

/** gh-kall med automatisk retry/backoff ved rate limit. */
export async function gh(cmdArgs, { retries = 6 } = {}) {
    for (let attempt = 0; ; attempt++) {
        try {
            const { stdout } = await execFileAsync("gh", cmdArgs, {
                encoding: "utf8",
                maxBuffer: 64 * 1024 * 1024,
            });
            return stdout;
        } catch (err) {
            const stderr = String(err.stderr || err.message || "");
            if (attempt >= retries || !isRateLimit(stderr)) throw err;

            const resource = cmdArgs.includes("search") ? "search" : "core";
            let waitSec =
                parseRetryAfter(stderr) ??
                (await rateLimitResetSeconds(resource)) ??
                Math.min(60, 2 ** attempt); // eksponentiell backoff
            waitSec += Math.random(); // jitter
            sharedWaitUntil = Math.max(
                sharedWaitUntil,
                Date.now() + waitSec * 1000,
            );
            if (process.stdout.isTTY) {
                showCountdown(resource);
            } else {
                console.warn(
                    `⏳ Rate limit (${resource}). Venter ${Math.ceil(
                        waitSec,
                    )}s (forsøk ${attempt + 1}/${retries})...`,
                );
            }
            await sleep(waitSec * 1000);
        }
    }
}

// Delt nedtelling så samtidige kall ikke overskriver hverandres linje.
let sharedWaitUntil = 0;
let countdownTotal = 0;
let countdownTimer = null;

function bar(fraction, width = 12) {
    const filled = Math.max(0, Math.min(width, Math.round(fraction * width)));
    return "█".repeat(filled) + "░".repeat(width - filled);
}

function showCountdown(resource) {
    if (!process.stdout.isTTY || countdownTimer) return;
    countdownTotal = Math.max(
        1,
        Math.ceil((sharedWaitUntil - Date.now()) / 1000),
    );

    const draw = () => {
        const remaining = Math.max(
            0,
            Math.ceil((sharedWaitUntil - Date.now()) / 1000),
        );
        countdownTotal = Math.max(countdownTotal, remaining);
        const status = getStatus();
        if (remaining <= 0) {
            clearInterval(countdownTimer);
            countdownTimer = null;
            process.stdout.write(`\r\x1b[K${status}`);
            return;
        }
        const done = 1 - remaining / countdownTotal;
        process.stdout.write(
            `\r\x1b[K${status ? status + "  " : ""}` +
                `⏳ ${resource} [${bar(done)}] ${remaining}s`,
        );
    };

    countdownTimer = setInterval(draw, 250);
    countdownTimer.unref?.();
    draw();
}
