import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "@fremtind/jkl-core";
import { OrderedList, UnorderedList } from "@fremtind/jkl-list-react";
import { Table } from "@fremtind/jkl-table-react";
import { ComponentExample, FlowExample, ResponsiveExample } from "../../../../doc-utils";
import { InfoMessage } from "@fremtind/jkl-message-box-react";
import { PortalImg } from "../PortalImg/PortalImg";
import { Experimental } from "../Experimental/Experimental";
import { CodeDemo } from "../CodeDemo/CodeDemo";

import { DoDontExample } from "../DoDontExample";
import { ExampleVideo } from "../ExampleVideo";
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
    ListItem,
} from "../Typography";

/** Don't add class jkl-link to <a /> if it's styled as a button */
const Anchor: React.FC<{ className?: string }> = (props) => {
    if (props.className && props.className.includes("jkl-button")) {
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return <a {...props} />;
    }
    return <Link {...props} />;
};

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
    a: Anchor as React.FC,
    pre: CodeBlock,
    inlineCode: InlineCode,
    Ingress,
    ComponentExample,
    FlowExample,
    DoDontExample,
    ExampleVideo,
    Experimental,
    InfoMessage,
    ResponsiveExample,
    CodeDemo,
    Table,
};

interface Props {
    children: ReactNode;
}

export function FormatProvider({ children }: Props) {
    return <MDXProvider components={components}>{children}</MDXProvider>;
}
