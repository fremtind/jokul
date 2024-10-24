import type { Language } from 'prism-react-renderer';
import React, { type FC } from 'react';
import type { ContentBlockProps } from './types';
import { assertBlockIs } from './types';
import { CodeSnippet } from '~/components/code-snippet';

export const CodeSnippetBlock: FC<ContentBlockProps> = ({ contentBlock }) => {
    assertBlockIs('code-snippet', contentBlock);

    return (
        <CodeSnippet
            code={contentBlock.code}
            language={contentBlock.language as Language}
        />
    );
};
