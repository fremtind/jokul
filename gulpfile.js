/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const importer = require("node-sass-tilde-importer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");

sass.compiler = require("node-sass");

/* eslint-enable @typescript-eslint/no-var-requires */
function throwError(e) {
    throw new Error("sass compilation failed", e);
}
module.exports = {
    scss: function() {
        return src("**/*.scss")
            .pipe(sass({ importer }).on("error", throwError))
            .pipe(dest("./"));
    },
    css: function() {
        return src(["**/*.css", "!**/example/**", "!**/*.min.css"])
            .pipe(postcss([autoprefixer({ browsers: ["last 1 version"] }), cssnano()]))
            .pipe(rename({ suffix: ".min" }))
            .pipe(dest("./"));
    },
};
