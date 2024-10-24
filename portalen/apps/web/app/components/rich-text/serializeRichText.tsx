import type { WithOptionalChildren } from '@fremtind/jkl-core';
import { Link } from '@remix-run/react';
import escapeHTML from 'escape-html';
import type { MainMenu } from 'payload/generated-types';
import React, { type FC, Fragment } from 'react';
import { Text } from 'slate';
import { MediaViewer } from '../media';
import {
    defaultRenderers,
    fallbackRenderer as defaultFallbackRenderer,
} from './defaultRenderers';
import type { RichTextChildren } from './types';
import { isInternalLink, isLink } from './types';
import { getPagePathFromId } from '~/components/navigation/utils';

type SerializerOptions = {
    mainMenu: MainMenu;
    renderers?: Record<string, FC<WithOptionalChildren>>;
    fallbackRenderer?: FC<WithOptionalChildren>;
    children?: RichTextChildren;
};

export const serializeRichText = ({
    mainMenu,
    renderers = defaultRenderers,
    fallbackRenderer = defaultFallbackRenderer,
    children,
}: SerializerOptions) =>
    children?.map((node, i) => {
        if (isLink(node)) {
            if (isInternalLink(node)) {
                return (
                    <Link
                        key={i}
                        className="jkl-link"
                        to={
                            getPagePathFromId(mainMenu, node.doc.value.id) ||
                            '#'
                        }
                    >
                        {serializeRichText({
                            mainMenu,
                            renderers,
                            fallbackRenderer,
                            children: node.children,
                        })}
                    </Link>
                );
            }

            return (
                <a key={i} className="jkl-link" href={node.url}>
                    {serializeRichText({
                        mainMenu,
                        renderers,
                        fallbackRenderer,
                        children: node.children,
                    })}
                </a>
            );
        }
        if (Text.isText(node)) {
            let text = (
                <span
                    dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
                />
            );

            if (node.bold) {
                text = <strong key={i}>{text}</strong>;
            }

            if (node.code) {
                text = <code key={i}>{text}</code>;
            }

            if (node.italic) {
                text = <em key={i}>{text}</em>;
            }

            if (node.underline) {
                text = (
                    <span style={{ textDecoration: 'underline' }} key={i}>
                        {text}
                    </span>
                );
            }

            if (node.strikethrough) {
                text = (
                    <span style={{ textDecoration: 'line-through' }} key={i}>
                        {text}
                    </span>
                );
            }

            return <Fragment key={i}>{text}</Fragment>;
        }

        if (!node) {
            return null;
        }

        if (node.type in renderers) {
            const Renderer = renderers[node.type];
            return (
                <Renderer key={i}>
                    {serializeRichText({
                        mainMenu,
                        renderers,
                        fallbackRenderer,
                        children: node.children,
                    })}
                </Renderer>
            );
        }

        if (node.type === 'upload' && node.value) {
            return <MediaViewer key={i} src={node.value} />;
        }

        const Renderer = fallbackRenderer;
        return (
            <Renderer key={i}>
                {serializeRichText({
                    mainMenu,
                    renderers,
                    fallbackRenderer,
                    children: node.children,
                })}
            </Renderer>
        );
    });
