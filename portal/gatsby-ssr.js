import React from "react";

("use strict");

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    setPostBodyComponents([
        <div
            key={pluginOptions.key ? pluginOptions.key : "toaster-portal"}
            id={pluginOptions.id ? pluginOptions.id : "toaster-portal"}
        >
            {pluginOptions.text}
        </div>,
    ]);
};
