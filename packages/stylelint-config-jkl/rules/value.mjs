export default {
    "value-keyword-case": [
        "lower",
        {
            camelCaseSvgKeywords: true,
            ignoreKeywords: [
                // Systemfarger i forced-colors
                "Canvas",
                "CanvasText",
                "LinkText",
                "GrayText",
                "Highlight",
                "HighlightText",
                "ButtonFace",
                "ButtonText",
            ],
            ignoreFunctions: ["color", "color-mix"],
        },
    ],
    "value-no-vendor-prefix": true,
};
