#!/usr/bin/node
/* eslint-disable @typescript-eslint/no-var-requires */

const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs-extra");
const glob = require("glob");
const prompt = require("prompt");
const replace = require("replace-in-file");

const main = async () => {
    try {
        const promtSchema = {
            properties: {
                componentName: {
                    description: "Name of the component",
                    pattern: /^[a-z\\-]+$/,
                    message: "Name must be only lower-cased letters or dashes (ex: radio-button)",
                    required: true,
                },
            },
        };

        prompt.start();

        const { componentName } = await prompt.get(promtSchema);

        const toPascalCase = (string) =>
            string
                .split("-")
                .map((string) => `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`)
                .join("");

        const scaffoldRegExp = new RegExp("scaffold", "g");
        const scaffoldRegExpPascalCased = new RegExp("Scaffold", "g");

        const componentNamePascalCased = toPascalCase(componentName);

        const replaceComponentNames = (string) =>
            string.replace(scaffoldRegExp, componentName).replace(scaffoldRegExpPascalCased, componentNamePascalCased);

        const copyAndReplace = (templatePath, packagePath) => {
            fs.copySync(templatePath, packagePath);

            const files = glob.sync(path.join(packagePath, "**", "*"));

            replace.sync({
                files,
                from: [scaffoldRegExp, scaffoldRegExpPascalCased],
                to: [componentName, componentNamePascalCased],
            });

            files.forEach((path) => fs.renameSync(path, replaceComponentNames(path)));
        };

        copyAndReplace(
            path.resolve(__dirname, "templates", "component"),
            path.resolve(process.cwd(), "packages", componentName),
        );

        copyAndReplace(
            path.resolve(__dirname, "templates", "component-react"),
            path.resolve(process.cwd(), "packages", `${componentName}-react`),
        );

        spawnSync("yarn", ["install"], { stdio: "inherit" });

        spawnSync("yarn", ["lerna", "run", "--scope", `@fremtind/jkl-${componentName}`, "build"], { stdio: "inherit" });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

main();
