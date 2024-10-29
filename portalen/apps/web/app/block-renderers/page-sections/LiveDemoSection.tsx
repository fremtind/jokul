import React, { type FC } from 'react';
import { InteractiveCode } from '../../components/interactive-code';
import { useInteractiveCodeControls } from '../../components/interactive-code/useInteractiveCodeControls';
import { PageSection } from './PageSection';
import { type PageSectionProps } from './types';
import { assertSectionIs } from './types';

const emptyExample = { code: '', knobs: [], noinline: false, title: '' };

export const LiveDemoSection: FC<PageSectionProps> = ({ pageSection }) => {
    assertSectionIs('live-demo-section', pageSection);

    const {
        defaultShowEditor,
        defaultShowControls,
        codeExample,
        ...sectionProps
    } = pageSection;

    const {
        code,
        knobs,
        noinline,
        title: codeTitle,
    } = typeof codeExample === 'string' ? emptyExample : codeExample;

    const controls = useInteractiveCodeControls(code, knobs);

    if (typeof codeExample === 'string') {
        return null;
    }

    return (
        <PageSection {...sectionProps}>
            <InteractiveCode
                title={codeTitle || 'Eksempel'}
                controls={controls}
                noInline={noinline ?? false}
                defaultShowEditor={defaultShowEditor ?? false}
                defaultShowControls={defaultShowControls ?? false}
            />
        </PageSection>
    );
};
