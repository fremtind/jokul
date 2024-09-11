import React, { Context, useContext } from "react";
import type { ContextProps as LiveContextProps } from "react-live";
import { LiveContext } from "react-live";
import { ErrorMessage } from "../../packages/message-react/src";

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
