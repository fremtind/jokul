import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { Link } from "../Link.js";

export const knobs: ExampleKnobsProps = {};

export const LinkExample: FC<ExampleComponentProps> = () => {
    /* -- EXAMPLE CODE START -- */
    return (
        <div>
            <Link href="#">Lenke</Link>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
