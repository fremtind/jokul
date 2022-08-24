import React, { useContext } from "react";
import { LiveContext, LiveEditor as ReactLiveEditor } from "react-live";
import { CodeBlock } from "../Typography";

type LiveEditorProps = {
    onChange?: (code: string) => void;
};
export const LiveEditor = ({ onChange, ...props }: LiveEditorProps) => {
    const liveContext = useContext(LiveContext);

    if (!liveContext.code) {
        return null;
    }

    return <ReactLiveEditor style={{ overflow: "scroll", height: "100%" }} {...(onChange ? { onChange } : {})} />;
};
