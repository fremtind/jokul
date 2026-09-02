import type {
    Dictionary,
    File,
    Format,
    TransformedToken,
} from "style-dictionary/types";
import { fileHeader } from "style-dictionary/utils";
import { PREFIX } from "../config.js";

type BrandFontsOptions = {
    selector?: string;
    baseFontsModule?: string;
    webfontsSubdir?: string;
    webfontsVarName?: string;
};

type FontFaceValue = {
    family: string;
    fileName: string;
    weight: number | string;
    style: "normal" | "italic" | string;
    display?: string;
};

function isFontFaceToken(token: TransformedToken): boolean {
    return (
        token.path.length >= 2 &&
        token.path[0] === "font" &&
        token.path[1] === "face"
    );
}

function isFontFamilyToken(token: TransformedToken): boolean {
    return (
        token.path.length === 3 &&
        token.path[0] === "font" &&
        token.path[1] === "family"
    );
}

const cssBrandFontsFormat: Format = {
    name: "css/brand-fonts",
    format: async ({
        dictionary,
        file,
        options,
    }: {
        dictionary: Dictionary;
        file: File;
        options?: BrandFontsOptions;
    }) => {
        const selector = options?.selector;
        const baseFontsModule = options?.baseFontsModule;
        const webfontsSubdir = options?.webfontsSubdir;
        const webfontsVarName = options?.webfontsVarName;

        if (
            !selector ||
            !baseFontsModule ||
            !webfontsSubdir ||
            !webfontsVarName
        ) {
            throw new Error(
                'The "css/brand-fonts" format requires selector, baseFontsModule, webfontsSubdir and webfontsVarName options.',
            );
        }

        const fontFaceTokens = dictionary.allTokens.filter(isFontFaceToken);
        const fontFamilyTokens = dictionary.allTokens.filter(isFontFamilyToken);

        const faceDeclarations = fontFaceTokens
            .map((token) => {
                const value = token.original?.value as FontFaceValue;
                const fontDisplay = value.display ?? "fallback";
                return `    @font-face {
        font-family: "${value.family}";
        font-display: ${fontDisplay};
        font-weight: ${value.weight};
        font-style: ${value.style};
        src: url("#{$${webfontsVarName}}/${value.fileName}") format("woff2");
    }`;
            })
            .join("\n\n");

        const familyDeclarations = fontFamilyTokens
            .map((token) => {
                const variableName = token.path.join("-");
                const value = token.original?.value ?? token.value;
                return `        --${PREFIX}-${variableName}: ${value};`;
            })
            .join("\n");

        return `${await fileHeader({ file })}
@use "${baseFontsModule}" as jokul-fonts;

// Arver $webfonts-dir slik at konsumenter som flytter fontmappa bare trenger å
// konfigurere den ene variabelen. Kan fortsatt overstyres alene ved behov.
$${webfontsVarName}: "#{jokul-fonts.$webfonts-dir}/${webfontsSubdir}" !default;

@layer jokul.theme {
${faceDeclarations}

    ${selector} {
${familyDeclarations}
    }
}
`;
    },
};

export default cssBrandFontsFormat;
