import fs from "fs";
import path from "path";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const extensions = [".js", ".ts", ".tsx"];
const outputFolder = "build";

const allFremtindPackagesNames = getFremtindPackageNames();

const defaultPlugins = [
    nodeResolve({ extensions }),
    babel({
        babelHelpers: "runtime",
        rootMode: "upward",
        extensions,
    }),
    commonjs(),
];

const uglifiedPlugins = [...defaultPlugins, terser({ ecma: "es5" })];

function config(plugins) {
    return {
        input: "src/index.ts",

        plugins: plugins,
        // Fremtind packages are marked as internal so that packages that depend on each other don't get inlined in each other

        external: [
            "react",
            "react-dom",
            "downshift",
            "match-sorter",
            "nanoid",
            "date-fns",
            "classnames",
            "react-a11y-dialog",
            /@babel\/runtime/,
            ...allFremtindPackagesNames,
        ],
    };
}

function configWithOutput(config, output) {
    return Object.assign({}, config, { output });
}

export default [
    configWithOutput(config(defaultPlugins), { file: `${outputFolder}/cjs/index.js`, format: "commonjs" }),
    configWithOutput(config(defaultPlugins), { file: `${outputFolder}/esm/index.js`, format: "esm" }),
    configWithOutput(config(defaultPlugins), { file: `${outputFolder}/browser/index.js`, format: "esm" }),
    configWithOutput(config(uglifiedPlugins), { file: `${outputFolder}/esm/index.min.js`, format: "esm" }),
    configWithOutput(config(uglifiedPlugins), { file: `${outputFolder}/browser/index.min.js`, format: "esm" }),
];

function getFremtindPackageNames() {
    const ignore = [".DS_Store"];
    const basePackagePath = path.resolve(__dirname, "packages");
    const packagesFolderNames = fs.readdirSync(basePackagePath);

    return packagesFolderNames
        .filter((packageFolderName) => !ignore.includes(packageFolderName))
        .map((packageFolderName) => {
            try {
                const packageJson = fs.readFileSync(path.resolve(basePackagePath, packageFolderName, "package.json"));
                return JSON.parse(packageJson).name; // Return package name
            } catch (e) {
                // This is just a warning
                console.log(`Failed to read package.json version for ${packageFolderName}.`);
            }
            return undefined;
        })
        .filter(Boolean); // Remove undefined in case of failing to find package.json
}
