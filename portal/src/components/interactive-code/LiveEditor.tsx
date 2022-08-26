import { useBrowserPreferences } from "@fremtind/jkl-react-hooks";
import themeDark from "prism-react-renderer/themes/vsDark";
import themeLight from "prism-react-renderer/themes/vsLight";
import React, { useContext, useEffect, useState } from "react";
import { LiveContext, LiveEditor as ReactLiveEditor } from "react-live";

type LiveEditorProps = {
    onChange?: (code: string) => void;
};
export const LiveEditor = ({ onChange, ...props }: LiveEditorProps) => {
    const liveContext = useContext(LiveContext);
    const { prefersColorScheme } = useBrowserPreferences();

    // if (!liveContext.code) {
    //     return null;
    // }

    return (
        <ReactLiveEditor
            theme={prefersColorScheme === "dark" ? themeDark : themeLight}
            style={{ overflow: "scroll", height: "100%", maxHeight: "400px" }}
            {...(onChange ? { onChange } : {})}
        />
    );
};
