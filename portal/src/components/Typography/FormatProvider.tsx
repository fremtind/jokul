import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "@fremtind/jkl-core";
import { OrderedList, UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import { ComponentExample, FlowExample, ResponsiveExample } from "@fremtind/jkl-portal-components";
import { InfoMessage } from "@fremtind/jkl-message-box-react";
import { PortalImg } from "../PortalImg/PortalImg";
import { Experimental } from "../Experimental/Experimental";
import { CodeDemo } from "../CodeDemo/CodeDemo";

import { DoDontExample } from "../DoDontExample";
import {
    PageTitle,
    HeadingLarge,
    HeadingMedium,
    HeadingSmall,
    HeadingXS,
    Paragraph,
    InlineCode,
    CodeBlock,
    ArticleLead as Ingress,
} from "../Typography";

const components = {
    h1: PageTitle,
    h2: HeadingLarge,
    h3: HeadingMedium,
    h4: HeadingSmall,
    h5: HeadingXS,
    p: Paragraph,
    ul: UnorderedList as React.FC,
    ol: OrderedList as React.FC,
    li: ListItem as React.FC,
    img: PortalImg,
    a: Link,
    pre: CodeBlock,
    inlineCode: InlineCode,
    Ingress,
    ComponentExample,
    FlowExample,
    DoDontExample,
    Experimental,
    InfoMessage,
    ResponsiveExample,
    CodeDemo,
};

interface Props {
    children: ReactNode;
}

export function FormatProvider({ children }: Props) {
    return <MDXProvider components={components}>{children}</MDXProvider>;
}
