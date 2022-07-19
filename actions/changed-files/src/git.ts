import * as core from "@actions/core";
import micromatch from "micromatch";
import { simpleGit } from "simple-git";

type MicromatchOptions = {
    ignore?: string[];
};

export async function findChangedFiles(patterns: string[], options?: MicromatchOptions): Promise<string[]> {
    const git = simpleGit();

    core.debug('Running "git status"');
    const status = await git.status();

    if (status.isClean()) {
        core.info("Git working branch is clean, meaning there were no changes");
        return [];
    }

    const paths: string[] = status.files.map((file) => {
        core.debug(`${file.index} ${file.from ? `${file.from} -> ` : ""} ${file.path} ${file.working_dir}`);
        return file.path;
    });
    core.debug(`Paths from "git status": ${JSON.stringify(paths)}`);
    core.debug(`Micromatch patterns: ${patterns}`);
    if (options) {
        core.debug(`Micromatch options: ${options}`);
    }

    const matches = micromatch(paths, patterns, options);

    core.debug(`Matches: ${JSON.stringify(matches)}`);

    return matches;
}
