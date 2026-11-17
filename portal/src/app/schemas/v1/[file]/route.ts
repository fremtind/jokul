import colorPalette from "@jokul-schemas/color-palette.schema.json";
import colorTokens from "@jokul-schemas/color-tokens.schema.json";
import colorValue from "@jokul-schemas/color-value.schema.json";
import fontFace from "@jokul-schemas/font-face.schema.json";
import fontFamily from "@jokul-schemas/font-family.schema.json";
import typographyTokens from "@jokul-schemas/typography-tokens.schema.json";

// Skjemaene importeres statisk slik at de bundles med portalen. Da fungerer
// det også i standalone-bygget, som ikke tar med filer fra `packages/`.
const schemas: Record<string, object> = {
    "color-palette.schema.json": colorPalette,
    "color-tokens.schema.json": colorTokens,
    "color-value.schema.json": colorValue,
    "font-face.schema.json": fontFace,
    "font-family.schema.json": fontFamily,
    "typography-tokens.schema.json": typographyTokens,
};

export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(schemas).map((file) => ({ file }));
}

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ file: string }> },
) {
    const { file } = await params;
    const schema = schemas[file];

    if (!schema) {
        return new Response("Not found", { status: 404 });
    }

    return Response.json(schema, {
        headers: {
            "Content-Type": "application/schema+json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
