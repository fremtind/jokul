const path = require("path");
const { transformSync } = require("esbuild");

const supported = ["tsx", "ts", "jsx", "js"];

module.exports = {
    process(input, file) {
        const extension = path.extname(file);
        const loader = supported.find((l) => `.${l}` === extension) || "js";

        return transformSync(input, {
            format: "cjs",
            sourcefile: file,
            sourcemap: "inline",
            loader,
        });
    },
};
