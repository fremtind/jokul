const fs = require("fs");
const tokens = require("./jkl/tokens/figma.json");

function resolveValueFromReference(path) {
    const { reference } = tokens;
    const rawPath = path.replace(/[{}]/g, "");

    return rawPath.split(".").reduce((object, index) => object[index], reference).value;
}

function generateColors(theme) {
    let output = `@include jkl.${theme}-mode-variables {\n`;

    Object.entries(tokens[theme].color).map(([colorName, variants]) => {
        Object.entries(variants).map(([variantName, { value }]) => {
            const variant = variantName === "normal" ? "" : `-${variantName}`;
            output += `    --jkl-color-${colorName}${variant}: ${resolveValueFromReference(value)};\n`;
        });
    });

    output += `};\n`;

    return output;
}

function camelToKebab(input) {
    return input.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function parseTypographyStep(step, indent) {
    const [rawName, { value: properties }] = step;
    const name = camelToKebab(rawName);
    const fontSize = `jkl.rem(${properties.fontSize}px)`;
    const fontWeight =
        properties.fontWeight === "Bold" ? "jkl.$typography-weight-bold" : "jkl.$typography-weight-normal";
    const lineHeight = `jkl.rem(${properties.lineHeight}px)`;

    return `${indent}--jkl-font-size-${name}: #{${fontSize}};
${indent}--jkl-font-weight-${name}: #{${fontWeight}};
${indent}--jkl-line-height-${name}: #{${lineHeight}};`;
}

function generateTypography() {
    let output = `:root {\n`;

    output += Object.entries(tokens["type-mobile"])
        .map((step) => parseTypographyStep(step, "    "))
        .join("\n");

    output += `

    @include jkl.from-medium-device {
`;

    output += Object.entries(tokens["type-desktop"])
        .map((step) => parseTypographyStep(step, "        "))
        .join("\n");

    output += `
    }
}
`;

    return output;
}

function convertSingleShadow(shadow) {
    const inset = shadow.type === "dropShadow" ? "" : "inset ";

    return `${inset}${shadow.x}px ${shadow.y}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`;
}

function generateShadowTokens() {
    let output = `:root {\n\n`;

    Object.entries(tokens.reference.elevation).map(([name, { value }]) => {
        output += `    --jkl-elevation-${name}: ${value.map(convertSingleShadow).join(", ")};\n`;
    });

    output += `\n};`;

    return output;
}

// SKRIV UT FARGEVARIABLER TIL SCSS

const colorsFileContent = `@use "../../jkl";

${generateColors("light")}
${generateColors("dark")}`;

fs.writeFile("./styles/generated/_colors.scss", colorsFileContent, (err) => {
    if (err) {
        console.err("Klarte ikke å skrive ut fargevariabler");
    }

    console.log("Fargevariabler skrevet til _colors.scss");
});

// SKRIV UT TYPOGRAFIVARIABLER TIL SCSS

const typographyFileContent = `@use "../../jkl";

${generateTypography()}`;

fs.writeFile("./styles/generated/_typography.scss", typographyFileContent, (err) => {
    if (err) {
        console.err("Klarte ikke å skrive ut typografivariabler");
    }

    console.log("Typografivariabler skrevet til _typography.scss");
});

// SKRIV UT SKYGGEVARIABLES TIL SCSS

fs.writeFile("./styles/generated/_elevation.scss", generateShadowTokens(), (err) => {
    if (err) {
        console.err("Klarte ikke å skrive ut skyggetokens");
    }

    console.log("Skyggetokens skrevet til _elevation.scss");
});

// SKRIV UT INDEX-FIL SOM EKSPORTERER VARIABLENE

function generateIndexFile(filesToForward) {
    return filesToForward.map((file) => `@forward "${file}";`).join("\n");
}

fs.writeFile("./styles/generated/_index.scss", generateIndexFile(["colors", "typography", "elevation"]), (err) => {
    if (err) {
        console.err("Klarte ikke å skrive ut index-fil");
    }

    console.log("Index-fil for variabler skrevet");
});
