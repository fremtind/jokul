import { type WithOptionalChildren } from "@fremtind/jkl-core";
import { ListItem, OrderedList, UnorderedList } from "@fremtind/jkl-list-react";
import React, { type FC } from "react";

export const NODE_TYPES = ["h1", "h2", "h3", "h4", "h5", "h6", "quote", "ul", "ol", "li"] as const;

const H1Renderer: FC<WithOptionalChildren> = ({ children }) => (
    <h1 className="jkl-heading-1 jkl-spacing-24--bottom">{children}</h1>
);

const H2Renderer: FC<WithOptionalChildren> = ({ children }) => (
    <h2 className="jkl-heading-2 jkl-spacing-24--bottom">{children}</h2>
);

const H3Renderer: FC<WithOptionalChildren> = ({ children }) => (
    <h3 className="jkl-heading-3 jkl-spacing-24--bottom">{children}</h3>
);

const H4Renderer: FC<WithOptionalChildren> = ({ children }) => (
    <h4 className="jkl-heading-4 jkl-spacing-24--bottom">{children}</h4>
);

const H5Renderer: FC<WithOptionalChildren> = ({ children }) => (
    <h5 className="jkl-heading-5 jkl-spacing-24--bottom">{children}</h5>
);

const H6Renderer: FC<WithOptionalChildren> = ({ children }) => (
    <h6 className="jkl-heading-6 jkl-spacing-24--bottom">{children}</h6>
);

const QuoteRenderer: FC<WithOptionalChildren> = ({ children }) => <blockquote>{children}</blockquote>;

const UlRenderer: FC<WithOptionalChildren> = ({ children }) => <UnorderedList>{children}</UnorderedList>;

const OlRenderer: FC<WithOptionalChildren> = ({ children }) => <OrderedList>{children}</OrderedList>;

const LiRenderer: FC<WithOptionalChildren> = ({ children }) => <ListItem>{children}</ListItem>;

const ParagraphRenderer: FC<WithOptionalChildren> = ({ children }) => (
    <p className="jkl-spacing-24--bottom">{children}</p>
);

export const defaultRenderers: Record<(typeof NODE_TYPES)[number], FC<WithOptionalChildren>> = {
    h1: H1Renderer,
    h2: H2Renderer,
    h3: H3Renderer,
    h4: H4Renderer,
    h5: H5Renderer,
    h6: H6Renderer,
    quote: QuoteRenderer,
    ul: UlRenderer,
    ol: OlRenderer,
    li: LiRenderer,
};

export const fallbackRenderer = ParagraphRenderer;
