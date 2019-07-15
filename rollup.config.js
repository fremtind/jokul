import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const extensions = [".ts", ".tsx"];
const outputFolder = "build";

const defaultPlugins = [
    nodeResolve({ extensions }),
    babel({
        rootMode: "upward",
        extensions,
        exclude: ["node_modules/**"], // only transpile our source code
    }),
    commonjs({
        namedExports: {
            "react-is": ["isForwardRef"],
        },
        include: [/node_modules\/prop-types/, /node_modules\/react-is/],
    }),
];

const uglifiedPlugins = [...defaultPlugins, terser({ ecma: "es5" })];

function config(plugins) {
    return {
        input: "src/index.ts",

        plugins: plugins,
        external: ["react"],
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
