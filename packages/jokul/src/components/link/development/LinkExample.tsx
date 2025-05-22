import {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import React, { FC } from "react";
import { Link } from "../Link.js";

export const knobs: ExampleKnobsProps = {
    boolProps: ["Ekstern"],
};

export const LinkExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const external = boolValues?.["Ekstern"];
    /* -- EXAMPLE CODE START -- */
    return (
        <div>
            <Link href="#" external={external}>
                Lenke
            </Link>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
