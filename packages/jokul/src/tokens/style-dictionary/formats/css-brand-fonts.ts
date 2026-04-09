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
    webfontsDir?: string;
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
        const webfontsDir = options?.webfontsDir;
        const webfontsVarName = options?.webfontsVarName;

        if (!selector || !webfontsDir || !webfontsVarName) {
            throw new Error(
                'The "css/brand-fonts" format requires selector, webfontsDir and webfontsVarName options.',
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
$${webfontsVarName}: "${webfontsDir}" !default;

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
