import { Link } from "@fremtind/jokul/link";
import type { ReactNode } from "react";

const GITHUB_REPOSITORY_URL = "https://github.com/fremtind/jokul";

const renderExternalLink = (href: string, children: ReactNode, key: string) => (
    <Link key={key} href={href} target="_blank" rel="noopener noreferrer">
        {children}
    </Link>
);

const renderLinkedText = (text: string) => {
    const nodes: ReactNode[] = [];
    const pattern =
        /(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\))|(https?:\/\/[^\s)]+)|(?<!\w)#(\d+)\b|\b([0-9a-f]{7})\b(?=:)/g;
    let lastIndex = 0;
    let match = pattern.exec(text);

    while (match) {
        if (match.index > lastIndex) {
            nodes.push(text.slice(lastIndex, match.index));
        }

        if (match[2] && match[3]) {
            nodes.push(
                renderExternalLink(
                    match[3],
                    match[2],
                    `${match.index}-markdown`,
                ),
            );
        } else if (match[4]) {
            nodes.push(
                renderExternalLink(match[4], match[4], `${match.index}-url`),
            );
        } else if (match[5]) {
            nodes.push(
                renderExternalLink(
                    `${GITHUB_REPOSITORY_URL}/issues/${match[5]}`,
                    `#${match[5]}`,
                    `${match.index}-issue`,
                ),
            );
        } else if (match[6]) {
            nodes.push(
                renderExternalLink(
                    `${GITHUB_REPOSITORY_URL}/commit/${match[6]}`,
                    match[6],
                    `${match.index}-commit`,
                ),
            );
        }

        lastIndex = pattern.lastIndex;
        match = pattern.exec(text);
    }

    if (lastIndex < text.length) {
        nodes.push(text.slice(lastIndex));
    }

    return nodes;
};

interface MarkdownInlineContentProps {
    text: string;
}

export const MarkdownInlineContent = ({
    text,
}: MarkdownInlineContentProps) => {
    const segments = text.split(/(`[^`]+`)/g).filter(Boolean);

    return segments.map((segment, index) => {
        if (segment.startsWith("`") && segment.endsWith("`")) {
            return <code key={index}>{segment.slice(1, -1)}</code>;
        }

        return <span key={index}>{renderLinkedText(segment)}</span>;
    });
};
