import { PrismTheme } from "prism-react-renderer";

export const fremtindDark: PrismTheme = {
    plain: {
        color: "#ded4c7",
        backgroundColor: "#2B2A2A",
    },
    styles: [
        {
            types: ["prolog"],
            style: {
                color: "#0a3166",
            },
        },
        {
            types: ["comment"],
            style: {
                color: "#dcb28b",
            },
        },
        {
            types: ["builtin", "changed", "keyword"],
            style: {
                color: "#ff7059",
            },
        },
        {
            types: ["number", "inserted"],
            style: {
                color: "rgb(181, 206, 168)",
            },
        },
        {
            types: ["constant"],
            style: {
                color: "rgb(100, 102, 149)",
            },
        },
        {
            types: ["attr-name", "variable"],
            style: {
                color: "rgb(156, 220, 254)",
            },
        },
        {
            types: ["deleted", "string", "attr-value"],
            style: {
                color: "#ffc880",
            },
        },
        {
            types: ["selector"],
            style: {
                color: "#dcb28b",
            },
        },
        {
            // Fix tag color
            types: ["tag"],
            style: {
                color: "#50e68c",
            },
        },
        {
            // Fix tag color for HTML
            types: ["tag"],
            languages: ["markup"],
            style: {
                color: "#509ce6",
            },
        },
        {
            types: ["punctuation", "operator"],
            style: {
                color: "#f0f0f0",
                backgroundColor: "transparent",
            },
        },
        {
            // Fix punctuation color for HTML
            types: ["punctuation"],
            languages: ["markup"],
            style: {
                color: "#696666",
            },
        },
        {
            types: ["function"],
            style: {
                color: "#509ce6",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "#0d5745",
            },
        },
        {
            types: ["char"],
            style: {
                color: "#ff7059",
            },
        },
    ],
};

export const fremtindLight: PrismTheme = {
    plain: {
        color: "#3d3d3d",
        backgroundColor: "transparent",
    },
    styles: [
        {
            types: ["prolog"],
            style: {
                color: "#0a3166",
            },
        },
        {
            types: ["comment"],
            style: {
                color: "#dcb28b",
            },
        },
        {
            types: ["builtin", "changed", "keyword"],
            style: {
                color: "#ff7059",
            },
        },
        {
            types: ["number", "inserted"],
            style: {
                color: "rgb(181, 206, 168)",
            },
        },
        {
            types: ["constant"],
            style: {
                color: "rgb(100, 102, 149)",
            },
        },
        {
            types: ["attr-name", "variable"],
            style: {
                color: "#0a3166",
            },
        },
        {
            types: ["deleted", "string", "attr-value"],
            style: {
                color: "#ff7059",
            },
        },
        {
            types: ["selector"],
            style: {
                color: "#dcb28b",
            },
        },
        {
            // Fix tag color
            types: ["tag"],
            style: {
                color: "#0d5745",
            },
        },
        {
            // Fix tag color for HTML
            types: ["tag"],
            languages: ["markup"],
            style: {
                color: "#509ce6",
            },
        },
        {
            types: ["punctuation"],
            style: {
                color: "#696666",
                backgroundColor: "transparent",
            },
        },
        {
            types: ["operator"],
            style: {
                color: "#0d5745",
                backgroundColor: "transparent",
            },
        },
        {
            // Fix punctuation color for HTML
            types: ["punctuation"],
            languages: ["markup"],
            style: {
                color: "#696666",
            },
        },
        {
            types: ["function"],
            style: {
                color: "#509ce6",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "#0d5745",
            },
        },
        {
            types: ["char"],
            style: {
                color: "#ff7059",
            },
        },
        {
            types: ["string"],
            style: {
                color: "#ff7059",
            },
        },
    ],
};
