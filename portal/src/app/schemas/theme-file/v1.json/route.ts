import schema from "@fremtind/jokul/theme/theme-file.v1.schema.json";

// Adressen er `$id` i skjemaet og `THEME_FILE_SCHEMA_URL` i @fremtind/jokul/theme,
// så den må ikke endres. En ny versjon av formatet får en ny rute ved siden av.
export const dynamic = "force-static";

export function GET() {
    return Response.json(schema, {
        headers: {
            "Content-Type": "application/schema+json",
            "Access-Control-Allow-Origin": "*",
        },
    });
}
