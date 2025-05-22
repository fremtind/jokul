import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import glob from "tiny-glob";

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
        const paths = (await glob("*", { cwd: packageRoot })).filter(
            (component) =>
                fs.statSync(path.resolve(packageRoot, component)).isDirectory(),
        );

        const formattedOptions = paths.sort().map((component) => ({
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
