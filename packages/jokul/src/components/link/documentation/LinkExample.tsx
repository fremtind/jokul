import React, { FC } from "react";
import { Link } from "..";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../utils/dev-example";

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
