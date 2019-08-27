/* eslint-disable @typescript-eslint/no-var-requires */
const sass = require("gulp-sass");
const importer = require("node-sass-tilde-importer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");

sass.compiler = require("node-sass");
/* eslint-enable @typescript-eslint/no-var-requires */

const scssFiles = ["**/*.scss", "!example/*.scss"];
function throwError(e) {
    sass.logError(e);
    throw new Error("sass compilation failed", e);
}

module.exports = function(gulp) {
    gulp.task("build", function() {
        return gulp
            .src(scssFiles)
            .pipe(sass({ importer }).on("error", throwError))
            .pipe(postcss([autoprefixer()]))
            .pipe(gulp.dest("./"))
            .pipe(postcss([cssnano()]))
            .pipe(rename({ suffix: ".min" }))
            .pipe(gulp.dest("./"));
    });
    gulp.task("build:watch", function() {
        return gulp.watch(scssFiles, { ignoreInitial: false }, gulp.series("build"));
    });
    return gulp;
};
