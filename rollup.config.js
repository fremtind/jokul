import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import fs from "fs";
import path from "path";

function getFremtindPackageNames() {
    const basePackagePath = path.resolve(__dirname, "packages");
    const packagesFolderNames = fs.readdirSync(basePackagePath);

    return packagesFolderNames
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
const allFremtindPackagesNames = getFremtindPackageNames();

const extensions = [".ts", ".tsx", ".js"];
const outputFolder = "build";

export default {
    input: "src/index.ts",
    plugins: [
        nodeResolve({ extensions }),
        babel({
            babelHelpers: "runtime",
            rootMode: "upward",
            extensions,
        }),
        commonjs(),
        terser({ ecma: "es5" }),
    ],
    // Fremtind packages are marked as external so that packages that depend on each other don't get inlined in each other
    // @nrk packages should be marked as external once patches are no longer necessary (see https://github.com/fremtind/jokul/issues/1215)
    external: [
        "react",
        "downshift",
        "match-sorter",
        "nanoid",
        /* /@nrk\/core/, */ "classnames",
        /@babel\/runtime/,
        ...allFremtindPackagesNames,
    ],
    output: {
        file: `${outputFolder}/esm/index.min.js`,
        format: "esm",
        sourcemap: true,
    },
};
