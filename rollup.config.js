import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

const extensions = [".ts", ".tsx"];
const outputFolder = "build";

let newVar = {
    input: "src/index.ts",

    plugins: [
        nodeResolve({ extensions }),
        babel({
            rootMode: "upward",
            extensions,
            exclude: ["node_modules/**", "*.stories.*"], // only transpile our source code
        }),
    ],
    external: ["react"],
};

function configWithOutput(output) {
    return Object.assign({}, newVar, { output });
}

export default [
    configWithOutput({ file: `${outputFolder}/cjs/index.js`, format: "commonjs" }),
    configWithOutput({ file: `${outputFolder}/esm/index.js`, format: "esm" }),
    configWithOutput({ file: `${outputFolder}/browser/index.js`, format: "esm" }),
];
