const fs = require("fs");
const path = require("path");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const litePreset = require("cssnano-preset-lite");
const { glob, globSync, globStream, globStreamSync, Glob } = require("glob");
const postcss = require("postcss");
const sass = require("sass");

const errorHandler = (err) => {
    if (err) {
        console.error(err);
        process.exit(0);
    }
};

(async function build() {
    glob("**/[!_]*.scss", { ignore: "node_modules/**" }, (err, files) => {
        for (let file of files) {
            const sourcePath = path.parse(file);
            const result = sass.compile(file, { loadPaths: ["node_modules"] });
            fs.writeFile(`${sourcePath.name}.css`, result.css, errorHandler);
            postcss([autoprefixer({ grid: true }), cssnano(litePreset)])
                .process(result.css, { from: undefined })
                .then((res) => {
                    fs.writeFile(`${sourcePath.name}.min.css`, res.css, errorHandler);
                });
        }
    });
})();
