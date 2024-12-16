import React, { type FC } from "react";
import { ErrorTemplate } from "./ErrorTemplate";

export const GeneralError: FC = () => {
    return (
        <ErrorTemplate>
            <p className="jkl-body jkl-spacing-16--bottom">
                Noe gikk galt da vi prøvde å vise deg denne siden. Beklager det!
            </p>
        </ErrorTemplate>
    );
};
