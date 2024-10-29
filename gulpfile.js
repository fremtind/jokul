/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { pathToFileURL } = require("url");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const litePreset = require("cssnano-preset-lite");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const gulpSass = require("gulp-sass");
const _sass = require("sass");
/* eslint-enable @typescript-eslint/no-var-requires */

const sass = gulpSass(_sass);

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
                    loadPaths: ["./node_modules"],
                }).on("error", throwSassError),
            )
            .pipe(postcss([autoprefixer()]))
            .pipe(gulp.dest("./"))
            .pipe(postcss([cssnano(litePreset())]))
            .pipe(rename({ suffix: ".min" }))
            .pipe(gulp.dest("./"));
    });
    gulp.task("build:watch", function () {
        return gulp.watch(
            scssFiles,
            { ignoreInitial: false },
            gulp.series("build"),
        );
    });
    return gulp;
};
