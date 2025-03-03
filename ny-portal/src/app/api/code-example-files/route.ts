import nodePath, { resolve } from "node:path";
import { NextResponse } from "next/server";
import glob from "tiny-glob";
import { PATH_SEPARATOR } from "@/components/portable-text/code-example/CodeExample";

export async function GET() {
    try {
        const codeExamplePaths = await glob("**/documentation/*.tsx", {
            cwd: resolve("..", "packages", "jokul", "src", "components"),
        });

        const optionGroups = Object.groupBy(
            codeExamplePaths.sort().map((examplePath) => ({
                label: examplePath.substring(
                    examplePath.lastIndexOf(nodePath.sep) + 1,
                    examplePath.lastIndexOf("."),
                ),
                value: examplePath.replaceAll(nodePath.sep, PATH_SEPARATOR),
                group: examplePath.split(nodePath.sep)[0],
            })),
            (examplePaths) => examplePaths.group,
        );

        return NextResponse.json(optionGroups);
    } catch (error) {
        console.error("Error reading code example files", error);
        return NextResponse.json(
            { error: "Failed to read code example files" },
            { status: 500 },
        );
    }
}
