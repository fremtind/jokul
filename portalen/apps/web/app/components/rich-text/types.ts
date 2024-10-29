import type { WithOptionalChildren } from '@fremtind/jkl-core';
import type { Media } from '@org/cms';
import type { FC } from 'react';

// eslint-disable-next-line no-use-before-define
export type RichTextChildren = Array<Leaf | TextLink>;

export type InternalLink = {
    type: 'link';
    linkType: 'internal';
    children?: RichTextChildren;
    doc: {
        relationTo: string;
        value: {
            id: string;
        };
    };
};

export type ExternalLink = {
    type: 'link';
    linkType: 'custom';
    url: string;
    children?: RichTextChildren;
};

export type TextLink = ExternalLink | InternalLink;

export type Leaf = {
    type: string;
    value?: Media;
    children?: RichTextChildren;
    url?: string;
    [key: string]: unknown;
};

export function isLink(node: Leaf | TextLink): node is TextLink {
    return (node as TextLink).type === 'link';
}

export function isInternalLink(node: Leaf | TextLink): node is InternalLink {
    return (node as TextLink).linkType === 'internal';
}

export type RichTextNodeRenderer = FC<WithOptionalChildren>;
