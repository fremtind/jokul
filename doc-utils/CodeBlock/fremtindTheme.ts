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
        color: "#68563E",
    },
    prolog: {
        color: "#68563E",
    },
    doctype: {
        color: "#68563E",
    },
    cdata: {
        color: "#68563E",
    },
    punctuation: {
        color: "#525252",
    },
    ".namespace": {
        opacity: ".7",
    },
    property: {
        color: "#AA1F23",
    },
    tag: {
        color: "#AA1F23",
    },
    boolean: {
        color: "#AA1F23",
    },
    number: {
        color: "#AA1F23",
    },
    constant: {
        color: "#AA1F23",
    },
    symbol: {
        color: "#AA1F23",
    },
    deleted: {
        color: "#AA1F23",
    },
    selector: {
        color: "#287E68",
    },
    "attr-name": {
        color: "#287E68",
    },
    string: {
        color: "#287E68",
    },
    char: {
        color: "#287E68",
    },
    builtin: {
        color: "#287E68",
    },
    inserted: {
        color: "#287E68",
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
        color: "#000AFA",
    },
    "attr-value": {
        color: "#000AFA",
    },
    keyword: {
        color: "#000AFA",
    },
    function: {
        color: "#cb252b",
    },
    "class-name": {
        color: "#cb252b",
    },
    regex: {
        color: "#9f5704",
    },
    important: {
        color: "#9f5704",
        fontWeight: "bold",
    },
    variable: {
        color: "#9f5704",
    },
    bold: {
        fontWeight: "bold",
    },
    italic: {
        fontStyle: "italic",
    },
};

export default theme;
