import type { FC } from 'react';
import React from 'react';
import type { ContentBlockProps } from './types';
import { assertBlockIs } from './types';
import { InteractiveCode } from '~/components/interactive-code';
import { useInteractiveCodeControls } from '~/components/interactive-code/useInteractiveCodeControls';

const emptyExample = { code: '', knobs: [], noinline: false, title: '' };

export const LiveDemoBlock: FC<ContentBlockProps> = ({ contentBlock }) => {
    assertBlockIs('live-demo-block', contentBlock);

    const { defaultShowEditor, defaultShowControls, codeExample } =
        contentBlock;

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
        <InteractiveCode
            title={codeTitle || 'Eksempel'}
            controls={controls}
            noInline={noinline ?? false}
            defaultShowEditor={defaultShowEditor ?? false}
            defaultShowControls={defaultShowControls ?? false}
        />
    );
};
