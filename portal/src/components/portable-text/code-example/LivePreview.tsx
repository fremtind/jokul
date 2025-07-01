"use client";

import type { FC } from "react";
import {
    LiveEditor as ReactLiveEditor,
    LiveError as ReactLiveError,
    LivePreview as ReactLivePreview,
    LiveProvider as ReactLiveProvider,
} from "react-live";
import { scope } from "./component-scope";

type Props = { code: string; showEditor: boolean };

const transformCode = (code: string) => `
    const Wrapper = () => {
        ${code}
    };
    render(<Wrapper />);
`;

export const LivePreview: FC<Props> = ({ code, showEditor }) => {
    return (
        <ReactLiveProvider
            code={code}
            scope={scope}
            transformCode={transformCode}
            noInline={true}
        >
            <ReactLivePreview />
            {showEditor && <ReactLiveEditor />}
            <ReactLiveError />
        </ReactLiveProvider>
    );
};
