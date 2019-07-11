import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

const extensions = [".ts", ".tsx"];
const outputFolder = "build";

let newVar = {
    input: "src/index.ts",

    plugins: [
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
        sizeSnapshot({ printInfo: false }),
        terser(),
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
