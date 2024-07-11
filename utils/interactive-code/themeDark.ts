import type { PrismTheme } from "prism-react-renderer";

const bakgrunn = "#1B1917";
const tekst = "#F9F9F9";
const dusTekst = "#C8C5C3";

const nokkelord = "#B6E5FF";
const verdi = "#D7DDB4";

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
