import { CSSProperties } from "react";

const theme: { [key: string]: CSSProperties } = {
    'code[class*="language-"]': {
        color: "black",
        background: "none",
        textShadow: "0 1px white",
        fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        textAlign: "left",
        whiteSpace: "pre",
        wordSpacing: "normal",
        wordBreak: "normal",
        wordWrap: "normal",
        lineHeight: "1.5",
        MozTabSize: "4",
        OTabSize: "4",
        tabSize: "4",
        WebkitHyphens: "none",
        MozHyphens: "none",
        msHyphens: "none",
        hyphens: "none",
    },
    'pre[class*="language-"]': {
        lineHeight: "1.4",
    },
    'pre[class*="language-"]::-moz-selection': {
        textShadow: "none",
        background: "#b3d4fc",
    },
    'pre[class*="language-"] ::-moz-selection': {
        textShadow: "none",
        background: "#b3d4fc",
    },
    'code[class*="language-"]::-moz-selection': {
        textShadow: "none",
        background: "#b3d4fc",
    },
    'code[class*="language-"] ::-moz-selection': {
        textShadow: "none",
        background: "#b3d4fc",
    },
    'pre[class*="language-"]::selection': {
        textShadow: "none",
        background: "#b3d4fc",
    },
    'pre[class*="language-"] ::selection': {
        textShadow: "none",
        background: "#b3d4fc",
    },
    'code[class*="language-"]::selection': {
        textShadow: "none",
        background: "#b3d4fc",
    },
    'code[class*="language-"] ::selection': {
        textShadow: "none",
        background: "#b3d4fc",
    },
    ':not(pre) > code[class*="language-"]': {
        background: "#f5f2f0",
        padding: ".1em",
        borderRadius: ".3em",
        whiteSpace: "normal",
    },
    comment: {
        color: "#999999",
    },
    prolog: {
        color: "#999999",
    },
    doctype: {
        color: "#999999",
    },
    cdata: {
        color: "#999999",
    },
    punctuation: {
        color: "#D6D6D6",
    },
    ".namespace": {
        opacity: ".7",
    },
    property: {
        color: "#FF8B79",
    },
    tag: {
        color: "#FF8B79",
    },
    boolean: {
        color: "#FF8B79",
    },
    number: {
        color: "#FF8B79",
    },
    constant: {
        color: "#FF8B79",
    },
    symbol: {
        color: "#FF8B79",
    },
    deleted: {
        color: "#FF8B79",
    },
    selector: {
        color: "#5EFFA0",
    },
    "attr-name": {
        color: "#5EFFA0",
    },
    string: {
        color: "#5EFFA0",
    },
    char: {
        color: "#5EFFA0",
    },
    builtin: {
        color: "#5EFFA0",
    },
    inserted: {
        color: "#5EFFA0",
    },
    operator: {
        color: "#9a6e3a",
        background: "transparent",
    },
    entity: {
        color: "#9a6e3a",
        background: "hsla(0, 0%, 100%, .5)",
        cursor: "help",
    },
    url: {
        color: "#9a6e3a",
        background: "hsla(0, 0%, 100%, .5)",
    },
    ".language-css .token.string": {
        color: "#9a6e3a",
        background: "hsla(0, 0%, 100%, .5)",
    },
    ".style .token.string": {
        color: "#9a6e3a",
        background: "hsla(0, 0%, 100%, .5)",
    },
    atrule: {
        color: "#00FAFF",
    },
    "attr-value": {
        color: "#00FAFF",
    },
    keyword: {
        color: "#00FAFF",
    },
    function: {
        color: "#ff644d",
    },
    "class-name": {
        color: "#ff644d",
    },
    regex: {
        color: "#FEC97B",
    },
    important: {
        color: "#FEC97B",
        fontWeight: "bold",
    },
    variable: {
        color: "#FEC97B",
    },
    bold: {
        fontWeight: "bold",
    },
    italic: {
        fontStyle: "italic",
    },
};

export default theme;
