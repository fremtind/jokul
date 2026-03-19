export type MarkdownHeadingBlock = {
    type: "heading";
    level: 2 | 3 | 4;
    text: string;
    id?: string;
};

export type MarkdownListBlock = {
    type: "list";
    items: string[][];
};

export type MarkdownParagraphBlock = {
    type: "paragraph";
    lines: string[];
};

export type MarkdownCodeBlock = {
    type: "code";
    code: string;
    language?: string;
};

export type MarkdownBlock =
    | MarkdownHeadingBlock
    | MarkdownListBlock
    | MarkdownParagraphBlock
    | MarkdownCodeBlock;
