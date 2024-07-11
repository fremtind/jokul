import { useBrowserPreferences } from "@fremtind/jkl-react-hooks/src";
import React from "react";
import { LiveEditor as ReactLiveEditor, type LiveEditorProps as ReactLiveEditorProps } from "react-live";
import jokulDark from "./themeDark";
import jokulLight from "./themeLight";

type LiveEditorProps = Omit<ReactLiveEditorProps, "ref">;

export const LiveEditor = ({ readOnly, ...rest }: LiveEditorProps) => {
    const { prefersColorScheme } = useBrowserPreferences();
    return (
        <ReactLiveEditor
            theme={prefersColorScheme === "light" ? jokulLight : jokulDark}
            style={{
                overflow: "auto",
                height: "100%",
                maxHeight: "400px",
            }}
            disabled={readOnly}
            tabMode="focus"
            {...rest}
        />
    );
};
