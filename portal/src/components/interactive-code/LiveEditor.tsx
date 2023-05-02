import React from "react";
import { LiveEditor as ReactLiveEditor } from "react-live";

type LiveEditorProps = {
    onChange?: (code: string) => void;
};

export const LiveEditor = ({ onChange, ...props }: LiveEditorProps) => {
    return (
        <ReactLiveEditor
            style={{ overflow: "scroll", height: "100%", maxHeight: "400px" }}
            {...(onChange ? { onChange } : {})}
        />
    );
};
