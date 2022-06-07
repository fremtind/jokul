import React, { FC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Blocking } from "./Blocking";

export const CookieConsentExample: FC<ExampleComponentProps> = (props) => {
    return (
        <div className="jkl-cookie-consent-example">
            <Blocking {...props} />
        </div>
    );
};
