import * as core from "@actions/core";
import * as github from "@actions/github";
import { PullRequest } from "@octokit/webhooks-definitions/schema";
import jsyaml from "js-yaml";
import micromatch from "micromatch";

async function run(): Promise<void> {
    try {
        const token = core.getInput("token", { required: true });
        const filtersInput = core.getInput("filters", { required: true });
        const filters = jsyaml.load(filtersInput) as Record<string, string[]>;

        const pr = github.context.payload.pull_request as PullRequest;
        const files = await findChangedFiles(token, pr);

        for (const [name, patterns] of Object.entries(filters)) {
            const matches = micromatch(files, patterns);
            core.setOutput(name, matches.length > 0);
        }
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message);
    }
}

export async function findChangedFiles(token: string, pr: PullRequest): Promise<string[]> {
    const octokit = github.getOctokit(token);

    const iterator = octokit.paginate.iterator(octokit.rest.pulls.listFiles, {
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        pull_number: pr.number,
        per_page: 100,
    });

    const paths: string[] = [];

    for await (const response of iterator) {
        if (response.status !== 200) {
            throw new Error(
                `GitHub API responded with status code ${response.status} when looking for pull request information`,
            );
        }

        core.debug(`Got ${response.data.length} entries`);
        for (const entry of response.data) {
            core.debug(`${entry.status}: ${entry.filename}`);
            paths.push(entry.filename);
        }
    }

    core.debug(`Paths from the GitHub API: ${JSON.stringify(paths)}`);

    return paths;
}

run();
