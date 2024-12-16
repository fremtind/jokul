import { ErrorMessage } from "@fremtind/jokul";
import React, { type Context } from "react";
import { useContext } from "react";
import { type ContextProps as LiveContextProps } from "react-live";
import { LiveContext } from "react-live";

export const LiveError = () => {
    const { error } = useContext(LiveContext as Context<LiveContextProps>);
    if (!error) {
        return null;
    }
    return (
        <ErrorMessage fullWidth className="interactive-code__editor-error">
            <pre>{error}</pre>
        </ErrorMessage>
    );
};
