import React from "react";
import { ErrorTemplate } from "./ErrorTemplate";

export const PageNotFound = () => {
    return (
        <ErrorTemplate>
            <p className="jkl-body jkl-spacing-16--bottom">Siden du lette etter er enten flyttet, eller finnes ikke.</p>
        </ErrorTemplate>
    );
};
