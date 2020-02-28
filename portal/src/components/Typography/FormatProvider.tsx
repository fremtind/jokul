import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "@fremtind/jkl-typography-react";
import { OrderedList, UnorderedList, ListItem } from "@fremtind/jkl-list-react";
import { ComponentExample } from "../ComponentExample";

import {
    PageTitle,
    HeadingLarge,
    HeadingMedium,
    HeadingSmall,
    HeadingXS,
    Paragraph,
    ArticleLead as Ingress,
} from "../Typography";

/* eslint-disable */
const components = {
    h1: PageTitle,
    h2: HeadingLarge,
    h3: HeadingMedium,
    h4: HeadingSmall,
    h5: HeadingXS,
    p: Paragraph,
    ul: UnorderedList,
    li: OrderedList,
    ol: ListItem,
    a: Link,
    Ingress,
    ComponentExample,
};
/* eslint-enable */

interface Props {
    children: ReactNode;
}

export function FormatProvider({ children }: Props) {
    return <MDXProvider components={components}>{children}</MDXProvider>;
}
