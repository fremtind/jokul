import { NavCard } from "@fremtind/jkl-card-react";
import { WithChildren } from "@fremtind/jkl-core";
import { DescriptionDetail, DescriptionList, DescriptionTerm } from "@fremtind/jkl-description-list-react";
import { OrderedList, UnorderedList } from "@fremtind/jkl-list-react";
import { InfoMessage, SuccessMessage, WarningMessage } from "@fremtind/jkl-message-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableColumn,
    TableColumnGroup,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@fremtind/jkl-table-react";
import { MDXProvider } from "@mdx-js/react";
import cn from "classnames";
import React, { FC } from "react";
import { ComponentExample } from "../../../doc-utils";
import { CodeDemo } from "../components/code-demo";
import { DoDontExample } from "../components/DoDontExample";
import { ExampleVideo } from "../components/ExampleVideo";
import { Experimental } from "../components/Experimental/Experimental";
import { Grid } from "../components/Grid";
import { PortalImage } from "../components/portal-image";
import {
    PageTitle,
    HeadingLarge,
    HeadingMedium,
    HeadingSmall,
    HeadingXS,
    Paragraph,
    InlineCode,
    CodeBlock,
    Ingress,
    ListItem,
    Anchor,
    Blockquote,
} from "../components/Typography";

interface WithClassNameProps {
    className?: string;
}

function withClassName<T extends WithClassNameProps>(component: React.FC<T>, wrapperClassName: string): React.FC<T> {
    const C = component;
    const wrapped = (props: T) => <C {...props} className={cn(props.className, wrapperClassName)} />;
    wrapped.displayName = component.displayName;
    return wrapped;
}

const components = {
    h1: PageTitle,
    h2: HeadingLarge,
    h3: HeadingMedium,
    h4: HeadingSmall,
    h5: HeadingXS,
    p: Paragraph,
    ul: withClassName(UnorderedList, "jkl-portal-ul"),
    ol: withClassName(OrderedList, "jkl-portal-ol"),
    li: ListItem as FC,
    img: PortalImage,
    a: Anchor,
    blockquote: Blockquote,
    table: Table,
    thead: TableHead,
    tbody: TableBody,
    tfoot: TableFooter,
    td: TableCell,
    th: TableHeader,
    tr: TableRow,
    caption: TableCaption,
    col: TableColumn,
    colgroup: TableColumnGroup,
    pre: CodeBlock,
    code: InlineCode,
    dl: DescriptionList,
    dt: DescriptionTerm,
    dd: DescriptionDetail,
    Grid,
    Ingress,
    ComponentExample,
    DoDontExample,
    ExampleVideo,
    Experimental,
    InfoMessage,
    WarningMessage,
    SuccessMessage,
    CodeDemo,
    PortalImage,
    NavCard: withClassName(NavCard, "jkl-portal-nav-card"),
};

export const FormatProvider: FC<WithChildren> = ({ children }) => {
    return <MDXProvider components={components}>{children}</MDXProvider>;
};
