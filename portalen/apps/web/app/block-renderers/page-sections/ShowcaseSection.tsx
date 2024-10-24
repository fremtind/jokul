import React, { type FC } from 'react';
import { Showcase } from '../../components/showcase';
import { PageSection } from './PageSection';
import { type PageSectionProps } from './types';
import { assertSectionIs } from './types';

export const ShowcaseSection: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs('showcase-section', pageSection);

    const { showcaseItem, ...sectionProps } = pageSection;

    if (!showcaseItem || showcaseItem.length === 0) {
        return null;
    }

    return (
        <PageSection {...sectionProps}>
            {showcaseItem.map((item) => (
                <Showcase
                    key={item.title}
                    title={item.title}
                    source={item.src}
                    example={item.example}
                    from={item.origin}
                >
                    {item.description}
                </Showcase>
            ))}
        </PageSection>
    );
};
