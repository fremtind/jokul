import type { Blog, Component, Foundation, General, Pattern } from '@org/cms';
import React, { type FC } from 'react';
import Highlighter from 'react-highlight-words';
import { Image } from '../media';
import {
    getTextContentFromGeneralPage,
    getTextContentFromMeta,
    getTextContentFromTopicPage,
} from './search-utils';
import { useTheme } from '~/utils/useTheme';

interface SearchResultProps {
    search: string;
    result: Component | General | Foundation | Pattern | Blog;
}

export const SearchResult: FC<SearchResultProps> = ({ result, search }) => {
    const prefersColorScheme = useTheme();

    const image =
        prefersColorScheme === 'dark'
            ? result?.meta?.imageDark
            : result?.meta?.imageLight;

    let preview = typeof image === 'string' ? image : image?.url;

    if (!preview && result?.meta?.figma) {
        preview = `/api/figma/images?url=${encodeURIComponent(
            result?.meta?.figma
        )}`;
    }

    if (!preview) {
        preview = `/social-preview?title=${result.title}&mode=${prefersColorScheme}`;
    }

    return (
        <div className="search-result">
            <div className="search-result__preview" aria-hidden="true">
                <Image loading="lazy" src={preview} alt="" width="100%" />
            </div>
            <p className="search-result__title">
                <Highlighter
                    highlightClassName="search-result__highlight"
                    searchWords={search.split(' ')}
                    textToHighlight={result.title}
                />
            </p>
            <div className="search-result__highlighter">
                <Highlighter
                    highlightClassName="search-result__highlight"
                    searchWords={search.split(' ')}
                    textToHighlight={getContextualContent(search, result)}
                />
            </div>
        </div>
    );
};

function getContextualContent(
    search: string,
    result: Component | General | Foundation | Pattern | Blog
): string {
    let text = '';
    if ((result as General).sections) {
        text += getTextContentFromGeneralPage(result as General);
    } else if ((result as Component | Foundation | Pattern).tabs) {
        text += getTextContentFromTopicPage(
            result as Component | Foundation | Pattern
        );
    }
    text += getTextContentFromMeta(result.meta);

    const firstMatch = text.toLowerCase().indexOf(search.toLowerCase());
    const firstIndex = Math.max(firstMatch - 30, 0);
    const lastIndex = Math.min(firstMatch + 30, text.length);

    return `${firstIndex !== 0 ? '…' : ''}${text
        .trim()
        .substring(firstIndex, lastIndex)}${
        lastIndex !== text.length ? '…' : ''
    }`;
}
