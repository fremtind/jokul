import { glob } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const packageRoot = path.resolve(
    process.cwd(),
    "..",
    "packages",
    "jokul",
    "src",
    "components",
);

export async function GET() {
    try {
        const componentNames: string[] = [];
        for await (const component of glob("*", {
            cwd: packageRoot,
            withFileTypes: true,
        })) {
            if (component.isDirectory()) {
                componentNames.push(component.name);
            }
        }

        const formattedOptions = componentNames.sort().map((component) => ({
            title: component,
            value: component,
        }));

        return NextResponse.json(formattedOptions);
    } catch (error) {
        console.error("Error reading component folders:", error);
        return NextResponse.json(
            { error: "Failed to read component folders" },
            { status: 500 },
        );
    }
}
