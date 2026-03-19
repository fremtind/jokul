import { readFile } from "node:fs/promises";
import path from "node:path";
import { parseMarkdownBlocks } from "./markdown.parser";

export const getJokulPackageDocumentPath = (fileName: string) =>
    path.join(process.cwd(), "..", "packages", "jokul", fileName);

export const getMarkdownBlocks = async (filePath: string) => {
    const markdown = await readFile(filePath, "utf-8");
    return parseMarkdownBlocks(markdown);
};
