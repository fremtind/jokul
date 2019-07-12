import { createElement, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface HeadingProps extends Props {
    level: number;
}

export const renderer = {
    paragraph: ({ children }: Props) => createElement("p", { className: "jkl-p" }, children),
    heading: ({ level, children }: HeadingProps) =>
        createElement(`h${level}`, { className: `jkl-h${level + 1}` }, children),
    list: ({ children }: Props) => createElement("ul", { className: "jkl-bullet-list" }, children),
    listItem: ({ children }: Props) => createElement("li", { className: "jkl-bullet-list__item" }, children),
};
