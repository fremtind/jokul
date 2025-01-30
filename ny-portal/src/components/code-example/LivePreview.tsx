"use client";

import * as components from "@fremtind/jokul/components";
import React, { FC } from "react";
import {
    LiveEditor as ReactLiveEditor,
    LiveError as ReactLiveError,
    LivePreview as ReactLivePreview,
    LiveProvider as ReactLiveProvider,
} from "react-live";

type Props = { code: string };

const transformCode = (code: string) => `
    const Wrapper = () => {
        ${code}
    };
    render(<Wrapper />);
`;

export const LivePreview: FC<Props> = ({ code }) => {
    return (
        <ReactLiveProvider
            code={code}
            scope={{ ...components, ...React }}
            transformCode={transformCode}
            noInline={true}
        >
            <ReactLivePreview />
            <ReactLiveEditor />
            <ReactLiveError />
        </ReactLiveProvider>
    );
};
