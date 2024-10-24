import React, { type FC } from 'react';
import type { ContentBlockProps } from './types';
import { assertBlockIs } from './types';
import { AnatomyExample } from '~/components/anatomy-example/anatomy-example';
import { FigmaImage } from '~/components/figma-image/figma-image';
export const AnatomyExampleBlock: FC<ContentBlockProps> = ({
    contentBlock,
}) => {
    assertBlockIs('anatomy-example', contentBlock);

    if (!contentBlock.steps) {
        return null;
    }

    return (
        <AnatomyExample stepDescriptions={contentBlock.steps}>
            <FigmaImage
                figmaUrl={contentBlock.url}
                figmaUrlDark={contentBlock.urlDark}
                alt=""
            />
        </AnatomyExample>
    );
};
