import { type HomePage } from '@org/cms';
import React, { type FC } from 'react';
import { AnimatedPageWrapper } from '../AnimatedPageWrapper';
import { renderPageSection } from '~/block-renderers/page-sections';

export const HomePageTemplate: FC<HomePage> = ({ sections }) => {
    if (!sections) {
        return null;
    }

    return (
        <AnimatedPageWrapper className="jkl-portal-home-page">
            {sections.map((section) => renderPageSection(section))}
        </AnimatedPageWrapper>
    );
};
