import { createElement, ReactNode } from "react";
import "@fremtind/jkl-bullet-list/bullet-list.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";

interface Props {
    children?: ReactNode;
}

interface HeadingProps extends Props {
    level: number;
}

interface LinkProps extends Props {
    href: string;
}

const defaultRenderer = {
    paragraph: ({ children }: Props) =>
        createElement("p", { className: "jkl-p jkl-spacing--top-2 jkl-spacing--bottom-2" }, children),
    list: ({ children }: Props) => createElement("ul", { className: "jkl-bullet-list jkl-p" }, children),
    listItem: ({ children }: Props) => createElement("li", { className: "jkl-bullet-list__item" }, children),
    blockquote: ({ children }: Props) =>
        createElement(
            "div",
            { className: "jkl-message-box jkl-message-box__info jkl-spacing--top-3 jkl-spacing--bottom-3" },
            children,
        ),
    link: ({ children, href }: LinkProps) =>
        createElement("a", { className: "jkl-link jkl-link--inline", href }, children),
};

export const renderer = {
    ...defaultRenderer,
    heading: ({ level, children }: HeadingProps) => {
        return level === 1 ? null : createElement(`h${level}`, { className: `jkl-h${level + 1}` }, children);
    },
};

export const changelogRenderer = {
    ...defaultRenderer,
    heading: ({ level, children }: HeadingProps) =>
        createElement(`h${level}`, { className: `jkl-h${level + 1}` }, children),
};
