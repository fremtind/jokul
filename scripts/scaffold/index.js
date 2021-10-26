#!/usr/bin/node
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

const componentName = args[0];

if (!componentName) {
    console.error("You have to supply a component name");
    process.exit(1);
}

const toCamelCase = (string) =>
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
const ScaffoldName = toCamelCase(scaffoldName);
const scaffoldRegExp = new RegExp(scaffoldName, "g");
const ScaffoldRegExp = new RegExp(ScaffoldName, "g");

const ComponentName = toCamelCase(componentName);

const mapFilenames = (filename) => {
    const comparator = Array.isArray(filename) ? filename[filename.length - 1] : filename;

    const replaceComponentName = (componentName) => `${componentName}.${comparator.split(".").slice(1).join(".")}`;

    const withDirs = (filename, componentName) => [
        ...filename.slice(0, filename.length - 1),
        replaceComponentName(componentName),
    ];

    if (comparator.includes(scaffoldName)) {
        return [
            filename,
            Array.isArray(filename) ? withDirs(filename, componentName) : replaceComponentName(componentName),
        ];
    }

    if (comparator.includes(ScaffoldName)) {
        return [
            filename,
            Array.isArray(filename) ? withDirs(filename, ComponentName) : replaceComponentName(ComponentName),
        ];
    }

    return [filename, null];
};

const insertComponentNames = (string) =>
    string.replace(scaffoldRegExp, componentName).replace(ScaffoldRegExp, ComponentName);

// Creates files for the sass component
const createComponentFiles = () => {
    const packagePath = path.resolve(process.cwd(), "packages", componentName);
    const templatePath = path.resolve(__dirname, "templates", "component");

    const dir = fs.readdirSync(templatePath);

    const filenames = dir.map(mapFilenames);

    const cpFile = createCpFile(templatePath, packagePath);

    fs.mkdirSync(packagePath);

    filenames.forEach((filename) => cpFile(...filename, (file) => insertComponentNames(file.toString())));
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
    ].forEach((dir) => dir.forEach((filename) => cpFile(...filename, (file) => insertComponentNames(file.toString()))));
};

createReactComponentFiles();
