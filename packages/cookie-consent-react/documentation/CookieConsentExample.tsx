import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Blocking } from "./Blocking";

export const CookieConsentExample: VFC<ExampleComponentProps> = (props) => {
    return (
        <div className="jkl-cookie-consent-example">
            <Blocking {...props} />
        </div>
    );
};
