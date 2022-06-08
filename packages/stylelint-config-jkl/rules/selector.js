module.exports = {
    "selector-class-pattern": "[a-z-_]+",
    "selector-max-specificity": "0,7,2",
    "selector-no-vendor-prefix": true,
    "selector-pseudo-class-no-unknown": [
        true,
        {
            ignorePseudoClasses: ["extend"],
        },
    ],
    "selector-pseudo-element-no-unknown": [
        true,
        {
            ignorePseudoElements: ["ms-expand"],
        },
    ],
};
