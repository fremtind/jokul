/* eslint-disable @typescript-eslint/no-var-requires */
const sassEmbedded = require("sass-embedded");
const sass = require("gulp-sass")(sassEmbedded);
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const litePreset = require("cssnano-preset-lite");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");
const path = require("path");
const { pathToFileURL } = require("url");
/* eslint-enable @typescript-eslint/no-var-requires */

const scssFiles = ["**/*.scss", "!example/*.scss", "!documentation/*.scss"];
function throwSassError(e) {
    sass.logError(e);
    throw new Error("sass compilation failed");
}

module.exports = function (gulp) {
    gulp.task("build", function () {
        return gulp
            .src(scssFiles)
            .pipe(
                sass({
                    importers: [
                        {
                            // An importer that redirects relative URLs starting with "~" to
                            // the monorepo `node_modules`.
                            findFileUrl(url) {
                                if (!url.startsWith("~")) return null;
                                const base = path.join(__dirname, "node_modules", "/"); // base must end in /, otherwise node_modules/ is discarded from the URL.
                                const resolved = new URL(url.substring(1), pathToFileURL(base));
                                return resolved;
                            },
                        },
                    ],
                }).on("error", throwSassError),
            )
            .pipe(postcss([autoprefixer()]))
            .pipe(gulp.dest("./"))
            .pipe(postcss([cssnano(litePreset())]))
            .pipe(rename({ suffix: ".min" }))
            .pipe(gulp.dest("./"));
    });
    gulp.task("build:watch", function () {
        return gulp.watch(scssFiles, { ignoreInitial: false }, gulp.series("build"));
    });
    return gulp;
};
