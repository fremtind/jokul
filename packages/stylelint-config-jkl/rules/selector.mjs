export default {
    "selector-class-pattern": [
        "[a-z-_]+",
        {
            message:
                "CSS-klasser skal følge BEM-standarden, og kan ikke inneholde store bokstaver, tall eller spesialtegn.",
        },
    ],
    "selector-max-specificity": "0,7,2",
    "selector-no-vendor-prefix": true,
    "selector-not-notation": "simple",
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
