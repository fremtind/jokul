import fs from "node:fs/promises";

export const writeFile = async (
    path: string,
    content: string,
    dryRun = false,
) => {
    if (dryRun) {
        console.log(`Dry run: ${path}`);
        return Promise.resolve();
    }

    return fs.writeFile(path, content, { encoding: "utf-8" }).catch((error) => {
        console.error(`Error writing file: ${path}`);
        console.error(error);
        throw error;
    });
};
