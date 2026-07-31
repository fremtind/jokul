/**
 * Sjekker at miljøet er klart før vi starter: git + gh finnes og du er
 * innlogget. Gir en tydelig «neste steg»-melding hvis noe mangler.
 */
import { execFileAsync } from "../infra/gh.mjs";
import { createSpinner } from "../infra/progress.mjs";
import { dim, err } from "./ui.mjs";

async function canRun(cmd, args) {
    try {
        await execFileAsync(cmd, args, { encoding: "utf8" });
        return true;
    } catch {
        return false;
    }
}

export async function preflight() {
    const spin = createSpinner("Sjekker miljø (git, gh, innlogging)");
    const problems = [];

    if (!(await canRun("git", ["--version"]))) {
        problems.push([
            "git er ikke installert eller ikke i PATH.",
            "Installer git: https://git-scm.com/downloads",
        ]);
    }

    const hasGh = await canRun("gh", ["--version"]);
    if (!hasGh) {
        problems.push([
            "GitHub CLI (gh) er ikke installert.",
            "Installer med: brew install gh  ·  https://cli.github.com",
        ]);
    } else if (!(await canRun("gh", ["auth", "status"]))) {
        problems.push([
            "Du er ikke innlogget i GitHub CLI.",
            "Logg inn med: gh auth login",
        ]);
    }

    if (problems.length) {
        spin.fail();
        for (const [what, how] of problems) {
            err(what);
            console.error(`   ${dim(`→ ${how}`)}`);
        }
        return false;
    }

    spin.stop();
    return true;
}
