import type { MarkdownBlock, MarkdownHeadingBlock } from "./markdown.types";

const toHeadingId = (text: string) =>
    `release-${text
        .toLowerCase()
        .replace(/[^\d.]+/g, "")
        .replaceAll(".", "-")}`;

export const isMajorRelease = (text: string) => /^\d+\.0\.0$/.test(text);

export const getMajorReleases = (blocks: MarkdownBlock[]) =>
    blocks.filter(
        (block): block is MarkdownHeadingBlock =>
            block.type === "heading" &&
            block.level === 2 &&
            Boolean(block.id) &&
            isMajorRelease(block.text),
    );

export const getLevelTwoHeadings = (blocks: MarkdownBlock[]) =>
    blocks.filter(
        (block): block is MarkdownHeadingBlock =>
            block.type === "heading" &&
            block.level === 2 &&
            Boolean(block.id),
    );

export const parseMarkdownBlocks = (content: string): MarkdownBlock[] => {
    const normalizedContent = content.replace(/^# .+\n+/, "");
    const lines = normalizedContent.split(/\r?\n/);
    const blocks: MarkdownBlock[] = [];
    let paragraphLines: string[] = [];
    let listItems: string[][] = [];
    let codeLines: string[] = [];
    let codeLanguage: string | undefined;
    let inCodeBlock = false;

    const flushParagraph = () => {
        if (!paragraphLines.length) {
            return;
        }

        blocks.push({
            type: "paragraph",
            lines: paragraphLines,
        });
        paragraphLines = [];
    };

    const flushList = () => {
        if (!listItems.length) {
            return;
        }

        blocks.push({
            type: "list",
            items: listItems,
        });
        listItems = [];
    };

    const flushCodeBlock = () => {
        if (!codeLines.length && !codeLanguage) {
            return;
        }

        blocks.push({
            type: "code",
            code: codeLines.join("\n"),
            language: codeLanguage,
        });
        codeLines = [];
        codeLanguage = undefined;
    };

    for (const line of lines) {
        const trimmedLine = line.trimEnd();
        const fenceMatch = trimmedLine.match(/^```(\w+)?\s*$/);
        const headingMatch = trimmedLine.match(
            /^(#{1,4})\s+(?:\[)?([^\](]+?)(?:\]\([^)]+\))?(?:\s+\(\d{4}-\d{2}-\d{2}\))?$/,
        );

        if (fenceMatch) {
            if (inCodeBlock) {
                flushCodeBlock();
                inCodeBlock = false;
                continue;
            }

            flushParagraph();
            flushList();
            inCodeBlock = true;
            codeLanguage = fenceMatch[1];
            continue;
        }

        if (inCodeBlock) {
            codeLines.push(line);
            continue;
        }

        if (!trimmedLine) {
            flushParagraph();
            flushList();
            continue;
        }

        if (headingMatch) {
            flushParagraph();
            flushList();
            const headingLevel = Math.min(
                4,
                Math.max(2, headingMatch[1].length),
            ) as 2 | 3 | 4;

            blocks.push({
                type: "heading",
                level: headingLevel,
                text: headingMatch[2].trim(),
                id:
                    headingLevel === 2
                        ? toHeadingId(headingMatch[2].trim())
                        : undefined,
            });
            continue;
        }

        if (trimmedLine.startsWith("- ")) {
            flushParagraph();
            listItems.push([trimmedLine.slice(2)]);
            continue;
        }

        if (/^\s+/.test(line) && listItems.length) {
            listItems[listItems.length - 1].push(trimmedLine.trim());
            continue;
        }

        flushList();
        paragraphLines.push(trimmedLine);
    }

    flushParagraph();
    flushList();
    flushCodeBlock();

    return blocks;
};
