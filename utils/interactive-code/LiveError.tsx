import React, { Context, useContext } from "react";
import type { ContextProps as LiveContextProps } from "react-live";
import { LiveContext } from "react-live";
import { ErrorMessage } from "../../packages/jokul/src/components/message";

export const LiveError = () => {
    const { error, code } = useContext(LiveContext as Context<LiveContextProps>);
    if (!error) {
        return null;
    }
    console.log({ error, code });
    return (
        <ErrorMessage fullWidth className="interactive-code__editor-error">
            <pre>{error}</pre>
        </ErrorMessage>
    );
};
