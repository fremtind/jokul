import { createElement, ReactNode, FunctionComponent } from "react";
import "@fremtind/jkl-list/list.min.css";
import "@fremtind/jkl-message-box/message-box.min.css";
import { H1, H2, H3, H4, H5, Body, Link } from "@fremtind/jkl-typography-react";
import { OrderedList, UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import { InfoMessage } from "@fremtind/jkl-message-box-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const style = {
    ...prism,
    'pre[class*="language-"]': {
        lineHeight: "1.4",
    },
    operator: {
        ...prism.operator,
        background: "transparent",
    },
};

interface Props {
    children?: ReactNode;
}

interface HeadingProps extends Props {
    level: number;
}

interface ListProps extends Props {
    ordered: boolean;
}

interface CodeProps extends Props {
    language?: string;
    value: string;
}

export const jokulRenderer = {
    paragraph: Body,
    list: jokulList,
    listItem: ListItem,
    heading: jokulHeading,
    link: Link,
    code: codeBlock,
    inlineCode,
    blockquote: infoBox,
};

function jokulList({ ordered, children }: ListProps) {
    return ordered ? createElement(OrderedList, null, children) : createElement(UnorderedList, null, children);
}

function jokulHeading({ level, children }: HeadingProps) {
    let Element: FunctionComponent;
    switch (level) {
        case 1:
            Element = H1;
            break;
        case 2:
            Element = H2;
            break;
        case 3:
            Element = H3;
            break;
        case 4:
            Element = H4;
            break;
        case 5:
            Element = H5;
            break;

        default:
            Element = Body;
            break;
    }
    return createElement(Element, null, children);
}

function codeBlock({ language, value }: CodeProps) {
    return createElement(
        SyntaxHighlighter,
        {
            language,
            style,
            className: "portal-code-block",
            codeTagProps: { style: {} },
            "data-language": language,
        },
        value,
    );
}

function inlineCode({ children }: Props) {
    return createElement("code", { className: "portal-inline-code" }, children);
}

function infoBox({ children }: Props) {
    return createElement(InfoMessage, { className: "jkl-spacing--bottom-2", title: "Tips", children });
}

export const renderer = {};
