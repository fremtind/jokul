import type { PrismTheme } from "prism-react-renderer";

const bakgrunn = "#F4F2EF";
const tekst = "#1B1917";
const dusTekst = "#636060";

const nokkelord = "#49538D";
const verdi = "#544545";

const jokulLight: PrismTheme = {
    plain: {
        color: tekst,
        backgroundColor: bakgrunn,
    },
    styles: [
        {
            types: ["comment"],
            style: {
                color: dusTekst,
            },
        },
        {
            types: ["builtin"],
            style: {
                color: nokkelord,
            },
        },
        {
            types: ["number", "variable", "inserted"],
            style: {
                color: verdi,
            },
        },
        {
            types: ["operator"],
            style: {
                color: tekst,
            },
        },
        {
            types: ["constant", "char"],
            style: {
                color: verdi,
            },
        },
        {
            types: ["tag"],
            style: {
                color: nokkelord,
            },
        },
        {
            types: ["attr-name"],
            style: {
                color: verdi,
            },
        },
        {
            types: ["deleted", "string"],
            style: {
                color: verdi,
            },
        },
        {
            types: ["changed", "punctuation"],
            style: {
                color: nokkelord,
            },
        },
        {
            types: ["function", "keyword"],
            style: {
                color: nokkelord,
            },
        },
        {
            types: ["class-name"],
            style: {
                color: verdi,
            },
        },
    ],
};

export default jokulLight;
