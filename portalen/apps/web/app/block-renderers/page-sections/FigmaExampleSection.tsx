import React, { type FC } from 'react';
import { FigmaExample } from '../../components/figma-example/figma-example';
import { PageSection } from './PageSection';
import { type PageSectionProps } from './types';
import { assertSectionIs } from './types';

export const FigmaExampleSection: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs('figma-example-section', pageSection);

    const { examples, ...sectionProps } = pageSection;
    if (!examples || examples.length === 0) {
        return null;
    }

    return (
        <PageSection {...sectionProps}>
            <FigmaExample examples={examples} />
        </PageSection>
    );
};
