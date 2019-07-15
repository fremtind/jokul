/* eslint-disable @typescript-eslint/no-var-requires */
const { series } = require("gulp");
const build = require("../../gulpfile");
/* eslint-enable @typescript-eslint/no-var-requires */

exports.build = series(build.scss, build.css);
