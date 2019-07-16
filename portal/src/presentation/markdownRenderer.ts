import { createElement, ReactNode } from "react";
import "@fremtind/jkl-message-box/message-box.min.css";

interface Props {
    children?: ReactNode;
}

interface HeadingProps extends Props {
    level: number;
}

const defaultRenderer = {
    paragraph: ({ children }: Props) => createElement("p", { className: "jkl-p" }, children),
    list: ({ children }: Props) => createElement("ul", { className: "jkl-bullet-list" }, children),
    listItem: ({ children }: Props) => createElement("li", { className: "jkl-bullet-list__item" }, children),
    blockquote: ({ children }: Props) =>
        createElement("div", { className: "jkl-message-box jkl-message-box__info" }, children),
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
