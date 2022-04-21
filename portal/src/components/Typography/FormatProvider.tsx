import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "@fremtind/jkl-core";
import { DescriptionDetail, DescriptionList, DescriptionTerm } from "@fremtind/jkl-description-list-react";
import { OrderedList, UnorderedList } from "@fremtind/jkl-list-react";
import { ComponentExample } from "../../../../doc-utils";
import { NavCard } from "@fremtind/jkl-card-react";
import { InfoMessageBox, WarningMessageBox } from "@fremtind/jkl-message-box-react";
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
import { PortalImage } from "../portal-image";
import { Grid } from "../Grid";
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
    Ingress,
    ListItem,
} from "../Typography";
import { Blockquote } from "./Typography";
import cn from "classnames";

/** Don't add class jkl-link to <a /> if it's styled as a button */
const Anchor: FC<{ className?: string }> = (props) => {
    if (props.className && props.className.includes("jkl-button")) {
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return <a {...props} />;
    }
    return <Link {...props} />;
};

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
    a: Anchor as FC,
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
    inlineCode: InlineCode,
    dl: DescriptionList,
    dt: DescriptionTerm,
    dd: DescriptionDetail,
    Grid,
    Ingress,
    ComponentExample,
    DoDontExample,
    ExampleVideo,
    Experimental,
    InfoMessageBox,
    WarningMessageBox,
    CodeDemo,
    PortalImage,
    NavCard: withClassName(NavCard, "jkl-portal-nav-card"),
};

export const FormatProvider: FC = ({ children }) => {
    return <MDXProvider components={components}>{children}</MDXProvider>;
};
