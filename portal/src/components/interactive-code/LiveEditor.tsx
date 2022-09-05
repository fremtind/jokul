import { useBrowserPreferences } from "@fremtind/jkl-react-hooks";
import themeDark from "prism-react-renderer/themes/vsDark";
import themeLight from "prism-react-renderer/themes/vsLight";
import React from "react";
import { LiveEditor as ReactLiveEditor } from "react-live";

type LiveEditorProps = {
    onChange?: (code: string) => void;
};

export const LiveEditor = ({ onChange, ...props }: LiveEditorProps) => {
    const { prefersColorScheme } = useBrowserPreferences();

    return (
        <ReactLiveEditor
            theme={prefersColorScheme === "light" ? themeLight : themeDark}
            style={{ overflow: "scroll", height: "100%", maxHeight: "400px" }}
            {...(onChange ? { onChange } : {})}
        />
    );
};
