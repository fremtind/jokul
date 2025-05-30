import customRules from "./rules/index.mjs";

/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard-scss"],
    rules: customRules,
};
