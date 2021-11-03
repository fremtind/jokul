#!/usr/bin/node
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const path = require("path");
const prompt = require("prompt");

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

        if (!componentName) {
            console.error("You have to supply a component name");
            process.exit(1);
        }

        const toPascalCase = (string) =>
            string
                .split("-")
                .map((string) => `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`)
                .join("");

        const asArray = (val) => (typeof val === "string" ? [val] : val);

        const createCpFile = (templatePath, packagePath) => (src, dest, mutator) => {
            let copied = fs.readFileSync(path.resolve(templatePath, ...asArray(src)));

            if (mutator) {
                copied = mutator(copied);
            }

            fs.writeFile(path.resolve(packagePath, ...asArray(dest || src)), copied, () => undefined);
        };

        const scaffoldName = "scaffold";
        const scaffoldNamePascalCased = toPascalCase(scaffoldName);
        const scaffoldRegExp = new RegExp(scaffoldName, "g");
        const scaffoldRegExpPascalCased = new RegExp(scaffoldNamePascalCased, "g");

        const componentNamePascalCased = toPascalCase(componentName);

        const replaceComponentNames = (string) =>
            string.replace(scaffoldRegExp, componentName).replace(scaffoldRegExpPascalCased, componentNamePascalCased);

        const mapFilenames = (filename) => {
            const comparator = Array.isArray(filename) ? filename[filename.length - 1] : filename;

            const withDirs = (filename, componentName) => [...filename.slice(0, filename.length - 1), componentName];

            return [
                filename,
                Array.isArray(filename)
                    ? withDirs(filename, replaceComponentNames(comparator))
                    : replaceComponentNames(comparator),
            ];

            return [filename, null];
        };

        // Creates files for the sass component
        const createComponentFiles = () => {
            const packagePath = path.resolve(process.cwd(), "packages", componentName);
            const templatePath = path.resolve(__dirname, "templates", "component");

            const dir = fs.readdirSync(templatePath);

            const filenames = dir.map(mapFilenames);

            const cpFile = createCpFile(templatePath, packagePath);

            fs.mkdirSync(packagePath);

            filenames.forEach((filename) => cpFile(...filename, (file) => replaceComponentNames(file.toString())));
        };

        createComponentFiles();

        // Creates files for the react component
        const createReactComponentFiles = () => {
            const packagePath = path.resolve(process.cwd(), "packages", `${componentName}-react`);
            const templatePath = path.resolve(__dirname, "templates", "component-react");

            const rootDir = fs.readdirSync(templatePath).filter((path) => path.includes("."));
            const srcDir = fs.readdirSync(path.resolve(templatePath, "src"));
            const intDir = fs.readdirSync(path.resolve(templatePath, "integration"));
            const docDir = fs.readdirSync(path.resolve(templatePath, "documentation"));

            const cpFile = createCpFile(templatePath, packagePath);

            fs.mkdirSync(packagePath);
            fs.mkdirSync(path.resolve(packagePath, "src"));
            fs.mkdirSync(path.resolve(packagePath, "integration"));
            fs.mkdirSync(path.resolve(packagePath, "documentation"));

            [
                rootDir.map(mapFilenames),
                srcDir.map((filename) => ["src", filename]).map(mapFilenames),
                intDir.map((filename) => ["integration", filename]).map(mapFilenames),
                docDir.map((filename) => ["documentation", filename]).map(mapFilenames),
            ].forEach((dir) =>
                dir.forEach((filename) => cpFile(...filename, (file) => replaceComponentNames(file.toString()))),
            );
        };

        createReactComponentFiles();
    } catch (error) {
        process.exit(1);
    }
};

main();
