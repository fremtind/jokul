import * as core from "@actions/core";
import { findChangedFiles } from "./git";
import {
    toList,
    validateOutputInput,
    validatePatternsInput,
} from "./input-validation";

async function run(): Promise<void> {
    try {
        const patterns: string[] = toList(
            validatePatternsInput(
                core.getInput("patterns", { required: true }),
            ),
        );
        core.debug(`Got "patterns" ${patterns}`);

        const ignoreInput: string = core.getInput("ignore");
        const ignore: string[] | undefined = ignoreInput
            ? toList(core.getInput("ignore"))
            : undefined;

        if (ignore) {
            core.debug(`Got "ignore" ${ignore}`);
        }

        const output = validateOutputInput(core.getInput("output"));
        core.debug(`Got "output" ${output}`);

        const paths = await findChangedFiles(patterns, { ignore });

        core.setOutput("has_changed_files", paths.length > 0);

        switch (output) {
            case "array":
                core.setOutput("changed_files", paths); // GitHub Actions will run non-string values through JSON.stringify
                break;
            case "string":
            default:
                core.setOutput("changed_files", paths.join("\n"));
                break;
        }
    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message);
    }
}

run();
